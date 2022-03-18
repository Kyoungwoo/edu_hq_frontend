import { Component, Input, OnInit, forwardRef, Output, EventEmitter, ViewChild, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';

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
  @HostListener('setValue', ['$event']) setValue({ detail:value }) {
    this.value = value;
    this.onKeyup();
  }

  @Input() name:string = '';
  @Input() color:Color;
  @Input() label:string = "";
  @Input() placeholder:string = "";
  @Input() type:"email" | "number" | "password" | "search" | "tel" | "text" | "url" = null;
  @Input() autofocus:boolean = false;
  @Input() maxlength:number = 50;
  @Input() autocomplete:string;
  @Output() buttonClick:EventEmitter<string> = new EventEmitter();
  @Output() delayKeyup:EventEmitter<null> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {}

  timeoutKeyup;
  public onKeyup($event?:KeyboardEvent) {
    if($event?.key === 'Enter') return;
    clearTimeout(this.timeoutKeyup);
    this.timeoutKeyup = setTimeout(() => {
      this.delayKeyup.emit();
    }, 300);
  }
  
  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
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
    if(v !== this._value) {
      this._value = v;
      this.delayKeyup.emit();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
