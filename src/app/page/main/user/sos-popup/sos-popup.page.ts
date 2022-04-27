import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-sos-popup',
  templateUrl: './sos-popup.page.html',
  styleUrls: ['./sos-popup.page.scss'],
})
export class SosPopupPage implements OnInit {
  form = {
    project_id: this.user.userData.belong_data.project_id,
    company_id: this.user.userData.belong_data.company_id
  }

  constructor(
    private _modal : ModalController,
    private nav: NavService,
    private alert: AlertService,
    private connect: ConnectService,
    private toast: ToastService,
    public user: UserService
  ) { }

  ngOnInit() {
  }

  async cancel() {
    this._modal.dismiss();
  }

  async submit() {
    const alertSOS = await this.alert.present({
      header:'SOS요청을 하시겠습니까?',
      buttons: [
        {text: '아니요', role: 'cancel'},
        {
          text:'예',
          handler: async() => {
            const res = await this.connect.run('/main/sos/insert', this.form, {loading:true});
            switch (res.rsCode) {
              case 0:
                this.toast.present({color: 'success', message: '비상 SOS요청이 발송되었습니다.'});
                break;
              default:
                this.toast.present({ color: 'warning', message: res.rsMsg });
                break;
            }
          }
        }
      ]
    });
    // const _modal = await this._modal.create({
    //   component:EmergencyPopupComponent,
    //   cssClass:"emergency-modal"
    // });
    // _modal.present();
  }
}
