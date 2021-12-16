import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerComponent } from 'src/app/component/qr-scanner/qr-scanner.component';
import { ConnectService } from '../core/connect.service';
import { ToastService } from '../ionic/toast.service';
import Nfc from 'src/app/basic/plugin/nfc.plugin';
import { AlertService } from '../ionic/alert.service';
import { NavService } from '../ionic/nav.service';
import { ScanPage } from 'src/app/page/scan/scan.page';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  pageAlive:boolean = true;
  nfcTimeout; 

  android:boolean =  false;
  ios:boolean = false;
  qr = true; //QR 태깅 버튼이 있는 페이지에서 데이터를 받아와서 QR 버튼을 누르면 QR이 자동으로 켜짐 

  constructor(
    private connect: ConnectService,
    private toast : ToastService,
    private alert:AlertService,
    private navCtrl: NavService,
    private modal : ModalController,
    private nav:NavService,
    private router:Router
  ) { }
  async present(){
    this.router.navigateByUrl('/scan');
  }
}