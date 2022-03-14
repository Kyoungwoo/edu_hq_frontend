import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { SupervisionInfoEditPage } from '../supervision-info-edit/supervision-info-edit.page';

class SupervisionInfo {
  ctgo_construction_id: number;
  ctgo_job_position_name: string;
  delete_state: number;
  company_id: number;
  user_id: number;
  ctgo_job_position_id: number;
  user_birth: string;
  user_name: string;
  company_name: string;
  ctgo_construction_name: string;
  approval_state: string;
  update_date: string;
  row_count: number;
}

@Component({
  selector: 'app-supervision-info-list',
  templateUrl: './supervision-info-list.page.html',
  styleUrls: ['./supervision-info-list.page.scss'],
})
export class SupervisionInfoListPage implements OnInit {

  form = {
    
    project_id: 0,
    company_id: 0,
    ctgo_construction_ids: [],

    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    
    limit_no: 0,

    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
  };

  validator = new Validator(new SupervisionInfo()).validator;
  res:ConnectResult<SupervisionInfo>;

  constructor(
    private user: UserService,
    private modal : ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    private nav: NavService,
    private file: FileService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    this.res = await this.connect.run('/usermanage/info/super/list', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      // 정상
    } else if(this.res.rsCode === 1008) {
      this.res = null;
      // 데이터 없음
    }
    else if(this.res.rsCode === 3008 || this.res.rsCode === 3009) {
      // 비밀번호 없거나 틀렸음
      this.getPassword();
    } else {
      // 그외. 인터넷안됨, 서버연결안됨 등등
      
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
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
      component:SupervisionInfoEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
  }
}
