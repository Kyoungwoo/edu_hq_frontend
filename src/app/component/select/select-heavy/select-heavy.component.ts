import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchHeavyComponent } from '../../modal/search-heavy/search-heavy.component';

@Component({
  selector: 'app-select-heavy',
  templateUrl: './select-heavy.component.html',
  styleUrls: ['./select-heavy.component.scss'],
})
export class SelectHeavyComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async heavy(){
    const modal = await this._modal.create({
      component:SearchHeavyComponent
    });
    modal.present();
  }
}

