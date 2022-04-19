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
exports.MyStatusListPage = void 0;
var core_1 = require("@angular/core");
var detail_search_component_1 = require("../../component/status-search/detail-search/detail-search.component");
var MyStatusListPage = /** @class */ (function () {
    function MyStatusListPage(nav, modal, connect, qr, nfc, alert, toast, user) {
        this.nav = nav;
        this.modal = modal;
        this.connect = connect;
        this.qr = qr;
        this.nfc = nfc;
        this.alert = alert;
        this.toast = toast;
        this.user = user;
        this.open = false;
        this.form = {
            master_company_id: 0,
            project_id: this.user.userData.belong_data.project_id,
            project_name: ''
        };
        this.gateState = false;
        this.gateOpen = false;
        this.notWorker = false;
        this.worker = false;
        this.nfcqrForm = {
            and_uq_id: 'test',
            ios_uq_id: 'test',
            nb_log_state: '',
            project_id: 0,
            serial_key: ''
        };
    }
    MyStatusListPage.prototype.ngOnInit = function () {
        this.roleCheck();
    };
    MyStatusListPage.prototype.roleCheck = function () {
        var _a = this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'LH_HEAD' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL' ||
            user_role === 'PARTNER_GENERAL')
            this.notWorker = true;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_HEAD') {
            this.form.master_company_id = this.user.userData.belong_data.company_id;
        }
        if (user_role === 'PARTNER_WORKER' ||
            user_type === 'WORKER')
            this.notWorker = false;
        this.get();
    };
    MyStatusListPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/work_project/nfc_beacon/my_gate/list', this.form, { parse: ['inner_data'] })];
                    case 1:
                        _a.resgate = _c.sent();
                        if (this.resgate.rsCode === 0) {
                        }
                        else {
                            // this.toast.present({message:'게이트 출역 기록이 없습니다.', color:'warning'});
                        }
                        _b = this;
                        return [4 /*yield*/, this.connect.run('/work_project/nfc_beacon/my_risk/list', this.form, { parse: ['inner_data'] })];
                    case 2:
                        _b.resrisk = _c.sent();
                        if (this.resrisk.rsCode === 0) {
                        }
                        else {
                            if (!this.resgate) {
                                // this.toast.present({message:'게이트 먼저 입장해주세요.', color:'warning'});
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyStatusListPage.prototype.detailSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: detail_search_component_1.DetailSearchComponent,
                            componentProps: {
                                type: 'my'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.form.master_company_id = data.master_company_id;
                            this.form.project_id = data.project_id;
                            this.get();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyStatusListPage.prototype.status = function (item) {
        item.open = !item.open;
    };
    MyStatusListPage.prototype.workerSatus = function () {
        if (!this.form.project_id)
            return this.toast.present({ message: '현장을 선택해주세요.', color: 'warning' });
        this.nav.navigateForward('/worker-status-list', {
            state: {
                project_id: this.form.project_id,
                master_company_id: this.form.master_company_id
            }
        });
    };
    MyStatusListPage.prototype.nfcScan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $nfc;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nfc.subscribe('worker', function (nfcData) { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(nfcData.type === 'QR_CHANGE')) return [3 /*break*/, 1];
                                        $nfc.unsubscribe();
                                        this.inNfcQr();
                                        return [3 /*break*/, 3];
                                    case 1:
                                        if (!nfcData)
                                            return [2 /*return*/, this.toast.present({ message: 'nfc을 다시 스캔해주세요.' })];
                                        this.nfcqrForm.serial_key = nfcData;
                                        this.nfcqrForm.nb_log_state = 'NFC';
                                        return [4 /*yield*/, this.connect.run('/work_project/nfc_beacon/check_insup', this.nfcqrForm)];
                                    case 2:
                                        res = _a.sent();
                                        if (res.rsCode === 0) {
                                            this.get();
                                            $nfc.unsubscribe();
                                        }
                                        else {
                                            $nfc.unsubscribe();
                                            this.nfcScan();
                                            this.toast.present({ message: res.rsMsg, color: 'warning' });
                                        }
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        $nfc = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyStatusListPage.prototype.inNfcQr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $qr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nfcqrForm.project_id = this.form.project_id;
                        if (!this.nfcqrForm.project_id)
                            return [2 /*return*/, this.toast.present({ message: '현장을 선택해주세요.', color: 'warning' })];
                        return [4 /*yield*/, this.qr.subscribe('worker', function (qrData) { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(qrData.type === 'NFC_CHANGE')) return [3 /*break*/, 1];
                                            $qr.unsubscribe();
                                            this.nfcScan();
                                            return [3 /*break*/, 3];
                                        case 1:
                                            if (!qrData)
                                                return [2 /*return*/, this.toast.present({ message: 'NFC을 다시 스캔해주세요.' })];
                                            this.nfcqrForm.serial_key = qrData.qr_data;
                                            this.nfcqrForm.nb_log_state = 'QR';
                                            return [4 /*yield*/, this.connect.run('/work_project/nfc_beacon/check_insup', this.nfcqrForm)];
                                        case 2:
                                            res = _a.sent();
                                            if (res.rsCode === 0) {
                                                $qr.unsubscribe();
                                                this.get();
                                            }
                                            else {
                                                $qr.unsubscribe();
                                                this.toast.present({ message: res.rsMsg, color: 'warning' });
                                            }
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        $qr = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyStatusListPage = __decorate([
        core_1.Component({
            selector: 'app-my-status-list',
            templateUrl: './my-status-list.page.html',
            styleUrls: ['./my-status-list.page.scss']
        })
    ], MyStatusListPage);
    return MyStatusListPage;
}());
exports.MyStatusListPage = MyStatusListPage;
