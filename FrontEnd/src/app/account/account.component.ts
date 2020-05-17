import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { UserDetails } from '../login/user.details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private userDetails:UserDetails,private router:Router) { }

  ngOnInit() 
  {
    if(this.userDetails.userDetails.userId == 0)
        this.router.navigate(['login']);
  }

}
