import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SelectOption } from '../select-option/select-option.component';



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
    private el: ElementRef<HTMLElement>,
    private _popover: PopoverController,
    private promise: PromiseService
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScroll, this.opts, this.value);
    if(environment.test) this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    await this.promise.wait();
    const el = this.el.nativeElement;

    // 가장 첫번째 놈을 클릭해서 값을 가져온다.
    el.querySelector('[name=select_option]').dispatchEvent(new Event('click'));
  }

  onClick(item) {
    this.value = item.value;
    this._popover.dismiss(item);
  }

  private scrollToIndex(virtualScroll:CdkVirtualScrollViewport, list:Array<{value:string}>, value) {
    const selectedIndex = list.findIndex(item => item.value === value);
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