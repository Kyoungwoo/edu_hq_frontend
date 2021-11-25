import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AlertButton, AlertController, AnimationController, PopoverController } from '@ionic/angular';
import { AlertComponent } from '../../component/dialog/alert/alert.component';

export interface AlertOptions {
  mode?: 'ios' | 'md' | 'devmonster' | 'ionic',
  header?: string,
  subHeader?: string,
  message?: string,
  inputs?: Array<any>,
  buttons?: Array<string | AlertButton>
  cssClass?: string,
  backdropDismiss?: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    @Inject(AlertStrategy) private alertStrategy:AlertOptions,
    private animationCtrl: AnimationController,
    private popover: PopoverController,
    private alert: AlertController
  ) { }
  
  async present(opts:AlertOptions = {}) {
    let mode = opts?.mode || this.alertStrategy.mode;
    mode = mode === 'ionic' ? null : mode;
    if(mode === 'devmonster') {
      return this._presentCustomAlert(opts);
    } else {
      return this._presentIonicAlert(opts);
    }
  }
  getTop() {
    return this.alert.getTop();
  }

  private async _presentCustomAlert(opts:AlertOptions) {
    const alert = await this.popover.create({
      mode: 'md',
      component: AlertComponent,
      componentProps: {
        opts
      },
      enterAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0', '0.3');

        const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByClassName('popover-wrapper')[0])
        .duration(100)
        .fromTo('opacity', '0', '1');

        const contentEl = <HTMLElement>baseEl.getElementsByClassName('popover-content')[0];
        const contentRect = contentEl.getBoundingClientRect();

        contentEl.style.top = ((window.innerHeight-contentRect.height)/2) + 'px';
        contentEl.style.left = ((window.innerWidth-contentRect.width)/2) + 'px';
        contentEl.style.transformOrigin = '50% 80%';

        const contentAnimation = this.animationCtrl.create()
        .addElement(contentEl)
        .duration(100)
        .fromTo('transform', 'scale(0.8)', 'scale(1)');

        console.log(baseEl);
        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation]);
      },
      leaveAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0.3', '0');

        const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByClassName('popover-wrapper')[0])
        .duration(100)
        .fromTo('opacity', '1', '0');

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      }
    });
    alert.present();
    return alert;
  }
  private async _presentIonicAlert(opts:AlertOptions) {
    const alert = await this.alert.create({
      mode: opts.mode as 'ios' | 'md',
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
}

export const AlertStrategy = new InjectionToken<AlertOptions>('AlertOptions');