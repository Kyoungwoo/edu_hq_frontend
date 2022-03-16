import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Validator, ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserRole, UserService, UserType } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { InputSafejobComponent, SafeJobItem } from 'src/app/component/input/input-safejob/input-safejob.component';
import { environment } from 'src/environments/environment';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { ChangePhonePage } from '../change-phone/change-phone.page';

/** 기본 정보 class */
export class BasicForm {
  account_id:string = null; // 아이디
  user_name:string = null; // 유저 이름
  user_gender:string = null; // 유저 성별
  user_email:string = null; // 유저 이메일
  user_birth:string = null; // 유저 생년월일
  user_phone:string = null; // 유저 연락처
  ctgo_country_id:number = null; // 국적 아이디
  ctgo_country_name:string = null; // 국적 이름

  user_profile_file_data:FutItem[] = []; // 유저 프로필 데이터
  file:(File|FileBlob)[] = []; // 파일
  file_json:FileJson = new FileJson(); // 파일 JSON

  update_date:string = null;
}

/** 소속 정보 class */
export class BelongForm {
  /** 공통 form */
  user_id:number = null;
  user_role:number = null;
  project_id:number = null;
  project_name:string = null;
  company_id:number = null;
  company_name:string = null;
  ctgo_job_position_id:number = null;
  ctgo_job_position_name:string = null;
  // 출역 기간
  construction_start_date:string = null;
  construction_end_date:string = null;

  /** LH form */
  hq_regional_id:number = null;
  hq_regional_name:string = null;
  hq_regional_entire_state:0|1 = null;
  hq_business_id:number = null;
  hq_business_name:string = null;
  hq_business_entire_state:0|1 = null;
  hq_department_id:number = null;
  hq_department_name:string = null;
  // 공사 기간
  contract_start_date:string = null;
  contract_end_date:string = null;
  
  /** 감리, 원청사, 협력사, 작업자 form */
  ctgo_construction_id:number = null;
  ctgo_construction_name:string = null;

  /** 원청사, 협력사, 작업자 form */
  safe_job_data:SafeJobItem[] = [];

  /** 작업자 form */
  ctgo_occupation_id:number = null;
  ctgo_occupation_name:string = null;
  ctgo_occupation_role:'BASIC'|'DRIVER' = null;
  user_certify_no:string = null; // 면허번호
}

/** 교육이력 class */
export class EducationGetForm {
  ctgo_education_safe_types:string[] = [];
  project_id:number = null;
  project_name:string = null;
  search_text:string = null;
}
export class EducationRes {
  create_date:string = null;
  ctgo_education_safe_id:number = null;
  ctgo_education_safe_name:string = null;
  ctgo_education_safe_text:string = null;
  ctgo_education_safe_title:string = null;
  ctgo_education_safe_type:string = null;
  education_safe_id:number = null;
  education_safe_time:number = null;
  project_id:number = null;
  project_name:string = null;
}
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.page.html',
  styleUrls: ['./my-page.page.scss'],
})
export class MyPagePage implements OnInit {

  @ViewChild('inputSafeJob') inputSafeJob:InputSafejobComponent;

  editable:boolean = false;
  segment:'belong'|'education'|'mileage' = 'belong';
  userType:'LH' | 'SUPER' | 'MASTER' | 'PARTNER' | 'WORKER' = null;

  /** 기본정보 form */
  basicForm = new BasicForm();
  basicValidator = new Validator(new BasicForm()).validator;

  /** 소속정보 form */
  belongForm = new BelongForm();
  belongValidator = new Validator(new BelongForm()).validator;

  /** 교육이력 form */
  educationGetForm = new EducationGetForm();
  educationRes:ConnectResult<EducationRes>;

