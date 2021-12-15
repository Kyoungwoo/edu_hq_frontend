import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';


export type SelectOptionType = 'all' | 'normal';
export interface SelectOption {
  value:any,
  text:string,
  type:SelectOptionType
}
@Component({
  selector: 'app-select-popover',
  templateUrl: './select-popover.component.html',
  styleUrls: ['./select-popover.component.scss'],
})
export class SelectPopoverComponent implements OnInit, AfterViewInit {

  @ViewChild("virtualScroll") virtualScroll:CdkVirtualScrollViewport;

  @Input() opts:SelectOption[] = [];
  @Input() value:any;
  itemSize:number = 38;

  initInterval;

  constructor(
    private _popover: PopoverController
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScroll, this.opts, this.value);
  }

  onClick(item) {
    this.value = item.value;
    this._popover.dismiss(item);
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