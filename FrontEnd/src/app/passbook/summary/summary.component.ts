import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {PassbookService} from '../Services/passbook.service';
import {Router} from '@angular/router';
import {PassService} from '../Services/pass.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  accId:number;
  startDate:String;
  endDate:String;
  constructor(private passbookService:PassbookService,private router:Router,private passService:PassService) { }

  ngOnInit(): void {
  }
  public getAccountSummary():void
  {
    
    this.passbookService.getAccountSummary(this.accId,this.startDate,this.endDate).subscribe(data => {
                this.passService.sendTransactions(data.transactions);
    },
    error => {this.passService.sendMessages(error.error);});
    this.router.navigate(['/home/passbook/view']);
}
}
