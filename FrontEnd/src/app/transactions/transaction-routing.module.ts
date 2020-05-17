import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { SlipdebitComponent } from './slipdebit/slipdebit.component';
import { ChequecreditComponent } from './chequecredit/chequecredit.component';
import { SlipcreditComponent } from './slipcredit/slipcredit.component';
import { ChequedebitComponent } from './chequedebit/chequedebit.component';
import { TransactionviewComponent } from './transactionview/transactionview.component';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
                      {path:'',component:TransactionsComponent,children:[
                      {path:'credit',component:CreditComponent},
                      {path:'debit',component:DebitComponent},
                      {path:'dus',component:SlipdebitComponent},
                      {path:'duc',component:ChequedebitComponent},
                      {path:'cus',component:SlipcreditComponent},
                      {path:'cuc',component:ChequecreditComponent},
                      {path:'transview',component:TransactionviewComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
