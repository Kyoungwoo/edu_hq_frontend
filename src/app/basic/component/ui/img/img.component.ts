import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {

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
