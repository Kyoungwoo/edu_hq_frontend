import { Component, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-tbm-worker',
  templateUrl: './tbm-worker.page.html',
  styleUrls: ['./tbm-worker.page.scss'],
})
export class TbmWorkerPage implements OnInit {
  editable ={
    add:true,
    company_id:true,
    my_state: true
  }
  
  constructor(
    // private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }

  // async unit() {
  //   const modal = await this._modal.create({
  //     component: TbmUnitPage,
  //     componentProps: {}
  //   });
  //   modal.present();
  // }

    /**
   * 미결함으로 이동
   */
    //  async pending() {
    //   const modal = await this._modal.create({
    //     component: PtwPendingListPage,
    //   });
    //   modal.present();
    // }

    /**
     * 위험공증선택시 팝업온오프
     */
    // dismiss() {
    //   this.alert.present({
    //     message: '위험공증명 작업시 스마트안전장비명 사용을 권장합니다.',
    //     buttons: [
    //       { text: '확인', handler: () => {
    //         this._modal.dismiss();
    //       }}
    //     ]
    //   })
    // }
}
