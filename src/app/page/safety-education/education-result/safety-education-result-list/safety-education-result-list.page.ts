import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafetyEducationResultDetailSearchPage } from '../safety-education-result-detail-search/safety-education-result-detail-search.page';

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

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationResultDetailSearchPage,

    })
    modal.present();
  }
}
