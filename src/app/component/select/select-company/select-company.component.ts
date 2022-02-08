import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchCompanyComponent } from '../../modal/search-company/search-company.component';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectCompanyComponent),
    multi: true
  }]
})
export class SelectCompanyComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "업체";
  @Input() required:boolean = false;
  @Input() text:string;

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async company(){
    const modal = await this._modal.create({
      component:SearchCompanyComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) { 
      console.log(data);
      this.value = data.company_id;
      this.text = data.company_name;
    }
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
