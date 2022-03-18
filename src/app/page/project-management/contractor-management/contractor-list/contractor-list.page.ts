import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ContractorEditPage } from '../contractor-edit/contractor-edit.page';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.page.html',
  styleUrls: ['./contractor-list.page.scss'],
})
export class ContractorListPage implements OnInit {

  form = {
    project_id: this.user.userData.belong_data.project_id,
    company_contract_type: '원청사',
    hq_regional_id: this.user.userData.belong_data.hq_regional_id,
    hq_business_id: this.user.userData.belong_data.hq_business_id || 0,
    limit_no: 0,
    master_company_ids: [],
    search_text: ''
  }

  res:ConnectResult <{
    index: number,
    contract_end_date: string, // ~ 공사기간
    hq_business_name: string, // 사업본부
    project_id: number, // 현장 ID
    hq_regional_id: number, // 지역본부 ID
    hq_business_id: number, // 사업본부 ID
    project_code: string, // 현장 코드
    hq_regional_name: string, // 지역본부
    project_name: string, // 현장명
    // contract_start_date: string, // 공사기간 ~
    // project_use_state: number, // 1 사용, 0 미사용
    update_date: string, // 최근 업데이트
    business_register_no: string,
    company_ceo: string,
    company_id: number,
    company_name: string,
    create_user_id: number,
    create_user_name: string,
    row_count: number
  }>

  ctgoRegional: ConnectResult<{
    hq_regional_name: string,
    hq_regional_entire_state: number,
    hq_regional_code: string,
    hq_regional_id: number
  }>

  ctgoBusiness: ConnectResult<{
    hq_business_name: string,
    hq_business_entire_state: number,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number
  }>
  
  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.ctgoBusiness = {
      errorStatus: null,
      rsCode: null,
      rsObj: null,
      rsMsg: '',
      rsMap: [],
      rqMethod: ''
    }
    
    this.getList();
    this.getCtgoBusiness();
    this.getCtgoRegional();
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/project/company/masters/list',this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component:ContractorEditPage,
      componentProps:{
        company_id:item.company_id,
        project_id:item.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.getList();
  }

  async getCtgoRegional() {
    this.ctgoRegional  = await this.connect.run('/category/organization/regional/get',{},{});
    if(this.ctgoRegional.rsCode === 0) {
    }
  }
 async getCtgoBusiness() {
    this.ctgoBusiness.rsMap = [];
    if(this.form.hq_regional_id) this.ctgoBusiness = await this.connect.run('/category/organization/business/get',
    {
      hq_regional_id:this.form.hq_regional_id
    },{});

    // if(this.ctgoRegional.rsCode === 0) {
    // }
  }
}
