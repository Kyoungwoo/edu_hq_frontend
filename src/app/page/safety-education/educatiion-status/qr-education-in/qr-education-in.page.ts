import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import QRious from 'qrious';
import { ConnectService } from 'src/app/basic/service/core/connect.service';


@Component({
  selector: 'app-qr-education-in',
  templateUrl: './qr-education-in.page.html',
  styleUrls: ['./qr-education-in.page.scss'],
})
export class QrEducationInPage implements OnInit {

  @Input() item;

  qr = null;

  eduTime:string;
  constructor(private navParams: NavParams,private connect:ConnectService) { }

  ngOnInit() {
    this.item.education_safe_manager_names.join();
    this.eduTime = `${this.item.education_safe_start_time} ~ ${this.item.education_safe_end_time}`;
    this.generatorQrcode();
  }

  generatorQrcode() {
    this.qr = new QRious({
      element: document.getElementById('qrious'),
      size: 250,
      value: '{company_id:'+this.navParams.data.company_id+'}'
    });
  }

  downloadQR(){
    let link = document.createElement("a"); 
    link.download = 'QRcode'; 
    link.href = this.qr.image.currentSrc; 
    link.click(); 
  }
}
