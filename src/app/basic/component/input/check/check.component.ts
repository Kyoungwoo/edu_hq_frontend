import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { bounceInAnimation } from 'src/app/basic/app.animation';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  animations: [ bounceInAnimation ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckComponent),
    multi: true
  }]
})
export class CheckComponent implements OnInit, ControlValueAccessor {

  

  constructor() { }

  ngOnInit() {}


  
  private _value:boolean = false;
  @Input() set value(v:boolean) {  
    if(v !== this._value) this._value = v, this._onChangeCallback(v); 
  }
  get value() { 
    return this._value; 
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  writeValue(v:boolean): void { 
    if(v !== this._value) this._value = v; 
  }
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
    console.info("app-check:registerOnChange");
  }
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
    console.info("app-check:registerOnTouched");
  }
}
