import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LhInfoEditPage } from '../lh-info-edit/lh-info-edit.page';

@Component({
  selector: 'app-lh-info-list',
  templateUrl: './lh-info-list.page.html',
  styleUrls: ['./lh-info-list.page.scss'],
})
export class LhInfoListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:LhInfoEditPage,
    });
    modal.present();
  }
}
