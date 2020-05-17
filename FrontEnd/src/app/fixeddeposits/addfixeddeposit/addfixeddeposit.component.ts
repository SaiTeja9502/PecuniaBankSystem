import { Component, OnInit } from '@angular/core';
import { FixedDepositService } from '../Services/fixeddeposit.service';
import { DepositerService } from '../Services/depositerservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfixeddeposit',
  templateUrl: './addfixeddeposit.component.html',
  styleUrls: ['./addfixeddeposit.component.css']
})
export class AddfixeddepositComponent implements OnInit {
  custId:number;
  amount:number;
  duration:number;
  rate:number;
  constructor(private fixedDepositService:FixedDepositService,private depositerService:DepositerService,private router:Router) { }

  ngOnInit(): void
  {
  }
  addFixedDeposit() : void
  {
     this.fixedDepositService.addFixedDeposit(this.custId,this.amount,this.duration,this.rate).subscribe(data => this.depositerService.sendMessage(data));
     this.router.navigate(['/home/fixeddeposits/message']); 
    }
}
