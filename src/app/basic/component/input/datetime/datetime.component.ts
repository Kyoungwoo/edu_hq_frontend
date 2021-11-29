import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { DatetimePopoverComponent } from '../datetime-popover/datetime-popover.component';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeComponent),
    multi: true
  }]
})
export class DatetimeComponent implements OnInit, ControlValueAccessor {

  @Input() label:string;

  form = {
    hour: '',
    minute: ''
  }

  constructor(
    private el: ElementRef,
    private popover: PopoverController,
    private regex: RegexService
  ) { }

  ngOnInit() {}

  changeHour($event:KeyboardEvent) {
    if(this.form.hour.length < 2) {
      this.form.hour = this.regex.replace.fix(this.form.hour, 2, 0, 23);
    }
    else if(this.regex.number.test($event.key)) {
      this.form.hour = this.regex.replace.fix(this.form.hour + $event.key, 2, 0, 23);
    } 
    else if($event.key === 'Backspace') {
      this.form.hour = this.regex.replace.fix(this.form.hour.slice(0, -1), 2);
    }
  }

  changeMinute($event:KeyboardEvent) {
    if(this.form.minute.length < 2) {
      this.form.minute = this.regex.replace.fix(this.form.minute, 2, 0, 59);
    }
    else if(this.regex.number.test($event.key)) {
      this.form.minute = this.regex.replace.fix(this.form.minute + $event.key, 2, 0, 59);
    }
    else if($event.key === 'Backspace') {
      this.form.minute = this.regex.replace.fix(this.form.minute.slice(0, -1), 2);
    }
  }

  async popoverDateTimePicker() {
    const event:any = {
      target: this.el.nativeElement
    }
    const popover = await this.popover.create({
      component: DatetimePopoverComponent,
      componentProps: {
        hour: this.form.hour,
        minute: this.form.minute
      },
      event,
      showBackdrop: false
    });
    popover.present();
    this.fucus();
    const { data } = await popover.onWillDismiss();
    this.blur();
    if(data) {
      this.form.hour = data.hour;
      this.form.minute = data.minute;
    }
  }

  private getTimeFormat() {
    return this.form.hour + ':' + this.form.minute;
  }
  private setTimeFormat(v) {
    try {
      const time = v.split(':');
      this.form.hour = time[0];
      this.form.minute = time[1];
    } catch(e) {
      this.form.hour = null;
      this.form.minute = null;
    }
  }

  //default setting
  @HostBinding('class.focus') get classFocus() { return this.isFocus }
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  private isFocus:boolean = false;
  fucus() {
    this.isFocus = true;
  }
  blur() {
    this.isFocus = false;
  }

  @Input()
  set value(v:any) {
    if(v !== this.getTimeFormat()) {
      this.setTimeFormat(v);
      this.change.emit(this.value);
    }
  }
  get value() { return this.getTimeFormat() }
  
  writeValue(v:any): void {
    if(v !== this.getTimeFormat()) {
      this.setTimeFormat(v);
    }
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
