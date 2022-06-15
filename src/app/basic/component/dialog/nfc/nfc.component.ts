import { UserService } from 'src/app/basic/service/core/user.service';
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
  @Input() type:string;
  @Input() single_state:boolean = false;

  pageAlive:boolean = true;
  nfcTimeout; 

  android:boolean =  false;
  ios:boolean = false;

  constructor(
    private alert:AlertService,
    private navCtrl: NavService,
    private _modal: ModalController,
    public user: UserService
  ) { }

  async ngOnInit() {
    console.log(this.type);
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
    let { message } = await Nfc.getData();
    console.log("message",message);
    // this.getNfcData(message);

    let type = '';
    let serial_key = null;
    let education_safe_id = null;
    let device_id = null;

    if(this.ios) message = message.slice(3);

    if(message.indexOf('https://dev.lh-skeeper.or.kr/heavy-qr-data?device_id=') != -1){
      type = message.split('=')[message.split('=').length-1];
      device_id = message.split('=')[message.split('=').length-2]?.split('&')[0];
    } else {
      console.log('not Equip - ', message);
      console.log('not Equip - ', typeof message);
      let data_set = JSON.parse(message);
      console.log('data_set  - ', data_set);
      if(message.indexOf('education_safe_id') != -1){
        console.log('innet education_safe_id');
        type = data_set.type;
        education_safe_id = data_set.education_safe_id;
      }

      if(message.indexOf('serial_key') != -1){
        console.log('innet serial_key');
        type = data_set.type;
        serial_key = data_set.serial_key;
      }

      this._modal.dismiss({
        state: 'NFC_SUCCESS',
        item: {
          type: type,
          education_safe_id: education_safe_id,
          serial_key: serial_key,
          device_id: device_id
        }
      });
    }

    if(!this.pageAlive) {
      this.nfcTimeout = setTimeout(() => {
        this.nfcScan();
      }, 1000);
      // window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: message }));
    }
  }

  async qrChange() {
    this._modal.dismiss({
      state: 'QR_CHANGE'
    });
    // this._modal.dismiss();
    // this.getNfcData({type:'QR_CHANGE'});
  }
}