import { Component, Input, OnInit, forwardRef, EventEmitter, HostBinding, Output, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckComponent),
    multi: true
  }]
})
export class CheckComponent implements OnInit, ControlValueAccessor {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.color) _class.push(`ion-color-${this.color}`);
    if(this.size) _class.push(`check-${this.size}`);
    return _class.join(' ');
  }
  @HostListener('click') onClick() {
    if(this.disabled || this.readonly) return;
    if(this.value === this.on) this.value = this.off;
    else this.value = this.on;
  }

  @Input() type:'all' | 'default' = 'default';
  @Input() color:Color = "primary";
  @Input() on:any = true;
  @Input() off:any = false;
  @Input() size:'small' | 'default' = 'default';

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
    console.log("this.value",this.value);
    console.log("v",v);
    if(v !== this.value) {
      this._value = v === this.on ? true : false;
      this.onChangeCallback(this.value);
      this.change.emit(this.value);

    }
  }
  get value() { return this._value ? this.on : this.off; }
  
  writeValue(v:any): void {
    console.log("this.value",this.value);
    console.log("v",v);
    if(v !== this.value) {
      this._value = v === this.on ? true : false;
      this.onChangeCallback(this.value);
      this.change.emit(this.value);
    }
  }
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
