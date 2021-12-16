import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Subscription } from 'rxjs';
import { File } from "@ionic-native/file/ngx";
import Qr from "src/app/basic/plugin/qr-plugin";
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit,OnDestroy {

  qr_subs:Subscription;
  qr_timeout;
  camera_rotate = 0;
  qr_sound:MediaObject = null;
  
  @Output() scan = new EventEmitter();

  constructor(
    private qrScanner: QRScanner,
    private file: File,
    private media: Media,
    private nav:NavService,
    private Toast:ToastService
  ) { }

  async ngOnInit() {
    await this.prepareQR();
    this.scanQR();
    const url = this.file.applicationDirectory.replace(/^file:\/\//, '') + 'public/assets/sound/qr.mp3'; 
    console.log("url",url)
    this.qr_sound = this.media.create(url);
    this.qr_sound.onSuccess.subscribe(e => {
      console.log('success', e);
    });
    this.qr_sound.onError.subscribe(e => {
      console.log('error', e);
    })
  }
  ngOnDestroy() {
    clearTimeout(this.qr_timeout);
    if(this.qr_subs) this.qr_subs.unsubscribe();
    // this.hideCamera();
    this.qrScanner.destroy();
  }
  prepareQR() {
    return new Promise((res, rej) => {
      // this.showCamera();
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {

          // camera permission was granted
          // start scanning
          res(true);
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          rej();
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          rej();
        }
      })
      .catch((e: any) => console.log('Error is', e));
    });
  }
  async scanQR() {
    await this.qrScanner.show();
    Qr.transparent();
    this.qr_subs = this.qrScanner.scan().subscribe(async(text: string) => {
      if(text){
        const toast = await this.Toast.present({
          message:'QR 체크가 완료 되었습니다.',
          duration:1500,
          color:'primary',
        });
        toast.prepend();
        setTimeout(() => {
          this.nav.back();
          this.qr_subs.unsubscribe();
        }, 2.0*1000);
        
      }
      if(this.qr_timeout) return false;
      this.qr_subs.unsubscribe();
      this.qr_sound.play();
      this.scan.emit(text);
      this.qr_timeout = setTimeout(() => {
        this.scanQR();
      }, 1000);
    });
  }
  rotateCamera() {
    this.camera_rotate = this.camera_rotate ? 0 : 1;
    this.qrScanner.useCamera(this.camera_rotate).then(status => {
      console.log("status",status);
    });
  }

  // showCamera() {    
  //   console.log("showCamera -----");  
  //   console.log(window.document.querySelector('ion-app'));
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  // }
  // hideCamera() {    
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  // }
}
