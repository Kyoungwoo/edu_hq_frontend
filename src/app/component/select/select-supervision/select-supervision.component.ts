import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { SupervisionSearchComponent } from '../../modal/supervision-search/supervision-search.component';

export interface ValueData{
  company_id:[]
}

@Component({
  selector: 'app-select-supervision',
  templateUrl: './select-supervision.component.html',
  styleUrls: ['./select-supervision.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSupervisionComponent),
    multi: true
  }]
})
export class SelectSupervisionComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }
  @Input() color:Color;
  @Input() label:string = "감리사";
  @Input() text:string;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;

  isModalData:boolean = false;
  constructor(
    private _modal:ModalController,
    private connect:ConnectService
  ) { }

  ngOnInit() {
  }

  public async get() {
    if(this.isModalData || !this.value) return;
    const res = await this.connect.run('/category/certify/company/get', {
      company_contract_type: '감리사',
      search_text: ''
    });
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
    }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SupervisionSearchComponent,
      componentProps:{
        value:this.value,
        form : {
          company_contract_type: this.label,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss()
    if(data) {
      let compnay_name_string = [];
      data.forEach(item => {
        if(!this.value.includes(item.company_id)) this.value.push(item.company_id);
        compnay_name_string.push(item.company_name);
      });
      this.text = compnay_name_string.toString();
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
    this.get();
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
