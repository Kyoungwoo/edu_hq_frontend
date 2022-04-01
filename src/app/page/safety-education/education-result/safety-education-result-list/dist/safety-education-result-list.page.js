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
exports.SafetyEducationResultListPage = void 0;
var core_1 = require("@angular/core");
var education_confirm_pending_list_page_1 = require("../education-confirm-pending-list/education-confirm-pending-list.page");
var new_write_target_page_1 = require("../new-write-target/new-write-target.page");
var safety_education_result_detail_search_page_1 = require("../safety-education-result-detail-search/safety-education-result-detail-search.page");
var safety_education_result_edit_page_1 = require("../safety-education-result-edit/safety-education-result-edit.page");
var SafetyEducationResultListPage = /** @class */ (function () {
    function SafetyEducationResultListPage(_modal, date, connect, user, toast, promise) {
        this._modal = _modal;
        this.date = date;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.promise = promise;
        this.form = {
            approval_cnt_answer: '전체',
            company_id: 0,
            ctgo_education_safe_id: 0,
            end_date: this.date.today(),
            // end_date: '2025-12-01', // 검색 신청 종료일
            limit_no: 0,
            project_id: 0,
            search_text: '',
            start_date: this.date.today({ date: -7 }) // 검색 신청 시작일
            // start_date: '2019-01-01' // 검색 신청 시작일
        };
        this.event = {
            get: null
        };
    }
    SafetyEducationResultListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.projectRolechekc();
                        return [4 /*yield*/, this.promise.wait(function () { return _this.form.company_id; })];
                    case 1:
                        _a.sent();
                        this.getList();
                        // event 물리기
                        this.event.get = this.getEvent.bind(this);
                        window.addEventListener('safety-education-result-list:get()', this.event.get);
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage.prototype.ngOnDestroy = function () {
        window.removeEventListener('safety-education-result-list:get()', this.event.get);
    };
    /** event 파트 */
    SafetyEducationResultListPage.prototype.getEvent = function () {
        this.getList(0);
    };
    SafetyEducationResultListPage.prototype.projectRolechekc = function () {
        var _a = this.user.userData, user_role = _a.user_role, belong_data = _a.belong_data;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.company_id;
        }
        else if (user_role === 'LH_HEAD') {
            this.form.project_id = belong_data.project_id;
        }
    };
    SafetyEducationResultListPage.prototype.getList = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/education/report/list', this.form)];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                            this.res.rsMap.map(function (item, i) {
                                item.index = _this.res.rsObj.row_count - _this.form.limit_no - i;
                                item.education_safe_date = item.education_safe_date + " (" + _this.date.day(item.education_safe_date)[0] + ")";
                                item.create_date = item.create_date + " (" + _this.date.day(item.create_date)[0] + ")";
                            });
                        }
                        else {
                            this.toast.present({ message: this.res.rsMsg, color: 'warning' });
                            this.res = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage.prototype.openDetailSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: safety_education_result_detail_search_page_1.SafetyEducationResultDetailSearchPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.form = data;
                            this.getList();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage.prototype.edit = function (editItem) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: safety_education_result_edit_page_1.SafetyEducationResultEditPage,
                            componentProps: {
                                editItem: editItem
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.getList();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage.prototype.pending = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: education_confirm_pending_list_page_1.EducationConfirmPendingListPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: new_write_target_page_1.NewWriteTargetPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationResultListPage = __decorate([
        core_1.Component({
            selector: 'app-safety-education-result-list',
            templateUrl: './safety-education-result-list.page.html',
            styleUrls: ['./safety-education-result-list.page.scss']
        })
    ], SafetyEducationResultListPage);
    return SafetyEducationResultListPage;
}());
exports.SafetyEducationResultListPage = SafetyEducationResultListPage;
