import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

export class ManualUpdateForm {
  ctgo_manual_id:number = null; // 구분 ID
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

  @Input() manual_id:number;

  form = new ManualUpdateForm();
  validator = new Validator(new ManualUpdateForm()).validator;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(this.manual_id) {
      this.form.manual_id = this.manual_id;
      this.get();
    }
    if(environment.test) this.test();
  }
  public test() {
    if(!environment.test.core.test) return;
    if(!environment.test.UserManual.test) return;
  }

  private async get() {
    const res = await this.connect.run('/manual/get', {
      manual_id: this.form.manual_id
    });
    if(res.rsCode === 0) {
      this.form = {
        ...res.rsObj,
        ...this.form
      }
    } else {
      this.connect.error('error', res);
    }
  }

  public async insert() {
    if(!this.valid()) return;

    this.res = await this.connect.run('/manual/insert', this.form, {
      loading: true
    });
  }
  public async update() {
    if(!this.valid()) return;

    const res = await this.connect.run('/support/manual/update', this.form, {
      loading: true
    })
  }
  private valid():boolean {
    this.validator.ctgo_manual_id = { valid: true };
    this.validator.manual_id = { valid: true };

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