import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PartnerEditPage } from '../partner-edit/partner-edit.page';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.page.html',
  styleUrls: ['./partner-list.page.scss'],
})
export class PartnerListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:PartnerEditPage,
    });
    modal.present();
  }
}
