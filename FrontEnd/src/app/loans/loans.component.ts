import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../login/user.details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(private userDetails:UserDetails,private router:Router) { }

  ngOnInit(): void 
  {
    if(this.userDetails.userDetails.userId == 0)
      this.router.navigate(['login']);
  }

}
