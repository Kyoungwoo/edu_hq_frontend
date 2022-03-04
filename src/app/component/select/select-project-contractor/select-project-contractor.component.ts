import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { Constractor } from '../../modal/search-contractor/search-contractor.component';
import { SearchProjectContractorComponent } from '../../modal/search-project-contractor/search-project-contractor.component';

@Component({
  selector: 'app-select-project-contractor',
  templateUrl: './select-project-contractor.component.html',
  styleUrls: ['./select-project-contractor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectProjectContractorComponent),
    multi: true
  }]
})
export class SelectProjectContractorComponent implements OnInit,ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled && !this.readonly) {
      this.openModal();
    }
  }
  
  @Input() label:string = "원청사";
  @Input() text:string;
  @Input() editable:boolean = false;
  @Input() allState:boolean = false;
  @Input() required:boolean = false;
  @Input() multiple:boolean = false;
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  
  res:ConnectResult<Constractor>;

  constructor(
    private _modal:ModalController,
    private connect:ConnectService
  ) { }

  ngOnInit() {}

  public async get() {

    this.res = await this.connect.run('/category/certify/company/get', {
      company_contract_type: '원청사',
      search_text: ''
    });
    if(this.res.rsCode === 0) {
      const { rsMap } = this.res;
      if(this.multiple) {
        this.text = rsMap
        .filter(constractor => (this.value as number[]).indexOf(constractor.company_id))
        .map(constractor => constractor.company_name).join();
      }
    }
  }

  public async openModal() {
    const modal = await this._modal.create({
      component: SearchProjectContractorComponent,
      componentProps: {
        allState: this.allState,
        multiple: this.multiple,
        editable: this.editable
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log("data",data);
        const values:Constractor[] = data;
        this.value = values?.map(constractor => constractor.company_id);
        this.text = values?.map(constractor => constractor.company_name).join();
    }
  }
  
  @Output() change = new EventEmitter();

  private _value:number[] | number;
  @Input() set value(v:number[] | number) {
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:[]): void { 
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  valueChange(v) {
    this._value = v ? v : this.multiple ? [] : 0;
    this.get();
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
