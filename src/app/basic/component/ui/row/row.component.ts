import { AfterContentInit, Component, ContentChildren, HostBinding, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarComponent } from '../../input/calendar/calendar.component';
import { InputComponent } from '../../input/input/input.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(InputComponent, { descendants: true }) inputComponent:QueryList<InputComponent>;
  @ContentChildren(CalendarComponent, { descendants: true }) calendarInputComponent:QueryList<CalendarComponent>;

  @HostBinding('class.label-row') get classLabelRow() { return this._classLabelRow }

  private _classLabelRow:boolean = false;

  $inputComponentChangeSubscriber:Subscription;
  $calendarInputComponentChangeSubscriber:Subscription;

  constructor() { }

  ngOnInit() {}
  ngAfterContentInit() {
    this.$inputComponentChangeSubscriber = this.inputComponent.changes.subscribe($event => {
      this.checkInputComponent(this.inputComponent.toArray());
    });
    this.$calendarInputComponentChangeSubscriber = this.calendarInputComponent.changes.subscribe($event => {
      this.checkInputComponent(this.calendarInputComponent.toArray());
    });
    this.checkInputComponent([
      ...this.inputComponent.toArray(),
      ...this.calendarInputComponent.toArray()
    ]);
  }
  ngOnDestroy() {
    this.$inputComponentChangeSubscriber.unsubscribe();
  }
  checkInputComponent(inputComponentList:Array<InputComponent | CalendarComponent>) {
    if(inputComponentList.some(inputComponent => inputComponent.label)) {
      this._classLabelRow = true;
    } else {
      this._classLabelRow = false;
    }
  }
}
