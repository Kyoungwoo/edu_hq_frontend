import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-find-id-mobile-result',
  templateUrl: './find-id-mobile-result.page.html',
  styleUrls: ['./find-id-mobile-result.page.scss'],
})
export class FindIdMobileResultPage implements OnInit {

  result = {
    account_id: '',
    user_name: ''
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    if(!this.checkParams()) return this.nav.navigateBack('/find-id-mobile-type');
    this.result = history.state.result;

    this.test();
  }
  
  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.FindId.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();
    
    el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
    environment.test.FindId.done = true;
  }

  private checkParams() {
    if(history.state?.result) return true;
    else return false;
  }

  public navFindPassword() {
    this.nav.navigateBack('/find-password-mobile-type');
  }

  public navLogin() {
    this.nav.navigateBack('/login-mobile');
  }
}
