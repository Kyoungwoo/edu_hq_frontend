import { Component,ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  @Input() set nameDanger(v:string) {
    this.srcDanger = `../../../../../assets/basic/img/${v}.svg`;
    if(!this.mode) this.mode = 'theme';
  };

  private _src:string | SafeUrl;
  private _srcDanger:string | SafeUrl;

  private el: ElementRef<HTMLElement>;

  @Input() set src(_src:string | SafeUrl) {
    this._src = _src;
    this.stringSrc = typeof _src === 'string' ? _src : '';
  };

  @Input() set srcDanger(_srcDanger:string | SafeUrl) {
    this._srcDanger = _srcDanger;
    this.stringSrc = typeof _srcDanger === 'string' ? _srcDanger : '';
  };

  get src() {
    return this._src;
  }

  get srcDanger() {
    return this._srcDanger;
  }

  stringSrc:string = '';

  constructor(
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit() {}
}
