import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Color } from '@ionic/core';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

export class RegionalItem {
  hq_regional_entire_state: 0 | 1; // 본사권한 = 1
  hq_regional_id: number; // id
  hq_regional_code: string; // 코드
  hq_regional_name: string; // 지역본부명
  hq_regional_use_state: 0 | 1; // 사용 = 1
}
@Component({
  selector: 'app-select-regional',
  templateUrl: './select-regional.component.html',
  styleUrls: ['./select-regional.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRegionalComponent),
      multi: true,
    },
  ],
})
export class SelectRegionalComponent implements OnInit, ControlValueAccessor {
  @Input() color: Color;
  @Input() label: string = '조직기구';
  @Input() placeholder: string = '선택';
  @Input() all: boolean = false;

  res: ConnectResult<RegionalItem>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.get();
  }

  private async get() {
    this.res = await this.connect.run('/category/organization/regional/get');
    this.changeDetector.detectChanges();
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
  @Output() change = new EventEmitter();

  private _value: number = 0;
  @Input() set value(v: number) {
    this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
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
