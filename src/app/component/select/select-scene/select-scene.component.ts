import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchSceneComponent } from '../../modal/search-scene/search-scene.component';

@Component({
  selector: 'app-select-scene',
  templateUrl: './select-scene.component.html',
  styleUrls: ['./select-scene.component.scss'],
})
export class SelectSceneComponent implements OnInit {

  constructor(
    private _modal:ModalController

  ) { }

  ngOnInit() {}
  async scene(){
    const modal = await this._modal.create({
      component:SearchSceneComponent
    });
    modal.present();
  }
}