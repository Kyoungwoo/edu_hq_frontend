import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchToolComponent } from '../../modal/search-tool/search-tool.component';

@Component({
  selector: 'app-select-tool',
  templateUrl: './select-tool.component.html',
  styleUrls: ['./select-tool.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectToolComponent),
    multi: true
  }]
})
export class SelectToolComponent implements OnInit, ControlValueAccessor{

  @Input() color:Color;
  @Input() label:string = "특수 공도구";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async tool(){
    const modal = await this._modal.create({
      component:SearchToolComponent
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
