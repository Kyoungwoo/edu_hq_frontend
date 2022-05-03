import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
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
    if(this.button) _class.push(`ion-activatable ripple-parent`);
    if(this.color) _class.push(`ion-color-${this.color}`);
    if(this.fill) _class.push(`card-${this.fill}`);
    return _class.join(' ');
  }

  @Input() button:boolean = false;
  @Input() color:Color = 'white';
  @Input() fill:'translucent' | 'translucent-outline';
  @Input() href:string | SafeUrl;
  @Input() download:string;
  @Input() target:string = '_blank';
  @Input() blind:boolean = false;

  @Input() set padding(_padding:string | number) {
    this.el.nativeElement.style.setProperty('--padding', _padding);
  }

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {}
}