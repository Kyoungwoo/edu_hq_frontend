import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchAttendanceComponent } from '../../modal/search-attendance/search-attendance.component';

@Component({
  selector: 'app-select-attendance',
  templateUrl: './select-attendance.component.html',
  styleUrls: ['./select-attendance.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectAttendanceComponent),
    multi: true
  }]
})
export class SelectAttendanceComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "출석 진행자";
  @Input() placeholder:string = "선택";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async attendance(){
    const modal = await this._modal.create({
      component:SearchAttendanceComponent
    });
    modal.present();
  }

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
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
