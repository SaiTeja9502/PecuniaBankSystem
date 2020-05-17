import { Component, OnInit,ViewChild,Input} from '@angular/core';
import {Transaction} from '../Dto/transaction';
import {UpdateComponent} from '../update/update.component';
import {PassService} from '../Services/pass.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit 
{
  trans:Transaction[]= [];
  message:String;
  renderer:boolean = true;
  constructor(private passService:PassService) { }
  ngOnInit(): void 
  {
  	this.passService.transaction$.subscribe(data => {
							for(var t of data)
							{
							  this.trans.push(t);
							}
              });
    this.passService.message$.subscribe(data=>{this.message = data;this.renderers();});
  }
  renderers():void
  {
    if(this.trans.length==0)
    {
         this.renderer =false;
    }
  }
}
