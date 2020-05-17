import { Component, OnInit } from '@angular/core';
import { Account } from '../Dto/account';
import { AccountService } from "../Services/account-service";
import { MessageService } from '../Services/message-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit 
{
  account:Account=new Account();
  msg:String;
  public constructor(private accountService:AccountService,private messageService:MessageService,private router:Router) { }
  ngOnInit(): void 
  {
  }
  public addAccount():void
  {
    console.log(this.account);
    this.accountService.addAccount(this.account).subscribe(data=>{this.messageService.sendMessages(data);});
    this.router.navigate(['messages']);
  }
}
