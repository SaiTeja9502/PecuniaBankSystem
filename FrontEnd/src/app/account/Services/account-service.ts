import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Dto/account';
@Injectable({
    providedIn:'root'
})
export class AccountService
{
    public constructor(private httpClient:HttpClient){ }

    public showAccount(accountId:number) :Observable<any>
    {
        return this.httpClient.get<any>('http://localhost:8092/getAccount/'+accountId);
    }

    public addAccount(account:Account):Observable<any>
    {
        return this.httpClient.post<any>('http://localhost:8092/addAccount',account,{responseType:'text' as 'json'});
        
    }

    public updateAccount(account:Account):Observable<any>
    {
        return this.httpClient.put<any>('http://localhost:8092/updateAccount',account,{responseType:'text' as 'json'});
        
    }

    public deleteAccount(accountId:number):Observable<any>
    {
        return this.httpClient.delete<any>('http://localhost:8092/deleteAccount/'+accountId,{responseType:'text' as 'json'});
        
    }

}