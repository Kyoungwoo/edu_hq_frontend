import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.color) _class.push(`ion-color-${this.color}`);
    else _class.push(`ion-color-primary`);
    if(this.fill) _class.push(`button-${this.fill}`);
    if(this.size) _class.push(`button-${this.size}`);
    if(this.shape) _class.push(`button-${this.shape}`);
    return _class.join(' ');
  }

  @HostBinding('style') get style() {
    const _style = [];
    if(this.height) {
      if(typeof this.height === 'string' 
      && (this.height.endsWith('px') || this.height.endsWith('%'))) _style.push(`height: ${this.height}`);
      else _style.push(`height: ${this.height}px`);
    }
    if(this.width) {
      if(typeof this.width === 'string' 
      && (this.width.endsWith('px') || this.width.endsWith('%'))) _style.push(`width: ${this.width}`);
      else _style.push(`width: ${this.width}px`);
    }
    return _style.join(';');
  }

  @Input() height:string | number;
  @Input() width:string | number;

  @Input() color:Color;
  @Input() disabled:boolean = false;
  @Input() fill:'clear' | 'default' | 'outline' | 'solid' | 'translucent' | 'translucent-outline';
  @Input() shape:'round' | 'circle' | 'square';
  @Input() size:'default' | 'small';
  @Input() href:string;
  @Input() download:string;
  @Input() target:string;
  
  constructor() { }
 
  ngOnInit() {}

}