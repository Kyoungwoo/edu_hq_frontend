import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EachDeviceAddPage } from '../each-device-add/each-device-add.page';
import { EachDeviceDetailSearchPage } from '../each-device-detail-search/each-device-detail-search.page';

@Component({
  selector: 'app-each-device-list',
  templateUrl: './each-device-list.page.html',
  styleUrls: ['./each-device-list.page.scss'],
})
export class EachDeviceListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: EachDeviceDetailSearchPage,

    })
    modal.present();
  }

  async edit() {
    const modal = await this._modal.create({
      component:EachDeviceAddPage,
    });
    modal.present();
  }
}
