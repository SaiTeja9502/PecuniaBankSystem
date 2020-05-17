import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cheque } from '../dto/cheque';

@Injectable({
  providedIn: 'root'
})
export class TransactionService
 {
  constructor(private httpClient:HttpClient) { }
  public creditUsingSlip(accno:number,amount:number,slipno:number) : Observable<String>
  {
      return this.httpClient.get<String>('http://localhost:8091/creditusingslip/accno/'+accno+'/amount/'+amount+'/slipno/'+slipno,{responseType: 'text' as 'json'});
  }
  public debitUsingSlip(accno:number,amount:number,slipno:number) : Observable<String>
  {
      return this.httpClient.get<String>('http://localhost:8091/debitusingslip/accno/'+accno+'/amount/'+amount+'/slipno/'+slipno,{ responseType: 'text' as 'json'});
  }
  public creditUsingCheque(accno:number,cheque:Cheque) : Observable<String>
  {
      return this.httpClient.post<String>('http://localhost:8091/creditusingcheque/accountno/'+accno,cheque,{responseType: 'text' as 'json'});
  }
  public debitUsingCheque(accno:number,cheque:Cheque) : Observable<String>
  {
      return this.httpClient.post<String>('http://localhost:8091/debitusingcheque/accountno/'+accno,cheque,{responseType: 'text' as 'json'});
  }
}
