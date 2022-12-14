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
exports.SafetyEducationResultEditPage = exports.EducationItem = void 0;
var core_1 = require("@angular/core");
var basic_animation_1 = require("src/app/basic/basic.animation");
var file_service_1 = require("src/app/basic/service/core/file.service");
var EducationItem = /** @class */ (function () {
    function EducationItem() {
        this.education_safe_report_file_data = [];
        this.file = []; // FILE
        this.file_json = new file_service_1.FileJson(); // JSON
        this.approval_default_data = [];
    }
    return EducationItem;
}());
exports.EducationItem = EducationItem;
var SafetyEducationResultEditPage = /** @class */ (function () {
    function SafetyEducationResultEditPage(connect, toast, date, user, _modal, loading) {
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.user = user;
        this._modal = _modal;
        this.loading = loading;
        this.approvalView = false;
        this.approvalDocument = false;
        this.form = new EducationItem();
        this.permission = {
            edit: true
        };
    }
    SafetyEducationResultEditPage.prototype.ngOnInit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.form.education_safe_id = (_a = this.item) === null || _a === void 0 ? void 0 : _a.education_safe_id;
                        if (!this.item) return [3 /*break*/, 2];
                        this.form.education_safe_report_instructor = this.item.education_safe_instructor;
                        this.form.education_safe_report_text = this.item.ctgo_education_safe_text;
                        return [4 /*yield*/, this.getDefaultItem()];
                    case 1:
                        _b.sent();
                        this.newReportList();
                        _b.label = 2;
                    case 2:
                        if (this.education_safe_report_id) {
                            this.getItem();
                            this.reportList();
                        }
                        // ????????? ??????
                        this.form.ctgo_education_safe_type_text = this.getTypeText(this.form.ctgo_education_safe_type);
                        // ???????????? ctgo_approval_module_id ??? ????????? ??????????????? ??????
                        this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.ctgo_education_safe_type);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ???????????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.getDefaultItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.approval_default_data.push({
                            default_type: 'REFER',
                            answer_datas: [{
                                    answer_user_id: this.user.userData.user_id,
                                    approval_last_state: 0,
                                    approval_order_no: 1
                                }],
                            refer_datas: [{
                                    refer_user_id: this.user.userData.user_id
                                }]
                        });
                        return [4 /*yield*/, this.connect.run('/education/detail', { education_safe_id: this.item.education_safe_id }, {
                                parse: ['education_safe_manager_names', 'education_safe_manager_ids']
                            })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            // ????????? ????????? ???, ?????? ????????? ???????????? ??????! => app-approval component??? ????????? ???????????? ????????????!
                        }
                        else {
                            this.toast.present({ message: res.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ???????????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.getItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/education/report/get', { education_safe_report_id: this.education_safe_report_id }, {
                            parse: ['education_safe_report_file_data']
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            // ????????? ????????? ???, ?????? ????????? ???????????? ??????! => app-approval component??? ????????? ???????????? ????????????!
                        }
                        else {
                            this.toast.present({ message: res.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //????????? ??????
    SafetyEducationResultEditPage.prototype.reportList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/education/report/attendant/list', { education_safe_report_id: this.education_safe_report_id })];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultEditPage.prototype.newReportList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("this.education_safe_report_id", this.item.education_safe_id);
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/education/attendant/list', { education_safe_id: this.item.education_safe_id, search_text: '' })];
                    case 1:
                        _a.res = _b.sent();
                        console.log("this.res", this.res);
                        if (this.res.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ????????? ????????? ????????????
     */
    SafetyEducationResultEditPage.prototype.getTypeText = function (ctgo_education_safe_type) {
        switch (ctgo_education_safe_type) {
            case '?????????':
                return '?????? ?????? ????????? (?????????)';
            case '??????':
                return '?????? ?????? ????????? (????????? ??????)';
            case '?????????????????????': // => 1?????? ????????????
                return '?????? ?????? ????????? (??????????????? ??????)';
            case '???????????????':
                return '?????? ?????? ????????? (?????? ?????? ?????? ???)';
            case '??????':
                return '?????? ?????? ????????? (?????? ??????)';
        }
    };
    /**
     * ???????????? ????????? ????????? ????????????
     */
    SafetyEducationResultEditPage.prototype.getApprovalModuleId = function (ctgo_education_safe_type) {
        switch (ctgo_education_safe_type) {
            case '?????????':
                return 1;
            case '??????':
                return 2;
            case '?????????????????????': // => 1?????? ????????????
                return 3;
            case '???????????????':
                return 4;
            case '??????':
                return 5;
        }
    };
    /**
     * ?????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.onDeleteClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev["delete"]()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this._modal.dismiss(true);
                            // ????????? ???????????? ????????? ???
                            window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
                            window.dispatchEvent(new CustomEvent('approval-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ???????????? ??????
     */
    SafetyEducationResultEditPage.prototype.onSaveClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var approval_data, url, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        approval_data = ev.approval_data;
                        // if(!this.form.education_safe_report_instructor) { this.toast.present({ color: 'warning', message: '???????????? ????????????.' }); return; }
                        // if(!this.form.education_safe_report_text) { this.toast.present({ color: 'warning', message: '?????? ????????? ????????? ?????????.' }); return; }
                        this.form.approval_cnt_answer = '????????????';
                        this.form.approval_default_data = approval_data;
                        url = '';
                        if (!this.form.approval_id) {
                            url = '/education/report/insert';
                        }
                        else {
                            url = '/education/report/update';
                        }
                        return [4 /*yield*/, this.connect.run(url, this.form, { loading: true })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '???????????? ???????????????.' });
                            if (!this.form.approval_id) {
                                // ?????? ??????????????????, approval_id??? safety_meeting_id ??????????????? ???????????? ???????????? ???, ?????? ???????????? ?????? ?????? ????????? ??????.
                                this.form.approval_id = res.rsObj.approval_id;
                                this.form.education_safe_report_id = res.rsObj.education_safe_report_id;
                                // ????????? ???????????? ????????? ???
                                window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                                window.dispatchEvent(new CustomEvent('approval-list:get()'));
                            }
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ?????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.onSendClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var approval_data, res, loading, res, approvalRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        approval_data = ev.approval_data;
                        if (!this.form.education_safe_report_instructor) {
                            this.toast.present({ color: 'warning', message: '???????????? ????????????.' });
                            return [2 /*return*/];
                        }
                        if (!this.form.education_safe_report_text) {
                            this.toast.present({ color: 'warning', message: '?????? ????????? ??????????????????.' });
                            return [2 /*return*/];
                        }
                        this.form.approval_cnt_answer = '?????????';
                        this.form.approval_default_data = approval_data;
                        if (!!this.form.approval_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect.run('/education/report/insert', this.form, { loading: true })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '???????????? ???????????????.' });
                            this._modal.dismiss(true);
                            // ????????? ???????????? ????????? ???
                            window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                            window.dispatchEvent(new CustomEvent('approval-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.loading.present()];
                    case 3:
                        loading = _a.sent();
                        return [4 /*yield*/, this.connect.run('/education/report/update', this.form)];
                    case 4:
                        res = _a.sent();
                        if (!(res.rsCode === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, ev.send()];
                    case 5:
                        approvalRes = _a.sent();
                        if (approvalRes.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '???????????? ???????????????.' });
                            this._modal.dismiss(true);
                            // ????????? ???????????? ????????? ???
                            window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                            window.dispatchEvent(new CustomEvent('approval-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: approvalRes.rsMsg });
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        this.toast.present({ color: 'warning', message: res.rsMsg });
                        _a.label = 7;
                    case 7:
                        loading.dismiss();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ?????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.onRecoveryClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev.recovery()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            // ????????? ???????????? ????????? ???
                            window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                            window.dispatchEvent(new CustomEvent('approval-list:get()'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ?????? ??????
     */
    SafetyEducationResultEditPage.prototype.onApprovalClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev.approval()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            // ????????? ???????????? ????????? ???
                            window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                            window.dispatchEvent(new CustomEvent('approval-list:get()'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ?????? ????????? ?????? ??? ??????
     */
    SafetyEducationResultEditPage.prototype.onApprovalChange = function (ev) {
        if (ev.btnList.includes('????????????')) {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
        /** ????????? ????????? ????????? ??????. */
        this.approval_comment = ev.approval_comment;
    };
    __decorate([
        core_1.Input()
    ], SafetyEducationResultEditPage.prototype, "item");
    __decorate([
        core_1.Input()
    ], SafetyEducationResultEditPage.prototype, "education_safe_report_id");
    SafetyEducationResultEditPage = __decorate([
        core_1.Component({
            selector: 'app-safety-education-result-edit',
            templateUrl: './safety-education-result-edit.page.html',
            styleUrls: ['./safety-education-result-edit.page.scss'],
            animations: [basic_animation_1.fadeInAnimation]
        })
    ], SafetyEducationResultEditPage);
    return SafetyEducationResultEditPage;
}());
exports.SafetyEducationResultEditPage = SafetyEducationResultEditPage;
