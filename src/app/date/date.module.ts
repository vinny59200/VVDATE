import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import {DatePipe} from '@angular/common';



@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule
  ],
  exports: [DateComponent],
  providers: [DatePipe],
})
export class DateModule { }
