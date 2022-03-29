import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-process-popup',
  templateUrl: './confirm-process-popup.component.html',
  styleUrls: ['./confirm-process-popup.component.scss'],
})
export class ConfirmProcessPopupComponent implements OnInit {

  form = {
    approval_answer: '승인',
    approval_comment: null
  }

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  submit() {
    this._modal.dismiss(this.form);
  }
}
