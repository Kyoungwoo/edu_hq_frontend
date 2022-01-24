import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

export interface Country {
  ctgo_country_id: number,
  ctgo_country_name: string
}

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectCountryComponent),
    multi: true
  }]
})
export class SelectCountryComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }
  
  @Input() color:Color;
  @Input() label:string = "국가";
  @Input() placeholder:string = "선택";
  
  res:ConnectResult<Country>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.get();
  }

  private async get() {
    this.res = await this.connect.run('/category/country/get');
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
