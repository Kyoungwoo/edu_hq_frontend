import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

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

  cancle() {
    // this.nav.navigateRoot('/main-user-worker'); 
    this.nav.navigateRoot('/main-user-partner'); 
  }
}
