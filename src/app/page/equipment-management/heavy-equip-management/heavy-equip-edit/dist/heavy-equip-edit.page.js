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
exports.HeavyEquipEditPage = exports.HeavyEquipDetail = void 0;
var core_1 = require("@angular/core");
var file_service_1 = require("src/app/basic/service/core/file.service");
var HeavyEquipDetail = /** @class */ (function () {
    function HeavyEquipDetail() {
        this.machinery_file = [];
        this.machinery_json = new file_service_1.FileJson();
        this.plan_file_data = [];
        this.regist_file_data = [];
        this.rental_file_data = [];
        this.etc_file_data = [];
        this.plan_file = [];
        this.regist_file = [];
        this.rental_file = [];
        this.etc_file = [];
        this.plan_json = new file_service_1.FileJson();
        this.regist_json = new file_service_1.FileJson();
        this.rental_json = new file_service_1.FileJson();
        this.etc_json = new file_service_1.FileJson();
    }
    return HeavyEquipDetail;
}());
exports.HeavyEquipDetail = HeavyEquipDetail;
var HeavyEquipEditPage = /** @class */ (function () {
    function HeavyEquipEditPage(connect, alert, date, toast, user, _modal) {
        this.connect = connect;
        this.alert = alert;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this._modal = _modal;
        this.updateStatus = false;
        this.form = new HeavyEquipDetail();
        this.selectList = [];
    }
    HeavyEquipEditPage.prototype.ngOnInit = function () {
        console.log(this.list_data);
        this.form = __assign(__assign({}, this.form), this.list_data);
        if (this.machinery_id) {
            this.updateStatus = true;
            this.get();
        }
        else {
            this.updateStatus = false;
        }
    };
    HeavyEquipEditPage.prototype.SetListData = function () {
        this.form.project_id = this.list_data.project_id;
        this.form.master_company_id = this.list_data.master_company_id;
        this.form.partner_company_id = this.list_data.partner_company_id;
    };
    HeavyEquipEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/machinery/get', {
                            machinery_id: this.machinery_id
                        }, { loading: true, parse: ['etc_file_data', 'rental_file_data', 'regist_file_data', 'plan_file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HeavyEquipEditPage.prototype.Heavyedit = function () {
        this.updateStatus = false;
    };
    HeavyEquipEditPage.prototype.Heavydelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.present({
                            message: '선택된 장비 정보가 모두 삭제됩니다. 정말 삭제 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.connect.run('/machinery/delete', {
                                                        machinery_ids: [this.machinery_id]
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
    HeavyEquipEditPage.prototype.Heavysave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UpdateValidation()];
                    case 1:
                        state = _a.sent();
                        if (state)
                            return [2 /*return*/];
                        this.alert.present({
                            message: '저장하시겠습니까?',
                            buttons: [
                                { text: '아니오' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.TransFileData()];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.connect.run('/machinery/insert', this.form, {})];
                                                case 2:
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
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HeavyEquipEditPage.prototype.Heavyupdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UpdateValidation()];
                    case 1:
                        state = _a.sent();
                        if (state)
                            return [2 /*return*/];
                        this.alert.present({
                            message: '수정 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.TransFileData()];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.connect.run('/machinery/update', this.form)];
                                                case 2:
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
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HeavyEquipEditPage.prototype.UpdateValidation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = false;
                if (!this.form.project_id) {
                    state = true;
                    this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
                }
                if (!this.form.partner_company_id) {
                    state = true;
                    this.toast.present({ message: '업체명을 입력해주세요.', color: 'warning' });
                }
                if (!this.form.ctgo_machinery_id) {
                    state = true;
                    this.toast.present({ message: '중장비를 입력해주세요.', color: 'warning' });
                }
                if (!this.form.machinery_regist_no) {
                    state = true;
                    this.toast.present({ message: '등록번호를 입력해주세요.', color: 'warning' });
                }
                if (!this.form.ctgo_construction_id) {
                    state = true;
                    this.toast.present({ message: '공종을 입력해주세요.', color: 'warning' });
                }
                if (!this.form.rental_company_name) {
                    state = true;
                    this.toast.present({ message: '대여업체를 입력해주세요.', color: 'warning' });
                }
                if (!this.form.rental_start_date) {
                    state = true;
                    this.toast.present({ message: '보증기간을 입력해주세요.', color: 'warning' });
                }
                if (!this.form.rental_end_date) {
                    state = true;
                    this.toast.present({ message: '보증기간을 입력해주세요.', color: 'warning' });
                }
                if (!this.form.rental_price) {
                    state = true;
                    this.toast.present({ message: '보증금액을 입력해주세요.', color: 'warning' });
                }
                return [2 /*return*/, state];
            });
        });
    };
    /**
     * @function TransFileData(): 4개의 파일을 통합해줍니다.
     */
    HeavyEquipEditPage.prototype.TransFileData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 초기화
                        this.form.machinery_json.insert = [];
                        return [4 /*yield*/, this.form.plan_file.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_file.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.form.plan_json.insert.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json.insert.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.form.plan_json["delete"].forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json["delete"].push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.form.regist_file.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_file.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.form.regist_json.insert.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json.insert.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.form.regist_json["delete"].forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json["delete"].push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.form.rental_file.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_file.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.form.rental_json.insert.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json.insert.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.form.rental_json["delete"].forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json["delete"].push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.form.etc_file.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_file.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.form.etc_json.insert.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json.insert.push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.form.etc_json["delete"].forEach(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.form.machinery_json["delete"].push(item)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            }); }); })];
                    case 12:
                        _a.sent();
                        this.form.machinery_json.insert.forEach(function (item, index) { item.order_no = index + 1; });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function btnPromise(): 권한에 따른 버튼활성화 메서드
     * @param type - 버튼의 type
     * @returns true or false
     */
    HeavyEquipEditPage.prototype.btnPromise = function (type) {
        var state = false;
        switch (type) {
            case 'save':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY' || this.user.userData.user_id == this.form.create_user_id)
                    state = true;
                break;
            case 'delete':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || this.user.userData.user_id == this.form.create_user_id)
                    state = true;
                break;
        }
        return state;
    };
    __decorate([
        core_1.Input()
    ], HeavyEquipEditPage.prototype, "machinery_id");
    __decorate([
        core_1.Input()
    ], HeavyEquipEditPage.prototype, "list_data");
    HeavyEquipEditPage = __decorate([
        core_1.Component({
            selector: 'app-heavy-equip-edit',
            templateUrl: './heavy-equip-edit.page.html',
            styleUrls: ['./heavy-equip-edit.page.scss']
        })
    ], HeavyEquipEditPage);
    return HeavyEquipEditPage;
}());
exports.HeavyEquipEditPage = HeavyEquipEditPage;
// plan_file_data: FutItem[] = [];
// regist_file_data: FutItem[] = [];
// rental_file_data: FutItem[] = [];
// etc_file_data: FutItem[] = [];
// plan_file: (File | Blob)[] = [];
// regist_file: (File | Blob)[] = [];
// rental_file: (File | Blob)[] = [];
// etc_file: (File | Blob)[] = [];
// plan_json : FileJson = new FileJson();
// regist_json : FileJson = new FileJson();
// rental_json : FileJson = new FileJson();
// etc_json : FileJson = new FileJson();
