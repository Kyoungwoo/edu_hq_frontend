import { AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, Input, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarComponent } from '../../input/calendar/calendar.component';
import { InputComponent } from '../../input/input/input.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.vertical) _class.push(`row-${this.vertical}`);
    return _class.join(' ');
  }

  @Input() horizontal:'top' | 'bottom' | 'center' | 'stretch';
  @Input() vertical:'top' | 'bottom' | 'center' | 'stretch';
  @Input() set padding(_padding:string | number) {
    this.el.nativeElement.style.setProperty('--app-padding', _padding);
  }

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {}
}
