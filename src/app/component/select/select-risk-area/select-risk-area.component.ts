import { SearchAreaComponent } from './../../modal/search-area/search-area.component';
import { UserService } from './../../../basic/service/core/user.service';
import { ConnectService } from './../../../basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef, HostListener, Input, EventEmitter, Output } from '@angular/core';

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

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }

  @Input() color:Color;
  @Input() label:string = "장소";
  @Input() selectType:'manual' | 'auto' = 'auto';
  @Input() item:any;
  @Input() form:any;
  @Input() disabled: boolean = false;

  isModalData:boolean = false;
  constructor(
    private _modal:ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.form.project_id);
    }, 300);
  }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component: SearchAreaComponent,
      componentProps: {
        project_id: this.form.project_id,
        selectType: this.selectType
        // form: {
        //   project_id: this.project_id,
        //   master_company_id: this.master_company_id,
        //   company_id: this.company_id,
        //   user_type: this.user_type,
        //   search_text: ''
        // }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      if(data.selectType == 'manual'){
        this.item = {
          ...this.item,
          ...data.areaSelectedItem
        };
      } else {
        this.item = {
          ...this.item,
          ...data.area1selectedItem,
          ...data.area2selectedItem,
          ...data.area3selectedItem
        }
      }
      this.item.area_full_name = this.item.area_top_name+' '+this.item.area_middle_name+' '+this.item.area_bottom_name;
    }
    this.isModalData = false;
  }

  //default setting
  //@Input() readonly:boolean = false;
  @Input() required:boolean = false;
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
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
