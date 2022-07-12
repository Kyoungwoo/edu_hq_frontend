import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagePackService {
  language_pack = {
    korean: null,
    english: null,
    chinese: null,
    vietnamese: null,
    thai: null
  }

  language_type = 'korean';

  constructor(
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  /** 언어 */
  getLanguage(){
    let language = window.localStorage.getItem('language');
    if(!language){
      window.localStorage.setItem('language', 'korean');
      language = 'korean';
    }
    this.language_type = language;
    return language;
  }

  setLanguage(language){
    window.localStorage.setItem('language', language);
    this.language_type = language;

    this.getLanguageAPI();
  }

  async getLanguageAPI(){
    console.log('-------------------- Language Pack API --------------------');
    const language = this.getLanguage();

    const res = await this.connect.run('/language/list', {language: language}, {parse:['korean','english','chinese','vietnamese','thai']});
    if(res.rsCode === 0) {
      this.language_pack[language] = res.rsObj[language];
    } else { 
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  getText(text){
    return this.language_pack[this.language_type] ? this.language_pack[this.language_type][text] : '';
  }
}
