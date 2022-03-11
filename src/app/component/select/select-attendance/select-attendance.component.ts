import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { Education, SearchAttendanceComponent } from '../../modal/search-attendance/search-attendance.component';

@Component({
  selector: 'app-select-attendance',
  templateUrl: './select-attendance.component.html',
  styleUrls: ['./select-attendance.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectAttendanceComponent),
    multi: true
  }]
})
export class SelectAttendanceComponent implements OnInit, ControlValueAccessor {

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

  @Input() allState:boolean = false;
  @Input() editable:boolean = false;
  @Input() multiple:boolean = false;
  @Input() color:Color;
  @Input() label:string = "출석 진행자";
  @Input() placeholder:string = "선택";
  @Input() text:string;
  @Input() required:boolean = false;
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() educationType:boolean = false;
  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this._value = this.multiple ? [] : 0;
      this.valueChange(this._value);
    }
  }

  loading:boolean = false;

  get project_id() { return this._project_id }

  res:ConnectResult<Education>

  constructor(
    private _modal: ModalController,
    private connect:ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  public async get() {
    const { user_type } = this.user.userData;
    if(!this.project_id || !this.value) {
      if(this.allState) this.text = '전체';
      else this.text = '';

      if(user_type !== 'LH') {
        this.loading = false;
        return;
      }
    }
    this.res = await this.connect.run('/category/education/manager/get', {
      project_id: this.project_id,
      user_type: '관리자',
      search_text: ''
    });
    if(this.res.rsCode === 0) {
      const { rsMap } = this.res;
      if(this.multiple) {
        console.log("this.value",rsMap);
        console.log("this.value",this.value);
        this.text = rsMap
        .filter(education => (this.value as number[]).indexOf(education.user_id) !== -1)
        .map(education => education.user_name).join();
        // for(let i = 0; i < rsMap.length; i++) if((this.value as number[]).indexOf(rsMap[i].user_id) != -1) aaaaaa.push(rsMap[i].user_id);
      } else {
        this.text = rsMap.find(education => education.user_id === this.value)?.user_name || '';
      }
    }
    this.loading = false;
  }

  public async openModal() {
    this.loading = true;
    const modal = await this._modal.create({
      component: SearchAttendanceComponent,
      componentProps: {
        allState: this.allState,
        project_id: this.project_id,
        multiple: this.multiple,
        editable: this.editable,
        educationType: this.educationType,
        value:this.value
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    console.log(this.multiple);
    if(data) {
      if(this.multiple) {
        const values:Education[] = data;
        this.value = values?.map(education => education.user_id);;
        this.text = values?.map(education => education.user_name).join();
      } else {
        const value:Education = data;
        this.value = value?.user_id || 0;
        this.text = value?.user_name;
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
    this.onChangeCallback(v);
    this.get();
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
