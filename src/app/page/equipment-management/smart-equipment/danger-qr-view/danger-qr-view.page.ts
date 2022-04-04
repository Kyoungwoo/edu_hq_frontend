import { Component, OnInit, Input } from '@angular/core';
import QRious from 'qrious';

@Component({
  selector: 'app-danger-qr-view',
  templateUrl: './danger-qr-view.page.html',
  styleUrls: ['./danger-qr-view.page.scss'],
})
export class DangerQrViewPage implements OnInit {

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
    console.log("this.navParams",`${this.item.serial_no}`)
    this.qr = new QRious({
      element: document.getElementById('qrious'),
      size: 250,
      value: `${this.item.serial_no}`
    });
  }

  downloadQR(){
    let link = document.createElement("a"); 
    link.download = 'QRcode'; 
    link.href = this.qr.image.currentSrc; 
    link.click(); 
  }
}
