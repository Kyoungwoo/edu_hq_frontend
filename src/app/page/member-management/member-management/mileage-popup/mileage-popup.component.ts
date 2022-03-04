import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

export class MileageItem {
  ctgo_safe_mileage_en: string = null;
  ctgo_safe_mileage_state: string = null;
  ctgo_safe_mileage_point: number = 0;
  ctgo_safe_mileage_kr: string = null;
  ctgo_safe_mileage_vi: string = null;
  ctgo_safe_mileage_ch: string = null;
  ctgo_safe_mileage_id: number = 0;

}

@Component({
  selector: 'app-mileage-popup',
  templateUrl: './mileage-popup.component.html',
  styleUrls: ['./mileage-popup.component.scss'],
})

export class MileagePopupComponent implements OnInit {

  @Input() company_id;
  @Input() user_id;

  form = {
    company_id: 0,
    search_text: ''
  }

  res: ConnectResult<MileageItem>;
  selectItem: MileageItem;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private nav: NavService,
    private user: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.get();
  }


  async get() {
    this.form.company_id = this.company_id;
    this.res = await this.connect.run('/category/mileage/receive/get',this.form,{
      loading: true
    });

  }
  async submit() {
    const alert = await this.alert.present({
      message: '적용 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const form = {
              ...this.selectItem,
              ctgo_safe_mileage_state: 'RECEIVE',
              session_company_id: this.user.userData.belong_data.company_id,
              user_manage_session: this.user.memberAuthToken,
              user_id: this.user_id
            }

            
            const res = await this.connect.run('/usermanage/info/worker/mileage/insert',form);
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    })
  }
  async add() {
    this.selectItem = new MileageItem();
  }
}
