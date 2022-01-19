import { Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EmailComponent),
    multi: true
  }]
})
export class EmailComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "";
  @Input() placeholder:string = "";
  @Output() delayKeyup:EventEmitter<any> = new EventEmitter();

  form = {
    id: '',
    domain: '',
    type: '' as 'select' | 'input'
  }

  constructor() { }

  ngOnInit() {}

  timeoutKeyup;
  onDelayKeyup($event) {
    clearTimeout(this.timeoutKeyup);
    this.timeoutKeyup = setTimeout(() => {
      this.delayKeyup.emit($event);
    }, 300);
  }

  public onChangeId() {
    const v = this.getEmailFormat();
    this.setEmailFormat(v);
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  public onChangeDomain() {
    const v = this.getEmailFormat();
    this.setEmailFormat(v);
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private getEmailFormat() {
    return this.form.id ? this.form.id + '@' + this.form.domain : '';
  }

  private setEmailFormat(v:string) {
    const domainIndex = v?.lastIndexOf('@');
    if(domainIndex > -1) {
      this.form.id = v.substring(0, domainIndex);
      this.form.domain = v.substring(domainIndex+1);
    } else {
      this.form.id = '';
      this.form.domain = '';
    }
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  @Input() set value(v:string) {
    if(v !== this.getEmailFormat()) {
      this.setEmailFormat(v);
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this.getEmailFormat();
  }
  writeValue(v:string): void { 
    if(v !== this.getEmailFormat()) {
      this.setEmailFormat(v);
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
