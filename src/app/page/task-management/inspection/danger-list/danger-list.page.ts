import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DangerEditPage } from '../danger-edit/danger-edit.page';
import { DangerDetailSearchPage } from '../danger-detail-search/danger-detail-search.page'

@Component({
  selector: 'app-danger-list',
  templateUrl: './danger-list.page.html',
  styleUrls: ['./danger-list.page.scss'],
})

export class DangerListPage implements OnInit {

  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {
    
  }

  async edit() {
    const modal = await this._modal.create({
      component: DangerEditPage,
      componentProps: {}
    });
    modal.present();
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: DangerDetailSearchPage,
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
