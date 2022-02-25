import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

export interface SafeJobItem {
  ctgo_safe_job_id: number,
  safe_job_start_date: string
}

export class WorkerApprovalItem {
//회원 정보
  company_id: number;
  approval_user_id: number;
  session_company_id: number;
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
  update_date: string;
  ctgo_job_position_name: string;
  ctgo_construction_id: number;
  ctgo_job_position_id: number;
  ctgo_construction_name: string;
  ctgo_occupation_name: string;
  project_name: string;
  ctgo_occupation_id: number;
  project_id: number;
  company_name: string;
  work_contract_type: string;
  safe_job_file_data: FutItem[] = [];
  safe_job_data: SafeJobItem[] =[];
  certify_file_data: FutItem[] = [];
  certify_data: [{
    user_certify_no: string,
  }];
  certify_file: (File|FileBlob)[] = [];
  certify_file_json: FileJson = new FileJson();
  safe_file: (File|FileBlob)[] = [];
  safe_file_json: FileJson = new FileJson();

//교육이력 
  basic_safe_edu_date: string;
  user_safe_edu_file_data: FutItem[] = [];
  search_text: string;
  ctgo_education_safe_name: string;
  ctgo_education_safe_id: number;
  ctgo_education_safe_title: string;
  ctgo_education_safe_text: string;
  ctgo_education_safe_type: string = '전체';
  education_minute: string;
  education_safe_id: number;
  create_date: string;
};

export class addSafeJobData {
  ctgo_safe_job_id: number;
  safe_job_start_date: string;
} 

export class addCertifyData {
  user_certify_no: string;
} 

class healthItem {
  brain_cure_content: [] =[];
  use_drugs_state: number;
  covid_vaccine_state: number;
  vomiting_state: number;
  vomiting_content: string;
  covid_nineteen_state: number;
  pain_head_state: number;
  covid_nineteen_content: string;
  brain_cure_state: number;
  health_terms_state: number;
  etc_disease_state: number;
  etc_disease_content: string;
  create_date: string;
  use_drugs_content: string;
  pain_head_content: string;
}

@Component({
  selector: 'app-worker-approval-edit',
  templateUrl: './worker-approval-edit.page.html',
  styleUrls: ['./worker-approval-edit.page.scss'],
})
export class WorkerApprovalEditPage implements OnInit {

  @Input() item;
  @Input() company_id;
  @Input() project_id;

  form = new WorkerApprovalItem();
  validator = new Validator(new WorkerApprovalItem()).validator;
  res:ConnectResult<WorkerApprovalItem>;

  ctgo_Education:ConnectResult<{
    ctgo_education_safe_type: string, 
    ctgo_education_safe_name: string,
    ctgo_education_safe_id: number,
    ctgo_education_safe_title: string,
    ctgo_education_safe_text: string
  }>;

  resedu:ConnectResult<{
    ctgo_education_safe_name: string,
    ctgo_education_safe_id: number,
    ctgo_education_safe_title: string,
    user_id: string,
    project_id: number,
    ctgo_education_safe_text: string,
    education_safe_id: number,
    education_safe_time: number,
    ctgo_education_safe_type: string,
    create_date: string,
    project_name: string
  }>;

//건강 문진
  resWorkerHealth = new healthItem();

  healthArr = [
    {
      healthname: '뇌졸중',
      checked:false
    },
    {
      healthname: '뇌출혈',
      checked:false
    },
    {
      healthname: '협심증',
      checked:false
    },
    {
      healthname: '심근경색',
      checked:false
    },
    {
      healthname: '간질발작',
      checked:false
    }
  ];

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
  ) { }

  ngOnInit() {
    this.form.company_id = this.user.userData.belong_data.company_id;
    this.getPermission();
    this.getAll_Items();
    this.CtgoEducation();
    this.getHealth();
  }

