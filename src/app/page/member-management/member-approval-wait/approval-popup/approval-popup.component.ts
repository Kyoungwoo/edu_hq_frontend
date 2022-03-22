import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';


@Component({
  selector: 'app-approval-popup',
  templateUrl: './approval-popup.component.html',
  styleUrls: ['./approval-popup.component.scss'],
})
export class ApprovalPopupComponent implements OnInit {
  @Input() selectedList = [];
  @Input() approval_user_ids;
  @Input() user_name;
  @Input() state;

  form = {
    user_id: this.user.userData.user_id,
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
    private alert: AlertService
  ) { }

  ngOnInit() {
    if(this.selectedList.length){
      this.selectedList?.forEach(item => {
        this.form.approval_user_ids.push(item.user_id)
        this.form.user_name.push(item.user_name);
      });

    }else{
      this.form.approval_user_ids = [this.approval_user_ids]
      this.form.user_name = this.user_name;
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
    if (res.rsCode === 0) {
      this._modal_2.dismiss('Y');
    }
  }


  async approval() {
    let method = '';
    let page_name = '';

    switch(this.state){
      case 'worker':
        method = '/usermanage/approval/worker/approval/update';
        page_name = '/worker-info-list';
        break;
      case 'lh':
        method = '/usermanage/approval/lh/approval/update';
        page_name = '/lh-info-list';
        break;
      case 'supervision':
        method = '/usermanage/approval/super/approval/update';
        page_name = '/supervision-info-list';
        break;
      case 'partner':
        method = '/usermanage/approval/company/approval/update';
        page_name = '/partner-info-list';
        break;
    }
    this._modal_2.dismiss(true);

    const res = await this.connect.run(method, this.form);
    if (res.rsCode === 0) {
      this.nav.navigateForward(page_name, {
        force: true
      });
    }
  }
}