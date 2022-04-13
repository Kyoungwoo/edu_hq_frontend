import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

class RegionalItem {
  hq_regional_code: string;
  hq_regional_entire_state: number;
  hq_regional_id: number;
  hq_regional_name: string;
}

class BusinessItem{
  hq_business_code: string;
  hq_business_entire_state: number;
  hq_business_id: number;
  hq_business_name: string;
  hq_regional_id: number;
}

@Component({
  selector: 'app-organization-select',
  templateUrl: './organization-select.page.html',
  styleUrls: ['./organization-select.page.scss'],
  animations: [ listAnimation ]
})
export class OrganizationSelectPage implements OnInit {

  regionalItem:ConnectResult<RegionalItem>;
  businessItem:ConnectResult<BusinessItem>;
  level1selectedItem: RegionalItem;
  level2selectedItem: BusinessItem;

  retrunData = {
    regName: '',
    regId: 0,
    busName: '',
    busId: 0
  }
 
  constructor(
    private connect: ConnectService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.regional();
  }
  async regional(){
    this.regionalItem = await this.connect.run('/category/organization/regional/get');
    if(this.regionalItem.rsCode === 0) {}
  }

  async business(item) {
    this.level1selectedItem = item;
    this.businessItem = await this.connect.run('/category/organization/business/get',{hq_regional_id:item.hq_regional_id})
    if(this.businessItem.rsCode === 0) {}
  }

  submit(){
    this._modal.dismiss({
      
    });
  }
}
