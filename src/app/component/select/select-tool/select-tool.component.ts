import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchToolComponent } from '../../modal/search-tool/search-tool.component';

@Component({
  selector: 'app-select-tool',
  templateUrl: './select-tool.component.html',
  styleUrls: ['./select-tool.component.scss'],
})
export class SelectToolComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async tool(){
    const modal = await this._modal.create({
      component:SearchToolComponent
    });
    modal.present();
  }
}
