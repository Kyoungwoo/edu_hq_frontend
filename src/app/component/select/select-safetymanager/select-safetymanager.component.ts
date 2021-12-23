import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';

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

  @Input() color:Color;
  @Input() label:string = "안전직무";
  @Input() placeholder:string = "선택";

  constructor() { }

  ngOnInit() {}


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
