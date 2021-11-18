import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

export interface AlertOptions {
  header?: string,
  subHeader?: string,
  message?: string,
  cssClass?: string,
  backdropDismiss?: boolean,
  inputs?: Array<any>
  buttons?: Array<string | AlertButton>
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private alert: AlertController
  ) { }
  
  async present(opts:AlertOptions = {}) {
    const alert = await this.alert.create({
      header: opts.header,
      subHeader: opts.subHeader,
      message: opts.message,
      cssClass: opts.cssClass,
      backdropDismiss: opts.backdropDismiss,
      inputs: opts.inputs,
      buttons: opts.buttons || [
        {
          text: '확인'
        }
      ]
    });
    alert.present();
    return alert;
  }
  getTop() {
    return this.alert.getTop();
  }
}