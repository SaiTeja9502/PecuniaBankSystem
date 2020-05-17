import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
                      {path:'home',component:HomeComponent,children:[
                      {path: 'passbook',
                      loadChildren: () => import('./passbook/passbook.module').then(m => m.PassbookModule)
                      },
                      {path: 'transactions',
                      loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
                      },
                      {path: 'fixeddeposits',
                      loadChildren: () => import('./fixeddeposits/fixeddeposits.module').then(m => m.FixeddepositsModule)
                      },
                      {path: 'account',
                      loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
                      },
                      {path: 'loans',
                      loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule)
                      }]},
                      {path:'login',component:LoginComponent},
                      {path:'**',redirectTo:''}
                      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
