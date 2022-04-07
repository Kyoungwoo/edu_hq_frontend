import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { EmergencyPopupComponent } from 'src/app/component/page/main/user/emergency-popup/emergency-popup.component';

@Component({
  selector: 'app-sos-popup',
  templateUrl: './sos-popup.page.html',
  styleUrls: ['./sos-popup.page.scss'],
})
export class SosPopupPage implements OnInit {

  constructor(
    private _modal : ModalController,
    private nav: NavService
  ) { }

  ngOnInit() {
  }

  async cancle() {
    // this.nav.navigateRoot('/main-user-worker'); 
    this.nav.navigateRoot('/main-user-partner'); 
  }

  async submit() {
    const _modal = await this._modal.create({
      component:EmergencyPopupComponent,
      cssClass:"emergency-modal"
    });
    _modal.present();
  }
}
