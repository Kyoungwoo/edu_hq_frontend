import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchCompanyComponent } from '../../modal/search-company/search-company.component';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss'],
})
export class SelectCompanyComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async company(){
    const modal = await this._modal.create({
      component:SearchCompanyComponent
    });
    modal.present();
  }
}
