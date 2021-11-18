import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
    private toast: ToastController
  ) { }

  async present(opts:ToastOptions) {
    const toast = await this.toast.create({
      color: opts?.color || "tertiary",
      position: "top",
      header: opts?.header,
      message: opts?.message,
      cssClass: opts?.cssClass,
      buttons: opts?.buttons,
      duration: opts?.duration || 1800
    });
    toast.present();
    return toast;
  }
  getTop() {
    return this.toast.getTop();
  }
}
