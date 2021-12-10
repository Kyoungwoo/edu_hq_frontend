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
  //25% 4px / 4px 25% 4px / 4px 25% 4px / 4px 25%
  //25% 8px 25% 8px 25% 8px 25%
  // calc(25% - 6px) margin 8px calc(25% - 6px) margin 8px calc(25% - 6px) margin 8px calc(25% - 6px)
  @Input() set size(_size:string | number) {
    _size = String(_size);
    if(_size === 'auto') {
      this._style = 'flex: 0 0 auto; width: auto; max-width: 100%;';
    }
    else if(_size.includes('px') || _size.includes('%')) {
      this._style = `
        flex: 0 0 ${_size};
        width: ${_size};
        max-width: 100%;
      `;
      // max-width: ${_size};
    }
    else {
      const numSize = parseInt(_size);
      this._style = `
        flex: 0 0 ${numSize/12*100}%;
        width: ${numSize/12*100}%;
        max-width: ${numSize/12*100}%;
      `;
    }
  };

  private _style:string;

  constructor() { }

  ngOnInit() {}

}
