import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, PopoverController } from '@ionic/angular';


export interface SELECT_OPTION {
  value:any,
  text:string,
  unique:boolean
}
@Component({
  selector: 'app-select-popover',
  templateUrl: './select-popover.component.html',
  styleUrls: ['./select-popover.component.scss'],
})
export class SelectPopoverComponent implements OnInit, AfterViewInit {

  @ViewChild("virtualScroll") virtualScroll:CdkVirtualScrollViewport;

  @Input() opts:SELECT_OPTION[] = [];
  @Input() value:any;
  itemSize:number = 42;

  initInterval;

  constructor(
    private _popover: PopoverController
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    const selectedIndex = this.opts.findIndex(opt => opt.value === this.value);
    const limitCount = 20;
    let tryCount = 0;
    this.initInterval = setInterval(() => {
      this.virtualScroll.scrollToIndex(selectedIndex);
      tryCount++;
      if(tryCount >= limitCount) clearInterval(this.initInterval);
    }, 20);
    const $subsChangeIndex = this.virtualScroll.scrolledIndexChange.subscribe(index => {
      if(index === selectedIndex) {
        clearInterval(this.initInterval);
        $subsChangeIndex.unsubscribe();
      }
    });
  }

  onClick(item) {
    this.value = item.value;
    this._popover.dismiss(item);
  }
}