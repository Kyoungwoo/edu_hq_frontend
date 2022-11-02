import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { ptwList } from '../../../../dumi/test-ptw-list'  // 리스트 데이터
import { PtwEditPage } from '../ptw-edit/ptw-edit.page'
import { PtwPendingListPage } from '../ptw-pending-list/ptw-pending-list.page';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

import { PtwDetailSearchPage } from '../ptw-detail-search/ptw-detail-search.page'

@Component({
  selector: 'app-ptw-list',
  templateUrl: './ptw-list.page.html',
  styleUrls: ['./ptw-list.page.scss'],
})

export class PtwListPage implements OnInit {
  ptwList = ptwList;
  approval_cnt_answer:ApprovalAnswerType = "임시저장";

  constructor(
    private _modal: ModalController,
    private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }
  

  async edit() {
    const modal = await this._modal.create({
      component: PtwEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        // project_id: this.form.project_id,
        // risk_asment_type: this.form.risk_asment_type,
        // btn_type: 'add'
      }
    });
    modal.present();
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: PtwDetailSearchPage,
      componentProps: {
        // form: this.form
      }
    })
    modal.present();

    const { data } = await modal.onDidDismiss();

    // if(data) {
    //   this.form = data;
    //   this.get(0);
    // }
  }

    /**
   * 미결함으로 이동
   */
     async pending() {
      const modal = await this._modal.create({
        component: PtwPendingListPage,
      });
      modal.present();
    }

    /**
     * 위험공증선택시 팝업온오프
     */
    dismiss() {
      this.alert.present({
        message: '위험공증명 작업시 스마트안전장비명 사용을 권장합니다.',
        buttons: [
          { text: '확인', handler: () => {
            this._modal.dismiss();
          }}
        ]
      })
    }
}
