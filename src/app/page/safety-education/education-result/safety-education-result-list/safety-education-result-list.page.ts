import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EducationConfirmPendingListPage } from '../education-confirm-pending-list/education-confirm-pending-list.page';
import { NewWriteTargetPage } from '../new-write-target/new-write-target.page';
import { SafetyEducationResultDetailSearchPage } from '../safety-education-result-detail-search/safety-education-result-detail-search.page';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-safety-education-result-list',
  templateUrl: './safety-education-result-list.page.html',
  styleUrls: ['./safety-education-result-list.page.scss'],
})
export class SafetyEducationResultListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationResultDetailSearchPage,

    })
    modal.present();
  }

  async edit() {
    const modal = await this._modal.create({
      component:NewWriteTargetPage,
    });
    modal.present();
  }

  async pending() {
    const modal = await this._modal.create({
      component:EducationConfirmPendingListPage,
    });
    modal.present();
  }
}
