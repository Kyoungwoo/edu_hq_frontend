import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchHeavyComponent } from '../../modal/search-heavy/search-heavy.component';

@Component({
  selector: 'app-select-heavy',
  templateUrl: './select-heavy.component.html',
  styleUrls: ['./select-heavy.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectHeavyComponent),
    multi: true
  }]
})
export class SelectHeavyComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.heavy();
  }

  @Input() color: Color;
  @Input() label: string = "중장비";
  @Input() disabled: boolean = false;


  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}

  async heavy(){
    const modal = await this._modal.create({
      component:SearchHeavyComponent
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

