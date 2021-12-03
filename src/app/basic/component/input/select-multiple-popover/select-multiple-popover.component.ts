import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/file.service';
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
    private _popover: PopoverController,
    private file: FileService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.scrollToIndex(this.virtualScroll, this.opts, this.value);
  }

  public onClick(item:SelectOption) {
    if(item.type === 'all') {
      console.log(this.value, item.value);
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
