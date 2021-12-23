import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SearchSceneComponent } from '../../modal/search-scene/search-scene.component';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-select-scene',
  templateUrl: './select-scene.component.html',
  styleUrls: ['./select-scene.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSceneComponent),
    multi: true
  }]
})
export class SelectSceneComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "현장";

  constructor(
    private _modal:ModalController

  ) { }

  ngOnInit() {}
  async scene(){
    const modal = await this._modal.create({
      component:SearchSceneComponent
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