import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { Subscription } from 'rxjs';
import { SelectMultiplePopoverComponent } from '../select-multiple-popover/select-multiple-popover.component';
import { SelectOptionComponent } from '../select-option/select-option.component';
import { SelectPopoverComponent, SELECT_OPTION } from '../select-popover/select-popover.component';
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
  @HostListener('click', ["$event"]) onClick = (event) => {
    if(this.disabled) return;
    const opts:SELECT_OPTION[] = [];
    this.options.toArray()
    .map(opt => {
      opts.push({
        value: opt.value,
        text: opt.text.nativeElement.innerText.trim(),
        unique: opt.unique
      });
    });
    this.popoverOptions(opts, {target: this.el.nativeElement});
  }

  @ContentChildren(SelectOptionComponent) options:QueryList<SelectOptionComponent>;
  optionsSubs:Subscription;

  @Input() label:string;
  @Input() placeholder = '선택';
  @Input() 'option-width';
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() multiple:boolean = false;
  @Output() change = new EventEmitter();

  text:string = '';

  constructor(
    private el: ElementRef,
    private popover: PopoverController
  ) {
    
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.optionsSubs = this.options.changes.subscribe(() => {
        this.getText();
      });
      this.getText();
    }, 0);
  }
  ngOnDestroy() {
    this.optionsSubs.unsubscribe();
  }
  getText() {
    if(!this.options) return;

    if(!this.multiple) {
      const selectedOpt = this.options.toArray().find(v => {
        if(typeof v.value === 'object') return JSON.stringify(v.value) === JSON.stringify(this.value);
        else return v.value === this.value;
      });
      if(selectedOpt) this.text = selectedOpt.text.nativeElement.innerText;
      else this.text = '';
    } else {
      const texts = [];
      this.options.toArray().map(opt => {
        if(this.value.find(v => {
          if(typeof v === "object") {
            return JSON.stringify(v) === JSON.stringify(opt.value);
          }
          else return v === opt.value;
        })) texts.push(opt.text.nativeElement.innerText);
      });
      this.text = texts.join(',');
    }
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
        value: this.value,
        multiple: this.multiple
      },
      event,
      showBackdrop: false
    })
    /* const { width, top, height } = this.el.nativeElement.getBoundingClientRect();
    popover.style.setProperty('--width', '100%');
    popover.style.setProperty('--top', top + height + 'px');
    if(this.optionWidth) {
      popover.style.setProperty('--max-width', this.optionWidth + 'px');
    } else {
      popover.style.setProperty('--max-width', (width > 160 ? width : 160) + 'px');
    }
    if(top + 40 + 300 > window.innerHeight) {
      popover.style.setProperty('--top', 'auto');
      const content = popover.querySelector('.popover-content');
      content['style'].setProperty('top', 'auto');
      content['style'].setProperty('bottom', (window.innerHeight - top) + 'px');
    } */
    await popover.present();

    /* if(top + 40 + 300 > window.innerHeight) {
      popover.style.setProperty('--top', 'auto');
      const content = popover.querySelector('.popover-content');
      content['style'].setProperty('top', 'auto');
      content['style'].setProperty('bottom', (window.innerHeight - top) + 'px');
    } */
    const { data } = await popover.onWillDismiss();
    if(data) {
      if(this.multiple) {
        const values = [];
        const texts = [];
        data.map(item => {
          values.push(item.value);
          texts.push(item.text);
        });
        this.value = values;
        this.text = texts.join(',');
      } else {
        this.value = data.value;
        this.text = data.text;
      }
      this.change.emit(this.value);
    }
  }

  //default setting
  private _value:any = null;
  @Input() 
  set value(v) {
    if(v !== this._value) {
      this._value = v;
      this.getText();
    }
  }
  get value() { return this._value; }

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