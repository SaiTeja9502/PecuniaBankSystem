import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../login/user.details';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private userDetails:UserDetails,private router:Router) { }

  ngOnInit(): void 
  { 
    if(this.userDetails.userDetails.userId == 0)
      this.router.navigate(['login']);
  }

}
