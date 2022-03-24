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
      if(this.project_id) {
        this.openModal();
      } else {
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
    private user: UserService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  public async get() {
    if(this.isModalData) return;
    
    if(!this.value && !this.all) return;
    
    if(this.value === 0 && this.all) {
      this.text = '전체';
      this.changeDetector.detectChanges();
      return;
    }
    if(!this.value) return;

    this.res = await this.connect.run('/category/certify/company/master/get', {
      project_id: this.project_id,
      company_contract_type: '협력사',
      search_text: ''
    });
    if (this.res.rsCode === 0) {

      const { rsMap } = this.res;
        if (this.multiple) {
          this.text = rsMap
          .filter(constractor => (this.value as number[]).indexOf(constractor.company_id))
          .map(constractor => constractor.company_name).join();
      } else {
        if(this.user.userData.belong_data.company_contract_type === 'LH') {
          this.text = rsMap[0].company_name;
        } else {
          this.text = rsMap.find(company => company.company_id === this.value)?.company_name || '';
        }
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
        this.value = data.map(company => company.company_id);
        this.text = data.map(company => company.company_name).join();
      } else {
        this.text = data.company_name;
        this.value = data.company_id;
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
  writeValue(v:number[] | number): void { 
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
