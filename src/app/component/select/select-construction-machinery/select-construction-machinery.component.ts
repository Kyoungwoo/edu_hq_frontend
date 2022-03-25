import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { MachineryItem, SearchConstructionMachineryComponent } from '../../modal/search-construction-machinery/search-construction-machinery.component';

@Component({
  selector: 'app-select-construction-machinery',
  templateUrl: './select-construction-machinery.component.html',
  styleUrls: ['./select-construction-machinery.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectConstructionMachineryComponent),
    multi: true
  }]
})
export class SelectConstructionMachineryComponent implements OnInit, ControlValueAccessor {


  @HostListener('click') onClick() {
    if(!this.disabled) this.machinery();
  }

  @Input() color:Color;
  @Input() label:string = "건설기계";
  @Input() disabled: boolean = false;
  @Input() text: string;
  @Input() required: boolean = false;

  private _company_id:number;
  @Input() set company_id(v:number) {
    if(this._company_id !== v) {
      this._company_id = v;
      this.get();
    }
  }

  get company_id() { return this._company_id }
  isModalData: boolean = false;

  res:ConnectResult<MachineryItem>

  constructor(
    private _modal:ModalController,
    private connect: ConnectService
  ) { }

  ngOnInit() {}

  public async get() {
    if(this.isModalData) return;
    this.res = await this.connect.run('/category/certify/machinery/get', {
      company_id: this.company_id,
      search_text: ''
    });
    if (this.res.rsCode === 0) {
      const { rsMap } = this.res;
      this.text = rsMap.find(company => company.ctgo_machinery_id === this.value)?.ctgo_machinery_name || '';
    }
  }

  async machinery(){
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchConstructionMachineryComponent,
      componentProps: {
        value: this.value,
        form: {
          company_id: this.company_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log(data);
      this.text = data.selectedItem.ctgo_machinery_name;
      this.value = data.selectedItem.ctgo_machinery_id;
    }
    this.isModalData = false;
  }

  @Output() change = new EventEmitter();

  private _value:any;
  @Input() set value(v:number) {
    if(v !== this._value) {
      this._value = v;
      this.get();
      this.valueChange(v);
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.get();
    this.change.emit(v);
  }
  valueChange(v) {
    this._value = v ? v : 0;
    this.get();
    this.onChangeCallback(v);
    this.change.emit(v);
  }
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
