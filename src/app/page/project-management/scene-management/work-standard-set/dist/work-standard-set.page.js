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
exports.WorkStandardSetPage = void 0;
var core_1 = require("@angular/core");
var WorkStandardSetPage = /** @class */ (function () {
    //재해 형태 끝
    function WorkStandardSetPage(connect, toast, alert, user, promise) {
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.promise = promise;
        this.segment = 1;
        //공종 시작
        this.constructionForm = {
            project_id: null,
            master_company_id: null
        };
        this.constructionSelected = [];
        //공종 끝
        //건설기계
        this.machineryFrom = this.user.userData.belong_data.company_id;
        this.selectedMachinery = [];
        //건설기계 끝
        //특수 공도구
        this.toolForm = {
            company_id: this.user.userData.belong_data.company_id,
            project_id: this.user.userData.belong_data.project_id
        };
        this.slectedTool = [];
        //특수 공도구 끝
        //회의록 현의사항
        this.meetingForm = {
            company_id: 0,
            project_id: 0
        };
        //회의록 현의사항 끝
        //재해 형태
        this.disasterForm = this.user.userData.belong_data.company_id;
        this.disasterSelected = [];
        this.workRoleCheck = true;
        this.editable = false;
    }
    WorkStandardSetPage.prototype.ngOnInit = function () {
        if (this.user.userData.user_role === 'MASTER_HEAD' ||
            this.user.userData.user_role === 'LH_ADMIN' ||
            this.user.userData.user_role === 'LH_HEAD') {
            this.workRoleCheck = false;
            this.editable = true;
        }
        this.segmentChange();
    };
    WorkStandardSetPage.prototype.segmentChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.segment;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 3];
                            case 3: return [3 /*break*/, 4];
                            case 4: return [3 /*break*/, 5];
                            case 5: return [3 /*break*/, 6];
                            case 6: return [3 /*break*/, 7];
                            case 7: return [3 /*break*/, 8];
                            case 8: return [3 /*break*/, 9];
                            case 9: return [3 /*break*/, 10];
                            case 10: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 12];
                    case 1: return [4 /*yield*/, this.getConstructionForm()];
                    case 2:
                        _b.sent();
                        this.getConstruction();
                        return [3 /*break*/, 12];
                    case 3: // 2차 개발
                    return [3 /*break*/, 12];
                    case 4: // 2차 개발
                    return [3 /*break*/, 12];
                    case 5: // 2차 개발
                    return [3 /*break*/, 12];
                    case 6:
                        this.getMachinery();
                        return [3 /*break*/, 12];
                    case 7:
                        this.getTool();
                        return [3 /*break*/, 12];
                    case 8: // 2차 개발
                    return [3 /*break*/, 12];
                    case 9:
                        this.getMeeting();
                        return [3 /*break*/, 12];
                    case 10:
                        this.getDisaster();
                        return [3 /*break*/, 12];
                    case 11: // 2차 개발
                    return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.getConstructionForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var belong_data, res, contractor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        belong_data = this.user.userData.belong_data;
                        this.constructionForm.project_id = belong_data.project_id;
                        if (!(belong_data.company_contract_type === '원청사')) return [3 /*break*/, 1];
                        this.constructionForm.master_company_id = belong_data.company_id;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(belong_data.company_contract_type === '협력사')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connect.run('/category/certify/search_my_master_company/get', {
                                project_id: this.constructionForm.project_id,
                                search_text: ''
                            })];
                    case 2:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            contractor = res.rsMap[0];
                            this.constructionForm.master_company_id = contractor.master_company_id;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //공종 시작
    WorkStandardSetPage.prototype.getConstruction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.constructionForm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' })];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/construction/get', this.constructionForm)];
                    case 3:
                        _a.resConstruction = _b.sent();
                        if (this.resConstruction.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.constructionAdd = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.constructionForm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' })];
                    case 1: return [2 /*return*/, _e.sent()];
                    case 2:
                        if ((_b = (_a = this.resConstruction) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_c = this.resConstruction) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                                ctgo_construction_id: 0,
                                ctgo_construction_name: '',
                                project_id: this.constructionForm.project_id,
                                ctgo_construction_use_state: 0 // 1 사용 / 0 미사용
                            });
                        }
                        else {
                            this.resConstruction.rsMap = [];
                            (_d = this.resConstruction) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                                ctgo_construction_id: 0,
                                ctgo_construction_name: '',
                                project_id: this.constructionForm.project_id,
                                ctgo_construction_use_state: 0 // 1 사용 / 0 미사용
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.constructionSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resConstruction.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                    var res, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(item.ctgo_construction_id === 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.connect.run('/project/construction/insert', item, {})];
                            case 1:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resConstruction.rsMap.length === (i + 1)) {
                                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                    }
                                }
                                ;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.connect.run('/project/construction/update', item, {})];
                            case 3:
                                res = _a.sent();
                                if (res.rsCode === 0) {
                                    if (this.resConstruction.rsMap.length === (i + 1)) {
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
    WorkStandardSetPage.prototype.constructionState = function (state) {
        if (state) {
            for (var j = 0; j < this.resConstruction.rsMap.length; j++) {
                this.resConstruction.rsMap[j].ctgo_construction_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resConstruction.rsMap.length; j++) {
                this.resConstruction.rsMap[j].ctgo_construction_use_state = 0;
            }
        }
    };
    WorkStandardSetPage.prototype.constructionDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.constructionSelected.length) return [3 /*break*/, 2];
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
                                        return __generator(this, function (_a) {
                                            list = this.resConstruction.rsMap;
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
    //공종 끝
    //건설기계
    WorkStandardSetPage.prototype.getMachinery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.promise.wait(function () { return _this.machineryFrom; })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/machinery/get', { company_id: this.machineryFrom })];
                    case 2:
                        _a.resMachinery = _b.sent();
                        if (this.resMachinery.rsCode === 0) {
                            this.resMachinery.rsMap.forEach(function (item) {
                                item.ctgo_machinery_doc_state ? item.ctgo_machinery_doc = true : item.ctgo_machinery_doc = false;
                            });
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.machineryAdd = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.machineryFrom) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' })];
                    case 1: return [2 /*return*/, _e.sent()];
                    case 2:
                        if ((_b = (_a = this.resMachinery) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_c = this.resMachinery) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                                ctgo_machinery_id: 0,
                                company_id: this.machineryFrom,
                                ctgo_machinery_name: '',
                                ctgo_machinery_doc_state: 0,
                                ctgo_machinery_use_state: 0,
                                ctgo_machinery_doc: false
                            });
                        }
                        else {
                            this.resMachinery.rsMap = [];
                            (_d = this.resMachinery) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                                ctgo_machinery_id: 0,
                                company_id: this.machineryFrom,
                                ctgo_machinery_name: '',
                                ctgo_machinery_doc_state: 0,
                                ctgo_machinery_use_state: 0,
                                ctgo_machinery_doc: false
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.machineryDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filteritem, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.selectedMachinery);
                        filteritem = this.selectedMachinery.filter(function (item) { return _this.selectedMachinery.indexOf(item); });
                        if (!filteritem.length)
                            return [2 /*return*/, this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '삭제 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    {
                                        text: '예',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var list;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                list = this.resMachinery.rsMap;
                                                this.selectedMachinery.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                    var res;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(checkedItem.ctgo_machinery_id === 0)) return [3 /*break*/, 1];
                                                                list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                                return [3 /*break*/, 3];
                                                            case 1: return [4 /*yield*/, this.connect.run('/project/machinery/delete', {
                                                                    company_id: checkedItem.company_id,
                                                                    ctgo_machinery_id: checkedItem.ctgo_machinery_id
                                                                })];
                                                            case 2:
                                                                res = _a.sent();
                                                                if (res.rsCode === 0) {
                                                                    this.getMachinery();
                                                                }
                                                                ;
                                                                _a.label = 3;
                                                            case 3:
                                                                this.selectedMachinery = [];
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
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.machineryState = function (state) {
        if (state) {
            for (var j = 0; j < this.resMachinery.rsMap.length; j++) {
                this.resMachinery.rsMap[j].ctgo_machinery_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resMachinery.rsMap.length; j++) {
                this.resMachinery.rsMap[j].ctgo_machinery_use_state = 0;
            }
        }
    };
    WorkStandardSetPage.prototype.machinerySave = function () {
        var _this = this;
        this.resMachinery.rsMap.forEach(function (item) {
            item.ctgo_machinery_doc_state ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
        });
        this.resMachinery.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
            var res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.ctgo_machinery_id === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect.run('/project/machinery/insert', item, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            item.ctgo_machinery_doc ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
                            if (this.resMachinery.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.connect.run('/project/machinery/update', item, {})];
                    case 3:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            item.ctgo_machinery_doc ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
                            if (this.resMachinery.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    //건설기계끝
    //특수 공도구
    WorkStandardSetPage.prototype.getTool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.promise.wait(function () { return _this.toolForm; })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/tool/get', this.toolForm, {})];
                    case 2:
                        _a.resTool = _b.sent();
                        if (this.resTool.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.toolAdd = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.toolForm.project_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' })];
                    case 1: return [2 /*return*/, _e.sent()];
                    case 2:
                        if (!!this.toolForm.company_id) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.present({ message: '업체를 선택해주세요.', color: 'danger' })];
                    case 3: return [2 /*return*/, _e.sent()];
                    case 4:
                        if ((_b = (_a = this.resTool) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_c = this.resTool) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                                ctgo_tool_id: 0,
                                company_id: this.toolForm.company_id,
                                project_id: this.toolForm.project_id,
                                ctgo_tool_name: '',
                                ctgo_tool_use_state: 0
                            });
                        }
                        else {
                            this.resTool.rsMap = [];
                            (_d = this.resTool) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                                ctgo_tool_id: 0,
                                company_id: this.toolForm.company_id,
                                project_id: this.toolForm.project_id,
                                ctgo_tool_name: '',
                                ctgo_tool_use_state: 0
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.toolDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.slectedTool.length) return [3 /*break*/, 2];
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
                                            list = this.resTool.rsMap;
                                            this.slectedTool.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(checkedItem.ctgo_tool_id === 0)) return [3 /*break*/, 1];
                                                            list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.connect.run('/project/tool/delete', {
                                                                company_id: checkedItem.company_id,
                                                                ctgo_tool_id: checkedItem.ctgo_tool_id,
                                                                project_id: checkedItem.project_id
                                                            })];
                                                        case 2:
                                                            res = _a.sent();
                                                            if (res.rsCode === 0) {
                                                                this.getTool();
                                                            }
                                                            ;
                                                            _a.label = 3;
                                                        case 3:
                                                            this.slectedTool = [];
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
    WorkStandardSetPage.prototype.toolSave = function () {
        var _this = this;
        this.resTool.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
            var res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.ctgo_tool_id === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect.run('/project/tool/insert', item, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            if (this.resTool.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.connect.run('/project/tool/update', item, {})];
                    case 3:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            if (this.resTool.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    WorkStandardSetPage.prototype.toolState = function (state) {
        if (state) {
            for (var j = 0; j < this.resTool.rsMap.length; j++) {
                this.resTool.rsMap[j].ctgo_tool_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resTool.rsMap.length; j++) {
                this.resTool.rsMap[j].ctgo_tool_use_state = 0;
            }
        }
    };
    //특수 공도구 끝
    //회의록 협의체
    WorkStandardSetPage.prototype.getMeeting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.promise.wait(function () { return _this.meetingForm.project_id = _this.user.userData.belong_data.project_id; })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.promise.wait(function () { return _this.meetingForm.company_id = _this.user.userData.belong_data.company_id; })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.connect.run('/project/safety_meeting/get', this.meetingForm, {})];
                    case 3:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.resMeeting = __assign(__assign({}, res), this.resMeeting);
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.meetingUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/project/safety_meeting/update', this.resMeeting.rsObj, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //회의록 협의체 끝
    //재해형태
    WorkStandardSetPage.prototype.getDisaster = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/disaster/get', { company_id: this.disasterForm }, {})];
                    case 1:
                        _a.resDisaster = _b.sent();
                        if (this.resDisaster.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.disasterAdd = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.disasterForm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' })];
                    case 1: return [2 /*return*/, _e.sent()];
                    case 2:
                        if ((_b = (_a = this.resDisaster) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            (_c = this.resDisaster) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                                ctgo_disaster_name: '',
                                ctgo_disaster_use_state: 0,
                                company_id: this.disasterForm,
                                default_state: 0,
                                ctgo_disaster_id: 0
                            });
                        }
                        else {
                            this.resDisaster.rsMap = [];
                            (_d = this.resDisaster) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                                ctgo_disaster_name: '',
                                ctgo_disaster_use_state: 0,
                                company_id: this.disasterForm,
                                default_state: 0,
                                ctgo_disaster_id: 0
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkStandardSetPage.prototype.disasterState = function (state) {
        if (state) {
            for (var j = 0; j < this.resDisaster.rsMap.length; j++) {
                this.resDisaster.rsMap[j].ctgo_disaster_use_state = 1;
            }
        }
        else {
            for (var j = 0; j < this.resDisaster.rsMap.length; j++) {
                this.resDisaster.rsMap[j].ctgo_disaster_use_state = 0;
            }
        }
    };
    WorkStandardSetPage.prototype.disasterDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.disasterSelected.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '최소 1개 이상 선택해주세요.' })];
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
                                            list = this.resDisaster.rsMap;
                                            this.disasterSelected.forEach(function (checkedItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(checkedItem.ctgo_disaster_id === 0)) return [3 /*break*/, 1];
                                                            list.splice(list.findIndex(function (item) { return item === checkedItem; }), 1);
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.connect.run('/project/disaster/delete', {
                                                                company_id: checkedItem.company_id,
                                                                ctgo_disaster_id: checkedItem.ctgo_disaster_id
                                                            })];
                                                        case 2:
                                                            res = _a.sent();
                                                            if (res.rsCode === 0) {
                                                                this.getDisaster();
                                                            }
                                                            ;
                                                            _a.label = 3;
                                                        case 3:
                                                            this.disasterSelected = [];
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
    WorkStandardSetPage.prototype.disasterSave = function () {
        var _this = this;
        this.resDisaster.rsMap.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
            var res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.ctgo_disaster_id === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect.run('/project/disaster/insert', item, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            if (this.resDisaster.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.connect.run('/project/disaster/update', item, {})];
                    case 3:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            if (this.resDisaster.rsMap.length === (i + 1)) {
                                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                            }
                        }
                        ;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    WorkStandardSetPage = __decorate([
        core_1.Component({
            selector: 'app-work-standard-set',
            templateUrl: './work-standard-set.page.html',
            styleUrls: ['./work-standard-set.page.scss']
        })
    ], WorkStandardSetPage);
    return WorkStandardSetPage;
}());
exports.WorkStandardSetPage = WorkStandardSetPage;
