import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-multiple-popover',
  templateUrl: './select-multiple-popover.component.html',
  styleUrls: ['./select-multiple-popover.component.scss'],
})
export class SelectMultiplePopoverComponent implements OnInit {

  // values:SELECT_OPTION[] = [];

  constructor() { }

  ngOnInit() {}

  /* multiClick(item:SELECT_OPTION) {
    const index = this.values.indexOf(item);
    if(index > -1) {
      this.values.splice(index, 1);
    } else {
      if(item.unique) {
        this.values = [item];
      } else {
        const index = this.values.findIndex(x => x.unique);
        if(index > -1) this.values.splice(index, 1);
        this.values.push(item);
      }
    }
  }
  multiSubmit() {
    this._popover.dismiss(this.values);
  } */
}
