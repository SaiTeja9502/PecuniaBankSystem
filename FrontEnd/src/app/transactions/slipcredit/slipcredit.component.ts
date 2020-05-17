import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../Services/transaction.service';
import { TransService } from '../Services/trans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slipcredit',
  templateUrl: './slipcredit.component.html',
  styleUrls: ['./slipcredit.component.css']
})
export class SlipcreditComponent implements OnInit {
  accId:number;
  amount:number;
  slipno:number;
  constructor(private transactionService:TransactionService,private transService:TransService,private route:Router) { }

  ngOnInit(): void {
  }
  creditUsingSlip():void
  {
    this.transactionService.creditUsingSlip(this.accId,this.amount,this.slipno).subscribe(msg => this.transService.sendTransactions(msg),error => {this.transService.sendTransactions(error.error)});
    this.route.navigate(['/home/transactions/transview']);
  }
}
