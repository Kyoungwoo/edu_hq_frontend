import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent implements OnInit, ControlValueAccessor {

  @Input() label:string = "";
  @Input() icon:string = "";
  @Input() placeholder:string = "";
  @Input() autofocus:boolean = false;
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() maxlength:number = 100;
  @Input() autoGrow:boolean = true;

  @Input() set value(v:string) { 
    if(v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }
  get value() { return this._value; }
  private _value = "";
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};

  constructor() { }

  ngOnInit() {}

  writeValue(v: string): void {
    if(v !== this._value) this._value = v;
  }
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
    console.info("app-input:registerOnChange");
  }
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
    console.info("app-input:registerOnTouched");
  }
  setDisabledState?(isDisabled: boolean): void {
    console.info("app-input:setDisabledState");
  }

}
