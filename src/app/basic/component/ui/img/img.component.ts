import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {

  @HostBinding('style') get style() {
    const _style = [];
    if(this.height) {
      if(this.height.endsWith('px') || this.height.endsWith('%')) _style.push(`height: ${this.height}`);
      else _style.push(`height: ${this.height}px`);
    }
    if(this.width) {
      if(this.width.endsWith('px') || this.width.endsWith('%')) _style.push(`width: ${this.width}`);
      else _style.push(`width: ${this.width}px`);
    }
    return _style.join(';');
  }

  @Input() height:string;
  @Input() width:string;
  @Input() mode:'light' | 'dark' | 'theme' = 'light';
  @Input() set name(v:string) {
    this.src = `assets/basic/img/${v}.svg`;
    if(!this.mode) this.mode = 'theme';
  };
  @Input() set src(_src:string | SafeUrl) {
    this.trustSrc = typeof _src === 'string' ? _src : '';
  };

  trustSrc:string = '';

  constructor() { }

  ngOnInit() {}
}
