import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PartnerEditPage } from '../partner-edit/partner-edit.page';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.page.html',
  styleUrls: ['./partner-list.page.scss'],
})
export class PartnerListPage implements OnInit {

  form = {
    limit_no:0,
    master_company_ids:[],
    project_ids:[],
    search_text:''
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
  constructor(
    private modal: ModalController,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/project/company/partner/list',this.form,{loading:'협력사 불러오는 중...'});
    if(this.res.rsCode ===0) {};
  }

  async edit(item?) {
    console.log("-----------------------------55",item)
    const modal = await this.modal.create({
      component:PartnerEditPage,
      componentProps:{
        company_id:item?.company_id,
        project_id:item?.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log("data",data);
      this.getList();
    }
  }
}
