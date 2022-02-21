import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { SearchCompanyComponent, SelectItem } from '../../modal/search-company/search-company.component';

export class CompanyData {
  company_contract_type: string;
  search_text: string;
}
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

  @HostListener('click') onClick() {
    if(!this.disabled) {
      if(this.project_id) {
        this.openModal();
      } else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '현장을 선택해주세요.';
      }
    }
  }

  @Input() color: Color;
  @Input() label: string = "업체";
  @Input() required: boolean = false;
  @Input() text: string;
  @Input() multiple: boolean;
  @Input() disabled: boolean;

  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.value = this.multiple ? [] : 0;
    }
  }
  get project_id() { return this._project_id }

  isModalData: boolean = false;
  
  res:ConnectResult<SelectItem>
  private data;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {
  }

  public async get() {
    if (this.isModalData || !this.value) return;
    this.res= await this.connect.run('/category/certify/company/partner_master/get', {
      project_id: this.project_id,
      search_text: ''
    });
    console.log(this.multiple);
    if (this.res.rsCode === 0) {

      const { rsMap } = this.res;
        if (this.multiple) {
          this.text = rsMap
          .filter(constractor => (this.value as number[]).indexOf(constractor.company_id))
          .map(constractor => constractor.company_name).join();
      } else {
        this.text = rsMap.find(company => company.company_id === this.value)?.company_name || '';
        console.log(this.text);
      }
    }
  }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component: SearchCompanyComponent,
      componentProps: {
        value: this.value,
        multiple: this.multiple,
        form: {
          project_id: this.project_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.data = data;
      if (this.multiple) {
        console.log(data);
        this.value = data.map(company => company.company_id);
        this.text = data.map(company => company.company_name).join();
      } else {
        this.text = data.company_name;
        // console.log("---------------------data",data);
        this.value = data.company_id;
        // console.log("this.value",this.value);
      }
    }
  }


  @Output() change = new EventEmitter();

  private _value: any;
  @Input() set value(v:number[] | number) {
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:[]): void { 
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => { };
  private onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
