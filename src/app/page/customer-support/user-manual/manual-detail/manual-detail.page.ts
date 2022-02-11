import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validator, ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { ManualUpdateForm } from '../manual-edit/manual-edit.page';

@Component({
  selector: 'app-manual-detail',
  templateUrl: './manual-detail.page.html',
  styleUrls: ['./manual-detail.page.scss'],
})
export class ManualDetailPage implements OnInit {
  @Input() manual_id:number;

  form = new ManualUpdateForm();
  validator = new Validator(new ManualUpdateForm()).validator;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    private date: DateService,
    private user: UserService,
    public regex: RegexService,
    private promise: PromiseService,
    private toast: ToastService,
    private _modal: ModalController,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(this.manual_id) {
      this.form.manual_id = this.manual_id;
      this.get();
    } else {
      const userData = this.user.userData;
      this.form.create_date = this.date.today();
      this.form.update_date = this.form.create_date;
      this.form.create_user_name = userData.user_name;
      this.form.company_name = userData.belong_data.company_name;
    }
    if(environment.test) this.test();
  }
  public async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.UserManual.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=ctgo_manual_ids]').dispatchEvent(new Event('click'));
    await this.promise.wait();
    
    el.querySelector('[name=pin_state]').dispatchEvent(new CustomEvent('click'));
    el.querySelector('[name=manual_title]').dispatchEvent(new CustomEvent('setValue', { detail: '테스트 타이틀' }));
    el.querySelector('[name=manual_text]').dispatchEvent(new CustomEvent('setValue', { detail: '테스트 내용' }));
    await this.promise.wait();
    
    /* const toast = await this.toast.present({ color: 'warning', message: '파일을 업로드 테스트 대기 10초', duration: 10000, buttons: [{ text: 'X' }] });
    await toast.onDidDismiss(); */
    
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }

  private async get() {
    const res = await this.connect.run('/support/manual/get', {
      manual_id: this.form.manual_id
    }, {
      parse: ['ctgo_manual_ids', 'manual_ctgo_data', 'manual_file_data']
    });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    } else {
      this.connect.error('error', res);
    }
  }

  public submit() {
    if(this.form.manual_id) {
      this.update();
    } else {
      this.insert();
    }
  }

  public async insert() {

  }
  public async update() {

  }

}
