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
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
})
export class NfcPage implements OnInit,OnDestroy {
  qr_subs:Subscription;
  qr_timeout;
  camera_rotate = 0;
  qr_sound:MediaObject = null;

  @Output() scan = new EventEmitter();

  pageAlive:boolean = true;
  nfcTimeout; 

  android:boolean =  false;
  ios:boolean = false;

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
      var varUa = navigator.userAgent.toLowerCase();
      if(varUa.match('android') != null){
        this.android = true;
      } else { 
        this.ios = true;
      }
      console.log("varUa",varUa)
    const { permission } = await Nfc.permission();
    if(permission === null) {
      this.alert.present({
        header: "NFC를 사용할 수 없습니다.",
        message: "디바이스가 NFC를 지원하지 않습니다. QR로 입장을 해주세요."
      });
      this.navCtrl.back();
    }
    else if(permission === "disabled") {
      this.alert.present({
        header: "NFC 비활성화 됨",
        message: "NFC를 활성화해주세요."
      });
      this.navCtrl.back();
    }
    else {
      this.nfcScan();
    }
    
  }
  ngOnDestroy() {
    this.pageAlive = false;
    clearTimeout(this.nfcTimeout);
  }
  
  async nfcScan() {
    const { message } = await Nfc.getData();
    if(this.pageAlive) {
      this.nfcTimeout = setTimeout(() => {
        this.nfcScan();
      }, 1000);
      window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: message }));
    }
  }
  
// async qrScan(event) {
//   window.dispatchEvent(new CustomEvent("main:afterQRScan", { detail: event }));
// }
  


}
