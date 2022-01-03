import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RiskDetailSearchPage } from '../risk-detail-search/risk-detail-search.page';

@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.page.html',
  styleUrls: ['./risk-list.page.scss'],
})
export class RiskListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: RiskDetailSearchPage,

    })
    modal.present();
  }
}
