import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchEducationComponent } from '../../modal/search-education/search-education.component';
import { SearchToolComponent } from '../../modal/search-tool/search-tool.component';

@Component({
  selector: 'app-select-education',
  templateUrl: './select-education.component.html',
  styleUrls: ['./select-education.component.scss'],
})
export class SelectEducationComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async education(){
    const modal = await this._modal.create({
      component:SearchEducationComponent
    });
    modal.present();
  }
}
