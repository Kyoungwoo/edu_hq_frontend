import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { slideUpInAnimation } from 'src/app/basic/basic.animation';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-find-id-mobile-type',
  templateUrl: './find-id-mobile-type.page.html',
  styleUrls: ['./find-id-mobile-type.page.scss'],
  animations: [ slideUpInAnimation ]
})
export class FindIdMobileTypePage implements OnInit {

  type:'PHONE' | 'EMAIL';

  constructor(
    private el: ElementRef<HTMLElement>,
    private nav: NavService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(environment.autoTest) this.test();
  }

  private async test() {
    if(!environment.autoTest.core.test) return;
    if(!environment.autoTest.FindId.test) return;
    if(!environment.autoTest.FindId.type.length) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    const cardTypeEl = el.querySelector(`[name=card_type_${environment.autoTest.FindId.type[0]}]`);
    cardTypeEl.dispatchEvent(new Event('click'));
    await this.promise.wait();

    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
    environment.autoTest.SignUp.type.splice(0, 1);
  }

  next() {
    this.nav.navigateForward('/find-id-mobile-phone');
  }
}
