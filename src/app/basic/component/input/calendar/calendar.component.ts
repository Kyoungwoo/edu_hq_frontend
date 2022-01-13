import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { RegexService } from 'src/app/basic/service/util/regex.service';

import { CalendarPopoverComponent } from '../calendar-popover/calendar-popover.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true
  }]
})
export class CalendarComponent implements ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "";
  @Input() min:string;
  @Input() max:string;
  @Input() timePicker:boolean;
  @Input() type:'date' | 'week' = 'date';

  form = {
    year: '',
    month: '',
    date: ''
  }

  constructor(
    private elRef: ElementRef,
    private popover: PopoverController,
    private regex: RegexService
  ) {

  }

  changeYear(ev) {
    const value = ev.target.value;

    if(value) {
      if(value.length < 4) {
        this.form.year = this.regex.replace.fix(value, 4);
      }
      else if(ev.key.length === 1) {
        this.form.year = this.regex.replace.fix(value + ev.key, 4);
      }
      else if(ev.key === 'Backspace') {
        this.form.year = this.regex.replace.fix(value.slice(0, -1), 4);
      }
    }

    const v = this.getDateFormat();
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  changeMonth(ev) {
    const value = ev.target.value;
    
    if(value) {
      if(value.length < 2) {
        this.form.month = this.regex.replace.fix(value, 2);
      }
      else if(ev.key.length === 1) {
        this.form.month = this.regex.replace.fix(value + ev.key, 2);
      }
      else if(ev.key === 'Backspace') {
        this.form.month = this.regex.replace.fix(value.slice(0, -1), 2);
      }
    }

    const v = this.getDateFormat();
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  changeDate(ev) {
    const value = ev.target.value;

    if(value) {
      if(value.length < 2) {
        this.form.date = this.regex.replace.fix(value, 2, 1, 31);
      }
      else if(ev.key.length === 1) {
        this.form.date = this.regex.replace.fix(value + ev.key, 2, 1, 31);
      }
      else if(ev.key === 'Backspace') {
        this.form.date = this.regex.replace.fix(value.slice(0, -1), 2, 1, 31);
      }
    }
    
    const v = this.getDateFormat();
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  async popoverCalendar() {
    const event:any = {target: this.elRef.nativeElement}
    let date = null;
    if(Number(this.form.year) > 1920) {
      const valueDateArr = this.getDateFormat().split('-');
      date = new Date(Number(valueDateArr[0]), Number(valueDateArr[1])-1, Number(valueDateArr[2]));
      date = isNaN(date.getTime()) ? new Date() : date;
    }
    const popover = await this.popover.create({
      cssClass: 'calendar-popover',
      component: CalendarPopoverComponent,
      componentProps: {
        min: this.min,
        max: this.max,
        value: date,
        timePicker: this.timePicker,
        type: this.type
      },
      event,
      showBackdrop: false
    });
    popover.present();
    this.fucus();
    const { data } = await popover.onWillDismiss();
    this.blur();
    if(data) {
      this.value = data.getFullYear() + '-' + this.regex.replace.fix(data.getMonth() + 1, 2) + '-' + this.regex.replace.fix(data.getDate(), 2);
    }
  }

  private getDateFormat() {
    return this.regex.replace.fix(this.form.year, 4) + '-' + this.regex.replace.fix(this.form.month, 2) + '-' + this.regex.replace.fix(this.form.date, 2);
  }
  private setDateFormat(v) {
    try {
      const numArr = v.split('-');
      this.form.year = numArr[0];
      this.form.month = numArr[1];
      this.form.date = numArr[2];
    } catch(e) {
      this.form.year = null;
      this.form.month = null;
      this.form.date = null;
    }
  }

  //default setting
  @HostBinding('class.focus') get classFocus() { return this.isFocus }
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private isFocus:boolean = false;
  fucus() {
    this.isFocus = true;
  }
  blur() {
    this.isFocus = false;
  }

  @Input() 
  set value(v) {
    if(v !== this.getDateFormat()) {
      this.setDateFormat(v);
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() { return this.getDateFormat(); };

  writeValue(v: any) {
    if(v !== this.getDateFormat()) {
      this.setDateFormat(v);
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }
}
