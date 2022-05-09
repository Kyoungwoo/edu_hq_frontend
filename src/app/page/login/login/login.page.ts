import { LogoutService } from 'src/app/service/logout.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { AuthToken, UserData, UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewDidEnter {

  form = {
    accountID: '',
    accountToken: ''
  }
  saveId:boolean = false;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private user: UserService,
    private nav: NavService,
    private promise: PromiseService,
    private alert: AlertService,
    private logout: LogoutService
  ) { }

  ngOnInit() {
    if(this.user.accountID) {
      this.form.accountID = this.user.accountID;
      this.saveId = true;
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
    if(!await this.testLogin()) return;
    
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
    environment.test.Login.done = true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    //lh 마스터 테스트
    // el.querySelector('[name=accountID]').dispatchEvent(new CustomEvent('setValue', { detail: 'lh' }));
    // el.querySelector('[name=accountToken]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
    // el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
  }

  public async login() {
    if(this.saveId) this.user.setId(this.form.accountID);
    else this.user.removeId();
    
    this.res = await this.connect.run('/token/get', this.form, {
      contentType: ContentType.ApplicationJson,
      loading: '로그인'
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj);
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
  private async getWorkerInfo(authToken:AuthToken) {
    this.user.setAuthToken(authToken, false);
    const res = await this.connect.run('/user/basic/get', {}, {
      parse: ['belong_data']
    });
    if(res.rsCode === 0) {
      const userData:UserData = res.rsObj;
      if(userData.user_type === 'LH') await this.logout.getProjectList(userData);
      else await this.user.setUserData(userData, false);
      
      if(userData.user_type === 'WORKER') {
        this.res.rsCode = 500;
        this.res.rsMsg = '아이디와 비밀번호를 확인해주세요.';
        this.user.clear();
        return;
      }
      else if(userData.user_type === 'COMPANY') {
        userData.user_main_page = '/main-sub-admin';
      }
      else {
        userData.user_main_page = '/main-admin';
      }


      

      this.nav.navigateRoot(userData.user_main_page, {animated: true});
    }
  }
} 