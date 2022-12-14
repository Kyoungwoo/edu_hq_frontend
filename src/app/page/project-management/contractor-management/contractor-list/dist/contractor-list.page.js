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
exports.ContractorListPage = void 0;
var core_1 = require("@angular/core");
var contractor_edit_page_1 = require("../contractor-edit/contractor-edit.page");
var ContractorListPage = /** @class */ (function () {
    function ContractorListPage(modal, connect, user, toast) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            company_contract_type: '?????????',
            hq_regional_id: this.user.userData.belong_data.hq_regional_id || 0,
            hq_business_id: this.user.userData.belong_data.hq_business_id || 0,
            limit_no: 0,
            master_company_ids: [],
            search_text: ''
        };
        this.master_compnay_id = this.user.userData.belong_data.master_company_id;
        this.businessState = true;
    }
    ContractorListPage.prototype.ngOnInit = function () {
        console.log("this.master_compnay_id", this.master_compnay_id);
        this.ctgoBusiness = {
            errorStatus: null,
            rsCode: null,
            rsObj: null,
            rsMsg: '',
            rsMap: [],
            rqMethod: ''
        };
        this.getList();
        this.getCtgoBusiness();
        this.getCtgoRegional();
    };
    ContractorListPage.prototype.getList = function (limit_no) {
        if (limit_no === void 0) { limit_no = this.form.limit_no; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.limit_no = limit_no;
                        this.form.master_company_ids = [];
                        if (this.master_compnay_id)
                            this.form.master_company_ids.push(this.master_compnay_id);
                        return [4 /*yield*/, this.connect.run('/project/company/masters/list', this.form)];
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
    ContractorListPage.prototype.edit = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: contractor_edit_page_1.ContractorEditPage,
                            componentProps: {
                                company_id: item.company_id,
                                project_id: item.project_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data)
                            this.getList();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractorListPage.prototype.getCtgoRegional = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/organization/regional/get', {}, {})];
                    case 1:
                        _a.ctgoRegional = _b.sent();
                        if (this.ctgoRegional.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractorListPage.prototype.getCtgoBusiness = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!ev)
                            this.form.hq_business_id = 0;
                        this.businessState = false;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/organization/business/get', {
                                hq_regional_id: this.form.hq_regional_id
                            }, {})];
                    case 1:
                        _a.ctgoBusiness = _b.sent();
                        if (this.ctgoBusiness.rsCode === 0) { }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractorListPage = __decorate([
        core_1.Component({
            selector: 'app-contractor-list',
            templateUrl: './contractor-list.page.html',
            styleUrls: ['./contractor-list.page.scss']
        })
    ], ContractorListPage);
    return ContractorListPage;
}());
exports.ContractorListPage = ContractorListPage;
