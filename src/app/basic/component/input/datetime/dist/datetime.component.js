"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DatetimeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var datetime_popover_component_1 = require("../datetime-popover/datetime-popover.component");
var DatetimeComponent = /** @class */ (function () {
    function DatetimeComponent(el, popover, regex) {
        this.el = el;
        this.popover = popover;
        this.regex = regex;
        this.required = false;
        this.form = {
            hour: '',
            minute: ''
        };
        this.readonly = false;
        this.disabled = false;
        this.change = new core_1.EventEmitter();
        this.isFocus = false;
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    DatetimeComponent_1 = DatetimeComponent;
    DatetimeComponent.prototype.ngOnInit = function () { };
    DatetimeComponent.prototype.changeHour = function ($event) {
        if (this.form.hour.length < 2) {
            this.form.hour = this.regex.replace.fix(this.form.hour, 2, 0, 23);
        }
        else if (this.regex.number.test($event.key)) {
            this.form.hour = this.regex.replace.fix(this.form.hour + $event.key, 2, 0, 23);
        }
        else if ($event.key === 'Backspace') {
            this.form.hour = this.regex.replace.fix(this.form.hour.slice(0, -1), 2);
        }
        var v = this.getTimeFormat();
        this.onChangeCallback(v);
        this.change.emit(v);
    };
    DatetimeComponent.prototype.changeMinute = function ($event) {
        if (this.form.minute.length < 2) {
            this.form.minute = this.regex.replace.fix(this.form.minute, 2, 0, 59);
        }
        else if (this.regex.number.test($event.key)) {
            this.form.minute = this.regex.replace.fix(this.form.minute + $event.key, 2, 0, 59);
        }
        else if ($event.key === 'Backspace') {
            this.form.minute = this.regex.replace.fix(this.form.minute.slice(0, -1), 2);
        }
        var v = this.getTimeFormat();
        this.onChangeCallback(v);
        this.change.emit(v);
    };
    DatetimeComponent.prototype.popoverDateTimePicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var event, popover, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event = {
                            target: this.el.nativeElement
                        };
                        return [4 /*yield*/, this.popover.create({
                                component: datetime_popover_component_1.DatetimePopoverComponent,
                                componentProps: {
                                    hour: this.form.hour,
                                    minute: this.form.minute
                                },
                                event: event,
                                showBackdrop: false
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        this.fucus();
                        return [4 /*yield*/, popover.onWillDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        this.blur();
                        if (data) {
                            this.value = data.hour + ':' + data.minute;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DatetimeComponent.prototype.getTimeFormat = function () {
        return this.form.hour + ':' + this.form.minute;
    };
    DatetimeComponent.prototype.setTimeFormat = function (v) {
        try {
            var time = v.split(':');
            this.form.hour = time[0];
            this.form.minute = time[1];
        }
        catch (e) {
            this.form.hour = null;
            this.form.minute = null;
        }
    };
    Object.defineProperty(DatetimeComponent.prototype, "classFocus", {
        //default setting
        get: function () { return this.isFocus; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatetimeComponent.prototype, "classReadonly", {
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatetimeComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    DatetimeComponent.prototype.fucus = function () {
        this.isFocus = true;
    };
    DatetimeComponent.prototype.blur = function () {
        this.isFocus = false;
    };
    Object.defineProperty(DatetimeComponent.prototype, "value", {
        get: function () { return this.getTimeFormat(); },
        set: function (v) {
            if (v !== this.getTimeFormat()) {
                this.setTimeFormat(v);
                this.onChangeCallback(v);
                this.change.emit(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    DatetimeComponent.prototype.writeValue = function (v) {
        if (v !== this.getTimeFormat()) {
            this.setTimeFormat(v);
            this.onChangeCallback(v);
            this.change.emit(v);
        }
    };
    DatetimeComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    DatetimeComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var DatetimeComponent_1;
    __decorate([
        core_1.Input()
    ], DatetimeComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], DatetimeComponent.prototype, "required");
    __decorate([
        core_1.HostBinding('class.focus')
    ], DatetimeComponent.prototype, "classFocus");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], DatetimeComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], DatetimeComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], DatetimeComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], DatetimeComponent.prototype, "disabled");
    __decorate([
        core_1.Output()
    ], DatetimeComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], DatetimeComponent.prototype, "value");
    DatetimeComponent = DatetimeComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-datetime',
            templateUrl: './datetime.component.html',
            styleUrls: ['./datetime.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DatetimeComponent_1; }),
                    multi: true
                }]
        })
    ], DatetimeComponent);
    return DatetimeComponent;
}());
exports.DatetimeComponent = DatetimeComponent;
