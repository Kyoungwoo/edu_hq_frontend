import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';

@Component({
  selector: 'app-security-password',
  templateUrl: './security-password.component.html',
  styleUrls: ['./security-password.component.scss'],
})
export class SecurityPasswordComponent implements OnInit {

  form = {
    auth_token: ''
  };

  res:ConnectResult<any>;

  constructor(
    private _modal : ModalController,
    private user: UserService,
    private connect: ConnectService
  ) { }

  ngOnInit() {}

  async submit() {


    this.res = await this.connect.run('', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      // 정상
      this.user.setMemberAuthToken(this.res.rsObj.authToken);
      this._modal.dismiss(true);
    } else {
      // 그외. 인터넷안됨, 서버연결안됨 등등
    }
  }
}
