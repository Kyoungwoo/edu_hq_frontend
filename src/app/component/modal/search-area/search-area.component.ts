import { SearchDangerousAreaComponent } from './../search-dangerous-area/search-dangerous-area.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

class Area1 {
  area_top_name: string;
  area_top_id: number;
}
class Area2 {
  area_middle_name: string;
  area_top_id: number;
  area_middle_id: number;
}
class Area3 {
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
  @Input() selectType: 'manual' | 'auto' = 'auto';

  areaView1:boolean;
  areaView2:boolean;
  areaView3:boolean;

  area1:ConnectResult <Area1>;
  area2:ConnectResult <Area2>
  area3:ConnectResult <Area3>
  area1selectedItem:Area1;
  area2selectedItem:Area2;
  area3selectedItem:Area3;

  constructor(
    private connect: ConnectService, 
    private _modal: ModalController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.area1Get();
    }, 300);
  }

  async area1Get() {
    this.area1 = await this.connect.run('/category/area/top/get', { project_id:this.project_id });
    if(this.area1.rsCode === 0) {};
  }

  async area2Get(item) {
    this.area3 = null;
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
  
  item1Click(item:Area1) {
    this.area1selectedItem = item;
    this.area2selectedItem = null;
    this.area3selectedItem = null;
    this.area2 = null;
    this.area3 = null;
    this.area2Get(item);
  }
  item2Click(item:Area2) {
    this.area2selectedItem = item;
    this.area3Get(item);
  }
  item3Click(item:Area3) {
    this.area3selectedItem = item;
    // this.addRiskItem();
    // this.get4(); 현재 감소대책 입력은 직접입력 뿐
  }

  area3Click(item:Area3) {
    
  }

  submit() {
    this._modal.dismiss({
      area1selectedItem:this.area1selectedItem,
      area2selectedItem:this.area2selectedItem,
      area3selectedItem:this.area3selectedItem,
      selectType: 'auto'
    })
  }
  public async openModal() {
    const modal = await this._modal.create({
      component: SearchDangerousAreaComponent,
      componentProps: {
        project_id: this.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log(data);
      setTimeout(() => {
        this._modal.dismiss({areaSelectedItem: data, selectType: 'manual'});
      },300);
    }
  }
}