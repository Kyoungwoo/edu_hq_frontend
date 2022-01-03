import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkerMinutesDetailSearchPage } from '../worker-minutes-detail-search/worker-minutes-detail-search.page';

@Component({
  selector: 'app-worker-minutes-list',
  templateUrl: './worker-minutes-list.page.html',
  styleUrls: ['./worker-minutes-list.page.scss'],
})
export class WorkerMinutesListPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: WorkerMinutesDetailSearchPage,

    })
    modal.present();
  }
}
