import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-education-confirm-pending-list',
  templateUrl: './education-confirm-pending-list.page.html',
  styleUrls: ['./education-confirm-pending-list.page.scss'],
})
export class EducationConfirmPendingListPage implements OnInit {

  form ={
    limit_no:0
  }
  res:ConnectResult<{
    index:number;
    row_count:number;
    create_user_id: number; // user_id
    company_id: number; // 회사 ID
    user_name: string; // 작성자명
    max_approval_date: string; // 마지막 결재일시
    ctgo_approval_module_name: string, // 서식명
    target_id: number; // 결재에 해당하는 서식의 id(ex:교육보고서id/회의록id/위평id)
    master_company_name: string; // 원청사 명
    approval_id: number; // 결재 ID
    project_id: number; // 현장 ID
    ctgo_approval_module_id: number; // 결재모듈 ID
    company_name: string; // 회사명
    approval_cnt_answer: string; // 현재 결재상태
    create_date: string; // 작성일
    education_safe_report_id:number;
    }>
  
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get()
  }
  
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/education/report/approval/req/get',this.form);
    if(this.res.rsCode === 0) {
      this.res.rsMap.map((item, i) => {
        item.index = item.row_count - this.form.limit_no - i;
      });
      
    } else {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
    }
  }

  async edit(education_safe_report_id) {
    console.log("item",education_safe_report_id)
    const modal = await this._modal.create({
      component: SafetyEducationResultEditPage,
      componentProps:{
        education_safe_report_id
      }
    });
    modal.present();
  }
}
