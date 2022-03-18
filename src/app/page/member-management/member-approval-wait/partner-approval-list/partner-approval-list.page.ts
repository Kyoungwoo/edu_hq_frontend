import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalPopupComponent } from '../approval-popup/approval-popup.component';
import { PartnerApprovalEditPage } from '../partner-approval-edit/partner-approval-edit.page';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

class PartnerApprovalInfo {
  ctgo_construction_id: number;
  ctgo_job_position_name: string;
  company_contract_type: string;
  company_id: number;
  ctgo_safe_job_name: string;
  ctgo_job_position_id: number;
  user_name: string;
  ctgo_construction_name: string;
  user_id: number;
  company_name: string;
  user_safe_job_id: number;
  create_date: string;
  approval_state: string;
  ctgo_safe_job_id: number;
  row_count: number;
  index: number;
}

@Component({
  selector: 'app-partner-approval-list',
  templateUrl: './partner-approval-list.page.html',
  styleUrls: ['./partner-approval-list.page.scss'],
})
export class PartnerApprovalListPage implements OnInit {

  form = {
    approval_state: '전체',
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

  validator = new Validator(new PartnerApprovalInfo()).validator;
  res:ConnectResult<PartnerApprovalInfo>;

  selectedList = [];

  permission = {
    companyChange: false, // 회사 변경 권한
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
    const res = await this.connect.run('/usermanage/approval/company/list', this.form);
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
      component:PartnerApprovalEditPage,
      componentProps:{
        item,
        state: 'partner'
      }
    });
    modal.present();
  }

  async approval() {
    if(!this.selectedList.length) return await this.toast.present({message:'관리자를 선택해주세요.', color:'warning'})
    const modal = await this.modal.create({
      component:ApprovalPopupComponent,
      componentProps:{
        selectedList:this.selectedList,
        state: 'partner'
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
