import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
export interface NavOptions {
  animated?:boolean,
  force?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  force:boolean = true;

  constructor(
    private navCtrl: NavController
  ) { }
  back(options?): void {
    this.navCtrl.back(options);
  }
  navigateBack(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateBack(url, options as any);
  }
  navigateForward(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateForward(url, options as any);
  }
  navigateRoot(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateRoot(url, options as any);
  }
}
