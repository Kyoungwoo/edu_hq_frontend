import { NavService } from './../../../../basic/service/ionic/nav.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { LhApprovalEditPage } from '../lh-approval-edit/lh-approval-edit.page';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

class LhApprovalInfo {
  ctgo_job_position_name: string;
  user_id: number;
  ctgo_job_position_id: number;
  hq_regional_id: number;
  user_name: string;
  hq_regional_name: string;
  create_date: string;
  approval_state: string;
  row_count: number;
  state: string;
  index: number
}

@Component({
  selector: 'app-lh-approval-list',
  templateUrl: './lh-approval-list.page.html',
  styleUrls: ['./lh-approval-list.page.scss'],
})
export class LhApprovalListPage implements OnInit {

  form = {
    approval_state: '전체',
    hq_regional_id: this.user.userData.belong_data.hq_regional_id,

    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    
    limit_no: 0,

    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: '',
  };

  res:ConnectResult<LhApprovalInfo>;

  selectedList = [];

  constructor(
    private modal : ModalController,
    private user: UserService,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    private nav: NavService,
  ) { }

  ngOnInit() {
    this.get();
  }

  
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const authToken = this.user.memberAuthToken;
    this.form.user_manage_session = authToken;
    const res = await this.connect.run('/usermanage/approval/lh/list', this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
     
    if(res.rsCode === 0) {
      // 정상
      this.res.rsMap.map((item) => {item.state = 'lh'});
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
      if(data.state === 'approval') this.nav.navigateForward(data.page_name, {force: true});
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component:LhApprovalEditPage,
      componentProps:{
        item,
        state: 'lh'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) this.get();    
  }

  async approval() {
    if(!this.selectedList.length) return await this.toast.present({message:'관리자를 선택해주세요.', color:'warning'})
    const modal = await this.modal.create({
      component:ApprovalPopupComponent,
      componentProps:{
        selectedList:this.selectedList,
        state: 'lh'
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
