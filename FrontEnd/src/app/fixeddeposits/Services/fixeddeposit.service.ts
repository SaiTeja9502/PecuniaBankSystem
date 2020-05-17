import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixedDepositService
 {

  constructor(private httpClient:HttpClient) { }
  public getFixedDepositDetails(custId:number) : Observable<any>
  {
     return this.httpClient.get<any>('http://localhost:8093/getFixedDepositDetails/fixeddepositholderid/'+custId);
  }
  public addFixedDeposit(custId:number,amount:number,duration:number,roi:number) : Observable<any>
  {
    return this.httpClient.post<any>('http://localhost:8093/addFixedDeposit/customerid/'+custId+'/amount/'+amount+'/duration/'+duration+'/roi/'+roi,null,{responseType: 'text' as 'json'});
  }
}
