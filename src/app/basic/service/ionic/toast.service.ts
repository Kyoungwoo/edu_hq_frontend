import { Injectable } from '@angular/core';
import { AnimationController, ToastController } from '@ionic/angular';

export interface ToastOptions {
  color?:string,
  position?:string,
  header?:string,
  message?:string,
  cssClass?:string,
  duration?:number,
  buttons?:Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private animationCtrl: AnimationController,
    private toast: ToastController
  ) { }

  async present(opts:ToastOptions) {
    const toast = await this.toast.create({
      color: opts?.color || "white",
      position: "bottom",
      header: opts?.header,
      message: opts?.message,
      cssClass: opts?.cssClass || "basic-toast-bottom",
      buttons: opts?.buttons,
      duration: opts?.duration || 1800,
      enterAnimation: (baseEl:ShadowRoot) => {
        console.log(baseEl);
        const wrapperEl = <HTMLElement>baseEl.childNodes[0];
        wrapperEl.style.bottom = '0';
        wrapperEl.style.paddingBottom = 'calc(var(--ion-safe-area-bottom, 0px))';

        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(10px)', 'translateY(0)');

        return wrapperAnimation;
      }
    });
    toast.present();
    return toast;
  }
  getTop() {
    return this.toast.getTop();
  }
}
