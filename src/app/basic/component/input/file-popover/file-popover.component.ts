import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-file-popover',
  templateUrl: './file-popover.component.html',
  styleUrls: ['./file-popover.component.scss'],
})
export class FilePopoverComponent implements OnInit {

  constructor(
    private _popover: PopoverController
  ) { }

  ngOnInit() {}

  edit() {
    this._popover.dismiss('edit');
  }
  remove() {
    this._popover.dismiss('remove');
  }

}
