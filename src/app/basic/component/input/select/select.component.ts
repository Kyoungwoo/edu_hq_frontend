import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { Subscription } from 'rxjs';
import { SelectMultiplePopoverComponent } from '../select-multiple-popover/select-multiple-popover.component';
import { SelectOptionComponent } from '../select-option/select-option.component';
import { SelectOption, SelectPopoverComponent } from '../select-popover/select-popover.component';
const noop = () => {};

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
  @HostListener('click', ["$event"]) onClick = ($event) => {
    if(this.readonly || this.disabled) return;
    const opts:SelectOption[] = this.options.toArray();
    this.popoverOptions(opts, {target: this.el.nativeElement});
  }

  @ContentChildren(SelectOptionComponent) options:QueryList<SelectOptionComponent>;
  optionsSubs:Subscription;

  @Input() label:string;
  @Input() placeholder = '선택';
  @Input() multiple:boolean = false;

  text:string = '';

  constructor(
    private el: ElementRef,
    private popover: PopoverController
  ) {
    
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.optionsSubs = this.options.changes.subscribe(() => {
      this.getText();
    });
  }
  ngOnDestroy() {
    this.optionsSubs.unsubscribe();
  }
  getText() {
    if(!this.options) return;

    if(!this.multiple) {
      const selectedOpt = this.options.toArray().find(opt => {
        if(typeof opt.value === 'object') return JSON.stringify(opt.value) === JSON.stringify(this.value);
        else return opt.value === this.value;
      });
      if(selectedOpt) this.text = selectedOpt.text;
      else this.text = '';
    } else {
      const selectedOpt = this.options.toArray().filter(opt => {
        if(typeof opt.value === 'object') this.value?.some(_value => JSON.stringify(opt.value) === JSON.stringify(_value));
        else return this.value?.some(_value => _value === opt.value);
      });
      this.text = selectedOpt.map(opt => opt.text).join();
    }
    this.change.emit(this.value);
  }

  async popoverOptions(opts, event) {
    let component:ComponentRef;
    if(this.multiple) {
      component = SelectMultiplePopoverComponent;
    } else {
      component = SelectPopoverComponent;
    }
    console.log(this.value);
    const popover = await this.popover.create({
      cssClass: 'select-popover',
      component,
      componentProps: {
        opts,
        value: this.value
      },
      event,
      showBackdrop: false
    })
    await popover.present();
    const { data } = await popover.onWillDismiss();
    if(data) {
      this.value = data.value;
    }
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  private _value:any = null;
  @Input() 
  set value(v) {
    if(v !== this._value) {
      this._value = v;
      this.getText();
    }
  }
  get value() { return this._value || (this.multiple ? [] : null); }

  writeValue(v: any) {
    if(v !== this._value) {
      this._value = v;
      this.getText();
    }
  }
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }
}