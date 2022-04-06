import { Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

export interface Business {
  ctgo_business_field_id: number,
  ctgo_business_field_name: string
}

@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectBusinessComponent),
    multi: true
  }]
})
export class SelectBusinessComponent implements OnInit, ControlValueAccessor {
  @Input() color:Color;
  @Input() label:string = "사업분야";
  @Input() placeholder:string = "선택";


  res:ConnectResult<Business>;

  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.get();
  }
  
  private async get() {
    this.res = await this.connect.run('/category/business_field/get');
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
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }

}
