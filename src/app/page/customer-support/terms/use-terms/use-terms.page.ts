import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

@Component({
  selector: 'app-use-terms',
  templateUrl: './use-terms.page.html',
  styleUrls: ['./use-terms.page.scss'],
})
export class UseTermsPage implements OnInit {

  form = {
    terms_title: '시스템 이용 약관'
 }

 res:ConnectResult<{
    terms_title: '',
    terms_text: '',
    update_date: '',
    create_date: '',
  }>;
  
  constructor(
    private connect: ConnectService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    this.get();
  }

  async get() {
    this.res = await this.connect.run('/support/terms/get', this.form, {})
  }

  termPage(url:string){
    window.open('https://cdn.lh-skeeper.or.kr/terms/'+url,'_blank');
  }
}
