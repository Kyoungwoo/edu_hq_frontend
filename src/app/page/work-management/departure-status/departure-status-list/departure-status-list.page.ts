import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { PartnerEditPage } from 'src/app/page/project-management/partner-management/partner-edit/partner-edit.page';

@Component({
  selector: 'app-departure-status-list',
  templateUrl: './departure-status-list.page.html',
  styleUrls: ['./departure-status-list.page.scss'],
})
export class DepartureStatusListPage implements OnInit {

  form = {
    project_id: this.user.userData.belong_data.project_id, // 현장 ID
    master_company_id: 0, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    start_date: this.date.today({ month: -1 }), // 검색 시작일
    end_date: this.date.today(), // 검색 종료일
    limit_no: 0 // limit_no
  }

  res:ConnectResult <{
    company_admin:number,
    company_worker:number,
    master_admin:number,
    master_worker:number,
    total_cnt:number,
    work_date:string,
    row_count:number
  }>

  permission = {
    edit: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private date: DateService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.getPromission();
    this.getForm();
    this.getList();
  }

  getPromission() {
    const { user_role, belong_data } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.permission.edit = true;
    } 
    else if(user_role === 'COMPANY_HEAD' && belong_data.company_contract_type === '원청사') {
      this.permission.edit = true;
    } else {
      this.permission.edit = false;
    }
  }
  getForm() {
    const { user_type, belong_data } = this.user.userData;
    if(user_type === 'LH') {
      this.form.master_company_id = 0;
    } else {
      this.form.master_company_id = belong_data.company_id;
    }
  }

  async getList(limit_no = this.form.limit_no) {
    await this.promise.wait(() => this.form.master_company_id);
    
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/work_state/list', this.form, { loading: true });
    if(this.res.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async edit(item?) {
    const modal = await this.modal.create({
      component: PartnerEditPage,
      componentProps:{
        company_id: item?.company_id,
        project_id: item?.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }

}
