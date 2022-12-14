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
exports.MsdsListPage = void 0;
var core_1 = require("@angular/core");
var msds_edit_page_1 = require("../msds-edit/msds-edit.page");
var msds_search_page_1 = require("../msds-search/msds-search.page");
var MsdsInfo = /** @class */ (function () {
    function MsdsInfo() {
    }
    return MsdsInfo;
}());
var MsdsListPage = /** @class */ (function () {
    function MsdsListPage(modal, connect, date, toast, user) {
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            company_id: this.user.userData.belong_data.company_id,
            end_date: this.date.today(),
            msds_types: [],
            // project_ids: [1],
            search_text: '',
            start_date: this.date.today({ month: -1 }),
            limit_no: 0
        };
    }
    MsdsListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.get();
                console.log('history.state', history.state);
                this.getNavData();
                return [2 /*return*/];
            });
        });
    };
    MsdsListPage.prototype.getNavData = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_c) {
            if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.msds_id)
                this.edit((_b = history.state) === null || _b === void 0 ? void 0 : _b.msds_id);
            return [2 /*return*/];
        }); });
    };
    MsdsListPage.prototype.getMobile = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = this.res.rsMap.length;
                        return [4 /*yield*/, this.connect.run('/board/msds/list', this.form, {})];
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
                            // ??? ????????? ???????????? ??????
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
    MsdsListPage.prototype.get = function (limit_no) {
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
                        return [4 /*yield*/, this.connect.run('/board/msds/list', this.form)];
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
    MsdsListPage.prototype.detailSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: msds_search_page_1.MsdsSearchPage,
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
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MsdsListPage.prototype.edit = function (item) {
        if (item === void 0) { item = null; }
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: msds_edit_page_1.MsdsEditPage,
                            componentProps: {
                                item: item,
                                form: __assign(__assign({}, new msds_edit_page_1.MsdsItem()), item ? item : this.form)
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
    MsdsListPage.prototype.favoritesCheck = function ($event, item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        $event.stopPropagation();
                        item.favorites_state = item.favorites_state ? 0 : 1;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/board/msds/favorites', { msds_id: item.msds_id })];
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
    MsdsListPage = __decorate([
        core_1.Component({
            selector: 'app-msds-list',
            templateUrl: './msds-list.page.html',
            styleUrls: ['./msds-list.page.scss']
        })
    ], MsdsListPage);
    return MsdsListPage;
}());
exports.MsdsListPage = MsdsListPage;
