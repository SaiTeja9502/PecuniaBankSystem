import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SanctionedLoans } from '../Dto/sanctioned-loans';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class SanctionedLoansService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getSanctionedLoans(sanctionId:number)  : Observable<SanctionedLoans>     
   {
      return this.httpClient.get<any>('http://localhost:8096/getSanctionedLoans/'+sanctionId);
      
   }
   public getAllSanctionedLoans() : Observable<SanctionedLoans[]>
   {
      return this.httpClient.get<SanctionedLoans[]>('http://localhost:8096/getAllSanctionedLoans');
   }
   public insertSanctionedLoans(sanctionedLoans:SanctionedLoans) : Observable<String>
   {
       return this.httpClient.post<String>('http://localhost:8096/insertSanctionedLoans',sanctionedLoans,{responseType:'text' as 'json'});
   }
   
   public deleteSanctionedLoans(sanctionId:number) : Observable<String>
   {
       return this.httpClient.delete<String>('http://localhost:8096/deleteSanctionedLoans/'+sanctionId,{responseType:'text' as 'json'});
   }

} 