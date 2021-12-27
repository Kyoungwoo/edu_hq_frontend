import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { SearchContractorComponent } from '../../modal/search-contractor/search-contractor.component';

@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectContractorComponent),
    multi: true
  }]
})
export class SelectContractorComponent implements OnInit, ControlValueAccessor {
  @Input() color:Color;
  @Input() label:string = "원청사";

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async contractor(){
    const modal = await this._modal.create({
      component:SearchContractorComponent
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
