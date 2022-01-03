import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmProgressDetailSearchPage } from '../confirm-progress-detail-search/confirm-progress-detail-search.page';

@Component({
  selector: 'app-confirm-progress-list',
  templateUrl: './confirm-progress-list.page.html',
  styleUrls: ['./confirm-progress-list.page.scss'],
})
export class ConfirmProgressListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmProgressDetailSearchPage,

    })
    modal.present();
  }
}
