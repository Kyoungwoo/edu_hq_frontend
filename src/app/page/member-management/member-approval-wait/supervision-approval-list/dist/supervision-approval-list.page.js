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
exports.SupervisionApprovalListPage = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var approval_popup_component_1 = require("../approval-popup/approval-popup.component");
var security_password_component_1 = require("../security-password/security-password.component");
var supervision_approval_edit_page_1 = require("../supervision-approval-edit/supervision-approval-edit.page");
var SupervisionApprovalInfo = /** @class */ (function () {
    function SupervisionApprovalInfo() {
    }
    return SupervisionApprovalInfo;
}());
var SupervisionApprovalListPage = /** @class */ (function () {
    function SupervisionApprovalListPage(user, modal, connect, date, toast, nav, file) {
        this.user = user;
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.toast = toast;
        this.nav = nav;
        this.file = file;
        this.form = {
            approval_state: '전체',
            project_id: 0,
            company_id: 0,
            // ctgo_construction_ids: [],
            start_date: this.date.today({ month: -1 }),
            end_date: this.date.today(),
            search_text: '',
            limit_no: 0,
            session_company_id: this.user.userData.belong_data.company_id,
            user_manage_session: ''
        };
        this.validator = new connect_service_1.Validator(new SupervisionApprovalInfo()).validator;
        this.selectedList = [];
        this.permission = {
            approval: false // 가입승인 권한
        };
    }
    SupervisionApprovalListPage.prototype.ngOnInit = function () {
        this.get();
    };
    SupervisionApprovalListPage.prototype.get = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var authToken, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        authToken = this.user.memberAuthToken;
                        this.form.user_manage_session = authToken;
                        return [4 /*yield*/, this.connect.run('/usermanage/approval/super/list', this.form)];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.res = res;
                            this.res.rsMap.map(function (item, i) {
                                item.index = res.rsObj.row_count - _this.form.limit_no - i;
                            });
                        }
                        else if (res.rsCode === 1008) {
                            this.res = null;
                            // 데이터 없음
                        }
                        else if (res.rsCode === 3008 || res.rsCode === 3009) {
                            // 비밀번호 없거나 틀렸음
                            this.getPassword();
                        }
                        else {
                            // 그외. 인터넷안됨, 서버연결안됨 등등
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SupervisionApprovalListPage.prototype.getPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
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
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SupervisionApprovalListPage.prototype.edit = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: supervision_approval_edit_page_1.SupervisionApprovalEditPage,
                            componentProps: {
                                item: item,
                                state: 'supervision'
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
    SupervisionApprovalListPage.prototype.approval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.selectedList.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '관리자를 선택해주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.modal.create({
                            component: approval_popup_component_1.ApprovalPopupComponent,
                            componentProps: {
                                selectedList: this.selectedList,
                                state: 'supervision'
                            },
                            cssClass: "approval-modal"
                        })];
                    case 3:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 4:
                        data = (_a.sent()).data;
                        if (data) {
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SupervisionApprovalListPage = __decorate([
        core_1.Component({
            selector: 'app-supervision-approval-list',
            templateUrl: './supervision-approval-list.page.html',
            styleUrls: ['./supervision-approval-list.page.scss']
        })
    ], SupervisionApprovalListPage);
    return SupervisionApprovalListPage;
}());
exports.SupervisionApprovalListPage = SupervisionApprovalListPage;
