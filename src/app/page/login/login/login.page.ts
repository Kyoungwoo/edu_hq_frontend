import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
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
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private user: UserService,
    private nav: NavService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(): void {
    //if(environment.autoTest) this.test();
  }

  private test() {
    this.testSignUp();
  }
  private async testSignUp() {
    console.log(environment.signUpTest);
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
      this.user.setAuthToken(this.res.rsObj);
      this.getWorkerInfo();
      this.nav.navigateRoot('/main-user', {
        animated: true
      });
    }
  }
  private async getWorkerInfo() {
    const res = await this.connect.run('/user/basic/get', {}, {
      parse: ['belong_data']
    });
    if(res.rsCode === 0) {
      this.user.setUserData(res.rsObj);
    }
  }
}