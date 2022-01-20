import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
})
export class InputGroupComponent implements OnInit {

  @Input() color:Color;
  @Input() label:string;
  @Input() required:boolean;

  constructor() { }

  ngOnInit() {}

}
