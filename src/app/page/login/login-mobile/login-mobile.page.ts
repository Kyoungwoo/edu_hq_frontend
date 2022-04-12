import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { UserService, AuthToken, UserData } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../login.interface';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.page.html',
  styleUrls: ['./login-mobile.page.scss'],
})
export class LoginMobilePage implements OnInit {

  form = new LoginForm();
  autoLogin:boolean = false;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private user: UserService,
    private nav: NavService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    private device: DeviceService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    if(this.user.autoLogin) {
      this.tokenLogin();
    }
  }
  ionViewDidEnter(): void {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!await this.testSignUp()) return;
    if(!await this.testFindId()) return;
    if(!await this.testFindPassord()) return;
    
    this.alert.present({
      header: '테스트 완료',
      message: '테스트 완료'
    });
  }
  private async testSignUp():Promise<boolean> {
    if(!environment.test.SignUp.test) return true;
    if(environment.test.SignUp.done) return true;
    
    const el = this.el.nativeElement;
    await this.promise.wait();

    if(environment.test.SignUp.type.length) {
      el.querySelector('[name=button_sign_up]').dispatchEvent(new Event('click'));
      return false;
    } else {
      environment.test.SignUp.done = true;
      return true;
    }
  }
  private async testFindId():Promise<boolean> {
    if(!environment.test.FindId.test) return true;
    if(environment.test.FindId.done) return true;
    environment.test.FindId.done = true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=button_find_id]').dispatchEvent(new Event('click'));
    return false;
  }
  private async testFindPassord():Promise<boolean> {
    if(!environment.test.FindPassword.test) return true;
    if(environment.test.FindPassword.done) return true;
    environment.test.FindPassword.done = true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=button_find_password]').dispatchEvent(new Event('click'));
    return false;
  }
  private async testLogin():Promise<boolean> {
    if(!environment.test.Login.test) return true;
    if(environment.test.Login.done) return true;
  }

  public async login() {
    this.res = await this.connect.run('/token/get', this.form, {
      contentType: ContentType.ApplicationJson,
      loading: '로그인'
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj, { animated: true });
    } else if(this.res.rsCode === 500) {
      this.res.rsMsg = '아이디와 비밀번호를 확인해주세요.';
    } else if(this.res.rsCode === 3003) {
      this.alert.present({
        message: this.res.rsMsg
      });
    } else if(this.res.rsCode === 3004) {
      this.alert.present({
        message: this.res.rsMsg,
        buttons: [
          { text: '예, 재가입 신청하겠습니다.' },
          { text: '아니오, 가입하지 않겠습니다.' }
        ]
      });
    }
  }
  public async tokenLogin() {
    this.res = await this.connect.run('/token/refresh', {
      accountID: this.user.userData.account_id,
      refreshToken: this.user.authToken.refresh_token
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj, { animated: false });
    } else if(this.res.rsCode === 500) {
      this.res.rsMsg = '인증 토큰이 만료되었습니다. 다시 로그인해주세요.';
    } else if(this.res.rsCode === 3003) {
      this.alert.present({
        message: this.res.rsMsg
      });
    } else if(this.res.rsCode === 3004) {
      this.alert.present({
        message: this.res.rsMsg,
        buttons: [
          { text: '예, 재가입 신청하겠습니다.' },
          { text: '아니오, 가입하지 않겠습니다.' }
        ]
      });
    }
  }
  private async getWorkerInfo(authToken:AuthToken, { animated }) {
    this.user.setAuthToken(authToken, this.autoLogin);
    const res = await this.connect.run('/user/basic/get', {}, {
      parse: ['belong_data']
    });
    if(res.rsCode === 0) {
      const userData:UserData = res.rsObj;

      switch(userData.user_type){
        case 'LH':
        case 'SUPER':
          userData.user_main_page = '/main-user';
          break;
        case 'COMPANY':
          if(userData.user_role === 'MASTER_HEAD' || userData.user_role === 'MASTER_GENERAL') userData.user_main_page = '/main-user-master';
          else userData.user_main_page = '/main-user-partner';
          break;
        case 'WORKER':
          userData.user_main_page = '/main-user-worker';
          break;
      }

      this.user.setUserData(userData, this.autoLogin);
      this.nav.navigateRoot(userData.user_main_page, {animated});
    }
  }
}
