import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
import { Loans } from '../../Dto/loan';
import { ViewService } from '../../Services/view.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/login/user.details';

@Component({
  selector: 'app-showloan',
  templateUrl: './showloan.component.html',
  styleUrls: ['./showloan.component.css']
})
export class ShowloanComponent implements OnInit {
  loan:Loans = new Loans();
  renderer:boolean = false;
  constructor(private loanService:LoanService,private viewService:ViewService,private router:Router,private userDetails:UserDetails) { }

  ngOnInit(): void 
  {
    if(this.userDetails.userDetails.designation=='Manager')
    {
      this.renderer = true;
    }
  }
  public getLoans():void
   {
       this.loanService.getLoans(this.loan.loanId).subscribe(data => this.loan=data );
   }
   public deleteLoans() : void
   {
      this.loanService.deleteLoans(this.loan.loanId).subscribe(data => this.viewService.sendMessage(data));
      this.router.navigate(['/home/loans/loanmessage']);
   }

   public insertLoans():void
   {
       this.loanService.insertLoans(this.loan).subscribe(data => this.viewService.sendMessage(data));
       this.router.navigate(['/home/loans/loanmessage']);
   }
}
