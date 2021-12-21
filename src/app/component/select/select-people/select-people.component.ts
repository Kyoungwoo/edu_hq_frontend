import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPeopleComponent } from '../../modal/search-people/search-people.component';

@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.scss'],
})
export class SelectPeopleComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async people(){
    const modal = await this._modal.create({
      component:SearchPeopleComponent
    });
    modal.present();
  }
}
