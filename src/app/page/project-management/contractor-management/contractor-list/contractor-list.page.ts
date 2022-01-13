import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContractorEditPage } from '../contractor-edit/contractor-edit.page';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.page.html',
  styleUrls: ['./contractor-list.page.scss'],
})
export class ContractorListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:ContractorEditPage,
    });
    modal.present();
  }
}
