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
    if(this.fill) _class.push(`button-${this.fill}`);
    if(this.size) _class.push(`button-${this.size}`);
    if(this.shape) _class.push(`button-${this.shape}`);
    if(this.expand) _class.push(`button-${this.expand}`);
    return _class.join(' ');
  }

  @Input() color:Color = 'primary';
  @Input() disabled:boolean = false;
  @Input() expand:'block';
  @Input() fill:'clear' | 'default' | 'outline' | 'solid' | 'translucent' | 'translucent-outline' | 'additional';
  @Input() shape:'round' | 'circle' | 'square';
  @Input() size:'default' | 'large' | 'small';
  @Input() strong:boolean;
  @Input() href:string;
  @Input() download:string;
  @Input() target:string;
  constructor() { }
 
  ngOnInit() {}

}