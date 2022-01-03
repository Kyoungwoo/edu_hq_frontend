import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmCcDetailSearchPage } from '../confirm-cc-detail-search/confirm-cc-detail-search.page';
import { ConfirmObtainDetailSearchPage } from '../confirm-obtain-detail-search/confirm-obtain-detail-search.page';

@Component({
  selector: 'app-confirm-obtain-list',
  templateUrl: './confirm-obtain-list.page.html',
  styleUrls: ['./confirm-obtain-list.page.scss'],
})
export class ConfirmObtainListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmObtainDetailSearchPage,

    })
    modal.present();
  }
}
