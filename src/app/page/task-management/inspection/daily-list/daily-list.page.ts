import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DailyEditPage } from '../daily-edit/daily-edit.page';
import { DailyDetailSearchPage } from '../daily-detail-search/daily-detail-search.page';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.page.html',
  styleUrls: ['./daily-list.page.scss'],
})
export class DailyListPage implements OnInit {

  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }

  async edit() {
    const modal = await this._modal.create({
      component: DailyEditPage,
      componentProps: {}
    });
    modal.present();
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: DailyDetailSearchPage,
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
