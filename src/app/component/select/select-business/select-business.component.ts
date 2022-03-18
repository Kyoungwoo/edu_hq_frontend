import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

export interface business {
  ctgo_business_id: number,
  ctgo_business_name: string
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


  res:ConnectResult<business>;

  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.get();
  }
  
  // 비니스로 변경
  private async get() {
    this.res = await this.connect.run('/category/organization/business/get');
  }

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
