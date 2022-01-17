import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OpenDetailSearchPage } from '../open-detail-search/open-detail-search.page';

@Component({
  selector: 'app-notify-list',
  templateUrl: './notify-list.page.html',
  styleUrls: ['./notify-list.page.scss'],
})
export class NotifyListPage implements OnInit {

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {
  }

  async openDetail() {
    const modal = await this.modal.create({
      component:OpenDetailSearchPage
    });
    modal.present();
  }
}
