import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

export class RegionalItem {
  hq_regional_entire_state: 0|1; // 본사권한 = 1
  hq_regional_id: number; // id
  hq_regional_code: string; // 코드
  hq_regional_name: string; // 지역본부명
  hq_regional_use_state: 0|1; // 사용 = 1
}
export class BusinessItem {
  hq_business_entire_state: 0|1;
  hq_business_code: string;
  hq_business_id: number;
  hq_business_name: string;
  hq_regional_id: number;
}
export class DepartmentItem {
  hq_business_id: number;
  hq_department_code: string;
  hq_department_id: number;
  hq_department_name: string;
  hq_regional_id: number;
}
export class OrganizationValue {
  hq_regional_id:number = null; //지역본부 ID
  hq_regional_entire_state: 0|1 = null;
  hq_business_id:number = null; //사업본부 ID
  hq_business_entire_state: 0|1 = null;
  hq_department_id:number = null; //부서 ID
}
@Component({
  selector: 'app-select-organization',
  templateUrl: './select-organization.component.html',
  styleUrls: ['./select-organization.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectOrganizationComponent),
    multi: true
  }]
})
export class SelectOrganizationComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "조직기구";
  @Input() placeholder:string = "선택";

  res1:ConnectResult<RegionalItem>;
  res2:ConnectResult<BusinessItem>;
  res3:ConnectResult<DepartmentItem>;

  afterInit:boolean = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    await this.get1();
    setTimeout(() => {
      this.afterInit = true;
    }, 1000);

    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
  }

  private async get1() {
    this.res1 = await this.connect.run('/category/organization/regional/get');
  }
  private async get2() {
    this.res2 = await this.connect.run('/category/organization/business/get', {
      hq_regional_id: this.value.hq_regional_id
    });
  }
  private async get3() {
    this.res3 = await this.connect.run('/category/organization/department/get', {
      hq_regional_id: this.value.hq_regional_id,
      hq_business_id: this.value.hq_business_id
    });
  }
  public async change1() {
    if(!this.value.hq_regional_id) return;
    await this.promise.wait(() => this.res1);
    // 2,3 초기화
    if(this.afterInit) {
      this.res2 = null;
      this.res3 = null;
      this.value.hq_business_id = null;
      this.value.hq_business_entire_state = null;
      this.value.hq_department_id = null;
    }

    // 다음단계 선택할지 말지
    const selectedItem = this.res1.rsMap.find(item => item.hq_regional_id === this.value.hq_regional_id);
    if(selectedItem) {
      this.value.hq_regional_entire_state = selectedItem.hq_regional_entire_state;
      if(this.value.hq_regional_entire_state === 0) this.get2();
    } else {
      this.value = new OrganizationValue();
    }
  }
  public async change2() {
    console.log("hq_regional_id = " + this.value.hq_regional_id);
    console.log("hq_business_id = " + this.value.hq_business_id);
    
    if(!this.value.hq_regional_id || !this.value.hq_business_id) return;
    await this.promise.wait(() => this.res2);
    // 3 초기화
    if(this.afterInit) {
      this.res3 = null;
      this.value.hq_department_id = null;
    }

    // 다음단계 선택할지 말지
    const selectedItem = this.res2.rsMap.find(item => item.hq_business_id === this.value.hq_business_id);
    console.log("selectedItem = " + selectedItem);

    if(selectedItem) {
      this.value.hq_business_entire_state = selectedItem.hq_business_entire_state;
      console.log("hq_business_entire_state = " + selectedItem.hq_business_entire_state);
      this.get3();
      //if(this.value.hq_business_entire_state === 0)  this.get3();
    } else {
      this.value = new OrganizationValue();
    }
  }

  getColor() {
    return this.res1?.rsCode || this.res2?.rsCode || this.res3?.rsCode ? 'warning' : this.color;
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:OrganizationValue = new OrganizationValue();
  @Input() set value(v:OrganizationValue) {
    if(v) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:OrganizationValue): void { 
    if(v) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
