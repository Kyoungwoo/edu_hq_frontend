import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkerApprovalEditPage } from '../worker-approval-edit/worker-approval-edit.page';

@Component({
  selector: 'app-worker-approval-list',
  templateUrl: './worker-approval-list.page.html',
  styleUrls: ['./worker-approval-list.page.scss'],
})
export class WorkerApprovalListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:WorkerApprovalEditPage,
    });
    modal.present();
  }
}
