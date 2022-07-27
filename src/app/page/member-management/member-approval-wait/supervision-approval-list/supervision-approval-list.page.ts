import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SupervisionEditPage } from 'src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.page';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';
import { SupervisionApprovalEditPage } from '../supervision-approval-edit/supervision-approval-edit.page';

class SupervisionApprovalInfo {
  // ctgo_construction_id: number;
  ctgo_job_position_name: string;
  company_id: number;
  user_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  company_name: string;
  ctgo_construction_name: string;
  create_date: string;
  approval_state: string;
  row_count: number;
  index: number
}

@Component({
  selector: 'app-supervision-approval-list',
  templateUrl: './supervision-approval-list.page.html',
  styleUrls: ['./supervision-approval-list.page.scss'],
})
export class SupervisionApprovalListPage implements OnInit {

  form = {
    approval_state: '전체',
    project_id: 0,
    company_id: 0,
    // ctgo_construction_ids: [],

    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    
    limit_no: 0,

    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
  };

  validator = new Validator(new SupervisionApprovalInfo()).validator;
  res:ConnectResult<SupervisionApprovalInfo>;

  selectedList = [];

  permission = {
    approval: false // 가입승인 권한
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
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    const res = await this.connect.run('/usermanage/approval/super/list', this.form);
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
    if(data) {
      this.get();
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component:SupervisionApprovalEditPage,
      componentProps:{
        item,
        state: 'supervision'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
      if(data.state === 'approval') this.nav.navigateForward(data.page_name, {force: true});
    }
  }

  async approval() {
    if(!this.selectedList.length) return await this.toast.present({message:'관리자를 선택해주세요.', color:'warning'})
    const modal = await this.modal.create({
      component:ApprovalPopupComponent,
      componentProps:{
        selectedList:this.selectedList,
        state: 'supervision'
      },
      cssClass:"approval-modal"
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }
}
