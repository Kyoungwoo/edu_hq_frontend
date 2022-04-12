import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

export type CalendarDateNames = [string,string,string,string,string,string,string];
export interface CalendarOptions {
  value?:Date,
  min?:Date,
  max?:Date,
  title?:string,
  dayNames?:CalendarDateNames,
  AMPMNames?:[string,string],
  timePicker?: boolean
}
@Component({
  selector: 'app-calendar-popover',
  templateUrl: './calendar-popover.component.html',
  styleUrls: ['./calendar-popover.component.scss'],
})
export class CalendarPopoverComponent implements OnInit {

  @Input() timePicker:boolean = false;
  @Input() type:'date' | 'week' = 'date';

  @Input() value:Date | null = null;

  private _min:Date = new Date(1900, 0, 1);
  @Input() 
  set min(v:Date | string) {
    if(v === '0000-00-00') return;
    if(typeof v === 'string') {
      if(v.indexOf('-') > -1) {
        const vs = v.split('-');
        this._min = new Date(Number(vs[0]),Number(vs[1])-1,Number(vs[2]));
      } else this._min = new Date(1900, 0, 1);
    } else this._min = v;
  }
  get min() { return this._min; }

  private _max:Date = new Date(2100, 11, 1);
  @Input() 
  set max(v:Date | string) { 
    if(v === '0000-00-00') return;
    if(typeof v === 'string') {
      if(v.indexOf('-') > -1) {
        const vs = v.split('-');
        this._max = new Date(Number(vs[0]),Number(vs[1])-1,Number(vs[2]));
      } else this._max = new Date(2100, 11, 1);
    } else this._max = v;
  }
  get max() { return this._max; }

  @Input() title:string = '';
  @Input() yearName = '년';
  @Input() monthName = '월';
  @Input() dayNames:CalendarDateNames = ['일','월', '화', '수', '목', '금', '토'];
  @Input() AMPMNames: [string, string] = ['오전', '오후'];

  displayDate:Date = this.value || new Date();
  displayYear = this.displayDate.getFullYear();
  displayMonth = this.displayDate.getDate();
  displayHours = this.fixHours(this.displayDate.getHours());
  displayMinutes = this.displayDate.getMinutes();
  displayAMPM:'AM'|'PM' = this.displayHours <= 12 ? 'AM' : 'PM';
  selectedDate:Date = null;
  dates:Date[] = [];
  dateNames:number[] = [];
  todayYear = new Date().getFullYear();

  yearList:number[];
  monthList:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor(
    private _popover: PopoverController
  ) {}
  ngOnInit(){
    if(!this.value) this.value = new Date();
    else if(isNaN(this.value.getTime())) this.value = new Date();
    this.displayDate = new Date(this.value);
    this.selectedDate = this.value;
    this.setDisplay();
    this.getYearList();
  }
  dismiss() {
    this._popover.dismiss();
  }

  getYearList() {
    const yearCount = 200;
    const startYear = this.displayYear - (yearCount/2);
    let yearList = [];
    for(let i = 0; i < yearCount; i++) {
      yearList.push(startYear + i);
    }
    this.yearList = yearList;
  }

  prevMonth() {
    const lastMonth = this.displayDate.getMonth() - 1;
    this.displayDate.setMonth(lastMonth);
    this.setDisplay();
  }
  nextMonth() {
    const nextMonth = this.displayDate.getMonth() + 1;
    this.displayDate.setMonth(nextMonth);
    this.setDisplay();
  }
  
  disableDate(index) {
    console.log("this.dates[index]",this.dates[index],'   -----   ',this.min);
    if (this.dates[index] < this.min || this.dates[index] > this.max) {
      return true;
    } else return false;
  }

  notDisplayMonthDate(index) {
    const datesMonth = this.dates[index].getMonth();
    return datesMonth !== this.displayMonth;
  }
  selectDate(index) {
    if(!this.disableDate(index)) {
      this.selectedDate = this.dates[index];
      const selectedMonth = this.selectedDate.getMonth();
      if(selectedMonth !== this.displayMonth) {
        this.displayDate.setMonth(selectedMonth);
        this.setDisplay();
      }
      if(!this.timePicker) this.submit();
    }
  }
  seletedDateFill(index) {
    if(this.selectedDate) {
      switch(this.type) {
        case 'date':
          return this.selectedDate.getTime() === this.dates[index].getTime();
        case 'week':
          const day = this.selectedDate.getDay();
          return this.dates[index].getTime() >= this.selectedDate.getTime() - (86400000*day)
          && this.dates[index].getTime() <= this.selectedDate.getTime() + (86400000*(6-day));
      }
    } else {
      return false;
    }
  }
  setYear(value) {
    this.displayDate.setFullYear(value);
    this.setDisplay();
  }
  setMonth(value) {
    this.displayDate.setMonth(value);
    this.setDisplay();
  }
  setHours(hours) {
    this.displayHours = this.fixHours(hours);
  }
  setMinute(minutes) {
    this.displayMinutes = this.fixMinutes(minutes);
  }
  setAMPM() {
    this.displayAMPM === 'AM' ? this.displayAMPM = 'PM' : this.displayAMPM = 'AM';
  }
  setDisplay() {
    this.displayYear = this.displayDate.getFullYear();
    this.displayMonth = this.displayDate.getMonth();
    const dateLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    if((this.displayYear%4 === 0 && this.displayYear%100 !== 0) || this.displayYear%400 === 0) {
      dateLength[1] = 29;
    }
    
    const calendarDateLength = 42;
    const firstDay = new Date(this.displayYear, this.displayMonth, 1).getDay();
    const roofDate = new Date(this.displayYear, this.displayMonth, 1 - firstDay);

    const dates = [];
    let dateNames = [];
    for(let i = 0; i < calendarDateLength; i++) {
      dates.push(new Date(roofDate.getTime()));
      const dateName = roofDate.getDate();
      dateNames.push(dateName);

      roofDate.setDate(dateName + 1);
    }

    this.dates = dates;
    this.dateNames = dateNames;
  }
  
  fixHours(hours) {
    return (Number(hours)+24)%12 || 12;
  }
  fixMinutes(minutes) {
    return (Number(minutes)+60)%60 || 0;
  }
  submit() {
    this.selectedDate.setHours(this.displayAMPM === 'PM' ? this.displayHours + 12 : this.displayHours);
    this.selectedDate.setMinutes(this.displayMinutes);
    this._popover.dismiss(this.selectedDate);
  }

}
