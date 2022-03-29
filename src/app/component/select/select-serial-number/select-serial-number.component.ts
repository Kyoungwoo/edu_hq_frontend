import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchSerialNumberComponent } from '../../modal/search-serial-number/search-serial-number.component';

@Component({
  selector: 'app-select-serial-number',
  templateUrl: './select-serial-number.component.html',
  styleUrls: ['./select-serial-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSerialNumberComponent),
    multi: true
  }]
})
export class SelectSerialNumberComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "시리얼No.";
  @Input() disabled:boolean = false;

  constructor(
    private _modal:ModalController
  ) { }
  ngOnInit() {}
  async serial(){
    const modal = await this._modal.create({
      component:SearchSerialNumberComponent
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
