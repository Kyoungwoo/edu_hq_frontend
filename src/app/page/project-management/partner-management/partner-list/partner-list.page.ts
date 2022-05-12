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
    project_id: (this.user.userData.user_type === 'LH' || this.user.userData.user_type === 'SUPER') ? 0 : this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.belong_data.master_company_id,
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
    row_count: number,
    index: number
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
    console.log("this.form.master_company_id",this.form.master_company_id);
    const { user_role, belong_data } = this.user.userData;
    if(user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사') this.permission.edit = true;
  }
  getForm() {
    const { user_type, belong_data } = this.user.userData;
    if(user_type === 'LH') {
      this.form.master_company_id = 0;
    } else {
      this.form.master_company_id = belong_data.master_company_id;
    }
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/project/company/partner/list', this.form, { loading: true });
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

  async edit(item?) {
    console.log('item - ',item ? 1: 2);
    const modal = await this.modal.create({
      component:PartnerEditPage,
      componentProps:{
        company_id: item?.company_id || 0,
        project_id: item ? (item.project_id ? item.project_id : this.form.project_id) : this.form.project_id,
        master_company_id: item ? (item.master_company_id ? item.master_company_id : this.form.master_company_id) : this.form.master_company_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }
}
