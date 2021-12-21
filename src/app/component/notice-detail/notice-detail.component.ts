import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.scss'],
})
export class NoticeDetailComponent implements OnInit {

  constructor(
    private _modal : ModalController
  ) { }

  ngOnInit() {}

  dismiss(){
    this._modal.dismiss();
  }
}
