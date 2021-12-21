import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchComponent } from 'src/app/component/modal/detail-search/detail-search.component';
import { MsdsEditComponent } from 'src/app/component/notice-board/msds-edit/msds-edit.component';

@Component({
  selector: 'app-msds',
  templateUrl: './msds.page.html',
  styleUrls: ['./msds.page.scss'],
})
export class MsdsPage implements OnInit {

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {
  }
  
  async detailSerach(){
    const modal = await this.modal.create({
      component:DetailSearchComponent
    });
    modal.present();
  }
  async msdsDetail(){
    const modal = await this.modal.create({
      component:MsdsEditComponent
    });
    modal.present();
  }
}
