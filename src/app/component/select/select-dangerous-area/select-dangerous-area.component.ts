import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchDangerousAreaComponent } from '../../modal/search-dangerous-area/search-dangerous-area.component';

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

  @Input() color:Color;
  @Input() multiple:boolean = false;
  @Input() label:string = "위험지역";

  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.value = this.multiple ? [] : 0;
    }
  }
  get project_id() { return this._project_id }

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  async dangerous(){
    console.log("this.projcet_id",this.project_id);
    const modal = await this._modal.create({
      component:SearchDangerousAreaComponent,
      componentProps: {
        project_id:this.project_id
      }
    });
    modal.present();
  }

  @Output() change = new EventEmitter();

  private _value:number[] | number;
  @Input() set value(v:number[] | number) {
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      // this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:[]): void { 
    if(v !== this._value) {
      this._value = v ? v : this.multiple ? [] : 0;
      // this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
