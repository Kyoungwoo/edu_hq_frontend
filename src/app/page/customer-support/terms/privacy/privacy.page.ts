import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

 form = {
    terms_title: '개인정보 처리방침'
 }

  res:ConnectResult<{
    terms_title: '',
    terms_text: '',
    update_date: '',
    create_date: '',
  }>;
  constructor(
    private connect: ConnectService,
  ) { }

  async ngOnInit() {
    this.get();
  }

  async get() {
    this.res = await this.connect.run('/support/terms/get', this.form, {});
  }
}
