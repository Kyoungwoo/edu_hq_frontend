import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {

  @Input() value:any = null;
  @ViewChild('text') text:ElementRef;
  @Input() unique:boolean = false;

  constructor() { }
  ngOnInit() {}
}