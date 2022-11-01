import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LhEditPage } from '../lh-edit/lh-edit.page';
import { DailyDetailSearchPage } from '../daily-detail-search/daily-detail-search.page'

@Component({
  selector: 'app-lh-list',
  templateUrl: './lh-list.page.html',
  styleUrls: ['./lh-list.page.scss'],
})
export class LhListPage implements OnInit {

  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }

  async edit() {
    const modal = await this._modal.create({
      component: LhEditPage,
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
}
