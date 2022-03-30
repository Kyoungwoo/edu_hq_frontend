import { SearialItem } from './../../modal/search-serial-number/search-serial-number.component';
import { ConnectService } from './../../../basic/service/core/connect.service';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output, HostListener, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchSerialNumberComponent } from '../../modal/search-serial-number/search-serial-number.component';

@Component({
  selector: 'app-select-serial-number',
  templateUrl: './select-serial-number.component.html',
  styleUrls: ['./select-serial-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSerialNumberComponent),
    multi: true
  }]
})
export class SelectSerialNumberComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }

  @Input() color:Color;
  @Input() label:string = "시리얼No.";
  @Input() name:string = "";
  @Input() serial_type: '전체' | '개인' | '중장비' | '위험지역' = "전체";
  @Input() project_id:number = 0;
  @Input() master_company_id:number = 0;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Input() all:boolean = false; // 전체 현장 노출 여부

  text:string = '';

  isModalData:boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal:ModalController,
    private changeDetector: ChangeDetectorRef
  ) { }
  ngOnInit() {}
  public async get() {
    if(this.isModalData) return;
    
    if(!this.value && !this.all) return;
    
    if(this.value === 0 && this.all) {
      this.text = '전체';
      this.changeDetector.detectChanges();
      return;
    }

    if(!this.value) return;

    this.text = this.name;
    
    // const res = await this.connect.run('/forSignUp/project/id/get', {
    //   project_id: this.value
    // });
    // if(res.rsCode === 0) {
    //   this.text = res.rsObj.project_name;
    // }
  }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchSerialNumberComponent,
      componentProps: {
        // all: this.all,
        // value: this.value,
        form: {
          serial_type: this.serial_type,
          project_id: this.project_id,
          master_company_id: this.master_company_id,
          ctgo_machine_serial_id: 0,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      const allState = <Boolean>data.allState;
      const selectedItem = <SearialItem>data.selectedItem;
      // if(allState) {
      //   this.value = 0;
      //   this.text = '전체';
      // } else {
        this.value = selectedItem.serial_id;
        this.text = selectedItem.serial_no;
      // }
    }
    this.isModalData = false;
  }

  @Output() change = new EventEmitter();

  private _value:number;
  @Input() set value(v:number) {
    this.valueChange(v);
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
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
