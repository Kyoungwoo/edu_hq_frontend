import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    accountID: '',
    accountToken: ''
  }
  res:ConnectResult;

  constructor(
    private connect: ConnectService,
    private user: UserService,
    private nav: NavService
  ) { }

  ngOnInit() {
    
  }
  async login() {
    this.res = await this.connect.run('/token/get', this.form, {
      contentType: ContentType.ApplicationJson,
      loading: '로그인'
    });
    if(this.res.rsCode === 0) {
      this.user.setAuthToken(this.res.rsObj);
      /* this.nav.navigateRoot('/main-user', {
        animated: true
      }); */
    }
    return this.res;
  }
}
