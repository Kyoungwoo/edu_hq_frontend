import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkerInfoEditPage } from '../worker-info-edit/worker-info-edit.page';

@Component({
  selector: 'app-worker-info-list',
  templateUrl: './worker-info-list.page.html',
  styleUrls: ['./worker-info-list.page.scss'],
})
export class WorkerInfoListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:WorkerInfoEditPage,
    });
    modal.present();
  }
}
