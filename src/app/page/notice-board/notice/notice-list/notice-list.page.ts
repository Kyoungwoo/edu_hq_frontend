import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { NoticeEditPage } from '../notice-edit/notice-edit.page';
declare var nhn:any

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
})
export class NoticeListPage implements OnInit {

  constructor(
    private modal:ModalController
  ) { }

  async ngOnInit() {
    // const modal = await this.modal.create({
    //   component:NoticeEditPage
    // });
    // modal.present();
  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage
    });
    modal.present();
  }

  async edit() {
    const modal = await this.modal.create({
      component:NoticeEditPage,
    });
    modal.present();
  }
}
