import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent implements OnInit {

  @HostBinding('style') get style() {
    return this._style;
  }
  @Input() set size(_size:string | number) { this._style = this.setStyle(_size); }

  private _style:string;

  constructor() { }

  ngOnInit() {}

  private setStyle(_size:string | number) {
    _size = String(_size);
    let style = '';
    if(_size === 'auto') {
      style = 'flex: 0 0 auto; width: auto; max-width: 100%;';
    }
    else if(_size.includes('px') || _size.includes('%') || _size.includes('em')) {
      style = `
        flex: 0 0 ${_size};
        width: ${_size};
        max-width: 100%;
      `;
    }
    else {
      const numSize = parseInt(_size);
      style = `
        flex: 0 0 ${numSize/12*100}%;
        width: ${numSize/12*100}%;
        max-width: 100%;
      `;
    }
    return style;
  }

}
