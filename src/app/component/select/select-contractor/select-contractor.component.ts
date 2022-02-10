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
  @Input() type?:boolean;
  @Input() required:boolean = false;
  @Input() multiple:boolean;
  isModalData:boolean = false;

 
  constructor(
    private _modal:ModalController,
    private connect:ConnectService
  ) { }

  ngOnInit() {
    console.log("this.type",this.type);
    console.log("this.value",this.value);
  }

  public async get() {
    console.log("dsfasdf-=----this.value",this.value);
    if(this.isModalData || !this.value) return;
    const res = await this.connect.run('/category/certify/company/get', {
      company_contract_type: '원청사',
      search_text: ''
    });
    if(this.type){
      let textArr = [];
      if(res.rsCode === 0) {
        for (let i = 0; i < res.rsMap.length; i++) {
          for (let x = 0; x < this.value.length; x++) {
            if (res.rsMap[i].company_id === this.value[x]) {
              textArr.push(res.rsMap[i].company_name);
            }
          }
        }
        this.text = textArr.toString();
      }
    } else {
      for(let i = 0; i < res.rsMap.length; i++) {
        if(res.rsMap[i].company_id === this.value) {
          this.text = res.rsMap[i].company_name;
        }
      }
    }
  }
  
  public async openModal() {
    console.log(this.multiple);
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchContractorComponent,
      componentProps:{
        type:this.type,
        value:this.value,
        multiple:this.multiple,
        form : {
          company_contract_type: this.label,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log("data",data);
      if(this.multiple){
        let compnay_name_string = [];
        console.log(data);
        for(let i = 0; i < data.length; i++) {
         compnay_name_string.push(data[i].company_name);
        }
        this.text = compnay_name_string.toString();
      } else {
        this.text = data.company_name
      }
    }
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
