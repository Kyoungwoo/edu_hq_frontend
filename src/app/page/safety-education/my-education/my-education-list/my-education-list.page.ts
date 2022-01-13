import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyEducationDetailListPage } from '../my-education-detail-list/my-education-detail-list.page';

@Component({
  selector: 'app-my-education-list',
  templateUrl: './my-education-list.page.html',
  styleUrls: ['./my-education-list.page.scss'],
})
export class MyEducationListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  
  async edit() {
    const modal = await this.modal.create({
      component:MyEducationDetailListPage,
    });
    modal.present();
  }
}
