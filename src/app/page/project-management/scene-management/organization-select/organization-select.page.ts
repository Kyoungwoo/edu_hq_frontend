import { Component, OnInit } from '@angular/core';
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

  hq_regional_id
  constructor(
    private connect:ConnectService
  ) { }

  ngOnInit() {
    this.regional();
  }
  async business(item) {
    this.regionalItem.rsMap.forEach(data =>{
      if(item.hq_regional_id === data.hq_regional_id){
        data.checked = true;
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
      } else { 
        data.checked = false;
      }
    })
  }
}
