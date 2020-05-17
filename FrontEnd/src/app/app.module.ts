import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PassbookModule} from './passbook/passbook.module';
import { HomeComponent } from './home/home.component';
import { TransactionsModule } from './transactions/transactions.module';
import { FixeddepositsModule } from './fixeddeposits/fixeddeposits.module';
import { AccountModule } from './account/account.module';
import {LoansModule} from './loans/loans.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,PassbookModule,TransactionsModule,FixeddepositsModule,AccountModule,LoansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
