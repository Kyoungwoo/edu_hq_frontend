import { SearchAreaComponent } from './../../modal/search-area/search-area.component';
import { UserService } from './../../../basic/service/core/user.service';
import { ConnectResult, ConnectService } from './../../../basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef, HostListener, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { SearchDangerousAreaComponent } from '../../modal/search-dangerous-area/search-dangerous-area.component';

class SearchedAreaData {
  area_bottom_id: number;
  area_bottom_name: string;
  area_middle_id: number;
  area_middle_name: string;
  area_risk_id: number;
  area_risk_name: string;
  area_top_id: number;
  area_top_name: string;
  ctgo_area_risk_name: string;
}

@Component({
  selector: 'app-select-risk-area',
  templateUrl: './select-risk-area.component.html',
  styleUrls: ['./select-risk-area.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectRiskAreaComponent),
    multi: true
  }]
})
export class SelectRiskAreaComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick(e) {
    if (!this.disabled) {
      if (this.project_id) {
        this.handleClick();
      }
      else {
        this.res = new ConnectResult();
        this.res.rsCode = 1008;
        this.res.rsMsg = '위험지역을 선택해 주세요.';
      }
    }
  }

  @Input() label:string = "위험지역명";
  @Input() selectType:'manual' | 'auto' = 'auto';
  @Input() all: boolean = false;
  @Input() color: Color;
  @Input() required: boolean = false;
  @Input() text: string;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean;
  @Input() readonly: boolean = false;


  private _project_id: number = 0;

  @Input() set project_id(v: number) {
    if (this._project_id !== v) {
      this._project_id = v;
      this.value = null;
    }
  }
  get project_id() { return this._project_id }

  res: ConnectResult<SearchedAreaData>;

  isModalData:boolean = false;
  constructor(
    private _modal:ModalController,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  get() {
    if (this.value) {
      this.text = this._value.area_risk_name;
    }
    this.changeDetector.detectChanges();
  }

  public async handleClick() {
    const modal = await this._modal.create({
      component: SearchDangerousAreaComponent,
      componentProps: {
        project_id: this.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.text = data.area_risk_name;
      this.value = data.area_risk_name;      
      // console.log(data);
      // setTimeout(() => {
      //   this._modal.dismiss({ areaSelectedItem: data, selectType: 'manual' });
      // }, 300);
    }
  }


  //default setting
  //@Input() readonly:boolean = false;
  @Output() change = new EventEmitter();

  private _value: SearchedAreaData;
  @Input() set value(v: SearchedAreaData) {
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
  writeValue(v:number): void {
    this.valueChange(v);
  }

  valueChange(v) {
    if(v !== this._value) {
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
