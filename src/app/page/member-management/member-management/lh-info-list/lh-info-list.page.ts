import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { LhInfoEditPage } from '../lh-info-edit/lh-info-edit.page';


class LhInfo {
  delete_state: number;
  user_id: number;
  ctgo_job_position_id: number;
  hq_regional_id: number;
  user_name: string;
  hq_regional_name: string;
  ctgo_job_position_name: string;
  update_date: string;
  row_count: number;
}

@Component({
  selector: 'app-lh-info-list',
  templateUrl: './lh-info-list.page.html',
  styleUrls: ['./lh-info-list.page.scss'],
})
export class LhInfoListPage implements OnInit {
  
  form = {
    hq_regional_id: this.user.userData.belong_data.hq_regional_id,

    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    
    limit_no: 0,

    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
  };

  res:ConnectResult<LhInfo>;

  selectedList = [];

  constructor(
    private modal : ModalController,
    private user: UserService,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    this.res = await this.connect.run('/usermanage/info/lh/list', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      // 정상
    } else if(this.res.rsCode === 1008) {
      // 데이터 없음
    }
    else if(this.res.rsCode === 3008) {
      // 비밀번호 없거나 틀렸음
      this.getPassword();
    } else {
      // 그외. 인터넷안됨, 서버연결안됨 등등
      this.getPassword();
      // this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async getPassword() {
    const modal = await this.modal.create({
      component: SecurityPasswordComponent,
      backdropDismiss:false,
      cssClass:"security-password-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component:LhInfoEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
  }
}
