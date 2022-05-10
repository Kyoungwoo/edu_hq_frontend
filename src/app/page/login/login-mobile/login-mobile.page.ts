import { Platform } from '@ionic/angular';
import { LogoutService } from 'src/app/service/logout.service';
import { PushService } from './../../../service/push.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
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
    private alert: AlertService,
    private push: PushService,
    private logout: LogoutService
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
      loading: true
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj, { animated: true });
    } 
    else if(this.res.rsCode === 500) {
      this.res.rsMsg = '아이디와 비밀번호를 확인해주세요.';
    } 
    else if(this.res.rsCode === 3003) {
      this.alert.present({
        message: this.res.rsMsg
      });
    } 
    else if(this.res.rsCode === 3004) {
      this.alert.present({
        message: this.res.rsMsg,
        buttons: [
          { text: '닫기' },
          { 
            text: '재가입',
            handler: async() => {
              let method = await this.connect.run('/sign/delete/userinfo', {user_id: this.res.rsObj.user_id}, {loading: true});
              if(method.rsCode === 0) this.nav.navigateForward('/sign-up-type');
              else this.alert.present({message: this.res.rsMsg });
            }
          }
        ]
      });
    }
  }

  public async tokenLogin() {
    this.res = await this.connect.run('/token/refresh', {
      accountID: this.user.userData.account_id,
      refreshToken: this.user.authToken?.refresh_token
    }, {
      contentType: ContentType.ApplicationJson,
      loading: true
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj, { animated: false });
    } else if(this.res.rsCode === 500) {
      
    } else if(this.res.rsCode === 3003) {
      this.alert.present({
        message: this.res.rsMsg
      });
    } else if(this.res.rsCode === 3004) {
      this.alert.present({
        message: this.res.rsMsg,
        buttons: [
          { text: '닫기' },
          { text: '재가입' }
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
      if(userData.user_type === 'LH') await this.logout.getProjectList(userData);
      await this.user.setUserData(userData, this.autoLogin);

      switch(userData.user_type) {
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

      // 로그인이 완료되면 푸시, 유저데이터저장, 메인페이지 활성화
      this.push.init();
      
      this.nav.navigateRoot(userData.user_main_page, {animated});
    }
  }
}
