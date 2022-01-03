import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DangerAreaDetailSearchPage } from '../danger-area-detail-search/danger-area-detail-search.page';

@Component({
  selector: 'app-danger-area-list',
  templateUrl: './danger-area-list.page.html',
  styleUrls: ['./danger-area-list.page.scss'],
})
export class DangerAreaListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: DangerAreaDetailSearchPage,

    })
    modal.present();
  }
}
