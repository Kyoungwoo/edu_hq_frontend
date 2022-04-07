import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { EmergencyClearPopupComponent } from '../emergency-clear-popup/emergency-clear-popup.component';

@Component({
  selector: 'app-emergency-popup',
  templateUrl: './emergency-popup.component.html',
  styleUrls: ['./emergency-popup.component.scss'],
})
export class EmergencyPopupComponent implements OnInit {

  constructor(
    private _modal_: ModalController,
    private user:  UserService,
    private connect: ConnectService,
    private alert: AlertService,
    private nav: NavService,
  ) { }

  ngOnInit() {}

  async dismiss() {
    this._modal_.dismiss().then(() => {
      this.nav.navigateRoot('/sos-popup'); 
    });
  }

  async finish() {
    this._modal_.dismiss();
    const modal = await this._modal_.create({
      component:EmergencyClearPopupComponent,
      cssClass:"emergency-clear-modal"
    });
    modal.present();
  }

}