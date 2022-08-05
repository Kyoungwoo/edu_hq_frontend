import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { SearchHeavyComponent } from '../../modal/search-heavy/search-heavy.component';

@Component({
  selector: 'app-select-heavy',
  templateUrl: './select-heavy.component.html',
  styleUrls: ['./select-heavy.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectHeavyComponent),
    multi: true
  }]
})
export class SelectHeavyComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.heavy();
  }

  @Input() color: Color;
  @Input() label: string = "중장비";
  @Input() project_id:number;
  @Input() master_company_id: number;
  @Input() disabled: boolean = false;
  @Input() text:any;

  text_theme = '';

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {
    this.text_theme = (this.text.ctgo_machinery_name ? this.text.ctgo_machinery_name+' / ' : '') + (this.text.machinery_regist_no ? this.text.machinery_regist_no : '');
  }

  async heavy(){
    const modal = await this._modal.create({
      component:SearchHeavyComponent,
      componentProps:{
        form: {
          construction_id: 0,
          ctgo_machinery_id: 0,
          project_id:this.project_id,
          master_company_id:this.master_company_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log(data);
      const selectedItem = data.selectedItem;
      this.value = selectedItem.machinery_id;
      this.text.ctgo_machinery_name = selectedItem.ctgo_machinery_name;
      this.text.machinery_regist_no = selectedItem.machinery_regist_no;
      this.text.master_company_name = selectedItem.master_company_name;
      this.text.partner_company_name = selectedItem.partner_company_name;

      this.text_theme = this.text.ctgo_machinery_name + ' / ' + this.text.machinery_regist_no;
    }
  }

  @Output() change = new EventEmitter();

  private _value:string = "";
  @Input() set value(v:string) {
    this.valueChange(v);
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
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

