import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaAddPage } from '../area-add/area-add.page';

@Component({
  selector: 'app-area-standard-set',
  templateUrl: './area-standard-set.page.html',
  styleUrls: ['./area-standard-set.page.scss'],
})
export class AreaStandardSetPage implements OnInit {

  menuCount:Number = 1;
  testarr=
  [
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    }
  ]

  // area = [
  //   {
  //     x: 126.7552019,
  //     y: 37.6090918
  //   },
  //   {
  //     x: 126.6865373,
  //     y: 37.5568537
  //   },
  //   {
  //     x: 126.9090105,
  //     y: 37.5579424
  //   },
  //   [
  //     {
  //       x: 127.2825456,
  //       y: 37.5503214
  //     }
  //   ]
  // ]


  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async areaAdd(area){
      console.log("area",area);
    const modal =  await this.modal.create({
      component:AreaAddPage,
      componentProps:{area},
      cssClass:'area-add-modal'
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    console.log('dsfasdfasdf',data);
    if(data) this.testarr.push({text:data.text});
  }
}
