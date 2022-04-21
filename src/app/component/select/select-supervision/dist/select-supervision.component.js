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
exports.SelectSupervisionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var supervision_search_component_1 = require("../../modal/supervision-search/supervision-search.component");
var SelectSupervisionComponent = /** @class */ (function () {
    function SelectSupervisionComponent(_modal, connect) {
        this._modal = _modal;
        this.connect = connect;
        this.label = "감리사";
        this.disabled = false;
        this.required = false;
        this.isModalData = false;
        this.change = new core_1.EventEmitter();
        this._value = [];
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectSupervisionComponent_1 = SelectSupervisionComponent;
    SelectSupervisionComponent.prototype.onClick = function () {
        if (!this.disabled)
            this.openModal();
    };
    SelectSupervisionComponent.prototype.ngOnInit = function () {
    };
    SelectSupervisionComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, textArr, i, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isModalData || !this.value)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.connect.run('/category/certify/company/get', {
                                company_contract_type: '감리사',
                                search_text: ''
                            })];
                    case 1:
                        res = _a.sent();
                        textArr = [];
                        if (res.rsCode === 0) {
                            for (i = 0; i < res.rsMap.length; i++) {
                                for (x = 0; x < this.value.length; x++) {
                                    if (res.rsMap[i].company_id === this.value[x]) {
                                        textArr.push(res.rsMap[i].company_name);
                                    }
                                }
                            }
                            this.text = textArr.toString();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectSupervisionComponent.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, compnay_name_string_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isModalData = true;
                        return [4 /*yield*/, this._modal.create({
                                component: supervision_search_component_1.SupervisionSearchComponent,
                                componentProps: {
                                    value: this.value,
                                    form: {
                                        company_contract_type: this.label,
                                        search_text: ''
                                    }
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.value = [];
                            compnay_name_string_1 = [];
                            data.forEach(function (item) {
                                if (!_this.value.includes(item.company_id))
                                    _this.value.push(item.company_id);
                                compnay_name_string_1.push(item.company_name);
                            });
                            this.text = compnay_name_string_1.toString();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectSupervisionComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v || [];
                this.onChangeCallback(v);
                this.change.emit(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectSupervisionComponent.prototype.writeValue = function (v) {
        if (v !== this._value)
            this._value = v || [];
        this.get();
        this.onChangeCallback(v);
        this.change.emit(v);
    };
    SelectSupervisionComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectSupervisionComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectSupervisionComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectSupervisionComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "text");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], SelectSupervisionComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectSupervisionComponent.prototype, "value");
    SelectSupervisionComponent = SelectSupervisionComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-supervision',
            templateUrl: './select-supervision.component.html',
            styleUrls: ['./select-supervision.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectSupervisionComponent_1; }),
                    multi: true
                }]
        })
    ], SelectSupervisionComponent);
    return SelectSupervisionComponent;
}());
exports.SelectSupervisionComponent = SelectSupervisionComponent;
