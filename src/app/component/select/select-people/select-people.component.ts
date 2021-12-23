import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchPeopleComponent } from '../../modal/search-people/search-people.component';

@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectPeopleComponent),
    multi: true
  }]
})
export class SelectPeopleComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "회원";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async people(){
    const modal = await this._modal.create({
      component:SearchPeopleComponent
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
