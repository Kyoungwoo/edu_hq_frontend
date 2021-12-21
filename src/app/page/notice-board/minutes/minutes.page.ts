import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchComponent } from 'src/app/component/modal/detail-search/detail-search.component';
import { MinutesEditComponent } from 'src/app/component/notice-board/minutes-edit/minutes-edit.component';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.page.html',
  styleUrls: ['./minutes.page.scss'],
})
export class MinutesPage implements OnInit {

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
 async minutesDetail(){
    const modal = await this.modal.create({
      component:MinutesEditComponent
    });
    modal.present();
  }
}
