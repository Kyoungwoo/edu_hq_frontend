import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioInputComponent),
    multi: true
  }]
})
export class RadioInputComponent implements OnInit, ControlValueAccessor {
  @HostListener('setValue', ['$event']) setValue({ detail:value }) {
    this.value = value;
  }

  @Input() color:Color;
  @Input() label:string;
  @Input() required:boolean;

  constructor() { }

  ngOnInit() {}

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  public _value:boolean = false;
  @Input() set value(v:any) {
    if(v !== this.value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() { return this._value; }
  
  writeValue(v:any): void {
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
