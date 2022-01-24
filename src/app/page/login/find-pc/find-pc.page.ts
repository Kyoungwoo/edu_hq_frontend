import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validator, ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { UpdatePasswordForm } from './component/find-password-result/find-password-result.component';

@Component({
  selector: 'app-find-pc',
  templateUrl: './find-pc.page.html',
  styleUrls: ['./find-pc.page.scss'],
})
export class FindPcPage implements OnInit {

  type:'find-id'|'find-password';

  resFindId:ConnectResult<{ account_id: string }>;

  resFindPassord:ConnectResult;
  formUpdatePassword:UpdatePasswordForm;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private activedRoute: ActivatedRoute,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(!this.checkParams()) return this.nav.navigateBack('/login');
    const { type } = this.activedRoute.snapshot.queryParams;
    this.type = type;

    if(environment.autoTest) this.test();
  }

  private async test() {
    // nothing
  }

  private checkParams() {
    const { type } = this.activedRoute.snapshot.queryParams;
    if(type) return true;
    else return false;
  }
}
