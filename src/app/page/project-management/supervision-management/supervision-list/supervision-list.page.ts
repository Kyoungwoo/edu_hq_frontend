import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupervisionEditPage } from '../supervision-edit/supervision-edit.page';

@Component({
  selector: 'app-supervision-list',
  templateUrl: './supervision-list.page.html',
  styleUrls: ['./supervision-list.page.scss'],
})
export class SupervisionListPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component: SupervisionEditPage
    });
    modal.present();
  }
}
