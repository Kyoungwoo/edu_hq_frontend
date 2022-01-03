import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeavyDeviceDetailSearchPage } from '../heavy-device-detail-search/heavy-device-detail-search.page';

@Component({
  selector: 'app-heavy-device-list',
  templateUrl: './heavy-device-list.page.html',
  styleUrls: ['./heavy-device-list.page.scss'],
})
export class HeavyDeviceListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: HeavyDeviceDetailSearchPage,

    })
    modal.present();
  }
}
