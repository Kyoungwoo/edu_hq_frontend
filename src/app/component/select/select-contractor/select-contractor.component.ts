import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { SearchContractorComponent } from '../../modal/search-contractor/search-contractor.component';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

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

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }
  @Input() color:Color;
  @Input() label:string = "원청사";
  @Input() text:string;
  isModalData:boolean = false;

 
  constructor(
    private _modal:ModalController,
    private connect:ConnectService
  ) { }

  ngOnInit() {
    
  }
  public async get() {
  }
  
  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchContractorComponent,
      componentProps:{
        value:this.value,
        form : {
          company_contract_type: this.label,
          search_text: ''
        }
      }
    });
    modal.present();
  }
 
  @Input() disabled:boolean = false;
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
    this.get();
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
