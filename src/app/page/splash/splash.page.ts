import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {

  constructor(
    private nav: NavService
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' });
    }, 1000);
  }
}