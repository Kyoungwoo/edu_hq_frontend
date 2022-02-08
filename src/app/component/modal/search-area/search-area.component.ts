import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

class area1{
  area_top_name: string;
  area_top_id: number;
 }
 class area2{
  area_middle_name: string;
  area_top_id: number;
  area_middle_id: number;
 }
 class area3{
  area_bottom_name: string;
  area_top_id: number;
  area_middle_id: number;
  area_bottom_id: number;
 }

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
  animations: [ listAnimation ]
})
export class SearchAreaComponent implements OnInit {
  @Input() project_id;


  areaView1:boolean
  areaView2:boolean
  areaView3:boolean

 area1:ConnectResult <area1>;
 area2:ConnectResult <area2>
 area3:ConnectResult <area3>
 area1selectedItem:area1;
 area2selectedItem:area2;
 area3selectedItem:area3;
  constructor(
    private connect: ConnectService, 
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.area1Get();
  }

  async area1Get() {
    this.area1 = await this.connect.run('/category/area/top/get',{project_id:this.project_id});
    if(this.area1.rsCode === 0) {};
  }

  async area2Get(item) {
    this.area1selectedItem = item;
    this.area2 = await this.connect.run('/category/area/middle/get',{area_top_id:item.area_top_id});
    if(this.area2.rsCode === 0) {};
  }

  async area3Get(item) {
    this.area2selectedItem = item;
    this.area3 = await this.connect.run('/category/area/bottom/get',{
      area_top_id:item.area_top_id,
      area_middle_id:item.area_middle_id
    });
    if(this.area1.rsCode === 0) {};
  }
  select() {
    this._modal.dismiss({
      area1selectedItem:this.area1selectedItem,
      area2selectedItem:this.area2selectedItem,
      area3selectedItem:this.area3selectedItem
    })
  }
}
