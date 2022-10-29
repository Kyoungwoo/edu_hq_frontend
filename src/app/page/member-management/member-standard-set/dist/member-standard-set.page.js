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
exports.MemberStandardSetPage = void 0;
var core_1 = require("@angular/core");
var MemberStandardSetPage = /** @class */ (function () {
    function MemberStandardSetPage(connect, modal, toast, alert, user) {
        this.connect = connect;
        this.modal = modal;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.area1SelectCheck = false;
        this.hq_regional_id = 0;
        this.hq_business_id = 0;
        //정보 접근 비밀번호
        this.form = {
            company_id: this.user.userData.belong_data.company_id,
            company_password: ''
        };
        this.passwordMeassge = '';
        this.passchkck = true;
        this.subpasscheck = true;
        this.subpasswordMeassge = '';
        this.jobForm = {
            company_id: this.user.userData.belong_data.company_id,
            project_id: this.user.userData.belong_data.project_id
        };
        this.addPosition = [];
        this.selectList = [];
        //직위 관리 끝
        //안전직무
        this.safeJobForm = {
            company_id: this.user.userData.belong_data.company_id,
            user_type: 'COMPANY'
        };
        this.safeJobSelected = [];
        //안전직무 끝
        //직종
        this.occupationForm = this.user.userData.belong_data.company_id;
        this.occupationSelected = [];
        //직종 끝
        this.segmenet = 'LH조직관리';
        this.contractType = '';
        this.permission = {
            'LH조직관리': false,
            '정보접근비밀번호': false,
            '안전마일리지적립': false,
            '안전마일리지사용': false,
            '직위': false,
            '안전직무': false,
            '직종': false
        };
    }
    MemberStandardSetPage.prototype.ngOnInit = function () {
        this.getForm();
        this.segmentChange();
    };
    MemberStandardSetPage.prototype.segmentChange = function () {
        switch (this.segmenet) {
            case 'LH조직관리':
                this.level1();
                break;
            case '정보접근비밀번호':
                break;
            case '안전마일리지적립':
                break;
            case '안전마일리지사용':
                break;
            case '직위':
                this.getJobPosition();
                break;
            case '안전직무':
                this.getSafeJob();
                break;
            case '직종':
                this.getOccupation();
                break;
        }
    };
    MemberStandardSetPage.prototype.getForm = function () {
        var belong_data = this.user.userData.belong_data;
        this.contractType = belong_data.company_contract_type;
        if (this.contractType === 'LH') {
            this.segmenet = 'LH조직관리';
            this.permission.LH조직관리 = true;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = false;
            this.permission.안전마일리지사용 = false;
            this.permission.직위 = true;
            this.permission.안전직무 = false;
            this.permission.직종 = false;
        }
        else if (this.contractType === '감리사') {
            // 감리 접근 불가
            this.segmenet = '정보접근비밀번호';
            this.permission.LH조직관리 = false;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = false;
            this.permission.안전마일리지사용 = false;
            this.permission.직위 = false;
            this.permission.안전직무 = false;
            this.permission.직종 = false;
        }
        else if (this.contractType === '원청사' || this.contractType === '협력사') {
            this.segmenet = '정보접근비밀번호';
            this.permission.LH조직관리 = false;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = true;
            this.permission.안전마일리지사용 = true;
            this.permission.직위 = true;
            this.permission.안전직무 = true;
            this.permission.직종 = true;
        }
    };
    //-->  lh조직관리 시작
    //본부, 지역본부
    MemberStandardSetPage.prototype.level1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/organization/regional/get', {}, {})];
                    case 1:
                        _a.resLevel1 = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // //지역본부, 사업본부
    MemberStandardSetPage.prototype.level2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/organization/business/get', {
                                hq_regional_id: this.hq_regional_id
                            }, {})];
                    case 1:
                        _a.resLevel2 = _b.sent();
                        if (this.resLevel2.rsCode === 0) { }
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    MemberStandardSetPage.prototype.level3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/organization/department/get', {
                                hq_business_id: this.hq_business_id,
                                hq_regional_id: this.hq_regional_id
                            }, {})];
                    case 1:
                        _a.resLevel3 = _b.sent();
                        if (this.resLevel3.rsCode === 0) { }
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.level2In = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.hq_regional_id = item.hq_regional_id;
                        this.area1SelectList = item;
                        if (!item.hq_regional_id) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/organization/business/get', {
                                hq_regional_id: item.hq_regional_id
                            }, {})];
                    case 1:
                        _a.resLevel2 = _b.sent();
                        if (this.resLevel2.rsCode === 0) {
                            this.resLevel3 = null;
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.level3In = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.hq_business_id = item.hq_business_id;
                        this.area2SelectList = item;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/organization/department/get', {
                                hq_regional_id: item.hq_regional_id,
                                hq_business_id: item.hq_business_id
                            }, {})];
                    case 1:
                        _a.resLevel3 = _b.sent();
                        if (this.resLevel3.rsCode === 0) { }
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.radioChange = function (level) {
        console.log("asdfasdfa");
        switch (level) {
            case 'level1':
                this.resLevel1.rsMap.forEach(function (item) {
                    item.checked = false;
                });
                break;
            case 'level2':
                this.resLevel2.rsMap.forEach(function (item) {
                    item.checked = false;
                });
                break;
            case 'level3':
                this.resLevel3.rsMap.forEach(function (item) {
                    item.checked = false;
                });
                break;
        }
    };
    MemberStandardSetPage.prototype.levelAdd = function (level) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!(this.user.userData.user_role !== 'LH_HEAD')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '권한이 없습니다.', color: 'warning' })];
                    case 1: return [2 /*return*/, _f.sent()];
                    case 2:
                        _e = level;
                        switch (_e) {
                            case 'level1': return [3 /*break*/, 3];
                            case 'level2': return [3 /*break*/, 4];
                            case 'level3': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 12];
                    case 3:
                        this.resLevel1.rsMap.unshift({
                            hq_regional_entire_state: 0,
                            hq_regional_id: 0,
                            hq_regional_code: '',
                            hq_regional_name: '',
                            hq_regional_use_state: 0,
                            checked: false
                        });
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(!this.area1SelectList || !this.area1SelectList.hq_regional_id)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.present({ message: 'level1 항목을 선택해주세요.', color: 'warning' })];
                    case 5: return [2 /*return*/, _f.sent()];
                    case 6:
                        if ((_b = (_a = this.resLevel2) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            this.resLevel2.rsMap.unshift({
                                hq_business_name: '',
                                hq_business_entire_state: 0,
                                hq_business_use_state: 0,
                                hq_regional_id: 0,
                                hq_business_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        else {
                            this.resLevel2.rsMap = [];
                            this.resLevel2.rsMap.push({
                                hq_business_name: '',
                                hq_business_entire_state: 0,
                                hq_business_use_state: 0,
                                hq_regional_id: 0,
                                hq_business_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        _f.label = 7;
                    case 7: return [3 /*break*/, 12];
                    case 8:
                        if (!(!this.area2SelectList || !this.area2SelectList.hq_business_id)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toast.present({ message: 'level2 항목을 선택해주세요.', color: 'warning' })];
                    case 9: return [2 /*return*/, _f.sent()];
                    case 10:
                        if ((_d = (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.length) {
                            this.resLevel3.rsMap.unshift({
                                hq_department_use_state: 0,
                                hq_department_id: 0,
                                hq_department_name: '',
                                hq_regional_id: 0,
                                hq_department_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        else {
                            this.resLevel3.rsMap = [];
                            this.resLevel3.rsMap.push({
                                hq_department_use_state: 0,
                                hq_department_id: 0,
                                hq_department_name: '',
                                hq_regional_id: 0,
                                hq_department_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        _f.label = 11;
                    case 11: return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.levelUpdate = function (level) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_d) {
                // if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
                switch (level) {
                    case 'level1':
                        (_a = this.resLevel1) === null || _a === void 0 ? void 0 : _a.rsMap.forEach(function (item, i) {
                            if (_this.area1SelectList.hq_regional_id === item.hq_regional_id) {
                                item.checked = true;
                            }
                            else {
                                item.checked = false;
                            }
                        });
                        break;
                    case 'level2':
                        (_b = this.resLevel2) === null || _b === void 0 ? void 0 : _b.rsMap.forEach(function (item, i) {
                            if (_this.area2SelectList.hq_business_id === item.hq_business_id) {
                                item.checked = true;
                            }
                            else {
                                item.checked = false;
                            }
                        });
                        break;
                    case 'level3':
                        (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap.forEach(function (item, i) {
                            if (_this.area3SelectList.hq_department_id === item.hq_department_id) {
                                item.checked = true;
                            }
                            else {
                                item.checked = false;
                            }
                        });
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    MemberStandardSetPage.prototype.organizationSave = function (level) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.user.userData.user_role !== 'LH_HEAD')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '권한이 없습니다.', color: 'warning' })];
                    case 1: return [2 /*return*/, _d.sent()];
                    case 2:
                        switch (level) {
                            case 'level1':
                                (_a = this.resLevel1) === null || _a === void 0 ? void 0 : _a.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                    var res, toast, res, toast;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(item.hq_regional_id && item.checked)) return [3 /*break*/, 4];
                                                return [4 /*yield*/, this.connect.run('/project/organization/regional/update', item)];
                                            case 1:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, this.toast.present({ message: '수정 되었습니다.', color: 'primary' })];
                                            case 2:
                                                toast = _a.sent();
                                                this.level1();
                                                _a.label = 3;
                                            case 3: return [3 /*break*/, 7];
                                            case 4:
                                                if (!(!item.hq_regional_id && !item.checked)) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.connect.run('/project/organization/regional/insert', item)];
                                            case 5:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.toast.present({ message: '저장 되었습니다.', color: 'primary' })];
                                            case 6:
                                                toast = _a.sent();
                                                this.level1();
                                                _a.label = 7;
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                this.level1();
                                break;
                            case 'level2':
                                (_b = this.resLevel2) === null || _b === void 0 ? void 0 : _b.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                    var res, toast, res, toast;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(item.hq_business_id && item.checked)) return [3 /*break*/, 4];
                                                item.hq_regional_id = this.hq_regional_id;
                                                return [4 /*yield*/, this.connect.run('/project/organization/business/update', item)];
                                            case 1:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, this.toast.present({ message: '수정 되었습니다.', color: 'primary' })];
                                            case 2:
                                                toast = _a.sent();
                                                this.level2();
                                                _a.label = 3;
                                            case 3: return [3 /*break*/, 7];
                                            case 4:
                                                if (!(!item.hq_business_id && !item.checked)) return [3 /*break*/, 7];
                                                item.hq_regional_id = this.hq_regional_id;
                                                return [4 /*yield*/, this.connect.run('/project/organization/business/insert', item)];
                                            case 5:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.toast.present({ message: '저장 되었습니다.', color: 'primary' })];
                                            case 6:
                                                toast = _a.sent();
                                                this.level2();
                                                _a.label = 7;
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                break;
                            case 'level3':
                                (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                    var res, toast, res, toast;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(item.hq_department_id && item.checked)) return [3 /*break*/, 4];
                                                item.hq_business_id = this.hq_business_id;
                                                item.hq_regional_id = this.hq_regional_id;
                                                return [4 /*yield*/, this.connect.run('/project/organization/department/update', item)];
                                            case 1:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, this.toast.present({ message: '수정 되었습니다.', color: 'primary' })];
                                            case 2:
                                                toast = _a.sent();
                                                this.level3();
                                                _a.label = 3;
                                            case 3: return [3 /*break*/, 7];
                                            case 4:
                                                if (!(!item.hq_department_id && !item.checked)) return [3 /*break*/, 7];
                                                item.hq_business_id = this.hq_business_id;
                                                item.hq_regional_id = this.hq_regional_id;
                                                return [4 /*yield*/, this.connect.run('/project/organization/department/insert', item)];
                                            case 5:
                                                res = _a.sent();
                                                if (!(res.rsCode === 0)) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.toast.present({ message: '저장 되었습니다.', color: 'primary' })];
                                            case 6:
                                                toast = _a.sent();
                                                this.level3();
                                                _a.label = 7;
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //-->  lh조직관리 끝
    //-->  회원관리 비밀번호 시작
    MemberStandardSetPage.prototype.passwordCheck = function () {
        var _a;
        var rex = /^[0-9]{4,}$/;
        var regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (!rex.test(this.form.company_password) && ((_a = this.form.company_password) === null || _a === void 0 ? void 0 : _a.length)) {
            this.passchkck = false;
            this.passwordMeassge = '비밀번호 양식이 맞지 않습니다.';
        }
        else {
            this.passchkck = true;
        }
    };
    MemberStandardSetPage.prototype.subPasswordCheck = function () {
        if (this.form.company_password !== this.subpassword && this.form.company_password.length) {
            this.subpasscheck = false;
            this.subpasswordMeassge = '비밀번호가 일치 하지 않습니다.';
        }
        else {
            this.subpasscheck = true;
        }
    };
    MemberStandardSetPage.prototype.memberPasswordUdpate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.passchkck)
                            return [2 /*return*/, this.toast.present({ message: '비밀번호 양식이 맞지 않습니다.', color: 'warning' })];
                        if (this.form.company_password !== this.subpassword)
                            return [2 /*return*/, this.toast.present({ message: '비밀번호를 확인해 주세요.', color: "warning" })];
                        return [4 /*yield*/, this.connect.run('/project/company/pass/update', this.form, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ message: '비밀번호가 변경 되었습니다.', color: 'primary' });
                            this.form.company_password = null;
                            this.subpassword = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //-->  회원관리 비밀번호 끝
    //--> 직위 관리 시작
    MemberStandardSetPage.prototype.getJobPosition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/job_position/get', { company_id: this.jobForm.company_id })];
                    case 1:
                        _a.resJobPosition = _b.sent();
                        if (this.resJobPosition.rsCode === 0) {
                        }
                        else {
                            this.toast.present({ message: this.resJobPosition.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.addJobPosstion = function () {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!!this.jobForm.company_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _g.sent()];
                    case 2:
                        if ((_b = (_a = this.resJobPosition) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_d = (_c = this.resJobPosition) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.unshift({
                                ctgo_job_position_name_kr: '',
                                ctgo_job_position_use_state: 0,
                                ctgo_job_position_name_en: '',
                                company_id: this.jobForm.company_id,
                                ctgo_job_position_name_vi: '',
                                ctgo_job_position_id: 0,
                                ctgo_job_position_name_ch: ''
                            });
                        }
                        else {
                            this.resJobPosition.rsMap = [];
                            (_f = (_e = this.resJobPosition) === null || _e === void 0 ? void 0 : _e.rsMap) === null || _f === void 0 ? void 0 : _f.push({
                                ctgo_job_position_name_kr: '',
                                ctgo_job_position_use_state: 0,
                                ctgo_job_position_name_en: '',
                                company_id: this.jobForm.company_id,
                                ctgo_job_position_name_vi: '',
                                ctgo_job_position_id: 0,
                                ctgo_job_position_name_ch: ''
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.jobAddSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resJobPosition.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                    var res, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(item.ctgo_job_position_id === 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.connect.run('/project/job_position/insert', item, {})];
                            case 1:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resJobPosition.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.connect.run('/project/job_position/update', item, {})];
                            case 3:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    console.log("this.resJobPosition.rsMap.length", this.resJobPosition.rsMap.length);
                                    console.log("i", i + 1);
                                    if (this.resJobPosition.rsMap.length === (i + 1)) {
                                        console.log("sdfasdfasdf???");
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MemberStandardSetPage.prototype.state = function (state) {
        if (state) {
            for (var j = 0; j < this.resJobPosition.rsMap.length; j++) {
                this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resJobPosition.rsMap.length; j++) {
                this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 0;
            }
        }
    };
    MemberStandardSetPage.prototype.postionDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.selectList.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.alert.present({
                            message: '삭제 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var list;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            list = this.resJobPosition.rsMap;
                                            this.selectList.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(checkedItem.ctgo_job_position_id === 0)) return [3 /*break*/, 1];
                                                            list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.connect.run('/project/job_position/delete', {
                                                                company_id: checkedItem.company_id,
                                                                ctgo_job_position_id: checkedItem.ctgo_job_position_id
                                                            })];
                                                        case 2:
                                                            res = _a.sent();
                                                            if (res.rsCode === 0) {
                                                                this.getJobPosition();
                                                            }
                                                            ;
                                                            _a.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            this.selectList = [];
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 3:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.getSafeJob = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
                            this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
                        }
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/safe_job/get', this.safeJobForm)];
                    case 1:
                        _a.resSafeJob = _b.sent();
                        if (this.resSafeJob.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.addSafeJob = function () {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_g) {
                this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
                if (!this.safeJobForm.company_id)
                    return [2 /*return*/, this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' })];
                if (!this.safeJobForm.user_type)
                    return [2 /*return*/, this.toast.present({ message: '구분를 선택해 주세요.', color: 'warning' })];
                if ((_b = (_a = this.resSafeJob) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                    (_d = (_c = this.resSafeJob) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.unshift({
                        ctgo_safe_job_name_vi: '',
                        ctgo_safe_job_name_ch: '',
                        ctgo_safe_job_use_state: 0,
                        company_id: this.safeJobForm.company_id,
                        ctgo_safe_job_name_kr: '',
                        ctgo_safe_job_name_en: '',
                        ctgo_safe_job_id: 0,
                        ctgo_safe_job_role: '',
                        user_type: this.safeJobForm.user_type
                    });
                }
                else {
                    this.resSafeJob.rsMap = [];
                    (_f = (_e = this.resSafeJob) === null || _e === void 0 ? void 0 : _e.rsMap) === null || _f === void 0 ? void 0 : _f.push({
                        ctgo_safe_job_name_vi: '',
                        ctgo_safe_job_name_ch: '',
                        ctgo_safe_job_use_state: 0,
                        company_id: this.safeJobForm.company_id,
                        ctgo_safe_job_name_kr: '',
                        ctgo_safe_job_name_en: '',
                        ctgo_safe_job_id: 0,
                        ctgo_safe_job_role: '',
                        user_type: this.safeJobForm.user_type
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    MemberStandardSetPage.prototype.safeJobSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resSafeJob.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                    var res, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(item.ctgo_safe_job_id === 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.connect.run('/project/safe_job/insert', item, {})];
                            case 1:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resSafeJob.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.connect.run('/project/safe_job/update', item, {})];
                            case 3:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resSafeJob.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MemberStandardSetPage.prototype.safeState = function (state) {
        if (state) {
            for (var j = 0; j < this.resSafeJob.rsMap.length; j++) {
                this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resSafeJob.rsMap.length; j++) {
                this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 0;
            }
        }
    };
    MemberStandardSetPage.prototype.safeDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.safeJobSelected.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.alert.present({
                            message: '삭제 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var list;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            list = this.resSafeJob.rsMap;
                                            this.safeJobSelected.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(checkedItem.ctgo_safe_job_id === 0)) return [3 /*break*/, 1];
                                                            list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.connect.run('/project/safe_job/delete', {
                                                                company_id: checkedItem.company_id,
                                                                ctgo_safe_job_id: checkedItem.ctgo_safe_job_id
                                                            })];
                                                        case 2:
                                                            res = _a.sent();
                                                            if (res.rsCode === 0) {
                                                                this.getSafeJob();
                                                            }
                                                            ;
                                                            _a.label = 3;
                                                        case 3:
                                                            this.safeJobSelected = [];
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            this.getSafeJob();
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 3:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.getOccupation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
                            this.occupationForm = this.user.userData.belong_data.company_id;
                        }
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/occupation/get', { company_id: this.occupationForm })];
                    case 1:
                        _a.resOccupation = _b.sent();
                        if (this.resOccupation.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.addOccupation = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.occupationForm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _e.sent()];
                    case 2:
                        if ((_b = (_a = this.resOccupation) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_c = this.resOccupation) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                                ctgo_occupation_use_state: 0,
                                ctgo_occupation_id: 0,
                                company_id: this.occupationForm,
                                ctgo_occupation_role: 'BASIC',
                                ctgo_occupation_name_en: '',
                                ctgo_occupation_name_kr: '',
                                ctgo_occupation_name_ch: '',
                                ctgo_occupation_name_vi: ''
                            });
                        }
                        else {
                            this.resOccupation.rsMap = [];
                            (_d = this.resOccupation) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                                ctgo_occupation_use_state: 0,
                                ctgo_occupation_id: 0,
                                company_id: this.occupationForm,
                                ctgo_occupation_role: 'BASIC',
                                ctgo_occupation_name_en: '',
                                ctgo_occupation_name_kr: '',
                                ctgo_occupation_name_ch: '',
                                ctgo_occupation_name_vi: ''
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.occupationSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resOccupation.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                    var res, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(item.ctgo_occupation_id === 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.connect.run('/project/occupation/insert', item, {})];
                            case 1:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resOccupation.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.connect.run('/project/occupation/update', item, {})];
                            case 3:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resOccupation.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MemberStandardSetPage.prototype.deleteOccupation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.occupationSelected.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.alert.present({
                            message: '삭제 하시겠습니까?',
                            buttons: [
                                { text: '아니요' },
                                {
                                    text: '예',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var list;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            list = this.resOccupation.rsMap;
                                            this.occupationSelected.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(checkedItem.ctgo_occupation_id === 0)) return [3 /*break*/, 1];
                                                            list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.connect.run('/project/occupation/delete', {
                                                                company_id: checkedItem.company_id,
                                                                ctgo_occupation_id: checkedItem.ctgo_occupation_id
                                                            })];
                                                        case 2:
                                                            res = _a.sent();
                                                            if (res.rsCode === 0) {
                                                                this.getOccupation();
                                                            }
                                                            ;
                                                            _a.label = 3;
                                                        case 3:
                                                            this.occupationSelected = [];
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 3:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MemberStandardSetPage.prototype.occupationState = function (state) {
        if (state) {
            for (var j = 0; j < this.resOccupation.rsMap.length; j++) {
                this.resOccupation.rsMap[j].ctgo_occupation_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resOccupation.rsMap.length; j++) {
                this.resOccupation.rsMap[j].ctgo_occupation_use_state = 0;
            }
        }
    };
    MemberStandardSetPage = __decorate([
        core_1.Component({
            selector: 'app-member-standard-set',
            templateUrl: './member-standard-set.page.html',
            styleUrls: ['./member-standard-set.page.scss']
        })
    ], MemberStandardSetPage);
    return MemberStandardSetPage;
}());
exports.MemberStandardSetPage = MemberStandardSetPage;
