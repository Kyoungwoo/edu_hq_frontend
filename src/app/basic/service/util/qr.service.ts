import { ModalController } from '@ionic/angular';
import { QrScannerComponent } from 'src/app/basic/component/dialog/qr-scanner/qr-scanner.component';
import { Subscription } from 'rxjs';
import { Injectable, Input } from '@angular/core';

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
  @Input() item;
 
constructor(
    private _modal : ModalController,
    
    ) { }
    qrCallback;
    
  async subscribe(type?,callback?) {
    this.qrCallback = callback;
    const modal = await this._modal.create({
      component:QrScannerComponent,
      cssClass:'scan-modal',
      componentProps: {
        type,
        getQrData: (value) => {
          this.getQrData(value);
        }
      }
    });
    modal.present();

      return {
        unsubscribe: () => {
          const routerEl = document.querySelector('ion-router-outlet');
          routerEl.style.display = 'flex';
          const ionApp = document.getElementsByTagName('ion-app')[0];
          ionApp.style.backgroundColor = 'transparent';
          this.qr_response.qr_modal.dismiss();
          this.qr_response.qr_subs.unsubscribe();
          this.qrCallback = null;
          modal.dismiss();
        }
      };
  };
  
  async getQrData(value) {
    this.qr_response = {...value};
    return this.qrCallback(value);
  }
}
