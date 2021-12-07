import { Injectable, InjectionToken } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';


type AlertMode = 'ios' | 'md' | 'devmonster' | 'ionic';
export interface AlertOptions {
  mode?: AlertMode,
  img?: string,
  header?: string,
  //subHeader?: string,
  message?: string,
  inputs?: Array<any>,
  buttons?: Array<AlertButton>
  cssClass?: string,
  backdropDismiss?: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private alert: AlertController
  ) { }
  
  async present(opts:AlertOptions = {}) {
    if(opts?.mode) opts.mode = this.getMode(opts?.mode);
    this._presentIonicAlert(opts);
  }
  getTop() {
    return this.alert.getTop();
  }

  private getMode(mode:AlertMode) {
    switch(mode) {
      case 'devmonster':
      case 'ios':
      case 'md':
        return mode;
      default:
        return null;
    }
  }
  private async _presentIonicAlert(opts:AlertOptions) {
    const alert = await this.alert.create({
      message: opts.img ? `<img src="${opts.img}">` : null,
      mode: opts.mode as 'ios' | 'md',
      header: opts.header,
      subHeader: opts.message,
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
}