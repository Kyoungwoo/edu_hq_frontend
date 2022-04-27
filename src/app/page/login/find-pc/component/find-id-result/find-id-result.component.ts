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

  constructor(
    private el: ElementRef<HTMLElement>,
    private nav: NavService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.FindId.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();
    
    el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
  }

  public navFindPassword() {
    this.changeType.emit('find-password');
  }
  public navLogin() {
    this.nav.navigateBack('/login');
  }

}