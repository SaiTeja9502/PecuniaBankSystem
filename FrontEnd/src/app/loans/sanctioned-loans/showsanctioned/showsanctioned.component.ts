import { Component, OnInit } from '@angular/core';
import { SanctionedLoans } from '../../Dto/sanctioned-loans';
import { SanctionedLoansService } from '../../Services/sanctioned-loans.service';
import { ViewService } from '../../Services/view.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/login/user.details';

@Component({
  selector: 'app-showsanctioned',
  templateUrl: './showsanctioned.component.html',
  styleUrls: ['./showsanctioned.component.css']
})
export class ShowsanctionedComponent implements OnInit {
  sanctionedLoans:SanctionedLoans=new SanctionedLoans();
  renderer:boolean = false;
  constructor(private sanctionedLoansService:SanctionedLoansService,private viewService:ViewService,private router:Router,private userDetails:UserDetails) { }

  ngOnInit(): void 
  {
    if(this.userDetails.userDetails.designation=='Manager')
    {
      this.renderer = true;
    }
  }
  public getSanctionedLoans():void
   {
       this.sanctionedLoansService.getSanctionedLoans(this.sanctionedLoans.sanctionId).subscribe(data => {this.sanctionedLoans=data;console.log(data)} );
   }
   public deleteSanctionedLoans() : void
   {
      this.sanctionedLoansService.deleteSanctionedLoans(this.sanctionedLoans.sanctionId).subscribe(data => this.viewService.sendMessage(data));
      this.router.navigate(['/home/loans/loanmessage']);
   }

   public insertSanctionedLoans():void
   {
       this.sanctionedLoansService.insertSanctionedLoans(this.sanctionedLoans).subscribe(data =>{ this.viewService.sendMessage(data);});
       this.router.navigate(['/home/loans/loanmessage']);
   }  
}
