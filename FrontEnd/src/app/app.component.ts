import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  render:boolean = true;
  title = 'BankingSystem';
  constructor(private router:Router){}
  ngOnInit():void
  {
  }
  clicked():void
  {
    this.render=false;
    this.router.navigate(['login']);
  }
  logout():void
  {
    this.router.navigate(['login']);
  }
}
