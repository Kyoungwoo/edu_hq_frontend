import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  constructor() { }
  
  async ngOnInit() {
    
      var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
      console.log("varUA",varUA);
    const { permission } = await Nfc.permission();
    if(permission === null) {
      this.alert.present({
        subHeader: "NFC를 사용할 수 없습니다.",
        message: "디바이스가 NFC를 지원하지 않습니다. QR로 입장을 해주세요."
      });
      this.navCtrl.back();
    }
    else if(permission === "disabled") {
      this.alert.present({
        subHeader: "NFC 비활성화 됨",
        message: "NFC를 활성화해주세요."
      });
      this.navCtrl.back();
    }
    else {
      // this.nfcScan();
    }
  }
  ngOnDestroy() {
    this.pageAlive = false;
    clearTimeout(this.nfcTimeout);
  }
  async nfcScan() {
    const { message } = await Nfc.getData();
    if(this.pageAlive) {
      // this.nfcTimeout = setTimeout(() => {
      //   this.nfcScan();
      // }, 1000);
      window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: message }));
    }
  }

  async qrScan(event) {
    window.dispatchEvent(new CustomEvent("main:afterQRScan", { detail: event }));
  }

}
