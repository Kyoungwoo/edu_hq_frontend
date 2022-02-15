import { Component, DoCheck, EventEmitter, forwardRef, HostBinding, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AvatarComponent),
    multi: true
  }]
})
export class AvatarComponent implements OnInit, DoCheck, ControlValueAccessor {

  @Input() view_type:string;
  @Input() file:(File | FileBlob)[] = [];
  @Input() file_json:FileJson = {
    insert: [],
    update: [],
    delete: []
  };
  @Input() src:string | SafeUrl = null;

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers
  ) { }

  ngOnInit() {
    this.differ = this.differs.find([]).create(null);
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.value);
    if(changes) {
      changes.forEachAddedItem((record) => {
        if(this.view_type === record.item.view_type) {
          this.changeAvatar(record.item);
        }
      })
    }
  }

  private changeAvatar(futItem:FutItem) {
    this.src = futItem.full_url;
  }


  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = true;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:FutItem[] = [];
  @Input() set value(v:FutItem[]) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:FutItem[]): void { 
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
