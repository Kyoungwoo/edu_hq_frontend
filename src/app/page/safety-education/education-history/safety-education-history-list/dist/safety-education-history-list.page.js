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
exports.SafetyEducationHistoryListPage = void 0;
var core_1 = require("@angular/core");
var people_view_component_1 = require("src/app/component/modal/people-view/people-view.component");
var safety_education_history_detail_page_1 = require("../safety-education-history-detail/safety-education-history-detail.page");
var SafetyEducationHistoryListPage = /** @class */ (function () {
    function SafetyEducationHistoryListPage(modal, connect, user, toast, popover, promise) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.popover = popover;
        this.promise = promise;
        this.form = {
            company_id: 0,
            education_safe_state: '양호',
            limit_no: 0,
            project_id: 0,
            search_text: '' // 검색어
        };
        this.permission = {
            company_id: false
        };
    }
    SafetyEducationHistoryListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getForm();
                this.getList();
                return [2 /*return*/];
            });
        });
    };
    SafetyEducationHistoryListPage.prototype.getForm = function () {
        var _a = this.user.userData, user_role = _a.user_role, belong_data = _a.belong_data;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.company_id;
        }
        else if (user_role === 'LH_HEAD') {
            this.permission.company_id = true;
            this.form.project_id = belong_data.project_id;
        }
    };
    SafetyEducationHistoryListPage.prototype.getList = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        return [4 /*yield*/, this.connect.run('/education/state/record/list', this.form, {
                                parse: ['safe_job_name']
                            })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.res = res;
                            this.res.rsMap.map(function (item, i) {
                                var _a;
                                item.index = res.rsObj.row_count - _this.form.limit_no - i; //  - (this.form.limit_no - i);
                                (_a = item.safe_job_name) === null || _a === void 0 ? void 0 : _a.toString();
                            });
                        }
                        else {
                            this.res = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryListPage.prototype.edit = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: safety_education_history_detail_page_1.SafetyEducationHistoryDetailPage,
                            componentProps: {
                                user_id: user_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryListPage.prototype.userInfo = function (education_safe_manager_id, ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.stopPropagation();
                        return [4 /*yield*/, this.popover.create({
                                component: people_view_component_1.PeopleViewComponent,
                                componentProps: {
                                    education_safe_manager_id: education_safe_manager_id
                                },
                                cssClass: 'education-info',
                                event: ev
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryListPage = __decorate([
        core_1.Component({
            selector: 'app-safety-education-history-list',
            templateUrl: './safety-education-history-list.page.html',
            styleUrls: ['./safety-education-history-list.page.scss']
        })
    ], SafetyEducationHistoryListPage);
    return SafetyEducationHistoryListPage;
}());
exports.SafetyEducationHistoryListPage = SafetyEducationHistoryListPage;
