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

//소속정보
export class ApprovalItem {
  ctgo_construction_id: number;
  safe_job_data: {
    user_id: number;
    ctgo_safe_job_id: number;
    user_safe_job_id: number;
    safe_job_start_date: string;
    ctgo_safe_job_name_kr: string;
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
  project_work_state:number;
  construction_start_date:string;
  construction_end_date:string;
  ctgo_job_position_name_kr:string
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
  formApproval = new ApprovalItem();
  formSafeJob = {
    ctgo_safe_job_id:0,
    ctgo_safe_job_name_kr:'',
    safe_job_start_date:'',
    user_id:0,
    user_safe_job_id:0,
    approval_user_id:0,
    session_company_id:0,
    user_manage_session:'',
    project_id:0
  }
  // formHealth = new HealthItem();
  // formSafeEdu = new SafeEduItem();
  formSafeList = {
    ctgo_education_safe_type: '전체',
    search_text: '',
    project_id: 0
  }
  // resSafeList:ConnectResult<SafeEduList>;
  validator = new Validator(new BasicItem()).validator;

  safeAdd = [{
    ctgo_safe_job_id:0,
    ctgo_safe_job_name_kr:'',
    safe_job_start_date:'',
    user_id:0,
    user_safe_job_id:0,
    approval_user_id:0,
    session_company_id:0,
    user_manage_session:'',
    file: [],
    file_json: new FileJson(),
    project_id:0
  }];
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
    this.getItem(); //기본정보
    this.getBelong(); //소속정보
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
            this.safeInsert();
            this.SafeSubmit()
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
      this._modal_.dismiss();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  //안전직무 수정
  async SafeSubmit(){
    for(let i = 0; i < this.safeAdd.length; i++) {
      this.formSafeJob = this.safeAdd[i];
      if(this.formSafeJob.user_id) {
        const res = await this.connect.run('/usermanage/info/worker/safejob/update',{
          ...this.form,
          ...this.formSafeJob
        });
        if(res.rsCode === 0) {
          this._modal_.dismiss();
        } else {
          this.toast.present({ color: 'warning', message: res.rsMsg });
        }
      }
    }
  }

  //소속정보
  async getBelong() {
    const res = await this.connect.run('/usermanage/info/worker/belong/detail', this.form, {
      parse: ['certify_data','certify_file_data','safe_job_data','safe_job_file_data']
    });
    
    if (res.rsCode === 0) {
      if(this.safeAdd.length > 1) {
        this.safeAdd = [];
      }
      this.formApproval = {
        ...this.formApproval,
        ...res.rsObj
      }
      
      res?.rsObj?.safe_job_data?.forEach(item => {
          this.safeAdd.push(item);
      });
      this.formSafeJob.project_id = res.rsObj.project_id;
    } else if(res.rsCode === 3008) {
       // 비밀번호 없거나 틀렸음
       this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async safeInsert() {
    console.log("this.safeAdd.length",this.safeAdd.length);
    for(let i = 0; i < this.safeAdd.length; i++) {
      this.formSafeJob = this.safeAdd[i];
      // if(!this.safeAdd[i].ctgo_safe_job_id) return this.toast.present({message:'안전 직무를 선택해주세요.',color:'warning'});
      // if(!this.safeAdd[i].safe_job_start_date) return this.toast.present({message:'안전 직무 선임일를 선택해주세요.',color:'warning'});
      this.formSafeJob.ctgo_safe_job_id = 1
      
      if(!this.safeAdd[i].user_id) {
        console.log("input userid");
        const res = await this.connect.run('/usermanage/info/worker/safejob/insert',{
          ...this.form,
          ...this.formSafeJob
        });
        if(res.rsCode === 0) {
          this.getBelong();
        } else {
          this.toast.present({ color: 'warning', message: res.rsMsg });
        }
      }
    }
  }


  async safeEdit(state,user_safe_job_id?,i?) {
    console.log(state)
    if(state) {
      this.safeAdd.unshift({
        ctgo_safe_job_id:0,
        ctgo_safe_job_name_kr:'',
        safe_job_start_date:'',
        user_id:0,
        user_safe_job_id:0,
        approval_user_id:0,
        session_company_id:0,
        user_manage_session:'',
        file: [] as FutItem[],
        file_json: new FileJson(),
        project_id:0
      });
    } else if(user_safe_job_id) {
      this.alert.present({
        message:'삭제하시겠습니까?',
        buttons:[
          {text:'아니요'},
          {text:'에',
            handler:async() => {
              const res = await this.connect.run('/usermanage/info/worker/safejob/delete',{
                session_company_id:this.user.userData.belong_data.company_id,
                user_manage_session:this.user.memberAuthToken,
                user_safe_job_id
              });
              if(res.rsCode === 0) {
                this.toast.present({message:'삭제 되었습니다.',color:'primary'});
                this.safeAdd.splice(i,1);
              } else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
              }
            }
          }
        ]
      });
    } else {
      if(this.safeAdd.length < 2) return this.toast.present({message:'마지막 1개는 삭제할수 없습니다.',color:'warning'})
      this.safeAdd.splice(i,1);
    }
  }
}
