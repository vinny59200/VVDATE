import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';



@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule
  ],
  exports: [DateComponent],
})
export class DateModule { }
