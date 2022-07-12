import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import QRious from 'qrious';

@Component({
  selector: 'app-qr-safety-in',
  templateUrl: './qr-safety-in.page.html',
  styleUrls: ['./qr-safety-in.page.scss'],
})
export class QrSafetyInPage implements OnInit {

  @Input() item;

  qr = null;

  meet_date:string;
  meet_time:string;
  constructor(private navParams: NavParams,private connect:ConnectService, private _modal:ModalController) { }

  ngOnInit() {
    console.log('QrSafetyInPage - ', this.item);
    this.meet_time = `${this.item.safety_meeting_start_time} ~ ${this.item.safety_meeting_end_time}`;
    
    this.meet_date = `${this.item.safety_meeting_date}(${this.item.safety_meeting_date_week_day})`;
    this.generatorQrcode();
  }
  
  generatorQrcode() {
    console.log("this.navParams",`${this.navParams.data.item.safety_meeting_id}`)
    this.qr = new QRious({
      element: document.getElementById('qrious'),
      size: 250,
      value: '{"safety_meeting_id":"'+this.navParams.data.item.safety_meeting_id+'","type":"SAFE"}' // `${this.navParams.data.item.education_safe_id}`
    });
  }

  downloadQR(){
    let link = document.createElement("a"); 
    link.download = 'QRcode'; 
    link.href = this.qr.image.currentSrc; 
    link.click(); 
  }

  dismiss() {
    this._modal.dismiss(true);
  }
}
