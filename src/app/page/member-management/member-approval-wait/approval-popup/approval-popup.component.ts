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

  form = {
    user_id: this.user.userData.user_id,
    approval_user_ids: [],
    approval_text: '',
    user_name: []
  }
  @Input() selectedList

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private nav: NavService,
    private user: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.selectedList.forEach(item => {
      //selectedList에 무슨 데이터 담겨있는지 알 수 있는 콘솔
      console.log(item);
      this.form.approval_user_ids.push(item.user_id)
      this.form.user_name.push(item.user_name);

    });
    // 텍스트 형식으로 바꿈
    console.log("this.form.approval_text", this.form.approval_text);
    console.log("this.selectedList", this.selectedList);
  }

  async companion() {
    const res = await this.connect.run('/approval/worker/companion/update', this.form);
    if (res.rsCode === 0) {
      this._modal.dismiss('Y');
    }
  }


  async approval() {
    const res = await this.connect.run('/approval/worker/approval/update', this.form);
    if (res.rsCode === 0) {
      const alert = await this.alert.present({
        message: '작업자 정보로 이동하시겠습니까?',
        buttons: [
          {
            text: '아니오',
            handler: async () => {
              this._modal.dismiss('Y');
            }
          },
          {
            text: '예',
            handler: async () => {
              this.nav.navigateForward('/worker-info-list');
            }
          }
        ]
      });
      alert.present();
    }
  }
}

