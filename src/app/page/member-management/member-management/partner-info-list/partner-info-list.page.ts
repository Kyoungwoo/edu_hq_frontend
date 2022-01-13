import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PartnerIntoEditPageModule } from '../partner-into-edit/partner-into-edit.module';
import { PartnerIntoEditPage } from '../partner-into-edit/partner-into-edit.page';

@Component({
  selector: 'app-partner-info-list',
  templateUrl: './partner-info-list.page.html',
  styleUrls: ['./partner-info-list.page.scss'],
})
export class PartnerInfoListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:PartnerIntoEditPage,
    });
    modal.present();
  }

}
