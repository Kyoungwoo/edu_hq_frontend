import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Subscription } from 'rxjs';
import { File } from "@ionic-native/file/ngx";
import Qr from "src/app/basic/plugin/qr-plugin";
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { detailSearch } from 'src/app/page/today-work/component/status-search/detail-search/detail-search.component';


@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit, OnDestroy {

  qr_subs:Subscription;
  qr_timeout;
  camera_rotate = 0;
  qr_sound:MediaObject = null;

  nfcChangeed:boolean = false;
  
  
  nfcqrForm = {
    and_uq_id:0,
    ios_uq_id:0,
    nb_log_state:'',
    project_id:0,
    serial_key:0
}

  @Input() getQrData;
  @Input() unsubscribe;
  @Input() qrModal:boolean;
  @Input() scandata;
  @Input() QrController;
  @Output() scan = new EventEmitter(); 

  constructor(
    private qrScanner: QRScanner,
    private detail: detailSearch,
    private file: File,
    private media: Media,
    private nav:NavService,
    private nfc: NfcService,
    private toast:ToastService,
    private _modal:ModalController,
    private connect: ConnectService,
  ) { }

  async ngOnInit() {
    console.log(this.detail.project_id);
    await this.prepareQR();
    this.scanQR();
    const url = this.file.applicationDirectory.replace(/^file:\/\//, '') + 'public/assets/sound/qr.mp3'; 
    this.qr_sound = this.media.create(url);
    this.qr_sound.onSuccess.subscribe(e => {
      console.log('success', e);
    });
    this.qr_sound.onError.subscribe(e => {
      console.log('error', e);
    })
  }
  
  ngOnDestroy() {
    clearTimeout(this.qr_timeout);
    this.qr_subs.unsubscribe();
    console.log("durlfh??")
    const routerEl = document.querySelector('ion-router-outlet');
    routerEl.style.display = 'flex';
    this.qrScanner.destroy();
  }
  prepareQR() {
    return new Promise((res, rej) => {
      // this.showCamera();
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {

          // camera permission was granted
          // start scanning
          res(true);
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          rej();
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          rej();
        }
      })
      .catch((e: any) => console.log('Error is', e));
    });
  }
  
  async scanQR() {
    await this.qrScanner.show();
    let divice = navigator.userAgent.toLowerCase();
    if(divice === 'android'){
      Qr.transparent();
    }
    const routerEl = document.querySelector('ion-router-outlet');
    routerEl.style.display = 'none';
    // const ionApp = document.getElementsByTagName('ion-app')[0];
    // ionApp.style.display = 'none';
    this.qr_subs = this.qrScanner.scan().subscribe(async(data) => {
      let res = {
        type: 'QR_SCAN',
        nfcChangeed : this.nfcChangeed,
        qr_qrScanner: this.qrScanner,
        qr_modal: this._modal,
        qr_subs : this.qr_subs,
        qr_data: data,

      };
      this.getQrData(res);
      if(!data){
        setTimeout(() => {
          this.scanQR();
        }, 1000);
      }
    });
  }

  rotateCamera() {
    this.camera_rotate = this.camera_rotate ? 0 : 1;
    this.qrScanner.useCamera(this.camera_rotate).then(status => {
    });
  }

  dismiss() {
    this._modal.dismiss();
  }

  async nfcChange() {
    this.getQrData({ type: 'NFC_CHANGE' });
  }
  

  // showCamera() {    
  //   console.log("showCamera -----");  
  //   console.log(window.document.querySelector('ion-app'));
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  // }
  // hideCamera() {    
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  // }
}
