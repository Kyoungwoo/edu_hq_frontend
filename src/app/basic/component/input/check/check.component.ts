import { Component, Input, OnInit, forwardRef, EventEmitter, HostBinding, Output, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
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

  @HostBinding('class') get class() {
    let _class = [];
    if(this.color) _class.push(`ion-color-${this.color}`);
    return _class.join(' ');
  }

  @Input() type:'all' | 'normal' = 'normal';
  @Input() color:Color = "primary";
  @Input() on:any = true;
  @Input() off:any = false;
  @Input() custom_class:any = "";

  constructor() { }

  ngOnInit() {

    console.log("this.custom_class",this.custom_class);
  }

  onChange($event) {
    const _value:boolean = $event.detail.checked;
    this._value = _value;
    this.change.emit(this.value);
  }

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
      this._value = v === this.on ? true : false;
    }
  }
  get value() { return this._value ? this.on : this.off; }
  
  writeValue(v:any): void {
    if(v !== this._value) this._value = v; 
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
