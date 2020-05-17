import { Component, OnInit } from '@angular/core';
import { Cheque } from '../dto/cheque';
import { TransactionService } from '../Services/transaction.service';
import { TransService } from '../Services/trans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chequecredit',
  templateUrl: './chequecredit.component.html',
  styleUrls: ['./chequecredit.component.css']
})
export class ChequecreditComponent implements OnInit {
  accId:number;
  cheque:Cheque = new Cheque();
  message:String;
  constructor(private transactionService:TransactionService,private transService:TransService,private route:Router) {}

  ngOnInit(): void {
  }
  creditUsingCheque():void
  {
    this.transactionService.creditUsingCheque(this.accId,this.cheque).subscribe(msg => this.transService.sendTransactions(msg),error => {this.transService.sendTransactions(error.error)});
    this.route.navigate(['/home/transactions/transview']);
  }
}
