import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { MachineryItem, SearchConstructionMachineryComponent } from '../../modal/search-construction-machinery/search-construction-machinery.component';

@Component({
  selector: 'app-select-construction-machinery',
  templateUrl: './select-construction-machinery.component.html',
  styleUrls: ['./select-construction-machinery.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectConstructionMachineryComponent),
    multi: true
  }]
})
export class SelectConstructionMachineryComponent implements OnInit, ControlValueAccessor {


  // @HostListener('click') onClick() {
  //   if(!this.disabled) this.machinery();
  // }

  @HostListener('click') onClick() {
    if(!this.disabled) {
      if(this.company_id) this.machinery();
      else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '업체를 선택해주세요.';
      }
    }
  }

  @Input() all:boolean = false;
  @Input() color:Color;
  @Input() label:string = "건설기계";
  @Input() disabled: boolean = false;
  @Input() text: string;
  @Input() readonly:boolean = false;
  @Input() required: boolean = false;

  @Input() 
  set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.get();
    }
  }
  get project_id() { return this._project_id }
  private _project_id:number = 0;

  private _company_id:number;
  @Input() set company_id(v:number) {
    if(this._company_id !== v) {
      this._company_id = v;
      this.get();
    }
  }

  get company_id() { return this._company_id }
  isModalData: boolean = false;

  res:ConnectResult<MachineryItem>

  constructor(
    private _modal:ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  public async get() {
    const { user_type } = this.user.userData;
    if(this.isModalData) return;
    // this.value = 0;
    // if(this.all) {
    //   this.text = '전체';
    // }
    // else {
    //   this.text = '';
    // }

    // if(!this.value && !this.all) return;
    
    // if(this.value === 0 && this.all) {
    //   this.text = '전체';
    //   return;
    // }

    // if(!this.value) return;
    
    if(!this.project_id || !this.company_id || !this.value) {
      this.value = 0;

      if(this.all) {
        this.text = '전체';
      }
      else {
        this.text = '';
      }
      return;
    }

    this.res = await this.connect.run('/category/certify/machinery/get', {
      master_company_id: this.company_id,
      project_id: this.project_id,
      search_text: ''
    });
    if (this.res.rsCode === 0) {
      const { rsMap } = this.res;
      // this.value = rsMap[0]?.company_id;
      // this.text = rsMap.find(company => company.ctgo_machinery_id === this.value)?.ctgo_machinery_name || '';

      if(!this.value && user_type === 'LH') {
        this.value = rsMap[0]?.company_id;
      }

      this.text = rsMap.find(company => company.ctgo_machinery_id === this.value)?.ctgo_machinery_name || '';

      // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
      if(!this.text) this.value = 0;
    }

    if(this.res.rsCode === 1008) {
      this.value = 0;
      if(this.all) {
        this.text = '전체';
      }
      else {
        this.text = '';
      }
    }
  }

  async machinery(){
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchConstructionMachineryComponent,
      componentProps: {
        all:this.all,
        value: this.value,
        form: {
          master_company_id: this.company_id,
          project_id: this.project_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      const allState = <Boolean>data.allState;
      const selectedItem = <MachineryItem>data.selectedItem;
      if(allState) {
        this.value = 0;
        this.text = '전체';
      } else {
        console.log(selectedItem);
        this.value = selectedItem.ctgo_machinery_id;
        this.text = selectedItem.ctgo_machinery_name;
      }
    }
    this.isModalData = false;
  }

  @Output() change = new EventEmitter();

  private _value:any;
  @Input() set value(v:number) {
    if(v !== this._value) this.valueChange(v);
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this.valueChange(v);
  }
  async valueChange(v) {
    this._value = v ? v : 0;
    this.onChangeCallback(v);
    this.change.emit(v);
    this.get();
  }
  
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
