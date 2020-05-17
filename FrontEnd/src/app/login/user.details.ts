import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserDetails
{
    userDetails:{
        userId:number;
        userName:string;
        designation:string;
    }={userId:0,userName:'',designation:''};
}