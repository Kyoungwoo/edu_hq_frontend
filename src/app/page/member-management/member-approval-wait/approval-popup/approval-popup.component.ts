import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


@Component({
  selector: 'app-approval-popup',
  templateUrl: './approval-popup.component.html',
  styleUrls: ['./approval-popup.component.scss'],
})
export class ApprovalPopupComponent implements OnInit {
  @Input() selectedList = [];
  @Input() approval_user_ids;
  @Input() user_name:string;
  @Input() state;

  form = {
    user_id: this.user.userData.user_id,
    work_contract_type: '일용직',
    approval_user_ids: [],
    approval_text: '',
    user_name: [],
    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: this.user.memberAuthToken

  }

  constructor(
    private _modal_2: ModalController,
    private connect: ConnectService,
    private nav: NavService,
    private user: UserService,
    private alert: AlertService,
    private toast: ToastService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    if(this.selectedList.length){

      this.selectedList.forEach(item => {
        this.form.approval_user_ids.push(item.user_id)
        this.form.user_name.push(item.user_name);
      });

    } else {

      this.form.approval_user_ids = [this.approval_user_ids]
      this.form.user_name = [this.user_name];

    } 
  }

  async companion() {
    let method = '';

    switch(this.state){
      case 'worker':
        method = '/usermanage/approval/worker/companion/update';
        break;
      case 'lh':
        method = '/usermanage/approval/lh/companion/update';
        break;
      case 'supervision':
        method = '/usermanage/approval/super/companion/update';
        break;
      case 'partner':
        method = '/usermanage/approval/company/companion/update';
        break;
    }
    const res = await this.connect.run(method, this.form);
    if (res.rsCode === 0) this._modal_2.dismiss({state: 'reject',page_name: null});
  }


  async approval() {
    const loading = await this.loading.present();
    let method = '';
    let page_name = '';

    switch(this.state) {
      case 'worker':
        this.approvalWorker();
        break;

      case 'lh':
        method = '/usermanage/approval/lh/approval/update';
        page_name = '/lh-info-list';
        this.approvalAdmin(method, page_name);
        break;
      case 'supervision':
        method = '/usermanage/approval/super/approval/update';
        page_name = '/supervision-info-list';
        this.approvalAdmin(method, page_name);
        break;
      case 'partner':
        method = '/usermanage/approval/company/approval/update';
        page_name = '/partner-info-list';
        this.approvalAdmin(method, page_name);
        break;
    }
    loading.dismiss();
  }

  async approvalWorker() {

    for(let i = 0; i < this.form.approval_user_ids.length; i++) {
      const approval_user_id = this.form.approval_user_ids[i];

      const res1 = await this.connect.run('/usermanage/approval/worker/workcontract/update', {
        approval_user_id,
        session_company_id: this.form.session_company_id,
        user_manage_session: this.form.user_manage_session,
        work_contract_type: this.form.work_contract_type
      });
      if(res1.rsCode) {
        this.toast.present({ color: 'warning', message: res1.rsMsg });
        return;
      }
    }

    const res2 = await this.connect.run('/usermanage/approval/worker/approval/update', this.form);
    if(res2.rsCode === 0) {
      this._modal_2.dismiss({state: 'approval', page_name: '/worker-info-list'});
    }
    else {
      this.toast.present({ color: 'warning', message: res2.rsMsg });
    }
  }

  async approvalAdmin(method, page_name) {

    const res = await this.connect.run(method, this.form);

    if (res.rsCode === 0) this._modal_2.dismiss({state: 'approval', page_name: page_name});

  }
}