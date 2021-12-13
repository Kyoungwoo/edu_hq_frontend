import { Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true
  }]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {}

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  public _value:boolean = false;
  @Input()
  set value(v:any) {
    if(v !== this.value) {
      this._value = v;
      this.change.emit(v);
    }
  }
  get value() { return this._value; }
  
  writeValue(v:any): void {
    if(v !== this._value) this._value = v; 
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }

}
