import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-value',
  templateUrl: './graph-value.component.html',
  styleUrls: ['./graph-value.component.scss'],
})
export class GraphValueComponent implements OnInit {

  @Input() label:string;
  @Input() value:number;

  constructor() { }

  ngOnInit() {}

}
