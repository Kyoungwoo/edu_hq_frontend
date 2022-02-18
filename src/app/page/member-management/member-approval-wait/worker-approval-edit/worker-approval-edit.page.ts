import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

export class WorkerApprovalItem {
  company_id: number;
  user_manage_session: string;
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  user_name: string;
  user_gender: string;
  user_birth: string;
  ctgo_country_name_kr: string;
  account_id: string;
  user_id: number;
  gps_terms: number;
  user_phone: string;
  ctgo_country_id: number;
  personal_terms: number;
  sensitive_terms: number;
  file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();

  //소속정보
  ctgo_job_position_name_kr: string;
  ctgo_construction_id: number;
  ctgo_job_position_id: number;
  ctgo_construction_name: string;
  ctgo_occupation_name_kr: string;
  project_name: string;
  ctgo_occupation_id: number;
  project_id: number;
  company_name: string;
  work_contract_type: string;
  // user_safe_job_file_data: [];
  // user_safe_job_data: [];
  // user_certify_file_data: [];
  // user_certify_data: [];
  
};

@Component({
  selector: 'app-worker-approval-edit',
  templateUrl: './worker-approval-edit.page.html',
  styleUrls: ['./worker-approval-edit.page.scss'],
})
export class WorkerApprovalEditPage implements OnInit {

  @Input() item;

  form = new WorkerApprovalItem();
  validator = new Validator(new WorkerApprovalItem()).validator;

  menu:number = 1;
  company_id: any;
  user_id: any;
  approval_user_ids: [];
  constructor(
    private _modal_ : ModalController,
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  public async overlapEmail() { //이메일
    const { user_email,user_id } = this.form;
    if(!user_email) return this.validator.user_email = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/worker/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async overlapPhone() { //휴대폰
    const { user_phone,user_id } = this.form;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/worker/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async getItem() {

    const res = await this.connect.run('/usermanage/approval/worker/basic/detail', {
      session_company_id : this.user.userData.belong_data.company_id,
      user_id : this.item.user_id,
      user_manage_session : this.user.memberAuthToken
    }, {
      parse: ['user_profile_file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    } else if(res.rsCode === 3008) {
       // 비밀번호 없거나 틀렸음
       this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  

  async getPassword() { //비밀번호
    const modal = await this._modal_.create({
      component: SecurityPasswordComponent,
      backdropDismiss:false,
      cssClass:"security-password-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getItem();
    }
  
  }
  async approval() { //가입승인
  
    const modal = await this._modal_.create({
      component:ApprovalPopupComponent,
      componentProps:{
        approval_user_ids:this.form.user_id,
        user_name:this.form.user_name
      },
      cssClass:"approval-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this._modal_.dismiss('Y');
    }
  }
  // public submit() {
  //   this.noticeText.update();
  //   if(this.form.notice_id) {
  //     this.update();
  //   } else {
  //     this.noticeInsert();
  //   }
  // }
}

