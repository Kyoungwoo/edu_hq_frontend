import { LanguagePackService } from './../../../basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-modify',
  templateUrl: './setting-modify.component.html',
  styleUrls: ['./setting-modify.component.scss'],
})
export class SettingModifyComponent implements OnInit {
  theme_text = '수원 당수지구';
  language = 'korean';

  constructor(
    private connect: ConnectService,
    private languagePack: LanguagePackService,
    private toast: ToastService,
    private _modal: ModalController,
  ) { }

  ngOnInit() {
    this.language = this.languagePack.language_type;
  }

  dismiss() {
    this._modal.dismiss();
  }

  async changeLanguage(){
    await this.languagePack.setLanguage(this.language);
    this._modal.dismiss(true);
  }
}
