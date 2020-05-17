import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Login} from './user';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private httpClient:HttpClient) { }

  public getLogin(userId:number,password:string): Observable<Login>
  {
    return this.httpClient.post<any>('http://localhost:9090/login/userId/'+userId+'/password/'+password,null);
  }
}
