import { AfterViewInit, Component, ContentChildren, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CheckComponent } from '../check/check.component';

@Component({
  selector: 'app-check-group',
  templateUrl: './check-group.component.html',
  styleUrls: ['./check-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckGroupComponent),
    multi: true
  }]
})
export class CheckGroupComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  @ContentChildren(CheckComponent, {descendants: true}) checkList:QueryList<CheckComponent>;
  private $checkList:Subscription;
  private $checkChangeList:Subscription[] = [];
  private checkChangeType:'all' | 'normal' | null = null;

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.$checkList = this.checkList.changes.subscribe(() => {
      this.checkListChange();
    });
    this.checkListChange();
  }
  ngOnDestroy() {
    this.$checkList.unsubscribe();
  }

  private checkListChange() {
    if(!this.checkList) return;
    this.$checkChangeList.forEach($checkChange => {
      $checkChange.unsubscribe();
    });
    this.$checkChangeList = [];

    const checkList = this.checkList.toArray();
    const checkAllList = checkList.filter(check => check.type === 'all');
    const checkNormalList = checkList.filter(check => check.type === 'normal');
    
    checkAllList.forEach(checkAll => {
      const $checkChange = checkAll.change.subscribe(v => {
        if(this.checkChangeType === 'normal') return;
        this.checkChangeType = 'all';
        if(v === checkAll.on) {
          checkNormalList.forEach(check => {
            if(!this.value.includes(check.on)) {
              check._value = true;
              this.value.push(check.on);
            }
          });
        } 
        else {
          checkNormalList.forEach(check => check._value = false);
          this.value.splice(0, this.value.length);
        }
        this.change.emit(this.value);
        setTimeout(() => {
          this.checkChangeType = null;
        }, 30);
      });
      this.$checkChangeList.push($checkChange);
    });
    checkNormalList.forEach(check => {
      const $checkChange = check.change.subscribe(v => {
        if(this.checkChangeType === 'all') return;
        this.checkChangeType = 'normal';
        if(v === check.on) {
          this.value.push(check.on);
          
          if(!checkNormalList.some(_check => !_check._value)) checkAllList.forEach(checkAll => checkAll._value = true);
        } 
        else {
          const index = this.value.indexOf(check.on);
          this.value.splice(index, 1);

          checkAllList.forEach(checkAll => checkAll._value = false);
        }
        this.change.emit(this.value);
        setTimeout(() => {
          this.checkChangeType = null;
        }, 30);
      });
      this.$checkChangeList.push($checkChange);
    });
  }

  //default setting
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Output() change = new EventEmitter();

  public _value:any[] = [];
  @Input()
  set value(v:any[]) {
    if(v !== this._value) {
      this._value = v;
      this.change.emit(v);
    }
  }
  get value() { return this._value; }
  
  writeValue(v:any[]): void { 
    if(v !== this._value) this._value = v; 
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
