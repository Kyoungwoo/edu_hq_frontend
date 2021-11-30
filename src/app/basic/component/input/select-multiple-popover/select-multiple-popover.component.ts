import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SelectOption } from '../select-popover/select-popover.component';

@Component({
  selector: 'app-select-multiple-popover',
  templateUrl: './select-multiple-popover.component.html',
  styleUrls: ['./select-multiple-popover.component.scss'],
})
export class SelectMultiplePopoverComponent implements OnInit {

  @ViewChild("virtualScroll") virtualScroll:CdkVirtualScrollViewport;

  @Input() opts:SelectOption[] = [];
  @Input() value:any[] = [];
  itemSize:number = 42;

  initInterval;

  constructor(
    private _popover: PopoverController
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScroll, this.opts, this.value);
  }

  onClick(item:SelectOption) {
    const valueIndex = this.value.findIndex(_value => {
      try {
        return JSON.stringify(_value) === JSON.stringify(item.value)
      } catch(e) {
        return _value === item.value;
      }
    });
    if(valueIndex > -1) {
      this.value.splice(valueIndex);
    } else {
      this.value.push(item.value);
    }
    // this._popover.dismiss(item);
  }

  isSelected(item:SelectOption) {
    return this.value.some(_value => {
      try {
        return JSON.stringify(_value) === JSON.stringify(item.value)
      } catch(e) {
        return _value === item.value;
      }
    })
  }

  private scrollToIndex(virtualScroll:CdkVirtualScrollViewport, list:Array<{value:string}>, value) {
    const selectedIndex = list.findIndex(hour => hour.value === value);
    const limitCount = 20;
    let tryCount = 0;
    const initInterval = setInterval(() => {
      virtualScroll.scrollToIndex(selectedIndex);
      tryCount++;
      if(tryCount >= limitCount) clearInterval(initInterval);
    }, 20);
    const $subsChangeIndex = virtualScroll.scrolledIndexChange.subscribe(index => {
      if(index === selectedIndex) {
        clearInterval(initInterval);
        $subsChangeIndex.unsubscribe();
      }
    });
  }
}
