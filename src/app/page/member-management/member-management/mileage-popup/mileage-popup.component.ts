import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-mileage-popup',
  templateUrl: './mileage-popup.component.html',
  styleUrls: ['./mileage-popup.component.scss'],
})
export class MileagePopupComponent implements OnInit {

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

  ngOnInit() {}


}
