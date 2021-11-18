import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() button:boolean = true;
  @Input() color:Color = 'white';
  @Input() href:string;
  @Input() download:string;

  constructor(
  ) { }

  ngOnInit() {}
}