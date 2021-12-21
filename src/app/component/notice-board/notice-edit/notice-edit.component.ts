import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice-edit.component.scss'],
})
export class NoticeEditComponent implements OnInit {

  constructor(
    private _modal : ModalController
  ) { }

  ngOnInit() {}

  dismiss(){
    this._modal.dismiss();
  }
}
