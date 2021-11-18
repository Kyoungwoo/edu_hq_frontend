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

  @Input() set size(_size:string | number) {
    _size = String(_size);
    if(_size === 'auto') {
      this._style = 'flex: 0 0 auto; width: auto;';
    }
    else if(_size.includes('px') || _size.includes('%')) {
      this._style = `
        flex: 0 0 ${_size};
        width: ${_size};
        max-width: ${_size};
      `;
    } 
    else {
      this._style = `
        flex: 0 0 calc(calc(${_size} / var(--ion-grid-columns, 12)) * 100%);
        width: calc(calc(${_size} / var(--ion-grid-columns, 12)) * 100%);
        max-width: calc(calc(${_size} / var(--ion-grid-columns, 12)) * 100%);
      `;
    }
  };

  private _style:string;

  constructor() { }

  ngOnInit() {}

}
