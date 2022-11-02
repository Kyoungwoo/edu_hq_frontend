import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { Color } from '@ionic/core';
import { ApprovalAnswerType } from '../../confirm/approval/approval.component';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';

export class BusinessDistrictItem {
  district_name: string;
  district_use_state: number;
  district_id: number;
  district_url: string;
  district_code: number;
}

@Component({
  selector: 'app-select-business-district',
  templateUrl: './select-business-district.component.html',
  styleUrls: ['./select-business-district.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBusinessDistrictComponent),
      multi: true,
    },
  ],
})
export class SelectBusinessDistrictComponent
  implements OnInit, ControlValueAccessor
{
  @HostListener('click') onClick() {
    this.el.nativeElement
      .querySelector('[name=select]')
      .dispatchEvent(new Event('click'));
  }

  @Input() color: Color;
  @Input() label: string = '사업지구';
  // @required
  private _hq_regional_id: number;
  @Input() set hq_regional_id(v: number) {
    if (this._hq_regional_id !== v) {
      this._hq_regional_id = v;
      this.get();
    }
  }
  get hq_regional_id() {
    return this._hq_regional_id;
  }
  @Input() placeholder: string = '선택';
  @Input() warningMsg = true;

  constructor(
    private el: ElementRef<HTMLElement>,
    private promise: PromiseService,
    public languagePack: LanguagePackService,
    private changeDetector: ChangeDetectorRef,
    private connect: ConnectService,
    private file: FileService
  ) {}

  res: ConnectResult<BusinessDistrictItem>;

  ngOnInit() {
    this.get();
  }

  private async get() {
    this.res = await this.connect.run('/district/list', {
      hq_regional_id: this.hq_regional_id,
    });

    if (this.res.rsCode === 0) {
      this._value = this.res.rsMap[0].district_id;
      this.onChangeCallback(this._value);
      this.change.emit(this._value);
      this.changeGetName.emit(this.res.rsMap[0].district_name);
    }
  }
  //default setting
  @HostBinding('class.readonly') get classReadonly() {
    return this.readonly;
  }
  @HostBinding('class.disabled') get classDisabled() {
    return this.disabled;
  }
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() all: boolean = false;
  @Output() change = new EventEmitter();
  @Output() changeGetName = new EventEmitter();

  private _value: number = 0;
  @Input() set value(v: number) {
    this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);

    if (!this.res || this.res.rsCode !== 0) return;
    const selectedItem: BusinessDistrictItem[] = this.file
      .clone(this.res?.rsMap)
      .filter((item) => item.hq_regional_id === v);
    if (selectedItem.length > 0) {
      this.changeGetName.emit(selectedItem[0].district_name);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: number): void {
    this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
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
