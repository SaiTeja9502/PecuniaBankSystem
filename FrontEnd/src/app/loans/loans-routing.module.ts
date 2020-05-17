import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { SanctionedLoansComponent } from './sanctioned-loans/sanctioned-loans.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { ShowloanComponent } from './loan/showloan/showloan.component';
import { AllloanComponent } from './loan/allloan/allloan.component';
import { ShowsanctionedComponent } from './sanctioned-loans/showsanctioned/showsanctioned.component';
import { GetallsanctionedComponent } from './sanctioned-loans/getallsanctioned/getallsanctioned.component';
import { MessageComponent } from './message/message.component';
import { ShowallrequestsComponent } from './loan-request/showallrequests/showallrequests.component';
import { LoansComponent } from './loans.component';

const routes: Routes = [
    {path:'',component:LoansComponent,children:[
    {path:'loan',component:LoanComponent} ,
    {path:'request',component:LoanRequestComponent},
    {path:'sanctioned',component:SanctionedLoansComponent},
    {path:'repayment',component:LoanRepaymentComponent},
    {path:'showloan',component:ShowloanComponent},
    {path:'allloans',component:AllloanComponent},
    {path:'showsanctioned',component:ShowsanctionedComponent},
    {path:'allsanctionedloans',component:GetallsanctionedComponent},
    {path:'loanmessage',component:MessageComponent},
    {path:'showallrequests',component:ShowallrequestsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
