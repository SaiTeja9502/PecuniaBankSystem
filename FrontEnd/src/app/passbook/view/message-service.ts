import { Component, OnInit} from '@angular/core';
import { PassService } from '../Services/pass.service';

@Component({
  selector: 'app-view',
  templateUrl: './messageservice.component.html'
})
export class MessageServiceComponent implements OnInit
{
    message:String;
    constructor(private passService:PassService) { }
  ngOnInit(): void 
  {
  	this.passService.message$.subscribe(data => this.message = data);
  }
}
