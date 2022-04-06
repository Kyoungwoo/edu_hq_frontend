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
exports.RiskEvaluationPopupPage = exports.PlanItem = exports.FactorItem = exports.UnitItem = exports.ConstructionItem = void 0;
var core_1 = require("@angular/core");
var ConstructionItem = /** @class */ (function () {
    function ConstructionItem() {
        this.risk_construction_id = null;
        this.risk_construction_name = null;
    }
    return ConstructionItem;
}());
exports.ConstructionItem = ConstructionItem;
var UnitItem = /** @class */ (function () {
    function UnitItem() {
        this.risk_unit_id = null;
        this.risk_unit_name = null;
    }
    return UnitItem;
}());
exports.UnitItem = UnitItem;
var FactorItem = /** @class */ (function () {
    function FactorItem() {
        this.risk_factor_id = null;
        this.risk_factor_name = null;
    }
    return FactorItem;
}());
exports.FactorItem = FactorItem;
var PlanItem = /** @class */ (function () {
    function PlanItem() {
        this.risk_plan_id = null;
        this.risk_plan_name = null;
    }
    return PlanItem;
}());
exports.PlanItem = PlanItem;
var RiskEvaluationPopupPage = /** @class */ (function () {
    function RiskEvaluationPopupPage(connect, toast) {
        this.connect = connect;
        this.toast = toast;
        this.form = {
            ctgo_business_field_id: null
        };
    }
    RiskEvaluationPopupPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBusinessField()];
                    case 1:
                        _a.sent();
                        this.get1();
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.getBusinessField = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/category/certify/businessfield/get', {
                            project_id: this.project_id
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form.ctgo_business_field_id = res.rsObj.ctgo_business_field_id;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.get1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/risk/assessment/ctgo/construction/get', {
                                ctgo_business_field_id: this.form.ctgo_business_field_id
                            })];
                    case 1:
                        _a.res1 = _b.sent();
                        if (this.res1.rsCode) {
                            this.toast.present({ color: 'warning', message: this.res1.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.item1Click = function (item) {
        this.selectItem1 = item;
        this.get2();
    };
    RiskEvaluationPopupPage.prototype.get2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/risk/assessment/ctgo/unit/get', {
                                risk_construction_id: this.selectItem1.risk_construction_id
                            })];
                    case 1:
                        _a.res2 = _b.sent();
                        if (this.res2.rsCode) {
                            this.toast.present({ color: 'warning', message: this.res2.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.item2Click = function (item) {
        this.selectItem2 = item;
    };
    RiskEvaluationPopupPage.prototype.get3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/risk/assessment/ctgo/factor/get', {
                                risk_construction_id: this.selectItem1.risk_construction_id,
                                risk_unit_id: this.selectItem2.risk_unit_id
                            })];
                    case 1:
                        _a.res3 = _b.sent();
                        if (this.res3.rsCode) {
                            this.toast.present({ color: 'warning', message: this.res3.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.item3Click = function (item) {
        this.selectItem3 = item;
    };
    RiskEvaluationPopupPage.prototype.get4 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/risk/assessment/ctgo/plan/get', {
                                risk_construction_id: this.selectItem1.risk_construction_id,
                                risk_unit_id: this.selectItem2.risk_unit_id,
                                risk_factor_id: this.selectItem3.risk_factor_id
                            })];
                    case 1:
                        _a.res4 = _b.sent();
                        if (this.res4.rsCode) {
                            this.toast.present({ color: 'warning', message: this.res4.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationPopupPage.prototype.item4Click = function (item) {
        this.selectItem4 = item;
    };
    __decorate([
        core_1.Input()
    ], RiskEvaluationPopupPage.prototype, "project_id");
    RiskEvaluationPopupPage = __decorate([
        core_1.Component({
            selector: 'app-risk-evaluation-popup',
            templateUrl: './risk-evaluation-popup.page.html',
            styleUrls: ['./risk-evaluation-popup.page.scss']
        })
    ], RiskEvaluationPopupPage);
    return RiskEvaluationPopupPage;
}());
exports.RiskEvaluationPopupPage = RiskEvaluationPopupPage;
