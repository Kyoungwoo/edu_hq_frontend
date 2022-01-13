import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SceneEditPage } from '../scene-edit/scene-edit.page';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.page.html',
  styleUrls: ['./scene-list.page.scss'],
})
export class SceneListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }
  async edit() {
    const modal = await this.modal.create({
      component:SceneEditPage,
    });
    modal.present();
  }

}
