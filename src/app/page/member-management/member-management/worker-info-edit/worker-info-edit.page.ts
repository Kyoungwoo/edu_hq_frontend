import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';

//기본정보
export class BasicItem {
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  user_profile_file_data: FutItem[] = [];
  user_id: number;
  user_name: string;
  user_gender: string;
  ctgo_country_name_kr: string;
  update_date: string;
  account_id: string;
  user_birth: string;
  gps_terms: number;
  user_phone: string;
  ctgo_country_id: number;
  personal_terms: number;
  sensitive_terms: number;
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}

@Component({
  selector: 'app-worker-info-edit',
  templateUrl: './worker-info-edit.page.html',
  styleUrls: ['./worker-info-edit.page.scss'],
})

export class WorkerInfoEditPage implements OnInit {

  @Input() item;
  menu:number = 1;

  form = {
    user_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: ''
  }
  formBasic = new BasicItem();
  // formApproval = new ApprovalItem();
  // formHealth = new HealthItem();
  // formSafeEdu = new SafeEduItem();
  formSafeList = {
    ctgo_education_safe_type: '전체',
    search_text: '',
    project_id: 0
  }
  // resSafeList:ConnectResult<SafeEduList>;
  validator = new Validator(new BasicItem()).validator;

  permission = {
    approval: false
  }
  
  constructor(
    private _modal_ : ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private user: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getPermission();
    this.getItem();
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
    const res = await this.connect.run('/usermanage/info/worker/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

//휴대폰
  public async overlapPhone() { 
    const { user_phone, user_id } = this.formBasic;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/info/worker/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async getItem() {
    const res = await this.connect.run('/usermanage/info/worker/basic/detail', this.form, {
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
            this.BasicSubmit();
            // this.BelongSubmit();
            // this.SafeEduSubmit();
          }
        }
      ]
    });
  }

  //기본정보 수정
  async BasicSubmit(){
    const res = await this.connect.run('/usermanage/approval/worker/basic/update', {
      ...this.form,
      ...this.formBasic
    }, {});
    if(res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}
