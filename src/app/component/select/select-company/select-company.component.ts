import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
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
      if(this.project_id && this.company_id) {
        this.openModal();
      } else if(!this.project_id) {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '현장을 선택해주세요.';
      } else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '원청사을 선택해주세요.';
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

  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this._value = this.multiple ? [] : 0;
      this.valueChange(this._value);
    }
  }
  
  private _company_id:number = 0;
  @Input() set company_id(v:number) {
    if(this._company_id !== v) {
      this._company_id = v;
      this._value = this.multiple ? [] : 0;
      this.valueChange(this._value);
    }
  }
  get project_id() { return this._project_id }
  get company_id() { return this._company_id }

  isModalData: boolean = false;
  
  res:ConnectResult<SelectItem>
  private data;

  loading:boolean = false;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private user: UserService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  public async get() {
    if(this.loading) return;
    this.loading = true;
    
    const { user_type } = this.user.userData;

    
    if(!this.project_id || !this.company_id || !this.value) {
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
    
    this.res = await this.connect.run('/category/certify/partner/company/get', {
      master_company_id: this.company_id,
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
      }
      else {
        if(!this.value && user_type === 'LH') {
          this.value = rsMap[0].company_id;
        }

        this.text = rsMap.find(constractor => constractor.company_id === this.value)?.company_name || '';
      }
    }
    this.loading = false;
  }

  public async openModal() {
    this.loading = true;
    const modal = await this._modal.create({
      component: SearchCompanyComponent,
      componentProps: {
        all:this.all,
        value: this.value,
        multiple: this.multiple,
        form: {
          master_company_id: this.company_id,
          project_id: this.project_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.data = data;
      if(data.allState) {
        this.value = 0;
        this.text = '전체';
      } else  {
        this.res.rsCode = 0;
        this.text = data.selectItem.company_name;
        this.value = data.selectItem.company_id;
      }
    }
    this.loading = false;
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

  async valueChange(v) {
    this._value = v ? v : this.multiple ? [] : 0;
    await this.onChangeCallback(v);
    await this.change.emit(v);
    await this.get();
  }

  private onChangeCallback = (v) => { };
  private onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
