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
exports.ConfirmPendingListPage = void 0;
var core_1 = require("@angular/core");
var confirm_pending_detail_search_page_1 = require("../confirm-pending-detail-search/confirm-pending-detail-search.page");
var ConfirmObtainItem = /** @class */ (function () {
    function ConfirmObtainItem() {
    }
    return ConfirmObtainItem;
}());
var ConfirmPendingListPage = /** @class */ (function () {
    function ConfirmPendingListPage(_modal, user, connect, toast, date, approval) {
        this._modal = _modal;
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.approval = approval;
        this.form = {
            project_id: 0,
            master_company_id: 0,
            company_id: 0,
            start_date: '',
            end_date: '',
            search_text: '',
            limit_no: 0 // 20개씩 가져옵니다
        };
    }
    ConfirmPendingListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getForm()];
                    case 1:
                        _a.sent();
                        this.get();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmPendingListPage.prototype.getForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var belong_data, res, contractor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        belong_data = this.user.userData.belong_data;
                        this.form.project_id = belong_data.project_id;
                        this.form.company_id = belong_data.company_id;
                        if (!(belong_data.company_contract_type === '원청사')) return [3 /*break*/, 1];
                        this.form.master_company_id = belong_data.company_id;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(belong_data.company_contract_type === '협력사')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connect.run('/category/certify/search_my_master_company/get', {
                                project_id: this.form.project_id,
                                search_text: ''
                            })];
                    case 2:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            contractor = res.rsMap[0];
                            this.form.master_company_id = contractor.master_company_id;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        _a.label = 3;
                    case 3:
                        this.form.start_date = this.date.today({ month: -1 });
                        this.form.end_date = this.date.today();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
     * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
     */
    ConfirmPendingListPage.prototype.get = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var trans_form, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        trans_form = JSON.parse(JSON.stringify(this.form));
                        trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/approval/board/req/get', this.form, { loading: true })];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                            // 암것도 안함
                            this.res.rsMap.forEach(function (item, i) {
                                item.index = _this.res.rsObj.row_count - _this.form.limit_no - i;
                            });
                        }
                        else if (this.res.rsCode === 1008) {
                            // 암것도 안함.
                        }
                        else {
                            this.toast.present({ color: 'warning', message: this.res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 모바일 무한스크롤 시, 사용된다.
     */
    ConfirmPendingListPage.prototype.getMobile = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = this.res.rsMap.length;
                        return [4 /*yield*/, this.connect.run('/approval/board/req/get', this.form, { loading: true })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            /**
                             * 모바일은 res를 대체하는 것이 아니라, 데이터를 스크롤 하단에 이어붙여야 함.
                             */
                            res.rsMap.forEach(function (item, i) {
                                item.index = res.rsObj.row_count - _this.form.limit_no - i;
                                _this.res.rsMap.push(item);
                            });
                        }
                        else if (res.rsCode === 1008) {
                            /**
                             * 더 로딩할 데이터가 없음. 게시판 형식과는 다르게, 데이터를 떼면, 데이터가 다 날아가기 때문에 데이터를 떼면 안됨.
                             * 아무것도 안하거나, 마지막 리스트라고 알려주기만 하면 됨.
                             */
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        setTimeout(function () {
                            $event.target.complete();
                        }, 50);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmPendingListPage.prototype.detail = function (item) {
        this.approval.getComponent(item.ctgo_approval_module_id, item.target_id);
    };
    ConfirmPendingListPage.prototype.openDetailSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: confirm_pending_detail_search_page_1.ConfirmPendingDetailSearchPage,
                            componentProps: {
                                form: this.form
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.form = data;
                            this.get(0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmPendingListPage = __decorate([
        core_1.Component({
            selector: 'app-confirm-pending-list',
            templateUrl: './confirm-pending-list.page.html',
            styleUrls: ['./confirm-pending-list.page.scss']
        })
    ], ConfirmPendingListPage);
    return ConfirmPendingListPage;
}());
exports.ConfirmPendingListPage = ConfirmPendingListPage;