import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

//기본정보
export class BasicItem {
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  user_name: string;
  user_gender: string;
  update_date: string;
  account_id: string;
  user_id: number;
  user_birth: string;
  gps_terms: number;
  user_phone: string;
  personal_terms: number;
  sensitive_terms: number;
  file: (File | FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  user_profile_file_data: FutItem[] = [];
}

//소속정보
export class ApprovalItem {
  ctgo_job_position_name_kr: string;
  ctgo_construction_id: number;
  user_safe_job_file_data: FutItem[] = [];
  user_role: string;
  user_safe_job_data: {
    user_id: number;
    ctgo_safe_job_id: number;
    user_safe_job_id: number;
    safe_job_start_date: string;
    ctgo_safe_job_name_kr: string;
  }
  company_id: number;
  user_id: number;
  ctgo_job_position_id: number;
  project_id: number;
  company_name: string;
  ctgo_construction_name: string;
  project_name: string;
}

@Component({
  selector: 'app-partner-approval-edit',
  templateUrl: './partner-approval-edit.page.html',
  styleUrls: ['./partner-approval-edit.page.scss'],
})
export class PartnerApprovalEditPage implements OnInit {

  editable:boolean = false;

  @Input() item;

  form = {
    user_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: ''
  }

  formBasic = new BasicItem();
  formApproval = new ApprovalItem();

  validator = new Validator(new BasicItem()).validator;

  permission = {
    approval: false
  }

  constructor(
    private _modal_ : ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private changeDetector: ChangeDetectorRef,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.getPermission();
    this.get();
  }

  //권한
  getPermission() { 
    if(this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
      this.permission.approval = true;
    } else {
      this.permission.approval = false;
    }
    this.form.user_id = this.item.user_id;
    this.form.approval_user_id = this.item.user_id;
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
  }

  //이메일
  public async overlapEmail() { 
    const { user_id, user_email } = this.formBasic;
    if(!user_email) return this.validator.user_email = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/company/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

//휴대폰
  public async overlapPhone() { 
    const { user_phone, user_id } = this.formBasic;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/company/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async get(){
    const loading = await this.loading.present();

    await Promise.all([
      this.getItem(),
      this.getBelong()
    ]);

    loading.dismiss();
  }

  //기본정보
  async getItem() {
    const res = await this.connect.run('/usermanage/approval/company/basic/detail', this.form, {
      parse: ['user_profile_file_data']
    });
    
    if (res.rsCode === 0) {
      this.formBasic = {
        ...this.formBasic,
        ...res.rsObj
      }
      
    } else if(res.rsCode === 3008) {
       // 비밀번호 없거나 틀렸음
       this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//소속정보
  async getBelong() {
      const res = await this.connect.run('/usermanage/approval/company/belong/detail', this.form, {
        parse: ['user_safe_job_data','user_safe_job_file_data']
      });
      
      if (res.rsCode === 0) {
        this.formApproval = {
          ...this.formApproval,
          ...res.rsObj
        }
      } else if(res.rsCode === 3008) {
         // 비밀번호 없거나 틀렸음
         this.getPassword();
      } else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
  }

  //비밀번호
  async getPassword() { 
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

  //가입승인
  async approval() { 
    const modal = await this._modal_.create({
      component:ApprovalPopupComponent,
      componentProps:{
        approval_user_ids:this.formBasic.user_id,
        user_name:this.formBasic.user_name
      },
      cssClass:"approval-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this._modal_.dismiss('Y');
    } 
  }

  // 저장(수정)
  async submit() { 
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.form.approval_user_id = this.form.user_id;
    this.alert.present({
      message:'저장 하시겠습니까?',
      buttons:[
        { text:'아니요' },
        {
          text:'예',
          handler: async() => {
            await this.BasicSubmit();
            await this.BelongSubmit();
          }
        }
      ]
    });
  }

//기본정보 수정
  async BasicSubmit(){
    const res = await this.connect.run('/usermanage/approval/company/basic/update', {
      ...this.form,
      ...this.formBasic
    }, {});
    if(res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//소속정보 수정
  async BelongSubmit(){
    const res = await this.connect.run('/usermanage/approval/company/belong/update', {
      ...this.form,
      ...this.formApproval
    }, {});
    if(res.rsCode === 0) {
      this._modal_.dismiss('Y');
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}
