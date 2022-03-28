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

  /**
   * 선택된 현장의 하위 회사 목록을 검색하기 위한 select
   * @Input project_id
   * 만으로 검색
   * company_id는 왜 넣었는지?
   * 만약 '원청사 아래 협력사' 검색이 필요하다면 새로 하나 만들어야 함
   */

  @HostListener('click') onClick() {
    if(!this.disabled) {
      if(this.project_id) {
        this.openModal();
      } 
      else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '현장을 선택해주세요.';
      }
    }
  }

  @Input() all:boolean = false;
  @Input() color: Color;
  @Input() label: string = "업체";
  @Input() required: boolean = false;
  @Input() text: string;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean;
  @Input() readonly:boolean = false;

  @Input() 
  set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.get();
    }
  }
  get project_id() { return this._project_id }
  private _project_id:number = 0;
  
  res:ConnectResult<SelectItem>;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  public async get() {
    const { user_type } = this.user.userData;
    
    if(!this.project_id || !this.value) {
      if(this.multiple) {
        this.value = [];
      }
      else {
        this.value = 0;
      }

      if(this.all) {
        this.text = '전체';
      }
      else {
        this.text = '';
      }
      return;
    }

    this.res = await this.connect.run('/category/certify/company/partner_master/get', {
      project_id: this.project_id,
      search_text:''
    });

    if(this.res.rsCode === 0) {
      const { rsMap } = this.res;
      if(this.multiple) {
        if(!this.value && user_type === 'LH') {
          this.value = [rsMap[0].company_id];
        }

        this.text = rsMap
        .filter(constractor => (this.value as number[]).indexOf(constractor.company_id))
        .map(constractor => constractor.company_name).join();

        // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
        if(!this.text) this.value = [];
      }
      else {
        if(!this.value && user_type === 'LH') {
          this.value = rsMap[0].company_id;
        }

        this.text = rsMap.find(constractor => constractor.company_id === this.value)?.company_name || '';

        // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
        if(!this.text) this.value = 0;
      }
    }
  }

  public async openModal() {
    const modal = await this._modal.create({
      component: SearchCompanyComponent,
      componentProps: {
        all:this.all,
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
      this.value = data.selectItem.company_id;
    }
  }


  @Output() change = new EventEmitter();

  private _value: any;
  @Input() set value(v:number[] | number) {
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:number[] | number): void { 
    if(v !== this._value) {
      this.valueChange(v);
    }
  }

  valueChange(v) {
    this._value = v ? v : this.multiple ? [] : 0;
    this.onChangeCallback(v);
    this.change.emit(v);
    this.get();
  }

  private onChangeCallback = (v) => { };
  private onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
