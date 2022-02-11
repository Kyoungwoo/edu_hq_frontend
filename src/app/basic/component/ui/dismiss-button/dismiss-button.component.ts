import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dismiss-button',
  templateUrl: './dismiss-button.component.html',
  styleUrls: ['./dismiss-button.component.scss'],
})
export class DismissButtonComponent implements OnInit {

  @HostListener('click') onClick() {
    this.dismiss();
  }

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this._modal.dismiss();
  }
}