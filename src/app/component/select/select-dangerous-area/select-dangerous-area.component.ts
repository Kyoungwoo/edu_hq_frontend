import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchDangerousAreaComponent } from '../../modal/search-dangerous-area/search-dangerous-area.component';

@Component({
  selector: 'app-select-dangerous-area',
  templateUrl: './select-dangerous-area.component.html',
  styleUrls: ['./select-dangerous-area.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectDangerousAreaComponent),
    multi: true
  }]
})
export class SelectDangerousAreaComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "위험지역";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async dangerous(){
    const modal = await this._modal.create({
      component:SearchDangerousAreaComponent
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
