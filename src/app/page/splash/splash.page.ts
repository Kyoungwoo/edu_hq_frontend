import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {

  constructor(
    private nav: NavService,
    private device: DeviceService
  ) { }

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