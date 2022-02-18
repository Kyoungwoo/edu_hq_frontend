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

  form = {
    user_id: this.user.userData.user_id,
    approval_user_ids: [],
    approval_text: '',
    user_name: [],
    session_company_id: this.user.userData.belong_data.company_id,
    user_manage_session: this.user.memberAuthToken

  }

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private nav: NavService,
    private user: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    if(this.selectedList.length){
      this.selectedList?.forEach(item => {
        //selectedList에 무슨 데이터 담겨있는지 알 수 있는 콘솔
        console.log(item);
        this.form.approval_user_ids.push(item.user_id)
        this.form.user_name.push(item.user_name);
      });

    }else{
      this.form.approval_user_ids = [this.approval_user_ids]
      this.form.user_name = this.user_name;
    } 
  }

  async companion() {
    const res = await this.connect.run('/usermanage/approval/worker/companion/update', this.form);
    if (res.rsCode === 0) {
      this._modal.dismiss('Y');
    }
  }


  async approval() {
    const res = await this.connect.run('/usermanage/approval/worker/approval/update', this.form);
    if (res.rsCode === 0) {
      this._modal.dismiss('Y');
      this.nav.navigateForward('/worker-info-list', {
        force: true
      });
    }
  }
}