import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import Qr from "src/app/basic/plugin/qr-plugin";
import Nfc from 'src/app/basic/plugin/nfc.plugin';
import { Subscription } from 'rxjs';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { File } from "@ionic-native/file/ngx";
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit,OnDestroy {
  qr_subs:Subscription;
  qr_timeout;
  camera_rotate = 0;
  qr_sound:MediaObject = null;

  @Output() scan = new EventEmitter();

  // pageAlive:boolean = true;
  // nfcTimeout; 

  // android:boolean =  false;
  // ios:boolean = false;

  constructor(
    private qrScanner: QRScanner,
    private file: File,
    private media: Media,
    private alert:AlertService,
    private navCtrl: NavService,
    private nav:NavService,
    private Toast:ToastService
  ) { }
  async ngOnInit() {
    await this.prepareQR();
    this.scanQR();
    const url = this.file.applicationDirectory.replace(/^file:\/\//, '') + 'public/assets/sound/qr.mp3'; 
    console.log("url",url)
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
    if(this.qr_subs) this.qr_subs.unsubscribe();
    // this.hideCamera();
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
    Qr.transparent();
    this.qr_subs = this.qrScanner.scan().subscribe(async(text: string) => {
      if(text){
        const toast = await this.Toast.present({
          message:'QR 체크가 완료 되었습니다.',
          duration:1500,
          color:'primary',
        })
        this.qr_subs.unsubscribe();
        
        this.nav.back();
      }
      if(this.qr_timeout) return false;
      this.qr_subs.unsubscribe();
      this.qr_sound.play();
      this.scan.emit(text);
      this.qr_timeout = setTimeout(() => {
        this.scanQR();
      }, 1000);
    });
  }
  rotateCamera() {
    this.camera_rotate = this.camera_rotate ? 0 : 1;
    this.qrScanner.useCamera(this.camera_rotate).then(status => {
      console.log("status",status);
    });
  }

  
  // async ngOnInit() {
    //   var varUa = navigator.userAgent.toLowerCase();
    //   if(varUa.match('android') != null){
    //     this.android = true;
    //   } else { 
    //     this.ios = true;
    //   }
    //   console.log("varUa",varUa)
    // const { permission } = await Nfc.permission();
    // if(permission === null) {
    //   this.alert.present({
    //     header: "NFC를 사용할 수 없습니다.",
    //     message: "디바이스가 NFC를 지원하지 않습니다. QR로 입장을 해주세요."
    //   });
    //   this.navCtrl.back();
    // }
    // else if(permission === "disabled") {
    //   this.alert.present({
    //     header: "NFC 비활성화 됨",
    //     message: "NFC를 활성화해주세요."
    //   });
    //   this.navCtrl.back();
    // }
    // else {
    //   this.nfcScan();
    // }
  }
  // ngOnDestroy() {
  //   this.pageAlive = false;
  //   clearTimeout(this.nfcTimeout);
  // }
  // async nfcScan() {
  //   const { message } = await Nfc.getData();
  //   if(this.pageAlive) {
  //     this.nfcTimeout = setTimeout(() => {
  //       this.nfcScan();
  //     }, 1000);
  //     window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: message }));
  //   }
  // }

  // async qrScan(event) {
  //   window.dispatchEvent(new CustomEvent("main:afterQRScan", { detail: event }));
  // }

// }
