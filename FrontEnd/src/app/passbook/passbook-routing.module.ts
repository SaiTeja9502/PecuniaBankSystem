import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { SummaryComponent } from './summary/summary.component';
import {ViewComponent} from './view/view.component';
import { MessageServiceComponent } from './view/message-service';
import { PassbookComponent } from './passbook.component';

const routes: Routes = [
                      {path:'',component:PassbookComponent,children:[
                      {path:'update',component:UpdateComponent},
                      {path:'summary',component:SummaryComponent},
                      {path:'view',component:ViewComponent},
                      {path:'mess',component:MessageServiceComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookRoutingModule { }
