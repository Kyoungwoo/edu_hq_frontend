import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

export interface occupation {
  company_id: number,
  ctgo_occupation_id: number;
  ctgo_occupation_name_kr: string;
  ctgo_job_position_name_en: string;
  ctgo_job_position_name_vi: string;
  ctgo_job_position_name_ch: string;
}

@Component({
  selector: 'app-select-occupation',
  templateUrl: './select-occupation.component.html',
  styleUrls: ['./select-occupation.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectOccupationComponent),
    multi: true
  }]
})
export class SelectOccupationComponent implements OnInit, ControlValueAccessor {

  @HostListener('click', ['$event']) onClick($event:MouseEvent) {
    $event.stopPropagation();
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }

  @Input() color:Color;
  @Input() label:string = "직종";
  @Input() placeholder:string = "선택";

  private _company_id:number;
  @Input() set company_id(v:number) {
    if(this._company_id !== v) {
      this._company_id = v;
      this.get();
    }
  }
  get company_id() { return this._company_id }

  res:ConnectResult<occupation>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
  ) { }

  ngOnInit() {}

  private async get() {
    if(!this.company_id) return;
    this.res = await this.connect.run('/category/occupation/get', {
      company_id: this.company_id
    });
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:string = "";
  @Input() set value(v:string) {
    if(v !== this._value) {
      this._value = v;
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
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
