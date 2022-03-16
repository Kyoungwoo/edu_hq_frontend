import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { OrganizationValue } from 'src/app/component/select/select-organization/select-organization.component';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';


//기본정보
export class BasicItem {
  user_email: string;
  sharing_terms: number;
  account_id: string;
  user_id: number;
  system_terms: number;
  gps_terms: number;
  user_profile_file_data: FutItem[] = [];
  user_name: string;
  user_phone: string;
  user_gender: string;
  user_birth: string;
  personal_terms: number;
  sensitive_terms: number;
  update_date: string;
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}

//소속정보
export class ApprovalItem implements OrganizationValue {
  ctgo_job_position_name_kr: string;
  company_id: number;
  ctgo_job_position_id: number;
  project_name: string;
  user_role: string;
  construction_start_date: string;
  user_id: number;
  project_id: number;
  construction_end_date: string;
  company_name: string;

  hq_regional_entire_state: 0|1 = 0; // 본사권한 = 1
  hq_regional_id: number = 0; // id
  hq_regional_code: string; // 코드
  hq_regional_name: string; // 지역본부명
  hq_business_entire_state: 0|1;
  hq_business_id: number;
  hq_business_name: string;
  hq_department_id: number;
  hq_department_name: string;
}

@Component({
  selector: 'app-lh-approval-edit',
  templateUrl: './lh-approval-edit.page.html',
  styleUrls: ['./lh-approval-edit.page.scss'],
})
export class LhApprovalEditPage implements OnInit {

  editable:boolean = false;

  @Input() item;

  form = {
    user_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: '',
    project_id: 0,
  }

  formBasic = new BasicItem();
  formApproval = new ApprovalItem();

  validator = new Validator(new BasicItem()).validator;

  constructor(
    private _modal_ : ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.form.user_id = this.item.user_id;
    this.form.approval_user_id = this.item.user_id;
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.get();
  }

  //이메일
  public async overlapEmail() { 
    const { user_id, user_email } = this.formBasic;
    if(!user_email) return this.validator.user_email = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/lh/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

//휴대폰
  public async overlapPhone() { 
    const { user_phone, user_id } = this.formBasic;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/lh/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async get(){
    const loading = await this.loading.present();

    await Promise.all([
      this.getItem(),
      this.getBelong(),
   
    ]);

    loading.dismiss();
  }

  //기본정보
  async getItem() {
    const res = await this.connect.run('/usermanage/approval/lh/basic/detail', this.form, {
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
    const res = await this.connect.run('/usermanage/approval/lh/belong/detail', this.form, {
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

//가입승인
async approval() { 
  const modal = await this._modal_.create({
    component:ApprovalPopupComponent,
    componentProps:{
      approval_user_ids:this.formBasic.user_id,
      user_name:this.formBasic.user_name,
      state: 'lh'
    },
    cssClass:"approval-modal"
  });
  modal.present();
  const { data } = await modal.onDidDismiss();
  if(data) {
    this._modal_.dismiss('Y');
  } 
}

//기본정보 수정
async BasicSubmit(){
  const res = await this.connect.run('/usermanage/approval/lh/basic/update', {
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
  const res = await this.connect.run('/usermanage/approval/lh/belong/update', {
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
