import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchfixeddepositComponent } from './searchfixeddeposit/searchfixeddeposit.component';
import { AddfixeddepositComponent } from './addfixeddeposit/addfixeddeposit.component';
import { HolderdetailsComponent } from './Views/holderdetails/holderdetails.component';
import { MessageviewComponent } from './Views/messageview/messageview.component';
import { FixeddepositsComponent } from './fixeddeposits.component';

const routes: Routes = [
                      {path:'',component:FixeddepositsComponent,children:[
                        {path:'',children:[
                      {path:'get',component:SearchfixeddepositComponent},
                      {path:'add',component:AddfixeddepositComponent},
                      {path:'holders',component:HolderdetailsComponent},
                      {path:'message',component:MessageviewComponent}]}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedDepositsRoutingModule { }
