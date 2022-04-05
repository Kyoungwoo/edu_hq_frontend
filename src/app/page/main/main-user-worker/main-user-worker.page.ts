import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-main-user-worker',
  templateUrl: './main-user-worker.page.html',
  styleUrls: ['./main-user-worker.page.scss'],
})
export class MainUserWorkerPage implements OnInit {

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
      case '마이페이지':
        this.nav.navigateRoot('/my-page-type');
        break;
      case '나의교육':
        this.nav.navigateRoot('/my-education-list');
        break;
        case '나의출입현황':
          this.nav.navigateRoot('/my-status-list');
          break;
      case '스마트안전장비':
        this.nav.navigateRoot('/each-device-list');
        break;
        case '공지사항':
          this.nav.navigateRoot('/notice-list');
          break;
        case 'MSDS':
          this.nav.navigateRoot('/msds-list');
          break;
        case '회의록':
          this.nav.navigateRoot('/minutes-list');
          break;
    }
  }
}
