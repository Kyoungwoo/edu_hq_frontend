import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up-terms',
  templateUrl: './sign-up-terms.page.html',
  styleUrls: ['./sign-up-terms.page.scss'],
})
export class SignUpTermsPage implements OnInit {

  prevRouterLink:string;

  constructor(
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(queryParams => {
      const { userType } = queryParams;
      this.prevRouterLink = this.getPrevRouterLink(userType);
    });
  }

  private getPrevRouterLink(userType) {
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