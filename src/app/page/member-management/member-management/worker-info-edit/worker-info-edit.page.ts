import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { InputCertifyComponent } from 'src/app/component/input/input-certify/input-certify.component';
import { InputSafejobComponent, SafeJobItem } from 'src/app/component/input/input-safejob/input-safejob.component';
import { SignUpViewType } from 'src/app/page/sign-up/sign-up.interface';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { MileagePopupComponent } from '../mileage-popup/mileage-popup.component';

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
  file: (File | FileBlob)[] = [];
  file_json: FileJson = new FileJson();

  
}

//소속정보
export class ApprovalItem {
  ctgo_construction_id: number;
  // safe_job_data: {
  //   user_id: number;
  //   ctgo_safe_job_id: number;
  //   user_safe_job_id: number;
  //   safe_job_start_date: string;
  //   ctgo_safe_job_name_kr: string;
  // }
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
  ctgo_occupation_id: number;
  project_id: number;
  company_name: string;
  work_contract_type: string;
  project_work_state: number;
  construction_start_date: string;
  construction_end_date: string;
  ctgo_job_position_name_kr: string;

  certify_file_data:FutItem[] = [];
  safe_job_data:SafeJobItem[] = [];
}

// 건강문진
export class HealthItem {
  brain_cure_content: string[] = [];
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
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증


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

//총 마일리지 리스트
export class TotalMileageList {
  minus_mileage: number;
  total_mileage: number;
  plus_mileage: number;
}

// 마일리지 사용 리스트
export class MinusMileageList {
  ctgo_safe_mileage_point: number;
  user_id: number;
  ctgo_safe_mileage_state: string;
  ctgo_safe_mileage: string;
  payer_user_name: string;
  create_date: string;
  payer_user_id: number;
  ctgo_safe_mileage_id: string;
}

//마일리지 적립 리스트
export class PlusMileageList {
  ctgo_safe_mileage_point: number;
  user_id: number;
  ctgo_safe_mileage_state: string;
  ctgo_safe_mileage: string;
  payer_user_name: string;
  create_date: string;
  payer_user_id: number;
  ctgo_safe_mileage_id: string;

}
@Component({
  selector: 'app-worker-info-edit',
  templateUrl: './worker-info-edit.page.html',
  styleUrls: ['./worker-info-edit.page.scss'],
  animations: [fadeInAnimation]
})

export class WorkerInfoEditPage implements OnInit {
  
  @ViewChild('inputSafeJob') inputSafeJob:InputSafejobComponent;
  @ViewChild('inputCertify') inputCertify:InputCertifyComponent;

  editable:boolean = false;

  @Input() item;
  menu: number = 1;

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
  formSafeJob = {
    ctgo_safe_job_id: 0,
    ctgo_safe_job_name_kr: '',
    safe_job_start_date: '',
    user_id: 0,
    user_safe_job_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: '',
    project_id: 0
  }
  safeAdd = [{
    ctgo_safe_job_id: 0,
    ctgo_safe_job_name_kr: '',
    safe_job_start_date: '',
    user_id: 0,
    user_safe_job_id: 0,
    approval_user_id: 0,
    session_company_id: 0,
    user_manage_session: '',
    file: [],
    file_json: new FileJson(),
    project_id: 0
  }];

  resSafeList: ConnectResult<SafeEduList>;
  resTotalMileageList: ConnectResult<TotalMileageList>;
  resMinusMileageList: ConnectResult<MinusMileageList>;
  resPlusMileageList: ConnectResult<PlusMileageList>;

  validator = new Validator(new BasicItem()).validator;


  permission = {
    mileage: false //마일리지 적립 권한
  }

  constructor(
    private _modal_: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private user: UserService,
    private alert: AlertService,
    private loading: LoadingService,
  ) { }

  ngOnInit() {
    this.getPermission();
    this.get();
  }

  //권한
  getPermission() {
    if (this.user.userData.user_type === 'LH' || this.user.userData.user_role === 'PARTNER_HEAD') {
      this.permission.mileage = false;
    } else {
      this.permission.mileage = true;
    }
    this.form.user_id = this.item.user_id;
    this.form.approval_user_id = this.item.user_id;
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
  }

