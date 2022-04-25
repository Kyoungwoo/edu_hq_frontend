import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {

  constructor(
    private nav: NavService,
    private device: DeviceService,
    private plt: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.plt.backButton.subscribeWithPriority(-1, (processNextHandler) => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.goToInitPage();
  }
  goToInitPage() {
    const loadingRoof = setTimeout(() => {
      console.log(this.device.platform_type);
      if(!this.device.platform_type) {
        clearTimeout(loadingRoof);
        this.goToInitPage();
        return;
      }

      if(this.device.platform_type < 3) {
        this.nav.navigateRoot('/login-mobile', { animated: true, animation: 'fadeIn' });  
      } else {
        this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' });
      }
    }, 1000);
  }
}