import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountService } from './Services/account-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AddAccountComponent } from './add-account/add-account.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { MessageComponent } from './Message/message/message.component';
import { AccountRoutingModule } from './account-routing.module';
@NgModule({
  
   declarations: [
    AccountComponent,
    AddAccountComponent,
    ShowAccountComponent,
    MessageComponent,
  ],
 
   imports: [ CommonModule,FormsModule,AccountRoutingModule ],
  
   providers: [ AccountService ]
})
export class AccountModule
{
}