import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';

@Component({
  selector: 'app-notice-open-range',
  templateUrl: './notice-open-range.page.html',
  styleUrls: ['./notice-open-range.page.scss'],
})
export class NoticeOpenRangePage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  async ngOnInit() {
    // const modal = await this.modal.create({
    //   component:SearchAreaComponent
    // });
    // modal.present();
  }

}
