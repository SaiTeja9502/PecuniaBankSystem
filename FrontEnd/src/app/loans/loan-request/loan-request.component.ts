import { Component, OnInit } from '@angular/core';
import { LoanRequestService } from '../Services/loan-request.service';
import { LoanRequest } from '../Dto/loan-request';
import { ViewService } from '../Services/view.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit   
{
  
   loanRequest:LoanRequest=new LoanRequest();
   public constructor(private loanRequestService:LoanRequestService,private viewService:ViewService,private router:Router){}
   public getLoanRequest():void
   {
       this.loanRequestService.getLoanRequest(this.loanRequest.requestId).subscribe(data => this.loanRequest=data );
   }
   public deleteLoanRequest() : void
   {
      this.loanRequestService.deleteLoanRequest(this.loanRequest.requestId).subscribe(data => this.viewService.sendMessage(data),error => this.viewService.sendMessage(error.error));
      this.router.navigate(['/home/loans/loanmessage']);
   }

   public insertLoanRequest():void
   {
       this.loanRequestService.insertLoanRequest(this.loanRequest).subscribe(data => this.viewService.sendMessage(data),error => this.viewService.sendMessage(error.error));
       this.router.navigate(['/home/loans/loanmessage']);
   }
   public showAllRequests():void
   {
     this.router.navigate(['/home/loans/showallrequests']);
   }
   ngOnInit(): void {
  }
}
