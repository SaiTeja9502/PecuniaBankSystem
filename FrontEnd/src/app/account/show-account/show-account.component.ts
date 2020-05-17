import { Component, OnInit } from '@angular/core';
import { Account } from '../Dto/account';
import { AccountService } from '../Services/account-service';
import { MessageService } from '../Services/message-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {

  account:Account=new Account();
  public constructor(private accountService:AccountService,private messageService:MessageService,private router:Router) 
  {
  }
  ngOnInit(): void 
  {
  }
  public updateAccount():void
  {
    console.log(this.account);
    this.accountService.updateAccount(this.account).subscribe(data=>{this.messageService.sendMessages(data)});
    this.router.navigate(['/home/account/messages']);
  }
  public showAccount():void
  {
    this.accountService.showAccount(this.account.accountNo).subscribe(data=>{this.account=data;});
  }
  public deleteAccount():void
  {
    this.accountService.deleteAccount(this.account.accountNo).subscribe(data=>{this.messageService.sendMessages(data);});
    this.router.navigate(['/home/account/messages']);
  }
}
