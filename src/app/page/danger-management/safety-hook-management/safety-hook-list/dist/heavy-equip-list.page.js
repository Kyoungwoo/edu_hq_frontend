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
exports.HeavyEquipListPage = void 0;
var core_1 = require("@angular/core");
var heavy_equip_edit_page_1 = require("../heavy-equip-edit/heavy-equip-edit.page");
var HeavyEquipInfo = /** @class */ (function () {
    function HeavyEquipInfo() {
    }
    return HeavyEquipInfo;
}());
var HeavyEquipListPage = /** @class */ (function () {
    function HeavyEquipListPage(modal, toast, connect, date, user, alert) {
        this.modal = modal;
        this.toast = toast;
        this.connect = connect;
        this.date = date;
        this.user = user;
        this.alert = alert;
        this.form = {
            ctgo_machinery_id: 0,
            end_date: this.date.today(),
            master_company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
            partner_company_id: 0,
            project_id: this.user.userData.belong_data.project_id,
            search_text: '',
            start_date: this.date.today({ month: -1 }),
            limit_no: 0
        };
        this.selectedList = [];
    }
    HeavyEquipListPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getList();
        }, 300);
    };
    HeavyEquipListPage.prototype.getList = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        return [4 /*yield*/, this.connect.run('/machinery/list', this.form)];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.res = __assign(__assign({}, this.res), res);
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
    HeavyEquipListPage.prototype.Heavyedit = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: heavy_equip_edit_page_1.HeavyEquipEditPage,
                            componentProps: {
                                machinery_id: item === null || item === void 0 ? void 0 : item.machinery_id,
                                list_data: this.form
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
    HeavyEquipListPage.prototype.Heavydelete = function () {
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
                                                case 0: return [4 /*yield*/, this.connect.run('/machinery/delete', {
                                                        machinery_ids: this.selectedList
                                                    })];
                                                case 1:
                                                    res = _a.sent();
                                                    if (res.rsCode === 0) {
                                                        this.getList();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function btnPromise(): 권한에 따른 버튼활성화 메서드
     * @param type - 버튼의 type
     * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
     * @returns true or false
     */
    HeavyEquipListPage.prototype.btnPromise = function (type, user_id) {
        if (user_id === void 0) { user_id = null; }
        var state = false;
        switch (type) {
            case 'insert':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
            case 'delete':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD')
                    state = true;
                break;
            case 'delete_check':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || user_id == this.user.userData.user_id)
                    state = true;
                break;
        }
        return state;
    };
    HeavyEquipListPage = __decorate([
        core_1.Component({
            selector: 'app-heavy-equip-list',
            templateUrl: './heavy-equip-list.page.html',
            styleUrls: ['./heavy-equip-list.page.scss']
        })
    ], HeavyEquipListPage);
    return HeavyEquipListPage;
}());
exports.HeavyEquipListPage = HeavyEquipListPage;
