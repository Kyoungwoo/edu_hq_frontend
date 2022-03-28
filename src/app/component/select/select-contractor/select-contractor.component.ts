import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { Constractor, SearchContractorComponent } from '../../modal/search-contractor/search-contractor.component';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { FileService } from 'src/app/basic/service/core/file.service';
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
    if(!this.disabled && !this.readonly) {
      if(this.project_id) {
        this.openModal();
      } else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '현장을 선택해주세요.';
      }
    }
  }
  
  @Input() color:Color;
  @Input() label:string = "원청사";
  @Input() text:string;
  @Input() editable:boolean = false;
  @Input() allState:boolean = false;
  @Input() required:boolean = false;
  @Input() multiple:boolean = false;
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;

  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this._value = this.multiple ? [] : 0;
      this.valueChange(this._value);
    }
  }
  get project_id() { return this._project_id }

  res:ConnectResult<Constractor>;

  loading:boolean = false;
 
  constructor(
    private _modal:ModalController,
    private connect:ConnectService,
    private user: UserService,
    private file: FileService
  ) { }

  ngOnInit() {
  }

  public async get() {
    if(this.loading) return;
    this.loading = true;
    
    const { user_type } = this.user.userData;
    
    if(!this.project_id || !this.value) {
      if(this.multiple) {
        this.value = [];
      }
      else {
        console.log("김화숙");
        this.value = 0;
      }

      if(this.allState) {
        this.text = '전체';
      }
      else {
        this.text = '';
      }
      return;
    }

    this.res = await this.connect.run('/category/certify/company/master/get', {
      project_id: this.project_id,
      company_contract_type: '원청사',
      search_text: ''
    });
    console.log("this.res",this.res);
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
      component: SearchContractorComponent,
      componentProps: {
        allState: this.allState,
        project_id: this.project_id,
        multiple: this.multiple,
        editable: this.editable
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      if(this.multiple) {
        const values:Constractor[] = data.values;
        this.value = values?.map(constractor => constractor.company_id);
        this.text = values?.map(constractor => constractor.company_name).join();
      } else {
        const value:Constractor = data.values;
        this.value = value?.company_id || 0;
        this.text = value?.company_name || '전체';
      }
    }
    this.loading = false;
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
