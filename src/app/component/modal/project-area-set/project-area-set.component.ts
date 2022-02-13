import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NaverMapComponent } from 'src/app/basic/component/input/naver-map/naver-map.component';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-project-area-set',
  templateUrl: './project-area-set.component.html',
  styleUrls: ['./project-area-set.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NaverMapComponent),
    multi: true
  }]
})
export class ProjectAreaSetComponent implements OnInit {

  @Input() returnData
  @Input() gps_coordinate_data;
  initCheck:boolean
  mapData = [];
  constructor(
    private modal_:ModalController,
    private toast:ToastService
  ) { }

  ngOnInit() {
    this.mapData = this.gps_coordinate_data;
    console.log("this.mapData",this.gps_coordinate_data);
  }
  
  submint() {
    console.log("this.mapData",this.mapData);
    if(!this.initCheck){
      this.modal_.dismiss(this.mapData);
    }
    else if(this.mapData.length < 3) {
      return this.toast.present({message:'점을 3개 이상 설정해주세요.',color:'danger'});
    }
  }
  @Output() change = new EventEmitter();

  @Input() set _value(v:any[]) {
    if(v !== this._value) {
      this._value = v || []; 
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:any[]): void { 
    if(v !== this._value){
      this._value = v || [];
      console.log("this.value-------------------",this.value)
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
