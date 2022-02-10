import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SelectOption } from '../select-option/select-option.component';

@Component({
  selector: 'app-select-multiple-popover',
  templateUrl: './select-multiple-popover.component.html',
  styleUrls: ['./select-multiple-popover.component.scss'],
})
export class SelectMultiplePopoverComponent implements OnInit {

  @ViewChild("virtualScroll") virtualScroll:CdkVirtualScrollViewport;

  @Input() opts:SelectOption[] = [];
  @Input() value:any[] = [];
  itemSize:number = 38;

  initInterval;

  constructor(
    private el: ElementRef<HTMLElement>,
    private _popover: PopoverController,
    private file: FileService,
    private promise: PromiseService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScroll, this.opts, this.value);
    if(environment.test) this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    const el = this.el.nativeElement;
    await this.promise.wait();

    // 가장 첫번째 놈과 두번째놈을 클릭해서 값을 가져온다.
    const options = el.querySelectorAll('[name=select_option]');
    options[0]?.dispatchEvent(new Event('click'));
    options[1]?.dispatchEvent(new Event('click'));
    await this.promise.wait();

    // 선택
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }

  public onClick(item:SelectOption) {
    if(item.type === 'all') {
      if(this.file.shallowEqual(this.value, item.value)) this.value = null;
      else this.value = this.file.clone(item.value);
    } else {
      if(!this.value) this.value = [];
      const valueIndex = this.value.findIndex(_value => this.file.shallowEqual(_value, item.value));
      if(valueIndex > -1) {
        this.value.splice(valueIndex, 1);
      } else {
        this.value.push(item.value);
      }
    }
  }
  public submit() {
    this._popover.dismiss({ value: this.value });
  }

  public isSelected(item:SelectOption) {
    if(!this.value) return false;
    else if(this.file.shallowEqual(this.value, item.value)) return true;
    else if(this.value.some(_value => this.file.shallowEqual(_value, item.value))) return true;
    else return false;
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
