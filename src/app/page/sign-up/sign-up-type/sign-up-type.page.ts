import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { slideUpInAnimation } from 'src/app/basic/basic.animation';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up-type',
  templateUrl: './sign-up-type.page.html',
  styleUrls: ['./sign-up-type.page.scss'],
  animations: [slideUpInAnimation]
})
export class SignUpTypePage implements OnInit {

  userType: UserType;

  constructor(
    private el: ElementRef<HTMLElement>,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(environment.autoTest) this.test();
  }

  public async test() {
    const el = this.el.nativeElement;
    await this.promise.wait();

    const els = el.querySelectorAll('[name=card_type]');
    els[environment.signUpTest].dispatchEvent(new Event('click'));
    await this.promise.wait();

    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
    environment.signUpTest += 1;
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