import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-msds-edit',
  templateUrl: './msds-edit.component.html',
  styleUrls: ['./msds-edit.component.scss'],
})
export class MsdsEditComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}

  dismiss(){
    this._modal.dismiss();
  }
}
