import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `<div [style.background-color]="color"></div>`,
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {
  @Input() color = 'green';

  constructor() {}

  ngOnInit() {}
}
