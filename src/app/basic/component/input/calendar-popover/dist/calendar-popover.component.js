"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalendarPopoverComponent = void 0;
var core_1 = require("@angular/core");
var CalendarPopoverComponent = /** @class */ (function () {
    function CalendarPopoverComponent(_popover) {
        this._popover = _popover;
        this.timePicker = false;
        this.type = 'date';
        this.value = null;
        this._min = new Date(1900, 0, 1);
        this._max = new Date(2100, 11, 1);
        this.title = '';
        this.yearName = '년';
        this.monthName = '월';
        this.dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        this.AMPMNames = ['오전', '오후'];
        this.displayDate = this.value || new Date();
        this.displayYear = this.displayDate.getFullYear();
        this.displayMonth = this.displayDate.getDate();
        this.displayHours = this.fixHours(this.displayDate.getHours());
        this.displayMinutes = this.displayDate.getMinutes();
        this.displayAMPM = this.displayHours <= 12 ? 'AM' : 'PM';
        this.selectedDate = null;
        this.dates = [];
        this.dateNames = [];
        this.todayYear = new Date().getFullYear();
        this.monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
    Object.defineProperty(CalendarPopoverComponent.prototype, "min", {
        get: function () { return this._min; },
        set: function (v) {
            if (v === '0000-00-00')
                return;
            if (typeof v === 'string') {
                if (v.indexOf('-') > -1) {
                    var vs = v.split('-');
                    this._min = new Date(Number(vs[0]), Number(vs[1]) - 1, Number(vs[2]));
                }
                else
                    this._min = new Date(1900, 0, 1);
            }
            else
                this._min = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarPopoverComponent.prototype, "max", {
        get: function () { return this._max; },
        set: function (v) {
            if (v === '0000-00-00')
                return;
            if (typeof v === 'string') {
                if (v.indexOf('-') > -1) {
                    var vs = v.split('-');
                    this._max = new Date(Number(vs[0]), Number(vs[1]) - 1, Number(vs[2]));
                }
                else
                    this._max = new Date(2100, 11, 1);
            }
            else
                this._max = v;
        },
        enumerable: false,
        configurable: true
    });
    CalendarPopoverComponent.prototype.ngOnInit = function () {
        if (!this.value)
            this.value = new Date();
        else if (isNaN(this.value.getTime()))
            this.value = new Date();
        this.displayDate = new Date(this.value);
        this.selectedDate = this.value;
        this.setDisplay();
        this.getYearList();
    };
    CalendarPopoverComponent.prototype.dismiss = function () {
        this._popover.dismiss();
    };
    CalendarPopoverComponent.prototype.getYearList = function () {
        var yearCount = 200;
        var startYear = this.displayYear - (yearCount / 2);
        var yearList = [];
        for (var i = 0; i < yearCount; i++) {
            yearList.push(startYear + i);
        }
        this.yearList = yearList;
    };
    CalendarPopoverComponent.prototype.prevMonth = function () {
        var lastMonth = this.displayDate.getMonth() - 1;
        this.displayDate.setMonth(lastMonth);
        this.setDisplay();
    };
    CalendarPopoverComponent.prototype.nextMonth = function () {
        var nextMonth = this.displayDate.getMonth() + 1;
        this.displayDate.setMonth(nextMonth);
        this.setDisplay();
    };
    CalendarPopoverComponent.prototype.disableDate = function (index) {
        if (this.dates[index] < this.min || this.dates[index] > this.max) {
            return true;
        }
        else
            return false;
    };
    CalendarPopoverComponent.prototype.notDisplayMonthDate = function (index) {
        var datesMonth = this.dates[index].getMonth();
        return datesMonth !== this.displayMonth;
    };
    CalendarPopoverComponent.prototype.selectDate = function (index) {
        if (!this.disableDate(index)) {
            this.selectedDate = this.dates[index];
            var selectedMonth = this.selectedDate.getMonth();
            if (selectedMonth !== this.displayMonth) {
                this.displayDate.setMonth(selectedMonth);
                this.setDisplay();
            }
            if (!this.timePicker)
                this.submit();
        }
    };
    CalendarPopoverComponent.prototype.seletedDateFill = function (index) {
        if (this.selectedDate) {
            switch (this.type) {
                case 'date':
                    return this.selectedDate.getTime() === this.dates[index].getTime();
                case 'week':
                    var day = this.selectedDate.getDay();
                    return this.dates[index].getTime() >= this.selectedDate.getTime() - (86400000 * day)
                        && this.dates[index].getTime() <= this.selectedDate.getTime() + (86400000 * (6 - day));
            }
        }
        else {
            return false;
        }
    };
    CalendarPopoverComponent.prototype.setYear = function (value) {
        this.displayDate.setFullYear(value);
        this.setDisplay();
    };
    CalendarPopoverComponent.prototype.setMonth = function (value) {
        this.displayDate.setMonth(value);
        this.setDisplay();
    };
    CalendarPopoverComponent.prototype.setHours = function (hours) {
        this.displayHours = this.fixHours(hours);
    };
    CalendarPopoverComponent.prototype.setMinute = function (minutes) {
        this.displayMinutes = this.fixMinutes(minutes);
    };
    CalendarPopoverComponent.prototype.setAMPM = function () {
        this.displayAMPM === 'AM' ? this.displayAMPM = 'PM' : this.displayAMPM = 'AM';
    };
    CalendarPopoverComponent.prototype.setDisplay = function () {
        this.displayYear = this.displayDate.getFullYear();
        this.displayMonth = this.displayDate.getMonth();
        var dateLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((this.displayYear % 4 === 0 && this.displayYear % 100 !== 0) || this.displayYear % 400 === 0) {
            dateLength[1] = 29;
        }
        var calendarDateLength = 42;
        var firstDay = new Date(this.displayYear, this.displayMonth, 1).getDay();
        var roofDate = new Date(this.displayYear, this.displayMonth, 1 - firstDay);
        var dates = [];
        var dateNames = [];
        for (var i = 0; i < calendarDateLength; i++) {
            dates.push(new Date(roofDate.getTime()));
            var dateName = roofDate.getDate();
            dateNames.push(dateName);
            roofDate.setDate(dateName + 1);
        }
        this.dates = dates;
        this.dateNames = dateNames;
    };
    CalendarPopoverComponent.prototype.fixHours = function (hours) {
        return (Number(hours) + 24) % 12 || 12;
    };
    CalendarPopoverComponent.prototype.fixMinutes = function (minutes) {
        return (Number(minutes) + 60) % 60 || 0;
    };
    CalendarPopoverComponent.prototype.submit = function () {
        this.selectedDate.setHours(this.displayAMPM === 'PM' ? this.displayHours + 12 : this.displayHours);
        this.selectedDate.setMinutes(this.displayMinutes);
        this._popover.dismiss(this.selectedDate);
    };
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "timePicker");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "min");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "max");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "yearName");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "monthName");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "dayNames");
    __decorate([
        core_1.Input()
    ], CalendarPopoverComponent.prototype, "AMPMNames");
    CalendarPopoverComponent = __decorate([
        core_1.Component({
            selector: 'app-calendar-popover',
            templateUrl: './calendar-popover.component.html',
            styleUrls: ['./calendar-popover.component.scss']
        })
    ], CalendarPopoverComponent);
    return CalendarPopoverComponent;
}());
exports.CalendarPopoverComponent = CalendarPopoverComponent;
