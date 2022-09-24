import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-select-area-risk-type',
  templateUrl: './select-area-risk-type.component.html',
  styleUrls: ['./select-area-risk-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectAreaRiskTypeComponent),
      multi: true,
    },
  ],
})
export class SelectAreaRiskTypeComponent
  implements OnInit, ControlValueAccessor
{
  @Input() color: Color;
  @Input() protected label = '위험지역 타입';
  @Input() company_id: number = 0;

  resCtgoRisk: ConnectResult<{
    ctgo_area_risk_id: number,
    ctgo_area_risk_name: string
  }>

  constructor(
//    private _modal: ModalController,
//    private modal: ModalController,
//    private toast: ToastService,
    private connect: ConnectService,
//    private date: DateService,
//    public user: UserService,
//    private alert: AlertService
  ) {}


  ngOnInit() {
  }    

  //위험지역 유형 가져오기
  public async get() {
    this.resCtgoRisk = await this.connect.run('/category/risk/type/get', {}, {});
    if (this.resCtgoRisk.rsCode === 0) { };
  }


  //default setting
  //@Input() readonly:boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() change = new EventEmitter();

  private _value: number;
  @Input() set value(v: number) {
    if (v !== this._value) {
      this._value = v;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: number): void {
    if (v !== this._value) {
      this._value = v;
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
