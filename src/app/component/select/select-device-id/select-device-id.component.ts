import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchDangerousAreaComponent } from '../../modal/search-dangerous-area/search-dangerous-area.component';
import { SearchDeviceIdComponent } from '../../modal/search-device-id/search-device-id.component';


export class DeviceData {
  comSiteId: number;
  deviceType: number;
  devTypeNm: string;
  deviceNum: string;
  deviceUser: string;
  suppier: string;
}

// export class DeviceData {
//   area_top_name:string = '';
//   area_middle_name:string = '';
//   area_bottom_name:string = '';
//   ctgo_area_risk_name:string = '';
//   area_risk_name:string = '';
//   area_risk_id:number = 0;
// }
@Component({
  selector: 'app-select-device-id',
  templateUrl: './select-device-id.component.html',
  styleUrls: ['./select-device-id.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectDeviceIdComponent),
    multi: true
  }]
})
export class SelectDeviceIdComponent implements OnInit, ControlValueAccessor {

  @HostListener('click', ['$event']) onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if(!this.disabled){ this.handleClick();}
  }
  
  @Input() color:Color;
  @Input() multiple = false;
  @Input() placeholder: string = '선택';
  @Input() text:string;
  @Input() disabled = false;

  private _project_id:number = 0;
  
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.value = null;
    }
  }
  get project_id() { return this._project_id }
  
  private _master_company_id:number = 0;

  @Input() set master_company_id(v: number) {
    if(this._master_company_id !== v) {
      this._master_company_id = v;
      this.value = null;
    }
  }
  // data:DeviceData = new DeviceData();

  constructor(
    private modal:ModalController,
    private changeDetector:ChangeDetectorRef
  ) { }

  ngOnInit() {}

  get() {
    if(this.value){
      this.text = this._value.deviceNum;
    }
    this.changeDetector.detectChanges();
  }

  async handleClick(){
    const modal = await this.modal.create({
      component:SearchDeviceIdComponent,
      componentProps: {
        project_id:this.project_id,
        master_company_id: this.master_company_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.text = data.deviceNum;
      this.value = data.deviceNum;
    }
  }

  @Output() change = new EventEmitter();

  private _value:DeviceData;
  @Input() set value(v:DeviceData) {
    if(v !== this._value) {
      this._value = v;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }

  writeValue(v:DeviceData): void { 
      this._value = v;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
