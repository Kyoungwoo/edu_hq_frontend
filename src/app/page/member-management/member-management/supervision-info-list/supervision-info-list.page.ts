import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupervisionInfoEditPage } from '../supervision-info-edit/supervision-info-edit.page';

@Component({
  selector: 'app-supervision-info-list',
  templateUrl: './supervision-info-list.page.html',
  styleUrls: ['./supervision-info-list.page.scss'],
})
export class SupervisionInfoListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:SupervisionInfoEditPage
    });
    modal.present();
  }
}
