import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaAddPage } from './area-add/area-add.page';

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
    }
  ]
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
