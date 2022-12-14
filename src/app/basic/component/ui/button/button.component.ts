import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Color } from '@ionic/core';

export type ButtonFill = 'clear' | 'default' | 'outline' | 'solid' | 'translucent' | 'translucent-outline';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'ion-activatable'
  }
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
  
  @Input() color:Color;
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() disabled:boolean = false;
  @Input() fill:'clear' | 'default' | 'outline' | 'solid' | 'translucent' | 'translucent-outline';
  @Input() shape:'round' | 'circle' | 'square';
  @Input() size:'default' | 'small';
  @Input() href:string | SafeUrl;
  @Input() routerLink:string;
  @Input() download:string;
  @Input() target:string;

  get innerHTML() {
    return this.el.nativeElement.innerHTML;
  }
  get offsetWidth() {
    return this.el.nativeElement.offsetWidth;
  }
  
  constructor(
    public el: ElementRef<HTMLElement>
  ) {}
 
  ngOnInit() {
  }

}