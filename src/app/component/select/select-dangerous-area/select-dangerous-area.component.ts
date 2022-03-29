import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchDangerousAreaComponent } from '../../modal/search-dangerous-area/search-dangerous-area.component';

export class AreaDate {
  area_top_name:string;
  area_middle_name:string;
  area_bottom_name:string;
  ctgo_area_risk_name:string;
  area_risk_name:string;
  area_risk_id:number;
}
@Component({
  selector: 'app-select-dangerous-area',
  templateUrl: './select-dangerous-area.component.html',
  styleUrls: ['./select-dangerous-area.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectDangerousAreaComponent),
    multi: true
  }]
})
export class SelectDangerousAreaComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.dangerous();
  }
  
  @Input() color:Color;
  @Input() multiple:boolean = false;
  @Input() label:string = "위험지역";
  @Input() text:string;
  @Input() disabled:boolean = false;


  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.value = this.multiple ? [] : 0;
    }
  }
  get project_id() { return this._project_id }

  data:AreaDate = new AreaDate();

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}

  get() {

  }

  async dangerous(){
    const modal = await this._modal.create({
      component:SearchDangerousAreaComponent,
      componentProps: {
        project_id:this.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.data = data;
      this.text = (data.area_top_name ? data.area_top_name: '')+ ' ' +
                  (data.area_middle_name ? data.area_middle_name : '') + ' ' +
                  (data.area_bottom_name ? data.area_bottom_name : '') + '/' +
                  (data.ctgo_area_risk_name ? data.ctgo_area_risk_name : '') +  '/'  +
                  (data.area_risk_name ? data.area_risk_name : '')
      this.value = data.area_risk_id;
      this.data = data;
      
    }
  }

  @Output() change = new EventEmitter();

  private _value:number[] | number;
  @Input() set value(v:number[] | number) {
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      this.get();
      this.onChangeCallback({v});
      console.log('========================Input',this.data);
      this.change.emit({
        v,
        data:this.data
      });
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:[]): void { 
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      this.get();
      this.onChangeCallback({v});
      console.log('========================writeValue',this.data);
      this.change.emit({
        v,
        data:this.data
      });
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
