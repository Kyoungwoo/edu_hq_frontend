import { Component, Input, OnInit, forwardRef, Output, EventEmitter, ViewChild } from '@angular/core';
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

  @ViewChild('template') template;

  @Input() label:string = "";
  @Input() icon:string = "";
  @Input() placeholder:string = "";
  @Input() type:"date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week" = "text";
  @Input() autofocus:boolean = false;
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() maxlength:number = 50;
  @Output() iconClick:EventEmitter<string> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {}
  


  private _value:string = "";
  @Input() set value(v:string) {
    if(v !== this._value) this._value = v, this._onChangeCallback(v); 
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this._value = v; 
  }

  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
    console.info("app-input:registerOnChange");
  }
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
    console.info("app-input:registerOnTouched");
  }
}
