import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Validator, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

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
}
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.page.html',
  styleUrls: ['./my-page.page.scss'],
})
export class MyPagePage implements OnInit {

  basicForm = new BasicForm();
  basicValidator = new Validator(new BasicForm()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.get();
    // this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.SignUp.test) return;
    
    const el = this.el.nativeElement;
    await this.promise.wait();

    // 국가 가져오기
    this.changeDetector.detectChanges();
    el.querySelector('[name=ctgo_country_id]').dispatchEvent(new Event('click'));
    await this.promise.wait();

    // 현장 가져오기
    this.changeDetector.detectChanges();
    el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
    await this.promise.wait(3000);
    
    // 다음 페이지로
    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
  }

  private async get() {
    const res = await this.connect.run('/mypage/basic/detail');
    if(res.rsCode === 0) {
      this.basicForm = res.rsObj;
    }
  }
  
  // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
  public async overlapPhone() {
    const { user_phone } = this.basicForm;
    if(!user_phone) return this.basicValidator.user_phone = null;
    if(user_phone?.length < 3) return this.basicValidator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.basicValidator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async overlapEmail() {
    const { user_email } = this.basicForm;
    const res = await this.connect.run('/forSignUp/overlap/email', { user_email });
    this.basicValidator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  /* public findFile(view_type) {
    return this.form.file_preview.find(futItem => futItem.view_type === view_type);
  } */


  public async submit() {
    if(!this.basicValid()) return;
    // const res = await this.connect.run('')
  }

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

    if(!this.basicForm.ctgo_country_id) this.basicValidator.ctgo_country_id = { message: '국가를 선택해주세요.', valid: false };
    else this.basicValidator.ctgo_country_id = { valid: true };

    /* if(!this.form.company_id) this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
    else this.validator.company_id = { valid: true };

    if(!this.form.project_id) this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
    else this.validator.project_id = { valid: true };

    // if(!this.form.basic_safe_edu_date) this.validator.basic_safe_edu_date = { message: '기초안전보건교육 이수날짜를 입력해주세요.', valid: false };
    this.validator.basic_safe_edu_date = { valid: true };

    //
    this.validator.file_preview = { valid: true };

    // if(!this.form.file) this.validator.file = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    this.validator.file = { valid: true };
    // if(!this.form.file_json) this.validator.file_json = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    this.validator.file_json = { valid: true }; */

    for(let key in this.basicValidator) {
      if(!this.basicValidator[key]?.valid) return false;
    }
    return true;
  }

}
