import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';

export interface SignUpCompanyInfo {
  company_id:number, 
  business_register_no:number, 
  company_name:string, 
  company_ceo:number
}
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
    private activatedRoute: ActivatedRoute,
    private connect: ConnectService,
    public regex: RegexService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({ userType }) => {
      this.params.userType = userType;
      this.nextRouterLink = this.getNextRouterLink(userType);
    });
  }

  public async searchCompany() {
    this.res = await this.connect.run('/forSignUp/company/get', this.form);
    return this.res;
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
