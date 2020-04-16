import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  mydate: string = "2019-01-03";

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  isLater() {
    let today = new Date().toLocaleDateString();
    return this.mydate > this.datePipe.transform(today,"yyyy-MM-dd");
  }
}
