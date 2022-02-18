import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PartnerEditPage } from '../partner-edit/partner-edit.page';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.page.html',
  styleUrls: ['./partner-list.page.scss'],
})
export class PartnerListPage implements OnInit {

  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: 0,
    search_text: '',
    limit_no: 0
  }

  res:ConnectResult <{
    company_phone: string,
    create_user_id: number,
    company_id: number,
    create_user_name: string,
    project_id: number,
    business_register_no: string,
    company_name: string,
    ctgo_construction_name: string,
    company_ceo: string,
    project_name: string,
    master_company_name: string,
    update_date: string,
    row_count: number
  }>

  permission = {
    edit: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService
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
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/project/company/partner/list', this.form, { loading: true });
    if(this.res.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async edit(item?) {
    const modal = await this.modal.create({
      component:PartnerEditPage,
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
