import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaObject } from '@ionic-native/media/ngx';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import Nfc from 'src/app/basic/plugin/nfc.plugin';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.component.html',
  styleUrls: ['./nfc.component.scss'],
})
export class NfcComponent implements OnInit {
  qr_subs:Subscription;
  qr_timeout;
  camera_rotate = 0;
  qr_sound:MediaObject = null;

  @Input() getNfcData;
  @Output() scan = new EventEmitter();

  pageAlive:boolean = true;
  nfcTimeout; 

  android:boolean =  false;
  ios:boolean = false;

  constructor(
    private alert:AlertService,
    private navCtrl: NavService,
    private _modal: ModalController
  ) { }
  async ngOnInit() {
    var varUa = navigator.userAgent.toLowerCase();
    if(varUa.match('android') != null){
      this.android = true;
    } else { 
      this.ios = true;
    }
    if(this.android){
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
  }
  ngOnDestroy() {
    this.pageAlive = false;
    clearTimeout(this.nfcTimeout);
  }
  
  async nfcScan() {
    const { message } = await Nfc.getData();
    console.log("message",message);
    this.getNfcData(message);
    if(!this.pageAlive) {
      this.nfcTimeout = setTimeout(() => {
        this.nfcScan();
      }, 1000);
      // window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: message }));
    }
  }

  async qrChange() {
    this._modal.dismiss();
    this.getNfcData({type:'QR_CHANGE'});
  }
}