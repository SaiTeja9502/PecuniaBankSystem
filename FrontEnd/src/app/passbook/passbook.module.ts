import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PassbookComponent} from './passbook.component';
import {UpdateComponent} from './update/update.component';
import {SummaryComponent} from './summary/summary.component';
import {ViewComponent} from './view/view.component';
import { PassService } from './Services/pass.service';
import { PassbookService } from './Services/passbook.service';
import {FormsModule} from '@angular/forms';
import { PassbookRoutingModule } from './passbook-routing.module';
import { MessageServiceComponent } from './view/message-service';

@NgModule({
  declarations: [
    PassbookComponent,
    UpdateComponent,
    SummaryComponent,
    ViewComponent,MessageServiceComponent
  ],
  providers:[PassService,PassbookService],
  imports: [
    CommonModule,FormsModule,PassbookRoutingModule
  ]
})
export class PassbookModule { }
