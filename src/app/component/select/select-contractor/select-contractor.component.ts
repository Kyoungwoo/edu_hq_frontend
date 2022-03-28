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
      this.get();
    }
  }
  get project_id() { return this._project_id }

  res:ConnectResult<Constractor>;
 
  constructor(
    private _modal:ModalController,
    private connect:ConnectService,
    private user: UserService,
    private file: FileService
  ) { }

  ngOnInit() {
  }

  public async get() {
    const { user_type } = this.user.userData;
    
    if(!this.project_id || !this.value) {
      if(this.multiple) {
        this.value = [];
      }
      else {
        this.value = 0;
      }

      if(this.allState) {
        this.text = '전체';
        return;
      }
      else {
        this.text = '';
        // LH의 경우, 검색해서 가장 위의 회사를 넣어주어야 한다. 때문에, LH가 아닌 경우만 리턴하고, LH의 경우 값을 받아와야 함.
        if(user_type !== 'LH') return;
      }
    }

    this.res = await this.connect.run('/category/certify/company/master/get', {
      project_id: this.project_id,
      company_contract_type: '원청사',
      search_text: ''
    });
    if(this.res.rsCode === 0) {
      const { rsMap } = this.res;
      if(this.multiple) {
        if(!this.value) {
          // 여기까지 올 때, value가 없을 수 있는 경우는 user_type이 LH인 경우밖에 없음.
          this.value = [rsMap[0].company_id];
        }
        this.text = rsMap
        .filter(constractor => (this.value as number[]).indexOf(constractor.company_id))
        .map(constractor => constractor.company_name).join();

        // 현장에 소속되어 있는 원청사 중 value와 같은 값이 없다면 리셋
        if(!this.text) this.value = [];
      }
      else {
        if(!this.value) {
          // 여기까지 올 때, value가 없을 수 있는 경우는 user_type이 LH인 경우밖에 없음.
          this.value = rsMap[0].company_id;
        }

        this.text = rsMap.find(constractor => constractor.company_id === this.value)?.company_name || '';

        // 현장에 소속되어 있는 원청사 중 value와 같은 값이 없다면 리셋
        if(!this.text) this.value = [];
      }
    }
  }
  
  public async openModal() {
    const modal = await this._modal.create({
      component: SearchContractorComponent,
      componentProps: {
        value:this.value,
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
      } else {
        const value:Constractor = data.values;
        this.value = value?.company_id || 0;
      }
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
    this.onChangeCallback(v);
    this.change.emit(v);
    this.get();
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
