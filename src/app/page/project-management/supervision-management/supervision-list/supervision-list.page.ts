import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SupervisionEditPage } from '../supervision-edit/supervision-edit.page';

@Component({
  selector: 'app-supervision-list',
  templateUrl: './supervision-list.page.html',
  styleUrls: ['./supervision-list.page.scss'],
})
export class SupervisionListPage implements OnInit {

  form = {
    company_contract_type: '감리사',
    hq_regional_id: this.user.userData.belong_data.hq_regional_id | 0,
    hq_business_id: this.user.userData.belong_data.hq_business_id | 0,
    limit_no: 0,
    master_company_ids: '전체',
    search_text: ''
  }

  master_company_id = this.user.userData.belong_data.master_company_id;

  res: ConnectResult <{
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
    row_count: number,
    index: number
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
  businessState: boolean = true;

  constructor(
    private modal: ModalController,
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
    this.getList(0);
    this.getCtgoBusiness();
    this.getCtgoRegional();
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;

    const res = await this.connect.run('/project/company/masters/list', this.form, { loading: true });
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if (res.rsCode === 1008) {
      this.toast.present({message:res.rsMsg, color:'warning'});
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }


  async edit(item) {
    const modal = await this.modal.create({
      component: SupervisionEditPage,
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
  async getCtgoBusiness(ev?) {
    if(!ev) this.form.hq_business_id = 0;
    this.ctgoBusiness  = await this.connect.run('/category/organization/business/get',
    {
      hq_regional_id:this.form.hq_regional_id
    },{});
    if(this.ctgoBusiness.rsCode === 0) {}
  }

}
