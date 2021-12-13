import { Component, Input, OnInit, forwardRef, Output, EventEmitter, ViewChild, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() label:string = "";
  @Input() placeholder:string = "";
  @Input() type:"email" | "number" | "password" | "search" | "tel" | "text" | "url" = null;
  @Input() autofocus:boolean = false;
  @Input() maxlength:number = 50;
  @Input() custom_class:string = "";
  @Output() buttonClick:EventEmitter<string> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {}
  
  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  private _value:string = "";
  @Input() set value(v:string) {
    if(v !== this._value) {
      this._value = v;
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this._value = v; 
  }

  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
