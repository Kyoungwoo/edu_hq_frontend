import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.fill) _class.push(`card-${this.fill}`);
    return _class.join(' ');
  }

  @Input() button:boolean = true;
  @Input() color:Color = 'white';
  @Input() fill:'translucent' | 'translucent-outline';
  @Input() href:string | SafeUrl;
  @Input() download:string;

  constructor(
  ) { }

  ngOnInit() {}
}