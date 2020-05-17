import { Injectable } from '@angular/core';
import {Transaction} from '../Dto/transaction';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassService {
  private transactionsSource = new Subject<Transaction[]>();
  private messageSource = new Subject<String>();
  transaction$ = this.transactionsSource.asObservable();
  message$ = this.messageSource.asObservable();
  constructor() { }
  public sendTransactions(transaction:Transaction[]): void
  {
     this.transactionsSource.next(transaction);
  }
  public sendMessages(message:String):void
  {
      this.messageSource.next(message);
  }
}
