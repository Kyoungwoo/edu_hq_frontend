import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { WorkerInfoEditPage } from '../worker-info-edit/worker-info-edit.page';

export class WorkerInfo {
  ctgo_construction_id: number;
  ctgo_job_position_name_kr: string;
  delete_state: number;
  company_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  ctgo_construction_name: string;
  ctgo_occupation_name_kr: string;
  ctgo_country_name_kr: string;
  ctgo_occupation_id: number;
  user_id: number;
  company_name: string;
  ctgo_country_id: number;
  create_date: string;
  user_health: string;
  row_count:0
}

@Component({
  selector: 'app-worker-info-list',
  templateUrl: './worker-info-list.page.html',
  styleUrls: ['./worker-info-list.page.scss'],
})
export class WorkerInfoListPage implements OnInit {

  form = {
    company_id: 0,
    ctgo_construction_ids: [],
    start_date: this.date.today({ month: -3 }),
    end_date: this.date.today(),
    project_id: 0,
    search_text: '',
    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
    limit_no: 0
  }

  res:ConnectResult<WorkerInfo>

  permission = {
    companyChange: false, // 회사 변경 권한
    approval: false // 가입승인 권한
  }

  constructor(
    private connect: ConnectService,
    private modal : ModalController,
    private user: UserService,
    private date: DateService,
    private toast: ToastService,
    private nav: NavService,
  ) { }

  ngOnInit() {
    if(!this.getPermission()) {
      this.toast.present({ color: 'warning', message: '잘못된 접근입니다.' }); 
      this.nav.navigateRoot('/login'); 
    } else {
      this.get();
    }
  }

  getPermission() {
    const { user_role, user_type, belong_data } = this.user.userData;
    if(user_type === 'LH') {
      this.form.project_id = 0;
      this.form.company_id = 0;
      
      this.permission.companyChange = true;
      this.permission.approval = false;
      return true;
    }
    else if(user_role === 'MASTER_HEAD') {
      this.form.project_id = belong_data.project_id;
      this.form.company_id = belong_data.company_id;

      this.permission.companyChange = false;
      this.permission.approval = true;
      return true;
    }
    else if(user_role === 'PARTNER_HEAD') {
      this.form.project_id = belong_data.project_id;
      this.form.company_id = belong_data.company_id;

      this.permission.companyChange = false;
      this.permission.approval = true;
      return true;
    } 
    else {
      return false;
    }
  }
  

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    this.res = await this.connect.run('/usermanage/info/worker/list', this.form, {
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
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component:WorkerInfoEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
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
}
