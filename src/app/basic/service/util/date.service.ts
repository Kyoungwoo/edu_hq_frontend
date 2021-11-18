import { Injectable } from '@angular/core';
import { RegexService } from './regex.service';

export interface DateStringOptions {
  day?:boolean | DayFormat,
  format?:DateStringFormat
}
export type DateStringFormat = '-' | '.' | '/' | 'Ko';
export type DayFormat = [string, string, string, string, string, string, string];

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
    private regex: RegexService
  ) { }

  /** 오늘날짜, 혹은 오늘날짜를 기준으로 하는 다른 날짜들을 구한다. */
  today(opts:{year?, month?, date?} = {year: 0, month: 0, date: 0}, type: 'DATE' | 'TIME' = 'DATE') {
    const resDate = new Date();
    if (opts.year) resDate.setFullYear(resDate.getFullYear() + opts.year);
    if (opts.month) resDate.setMonth(resDate.getMonth() + opts.month);
    if (opts.date) resDate.setDate(resDate.getDate() + opts.date);
    switch(type) {
        case 'DATE':
            return resDate.getFullYear() + '-' + this.regex.replace.fix(resDate.getMonth() + 1, 2) + '-' + this.regex.replace.fix(resDate.getDate(), 2);
        case 'TIME':
            return new Date().toISOString();
    }
  }
  /** Date 타입의 형태를 바꾼다. 요일 속성(day)를 활용하여 요일을 구할 수도 있다.. ex) 2021-01-01, 2021년 01월 01일 수요일 */
  string(date:Date | string, opts?:DateStringOptions) {
    date = typeof date === 'string' ? new Date(date) : date;
    let dayString = "";
    let formatList = [];
    switch(opts?.format) {
      case 'Ko':
        formatList = ['년 ', '월 ', '일'];
        break;
      default:
        formatList = [opts?.format, opts?.format, opts?.format];
        break;
    }
    if(opts?.day) {
      const dayList = opts?.day === true ? ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] : opts?.day;
      dayString = ' ' + dayList[new Date(date).getDay()];
    }
    return date.getFullYear() + formatList[0] + this.regex.replace.fix(date.getMonth() + 1, 2) + formatList[1] + this.regex.replace.fix(date.getDate(), 2) + formatList[2] + dayString;
  }
  /** 요일만 구한다. */
  day(date:Date | string, dayFormat:DayFormat) {
    date = typeof date === 'string' ? new Date(date) : date;
    var week = dayFormat || ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var dayOfWeek = week[new Date(date).getDay()];
    return dayOfWeek;
  }
  /** 날짜를 기준으로 나이를 구한다. 기준은 한국 나이이다. */
  age(date:Date | string) {
    date = typeof date === 'string' ? new Date(date) : date;
    return new Date().getFullYear() - date.getFullYear() + 1;
  }
  /** 두 날짜간의 차이를 구한다. 앞의 날짜가 크면 음수, 작으면 양수로 나온다. */
  dirrerence(date1:string, date2:string, type:'Year'|'Month'|'Date'|'Hour' ="Date") {
    const date_1 = new Date(date1);
    const date_2 = new Date(date2);
    const def_time = date_2.getTime() - date_1.getTime();
    const def_days = def_time / (1000 * 3600 * 24);
    const def_hours = def_time / (1000 * 3600);
    switch(type) {
        case 'Year':
            return Math.floor(def_days / 365);
        case 'Date':
            return def_days;
        case 'Hour':
            return def_hours;
    }
  }
}
