import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafetyEducationDetailEditPage } from '../safety-education-detail-edit/safety-education-detail-edit.page';
import { SafetyEducationDetailListPage } from '../safety-education-detail-list/safety-education-detail-list.page';
import { SafetyEducationDetailSearchPageModule } from '../safety-education-detail-search/safety-education-detail-search.module';
import { SafetyEducationDetailSearchPage } from '../safety-education-detail-search/safety-education-detail-search.page';

@Component({
  selector: 'app-safety-education-list',
  templateUrl: './safety-education-list.page.html',
  styleUrls: ['./safety-education-list.page.scss'],
})
export class SafetyEducationListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }
  public async edit() {
    const modal = await this._modal.create({
      component: SafetyEducationDetailListPage,

    })
    modal.present();
  }
  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationDetailSearchPage,

    })
    modal.present();
}
  public async add() {
    const modal = await this._modal.create({
      component: SafetyEducationDetailEditPage,

  })
  modal.present();
}
}