import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

class ApprovalModule {
  ctgo_approval_module_id:number;
  ctgo_approval_module_name:string
}

@Component({
  selector: 'app-select-approval-module',
  templateUrl: './select-approval-module.component.html',
  styleUrls: ['./select-approval-module.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectApprovalModuleComponent),
    multi: true
  }]
})
export class SelectApprovalModuleComponent implements OnInit {
  @HostListener('click') onClick() {
    this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
  }
  
  @Input() color:Color;
  @Input() label:string = "전자결재 서식";
  @Input() placeholder:string = "선택";
  
  res:ConnectResult<ApprovalModule>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.get();
  }

  private async get() {
    this.res = await this.connect.run('/category/certify/approval_module/get');
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
