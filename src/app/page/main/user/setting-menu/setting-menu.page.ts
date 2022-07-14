import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.page.html',
  styleUrls: ['./setting-menu.page.scss'],
})
export class SettingMenuPage implements OnInit {

  constructor(
    private modal: ModalController,
    private nav: NavService,
    private alert: AlertService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
  }


  router(title: string) {
    switch (title) {
      case '':
        this.alert.present({
          message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
          header: '준비중'
        });
        break;
      case '알림설정':
        this.nav.navigateForward('/setting-sounds');
        break;
    }
  }
}
