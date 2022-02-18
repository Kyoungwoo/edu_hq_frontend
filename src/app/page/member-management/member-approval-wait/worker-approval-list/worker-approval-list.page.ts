import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../security-password/security-password.component';
import { WorkerApprovalEditPage } from '../worker-approval-edit/worker-approval-edit.page';

class WorkerInfo {
  ctgo_construction_id: number;
  create_user_id: number;
  company_id: number;
  user_name: string;
  ctgo_construction_name: string;
  ctgo_country_name_kr: string;
  update_date: string;
  update_user_id: number;
  user_id: number;
  company_name: string;
  ctgo_country_id: number;
  approval_state: string;
  create_date: string;
  user_health: string;
  row_count: number;
}
@Component({
  selector: 'app-worker-approval-list',
  templateUrl: './worker-approval-list.page.html',
  styleUrls: ['./worker-approval-list.page.scss'],
})
export class WorkerApprovalListPage implements OnInit {

  form = {
    approval_state: '전체',
    company_id: 0,
    session_company_id: this.user.userData.belong_data.company_id,
    ctgo_construction_ids: [],
    end_date: this.date.today(),
    project_id: 0,
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0,
    user_manage_session: ''
  };

  res:ConnectResult<WorkerInfo>;

  selectedList = [];
  constructor(
    private user: UserService,
    private modal : ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService
  ) { }

  ngOnInit() {
      this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;

    this.res = await this.connect.run('/usermanage/approval/worker/list', this.form, {
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
      this.toast.present({ color: 'danger', message: this.res.rsMsg });
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
      component:WorkerApprovalEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
  }

  async approval() {
    if(!this.selectedList.length) return await this.toast.present({message:'작업자를 선택해주세요.', color:'warning'})
    const modal = await this.modal.create({
      component:ApprovalPopupComponent,
      componentProps:{
        selectedList:this.selectedList
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
