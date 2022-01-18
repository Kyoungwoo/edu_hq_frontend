import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-organization-select',
  templateUrl: './organization-select.page.html',
  styleUrls: ['./organization-select.page.scss'],
})
export class OrganizationSelectPage implements OnInit {

  businessItem:ConnectResult<{
    hq_business_name: string,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number
    checked:boolean
  }>

  regionalItem:ConnectResult<{
    hq_regional_id: number,
    hq_regional_name: string,
    hq_regional_code: string
    checked:boolean
  }>
  retrunData = {
    regName:'',
    regId:0,
    busName:'',
    busId:0
  }
  constructor(
    private connect:ConnectService,
    private _modal:ModalController
  ) { }

  ngOnInit() {
    this.regional();
  }
  async business(item) {
    this.regionalItem.rsMap.forEach(data =>{
      if(item.hq_regional_id === data.hq_regional_id){
        data.checked = true;
        this.retrunData.regName = item.hq_regional_name;
        this.retrunData.regId = item.hq_regional_id;

      } else {
        data.checked = false;
      }
    })
    this.businessItem = await this.connect.run('/category/organization/business/get',{hq_regional_id:item.hq_regional_id})
    if(this.businessItem.rsCode === 0) {
    } else { 
      this.connect.error('불러오기 실패',this.businessItem);
    }
  }
  async regional(){
    this.regionalItem = await this.connect.run('/category/organization/regional/get');
    if(this.regionalItem.rsCode === 0) {
      console.log(this.regionalItem);
    } else {
      this.connect.error('불러오기 실패',this.regionalItem)
    }
  }
  checkChange(item) {
    this.businessItem.rsMap.forEach(data => {
      if(item.hq_business_id === data.hq_business_id){
        data.checked = true;
        this.retrunData.busName = item.hq_business_name;
        this.retrunData.busId = item.hq_business_id;
      } else { 
        data.checked = false;
      }
    });
  }

  submit(){
    this._modal.dismiss(this.retrunData);
  }
}
