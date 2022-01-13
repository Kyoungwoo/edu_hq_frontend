import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LhApprovalEditPage } from '../lh-approval-edit/lh-approval-edit.page';

@Component({
  selector: 'app-lh-approval-list',
  templateUrl: './lh-approval-list.page.html',
  styleUrls: ['./lh-approval-list.page.scss'],
})
export class LhApprovalListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:LhApprovalEditPage
    });
    modal.present();
  }
}
