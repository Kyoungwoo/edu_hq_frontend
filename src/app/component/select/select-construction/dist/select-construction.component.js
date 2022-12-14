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
exports.SelectConstructionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var SelectConstructionComponent = /** @class */ (function () {
    function SelectConstructionComponent(el, connect, promise) {
        this.el = el;
        this.connect = connect;
        this.promise = promise;
        this.all = false;
        this.label = "??????";
        this.placeholder = "??????";
        this.multiple = false;
        this._project_id = 0;
        this._master_company_id = 0;
        this.readonly = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this._value = 0;
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectConstructionComponent_1 = SelectConstructionComponent;
    SelectConstructionComponent.prototype.onClick = function () {
        this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
    };
    Object.defineProperty(SelectConstructionComponent.prototype, "project_id", {
        get: function () { return this._project_id; },
        set: function (v) {
            if (this._project_id !== v) {
                this._project_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectConstructionComponent.prototype, "master_company_id", {
        get: function () { return this._master_company_id; },
        set: function (v) {
            if (this._master_company_id !== v) {
                this._master_company_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectConstructionComponent.prototype.ngOnInit = function () {
    };
    SelectConstructionComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.project_id, this.master_company_id);
                        if (!this.project_id || !this.master_company_id) {
                            this.res = null;
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/construction/get', {
                                project_id: this.project_id,
                                master_company_id: this.master_company_id
                            })];
                    case 1:
                        _a.res = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectConstructionComponent.prototype.checkInputs = function () {
        if (!this.project_id) {
            this.res = new connect_service_1.ConnectResult();
            this.res.rsCode = 1008;
            this.res.rsMsg = '????????? ??????????????????.';
        }
        else if (!this.project_id) {
            this.res = new connect_service_1.ConnectResult();
            this.res.rsCode = 1008;
            this.res.rsMsg = '???????????? ??????????????????.';
        }
    };
    Object.defineProperty(SelectConstructionComponent.prototype, "classReadonly", {
        //default setting
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectConstructionComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectConstructionComponent.prototype, "value", {
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
    SelectConstructionComponent.prototype.writeValue = function (v) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        }
    };
    SelectConstructionComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectConstructionComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectConstructionComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectConstructionComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "all");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "placeholder");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "multiple");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "master_company_id");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], SelectConstructionComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], SelectConstructionComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], SelectConstructionComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectConstructionComponent.prototype, "value");
    SelectConstructionComponent = SelectConstructionComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-construction',
            templateUrl: './select-construction.component.html',
            styleUrls: ['./select-construction.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectConstructionComponent_1; }),
                    multi: true
                }]
        })
    ], SelectConstructionComponent);
    return SelectConstructionComponent;
}());
exports.SelectConstructionComponent = SelectConstructionComponent;
