import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeInAnimation, slideUpInAnimation } from 'src/app/basic/basic.animation';

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.page.html',
  styleUrls: ['./sign-up-company.page.scss'],
  animations: [fadeInAnimation]
})
export class SignUpCompanyPage implements OnInit, OnDestroy {

  selectedCompany = null;

  nextRouterLink:string;
  $queryParams:Subscription;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.$queryParams = this.activatedRoute.queryParams.subscribe(queryParams => {
      const { userType } = queryParams;
      this.nextRouterLink = this.getRouterLink(userType);
    });
  }
  ngOnDestroy() {
    this.$queryParams.unsubscribe();
  }

  private getRouterLink(userType) {
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
