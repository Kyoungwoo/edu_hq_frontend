import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {}
}
