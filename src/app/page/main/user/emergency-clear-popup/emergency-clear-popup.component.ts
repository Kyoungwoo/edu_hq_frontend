import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-emergency-clear-popup',
  templateUrl: './emergency-clear-popup.component.html',
  styleUrls: ['./emergency-clear-popup.component.scss'],
})
export class EmergencyClearPopupComponent implements OnInit {
  @Input() message:string;

  constructor(
    private _modal : ModalController,
    private nav: NavService
  ) { }

  ngOnInit() {}

  async dismiss() {
    this._modal.dismiss().then(() => {
      // this.nav.navigateRoot('/sos-popup'); 
    });
  }

}
