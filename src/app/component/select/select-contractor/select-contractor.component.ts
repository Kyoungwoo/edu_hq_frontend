import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { SearchContractorComponent } from '../../modal/search-contractor/search-contractor.component';

export interface ValueData{
  company_id:[]
}
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

  name:string

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}

  async contractor(){
    const modal = await this._modal.create({
      component:SearchContractorComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log("data",data);
    if(data) {
      let company_name_data = [];
      data.forEach(item => {
        company_name_data.push(item.company_name);
        this.value.push(item.company_id);
      })

      console.log(this.value);
      this.name = company_name_data.toString();
      this.name = this.name.substring(0,this.name.length-1);
    }
  }
 

  @Output() change = new EventEmitter();

  private _value:ValueData[] = [];
  @Input() set value(v:ValueData[]) {
    if(v !== this._value) {
      this._value = v || [];
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:[]): void { 
    if(v !== this._value) 
    this._value = v || [];
    this.onChangeCallback(this._value);
    this.change.emit(this._value);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
