import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SecurityPasswordComponent } from '../../member-approval-wait/security-password/security-password.component';
import { PartnerIntoEditPage } from '../partner-into-edit/partner-into-edit.page';


class PartnerInfo {
  ctgo_construction_id: number;
  delete_state: number;
  company_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  ctgo_construction_name: string;
  ctgo_job_position_name: string;
  create_date: string;
  company_contract_type: string;
  user_id: number;
  user_birth: string;
  company_name: string;
  user_safe_job_id: number;
  approval_state: string;
  ctgo_safe_job_id: number;
  ctgo_safe_job_name: string;
  row_count: number;
  work_state: string;
  construction_state: string;
  index: number;
}

@Component({
  selector: 'app-partner-info-list',
  templateUrl: './partner-info-list.page.html',
  styleUrls: ['./partner-info-list.page.scss'],
})

export class PartnerInfoListPage implements OnInit {

  form = {
    project_id: 0,
    company_id: 0,
    ctgo_construction_ids: [],

    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    work_state: '출역중',
    limit_no: 0,
    construction_state: '출역중',

    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
  };

  validator = new Validator(new PartnerInfo()).validator;
  res:ConnectResult<PartnerInfo>;

  selectedList = [];

  permission = {
    companyChange: false, // 회사 변경 권한
  }

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
      return true;
    }
    else if(user_role === 'MASTER_HEAD') {
      this.form.project_id = belong_data.project_id;
      this.form.company_id = 0;

      this.permission.companyChange = false;
      return true;
    }
    else if(user_role === 'PARTNER_HEAD') {
      this.form.project_id = belong_data.project_id;
      this.form.company_id = belong_data.company_id;

      this.permission.companyChange = false;
      return true;
    } 
    else {
      return false;
    }
  }


  async edit(item) {
    const modal = await this.modal.create({
      component:PartnerIntoEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    const res = await this.connect.run('/usermanage/info/company/list', this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if(res.rsCode === 1008) {
      this.res = null;
      // 데이터 없음
    }
    else if(res.rsCode === 3008 || res.rsCode === 3009) {
      // 비밀번호 없거나 틀렸음
      this.getPassword();
    } else {
      // 그외. 인터넷안됨, 서버연결안됨 등등
      this.toast.present({ color: 'warning', message: res.rsMsg });
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
    if(data) this.get();
  }

}
