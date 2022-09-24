import { Component, forwardRef, Input, OnInit } from '@angular/core';
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


  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }    

  //위험지역 유형 가져오기
  public async get() {
    this.resCtgoRisk = await this.connect.run('/category/risk/type/get', {}, {});
    if (this.resCtgoRisk.rsCode === 0) { };
  }

}
