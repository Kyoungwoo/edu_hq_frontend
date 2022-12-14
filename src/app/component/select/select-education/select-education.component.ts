import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { Education, SearchEducationComponent } from '../../modal/search-education/search-education.component';
import { SearchToolComponent } from '../../modal/search-tool/search-tool.component';

@Component({
  selector: 'app-select-education',
  templateUrl: './select-education.component.html',
  styleUrls: ['./select-education.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectEducationComponent),
    multi: true
  }]
})
export class SelectEducationComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.education();
  }
  
  @Input() all:boolean = false; // 전체 현장 노출 여부
  @Input() color:Color;
  @Input() label:string = "교육명";
  @Input() multiple:boolean = false;

  @Input() company_id:number = 0;

  text:string = '';
  
  res:ConnectResult<Education>;


  form = {
    search_text:''
  }

  constructor(
    private connect: ConnectService,
    private _modal:ModalController,
    private changeDetector: ChangeDetectorRef,
    private toast:ToastService
  ) { }

  ngOnInit() {}


  public async get() {
    if(!this.multiple) {
      if(!this.value && !this.all) return;
      if(this.value === 0 && this.all) {
        this.text = '전체';
        this.changeDetector.detectChanges();
        return;
      }
    }
    else {
      const value = <number[]>this.value;
      if(!value?.length && !this.all) return;
      if(value?.length === 0 && this.all) {
        this.text = '전체';
        this.changeDetector.detectChanges();
        return;
      }
    }

    if(!this.value) return;
    
    const res = await this.connect.run('/category/education/get', this.form);
      if(res.rsCode === 0) {
        if(!this.multiple) {
          this.text = res.rsMap.find(item => item.ctgo_education_safe_id === this.value)?.ctgo_education_safe_name;
        }
        else {
          this.text = res.rsMap
          .filter(item => (this.value as number[]).indexOf(item.ctgo_education_safe_id) > -1)
          .map(item => item.ctgo_education_safe_name).join();
        }
      } else {
        this.toast.present({message:res.rsMsg, color:'wanring'});
      }
  }

  async education(){
    const modal = await this._modal.create({
      component:SearchEducationComponent,
      componentProps:{
        all: this.all,
        multiple: this.multiple,
        value:this.value
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      if(!data.data) {
        this.value = null;
        this.text = '';
      }
      if(!this.multiple) {
        if(data.allState) {
          this.value = 0;
        } else {
          this.value = data?.data?.ctgo_education_safe_id;
        }
      }
      else {
        if(data.allState) {
          this.value = [];
        }
        else {
          this.value = data.data.map(item => item.ctgo_education_safe_id);
        }
      }
    }
  }

  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();


  private _value:number | number[];
  @Input() set value(v:number | number[]) {
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:number | number[]): void { 
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  valueChange(v) {
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