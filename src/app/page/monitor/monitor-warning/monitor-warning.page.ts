import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-monitor-warning',
  templateUrl: './monitor-warning.page.html',
  styleUrls: ['./monitor-warning.page.scss'],
})
export class MonitorWarningPage implements OnInit {

  constructor(
    private _modal: ModalController,
  ) {
  }

  ngOnInit() {

  }

  // async edit() {
  //   const modal = await this._modal.create({
  //     component: TbmEditPage,
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
