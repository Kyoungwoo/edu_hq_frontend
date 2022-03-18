import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchConstructionMachineryComponent } from '../../modal/search-construction-machinery/search-construction-machinery.component';

@Component({
  selector: 'app-select-construction-machinery',
  templateUrl: './select-construction-machinery.component.html',
  styleUrls: ['./select-construction-machinery.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectConstructionMachineryComponent),
    multi: true
  }]
})
export class SelectConstructionMachineryComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "건설기계";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async machinery(){
    const modal = await this._modal.create({
      component:SearchConstructionMachineryComponent
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
