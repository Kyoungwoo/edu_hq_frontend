import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { MsdsEditPage } from '../msds-edit/msds-edit.page';

@Component({
  selector: 'app-msds-list',
  templateUrl: './msds-list.page.html',
  styleUrls: ['./msds-list.page.scss'],
})
export class MsdsListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage
    });
    modal.present();
  }
  async edit() {
    const modal = await this.modal.create({
      component:MsdsEditPage,
    });
    modal.present();
  }
}
