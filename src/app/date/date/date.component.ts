import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  mydate:string="2020-01-03";

  constructor() { }

  ngOnInit(): void {
  }

  isLater(dateString1:string, dateString2:string) {
    return dateString1 > dateString2
  }
}
