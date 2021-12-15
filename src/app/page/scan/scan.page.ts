import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import Nfc from 'src/app/basic/plugin/nfc.plugin';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  pageAlive:boolean = true;
  nfcTimeout; 

  android:boolean =  false;
  ios:boolean = false;
  qr = true; //QR 태깅 버튼이 있는 페이지에서 데이터를 받아와서 QR 버튼을 누르면 QR이 자동으로 켜짐 

  constructor(
    private alert:AlertService,
    private navCtrl: NavService
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

  async qrScan(event) {
    window.dispatchEvent(new CustomEvent("main:afterQRScan", { detail: event }));
  }

}
