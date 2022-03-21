import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { InputSafejobComponent, SafeJobItem } from 'src/app/component/input/input-safejob/input-safejob.component';
import { ChangePhonePage } from 'src/app/page/my-page/change-phone/change-phone.page';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { SafeEduItem } from '../../member-approval-wait/worker-approval-edit/worker-approval-edit.page';
import { MileagePopupComponent } from '../mileage-popup/mileage-popup.component';

//기본정보
export class BasicItem {
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  file: (File | FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  user_profile_file_data: FutItem[] = [];
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
}

//소속정보
export class ApprovalItem {
  ctgo_job_position_name_kr: string;
  ctgo_construction_id: number;
  safe_job_file_data: FutItem[] = [];
  // user_safe_job_data: {
  //   user_id: number;
  //   ctgo_safe_job_id: number;
  //   user_safe_job_id: number;
  //   safe_job_start_date: string;
  //   ctgo_safe_job_name_kr: string;
  // }
  company_id: number;
  ctgo_job_position_id: number;
  project_state: string;
  ctgo_construction_name: string;
  project_name: string;
  user_role: number;
  construction_start_date: string;
  user_id: number;
  project_id: number;
  construction_end_date: string;
  company_name: string;

  safe_job_data:SafeJobItem[] = [];
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

@Component({
  selector: 'app-partner-into-edit',
  templateUrl: './partner-into-edit.page.html',
  styleUrls: ['./partner-into-edit.page.scss'],
})
export class PartnerIntoEditPage implements OnInit {

  @ViewChild('inputSafeJob') inputSafeJob:InputSafejobComponent;

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
  formSafeEdu = new SafeEduItem();
  formSafeList = {
    ctgo_education_safe_type: '전체',
    search_text: '',
    project_id: 0
  }

  resSafeList: ConnectResult<SafeEduList>;
  resTotalMileageList: ConnectResult<TotalMileageList>;
  resPlusMileageList: ConnectResult<PlusMileageList>;
  resMinusMileageList: ConnectResult<MinusMileageList>;

  validator = new Validator(new BasicItem()).validator;

  permission = {
    mileageinsert: false, //마일리지 지급
    approval: false //저장
  }

  menu: number = 1;
  constructor(
    private _modal_: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {


    this.getPermission();
    this.get();
  }

   //권한
   getPermission() { 
    if(this.user.userData.user_role === 'MASTER_HEAD') {
      this.permission.mileageinsert = true;
    } else {
      this.permission.mileageinsert = false;
    }
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
    if (!user_email) return this.validator.user_email = null;
    if (!user_id) return this.validator.user_id = null;
    const res = await this.connect.run('/usermanage/info/company/overlap/email', { user_email, user_id });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  // //휴대폰
  // public async overlapPhone() {
  //   const { user_phone, user_id } = this.formBasic;
  //   if (!user_phone) return this.validator.user_phone = null;
  //   if (!user_id) return this.validator.user_id = null;
  //   const res = await this.connect.run('/usermanage/info/company/overlap/phone', { user_phone, user_id });
  //   this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  //   this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
  // }

    // 휴대폰번호
    async overlapPhone() {
      const { user_id, user_phone } = this.formBasic;
      if (!user_id) return this.validator.user_id = null;
      if(!user_phone) return this.validator.user_phone = null;
      if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
      const res = await this.connect.run('/usermanage/info/company/overlap/phone', { user_phone, user_id });
      this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
    }
    async changePhone() {
      const modal = await this._modal_.create({
        component: ChangePhonePage,
        cssClass: 'change-phone-modal'
      });
      modal.present();
      const { data } = await modal.onDidDismiss();
  
      if(data?.update) {
        this.get();
      }
    }

  async get() {
    const loading = await this.loading.present();

    await Promise.all([
      this.inputSafeJob?.submit(),
      this.getItem(),
      this.getBelong(),
      this.getSafeEduList(),
      this.getTotalMileageList(),
      this.getPlusMileageList(),
      this.getMinusMileageList()
    ]);

    loading.dismiss();
  }

  //기본정보
  async getItem() {
    const res = await this.connect.run('/usermanage/info/company/basic/detail', this.form, {
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
    const res = await this.connect.run('/usermanage/info/company/belong/detail', this.form, {
      parse: ['safe_job_data', 'safe_job_file_data']
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

  //교육이력 리스트불러오기
  async getSafeEduList() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.formSafeList.project_id = this.user.userData.belong_data.project_id;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/company/edu/list', {
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
  // 총 안전마일리지 목록
  async getTotalMileageList() {
    this.form.session_company_id = this.user.userData.belong_data.company_id;
    this.form.user_manage_session = this.user.memberAuthToken;
    this.formSafeList.project_id = this.user.userData.belong_data.project_id;
    this.form.approval_user_id = this.item.user_id;
    const res = await this.connect.run('/usermanage/info/company/mileagetotal/list', {
      ...this.form,
    }, {
      loading: true
    });
    if (res.rsCode === 0) {
      this.resTotalMileageList = {
        ...res,
        ...this.resTotalMileageList
      }
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
    const res = await this.connect.run('/usermanage/info/company/mileageplus/list', {
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
    const res = await this.connect.run('/usermanage/info/company/mileageminus/list', {
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
            await Promise.all([
              this.BasicSubmit(),
              this.inputSafeJob?.submit(),
              this.BelongSubmit()
          ]);
          }
        }
      ] 
    });
  }

  //기본정보 수정
  async BasicSubmit() {
    const res = await this.connect.run('/usermanage/info/company/basic/update', {
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
    const res = await this.connect.run('/usermanage/info/company/belong/update', {
      ...this.form,
      ...this.formApproval
    }, {});
    if (res.rsCode === 0) {
      this._modal_.dismiss('Y');
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}
