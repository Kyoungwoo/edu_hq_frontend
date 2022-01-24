import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { DeviceService } from 'src/app/basic/service/core/device.service';
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
    
  }
  ionViewDidEnter(): void {
    if(environment.autoTest) this.test();
  }

  private async test() {
    if(!environment.autoTest.core.test) return;
    if(!await this.testSignUp()) return;
    if(!await this.testFindId()) return;
    if(!await this.testFindPassord()) return;
    this.alert.present({
      header: '테스트 완료',
      message: '테스트 완료'
    });
  }
  private async testSignUp():Promise<boolean> {
    if(!environment.autoTest.SignUp.test) return true;
    if(environment.autoTest.SignUp.done) return true;
    
    const el = this.el.nativeElement;
    await this.promise.wait();

    if(environment.autoTest.SignUp.num < 4) {
      el.querySelector('[name=button_sign_up]').dispatchEvent(new Event('click'));
      return false;
    } else {
      environment.autoTest.SignUp.done = true;
      return true;
    }
  }
  private async testFindId():Promise<boolean> {
    if(!environment.autoTest.FindId.test) return true;
    if(environment.autoTest.FindId.done) return true;
    environment.autoTest.FindId.done = true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=button_find_id]').dispatchEvent(new Event('click'));
    return false;
  }
  private async testFindPassord():Promise<boolean> {
    if(!environment.autoTest.FindPassword.test) return true;
    if(environment.autoTest.FindPassword.done) return true;
    environment.autoTest.FindPassword.done = true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=button_find_password]').dispatchEvent(new Event('click'));
    return false;
  }

  public async login() {
    this.res = await this.connect.run('/token/get', this.form, {
      contentType: ContentType.ApplicationJson,
      loading: '로그인'
    });
    if(this.res.rsCode === 0) {
      this.getWorkerInfo(this.res.rsObj);
      
    }
  }
  private async getWorkerInfo(authToken:AuthToken) {
    this.user.setAuthToken(authToken, this.autoLogin);
    const res = await this.connect.run('/user/basic/get', {}, {
      parse: ['belong_data']
    });
    if(res.rsCode === 0) {
      const userData:UserData = res.rsObj;

      if(!environment.production
      && userData.user_type === 'WORKER') {
        this.res.rsCode = 1002;
        this.res.rsMsg = '근로자는 앱으로 로그인 해주세요.';
        this.user.clear();
        return;
      }

      this.user.setUserData(userData, this.autoLogin);
      this.nav.navigateRoot('/main-admin', {
        animated: true
      });
    }
  }
}