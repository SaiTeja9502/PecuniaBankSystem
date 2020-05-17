import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanRepayment } from '../Dto/loan-repayment';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class LoanRepaymentService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getLoanRePayment(loanPayId:number)  : Observable<LoanRepayment>     
   {
      return this.httpClient.get<any>('http://localhost:8096/getLoanRePayment/'+loanPayId);
      
   }
   public getAllLoanRePayment() : Observable<LoanRepayment[]>
   {
      return this.httpClient.get<LoanRepayment[]>('http://localhost:8096/getAllLoanRePayment');
   }
   public insertLoanRePayment(loanRepayment:LoanRepayment) : Observable<String>
   {
       return this.httpClient.post<String>('http://localhost:8096/insertLoanRePayment',loanRepayment,{responseType:'text' as 'json'});
   }
   
   public deleteLoanRePayment(loanPayId:number) : Observable<String>
   {
       return this.httpClient.delete<String>('http://localhost:8096/deleteLoanRePayment/'+loanPayId,{responseType:'text' as 'json'});
   }

} 