import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

class CtgoRiskType {
  ctgo_area_risk_id?: number;
  ctgo_area_risk_name?: string;
}

@Component({
  selector: 'app-select-area-risk-type',
  templateUrl: './select-area-risk-type.component.html',
  styleUrls: ['./select-area-risk-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectAreaRiskTypeComponent),
      multi: true,
    },
  ],
})
export class SelectAreaRiskTypeComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }

  @Input() all: boolean = false;
  @Input() color: Color;
  @Input() label = '위험지역 유형';
  @Input() placeholder: string = "선택";
  @Input() multiple: boolean = false;


  resCtgoRisk: ConnectResult<CtgoRiskType>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    public languagePack: LanguagePackService
  ) {}

  ngOnInit() { }    

  //위험지역 유형 가져오기
  public async get() {
    this.resCtgoRisk = await this.connect.run('/category/risk/type/get', {}, {});
    if (this.resCtgoRisk.rsCode === 0) { };
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() change = new EventEmitter();

  private _value: CtgoRiskType;
  @Input() set value(v: CtgoRiskType) {
    if (v !== this._value) {
      this._value = v;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: any): void {
    if (v !== this._value) {
      this.valueChange(v);
    }
  }

  valueChange(v) {
    this._value = v ? v : this.multiple ? [] : 0;
    this.onChangeCallback(v);
    this.change.emit(v);
    this.get();
  }

  private onChangeCallback = (v) => { };
  private onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }

}
