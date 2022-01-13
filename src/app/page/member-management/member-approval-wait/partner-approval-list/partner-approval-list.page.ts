import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PartnerApprovalEditPage } from '../partner-approval-edit/partner-approval-edit.page';

@Component({
  selector: 'app-partner-approval-list',
  templateUrl: './partner-approval-list.page.html',
  styleUrls: ['./partner-approval-list.page.scss'],
})
export class PartnerApprovalListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:PartnerApprovalEditPage,
    });
    modal.present();
  }
}
