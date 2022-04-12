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
exports.SafetyEducationHistoryDetailPage = exports.RoutineItem = exports.HireItem = exports.HistoryItem = void 0;
var core_1 = require("@angular/core");
var HistoryItem = /** @class */ (function () {
    function HistoryItem() {
        this.user_profile_file_data = [];
    }
    return HistoryItem;
}());
exports.HistoryItem = HistoryItem;
var HireItem = /** @class */ (function () {
    function HireItem() {
    }
    return HireItem;
}());
exports.HireItem = HireItem;
var RoutineItem = /** @class */ (function () {
    function RoutineItem() {
    }
    return RoutineItem;
}());
exports.RoutineItem = RoutineItem;
var SafetyEducationHistoryDetailPage = /** @class */ (function () {
    function SafetyEducationHistoryDetailPage(connect, toast) {
        this.connect = connect;
        this.toast = toast;
        this.menuCount = 1;
        this.useForm = {
            attendant_user_id: 0,
            limit_no: 0,
            search_text: ''
        };
        this.res = new HistoryItem();
        this.hireRes = new HireItem();
        this.routineRes = new RoutineItem();
    }
    SafetyEducationHistoryDetailPage.prototype.ngOnInit = function () {
        this.getItem();
        this.hireItem();
        this.routineItem();
        this.specialItem();
        this.useItem();
    };
    SafetyEducationHistoryDetailPage.prototype.getItem = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/education/state/user/detail', { attendant_user_id: this.user_id }, {
                            parse: ['safe_job_name', 'user_profile_file_data']
                        })];
                    case 1:
                        res = _c.sent();
                        if (res.rsCode === 0) {
                            this.res = res.rsObj;
                            (_b = (_a = this.res) === null || _a === void 0 ? void 0 : _a.safe_job_name) === null || _b === void 0 ? void 0 : _b.toString();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryDetailPage.prototype.hireItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/education/report/hire/get', { approval_user_id: this.user_id })];
                    case 1:
                        res = _a.sent();
                        console.log("this.hireRes : ", this.hireRes);
                        if (res.rsCode === 0) {
                            this.hireRes = res.rsObj;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryDetailPage.prototype.routineItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/education/report/routine/get', { approval_user_id: this.user_id })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.routineRes = res.rsObj;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryDetailPage.prototype.specialItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/education/report/special/get', { approval_user_id: this.user_id })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.specialRes = res;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SafetyEducationHistoryDetailPage.prototype.special = function (state, item) {
        if (state) {
            var recommendedeWidth = 0;
            var recommAllTiem = item.education_towercrane_state ? 12 : 16;
            recommendedeWidth = (100 * item.education_recommended_time) / recommAllTiem;
            return "width:" + recommendedeWidth + "%";
        }
        else {
            var completeWidth = 0;
            var towercraneAllTiem = item.education_towercrane_state ? 12 : 16;
            if (item.education_complete_time === 0)
                completeWidth = 0;
            else
                completeWidth = 100 * item.education_complete_time / towercraneAllTiem;
            return "width:" + completeWidth + "%";
        }
    };
    SafetyEducationHistoryDetailPage.prototype.useItem = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.useForm.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.useForm.limit_no = limit_no;
                        this.useForm.attendant_user_id = this.user_id;
                        return [4 /*yield*/, this.connect.run('/education/state/user/list', this.useForm)];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.useRes = res;
                            this.useRes.rsMap.forEach(function (item, i) {
                                item.index = res.rsObj.row_count - _this.useForm.limit_no - i;
                            });
                        }
                        else {
                            this.useRes = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], SafetyEducationHistoryDetailPage.prototype, "user_id");
    SafetyEducationHistoryDetailPage = __decorate([
        core_1.Component({
            selector: 'app-safety-education-history-detail',
            templateUrl: './safety-education-history-detail.page.html',
            styleUrls: ['./safety-education-history-detail.page.scss']
        })
    ], SafetyEducationHistoryDetailPage);
    return SafetyEducationHistoryDetailPage;
}());
exports.SafetyEducationHistoryDetailPage = SafetyEducationHistoryDetailPage;
