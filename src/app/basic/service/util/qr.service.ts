import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerComponent } from 'src/app/component/qr-scanner/qr-scanner.component';
import { ConnectService } from '../core/connect.service';
import { ToastService } from '../ionic/toast.service';
import Nfc from 'src/app/basic/plugin/nfc.plugin';
import { AlertService } from '../ionic/alert.service';
import { NavService } from '../ionic/nav.service';
import { ScanPage } from 'src/app/page/scan/scan.page';
import { Router } from '@angular/router';
import Qr from "src/app/basic/plugin/qr-plugin";
import { Observable, Subscription } from 'rxjs';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

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
    private connect: ConnectService,
    private toast : ToastService,
    private alert:AlertService,
    private navCtrl: NavService,
    private _modal : ModalController,
    private nav:NavService,
    private router:Router,
    private qrScanner: QRScanner
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
          console.log("unsubscribe ----- ",this.qr_response);
          this.qrCallback = null;
          modal.dismiss();
          this.qr_response.qr_modal.dismiss();
          this.qr_response.qr_subs.unsubscribe();
          this.qr_response.qr_qrScanner.distroy();
        }
      }
  }
  // return {
  //   unsubscribe: () => {
  //     this.qrCallback = null;
  //     this.qrModal = false;
  //     this._modal.dismiss();
  //     value.qr_modal.dismiss();
  //     // value.qr_subs.unsubscribe();
  //     // value.qrScanner.destroy();
  //   }
  // }
  async getQrData(value) {
    this.qr_response = {...value};
    return this.qrCallback(value);
  }
}
