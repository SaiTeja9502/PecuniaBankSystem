import { Component, OnInit } from '@angular/core';
import { FixedDepositService } from '../Services/fixeddeposit.service';
import {DepositerService} from '../Services/depositerservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchfixeddeposit',
  templateUrl: './searchfixeddeposit.component.html',
  styleUrls: ['./searchfixeddeposit.component.css']
})
export class SearchfixeddepositComponent implements OnInit {
  depositHolderId:number;
  constructor(private fixedDepositService:FixedDepositService,private depositerService:DepositerService,private router:Router) { }

  ngOnInit(): void 
  {
  }
  getFixedDepositDetails() : void
  {
    this.fixedDepositService.getFixedDepositDetails(this.depositHolderId).subscribe(data => this.depositerService.sendTransactions(data));
    this.router.navigate(['/home/fixeddeposits/holders']);
  }
}
