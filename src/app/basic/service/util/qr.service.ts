import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerComponent } from 'src/app/basic/component/dialog/qr-scanner/qr-scanner.component';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  qr_subs:Subscription;
  qr_value = null;
  qr_response = {
    qr_data: '',
    qr_qrScanner: null,
    qr_modal: null,
    qr_subs: null
  }

  constructor(
    private _modal : ModalController
  ) { }

  qrCallback;

  async subscribe(callback) {
    console.log("callback",callback)
    this.qrCallback = callback;
    
    const modal = await this._modal.create({
      component:QrScannerComponent,
      cssClass:'scan-modal',
      componentProps: {
        getQrData: (value) => {
          this.getQrData(value);
        }
      }
    });
    modal.present();

      return {
        unsubscribe: () => {
          this.qrCallback = null;
          modal.dismiss();
          const routerEl = document.querySelector('ion-router-outlet');
          const ionApp = document.getElementsByTagName('ion-app')[0];
          ionApp.style.backgroundColor = 'transparent';
          routerEl.style.display = 'flex';
          this.qr_response.qr_modal.dismiss();
          this.qr_response.qr_subs.unsubscribe();
          // this.qr_response.qr_qrScanner.distroy();
        }
      };
  };
  x
  async getQrData(value) {
    this.qr_response = {...value};
    return this.qrCallback(value);
  }
}
