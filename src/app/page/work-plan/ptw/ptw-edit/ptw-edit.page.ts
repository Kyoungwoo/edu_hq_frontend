import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PtwRiskEvaluationPage } from '../ptw-risk-evaluation/ptw-risk-evaluation.page'

@Component({
  selector: 'app-ptw-edit',
  templateUrl: './ptw-edit.page.html',
  styleUrls: ['./ptw-edit.page.scss'],
})
export class PtwEditPage implements OnInit {
  editable ={
    add:true,
    company_id:true,
    my_state: true
  }

  constructor(
    private _modal: ModalController,
  ) { }

  ngOnInit() {}

  async riskList() {
    const modal = await this._modal.create({
      component: PtwRiskEvaluationPage,
      componentProps: {
        // project_id: this.form.project_id,
        // risk_asment_type: this.form.risk_asment_type,
        // btn_type: 'add'
      }
    });
    modal.present();
  }
}
