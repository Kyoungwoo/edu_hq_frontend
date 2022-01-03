import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmCcDetailSearchPage } from '../confirm-cc-detail-search/confirm-cc-detail-search.page';
import { ConfirmPendingDetailSearchPage } from '../confirm-pending-detail-search/confirm-pending-detail-search.page';

@Component({
  selector: 'app-confirm-pending-list',
  templateUrl: './confirm-pending-list.page.html',
  styleUrls: ['./confirm-pending-list.page.scss'],
})
export class ConfirmPendingListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmPendingDetailSearchPage,

    })
    modal.present();
  }
}
