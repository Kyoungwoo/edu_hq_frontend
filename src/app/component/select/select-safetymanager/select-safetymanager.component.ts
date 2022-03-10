import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

export interface SafeJob {
  company_id: number, // 업체 ID
  ctgo_safe_job_id: number, // 안전직무 ID
  ctgo_safe_job_name_kr: string, // 직무명 한국
  ctgo_safe_job_name_vi: string, // 직무명 베트남
  ctgo_safe_job_name_ch: string, // 직무명 중국
  ctgo_safe_job_use_state: 0|1, // 1 사용 0 미사용
  ctgo_safe_job_name_en: string, // 직무명 영어
  ctgo_safe_job_role: string // 권한 1차 미사용 신경쓰지마세요.
}
@Component({
  selector: 'app-select-safetymanager',
  templateUrl: './select-safetymanager.component.html',
  styleUrls: ['./select-safetymanager.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSafetymanagerComponent),
    multi: true
  }]
})
export class SelectSafetymanagerComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }

  @Input() color:Color;
  // @Input() label:string = "안전직무";
  @Input() placeholder:string = "선택";

  private _company_id:number;
  @Input() set company_id(v:number) {
    if(this._company_id !== v) {
      this._company_id = v;
      this.get();
    }
  }
  get company_id() { return this._company_id }

  private _user_type:string;
  @Input() set user_type(v:string) {
    if(this._user_type !== v) {
      this._user_type = v;
      this.get();
    }
  }
  get user_type() { return this._user_type }

  res:ConnectResult<SafeJob>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService
  ) { }

  ngOnInit() {

  }

  private async get() {
    if(!this.company_id || !this.user_type) return;
    this.res = await this.connect.run('/category/safe_job/get', {
      company_id: this.company_id,
      user_type: this.user_type
    });
  }


  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;

  @Output() change = new EventEmitter();

  private _value:string = "";
  @Input() set value(v:string) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
