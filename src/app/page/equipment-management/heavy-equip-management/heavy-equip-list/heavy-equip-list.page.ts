import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeavyEquipEditPage } from '../heavy-equip-edit/heavy-equip-edit.page';

@Component({
  selector: 'app-heavy-equip-list',
  templateUrl: './heavy-equip-list.page.html',
  styleUrls: ['./heavy-equip-list.page.scss'],
})
export class HeavyEquipListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }


  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:HeavyEquipEditPage,
    });
    modal.present();
  }
}
