import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
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

  @Input() company_id:number = 0;

  text:string = '';

  isModalData:boolean = false;
  
  res:ConnectResult<Education>;

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
    
    const res = await this.connect.run('/forSignUp/project/id/get', {});
    if(res.rsCode === 0) {
      // const { rsMap } = this.res;
      // this.text = rsMap
      // .filter(education => (this.value as number[]).indexOf(education.ctgo_education_safe_id))
      // .map(education => education.ctgo_education_safe_name).join();
    }
  }

  async education(){
    const modal = await this._modal.create({
      component:SearchEducationComponent,
      componentProps:{
        all: this.all
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      if(data.allState) {
        this.text = '전체';
        this.value = 0;
      } else {
        console.log(data);
        this.value = data.data.ctgo_education_safe_id;
        this.text = data.data.ctgo_education_safe_name;
        console.log(this.value);
        console.log("this.text",this.text);
      }
    }
  }

  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();


  private _value: number;
  @Input() set value(v: number) {
    if(v !== this._value) {
      this.valueChange(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:number): void { 
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