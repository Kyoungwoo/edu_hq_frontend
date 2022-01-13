import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupervisionEditPage } from 'src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.page';

@Component({
  selector: 'app-supervision-approval-list',
  templateUrl: './supervision-approval-list.page.html',
  styleUrls: ['./supervision-approval-list.page.scss'],
})
export class SupervisionApprovalListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:SupervisionEditPage
    });
    modal.present();
  }
}