  /** 안전마일리지 form */
  mileageTotalRes:ConnectResult<{
    minus_mileage:number,
    plus_mileage:number,
    total_mileage:number
  }>;
  mileagePlusRes:ConnectResult<{
    create_date:string,
    ctgo_safe_mileage:string,
    ctgo_safe_mileage_id:number,
    ctgo_safe_mileage_point:number,
    payer_user_id:number,
    payer_user_name:string,
    user_id:number
  }>;
  mileageMinusRes:ConnectResult<{
    create_date:string,
    ctgo_safe_mileage:string,
    ctgo_safe_mileage_id:number,
    ctgo_safe_mileage_point:number,
    payer_user_id:number,
    payer_user_name:string,
    user_id:number
  }>;


  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private _modal: ModalController,
    private nav: NavService,
    public regex: RegexService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getForm();
    this.get();
  }

  /**
   * 데이터 구성 파트
   */
  getForm() {
    /** 유저 타입 */
    const { user_type, user_role } = this.user.userData;
    if(user_type === 'COMPANY') {
      if(user_role.startsWith('MASTER')) {
        this.userType = 'MASTER';
      }
      else {
        this.userType = 'PARTNER';
      }
    }
    else {
      this.userType = user_type;
    }

    /** 교육 데이터 */
    this.educationGetForm.project_id = this.user.userData.belong_data.project_id;
  }

  /** 모두 가져오기 */
  async get() {
    const loading = await this.loading.present();
    /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다. 
     * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
     * 하나의 loading 으로 처리하기 위해서 만들었습니다.
     */
    await Promise.all([
      this.getBasic(),
      this.getBelong(),
      this.getEducation(),
      this.getMileageTotal(),
      this.getMileagePlus(),
      this.getMileageMinus()
    ]);

    loading.dismiss();
  }

  /** 기본정보 가져오기 */
  private async getBasic() {
    const res = await this.connect.run('/mypage/basic/detail', {}, { parse: ['user_profile_file_data'] });
    if(res.rsCode === 0) {
      this.basicForm = {
        ...this.basicForm,
        ...res.rsObj
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  // 휴대폰번호
  async overlapPhone() {
    const { user_phone } = this.basicForm;
    if(!user_phone) return this.basicValidator.user_phone = null;
    if(user_phone?.length < 3) return this.basicValidator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/mypage/overlap/phone', { user_phone });
    this.basicValidator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
  }
  async changePhone() {
    const modal = await this._modal.create({
      component: ChangePhonePage,
      cssClass: 'change-phone-modal'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();

    if(data?.update) {
      this.get();
    }
  }

  // 이메일
  async overlapEmail() {
    const { user_email } = this.basicForm;
    const res = await this.connect.run('/mypage/overlap/email', { user_email });
    this.basicValidator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  /** 회원 탈퇴 */
  async withdrawal() {
    this.alert.present({
      header: '회원탈퇴를 진행합니다.',
      message: `
        □ 회원 탈퇴 시 시스템 이용이 불가능 하며 취소가 불가능 합니다.\n
        □ 회원 탈퇴 후 마지막 출역 현장의 준공일로 부터 3년 후 까지 정보 보관 후 자동 삭제 됩니다.\n
        □ 회원 탈퇴를 원할 시 비밀번호를 입력해주세요.
      `,
      inputs: [
        { name: 'account_token', placeholder: '비밀번호' }
      ],
      buttons: [
        { text: '취소' },
        { text: '탈퇴하기', handler: this.widhdrawalHandler.bind(this) }
      ]
    });
  }
  async widhdrawalHandler({ account_token }) {
    console.log(account_token);
    const res = await this.connect.run('/mypage/user/delete', {
      account_token
    });
    if(res.rsCode === 0) {
      this.user.clear();
      this.nav.navigateRoot('/login', { 
        force: true, 
        animated: true
      });

      this.alert.present({
        header: '회원 탈퇴가 완료되었습니다.',
        message: '그동안 이용해주셔서 감사합니다.',
        buttons: [
          { text: '확인' }
        ]
      });
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /** 비밀번호 변경 */
  async changePassword() {
    const modal = await this._modal.create({
      component: ChangePasswordPage,
      cssClass: 'change-password-modal'
    });
    modal.present();
  }

  /** 소속정보 가져오기 */
  private async getBelong() {
    let api = '';
    if(this.userType === 'LH') {
      api = '/mypage/lh/belong/detail';
    }
    else if(this.userType === 'SUPER') {
      api = '/mypage/super/belong/detail';
    }
    else if(this.userType === 'MASTER' || this.userType === 'PARTNER') {
      api = '/mypage/company/belong/detail';
    }

    const res = await this.connect.run(api, {}, { parse: ['safe_job_data'] });
    if(res.rsCode === 0) {
      this.belongForm = {
        ...this.belongForm,
        ...res.rsObj
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /** 교육정보 가져오기 */
  async getEducationSearch() {
    const loading = await this.loading.present();
    await this.getEducation();
    loading.dismiss();
  }
  private async getEducation() {
    if(this.userType === 'MASTER' || this.userType === 'PARTNER') {
      this.educationRes = await this.connect.run('/mypage/education/list', this.educationGetForm);
      if(this.educationRes.rsCode === 1008) {
        // 암것도 안함
      }
      else if(this.educationRes.rsCode) {
        this.toast.present({ color: 'warning', message: this.educationRes.rsMsg });
      }
    }
  }

  /** 마일리지 정보 가져오기 */
  private async getMileageTotal() {
    if(this.userType === 'PARTNER') {
      this.mileageTotalRes = await this.connect.run('/mypage/mileagetotal/list');
      if(this.mileageTotalRes.rsCode === 1008) {
        // 암것도 안함
      }
      else if(this.mileageTotalRes.rsCode) {
        this.toast.present({ color: 'warning', message: this.mileageTotalRes.rsMsg });
      }
    }
  }
  private async getMileagePlus() {
    if(this.userType === 'PARTNER') {
      this.mileagePlusRes = await this.connect.run('/mypage/mileageplus/list');
      if(this.mileagePlusRes.rsCode === 1008) {
        // 암것도 안함
      }
      else if(this.mileagePlusRes.rsCode) {
        this.toast.present({ color: 'warning', message: this.mileagePlusRes.rsMsg });
      }
    }
  }
  private async getMileageMinus() {
    if(this.userType === 'PARTNER') {
      this.mileageMinusRes = await this.connect.run('/mypage/mileageminus/list');
      if(this.mileageMinusRes.rsCode === 1008) {
        // 암것도 안함
      }
      else if(this.mileageMinusRes.rsCode) {
        this.toast.present({ color: 'warning', message: this.mileageMinusRes.rsMsg });
      }
    }
  }


  /**
   * 데이터 입력 파트
   */

  /** 전체 입력 */
  public async submit() {
    if(!this.basicValid()) return;
    if(!this.belongValid()) {
      this.segment = 'belong';
      return;
    }

    const loading = await this.loading.present();

    const resAll = await Promise.all([
      this.basicSubmit(),
      // 안전직무 정보 submit
      this.inputSafeJob?.submit(),
      this.belongSubmit()
    ]);

    await loading.dismiss();

    /** 모든 데이터가 성공적으로 전송되었다면, 모든 반환값이 true임 */
    if(!resAll.includes(false)) {
      this.nav.back({ force: true });
      this.alert.present({
        message: '회원정보가 변경되었습니다.'
      });
    }
  }
  /** 기본정보 입력 */
  private async basicSubmit() {
    const res = await this.connect.run('/mypage/basic/update', this.basicForm);
    if(res.rsCode === 0) {
      return true;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
      return false;
    }
  }
  /** 소속정보 입력 */
  private async belongSubmit() {
    let api = '';
    if(this.userType === 'LH') {
      api = '/mypage/lh/belong/update';
    }
    else if(this.userType === 'SUPER') {
      api = '/mypage/super/belong/update';
    }
    else if(this.userType === 'MASTER' || this.userType === 'PARTNER') {
      api = '/mypage/company/belong/update';
    }

    const res = await this.connect.run(api, this.belongForm);
    if(res.rsCode === 0) {
      return true;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
      return false;
    }
  }


  /**
   * 데이터 체크 파트
   */

  private basicValid():boolean {
    if(!this.basicForm.user_name) this.basicValidator.user_name = { message: '이름을 입력해주세요.', valid: false };
    else this.basicValidator.user_name = { valid: true };

    if(!this.basicForm.account_id) this.basicValidator.account_id = { message: '아이디를 입력해주세요.', valid: false };
    else if(this.basicValidator.account_id?.valid)
    this.basicValidator.account_id = { valid: true };

    if(!this.basicForm.user_phone) this.basicValidator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
    else if(this.basicValidator.user_phone?.valid)
    this.basicValidator.user_phone = { valid: true };

    if(!this.basicForm.user_birth) this.basicValidator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
    else this.basicValidator.user_birth = { valid: true };

    if(this.basicValidator.user_email?.valid)
    this.basicValidator.user_email = { valid: true };

    if(!this.basicForm.user_gender) this.basicValidator.user_gender = { message: '성별을 선택해주세요.', valid: false };
    else this.basicValidator.user_gender = { valid: true };

    for(let key in this.basicValidator) {
      if(this.basicValidator[key]?.valid === false) return false;
    }
    return true;
  }

  private belongValid() {
    /** 공통 validation */
    if(!this.belongForm.ctgo_job_position_id) this.belongValidator.ctgo_job_position_id = { message: '직위를 선택해주세요.', valid: false };
    else this.belongValidator.ctgo_job_position_id = { valid: true };

    /** lh validation */
    if(this.userType === 'LH') {

      if(!this.belongForm.hq_regional_id) this.belongValidator.hq_regional_id = { message: '지역본부를 입력해주세요', valid: false };
      else this.belongValidator.hq_regional_id = { valid: true };

      // 지역본부 선택을 했는데 본사면 통과
      if(!this.belongForm.hq_regional_entire_state
      && !this.belongForm.hq_business_id) this.belongValidator.hq_business_id = { message: '사업본부를 입력해주세요', valid: false };
      else this.belongValidator.hq_business_id = { valid: true };

      // 사업본부 선택을 했는데 사업본부 본사면 통과
      if(!this.belongForm.hq_regional_entire_state
      && !this.belongForm.hq_business_entire_state
      && !this.belongForm.hq_department_id) this.belongValidator.hq_department_id = { message: '부서를 입력해주세요', valid: false };
      else this.belongValidator.hq_department_id = { valid: true };

    }

    /** 감리 validation */
    if(this.userType === 'SUPER') {

    }

    /** 원청사, 협력사 validation */
    if(this.userType === 'MASTER' || this.userType === 'PARTNER') {

    }

    for(let key in this.belongValidator) {
      if(this.belongValidator[key]?.valid === false) return false;
    }
    return true;
  }

}