  //이메일
  public async overlapEmail() {
    const { user_id, user_email } = this.formBasic;
    if (!user_email) return this.validator.user_email = null;
    if (!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/info/worker/overlap/email', { user_email, user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  //휴대폰
  public async overlapPhone() {
    const { user_phone, user_id } = this.formBasic;
    if (!user_phone) return this.validator.user_phone = null;
    if (!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/info/worker/overlap/phone', { user_phone, user_id });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

    //교육이수증
    public findFile(view_type:SignUpViewType) {
      return this.formSafeEdu.file_preview.find(futItem => futItem.view_type === view_type);
    }

  async get() {
    const loading = await this.loading.present();

    await Promise.all([
      this.getItem(),
      this.getBelong(),
      this.getSafeEdu(),
      this.getSafeEduList(),
      this.getHealth(),
      this.getTotalMileageList(),
      this.getPlusMileageList(),
      this.getMinusMileageList()
    ]);

    loading.dismiss();
  }

  //기본정보
  async getItem() {
    const res = await this.connect.run('/usermanage/info/worker/basic/detail', this.form, {
      parse: ['user_profile_file_data']
    });
    if (res.rsCode === 0) {
      this.formBasic = {
        ...this.formBasic,
        ...res.rsObj
      }
    } else if (res.rsCode === 3008) {
      // 비밀번호 없거나 틀렸음
      this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  //소속정보
  async getBelong() {
    const res = await this.connect.run('/usermanage/info/worker/belong/detail', this.form, {
      parse: ['certify_data', 'certify_file_data', 'safe_job_data', 'safe_job_file_data']
    });

    if (res.rsCode === 0) {
      this.formApproval = {
        ...this.formApproval,
        ...res.rsObj
      }
    } else if (res.rsCode === 3008) {
      // 비밀번호 없거나 틀렸음
      this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  //교육이력 
  async getSafeEdu() {
    const res = await this.connect.run('/usermanage/info/worker/safeedu/detail', this.form, {
      parse: ['user_safe_edu_file_data']
    });

    if (res.rsCode === 0) {
      this.formSafeEdu = {
        ...this.formSafeEdu,
        ...res.rsObj
      }
    } else if (res.rsCode === 3008) {
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
      backdropDismiss: false,
      cssClass: "security-password-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getItem();
    }
  }

  // 저장(수정)
  async submit() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.form.approval_user_id = this.form.user_id;
    this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            this.BasicSubmit();
            // this.safeInsert();
            // this.SafeSubmit()
            this.BelongSubmit();
            this.SafeEduSubmit();
          }
        }
      ]
    });
  }

  //기본정보 수정
  async BasicSubmit() {
    const res = await this.connect.run('/usermanage/info/worker/basic/update', {
      ...this.form,
      ...this.formBasic
    }, {});
    if (res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  //소속정보 수정
  async BelongSubmit() {
    const res = await this.connect.run('/usermanage/info/worker/belong/update', {
      ...this.form,
      ...this.formApproval
    }, {});
    if (res.rsCode === 0) {
      this._modal_.dismiss('Y');
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  //교육 수정
  async SafeEduSubmit() {
    const res = await this.connect.run('/usermanage/info/worker/safeedu/update', {
      ...this.form,
      ...this.formSafeEdu
    }, {});
    if (res.rsCode === 0) {
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
    const res = await this.connect.run('/usermanage/info/worker/edu/list', {
      ...this.form,
      ...this.formSafeList
    }, {
      loading: true
    });
    if (res.rsCode === 0) {
      this.resSafeList = {
        ...res,
        ...this.resSafeList
      }
      // 정상
    } else if (res.rsCode === 1008) {
      // 데이터 없음
    }
  }

  //건강문진
  async getHealth() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/worker/health/get', this.form, {
      parse: ['brain_cure_content']
    });
    if (res.rsCode === 0) {
      this.formHealth = res.rsObj;
    }
  }

  // 총 안전마일리지 목록
  async getTotalMileageList() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.formSafeList.project_id = this.user.userData.belong_data.project_id;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/worker/mileagetotal/list', {
      ...this.form,
    }, {
      loading: true
    });
    if (res.rsCode === 0) {
      this.resTotalMileageList = {
        ...res,
        ...this.resTotalMileageList
      }
      console.log("asd - ", this.resTotalMileageList);
      // 정상
    } else if (res.rsCode === 1008) {
      // 데이터 없음
    }
  }

  // 마일리지 적립 목록
  async getPlusMileageList() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.formSafeList.project_id = this.user.userData.belong_data.project_id;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/worker/mileageplus/list', {
      ...this.form,
    }, {
      loading: true
    });
    if (res.rsCode === 0) {
      this.resPlusMileageList = {
        ...res,
        ...this.resPlusMileageList
      }
      // 정상
    } else if (res.rsCode === 1008) {
      // 데이터 없음
    }
  }

  // 마일리지 사용 목록
  async getMinusMileageList() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.formSafeList.project_id = this.user.userData.belong_data.project_id;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/worker/mileageminus/list', {
      ...this.form,
    }, {
      loading: true
    });
    if (res.rsCode === 0) {
      this.resMinusMileageList = {
        ...res,
        ...this.resMinusMileageList
      }
      // 정상
    } else if (res.rsCode === 1008) {
      // 데이터 없음
    }
  }

  //마일리지 지급
  async MileageInsert() {
    const modal = await this._modal_.create({
      component: MileagePopupComponent,
      componentProps: {
        company_id: this.formApproval.company_id,
        user_id: this.form.user_id
      },
      cssClass:"mileage-modal"
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }
}
