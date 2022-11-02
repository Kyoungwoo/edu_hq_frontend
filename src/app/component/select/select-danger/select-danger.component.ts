import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { Color } from '@ionic/core';
import { ApprovalAnswerType } from '../../confirm/approval/approval.component';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ModalController } from '@ionic/angular';
import { DangerSearchPage } from '../../../page/task-management/inspection/danger-search/danger-search.page'

@Component({
  selector: 'app-select-danger',
  templateUrl: './select-danger.component.html',
  styleUrls: ['./select-danger.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectDangerComponent),
    multi: true
  }]
})
export class SelectDangerComponent implements OnInit, ControlValueAccessor {
  
  @Input() color:Color;
  @Input() label:string = "위험지역유형";
  @Input() placeholder:string = "선택";

  constructor(
    private el: ElementRef<HTMLElement>,
    private promise: PromiseService,
    public languagePack: LanguagePackService,
    private _modal: ModalController,
  ) { }

  ngOnInit() {}

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:ApprovalAnswerType;
  @Input() set value(v:ApprovalAnswerType) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:ApprovalAnswerType): void {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  async danger() {
    const modal = await this._modal.create({
      component: DangerSearchPage,
      componentProps: {}
    });
    modal.present();
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
