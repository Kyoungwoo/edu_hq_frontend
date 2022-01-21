import { Component, OnInit } from '@angular/core';
import { slideUpInAnimation } from 'src/app/basic/basic.animation';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-sign-up-type',
  templateUrl: './sign-up-type.page.html',
  styleUrls: ['./sign-up-type.page.scss'],
  animations: [slideUpInAnimation]
})
export class SignUpTypePage implements OnInit {

  userType: UserType;

  constructor(
    private nav: NavService
  ) { }

  ngOnInit() {
  }

  next() {
    if(this.userType !== 'LH') {
      this.nav.navigateForward('/sign-up-company', {
        queryParams: { 
          userType: this.userType
        }
      });
    } else {
      this.nav.navigateForward('/sign-up-lh');
    }
  }
}