import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectResult } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-find-id-result',
  templateUrl: './find-id-result.component.html',
  styleUrls: ['./find-id-result.component.scss'],
})
export class FindIdResultComponent implements OnInit {

  @Input() res:ConnectResult<{ account_id: string }>;
  @Output() changeType = new EventEmitter();

  type:'find-id'|'find-password' = 'find-id';

  constructor(
    private el: ElementRef<HTMLElement>,
    private nav: NavService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    if(environment.autoTest) this.test();
  }

  private async test() {
    if(!environment.autoTest.core.test) return;
    if(!environment.autoTest.FindId.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();
    
    el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
  }

  public navFindPassword() {
    this.type = 'find-password';
  }
  public navLogin() {
    this.nav.navigateBack('/login');
  }

}