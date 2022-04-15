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
exports.NoticeEditPage = exports.NoticeItem = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var file_service_1 = require("src/app/basic/service/core/file.service");
var NoticeItem = /** @class */ (function () {
    function NoticeItem() {
        this.notice_file_data = [];
        this.file = [];
        this.file_json = new file_service_1.FileJson();
    }
    return NoticeItem;
}());
exports.NoticeItem = NoticeItem;
var NoticeEditPage = /** @class */ (function () {
    function NoticeEditPage(connect, _modal, toast, user, date, alert, file) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.date = date;
        this.alert = alert;
        this.file = file;
        this.update_state = false;
        this.permission = {
            edit: false
        };
        this.form = new NoticeItem();
        this.validator = new connect_service_1.Validator(new NoticeItem()).validator;
        this.useNotice = false;
    }
    NoticeEditPage.prototype.ngOnInit = function () {
        // if(this.user.userData.belong_data.company_contract_type === 'LH') { 
        //   this.form.project_id = 0;
        // }
        this.getPermission();
        if (this.notice_id) {
            this.title = '상세';
            this.get();
        }
        else {
            this.update_state = true;
            this.form.company_name = this.user.userData.belong_data.company_name;
            this.form.user_name = this.user.userData.user_name;
            this.form.create_date = this.date.today();
            this.title = '등록';
        }
    };
    NoticeEditPage.prototype.getPermission = function () {
        var company_contract_type = this.user.userData.belong_data.company_contract_type;
        if (company_contract_type === 'LH'
            || company_contract_type === '원청사') {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
    };
    NoticeEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/board/notice/detail', {
                            notice_id: this.notice_id
                        }, { loading: true, parse: ['notice_file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            if (this.user.userData.user_id === this.form.create_user_id) {
                                this.useNotice = true;
                            }
                            // const scopeOne = this.noticeRange.list1.find(item => item.value === this.form.public_scope_one);
                            // const scopeTwo = this.noticeRange.list2.find(item => item.value === this.form.public_scope_two);
                            // this.rangeText = `${scopeOne.text},${scopeTwo.text},${this.form.scope_company_name ? this.form.scope_company_name : ''}`;
                            // if(!this.form.scope_company_name) {
                            //   this.rangeText.substring(1,this.rangeText.length -1);
                            // }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeEditPage.prototype.submit = function () {
        // this.noticeText.update();
        if (this.form.notice_id)
            this.update();
        else
            this.noticeInsert();
    };
    NoticeEditPage.prototype.noticeInsert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.project_id)
                            return [2 /*return*/, this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' })];
                        if (!this.form.notice_type)
                            return [2 /*return*/, this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '등록 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.connect.run('/board/notice/insert', this.form)];
                                                    case 1:
                                                        res = _a.sent();
                                                        if (res.rsCode === 0) {
                                                            this._modal.dismiss('Y');
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
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeEditPage.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.project_id)
                            return [2 /*return*/, this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' })];
                        if (!this.form.notice_type)
                            return [2 /*return*/, this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '수정 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.connect.run('/board/notice/update', this.form)];
                                                    case 1:
                                                        res = _a.sent();
                                                        if (res.rsCode === 0) {
                                                            this.update_state = false;
                                                            this._modal.dismiss('Y');
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
    NoticeEditPage.prototype.Delete = function () {
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
                                                case 0: return [4 /*yield*/, this.connect.run('/board/notice/delete', {
                                                        notice_ids: [this.notice_id]
                                                    })];
                                                case 1:
                                                    res = _a.sent();
                                                    if (res.rsCode === 0) {
                                                        this._modal.dismiss('Y');
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
    NoticeEditPage.prototype.dismiss = function () {
        this._modal.dismiss();
    };
    NoticeEditPage.prototype.updateButton = function () {
        if (this.update_state)
            this.submit();
        else
            this.update_state = true;
    };
    __decorate([
        core_1.Input()
    ], NoticeEditPage.prototype, "notice_id");
    NoticeEditPage = __decorate([
        core_1.Component({
            selector: 'app-notice-edit',
            templateUrl: './notice-edit.page.html',
            styleUrls: ['./notice-edit.page.scss']
        })
    ], NoticeEditPage);
    return NoticeEditPage;
}());
exports.NoticeEditPage = NoticeEditPage;