//권한
  getPermission() { 
    if(this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
      this.form.company_id = this.user.userData.belong_data.company_id;
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.permission.approval = true;
    } else {
      this.permission.approval = false;
    }
     this.getAll_Items();
     this.CtgoEducation();
  }

//이메일
  public async overlapEmail() { 
    const { user_email,user_id } = this.form;
    if(!user_email) return this.validator.user_email = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/worker/overlap/email', { user_email,user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

//휴대폰
  public async overlapPhone() { 
    const { user_phone,user_id } = this.form;
    if(!user_phone) return this.validator.user_phone = null;
    if(!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/approval/worker/overlap/phone', { user_phone,user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async getAll_Items(){
    await this.getItem(); //기본정보
    await this.getBelong(); //소속정보
    await this.getSafeEdu(); //교육이력
    await this.getSafeEduList(); //교육이력목록
    await this.getHealth(); //건강문진
  }

//기본정보
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

//소속정보
  async getBelong() {
      const res = await this.connect.run('/usermanage/approval/worker/belong/detail', {
        session_company_id : this.user.userData.belong_data.company_id,
        user_id : this.item.user_id,
        user_manage_session : this.user.memberAuthToken
      }, {
        parse: ['certify_data','certify_file_data','safe_job_data','safe_job_file_data']
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

//교육이력 
  async getSafeEdu() {
     const res = await this.connect.run('/usermanage/info/worker/safeedu/detail', {
      session_company_id : this.user.userData.belong_data.company_id,
      user_id : this.item.user_id,
      user_manage_session : this.user.memberAuthToken
    }, {
      parse: ['safe_edu_file_data']
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
    const res = await this.connect.run('/usermanage/approval/worker/basic/update', this.form, {});
    if(res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//소속정보 수정
  async BelongSubmit(){
    const res = await this.connect.run('/usermanage/approval/worker/belong/update', this.form, {});
    if(res.rsCode === 0) {
      this._modal_.dismiss('Y');
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//기초안전교육 수정
  async SafeEduSubmit(){
    const res = await this.connect.run('/usermanage/approval/worker/safeedu/update', this.form, {});
    if(res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

//파일 행추가
  addSafeJobData() {
    const { user_role, belong_data } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.form.safe_job_data.push({
        ...new addSafeJobData()
      });
    } 
    else if(user_role === 'COMPANY_HEAD' && belong_data.company_contract_type === '원청사') {
      this.form.safe_job_data.push({
        ...new addSafeJobData(),
      });
    }
  }
//파일 행삭제
  addCertifyData() {
    const { user_role, belong_data } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.form.certify_data.push({
        ...new addCertifyData()
      });
    } 
    else if(user_role === 'COMPANY_HEAD' && belong_data.company_contract_type === '원청사') {
      this.form.certify_data.push({
        ...new addCertifyData(),
      });
    }
  }

//교육이력 리스트불러오기
  async getSafeEduList() {
   this.form.session_company_id = this.user.userData.belong_data.company_id;
   this.form.user_manage_session = this.user.memberAuthToken;
   this.form.project_id = this.user.userData.belong_data.project_id;
   this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/approval/worker/edu/list', this.form, {
      loading: true
    });
    if(res.rsCode === 0) {
      this.resedu = {
        ...res,
        ...this.resedu
      }
      // 정상
    } else if(res.rsCode === 1008) {
      // 데이터 없음
    }
  }

//교육구분 카테고리   
  async CtgoEducation() {
    this.ctgo_Education = await this.connect.run('/category/education/get', {search_text:this.form.search_text}, {
      loading: true
    });
    if(this.ctgo_Education.rsCode === 0) {
      // 정상
    } else if(this.ctgo_Education.rsCode === 1008) {
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
      this.resWorkerHealth = res.rsObj;
      let test = [];
      test = this.resWorkerHealth.brain_cure_content;
      let ttest = this.healthArr.filter(item => {
        test.includes(item.healthname)
      });
      ttest.forEach(item => item.checked = true);
      console.log(ttest);
    }
  }
}

