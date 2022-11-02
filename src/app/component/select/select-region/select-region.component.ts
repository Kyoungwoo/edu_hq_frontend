import {
  ChangeDetectorRef,
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
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';

export class RegionItem {
  hq_regional_name: string;
  hq_regional_entire_state: number;
  hq_regional_code: string;
  hq_regional_id: number;
}

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRegionComponent),
      multi: true,
    },
  ],
})
export class SelectRegionComponent implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    this.el.nativeElement
      .querySelector('[name=select]')
      .dispatchEvent(new Event('click'));
  }

  @Input() color: Color;
  @Input() label: string = '지역본부';
  @Input() placeholder: string = '선택';

  constructor(
    private el: ElementRef<HTMLElement>,
    private promise: PromiseService,
    public languagePack: LanguagePackService,
    private changeDetector: ChangeDetectorRef,
    private connect: ConnectService,
    private file: FileService
  ) {}

  res: ConnectResult<RegionItem>;

  ngOnInit() {
    this.get();
  }

  private async get() {
    this.res = await this.connect.run('/category/organization/regional/get');
    this.changeDetector.detectChanges();
  }

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
  @Input() all: boolean = false;
  @Output() change = new EventEmitter();
  @Output() changeGetName = new EventEmitter();
  private _value: number = 0;
  @Input() set value(v: number) {
    this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
    if (!this.res) return;
    const selectedItem: RegionItem[] = this.file
      .clone(this.res?.rsMap)
      .filter((item) => item.hq_regional_id === v);
    if (selectedItem.length > 0) {
      this.changeGetName.emit(selectedItem[0].hq_regional_name);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: number): void {
    this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
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
