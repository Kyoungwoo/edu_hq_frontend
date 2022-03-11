import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NfcComponent } from '../../component/dialog/nfc/nfc.component';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(
    private modal : ModalController,
    private toast:ToastController
  ) { }

  nfcallback;

  async subscribe(callback,type?) {
    console.log("type--------------",type);
    this.nfcallback = callback;
    const modal = await this.modal.create({
      component:NfcComponent,
      cssClass:'scan-modal',
      componentProps:{
        getNfcData:(_value) => {
          this.getNfcData(_value);
        }
      }
    });
    modal.present();

    return {
      unsubscribe:async() => {
        this.modal.dismiss();
        const toast = await this.toast.create({
          message:'NFC 태그가 완료 되었습니다.',
          duration:1500,
          color:'primary'
        });
        toast.present();
      }
    }
  };

  async getNfcData(value) {
    return this.nfcallback(value);
  }
}
