import { Component, OnInit } from '@angular/core';
import {Cheque} from '../dto/cheque';
import { TransactionService } from '../Services/transaction.service';
import { TransService } from '../Services/trans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chequedebit',
  templateUrl: './chequedebit.component.html',
  styleUrls: ['./chequedebit.component.css']
})
export class ChequedebitComponent implements OnInit {
  accId:number;
  cheque:Cheque = new Cheque();
  message:String;
  constructor(private transactionService:TransactionService,private transService:TransService,private route:Router) { }

  ngOnInit(): void {
  }
  debitUsingCheque():void
  {
    this.transactionService.debitUsingCheque(this.accId,this.cheque).subscribe(msg => this.transService.sendTransactions(msg),error => {this.transService.sendTransactions(error.error)});
    this.route.navigate(['/home/transactions/transview']);
  }
}
