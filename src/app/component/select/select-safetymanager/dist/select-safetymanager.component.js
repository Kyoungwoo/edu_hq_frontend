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
exports.SelectSafetymanagerComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SelectSafetymanagerComponent = /** @class */ (function () {
    function SelectSafetymanagerComponent(el, connect, promise) {
        this.el = el;
        this.connect = connect;
        this.promise = promise;
        this.label = "????????????";
        this.placeholder = "??????";
        this.readonly = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this._value = "";
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectSafetymanagerComponent_1 = SelectSafetymanagerComponent;
    SelectSafetymanagerComponent.prototype.onClick = function () {
        this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
    };
    Object.defineProperty(SelectSafetymanagerComponent.prototype, "company_id", {
        get: function () { return this._company_id; },
        set: function (v) {
            if (this._company_id !== v) {
                this._company_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectSafetymanagerComponent.prototype, "user_type", {
        get: function () { return this._user_type; },
        set: function (v) {
            if (this._user_type !== v) {
                this._user_type = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectSafetymanagerComponent.prototype.ngOnInit = function () {
    };
    SelectSafetymanagerComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.company_id || !this.user_type)
                            return [2 /*return*/];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/safe_job/get', {
                                company_id: this.company_id,
                                user_type: this.user_type
                            })];
                    case 1:
                        _a.res = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectSafetymanagerComponent.prototype, "classReadonly", {
        //default setting
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectSafetymanagerComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectSafetymanagerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChangeCallback(v);
                this.change.emit(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectSafetymanagerComponent.prototype.writeValue = function (v) {
        if (v !== this._value)
            this._value = v;
        this.onChangeCallback(v);
        this.change.emit(v);
    };
    SelectSafetymanagerComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectSafetymanagerComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectSafetymanagerComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectSafetymanagerComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "placeholder");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "company_id");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "user_type");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], SelectSafetymanagerComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], SelectSafetymanagerComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], SelectSafetymanagerComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectSafetymanagerComponent.prototype, "value");
    SelectSafetymanagerComponent = SelectSafetymanagerComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-safetymanager',
            templateUrl: './select-safetymanager.component.html',
            styleUrls: ['./select-safetymanager.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectSafetymanagerComponent_1; }),
                    multi: true
                }]
        })
    ], SelectSafetymanagerComponent);
    return SelectSafetymanagerComponent;
}());
exports.SelectSafetymanagerComponent = SelectSafetymanagerComponent;
