import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './user';
import { UserDetails } from './user.details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user:Login =new Login(0,'','','');
  
  constructor(private userdetails:UserDetails,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  } 
  checkUser()
  {
    if(this.user.userId && this.user.password)
    {
      this.validate(this.user.userId,this.user.password);
    }
    else
    {
      alert("Either of UserId / Password is NULL");
    }
  }
  validate(userId:number,password:string) {
      this.loginService.getLogin(userId,password).subscribe((res: any) => {
      this.user=res;
      this.userdetails.userDetails.userId=userId;
      this.userdetails.userDetails.designation=this.user.designation;
      this.userdetails.userDetails.userName=this.user.userName;
      if (this.user.designation == 'Employee' || this.user.designation == 'Manager') 
      {
        this.router.navigate(['home']);
      } 
    },
      (error) => {
        alert("invalid login credentials")
      }
    );
  }
}
