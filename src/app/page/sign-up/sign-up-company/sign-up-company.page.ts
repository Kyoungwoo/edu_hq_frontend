import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from 'src/app/basic/basic.animation';

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.page.html',
  styleUrls: ['./sign-up-company.page.scss'],
  animations: [fadeInAnimation]
})
export class SignUpCompanyPage implements OnInit {

  selectedCompany = null;

  nextRouterLink:string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const { userType } = queryParams;
      this.nextRouterLink = this.getNextRouterLink(userType);
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
