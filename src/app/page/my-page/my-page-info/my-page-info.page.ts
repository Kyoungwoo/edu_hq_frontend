import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { InputSafejobComponent } from 'src/app/component/input/input-safejob/input-safejob.component';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { ChangePhonePage } from '../change-phone/change-phone.page';
import { BasicForm, BelongForm } from '../my-page/my-page.page';

@Component({
  selector: 'app-my-page-info',
  templateUrl: './my-page-info.page.html',
  styleUrls: ['./my-page-info.page.scss'],
})
export class MyPageInfoPage implements OnInit {

  @ViewChild('inputSafeJob') inputSafeJob:InputSafejobComponent;

  editable:boolean = false;
  belongEditable:boolean = false;
  userType:'LH' | 'SUPER' | 'MASTER' | 'PARTNER' | 'WORKER' = null;

  /** 기본정보 form */
  basicForm = new BasicForm();
  basicValidator = new Validator(new BasicForm()).validator;

  /** 소속정보 form */
  belongForm = new BelongForm();
  belongValidator = new Validator(new BelongForm()).validator;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    public user: UserService,
    private nav: NavService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.getForm();
    this.get();
  }

  /**
   * 데이터 구성 파트
   */
   getForm() {
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
      this.getBelong()
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
    else {
      api = '/mypage/worker/belong/detail';
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

  edit() {
    this.editable = true;
    if(this.userType !== 'WORKER') this.belongEditable = true;
  }

  /** 전체 입력 */
  public async submit() {
    console.log('submit 들어옵 --- ');
    console.log(this.basicValid());
    console.log(this.belongValid());
    if(!this.basicValid()) return;
    if(!this.belongValid()) return;

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
    else {
      // api = '/mypage/worker/belong/update';
      return true;
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
    if(this.userType !== 'WORKER'){
      if(!this.belongForm.ctgo_job_position_id) this.belongValidator.ctgo_job_position_id = { message: '직위를 선택해주세요.', valid: false };
      else this.belongValidator.ctgo_job_position_id = { valid: true };
    }

    /** lh validation */
    if(this.userType === 'LH') {

      // if(!this.belongForm.hq_regional_id) this.belongValidator.hq_regional_id = { message: '지역본부를 입력해주세요', valid: false };
      // else this.belongValidator.hq_regional_id = { valid: true };

      // // 지역본부 선택을 했는데 본사면 통과
      // if(!this.belongForm.hq_regional_entire_state
      // && !this.belongForm.hq_business_id) this.belongValidator.hq_business_id = { message: '사업본부를 입력해주세요', valid: false };
      // else this.belongValidator.hq_business_id = { valid: true };

      // // 사업본부 선택을 했는데 사업본부 본사면 통과
      // if(!this.belongForm.hq_regional_entire_state
      // && !this.belongForm.hq_business_entire_state
      // && !this.belongForm.hq_department_id) this.belongValidator.hq_department_id = { message: '부서를 입력해주세요', valid: false };
      // else this.belongValidator.hq_department_id = { valid: true };

    }

    /** 감리 validation */
    if(this.userType === 'SUPER') {

    }

    /** 원청사, 협력사 validation */
    if(this.userType === 'MASTER' || this.userType === 'PARTNER') {

    }

    for(let key in this.belongValidator) {
      console.log(this.belongValidator[key]);
      if(this.belongValidator[key]?.valid === false) return false;
    }
    return true;
  }

}
