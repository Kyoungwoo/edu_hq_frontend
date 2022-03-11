import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import QRious from 'qrious';
import { ConnectService } from 'src/app/basic/service/core/connect.service';


@Component({
  selector: 'app-qr-education-in',
  templateUrl: './qr-education-in.page.html',
  styleUrls: ['./qr-education-in.page.scss'],
})
export class QrEducationInPage implements OnInit {
  qr = null;

  constructor(private navParams: NavParams,private connect:ConnectService) { }

  ngOnInit() {
    this.generatorQrcode();
  }

  generatorQrcode(){
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
