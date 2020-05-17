import { Component, OnInit } from '@angular/core';
import { LoanRepaymentService } from '../Services/loan-repayment.service';
import { LoanRepayment } from '../Dto/loan-repayment';
import { ViewService } from '../Services/view.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-repayment',
  templateUrl: './loan-repayment.component.html',
  styleUrls: ['./loan-repayment.component.css']
})
export class LoanRepaymentComponent implements OnInit
 {
   loanRepayment:LoanRepayment=new LoanRepayment();
   public constructor(private loanRepaymentService:LoanRepaymentService,private viewService:ViewService,private router:Router){}
   public getLoanRePayment():void
   {
       this.loanRepaymentService.getLoanRePayment(this.loanRepayment.loanPayId).subscribe(data => this.loanRepayment=data );
   }
   public deleteLoanRePayment() : void
   {
      this.loanRepaymentService.deleteLoanRePayment(this.loanRepayment.loanPayId).subscribe(data => this.viewService.sendMessage(data));
      this.router.navigate(['/home/loans/loanmessage']);
   }

   public insertLoanRePayment():void
   {
       this.loanRepaymentService.insertLoanRePayment(this.loanRepayment).subscribe(data => this.viewService.sendMessage(data));
       this.router.navigate(['/home/loans/loanmessage']);
   }
   ngOnInit(): void 
   {
   }
}


