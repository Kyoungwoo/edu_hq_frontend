import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { SignUpCompanyInfo } from '../sign-up-worker/sign-up-worker.interface';
@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.page.html',
  styleUrls: ['./sign-up-company.page.scss'],
  animations: [fadeInAnimation]
})
export class SignUpCompanyPage implements OnInit {

  params = {
    userType: '' as UserType
  }

  form = {
    search_text: ''
  }
  res:ConnectResult<SignUpCompanyInfo>;

  selectedCompany:SignUpCompanyInfo;

  nextRouterLink:string;

  constructor(
    private el: ElementRef<HTMLElement>,
    private activatedRoute: ActivatedRoute,
    private connect: ConnectService,
    public regex: RegexService,
    private nav: NavService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({ userType }) => {
      this.params.userType = userType;
      this.nextRouterLink = this.getNextRouterLink(userType);

      if(environment.autoTest) this.test();
    });
  }

  public async test() {
    const el = this.el.nativeElement;

    // 검색창 입력
    this.form.search_text = '데브';

    // 검색
    el.querySelector('[name=search_text]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait();
    
    // 맨 위 아이템 클릭
    this.changeDetector.detectChanges();
    el.querySelector('[name=company_info]').dispatchEvent(new Event('click'));
    await this.promise.wait();
    
    // 다음 페이지로
    this.changeDetector.detectChanges();
    const buttonNext = el.querySelector('[name=button_next]');
    buttonNext.dispatchEvent(new Event('click'));
  }

  public async searchCompany() {
    this.res = await this.connect.run('/forSignUp/company/get', this.form);
    return this.res;
  }

  next() {
    this.nav.navigateForward('/sign-up-worker', {
      state: { 
        companyInfo: this.selectedCompany
      }
    });
  }

  private getNextRouterLink(userType) {
    switch(userType) {
      case 'WORKER':
        return '/sign-up-worker';
      case 'LH':
        return '/sign-up-lh';
      case 'SUPER':
        return '/sign-up-super';
      case 'COMPANY':
        return '/sign-up-company';
    }
  }
}
