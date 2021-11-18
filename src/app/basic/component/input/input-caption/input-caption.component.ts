import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-caption',
  templateUrl: './input-caption.component.html',
  styleUrls: ['./input-caption.component.scss'],
})
export class InputCaptionComponent implements OnInit {

  @Input() color:string = "";
  @Input() icon:string = null;

  constructor() { }

  ngOnInit() {}

}
