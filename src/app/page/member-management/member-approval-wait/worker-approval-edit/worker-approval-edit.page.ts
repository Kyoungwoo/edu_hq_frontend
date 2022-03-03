import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';


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

//소속정보
export class ApprovalItem {
  ctgo_construction_id: number;
  safe_job_data: {
    user_id: number;
    ctgo_safe_job_id: number;
    user_safe_job_id: number;
    safe_job_start_date: string;
    ctgo_safe_job_name_ch: string;
    ctgo_safe_job_name_en: string;
    ctgo_safe_job_name_kr: string;
    ctgo_safe_job_name_vi: string;
  }
  safe_job_file_data: FutItem[] = [];
  company_id: number;
  ctgo_job_position_id: number;
  ctgo_occupation_name: string;
  ctgo_construction_name: string;
  ctgo_job_position_name: string;
  project_name: string;
  certify_data: {
    user_id: number;
    user_certify_id: number;
    user_certify_no: string;
  }
  certify_file_data: FutItem[] = [];
  ctgo_occupation_id: number;
  project_id: number;
  company_name: string;
  work_contract_type: string;
}

// 건강문진
export class HealthItem {
  brain_cure_content:string[] = [];
  use_drugs_state: number = 0;
  covid_vaccine_state: number = 0;
  vomiting_state: number = 0;
  vomiting_content: string = '';
  covid_nineteen_state: number = 0;
  pain_head_state: number = 0;
  covid_nineteen_content: string = '';
  brain_cure_state: number = 0;
  health_terms_state: number = 0;
  etc_disease_state: number = 0;
  etc_disease_content: string = '';
  create_date: string = '';
  use_drugs_content: string = '';
  pain_head_content: string = '';
}

//교육정보
export class SafeEduItem {
  user_id: number;
  basic_safe_edu_date: string;
  user_safe_edu_file_data: FutItem[] = [];
  approval_user_id: number;
  session_company_id: number;
  user_manage_session: string;

}
//교육이력 리스트
export class SafeEduList {
  ctgo_education_safe_type: string = '전체';
  project_id: number;
  search_text: string;
  ctgo_education_safe_name: string;
  ctgo_education_safe_id: number;
  ctgo_education_safe_title: string;
  ctgo_education_safe_text: string;
  education_safe_id: number;
  education_safe_time: number;
  create_date: string;
  project_name: string;
}

// export class addSafeJobData {
//   ctgo_safe_job_id: number;
//   safe_job_start_date: string;
// } 

// export class addCertifyData {
//   user_certify_no: string;
// }

@Component({
  selector: 'app-worker-approval-edit',
  templateUrl: './worker-approval-edit.page.html',
  styleUrls: ['./worker-approval-edit.page.scss'],
  animations: [fadeInAnimation]
})
export class WorkerApprovalEditPage implements OnInit {

  @Input() item;

  form = {
    user_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: ''
  }

  formBasic = new BasicItem();
  formApproval = new ApprovalItem();
  formHealth = new HealthItem();
  formSafeEdu = new SafeEduItem();
  formSafeList = {
    ctgo_education_safe_type: '전체',
    search_text: '',
    project_id: 0
  }
  resSafeList:ConnectResult<SafeEduList>;
  validator = new Validator(new BasicItem()).validator;

  menu:number = 1;
  permission = {
    approval: false
  }

  constructor(
    private _modal_ : ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private changeDetector: ChangeDetectorRef
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
    const res = await this.connect.run('/usermanage/approval/worker/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

//휴대폰
  public async overlapPhone() { 
    const { user_phone, user_id } = this.formBasic;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/worker/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async get(){
    await this.getItem(); //기본정보
    await this.getBelong(); //소속정보
    await this.getSafeEdu(); //교육이력
    await this.getSafeEduList(); //교육이력목록
    await this.getHealth(); //건강문진
  }

//기본정보
  async getItem() {
    const res = await this.connect.run('/usermanage/approval/worker/basic/detail', this.form, {
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
      const res = await this.connect.run('/usermanage/approval/worker/belong/detail', this.form, {
        parse: ['certify_data','certify_file_data','safe_job_data','safe_job_file_data']
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

//교육이력 
  async getSafeEdu() {
     const res = await this.connect.run('/usermanage/approval/worker/safeedu/detail', this.form, {
      parse: ['user_safe_edu_file_data']
    });
    
    if (res.rsCode === 0) {
      this.formSafeEdu = {
        ...this.formSafeEdu,
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
            await this.SafeEduSubmit();
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

//소속정보 수정
  async BelongSubmit(){
    const res = await this.connect.run('/usermanage/approval/worker/belong/update', {
      ...this.form,
      ...this.formApproval
    }, {});
    if(res.rsCode === 0) {
      this._modal_.dismiss('Y');
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//교육 수정
  async SafeEduSubmit(){
    const res = await this.connect.run('/usermanage/approval/worker/safeedu/update', {
      ...this.form,
      ...this.formSafeEdu
    }, {});
    if(res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }


//교육이력 리스트불러오기
  async getSafeEduList() {
   this.form.session_company_id = this.user.userData.belong_data.company_id;
   this.form.user_manage_session = this.user.memberAuthToken;
   this.formSafeList.project_id = this.user.userData.belong_data.project_id;
   this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/approval/worker/edu/list',{
     ...this.form,
     ...this.formSafeList 
    }, {
      loading: true
    });
    if(res.rsCode === 0) {
      this.resSafeList = {
        ...res,
        ...this.resSafeList
      }
      // 정상
    } else if(res.rsCode === 1008) {
      // 데이터 없음
    }
  }

  //건강문진
    async getHealth() {
      this.form.session_company_id = this.user.userData.belong_data.company_id;
      this.form.user_manage_session = this.user.memberAuthToken;
      this.form.approval_user_id = this.item.user_id;
      const res = await this.connect.run('/usermanage/info/worker/health/get',this.form,{
        parse:['brain_cure_content']
      });
      if(res.rsCode === 0) {
        this.formHealth = res.rsObj;
      }
    }

}

