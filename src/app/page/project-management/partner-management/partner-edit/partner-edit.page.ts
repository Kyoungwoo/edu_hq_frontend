import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

export class resObj {
  business_register_no: string;
  company_ceo: string
  company_file_data: null
  company_id: number;
  company_name: string;
  company_phone: string;
  consignee_consent_date: string;
  manager_email: string;
  manager_name: string;
  manager_phone: string;
}
@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.page.html',
  styleUrls: ['./partner-edit.page.scss'],
})
export class PartnerEditPage implements OnInit {

  @Input() company_id;

  resObj:resObj = new resObj();

  resMap:Array <{
    contract_amount: string;
    contract_end_date: string;
    contract_name: string;
    contract_start_date: string;
    ctgo_construction_id: number;
    ctgo_construction_name: string;
    manager_user_id: number;
    manager_user_name: string;
    master_company_id: number;
    master_company_name: string;
    project_id: number;
    project_name: string;
  }> = [];

  Ctgoconstruction:ConnectResult <{
    ctgo_construction_id: number,
    ctgo_construction_name: string,
    project_id: number
  }>
  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    if(this.company_id){
      this.getItem();
    }
    this.getCtgoCon();
  
  }

  async getItem() {
    const res = await this.connect.run('/project/company/partner/detail',{company_id:this.company_id},{});
    if(res.rsCode === 0) {
      this.resMap = res.rsMap;
      this.resObj = res.rsObj;
      console.log("asdfasdfasdf",this.resObj);
     }
  }

  addContractInfo() {
    this.resMap.push(
      {
        contract_amount: '',
        contract_end_date: '',
        contract_name: '',
        contract_start_date: '',
        ctgo_construction_id: 0,        
        ctgo_construction_name: '',
        manager_user_id: 0,
        manager_user_name: '',
        master_company_id: 0,
        master_company_name: '',
        project_id: 0,
        project_name: ''     
      }
    )
  }
  async getCtgoCon() {
    this.Ctgoconstruction = await this.connect.run('/category/construction/get',{project_id:1});
    if(this.Ctgoconstruction.rsCode === 0) {

    }
  }
  
  
}
