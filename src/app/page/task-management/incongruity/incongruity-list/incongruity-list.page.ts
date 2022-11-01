import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IncongruityEditPage } from '../incongruity-edit/incongruity-edit.page';
import { IncongruityDetailSearchPage } from '../incongruity-detail-search/incongruity-detail-search.page';
import { IncongruityNeedPage } from '../incongruity-need/incongruity-need.page'

@Component({
  selector: 'app-incongruity-list',
  templateUrl: './incongruity-list.page.html',
  styleUrls: ['./incongruity-list.page.scss'],
})
export class IncongruityListPage implements OnInit {

  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }

  async edit() {
    const modal = await this._modal.create({
      component: IncongruityEditPage,
      componentProps: {}
    });
    modal.present();
  }

  async need() {
    const modal = await this._modal.create({
      component: IncongruityNeedPage,
      componentProps: {}
    });
    modal.present();
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: IncongruityDetailSearchPage,
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
