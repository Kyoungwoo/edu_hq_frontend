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
exports.SelectContractorComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var search_contractor_component_1 = require("../../modal/search-contractor/search-contractor.component");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var SelectContractorComponent = /** @class */ (function () {
    function SelectContractorComponent(_modal, connect, user, file) {
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.file = file;
        this.label = "원청사";
        this.editable = false;
        this.allState = false;
        this.required = false;
        this.multiple = false;
        this.readonly = false;
        this.disabled = false;
        this._project_id = 0;
        this.change = new core_1.EventEmitter();
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectContractorComponent_1 = SelectContractorComponent;
    SelectContractorComponent.prototype.onClick = function () {
        if (!this.disabled && !this.readonly) {
            if (this.project_id) {
                this.openModal();
            }
            else {
                this.res = new connect_service_1.ConnectResult();
                this.res.rsCode = 1008;
                this.res.rsMsg = '현장을 선택해주세요.';
            }
        }
    };
    Object.defineProperty(SelectContractorComponent.prototype, "project_id", {
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
    SelectContractorComponent.prototype.ngOnInit = function () {
    };
    SelectContractorComponent.prototype.get = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user_type, _b, rsMap;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        user_type = this.user.userData.user_type;
                        if (!this.project_id || !this.value) {
                            if (this.multiple) {
                                this.value = [];
                            }
                            else {
                                this.value = 0;
                            }
                            if (this.allState) {
                                this.text = '전체';
                                return [2 /*return*/];
                            }
                            else {
                                this.text = '';
                                // LH의 경우, 검색해서 가장 위의 회사를 넣어주어야 한다. 때문에, LH가 아닌 경우만 리턴하고, LH의 경우 값을 받아와야 함.
                                if (user_type !== 'LH')
                                    return [2 /*return*/];
                            }
                        }
                        _b = this;
                        return [4 /*yield*/, this.connect.run('/category/certify/search_my_master_company/get', {
                                project_id: this.project_id,
                                company_contract_type: '원청사',
                                search_text: ''
                            })];
                    case 1:
                        _b.res = _c.sent();
                        if (this.res.rsCode === 0) {
                            rsMap = this.res.rsMap;
                            if (this.multiple) {
                                if (!this.value) {
                                    // 여기까지 올 때, value가 없을 수 있는 경우는 user_type이 LH인 경우밖에 없음.
                                    this.value = [rsMap[0].company_id];
                                }
                                this.text = rsMap
                                    .filter(function (constractor) { return _this.value.indexOf(constractor.company_id); })
                                    .map(function (constractor) { return constractor.company_name; }).join();
                                // 현장에 소속되어 있는 원청사 중 value와 같은 값이 없다면 리셋
                                if (!this.text)
                                    this.value = [];
                            }
                            else {
                                if (!this.value) {
                                    // 여기까지 올 때, value가 없을 수 있는 경우는 user_type이 LH인 경우밖에 없음.
                                    this.value = rsMap[0].company_id;
                                }
                                this.text = ((_a = rsMap.find(function (constractor) { return constractor.company_id === _this.value; })) === null || _a === void 0 ? void 0 : _a.company_name) || '';
                                // 현장에 소속되어 있는 원청사 중 value와 같은 값이 없다면 리셋
                                if (!this.text)
                                    this.value = 0;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectContractorComponent.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, values, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_contractor_component_1.SearchContractorComponent,
                            componentProps: {
                                allState: this.allState,
                                project_id: this.project_id,
                                multiple: this.multiple,
                                editable: this.editable
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            if (this.multiple) {
                                values = data.values;
                                this.value = values === null || values === void 0 ? void 0 : values.map(function (constractor) { return constractor.company_id; });
                            }
                            else {
                                value = data.values;
                                this.value = (value === null || value === void 0 ? void 0 : value.company_id) || 0;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectContractorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this.valueChange(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectContractorComponent.prototype.writeValue = function (v) {
        if (v !== this._value) {
            this.valueChange(v);
        }
    };
    SelectContractorComponent.prototype.valueChange = function (v) {
        this._value = v ? v : this.multiple ? [] : 0;
        this.onChangeCallback(v);
        this.change.emit(v);
        this.get();
    };
    SelectContractorComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectContractorComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectContractorComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectContractorComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "text");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "editable");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "allState");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "required");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "multiple");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "project_id");
    __decorate([
        core_1.Output()
    ], SelectContractorComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectContractorComponent.prototype, "value");
    SelectContractorComponent = SelectContractorComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-contractor',
            templateUrl: './select-contractor.component.html',
            styleUrls: ['./select-contractor.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectContractorComponent_1; }),
                    multi: true
                }]
        })
    ], SelectContractorComponent);
    return SelectContractorComponent;
}());
exports.SelectContractorComponent = SelectContractorComponent;
