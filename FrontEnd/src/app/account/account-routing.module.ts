import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAccountComponent } from './show-account/show-account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { MessageComponent } from './Message/message/message.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {path:'',component:AccountComponent,children:[
      {path:'',children:[
    {path:'showacc',component:ShowAccountComponent},
    {path:'addacc',component:AddAccountComponent},
    {path:'messages',component:MessageComponent}]}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
