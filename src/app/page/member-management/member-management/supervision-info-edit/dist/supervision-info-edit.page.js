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
exports.SupervisionInfoEditPage = exports.ApprovalItem = exports.BasicItem = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var file_service_1 = require("src/app/basic/service/core/file.service");
var change_phone_page_1 = require("src/app/page/my-page/change-phone/change-phone.page");
var security_password_component_1 = require("../../member-approval-wait/security-password/security-password.component");
//기본정보
var BasicItem = /** @class */ (function () {
    function BasicItem() {
        this.file = [];
        this.file_json = new file_service_1.FileJson();
        this.user_profile_file_data = [];
    }
    return BasicItem;
}());
exports.BasicItem = BasicItem;
//소속정보
var ApprovalItem = /** @class */ (function () {
    function ApprovalItem() {
    }
    return ApprovalItem;
}());
exports.ApprovalItem = ApprovalItem;
var SupervisionInfoEditPage = /** @class */ (function () {
    function SupervisionInfoEditPage(_modal_, connect, user, toast, alert, loading) {
        this._modal_ = _modal_;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.editable = false;
        this.form = {
            user_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: ''
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.validator = new connect_service_1.Validator(new BasicItem()).validator;
        this.menu = 1;
    }
    SupervisionInfoEditPage.prototype.ngOnInit = function () {
        this.form.user_id = this.item.user_id;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
        this.get();
    };
    //이메일
    SupervisionInfoEditPage.prototype.overlapEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_id, user_email, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.formBasic, user_id = _a.user_id, user_email = _a.user_email;
                        if (!user_email)
                            return [2 /*return*/, this.validator.user_email = null];
                        if (!user_id)
                            return [2 /*return*/, this.validator.user_id = null];
                        return [4 /*yield*/, this.connect.run('/usermanage/info/super/overlap/email', { user_email: user_email, user_id: user_id })];
                    case 1:
                        res = _b.sent();
                        this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
                        this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    // 휴대폰번호
    SupervisionInfoEditPage.prototype.overlapPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_id, user_phone, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.formBasic, user_id = _a.user_id, user_phone = _a.user_phone;
                        if (!user_id)
                            return [2 /*return*/, this.validator.user_id = null];
                        if (!user_phone)
                            return [2 /*return*/, this.validator.user_phone = null];
                        if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                            return [2 /*return*/, this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' }];
                        return [4 /*yield*/, this.connect.run('/usermanage/info/company/overlap/phone', { user_phone: user_phone, user_id: user_id })];
                    case 1:
                        res = _b.sent();
                        this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    SupervisionInfoEditPage.prototype.changePhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal_.create({
                            component: change_phone_page_1.ChangePhonePage,
                            cssClass: 'change-phone-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data === null || data === void 0 ? void 0 : data.update) {
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SupervisionInfoEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.getItem()];
                    case 2:
                        _a.sent(); //기본정보
                        return [4 /*yield*/, this.getBelong()];
                    case 3:
                        _a.sent(); //소속정보
                        return [4 /*yield*/, Promise.all([
                                this.getItem(),
                                this.getBelong(),
                            ])];
                    case 4:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    //기본정보
    SupervisionInfoEditPage.prototype.getItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/usermanage/info/super/basic/detail', this.form, {
                            parse: ['user_profile_file_data']
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.formBasic = __assign(__assign({}, this.formBasic), res.rsObj);
                        }
                        else if (res.rsCode === 3008) {
                            // 비밀번호 없거나 틀렸음
                            this.getPassword();
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //소속정보
    SupervisionInfoEditPage.prototype.getBelong = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/usermanage/info/super/belong/detail', this.form, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.formApproval = __assign(__assign({}, this.formApproval), res.rsObj);
                        }
                        else if (res.rsCode === 3008) {
                            // 비밀번호 없거나 틀렸음
                            this.getPassword();
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //비밀번호
    SupervisionInfoEditPage.prototype.getPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal_.create({
                            component: security_password_component_1.SecurityPasswordComponent,
                            backdropDismiss: false,
                            cssClass: "security-password-modal"
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.getItem();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 저장(수정)
    SupervisionInfoEditPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.form.session_company_id = this.user.userData.belong_data.company_id;
                this.form.user_manage_session = this.user.memberAuthToken;
                this.form.approval_user_id = this.form.user_id;
                this.alert.present({
                    message: '저장 하시겠습니까?',
                    buttons: [
                        { text: '아니요' },
                        {
                            text: '예',
                            handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.BasicSubmit()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.BelongSubmit()];
                                        case 2:
                                            _a.sent();
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
    //기본정보 수정
    SupervisionInfoEditPage.prototype.BasicSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/usermanage/info/super/basic/update', __assign(__assign({}, this.form), this.formBasic), {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //소속정보 수정
    SupervisionInfoEditPage.prototype.BelongSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/usermanage/info/super/belong/update', __assign(__assign({}, this.form), this.formApproval), {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this._modal_.dismiss('Y');
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], SupervisionInfoEditPage.prototype, "item");
    SupervisionInfoEditPage = __decorate([
        core_1.Component({
            selector: 'app-supervision-info-edit',
            templateUrl: './supervision-info-edit.page.html',
            styleUrls: ['./supervision-info-edit.page.scss']
        })
    ], SupervisionInfoEditPage);
    return SupervisionInfoEditPage;
}());
exports.SupervisionInfoEditPage = SupervisionInfoEditPage;
