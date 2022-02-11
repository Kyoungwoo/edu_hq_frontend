import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SmarteditComponent } from 'src/app/basic/component/input/smartedit/smartedit.component';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

export class ManualUpdateForm {
  ctgo_manual_ids:number[] = []; // 구분 ID
  manual_id:number = null; // 사용자 매뉴얼 ID
  pin_state: number = 0; // 상단 고정
  manual_title:string = null; // 제목
  manual_text:string = null; // 내용
  manual_file_data: FutItem[];
  manual_file:(File|FileBlob)[] = []; // FILE
  manual_json:FileJson = new FileJson(); // JSON

  create_user_id: number;
  create_user_name: string;
  create_date: string;
  company_id: number;
  company_name: string;
  manual_views: number;
  update_user_id: string;
  update_user_name: string;
  update_date: string;
}
@Component({
  selector: 'app-manual-edit',
  templateUrl: './manual-edit.page.html',
  styleUrls: ['./manual-edit.page.scss'],
})
export class ManualEditPage implements OnInit {

  @ViewChild('menualText') menualText:SmarteditComponent;

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
      parse: ['ctgo_manual_ids', 'manual_file_data']
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
    this.menualText.update();
    if(this.form.manual_id) {
      this.update();
    } else {
      this.insert();
    }
  }

  public async insert() {
    if(!this.valid()) return;

    this.res = await this.connect.run('/support/manual/insert', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      this._modal.dismiss(true);
    }
  }
  public async update() {
    if(!this.valid()) return;

    this.res = await this.connect.run('/support/manual/update', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      this._modal.dismiss(true);
    }
  }
  private valid():boolean {
    this.validator.manual_id = { valid: true };

    this.validator.ctgo_manual_ids = { valid: true };

    if(!this.form.manual_title) this.validator.manual_title = { message: '제목을 입력해주세요.', valid: false };
    else this.validator.manual_title = { valid: true };

    if(!this.form.manual_text) this.validator.manual_text = { message: '내용을 입력해주세요.', valid: false };
    else this.validator.manual_text = { valid: true };

    this.validator.manual_file_data = { valid: true };
    this.validator.manual_file = { valid: true };
    this.validator.manual_json = { valid: true };

    this.validator.create_user_id = { valid: true };
    this.validator.create_user_name = { valid: true };
    this.validator.create_date = { valid: true };
    this.validator.company_id = { valid: true };
    this.validator.pin_state = { valid: true };
    this.validator.manual_views = { valid: true };
    this.validator.update_user_id = { valid: true };
    this.validator.update_user_name = { valid: true };
    this.validator.update_date = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}