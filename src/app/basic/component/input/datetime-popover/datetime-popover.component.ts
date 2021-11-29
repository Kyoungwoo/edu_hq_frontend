import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RegexService } from 'src/app/basic/service/util/regex.service';

@Component({
  selector: 'app-datetime-popover',
  templateUrl: './datetime-popover.component.html',
  styleUrls: ['./datetime-popover.component.scss'],
})
export class DatetimePopoverComponent implements OnInit, AfterViewInit {

  @ViewChild("virtualScrollHour") virtualScrollHour:CdkVirtualScrollViewport;
  @ViewChild("virtualScrollMinute") virtualScrollMinute:CdkVirtualScrollViewport;

  @Input() hour:string;
  @Input() minute:string;

  itemSize:number = 42;

  hourList:Array<{ value:string }> = [];
  minuteList:Array<{ value:string }> = [];

  hourClicked:boolean = false;
  miniuteClicked:boolean = false;

  constructor(
    private regex: RegexService,
    private _popover: PopoverController
  ) {
    this.hourList = new Array(24).fill(null).map((_, i) => {
      return { value: this.regex.replace.fix(i, 2) }
    });
    this.minuteList = new Array(6).fill(null).map((_, i) => {
      return { value: this.regex.replace.fix(i*10, 2) }
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScrollHour, this.hourList, this.hour);
    this.scrollToIndex(this.virtualScrollMinute, this.minuteList, this.minute);
  }
  hourClick(hour) {
    this.hour = hour.value;
    this.hourClicked = true;
    if(this.hourClicked && this.miniuteClicked) this._popover.dismiss({ hour: this.hour, minute: this.minute });
  }
  minuteClick(minute) {
    this.minute = minute.value;
    this.miniuteClicked = true;
    if(this.hourClicked && this.miniuteClicked) this._popover.dismiss({ hour: this.hour, minute: this.minute });
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
