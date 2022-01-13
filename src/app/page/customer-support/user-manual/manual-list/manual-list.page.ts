import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManualDetailSearchPage } from '../manual-detail-search/manual-detail-search.page';
import { ManualEditPage } from '../manual-edit/manual-edit.page';

@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.page.html',
  styleUrls: ['./manual-list.page.scss'],
})
export class ManualListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }
  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ManualDetailSearchPage,

    })
    modal.present();
  }
  async edit() {
    const modal = await this._modal.create({
      component:ManualEditPage,
    });
    modal.present();
  }
}
