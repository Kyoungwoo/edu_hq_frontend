import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RiskEvaluationPopupPage } from '../risk-evaluation-popup/risk-evaluation-popup.page';

@Component({
  selector: 'app-risk-evaluation-edit',
  templateUrl: './risk-evaluation-edit.page.html',
  styleUrls: ['./risk-evaluation-edit.page.scss'],
})
export class RiskEvaluationEditPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async add() {
    const modal = await this._modal.create({
      component:RiskEvaluationPopupPage,

  })
  modal.present();
}
}
