import { Component, OnInit, Input } from '@angular/core';
declare var QRCode:any;

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
    console.log(QRCode);

    console.log("this.navParams",`${this.item.serial_no}`);
    const value_text = `현장명: ${this.item.project_name}
원청사명: ${this.item.master_company_name}
회사명: ${this.item.partner_company_name}
건설기계 구분: ${this.item.ctgo_machinery_name}
등록번호: ${this.item.machinery_regist_no}
공종: ${this.item.ctgo_construction_name}
대여 업체: ${this.item.rental_company_name}
보증기간: ${this.item.rental_start_date} ~ ${this.item.rental_end_date}
보증금액: ${this.item.rental_price}`;


  let qrcode = new QRCode(document.getElementById('qrcode'),{
    width: 150,
    height: 150
  })
  console.log(qrcode);
  qrcode.makeCode(value_text);
    // const value_text_2 = "";
    // console.log("this.value_text",value_text);
    // this.qr = new QRious({
    //   element: document.getElementById('qrious'),
    //   size: 250,
    //   value: encodeURI(value_text)
    // });
  }

  downloadQR(){
    let link = document.createElement("a"); 
    link.download = 'QRcode'; 
    link.href = this.qr.image.currentSrc; 
    link.click(); 
  }
}
