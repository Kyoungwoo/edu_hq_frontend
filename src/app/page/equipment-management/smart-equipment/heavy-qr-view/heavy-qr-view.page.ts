import { Component, OnInit, Input } from '@angular/core';
import QRious from 'qrious';

@Component({
  selector: 'app-heavy-qr-view',
  templateUrl: './heavy-qr-view.page.html',
  styleUrls: ['./heavy-qr-view.page.scss'],
})
export class HeavyQrViewPage implements OnInit {

  @Input() item;
  qr = null;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
    setTimeout(() => {
      this.generatorQrcode();
    },0);
  }
  
  generatorQrcode() {
    const value_text = 'https://devmonster-s-keeper.web.app/heavy-qr-data?device_id='+this.item.device_id;

    this.qr = new QRious({
      element: document.getElementById('qrious'),
      size: 250,
      value: value_text
    });
  }

  downloadQR(){
    let link = document.createElement("a"); 
    link.download = 'QRcode'; 
    link.href = this.qr.image.currentSrc; 
    link.click(); 
  }
}
