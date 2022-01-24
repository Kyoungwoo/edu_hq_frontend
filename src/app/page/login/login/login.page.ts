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
    private device: DeviceService
  ) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(): void {
    // if(environment.autoTest) this.test();
  }

  private test() {
    this.testSignUp();
  }
  private async testSignUp() {
    const el = this.el.nativeElement;
    await this.promise.wait();

    if(environment.signUpTest < 4) {
      el.querySelector('[name=button_sign_up]').dispatchEvent(new Event('click'));
    }
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
    const res = await this.connect.run('/user/basic/get', {}, {
      parse: ['belong_data']
    });
    if(res.rsCode === 0) {
      const userData:UserData = res.rsObj;

      if(this.device.platform_type < 3) {
        this.nav.navigateRoot('/main-user', {
          animated: true
        });
      } else {
        if(!environment.production
        && userData.user_type === 'WORKER') {
          return;
        }
        this.nav.navigateRoot('/main-admin', {
          animated: true
        });
      }
      this.user.setAuthToken(authToken, this.autoLogin);
      this.user.setUserData(userData, this.autoLogin);
    }
  }
}