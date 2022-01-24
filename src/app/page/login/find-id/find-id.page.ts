import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';


export class FindIdForm {
  user_name:string = null; // 성명
  user_phone:string = null; // 휴대폰 번호
  sms_token:string = null; // 인증번호
}
@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.page.html',
  styleUrls: ['./find-id.page.scss'],
})
export class FindIdPage implements OnInit {

  segment:'find-id'|'find-password';

  form = new FindIdForm();
  validator = new Validator(new FindIdForm()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
  changeSegment() {

  }

  // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
  public async overlapPhone() {
    const { user_phone } = this.form;
    if(!user_phone) return this.validator.user_phone = null;
    if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.sms_token = null;
  }
  public async aligoSend() {
    const { user_phone } = this.form;
    if(this.validator.user_phone?.valid === false) return;
    const res = await this.connect.run('/aligo/send', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  public async aligoCheck() {
    const { user_phone, sms_token } = this.form;
    const res = await this.connect.run('/aligo/check', { user_phone, sms_token });
    this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }
}
