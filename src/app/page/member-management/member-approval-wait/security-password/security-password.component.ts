import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-security-password',
  templateUrl: './security-password.component.html',
  styleUrls: ['./security-password.component.scss'],
})
export class SecurityPasswordComponent implements OnInit {

  form = {
    company_id : this.user.userData.belong_data.company_id,
    company_password : '',
    user_manage_session: ''
  };

  res:ConnectResult<any>;

  constructor(
    private _modal : ModalController,
    private user: UserService,
    private connect: ConnectService,
    private alert: AlertService
    
  ) { }

  ngOnInit() {}

  async submit() {


    this.res = await this.connect.run('/info/user/login', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      // 정상
      console.log(this.res.rsObj.user_manage_session)
      this.user.setMemberAuthToken(this.res.rsObj.user_manage_session);
      this._modal.dismiss(true);
    } else if(this.res.rsCode === 3008) {
      this.res.rsMsg = '비밀번호가 올바르지 않습니다.'
    }
  }
}
