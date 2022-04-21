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
exports.AreaStandardSetPage = exports.SelectItem = exports.GPS_COORDINATE_DATA = exports.FileData = void 0;
var core_1 = require("@angular/core");
var naver_map_component_1 = require("src/app/basic/component/input/naver-map/naver-map.component");
var file_service_1 = require("src/app/basic/service/core/file.service");
var search_area_component_1 = require("src/app/component/modal/search-area/search-area.component");
var area_add_page_1 = require("../area-add/area-add.page");
var nfc_info_component_1 = require("./component/nfc-info/nfc-info.component");
var FileData = /** @class */ (function () {
    function FileData() {
        this.file = [];
        this.file_json = new file_service_1.FileJson();
        this.file_data = [];
    }
    return FileData;
}());
exports.FileData = FileData;
var GPS_COORDINATE_DATA = /** @class */ (function () {
    function GPS_COORDINATE_DATA() {
        this.gps_latitude = [];
        this.gps_longitude = [];
    }
    return GPS_COORDINATE_DATA;
}());
exports.GPS_COORDINATE_DATA = GPS_COORDINATE_DATA;
var SelectItem = /** @class */ (function () {
    function SelectItem() {
        this.gps_coordinate_data = new GPS_COORDINATE_DATA();
    }
    return SelectItem;
}());
exports.SelectItem = SelectItem;
var AreaStandardSetPage = /** @class */ (function () {
    function AreaStandardSetPage(modal, connect, toast, alert, user, changeRef) {
        this.modal = modal;
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.changeRef = changeRef;
        this.menuCount = 1;
        this.form = new FileData();
        this.AreaOneForm = {
            project_id: this.user.userData.belong_data.project_id
        };
        this.riskProjectForm = {
            limit_no: 0,
            project_id: this.user.userData.belong_data.project_id
        };
        this.selectDataArea1 = [];
        this.selectDataArea2 = [];
        this.selectDataArea3 = [];
        this.testtttt = 0;
        this.addRiskAreaArr = [];
        this.addRiskData = {
            area_middle_name: '',
            area_bottom_name: '',
            area_top_name: ''
        };
        this.riskAreaData = [];
        this.area_risk_use_state_data = [];
        this.gps_coordinate_data = new naver_map_component_1.GpsCoordinateData();
        this.selectedGPSItem = null;
        this.gpsselected = new SelectItem();
        this.naverMapSetting = true;
        this.areaRoleCheck = true;
        this.updateEdit = false;
    }
    AreaStandardSetPage.prototype.ngOnInit = function () {
        if (this.user.userData.user_role === 'MASTER_HEAD' ||
            this.user.userData.user_role === 'LH_ADMIN' ||
            this.user.userData.user_role === 'LH_HEAD') {
            this.areaRoleCheck = false;
        }
        this.getGuidemap();
        this.AreaOne();
        this.CtgoRisk();
    };
    AreaStandardSetPage.prototype.areaSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGuidemap()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.AreaOne()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.getGuidemap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/project/area/guidemap/get', { project_id: this.AreaOneForm.project_id }, {
                            parse: ['file_data']
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                        }
                        else {
                            this.form = null;
                            console.log("this.from", this.form);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.updateGuidemap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alert.present({
                    message: '저장 하시겠습니까?',
                    buttons: [
                        { text: '아니요' },
                        {
                            text: '예',
                            handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.form.project_id = this.AreaOneForm.project_id;
                                            return [4 /*yield*/, this.connect.run('/project/area/guidemap/update', this.form, {})];
                                        case 1:
                                            res = _a.sent();
                                            if (res.rsCode === 0) { }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        }
                    ]
                });
                return [2 /*return*/];
            });
        });
    };
    AreaStandardSetPage.prototype.AreaOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/top/get', this.AreaOneForm, {})];
                    case 1:
                        _a.resAreaOne = _b.sent();
                        if (this.resAreaOne.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.areaTow = function (area_top_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.area_top_id = area_top_id;
                        this.resAreaThree = null;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/middle/get', { area_top_id: area_top_id }, {})];
                    case 1:
                        _a.resAreaTwo = _b.sent();
                        if (this.resAreaTwo.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.areaThree = function (area_middle_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.area_middle_id = area_middle_id;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/bottom/get', {
                                area_middle_id: area_middle_id,
                                area_top_id: this.area_top_id
                            }, {})];
                    case 1:
                        _a.resAreaThree = _b.sent();
                        if (this.resAreaThree.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.areaOneEdit = function (area, update) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!update) return [3 /*break*/, 2];
                        if (!!this.selectDataArea1.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(this.selectDataArea1.length > 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!!this.AreaOneForm.project_id) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' })];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [4 /*yield*/, this.modal.create({
                            component: area_add_page_1.AreaAddPage,
                            componentProps: {
                                selectData: this.selectDataArea1[0],
                                project_id: this.AreaOneForm.project_id,
                                area: area
                            },
                            cssClass: 'lhOrganization'
                        })];
                    case 7:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 8:
                        data = (_a.sent()).data;
                        if (data) {
                            this.AreaOne();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.areaTwoEdit = function (area, update) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!update) return [3 /*break*/, 2];
                        if (!!this.selectDataArea2.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!this.area_top_id)
                            return [2 /*return*/, this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' })];
                        if (!(this.selectDataArea2.length > 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!!this.AreaOneForm.project_id) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' })];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [4 /*yield*/, this.modal.create({
                            component: area_add_page_1.AreaAddPage,
                            componentProps: {
                                area_top_id: this.area_top_id,
                                selectData: this.selectDataArea2[0],
                                project_id: this.AreaOneForm.project_id,
                                area: area
                            },
                            cssClass: 'lhOrganization'
                        })];
                    case 7:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 8:
                        data = (_a.sent()).data;
                        if (data) {
                            this.areaTow(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.areaThreeEdit = function (area, update) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!update) return [3 /*break*/, 2];
                        if (!!this.selectDataArea3.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.present({ message: '장소를 선택해 주세요' })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(this.selectDataArea3.length > 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.present({ message: '한 개만 선택해 주세요.' })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!!this.AreaOneForm.project_id) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.present({ message: '현장을 선택해 주세요.' })];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        if (!this.area_top_id)
                            return [2 /*return*/, this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' })];
                        if (!this.area_middle_id)
                            return [2 /*return*/, this.toast.present({ message: 'area2를 선택해주세요', color: 'warning' })];
                        return [4 /*yield*/, this.modal.create({
                                component: area_add_page_1.AreaAddPage,
                                componentProps: {
                                    area_middle_id: this.area_middle_id,
                                    selectData: this.selectDataArea3[0],
                                    area_top_id: this.area_top_id,
                                    area: area
                                },
                                cssClass: 'lhOrganization'
                            })];
                    case 7:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 8:
                        data = (_a.sent()).data;
                        if (data) {
                            this.areaThree(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.deleteArea = function (area) {
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
                                        var _a, i, res, i, res, i, res;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    _a = area;
                                                    switch (_a) {
                                                        case 1: return [3 /*break*/, 1];
                                                        case 2: return [3 /*break*/, 6];
                                                        case 3: return [3 /*break*/, 11];
                                                    }
                                                    return [3 /*break*/, 16];
                                                case 1:
                                                    i = 0;
                                                    _b.label = 2;
                                                case 2:
                                                    if (!(i < this.selectDataArea1.length)) return [3 /*break*/, 5];
                                                    return [4 /*yield*/, this.connect.run('/project/area/top/delete', {
                                                            area_top_id: this.selectDataArea1[i].area_top_id,
                                                            project_id: this.AreaOneForm.project_id
                                                        })];
                                                case 3:
                                                    res = _b.sent();
                                                    if (res.rsCode === 0) {
                                                        this.AreaOne();
                                                    }
                                                    ;
                                                    _b.label = 4;
                                                case 4:
                                                    i++;
                                                    return [3 /*break*/, 2];
                                                case 5: return [3 /*break*/, 16];
                                                case 6:
                                                    i = 0;
                                                    _b.label = 7;
                                                case 7:
                                                    if (!(i < this.selectDataArea2.length)) return [3 /*break*/, 10];
                                                    return [4 /*yield*/, this.connect.run('/project/area/middle/delete', {
                                                            area_middle_id: this.selectDataArea2[i].area_middle_id,
                                                            area_top_id: this.area_top_id
                                                        })];
                                                case 8:
                                                    res = _b.sent();
                                                    if (res.rsCode === 0) {
                                                        this.areaTow(this.area_top_id);
                                                    }
                                                    ;
                                                    _b.label = 9;
                                                case 9:
                                                    i++;
                                                    return [3 /*break*/, 7];
                                                case 10: return [3 /*break*/, 16];
                                                case 11:
                                                    i = 0;
                                                    _b.label = 12;
                                                case 12:
                                                    if (!(i < this.selectDataArea3.length)) return [3 /*break*/, 15];
                                                    return [4 /*yield*/, this.connect.run('/project/area/bottom/delete', {
                                                            area_top_id: this.area_top_id,
                                                            area_middle_id: this.area_middle_id,
                                                            area_bottom_id: this.selectDataArea3[i].area_bottom_id
                                                        })];
                                                case 13:
                                                    res = _b.sent();
                                                    if (res.rsCode === 0) {
                                                        this.areaThree(this.area_middle_id);
                                                    }
                                                    ;
                                                    _b.label = 14;
                                                case 14:
                                                    i++;
                                                    return [3 /*break*/, 12];
                                                case 15: return [3 /*break*/, 16];
                                                case 16: return [2 /*return*/];
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
    AreaStandardSetPage.prototype.getRiskArea = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.riskProjectForm.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.addRiskAreaArr = [];
                        this.riskProjectForm.limit_no = limit_no;
                        this.menuCount = 2;
                        this.updateEdit = true;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/risk/get', this.riskProjectForm)];
                    case 1:
                        _a.resRiskArea = _b.sent();
                        if (this.resRiskArea.rsCode === 0) {
                            setTimeout(function () {
                                _this.updateEdit = false;
                            }, 1000);
                        }
                        else {
                            if (!this.riskProjectForm.limit_no)
                                this.toast.present({ message: this.resRiskArea.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.addRiskArea = function () {
        var _a;
        if ((_a = this.resRiskArea) === null || _a === void 0 ? void 0 : _a.rsMap) {
            this.resRiskArea.rsMap.unshift({
                second_user_id: 0,
                area_risk_id: 0,
                area_middle_name: '',
                ctgo_area_risk_name: '',
                area_middle_id: 0,
                ctgo_area_risk_id: 0,
                area_risk_name: '',
                manager_user_id: 0,
                area_bottom_name: '',
                area_risk_type: '',
                nfc_state: 0,
                project_id: 0,
                area_top_id: 0,
                area_bottom_id: 0,
                area_risk_use_state: 0,
                area_top_name: '',
                gps_state: 0,
                row_count: 0
            });
        }
        else {
            this.resRiskArea.rsMap = [];
            this.resRiskArea.rsMap.push({
                second_user_id: 0,
                area_risk_id: 0,
                area_middle_name: '',
                ctgo_area_risk_name: '',
                area_middle_id: 0,
                ctgo_area_risk_id: 0,
                area_risk_name: '',
                manager_user_id: 0,
                area_bottom_name: '',
                area_risk_type: '',
                nfc_state: 0,
                project_id: 0,
                area_top_id: 0,
                area_bottom_id: 0,
                area_risk_use_state: 0,
                area_top_name: '',
                gps_state: 0,
                row_count: 0
            });
        }
    };
    AreaStandardSetPage.prototype.CtgoRisk = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/risk/type/get', {}, {})];
                    case 1:
                        _a.resCtgoRisk = _b.sent();
                        if (this.resCtgoRisk.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.riskSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var riskArea;
            var _this = this;
            return __generator(this, function (_a) {
                riskArea = this.resRiskArea.rsMap;
                riskArea.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                    var resInsert;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!item.area_top_id)
                                    return [2 /*return*/, this.toast.present({ message: '첫번째 장소를 선택해주세요.', color: 'warning' })];
                                item.area_middle_id = item.area_middle_id || 0;
                                item.area_bottom_id = item.area_middle_id || 0;
                                // if (!item.area_middle_id) return this.toast.present({ message: '두번째 장소를 선택해주세요.', color: 'warning' })
                                // if (!item.area_bottom_id) return this.toast.present({ message: '세번째 장소를 선택해주세요.', color: 'warning' })
                                if (!item.area_risk_name)
                                    return [2 /*return*/, this.toast.present({ message: '위험지역명을 작성해주세요.', color: 'warning' })];
                                if (!item.area_risk_type)
                                    return [2 /*return*/, this.toast.present({ message: '실내/실외를 선택해주세요.', color: 'warning' })
                                        // if (!item.manager_user_id) return this.toast.present({ message: '관리 책임자(정(을 선택해주세요.', color: 'warning' })
                                        // if (!item.second_user_id) return this.toast.present({ message: '관리 책임자(부)를 선택해주세요.', color: 'warning' })
                                    ];
                                if (!!item.area_risk_id) return [3 /*break*/, 2];
                                item.project_id = this.riskProjectForm.project_id;
                                return [4 /*yield*/, this.connect.run('/project/risk_area/insert', item)];
                            case 1:
                                resInsert = _a.sent();
                                if (resInsert.rsCode === 0) {
                                    this.getRiskArea();
                                    if (this.addRiskAreaArr.length === i) {
                                        this.toast.present({ message: '저장되었습니다.', color: 'primary' });
                                    }
                                }
                                else {
                                    this.toast.present({ message: resInsert.rsMsg, color: 'warning' });
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AreaStandardSetPage.prototype.nfcView = function (area_risk_id) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!area_risk_id)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.modal.create({
                                component: nfc_info_component_1.NfcInfoComponent,
                                componentProps: { area_risk_id: area_risk_id },
                                cssClass: 'lhOrganization'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.riskAreaSearch = function (item) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, riskArea, i;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log(item);
                        if (item.area_risk_id)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.modal.create({
                                component: search_area_component_1.SearchAreaComponent,
                                componentProps: {
                                    project_id: this.riskProjectForm.project_id
                                }
                            })];
                    case 1:
                        modal = _e.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_e.sent()).data;
                        if (data) {
                            riskArea = this.resRiskArea.rsMap;
                            for (i = 0; i < riskArea.length; i++) {
                                if (!riskArea[i].area_risk_id) {
                                    item.area_top_id = data === null || data === void 0 ? void 0 : data.area1selectedItem.area_top_id;
                                    item.area_middle_id = (_a = data === null || data === void 0 ? void 0 : data.area2selectedItem) === null || _a === void 0 ? void 0 : _a.area_middle_id;
                                    item.area_bottom_id = (_b = data === null || data === void 0 ? void 0 : data.area3selectedItem) === null || _b === void 0 ? void 0 : _b.area_bottom_id;
                                    item.area_top_name = data === null || data === void 0 ? void 0 : data.area1selectedItem.area_top_name;
                                    item.area_middle_name = (_c = data === null || data === void 0 ? void 0 : data.area2selectedItem) === null || _c === void 0 ? void 0 : _c.area_middle_name;
                                    item.area_bottom_name = (_d = data === null || data === void 0 ? void 0 : data.area3selectedItem) === null || _d === void 0 ? void 0 : _d.area_bottom_name;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.deleteRisk = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.riskAreaData.length)
                            return [2 /*return*/, this.toast.present({ message: '최소 1개이상 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.alert.present({
                                message: '삭제 하시겠습니까?',
                                buttons: [
                                    { text: '아니요' },
                                    {
                                        text: '예',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                this.riskAreaData.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                                    var res, list;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!item.area_risk_id) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, this.connect.run('/project/risk_area/delete', {
                                                                        area_risk_id: item.area_risk_id,
                                                                        project_id: this.riskProjectForm.project_id
                                                                    })];
                                                            case 1:
                                                                res = _a.sent();
                                                                if (res.rsCode === 0) {
                                                                    if (this.riskAreaData.length === i) {
                                                                        this.toast.present({ message: '삭제 되었습니다.', color: 'primary' });
                                                                    }
                                                                    this.getRiskArea();
                                                                }
                                                                else {
                                                                    this.toast.present({ message: res.rsMsg, color: 'warning' });
                                                                }
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                list = this.resRiskArea.rsMap;
                                                                list.splice(list.findIndex(function (data) { return data === item; }), 1);
                                                                _a.label = 3;
                                                            case 3: return [2 /*return*/];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.allStatus = function (status) {
        console.log(status);
        this.resRiskArea.rsMap.forEach(function (item) {
            item.area_risk_use_state = status ? 1 : 0;
        });
    };
    AreaStandardSetPage.prototype.editState = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.area_risk_use_state_data.push({
                    area_risk_id: item.area_risk_id,
                    area_risk_use_state: item.area_risk_use_state
                });
                return [2 /*return*/];
            });
        });
    };
    AreaStandardSetPage.prototype.areaGPS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.menuCount = 3;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/risk/gps/get', this.riskProjectForm)];
                    case 1:
                        _a.resGPS = _b.sent();
                        if (this.resGPS.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.getGpsCoodrinate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, gps_coordinate_data_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.gpsselected = item;
                        this.naverMapSetting = false;
                        if (!item.gps_id)
                            return [2 /*return*/, this.toast.present({ message: '위험지역을 설정해 주세요.', color: 'warning' })];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/project/area/risk/gps_coodrinate/get', { gps_id: item.gps_id })];
                    case 1:
                        _a.resGPScood = _b.sent();
                        if (this.resGPScood.rsCode === 0) {
                            gps_coordinate_data_1 = new naver_map_component_1.GpsCoordinateData();
                            this.resGPScood.rsMap.forEach(function (data) {
                                if (item.gps_id === data.gps_id) {
                                    gps_coordinate_data_1.gps_latitude.push(data.gps_latitude);
                                    gps_coordinate_data_1.gps_longitude.push(data.gps_longitude);
                                }
                            });
                            this.gps_coordinate_data = gps_coordinate_data_1;
                        }
                        else {
                            this.gps_coordinate_data = new naver_map_component_1.GpsCoordinateData();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.gpsSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gpsselected.gps_id) return [3 /*break*/, 2];
                        if (!this.gpsselected.area_risk_id)
                            return [2 /*return*/, this.toast.present({ message: '위험지역을 선택해주세요.', color: 'warning' })];
                        this.gpsselected.gps_coordinate_data = this.gps_coordinate_data;
                        console.log(this.gpsselected);
                        return [4 /*yield*/, this.connect.run('/project/area/risk/gps/insert', this.gpsselected, {})];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ message: '등록되었습니다.', color: 'primary' });
                        }
                        else {
                            this.toast.present({ message: res.rsMsg, color: 'warning' });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage.prototype.updateState = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var area_risk_use_state_data, resUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.updateEdit)
                            return [2 /*return*/]; // 업데이트 권한? 나중에 확인
                        if (!item.area_risk_id)
                            return [2 /*return*/]; // 신규 등록일 시, id가 없으면 업데이트를 하면 안됨.
                        area_risk_use_state_data = [];
                        area_risk_use_state_data.push({
                            area_risk_id: item.area_risk_id,
                            area_risk_use_state: item.area_risk_use_state
                        });
                        return [4 /*yield*/, this.connect.run('/project/area/risk/use/update', { area_risk_use_state_data: area_risk_use_state_data })];
                    case 1:
                        resUpdate = _a.sent();
                        if (resUpdate.rsCode === 0) {
                            this.getRiskArea();
                            this.toast.present({ message: '저장되었습니다.', color: 'primary' });
                        }
                        else {
                            this.toast.present({ message: resUpdate.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaStandardSetPage = __decorate([
        core_1.Component({
            selector: 'app-area-standard-set',
            templateUrl: './area-standard-set.page.html',
            styleUrls: ['./area-standard-set.page.scss']
        })
    ], AreaStandardSetPage);
    return AreaStandardSetPage;
}());
exports.AreaStandardSetPage = AreaStandardSetPage;
