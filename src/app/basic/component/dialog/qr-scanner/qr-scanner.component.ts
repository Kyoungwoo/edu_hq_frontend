import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, EventEmitter, Injectable, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Subscription } from 'rxjs';
import { File } from "@ionic-native/file/ngx";
import Qr from "src/app/basic/plugin/qr-plugin";
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit, OnDestroy {

  @Input() type;
  
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
  @Input() single_state:boolean = false;
  @Output() scan = new EventEmitter(); 

  constructor(
    private qrScanner: QRScanner,
    private file: File,
    private media: Media,
    private _modal:ModalController,
    public user: UserService
  ) { }

  async ngOnInit() {
    const res = await this.prepareQR();
    if(res) {
      this.scanQR();
      const url = this.file.applicationDirectory.replace(/^file:\/\//, '') + 'public/assets/sound/qr.mp3'; 
      this.qr_sound = this.media.create(url);
      this.qr_sound.onSuccess.subscribe(e => {
      });
      this.qr_sound.onError.subscribe(e => {
      })
    }
  }
  
  ngOnDestroy() {
    clearTimeout(this.qr_timeout);
    this.qr_subs.unsubscribe();
    const routerEl = document.querySelector('ion-router-outlet');
    const routerEl_2:any = document.getElementsByClassName('side-menu-class-user')[0];
    routerEl.style.display = 'flex';
    if(routerEl_2?.style?.display) routerEl_2.style.display = 'flex';
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
          this.qrScanner.openSettings();
          res(false);
        }
        else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          res(false);
        }
      })
      .catch((e: any) => () => {
        console.log('Error is', e);
      });
    });
  }
  
  async scanQR() {
    await this.qrScanner.show();
    if(Qr) Qr.transparent();
    const routerEl_1 = document.querySelector('ion-router-outlet');
    const routerEl_2:any = document.getElementsByClassName('side-menu-class-user')[0];
    routerEl_1.style.display = 'none';
    if(routerEl_2 !== undefined) routerEl_2.style.display = 'none';
    this.qr_subs = this.qrScanner.scan().subscribe(async(data) => {
      console.log(data);
      this.qr_subs.unsubscribe();
      
      if(!data){

        setTimeout(() => {
          this.scanQR();
        }, 1000);

      } else {

        let type = '';
        let serial_key = null;
        let education_safe_id = null;
        let device_id = null;
        if(data.indexOf('https://devmonster-s-keeper.web.app/heavy-qr-data?device_id=') != -1){
          type = data.split('=')[data.split('=').length-1];
          device_id = data.split('=')[data.split('=').length-2]?.split('&')[0];
        } else {
          let data_set = JSON.parse(data);
          if(data.indexOf('education_safe_id') != -1){
            type = data_set.type;
            education_safe_id = data_set.education_safe_id;
          }

          if(data.indexOf('serial_key') != -1){
            type = data_set.type;
            serial_key = data_set.serial_key;
          }
        }
        this._modal.dismiss({
          state: 'QR_SUCCESS',
          item: {
            type: type,
            education_safe_id: education_safe_id,
            serial_key: serial_key,
            device_id: device_id
          }
        });

      }
    });
  }
  // const $qr = await this.qr.subscribe('dd',async (qrdata) => {
  //     const res = await this.connect.run('/education/my/attendant/insert',{education_safe_id:qrdata.qr_data});
  //     if(res.rsCode === 0) {
  //       $qr.unsubscribe();
  //       this.getList();
  //       this.toast.present({message:'참석등록이 완료 되었습니다.',color:'primary'});
  //     } else if(res.rsCode === 1012) {
  //       this.toast.present({message:'이미 출석 처리가 되었습니다.', color:'warning'});
  //       $qr.unsubscribe();
  //     }
  // });
  rotateCamera() {
    this.camera_rotate = this.camera_rotate ? 0 : 1;
    this.qrScanner.useCamera(this.camera_rotate).then(status => {
    });
  }

  dismiss() {
    this._modal.dismiss();
  }

  async nfcChange() {
    this._modal.dismiss({state: 'NFC_CHANGE'});


    // this._modal.dismiss().then(() => {
    //   this.getQrData({ type: 'NFC_CHANGE' });
    // });
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
