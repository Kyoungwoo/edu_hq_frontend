import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmCcDetailSearchPageModule } from '../confirm-cc-detail-search/confirm-cc-detail-search.module';
import { ConfirmCcDetailSearchPage } from '../confirm-cc-detail-search/confirm-cc-detail-search.page';

@Component({
  selector: 'app-confirm-cc-list',
  templateUrl: './confirm-cc-list.page.html',
  styleUrls: ['./confirm-cc-list.page.scss'],
})
export class ConfirmCcListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmCcDetailSearchPage,

    })
    modal.present();
  }
}
