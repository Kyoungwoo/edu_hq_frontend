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
exports.NoticeListPage = void 0;
var core_1 = require("@angular/core");
var detail_search_page_1 = require("../../detail-search/detail-search.page");
var notice_edit_page_1 = require("../notice-edit/notice-edit.page");
var NoticeInfo = /** @class */ (function () {
    function NoticeInfo() {
    }
    return NoticeInfo;
}());
var NoticeListPage = /** @class */ (function () {
    function NoticeListPage(modal, connect, date, user, toast) {
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.company_id,
            end_date: this.date.today(),
            notice_types: [],
            // project_ids: [1],
            search_text: '',
            start_date: this.date.today({ month: -1 }),
            limit_no: 0
        };
        this.editable = false;
    }
    NoticeListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { _this.get(); }, 300);
                if (this.user.userData.user_role !== 'LH_HEAD')
                    this.editable = true;
                return [2 /*return*/];
            });
        });
    };
    NoticeListPage.prototype.getMobile = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = this.res.rsMap.length;
                        return [4 /*yield*/, this.connect.run('/board/notice/list', this.form, {})];
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
                            // 더 로딩할 데이터가 없음
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
    NoticeListPage.prototype.get = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var trans_form, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        trans_form = JSON.parse(JSON.stringify(this.form));
                        trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
                        return [4 /*yield*/, this.connect.run('/board/notice/list', this.form)];
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
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeListPage.prototype.detailSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: detail_search_page_1.DetailSearchPage,
                            componentProps: {
                                type: '공지사항',
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
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeListPage.prototype.edit = function (notice_id) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: notice_edit_page_1.NoticeEditPage,
                            componentProps: {
                                notice_id: notice_id
                            }
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
    NoticeListPage.prototype.favoritesCheck = function ($event, item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        $event.stopPropagation();
                        item.favorites_state = item.favorites_state ? 0 : 1;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/board/notice/favorites', { notice_id: item.notice_id })];
                    case 1:
                        _a.resFavorite = _b.sent();
                        if (this.resFavorite.rsCode === 0) {
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeListPage = __decorate([
        core_1.Component({
            selector: 'app-notice-list',
            templateUrl: './notice-list.page.html',
            styleUrls: ['./notice-list.page.scss']
        })
    ], NoticeListPage);
    return NoticeListPage;
}());
exports.NoticeListPage = NoticeListPage;
