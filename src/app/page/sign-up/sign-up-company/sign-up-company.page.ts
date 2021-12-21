import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.page.html',
  styleUrls: ['./sign-up-company.page.scss'],
  animations: [fadeInAnimation]
})
export class SignUpCompanyPage implements OnInit {

  form = {
    search_text: ''
  }
  res:ConnectResult;

  selectedCompany = null;

  nextRouterLink:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private connect: ConnectService,
    public regex: RegexService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const { userType } = queryParams;
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
