import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-attendance',
  templateUrl: './search-attendance.component.html',
  styleUrls: ['./search-attendance.component.scss'],
})
export class SearchAttendanceComponent implements OnInit {

  @Input() title;
  
  constructor() { }

  ngOnInit() {}

}
