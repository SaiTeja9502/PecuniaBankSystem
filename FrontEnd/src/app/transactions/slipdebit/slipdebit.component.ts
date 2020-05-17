import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../Services/transaction.service';
import { TransService } from '../Services/trans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slipdebit',
  templateUrl: './slipdebit.component.html',
  styleUrls: ['./slipdebit.component.css']
})
export class SlipdebitComponent implements OnInit {
  accId:number;
  amount:number;
  slipno:number;
  message:String;
  constructor(private transactionService:TransactionService,private transService:TransService,private route:Router) { }

  ngOnInit(): void {
  }
  debitUsingSlip():void
  {
    this.transactionService.debitUsingSlip(this.accId,this.amount,this.slipno).subscribe(msg => this.transService.sendTransactions(msg),error => {this.transService.sendTransactions(error.error)});
    this.route.navigate(['/home/transactions/transview']);
  }
}
