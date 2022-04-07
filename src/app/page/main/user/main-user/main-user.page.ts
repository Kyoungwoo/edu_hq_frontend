import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.page.html',
  styleUrls: ['./main-user.page.scss'],
})
export class MainUserPage implements OnInit {

  menu: number = 1;

  constructor(
    private modal: ModalController,
    private nav: NavService,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }
  async navMypage() {
    this.nav.navigateForward('/my-page-type');
  }

  async openMenu() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }

  router(title: string) {
    switch (title) {
      case '':
        this.alert.present({
          message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
          header: '준비중'
        });
        break;
      case '미결함':
        this.nav.navigateForward('/confirm-pending-list');
        break;
      case '통합관제':
        this.nav.navigateForward('/monitor');
        break;
      case '회의록':
        this.nav.navigateForward('/minutes-list');
        break;
      case '위험성평가':
        this.nav.navigateForward('/risk-list');
        break;
      case '공지사항':
        this.nav.navigateForward('/notice-list');
        break;
      case 'MSDS':
        this.nav.navigateForward('/msds-list');
        break;
      case '회의록':
        this.nav.navigateForward('/minutes-list');
        break;
    }
  }
}
