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

  // obs = new  Observable((observer) => {
  //   this._scan();
  //   console.log("Observable starts");
  //   console.log("----- subscribe inner -----");
  //   let modal:any = this._modal.create({
  //     component: QrScannerComponent,
  //     componentProps: {
  //       // subscriber
  //     }
  //   }).then(value => {
  //     console.log(value);
  //   })
  //   modal.present();
  // })

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
  qrModal:boolean = true;
  qrvalue;

  unsumbstring(){
    
  }
  async subscribe(callback) {
    console.log("callback",callback)
    this.qrCallback = callback;
    
    const modal = await this._modal.create({
      component:QrScannerComponent,
      cssClass:'scan-modal',
      componentProps: {
        qrModal:this.qrModal,
        getQrData: (value) => {
          this.getQrData(value);
        }
      }
    });
    modal.present();
    if(this.qrvalue?.user_id){
      return {
        // unsubscribe: () => {
        //   this.qrCallback = null;
        //   this.qrModal = false;
        //   modal.dismiss();
        // }
      }
    }
  }
  getQrData(value) {
    this.qrvalue = value;
      return this.qrCallback(value);
  }
}


// async subscribe(callback) {
//   let res = {
//     unsubscribe: () => {
        

//       this.qrCallback = null;
//       modal.dismiss();
//     }
//   }

//   this.qrCallback = callback;
//   const modal = await this._modal.create({
//     component:QrScannerComponent,
//     cssClass:'scan-modal',
//     componentProps: {
//       getQrData: (value) => {
//         this.getQrData(value);
//       }
//     }
//   });

//   modal.present();
//   return res;
// }

// getQrData(value) {
//   // let test = this.subscribe("asd");
//   // console.log(test);
//     return this.qrCallback(value);
// }
// }