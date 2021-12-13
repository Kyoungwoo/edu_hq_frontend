import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { Subscription } from 'rxjs';
import { FileService } from 'src/app/basic/service/core/file.service';
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

  @Input() label:string;
  @Input() placeholder = '선택';
  @Input() multiple:boolean = false;

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
  getText() {
    if(!this.options) return;

    if(!this.multiple) {
      const selectedOpt = this.options.toArray().find(opt => this.file.shallowEqual(opt.value, this.value));
      this.text = selectedOpt?.text || '';
    } else {
      const selectedOpt = this.options.toArray().filter(opt => {
        if(opt.type === 'all') return this.file.shallowEqual(opt.value, this.value);
        return this.value?.some(_value => this.file.shallowEqual(opt.value, _value));
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
  get value() { return this._value }

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