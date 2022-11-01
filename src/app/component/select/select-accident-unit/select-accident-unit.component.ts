import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { Color } from '@ionic/core';
import { ApprovalAnswerType } from '../../confirm/approval/approval.component';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

@Component({
  selector: 'app-select-accident-unit',
  templateUrl: './select-accident-unit.component.html',
  styleUrls: ['./select-accident-unit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectAccidentUnitComponent),
      multi: true,
    },
  ],
})
export class SelectAccidentUnitComponent
  implements OnInit, ControlValueAccessor
{
  @HostListener('click') onClick() {
    this.el.nativeElement
      .querySelector('[name=select]')
      .dispatchEvent(new Event('click'));
  }

  @Input() color: Color;
  @Input() label: string = '사고유형';
  @Input() placeholder: string = '선택';

  constructor(
    private el: ElementRef<HTMLElement>,
    private promise: PromiseService,
    public languagePack: LanguagePackService
  ) {}

  ngOnInit() {}

  //default setting
  @HostBinding('class.readonly') get classReadonly() {
    return this.readonly;
  }
  @HostBinding('class.disabled') get classDisabled() {
    return this.disabled;
  }
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() multi: boolean = true;
  @Input() all: boolean = false;
  @Output() change = new EventEmitter();

  private _value: ApprovalAnswerType;
  @Input() set value(v: ApprovalAnswerType) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: ApprovalAnswerType): void {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
