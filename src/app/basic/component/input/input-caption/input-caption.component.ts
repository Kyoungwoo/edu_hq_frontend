import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-input-caption',
  templateUrl: './input-caption.component.html',
  styleUrls: ['./input-caption.component.scss'],
})
export class InputCaptionComponent implements OnInit {

  @Input() color:Color = 'warning';
  @Input() icon:string = null;

  constructor() { }

  ngOnInit() {}

}
