import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

export interface LoadingOptions {
  message?: string,
  duration?: number
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor(
    private loading: LoadingController
  ) { }

  async present(opts:LoadingOptions = {}) {
    const loading = await this.loading.create({
      message: opts.message,
      duration: opts.duration
    });
    await loading.present();
    return loading;
  }
}
