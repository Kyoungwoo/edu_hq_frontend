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
exports.MsdsEditPage = exports.MsdsItem = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var file_service_1 = require("src/app/basic/service/core/file.service");
var MsdsItem = /** @class */ (function () {
    function MsdsItem() {
        this.file_data = [];
        this.file = [];
        this.file_json = new file_service_1.FileJson();
    }
    return MsdsItem;
}());
exports.MsdsItem = MsdsItem;
;
var MsdsEditPage = /** @class */ (function () {
    // smarteditText:string = '';
    function MsdsEditPage(connect, _modal, toast, user, noticeRange, date, alert) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.noticeRange = noticeRange;
        this.date = date;
        this.alert = alert;
        this.update_state = false;
        this.permission = {
            edit: false
        };
        this.validator = new connect_service_1.Validator(new MsdsItem()).validator;
        this.updateState = true;
        this.useMsds = false;
        this.form = new MsdsItem();
    }
    MsdsEditPage.prototype.ngOnInit = function () {
        if (this.user.userData.belong_data.company_contract_type === 'LH' || this.user.userData.belong_data.company_contract_type === '감리사') {
            this.form.project_id = 0;
        }
        this.getPermission();
        if (this.msds_id) {
            this.title = '상세';
            this.get();
        }
        else {
            this.update_state = true;
            this.form.project_id = this.user.userData.belong_data.project_id;
            this.form.company_name = this.user.userData.belong_data.company_name;
            this.form.user_name = this.user.userData.user_name;
            this.form.create_date = this.date.today();
            this.title = '등록';
        }
    };
    MsdsEditPage.prototype.getPermission = function () {
        var company_contract_type = this.user.userData.belong_data.company_contract_type;
        if (company_contract_type === '원청사'
            || company_contract_type === '협력사') {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
    };
    MsdsEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/board/msds/detail', {
                            msds_id: this.msds_id
                        }, { parse: ['file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            if (this.user.userData.user_id === this.form.create_user_id)
                                this.useMsds = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // public submit() {
    //   this.msdsText.update();
    //   if(this.form.msds_id) {
    //     this.update();
    //   } else {
    //     this.MsdsInsert();
    //   }
    // }
    MsdsEditPage.prototype.submit = function () {
        this.msdsText.update();
        if (this.form.msds_id)
            this.update();
        else
            this.MsdsInsert();
    };
    MsdsEditPage.prototype.MsdsInsert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.project_id)
                            return [2 /*return*/, this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' })];
                        if (!this.form.msds_type)
                            return [2 /*return*/, this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '등록 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.connect.run('/board/msds/insert', this.form)];
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
    MsdsEditPage.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.project_id)
                            return [2 /*return*/, this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' })];
                        if (!this.form.msds_type)
                            return [2 /*return*/, this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '수정 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.connect.run('/board/msds/update', this.form)];
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
    MsdsEditPage.prototype.Delete = function () {
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
                                                case 0: return [4 /*yield*/, this.connect.run('/board/msds/delete', {
                                                        msds_ids: [this.msds_id]
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
    MsdsEditPage.prototype.dismiss = function () {
        this._modal.dismiss();
    };
    MsdsEditPage.prototype.updateButton = function () {
        if (this.update_state)
            this.submit();
        else
            this.update_state = true;
    };
    __decorate([
        core_1.ViewChild('msdsText')
    ], MsdsEditPage.prototype, "msdsText");
    __decorate([
        core_1.Input()
    ], MsdsEditPage.prototype, "msds_id");
    MsdsEditPage = __decorate([
        core_1.Component({
            selector: 'app-msds-edit',
            templateUrl: './msds-edit.page.html',
            styleUrls: ['./msds-edit.page.scss']
        })
    ], MsdsEditPage);
    return MsdsEditPage;
}());
exports.MsdsEditPage = MsdsEditPage;
