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
exports.MyPagePage = exports.EducationRes = exports.EducationGetForm = exports.BelongForm = exports.BasicForm = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var file_service_1 = require("src/app/basic/service/core/file.service");
var change_password_page_1 = require("../change-password/change-password.page");
var change_phone_page_1 = require("../change-phone/change-phone.page");
/** ?????? ?????? class */
var BasicForm = /** @class */ (function () {
    function BasicForm() {
        this.account_id = null; // ?????????
        this.user_name = null; // ?????? ??????
        this.user_gender = null; // ?????? ??????
        this.user_email = null; // ?????? ?????????
        this.user_birth = null; // ?????? ????????????
        this.user_phone = null; // ?????? ?????????
        this.ctgo_country_id = null; // ?????? ?????????
        this.ctgo_country_name = null; // ?????? ??????
        this.user_profile_file_data = []; // ?????? ????????? ?????????
        this.file = []; // ??????
        this.file_json = new file_service_1.FileJson(); // ?????? JSON
        this.update_date = null;
    }
    return BasicForm;
}());
exports.BasicForm = BasicForm;
/** ?????? ?????? class */
var BelongForm = /** @class */ (function () {
    function BelongForm() {
        /** ?????? form */
        this.user_id = null;
        this.user_role = null;
        this.project_id = null;
        this.project_name = null;
        this.master_company_id = null;
        this.master_company_name = null;
        this.company_id = null;
        this.company_name = null;
        this.ctgo_job_position_id = null;
        this.ctgo_job_position_name = null;
        // ?????? ??????
        this.construction_start_date = null;
        this.construction_end_date = null;
        /** LH form */
        this.hq_regional_id = null;
        this.hq_regional_name = null;
        this.hq_regional_entire_state = null;
        this.hq_business_id = null;
        this.hq_business_name = null;
        this.hq_business_entire_state = null;
        this.hq_department_id = null;
        this.hq_department_name = null;
        // ?????? ??????
        this.contract_start_date = null;
        this.contract_end_date = null;
        /** ?????????, ?????????, ????????? form */
        this.ctgo_construction_id = null;
        this.ctgo_construction_name = null;
        /** ?????????, ?????????, ????????? form */
        this.safe_job_data = [];
        /** ????????? form */
        this.ctgo_occupation_id = null;
        this.ctgo_occupation_name = null;
        this.ctgo_occupation_role = null;
        this.user_certify_no = null; // ????????????
    }
    return BelongForm;
}());
exports.BelongForm = BelongForm;
/** ???????????? class */
var EducationGetForm = /** @class */ (function () {
    function EducationGetForm() {
        this.ctgo_education_safe_types = [];
        this.project_id = null;
        this.project_name = null;
        this.search_text = null;
    }
    return EducationGetForm;
}());
exports.EducationGetForm = EducationGetForm;
var EducationRes = /** @class */ (function () {
    function EducationRes() {
        this.create_date = null;
        this.ctgo_education_safe_id = null;
        this.ctgo_education_safe_name = null;
        this.ctgo_education_safe_text = null;
        this.ctgo_education_safe_title = null;
        this.ctgo_education_safe_type = null;
        this.education_safe_id = null;
        this.education_safe_time = null;
        this.project_id = null;
        this.project_name = null;
    }
    return EducationRes;
}());
exports.EducationRes = EducationRes;
var MyPagePage = /** @class */ (function () {
    function MyPagePage(el, connect, _modal, nav, regex, user, toast, alert, loading, promise, changeDetector) {
        this.el = el;
        this.connect = connect;
        this._modal = _modal;
        this.nav = nav;
        this.regex = regex;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.editable = false;
        this.segment = 'belong';
        this.userType = null;
        /** ???????????? form */
        this.basicForm = new BasicForm();
        this.basicValidator = new connect_service_1.Validator(new BasicForm()).validator;
        /** ???????????? form */
        this.belongForm = new BelongForm();
        this.belongValidator = new connect_service_1.Validator(new BelongForm()).validator;
        /** ???????????? form */
        this.educationGetForm = new EducationGetForm();
    }
    MyPagePage.prototype.ngOnInit = function () {
        this.getForm();
        this.get();
    };
    /**
     * ????????? ?????? ??????
     */
    MyPagePage.prototype.getForm = function () {
        /** ?????? ?????? */
        var _a = this.user.userData, user_type = _a.user_type, user_role = _a.user_role;
        if (user_type === 'COMPANY') {
            if (user_role.startsWith('MASTER')) {
                this.userType = 'MASTER';
            }
            else {
                this.userType = 'PARTNER';
            }
        }
        else {
            this.userType = user_type;
        }
        /** ?????? ????????? */
        this.educationGetForm.project_id = this.user.userData.belong_data.project_id;
    };
    /** ?????? ???????????? */
    MyPagePage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        loading = _a.sent();
                        /** Promise.all ??? ?????? promise(async/await)?????? ????????? ?????????, ?????? ????????? ????????????.
                         * api ???????????? ???????????? ????????? ???????????? ???????????? ?????????, ??? api ?????? ?????? loading??? ????????? ?????? ???????????????
                         * ????????? loading ?????? ???????????? ????????? ??????????????????.
                         */
                        return [4 /*yield*/, Promise.all([
                                this.getBasic(),
                                this.getBelong(),
                                this.getEducation(),
                                this.getMileageTotal(),
                                this.getMileagePlus(),
                                this.getMileageMinus()
                            ])];
                    case 2:
                        /** Promise.all ??? ?????? promise(async/await)?????? ????????? ?????????, ?????? ????????? ????????????.
                         * api ???????????? ???????????? ????????? ???????????? ???????????? ?????????, ??? api ?????? ?????? loading??? ????????? ?????? ???????????????
                         * ????????? loading ?????? ???????????? ????????? ??????????????????.
                         */
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ???????????? */
    MyPagePage.prototype.getBasic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/mypage/basic/detail', {}, { parse: ['user_profile_file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.basicForm = __assign(__assign({}, this.basicForm), res.rsObj);
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ???????????????
    MyPagePage.prototype.overlapPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user_phone, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_phone = this.basicForm.user_phone;
                        if (!user_phone)
                            return [2 /*return*/, this.basicValidator.user_phone = null];
                        if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                            return [2 /*return*/, this.basicValidator.user_phone = { valid: false, message: '????????? ????????? ????????? ??????????????????.' }];
                        return [4 /*yield*/, this.connect.run('/mypage/overlap/phone', { user_phone: user_phone })];
                    case 1:
                        res = _a.sent();
                        this.basicValidator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPagePage.prototype.changePhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
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
    // ?????????
    MyPagePage.prototype.overlapEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user_email, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_email = this.basicForm.user_email;
                        return [4 /*yield*/, this.connect.run('/mypage/overlap/email', { user_email: user_email })];
                    case 1:
                        res = _a.sent();
                        this.basicValidator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ?????? ?????? */
    MyPagePage.prototype.withdrawal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.alert.present({
                    header: '??????????????? ???????????????.',
                    message: "\n        \u25A1 \uD68C\uC6D0 \uD0C8\uD1F4 \uC2DC \uC2DC\uC2A4\uD15C \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5 \uD558\uBA70 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5 \uD569\uB2C8\uB2E4.\n\n        \u25A1 \uD68C\uC6D0 \uD0C8\uD1F4 \uD6C4 \uB9C8\uC9C0\uB9C9 \uCD9C\uC5ED \uD604\uC7A5\uC758 \uC900\uACF5\uC77C\uB85C \uBD80\uD130 3\uB144 \uD6C4 \uAE4C\uC9C0 \uC815\uBCF4 \uBCF4\uAD00 \uD6C4 \uC790\uB3D9 \uC0AD\uC81C \uB429\uB2C8\uB2E4.\n\n        \u25A1 \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uC6D0\uD560 \uC2DC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\n      ",
                    inputs: [
                        { name: 'account_token', placeholder: '????????????', type: 'password' }
                    ],
                    buttons: [
                        { text: '??????' },
                        { text: '????????????', handler: this.widhdrawalHandler.bind(this) }
                    ]
                });
                return [2 /*return*/];
            });
        });
    };
    MyPagePage.prototype.widhdrawalHandler = function (_a) {
        var account_token = _a.account_token;
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(account_token);
                        return [4 /*yield*/, this.connect.run('/mypage/user/delete', {
                                account_token: account_token
                            })];
                    case 1:
                        res = _b.sent();
                        if (res.rsCode === 0) {
                            this.user.clear();
                            this.nav.navigateRoot('/login', {
                                force: true,
                                animated: true
                            });
                            this.alert.present({
                                header: '?????? ????????? ?????????????????????.',
                                message: '????????? ?????????????????? ???????????????.',
                                buttons: [
                                    { text: '??????' }
                                ]
                            });
                        }
                        else {
                            this.toast.present({ color: 'warning', message: '??????????????? ???????????? ????????????.' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ?????? */
    MyPagePage.prototype.changePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: change_password_page_1.ChangePasswordPage,
                            cssClass: 'change-password-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ???????????? */
    MyPagePage.prototype.getBelong = function () {
        return __awaiter(this, void 0, void 0, function () {
            var api, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = '';
                        if (this.userType === 'LH') {
                            api = '/mypage/lh/belong/detail';
                        }
                        else if (this.userType === 'SUPER') {
                            api = '/mypage/super/belong/detail';
                        }
                        else if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
                            api = '/mypage/company/belong/detail';
                        }
                        return [4 /*yield*/, this.connect.run(api, {}, { parse: ['safe_job_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.belongForm = __assign(__assign({}, this.belongForm), res.rsObj);
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ???????????? */
    MyPagePage.prototype.getEducationSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.getEducation()];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPagePage.prototype.getEducation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.userType === 'MASTER' || this.userType === 'PARTNER')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/mypage/education/list', this.educationGetForm)];
                    case 1:
                        _a.educationRes = _b.sent();
                        if (this.educationRes.rsCode === 1008) {
                            // ????????? ??????
                        }
                        else if (this.educationRes.rsCode) {
                            this.toast.present({ color: 'warning', message: this.educationRes.rsMsg });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ?????? ???????????? */
    MyPagePage.prototype.getMileageTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.userType === 'PARTNER')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/mypage/mileagetotal/list')];
                    case 1:
                        _a.mileageTotalRes = _b.sent();
                        if (this.mileageTotalRes.rsCode === 1008) {
                            // ????????? ??????
                        }
                        else if (this.mileageTotalRes.rsCode) {
                            this.toast.present({ color: 'warning', message: this.mileageTotalRes.rsMsg });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MyPagePage.prototype.getMileagePlus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.userType === 'PARTNER')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/mypage/mileageplus/list')];
                    case 1:
                        _a.mileagePlusRes = _b.sent();
                        if (this.mileagePlusRes.rsCode === 1008) {
                            // ????????? ??????
                        }
                        else if (this.mileagePlusRes.rsCode) {
                            this.toast.present({ color: 'warning', message: this.mileagePlusRes.rsMsg });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MyPagePage.prototype.getMileageMinus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.userType === 'PARTNER')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/mypage/mileageminus/list')];
                    case 1:
                        _a.mileageMinusRes = _b.sent();
                        if (this.mileageMinusRes.rsCode === 1008) {
                            // ????????? ??????
                        }
                        else if (this.mileageMinusRes.rsCode) {
                            this.toast.present({ color: 'warning', message: this.mileageMinusRes.rsMsg });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ????????? ?????? ??????
     */
    /** ?????? ?????? */
    MyPagePage.prototype.submit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var loading, resAll;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.basicValid())
                            return [2 /*return*/];
                        if (!this.belongValid()) {
                            this.segment = 'belong';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loading.present()];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, Promise.all([
                                this.basicSubmit(),
                                (_a = 
                                // ???????????? ?????? submit
                                this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                                this.belongSubmit()
                            ])];
                    case 2:
                        resAll = _b.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 3:
                        _b.sent();
                        /** ?????? ???????????? ??????????????? ??????????????????, ?????? ???????????? true??? */
                        if (!resAll.includes(false)) {
                            this.nav.back({ force: true });
                            this.alert.present({
                                message: '??????????????? ?????????????????????.'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ?????? */
    MyPagePage.prototype.basicSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/mypage/basic/update', this.basicForm)];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** ???????????? ?????? */
    MyPagePage.prototype.belongSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var api, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = '';
                        if (this.userType === 'LH') {
                            api = '/mypage/lh/belong/update';
                        }
                        else if (this.userType === 'SUPER') {
                            api = '/mypage/super/belong/update';
                        }
                        else if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
                            api = '/mypage/company/belong/update';
                        }
                        return [4 /*yield*/, this.connect.run(api, this.belongForm)];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ????????? ?????? ??????
     */
    MyPagePage.prototype.basicValid = function () {
        var _a, _b, _c, _d;
        if (!this.basicForm.user_name)
            this.basicValidator.user_name = { message: '????????? ??????????????????.', valid: false };
        else
            this.basicValidator.user_name = { valid: true };
        if (!this.basicForm.account_id)
            this.basicValidator.account_id = { message: '???????????? ??????????????????.', valid: false };
        else if ((_a = this.basicValidator.account_id) === null || _a === void 0 ? void 0 : _a.valid)
            this.basicValidator.account_id = { valid: true };
        if (!this.basicForm.user_phone)
            this.basicValidator.user_phone = { message: '?????????????????? ??????????????????.', valid: false };
        else if ((_b = this.basicValidator.user_phone) === null || _b === void 0 ? void 0 : _b.valid)
            this.basicValidator.user_phone = { valid: true };
        if (!this.basicForm.user_birth)
            this.basicValidator.user_birth = { message: '??????????????? ??????????????????.', valid: false };
        else
            this.basicValidator.user_birth = { valid: true };
        if ((_c = this.basicValidator.user_email) === null || _c === void 0 ? void 0 : _c.valid)
            this.basicValidator.user_email = { valid: true };
        if (!this.basicForm.user_gender)
            this.basicValidator.user_gender = { message: '????????? ??????????????????.', valid: false };
        else
            this.basicValidator.user_gender = { valid: true };
        for (var key in this.basicValidator) {
            if (((_d = this.basicValidator[key]) === null || _d === void 0 ? void 0 : _d.valid) === false)
                return false;
        }
        return true;
    };
    MyPagePage.prototype.belongValid = function () {
        var _a;
        /** ?????? validation */
        if (!this.belongForm.ctgo_job_position_id)
            this.belongValidator.ctgo_job_position_id = { message: '????????? ??????????????????.', valid: false };
        else
            this.belongValidator.ctgo_job_position_id = { valid: true };
        /** lh validation */
        if (this.userType === 'LH') {
            if (!this.belongForm.hq_regional_id)
                this.belongValidator.hq_regional_id = { message: '??????????????? ??????????????????', valid: false };
            else
                this.belongValidator.hq_regional_id = { valid: true };
            // ???????????? ????????? ????????? ????????? ??????
            if (!this.belongForm.hq_regional_entire_state
                && !this.belongForm.hq_business_id)
                this.belongValidator.hq_business_id = { message: '??????????????? ??????????????????', valid: false };
            else
                this.belongValidator.hq_business_id = { valid: true };
            // ???????????? ????????? ????????? ???????????? ????????? ??????
            if (!this.belongForm.hq_regional_entire_state
                && !this.belongForm.hq_business_entire_state
                && !this.belongForm.hq_department_id)
                this.belongValidator.hq_department_id = { message: '????????? ??????????????????', valid: false };
            else
                this.belongValidator.hq_department_id = { valid: true };
        }
        /** ?????? validation */
        if (this.userType === 'SUPER') {
        }
        /** ?????????, ????????? validation */
        if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
        }
        for (var key in this.belongValidator) {
            if (((_a = this.belongValidator[key]) === null || _a === void 0 ? void 0 : _a.valid) === false)
                return false;
        }
        return true;
    };
    __decorate([
        core_1.ViewChild('inputSafeJob')
    ], MyPagePage.prototype, "inputSafeJob");
    MyPagePage = __decorate([
        core_1.Component({
            selector: 'app-my-page',
            templateUrl: './my-page.page.html',
            styleUrls: ['./my-page.page.scss']
        })
    ], MyPagePage);
    return MyPagePage;
}());
exports.MyPagePage = MyPagePage;
