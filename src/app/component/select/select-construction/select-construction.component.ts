import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

export interface Construction {
  ctgo_construction_id: number,
  ctgo_construction_name: string,
  project_id: number
}
@Component({
  selector: 'app-select-construction',
  templateUrl: './select-construction.component.html',
  styleUrls: ['./select-construction.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectConstructionComponent),
    multi: true
  }]
})
export class SelectConstructionComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }

  @Input() all:boolean = false;
  @Input() color:Color;
  @Input() label:string = "공종";
  @Input() placeholder:string = "선택";
  @Input() multiple:boolean = false;
  
  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.get();
    }
  }
  get project_id() { return this._project_id }


  @Input() 
  set master_company_id(v:number) {
    if(this._master_company_id !== v) {
      this._master_company_id = v;
      this.get();
    }
  }
  get master_company_id() { return this._master_company_id }
  private _master_company_id:number = 0;

  res:ConnectResult<Construction>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    
  }

  private async get() {
    if(!this.project_id || !this.master_company_id) {
      this.res = null;
      return;
    }
    this.res = await this.connect.run('/category/construction/get', {
      project_id: this.project_id,
      master_company_id: this.master_company_id
    });
  }
  checkInputs() {
    if(!this.project_id) {
      this.res = new ConnectResult();
      this.res.rsCode = 1008;
      this.res.rsMsg = '현장을 선택해주세요.';
    }
    else if(!this.project_id) {
      this.res = new ConnectResult();
      this.res.rsCode = 1008;
      this.res.rsMsg = '원청사를 선택해주세요.';
    }
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:any = 0;
  @Input() set value(v:any) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:any): void { 
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
