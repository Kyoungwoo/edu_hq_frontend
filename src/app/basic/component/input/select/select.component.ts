import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { Color, ComponentRef } from '@ionic/core';
import { Subscription } from 'rxjs';
import { FileService } from 'src/app/basic/service/core/file.service';
import { SelectMultiplePopoverComponent } from '../select-multiple-popover/select-multiple-popover.component';
import { SelectOption, SelectOptionComponent, SelectOptionType } from '../select-option/select-option.component';
import { SelectPopoverComponent } from '../select-popover/select-popover.component';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {

  @ContentChildren(SelectOptionComponent) options:QueryList<SelectOptionComponent>;

  @Input() color:Color;
  @Input() label:string;
  @Input() placeholder = '선택';
  @Input() multiple:boolean = false;

  public type:SelectOptionType = 'default';
  public text:string = '';

  $options:Subscription;

  constructor(
    private el: ElementRef,
    private popover: PopoverController,
    private file: FileService
  ) {
    
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.$options = this.options.changes.subscribe(() => {
      this.getText();
    });
  }
  ngOnDestroy() {
    this.$options.unsubscribe();
  }
  async getText() {
    if(!this.options) return;

    const optionList = this.options.toArray();
    if(!this.multiple) {
      const selectedOpt = optionList.find(opt => this.file.shallowEqual(opt.value, this.value));
      const canEdit = optionList.find(opt => opt.type === 'edit');
      if(selectedOpt) {
        this.text = selectedOpt.text;
      } else if(canEdit && this.value) {
        this.type = 'edit';
      } else {
        this.text = '';
      }
    } else {
      const selectedOpt = optionList.filter(opt => {
        if(opt.type === 'all') return this.file.shallowEqual(opt.value, this.value);
        return this.value?.some(_value => this.file.shallowEqual(opt.value, _value));
      });
      this.text = selectedOpt.map(opt => opt.text).join();
    }
    await new Promise(res => setTimeout(res, 0));
    this.onChangeCallback(this.value);
    await new Promise(res => setTimeout(res, 0));
    this.change.emit(this.value);
  }

  popoverSelect() {
    const opts:SelectOption[] = this.options.toArray();
    this.popoverOptions(opts, {target: this.el.nativeElement});
  }
  async popoverOptions(opts, event) {
    let component:ComponentRef;
    if(this.multiple) {
      component = SelectMultiplePopoverComponent;
    } else {
      component = SelectPopoverComponent;
    }

    const popover = await this.popover.create({
      cssClass: 'select-popover',
      component,
      componentProps: {
        opts,
        value: this.file.clone(this.value)
      },
      event,
      showBackdrop: false
    })
    await popover.present();
    const { data } = await popover.onWillDismiss();
    if(data) {
      this.type = data.type;
      if(data.type === 'edit') {
        this.value = '';
      } else {
        this.value = data.value;
      }
    }
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:any = null;
  @Input() set value(v) {
    if(v !== this._value) {
      this._value = v;
      this.getText();
    }
  }
  get value() { return this._value }

  writeValue(v: any) {
    if(v !== this._value) {
      this._value = v;
      this.getText();
    }
  }
  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }
}