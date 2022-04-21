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
exports.SelectCompanyComponent = exports.CompanyData = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var search_company_component_1 = require("../../modal/search-company/search-company.component");
var CompanyData = /** @class */ (function () {
    function CompanyData() {
    }
    return CompanyData;
}());
exports.CompanyData = CompanyData;
var SelectCompanyComponent = /** @class */ (function () {
    function SelectCompanyComponent(_modal, connect, user) {
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.all = false;
        this.label = "업체";
        this.required = false;
        this.multiple = false;
        this.readonly = false;
        this._project_id = 0;
        this.change = new core_1.EventEmitter();
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectCompanyComponent_1 = SelectCompanyComponent;
    /**
     * 선택된 현장의 하위 회사 목록을 검색하기 위한 select
     * @Input project_id
     * 만으로 검색
     * company_id는 왜 넣었는지?
     * 만약 '원청사 아래 협력사' 검색이 필요하다면 새로 하나 만들어야 함
     */
    SelectCompanyComponent.prototype.onClick = function () {
        if (!this.disabled) {
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
    Object.defineProperty(SelectCompanyComponent.prototype, "project_id", {
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
    SelectCompanyComponent.prototype.ngOnInit = function () { };
    SelectCompanyComponent.prototype.get = function () {
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
                            if (this.all) {
                                this.text = '전체';
                            }
                            else {
                                this.text = '';
                            }
                            return [2 /*return*/];
                        }
                        _b = this;
                        return [4 /*yield*/, this.connect.run('/category/certify/company/partner_master/get', {
                                project_id: this.project_id,
                                search_text: ''
                            })];
                    case 1:
                        _b.res = _c.sent();
                        if (this.res.rsCode === 0) {
                            rsMap = this.res.rsMap;
                            if (this.multiple) {
                                if (!this.value && user_type === 'LH') {
                                    this.value = [rsMap[0].company_id];
                                }
                                this.text = rsMap
                                    .filter(function (constractor) { return _this.value.indexOf(constractor.company_id); })
                                    .map(function (constractor) { return constractor.company_name; }).join();
                                // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
                                if (!this.text)
                                    this.value = [];
                            }
                            else {
                                if (!this.value && user_type === 'LH') {
                                    this.value = rsMap[0].company_id;
                                }
                                this.text = ((_a = rsMap.find(function (constractor) { return constractor.company_id === _this.value; })) === null || _a === void 0 ? void 0 : _a.company_name) || '';
                                // 현장에 소속되어 있는 업체 중 value와 같은 값이 없다면 리셋
                                if (!this.text)
                                    this.value = 0;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectCompanyComponent.prototype.openModal = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_company_component_1.SearchCompanyComponent,
                            componentProps: {
                                all: this.all,
                                value: this.value,
                                multiple: this.multiple,
                                form: {
                                    project_id: this.project_id,
                                    search_text: ''
                                }
                            }
                        })];
                    case 1:
                        modal = _b.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_b.sent()).data;
                        if (data) {
                            if (!this.multiple) {
                                this.value = ((_a = data.selectItem) === null || _a === void 0 ? void 0 : _a.company_id) || 0;
                            }
                            else {
                                alert('multiple is not allowed!');
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectCompanyComponent.prototype, "value", {
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
    SelectCompanyComponent.prototype.writeValue = function (v) {
        if (v !== this._value) {
            this.valueChange(v);
            this.get();
        }
    };
    SelectCompanyComponent.prototype.valueChange = function (v) {
        this._value = v ? v : this.multiple ? [] : 0;
        this.onChangeCallback(v);
        this.change.emit(v);
        this.get();
    };
    SelectCompanyComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectCompanyComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectCompanyComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectCompanyComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "all");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "required");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "text");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "multiple");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "project_id");
    __decorate([
        core_1.Output()
    ], SelectCompanyComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectCompanyComponent.prototype, "value");
    SelectCompanyComponent = SelectCompanyComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-company',
            templateUrl: './select-company.component.html',
            styleUrls: ['./select-company.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectCompanyComponent_1; }),
                    multi: true
                }]
        })
    ], SelectCompanyComponent);
    return SelectCompanyComponent;
}());
exports.SelectCompanyComponent = SelectCompanyComponent;
