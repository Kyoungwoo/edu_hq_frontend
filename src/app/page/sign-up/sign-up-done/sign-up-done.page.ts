import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up-done',
  templateUrl: './sign-up-done.page.html',
  styleUrls: ['./sign-up-done.page.scss'],
})
export class SignUpDonePage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
    
  }

  dismiss() {
    this._modal.dismiss();
  }
}
