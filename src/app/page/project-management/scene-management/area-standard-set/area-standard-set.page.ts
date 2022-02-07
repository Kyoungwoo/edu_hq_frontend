import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AreaAddPage } from '../area-add/area-add.page';

@Component({
  selector: 'app-area-standard-set',
  templateUrl: './area-standard-set.page.html',
  styleUrls: ['./area-standard-set.page.scss'],
})
export class AreaStandardSetPage implements OnInit {

  menuCount:Number = 1;
  resAreaOne:ConnectResult <{
    area_top_name: string,
    area_top_id: number
  }>;

  AreaOneForm = {
    project_id:0
  }

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
    private modal: ModalController,
    private connect: ConnectService
  ) { }

  ngOnInit() {
  }

  async getArea() {
    const res = await this.connect.run('/project/area/top/get', )
  }

  async areaAdd(area){
      console.log("area",area);
    const modal =  await this.modal.create({
      component:AreaAddPage,
      componentProps:{area},
      cssClass:'lhOrganization'
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    console.log('dsfasdfasdf',data);
    // if(data) this.testarr.push({text:data.text});
  }
}
