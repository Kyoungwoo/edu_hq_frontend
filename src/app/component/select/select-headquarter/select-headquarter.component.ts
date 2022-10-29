import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';


export class HeadQuarterItem {
  head_quarter_id: number;
  head_quarter_name: string;
}
@Component({
  selector: 'app-select-headquarter',
  templateUrl: './select-headquarter.component.html',
  styleUrls: ['./select-headquarter.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectHeadQuarterComponent),
    multi: true
  }]
})
export class SelectHeadQuarterComponent implements OnInit, ControlValueAccessor {
  @HostListener('click', ['$event']) onClick($event:MouseEvent) {
    $event.stopPropagation();
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }

  @Input() color:Color;
  @Input() label:string = "본부";
  @Input() placeholder:string = "선택";
  private _head_quarter_id:number;
  @Input() set head_quarter_id(v:number) {
    if (this._head_quarter_id !== v) {
      this._head_quarter_id = v;
      this.get();
    }
  }
  get head_quarter_id() { return this._head_quarter_id }

  res: ConnectResult<HeadQuarterItem>;
  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService
  ) { }

  ngOnInit() {

  }

  private async get() {
    if (!this.head_quarter_id) return;
    this.res = await this.connect.run('/category/headquarter/get', {
      head_quarter_id: this.head_quarter_id
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
