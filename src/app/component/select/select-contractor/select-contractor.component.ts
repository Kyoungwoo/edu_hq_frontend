import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import {
  Constractor,
  SearchContractorComponent,
} from '../../modal/search-contractor/search-contractor.component';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectContractorComponent),
      multi: true,
    },
  ],
})
export class SelectContractorComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    if (!this.disabled && !this.readonly) {
      if (this.project_id) {
        this.openModal();
      } else {
        if (this.only_state) {
          this.openModal();
        } else {
          this.res = new ConnectResult();
          this.res.rsCode = 1008;
          this.res.rsMsg = '현장을 선택해주세요.';
        }
      }
    }
  }

  @Input() color: Color;
  @Input() label: string = '원청사';
  @Input() text: string;
  @Input() editable: boolean = false;
  @Input() allState: boolean = false;
  @Input() required: boolean = false;
  @Input() multiple: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() only_state: boolean = false;
  @Input() hq_regional_id: number = 0;
  @Input() district_id: number = 0;

  private _project_id: number = 0;
  @Input() set project_id(v: number) {
    if (this._project_id !== v) {
      this._project_id = v;
      this.get();
    }
  }
  get project_id() {
    return this._project_id;
  }

  res: ConnectResult<Constractor>;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private user: UserService,
    private file: FileService,
    public languagePack: LanguagePackService
  ) {}

  ngOnInit() {
    const { user_type } = this.user.userData;
    if (user_type === 'COMPANY') this.disabled = true;
  }

  public async get() {
    const { user_type } = this.user.userData;
    if ((!this.project_id || !this.value) && !this.only_state) {
      if (this.multiple) {
        this.value = [];
      } else {
        this.value = 0;
      }

      if (this.allState) {
        this.text = '전체';
        return;
      } else {
        this.text = '';
        // LH의 경우, 검색해서 가장 위의 회사를 넣어주어야 한다. 때문에, LH가 아닌 경우만 리턴하고, LH의 경우 값을 받아와야 함.
        if (user_type !== 'LH') return;
      }
    }
    // let method = '/category/certify/search_my_master_company/get';
    // if(this.only_state) method = '/category/certify/company/get';
    let method = '/integrated/master_company/list';
    if (this.only_state) method = '/integrated/master_company/list';
    this.res = await this.connect.run(method, {
      project_id: this.project_id,
      hq_regional_id: this.hq_regional_id,
      district_id: this.district_id,
      company_contract_type: '원청사',
      search_text: '',
    });
    if (this.res.rsCode === 0) {
      const { rsMap } = this.res;
      if (this.multiple) {
        if (!this.value) {
          // 여기까지 올 때, value가 없을 수 있는 경우는 user_type이 LH인 경우밖에 없음.
          if (this.allState) {
            this.value = [];
            this.text = '전체';
          } else this.value = [rsMap[0].company_id];
        }
        this.text = rsMap
          .filter((constractor) =>
            (this.value as number[]).indexOf(constractor.company_id)
          )
          .map((constractor) => constractor.company_name)
          .join();

        // 현장에 소속되어 있는 원청사 중 value와 같은 값이 없다면 리셋
        if (!this.text) this.value = [];
      } else {
        if (!this.value && user_type === 'LH') {
          if (!this.allState) this.value = rsMap[0].company_id;
        }

        this.text =
          rsMap.find((constractor) => constractor.company_id === this.value)
            ?.company_name || (this.allState ? '전체' : '');
        // console.log(this.value);
        // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
        if (!this.text) this.value = 0;
      }
    }

    if (this.res.rsCode === 1008) {
      if (this.multiple) this.value = [];
      else this.value = 0;

      if (this.allState) this.text = '전체';
      else this.text = '';
    }
  }

  public async openModal() {
    const modal = await this._modal.create({
      component: SearchContractorComponent,
      componentProps: {
        value: this.value,
        allState: this.allState,
        project_id: this.project_id,
        hq_regional_id: this.hq_regional_id,
        district_id: this.district_id,
        multiple: this.multiple,
        editable: this.editable,
        only_state: this.only_state,
      },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log(data);
      if (this.multiple) {
        const values: Constractor[] = data.values;
        this.value = values?.map((constractor) => constractor.company_id);
      } else {
        const value: Constractor = data.values;
        this.value = value?.company_id || 0;
        this.text = value.company_name;
        // this.get();
      }
    }
  }

  @Output() change = new EventEmitter();

  private _value: number[] | number;
  @Input() set value(v: number[] | number) {
    if (v !== this._value) {
      this.valueChange(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: []): void {
    if (v !== this._value) {
      this.valueChange(v);
      // this.get();
    }
  }
  valueChange(v) {
    this._value = v ? v : this.multiple ? [] : 0;
    this.onChangeCallback(v);
    let master_company_names = [];
    try {
      master_company_names = this.text.split(',');
    } catch (e) {}
    this.change.emit({
      master_company_id: this.multiple ? 0 : v,
      master_company_name: this.text,
      master_company_ids: this.multiple ? v : [],
      master_company_names,
    });
    this.get();
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
