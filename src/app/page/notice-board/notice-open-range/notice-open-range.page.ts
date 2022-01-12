import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';

@Component({
  selector: 'app-notice-open-range',
  templateUrl: './notice-open-range.page.html',
  styleUrls: ['./notice-open-range.page.scss'],
})
export class NoticeOpenRangePage implements OnInit {

  menuCount:Number = 1;
  list=
  [
    {
      checked:false,
      text:'전체'
    },
    {
      checked:false,
      text:'내 소속사만'
    },
    {
      checked:false,
      text:'협력사별'
    },
  ]

  list1=
  [
    {
      checked:false,
      text:'전체(관리자+작업자)'
    },
    {
      checked:false,
      text:'관리자만'
    },
    {
      checked:false,
      text:'작업자만'
    },
  ]
  list2=
  [
    {
      checked:false,
      text:'(주)협력사1'
    },
    {
      checked:false,
      text:'(주)협력사2'
    },
    {
      checked:false,
      text:'(주)협력사3'
    },
  ]

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
