"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.PartnerEditPage = exports.PartnerDetail = exports.CompanyContractData = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var CompanyContractData = /** @class */ (function () {
    function CompanyContractData() {
        this.ctgo_construction_id = 0; //계약공종
        this.ctgo_construction_name = '';
        this.contract_name = ''; //계약명
        this.contract_start_date = ''; //계약기간~
        this.contract_end_date = ''; //~계약기간
        this.contract_amount = ''; //계약금액
        this.manager_user_id = 0; //협력사소장
        this.manager_user_name = '';
        this.master_company_id = 0; //원청사ID
        this.master_company_name = '';
        this.project_id = 0; //현장ID
        this.project_name = ''; //현장 이름
    }
    return CompanyContractData;
}());
exports.CompanyContractData = CompanyContractData;
var PartnerDetail = /** @class */ (function () {
    function PartnerDetail() {
        this.company_contract_data = [];
    }
    return PartnerDetail;
}());
exports.PartnerDetail = PartnerDetail;
var PartnerEditPage = /** @class */ (function () {
    function PartnerEditPage(el, connect, alert, date, toast, user, _modal, regex, promise) {
        this.el = el;
        this.connect = connect;
        this.alert = alert;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this._modal = _modal;
        this.regex = regex;
        this.promise = promise;
        this.type = false;
        this.permission = {
            edit: false,
            agree: false
        };
        this.viewMode = false;
        this.isNew = false;
        this.form = new PartnerDetail();
        this.selectList = [];
    }
    PartnerEditPage.prototype.ngOnInit = function () {
        this.getPermission();
        if (this.company_id) {
            this.viewMode = true;
            this.isNew = false;
            this.getItem();
        }
        else {
            this.viewMode = false;
            this.isNew = true;
        }
        this.test();
        this.getTerms();
    };
    PartnerEditPage.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testIndex, el, alertButtons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.core.test)
                            return [2 /*return*/];
                        if (!environment_1.environment.test.Project.test)
                            return [2 /*return*/];
                        if (environment_1.environment.test.Project.done)
                            return [2 /*return*/];
                        testIndex = environment_1.environment.test.Project.type.indexOf('PARTNER');
                        if (!(testIndex > -1)) return [3 /*break*/, 12];
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        if (!this.permission.edit) return [3 /*break*/, 11];
                        if (!this.isNew) return [3 /*break*/, 2];
                        el.querySelector('[name=company_name]').dispatchEvent(new CustomEvent('setValue', { detail: "\uB370\uBE0C\uBAAC_" + this.regex.random.id(5) }));
                        el.querySelector('[name=business_register_no]').dispatchEvent(new CustomEvent('setValue', { detail: "" + this.regex.random.businessNo() }));
                        el.querySelector('[name=company_ceo]').dispatchEvent(new CustomEvent('setValue', { detail: "\uAE40\uC218\uD64D_" + this.regex.random.id(5) }));
                        return [3 /*break*/, 4];
                    case 2:
                        el.querySelector('[name=edit]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        el.querySelector('[name=company_phone]').dispatchEvent(new CustomEvent('setValue', { detail: "" + this.regex.random.phone() }));
                        // 계약정보 추가
                        el.querySelector('[name=add_contract]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 5:
                        _a.sent();
                        el.querySelector('[name=project_id]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait(2500)];
                    case 6:
                        _a.sent();
                        el.querySelector('[name=master_company_id]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait(1500)];
                    case 7:
                        _a.sent();
                        el.querySelector('[name=contract_name]').dispatchEvent(new CustomEvent('setValue', { detail: "\uACC4\uC57D_" + this.regex.random.id(5) }));
                        el.querySelector('[name=ctgo_construction_id]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait(1000)];
                    case 8:
                        _a.sent();
                        el.querySelector('[name=contract_amount]').dispatchEvent(new CustomEvent('setValue', { detail: '1000' }));
                        el.querySelector('[name=contract_start_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today() }));
                        el.querySelector('[name=contract_end_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today({ month: 1 }) }));
                        el.querySelector('[name=manager_user_id]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait(1500)];
                    case 9:
                        _a.sent();
                        el.querySelector('[name=manager_name]').dispatchEvent(new CustomEvent('setValue', { detail: "\uACE0\uD55C\uC194_" + this.regex.random.id(5) }));
                        el.querySelector('[name=manager_phone]').dispatchEvent(new CustomEvent('setValue', { detail: "\uACE0\uD55C\uC194_" + this.regex.random.id(5) }));
                        el.querySelector('[name=manager_email]').dispatchEvent(new CustomEvent('setValue', { detail: this.regex.random.id(5) + "@naver.com" }));
                        if (this.permission.agree)
                            el.querySelector('[name=consignee_consent_date]').dispatchEvent(new CustomEvent('click'));
                        el.querySelector('[name=submit]').dispatchEvent(new CustomEvent('click'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 10:
                        _a.sent();
                        alertButtons = document.querySelector('ion-alert').querySelectorAll('[type=button]');
                        alertButtons[1].dispatchEvent(new Event('click'));
                        return [3 /*break*/, 12];
                    case 11:
                        el.querySelector('[name=dismiss]').dispatchEvent(new CustomEvent('click'));
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    PartnerEditPage.prototype.getPermission = function () {
        var user_role = this.user.userData.user_role;
        if (user_role === 'LH_HEAD') {
            this.permission.edit = true;
            this.permission.agree = false;
        }
        else if (user_role === 'MASTER_HEAD') {
            this.permission.edit = true;
            this.permission.agree = true;
        }
        else {
            this.permission.edit = false;
            this.permission.agree = false;
        }
    };
    PartnerEditPage.prototype.getItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/project/company/partner/detail', {
                            company_id: this.company_id
                        }, {
                            loading: true
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = res.rsObj;
                            this.form.company_contract_data = res.rsMap;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PartnerEditPage.prototype.addCompanyContractData = function () {
        var _a = this.user.userData, user_role = _a.user_role, belong_data = _a.belong_data;
        if (user_role === 'LH_HEAD') {
            this.form.company_contract_data.push(__assign(__assign({}, new CompanyContractData()), { project_id: belong_data.project_id }));
        }
        else if (user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사') {
            this.form.company_contract_data.push(__assign(__assign({}, new CompanyContractData()), { project_id: belong_data.project_id, master_company_id: belong_data.company_id }));
        }
    };
    PartnerEditPage.prototype.removeCompanyContractData = function () {
        var _this = this;
        this.selectList.forEach(function (item) {
            var index = _this.form.company_contract_data.indexOf(item);
            _this.form.company_contract_data.splice(index, 1);
        });
        this.selectList = [];
    };
    PartnerEditPage.prototype.agreement = function () {
        this.form.consignee_consent_date = this.date.today({}, 'SECOND');
    };
    PartnerEditPage.prototype.contEdit = function () {
        this.viewMode = false;
    };
    PartnerEditPage.prototype.contSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.valid())
                            return [2 /*return*/];
                        return [4 /*yield*/, this.alert.present({
                                message: '저장하시겠습니까?',
                                buttons: [
                                    { text: '아니오' },
                                    {
                                        text: '예',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.connect.run('/project/company/partner/insert', this.form, {})];
                                                    case 1:
                                                        res = _a.sent();
                                                        if (res.rsCode === 0) {
                                                            this._modal.dismiss('Y');
                                                        }
                                                        else {
                                                            this.toast.present({ color: 'warning', message: res.rsMsg });
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PartnerEditPage.prototype.contDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.present({
                            message: '삭제 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.connect.run('/project/company/partner/delete', {
                                                        company_id: this.company_id,
                                                        project_id: this.project_id
                                                    })];
                                                case 1:
                                                    res = _a.sent();
                                                    if (res.rsCode === 0) {
                                                        this._modal.dismiss('Y');
                                                    }
                                                    else {
                                                        this.toast.present({ color: 'warning', message: res.rsMsg });
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PartnerEditPage.prototype.contUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.valid())
                    return [2 /*return*/];
                this.alert.present({
                    message: '수정 하시겠습니까?',
                    buttons: [
                        { text: '아니요' },
                        {
                            text: '예',
                            handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.connect.run('/project/company/partner/update', this.form)];
                                        case 1:
                                            res = _a.sent();
                                            if (res.rsCode === 0) {
                                                this._modal.dismiss('Y');
                                            }
                                            else {
                                                this.toast.present({ color: 'warning', message: res.rsMsg });
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        }
                    ]
                });
                return [2 /*return*/];
            });
        });
    };
    PartnerEditPage.prototype.valid = function () {
        if (this.permission.agree) {
            if (!this.form.consignee_consent_date) {
                this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.', color: 'warning' });
                return false;
            }
            ;
        }
        if (!this.form.company_name) {
            this.toast.present({ message: '업체명을 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        if (!this.form.business_register_no) {
            this.toast.present({ message: '사업자등록번호 10자리를 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        if (!this.form.company_ceo) {
            this.toast.present({ message: '대표명을 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        for (var i = 0; i < this.form.company_contract_data.length; i++) {
            var company_contract_data = this.form.company_contract_data[i];
            if (!company_contract_data.project_id) {
                this.toast.present({ message: '현장을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.master_company_id) {
                this.toast.present({ message: '원청사를 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.ctgo_construction_id) {
                this.toast.present({ message: '계약공종을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_name) {
                this.toast.present({ message: '계약명을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_start_date) {
                this.toast.present({ message: '계약기간을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_end_date) {
                this.toast.present({ message: '계약기간을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_amount) {
                this.toast.present({ message: '계약금액을 입력해주세요.', color: 'warning' });
                return false;
            }
            else if (!this.regex.number.test(company_contract_data.contract_amount)) {
                this.toast.present({ message: '계약금액은 숫자만 입력 가능합니다.', color: 'warning' });
                return false;
            }
            ;
            // if(!company_contract_data.manager_user_id) { this.toast.present({ message: '협력사 소장을 입력해주세요.',color:'warning'}); return false; };
        }
        return true;
    };
    PartnerEditPage.prototype.getTerms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/support/terms/get', { terms_title: '개인정보 처리방침' })];
                    case 1:
                        _a.termsRes = _b.sent();
                        //아무작동안함
                        if (this.termsRes.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], PartnerEditPage.prototype, "company_id");
    __decorate([
        core_1.Input()
    ], PartnerEditPage.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], PartnerEditPage.prototype, "type");
    PartnerEditPage = __decorate([
        core_1.Component({
            selector: 'app-partner-edit',
            templateUrl: './partner-edit.page.html',
            styleUrls: ['./partner-edit.page.scss']
        })
    ], PartnerEditPage);
    return PartnerEditPage;
}());
exports.PartnerEditPage = PartnerEditPage;
