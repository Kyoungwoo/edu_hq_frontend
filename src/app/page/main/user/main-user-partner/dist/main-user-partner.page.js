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
exports.MainUserPartnerPage = void 0;
var core_1 = require("@angular/core");
var side_menu_user_component_1 = require("src/app/component/side-menu/side-menu-user/side-menu-user.component");
var MainUserPartnerPage = /** @class */ (function () {
    function MainUserPartnerPage(modal, nav, alert, connect, user, date, gps) {
        this.modal = modal;
        this.nav = nav;
        this.alert = alert;
        this.connect = connect;
        this.user = user;
        this.date = date;
        this.gps = gps;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.user_type === 'SUPER' ? this.user.userData.belong_data.master_company_id : 0,
            company_id: this.user.userData.belong_data.company_id,
            ctgo_job_position_name: '',
            contract_end_date: '-',
            contract_start_date: '-',
            admin_count: 0,
            worker_count: 0,
            alarm_count: 0,
            approval_count: 0,
            notice_count: 0,
            safetymeeting_count: 0
        };
        this.Top_Today = {
            month: '',
            day: '',
            week: ''
        };
        this.notice_list = []; // 공지사항
        this.safetymeeting_list = []; // 회의록
        this.msds_list = []; // 회의록
        this.notify_list = []; // 알림
        this.menu = 1;
        this.locationTimeout = null;
    }
    MainUserPartnerPage.prototype.ngOnInit = function () {
        this.dayTrans();
        this.getBoard();
        this.locationUpdate();
    };
    MainUserPartnerPage.prototype.locationUpdate = function () {
        var _this = this;
        this.gps.stopLocationUpdates();
        /** 버그는 안나는데, 혹시몰라서 */
        this.locationTimeout = setTimeout(function () {
            _this.gps.startLocationUpdates();
        }, 3000);
    };
    /**
     * @function dayTrans(): 오늘 날짜와 요일 가져오기
     */
    MainUserPartnerPage.prototype.dayTrans = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Todate;
            return __generator(this, function (_a) {
                Todate = new Date();
                this.Top_Today.week = this.date.day(Todate);
                this.Top_Today.month = (Todate.getMonth() + 1) < 10 ? '0' + (Todate.getMonth() + 1) : String(Todate.getMonth() + 1);
                this.Top_Today.day = Todate.getDate() < 10 ? '0' + Todate.getDate() : String(Todate.getDate());
                return [2 /*return*/];
            });
        });
    };
    /**
     * @function getBoard(): 게시판 가져오기
     */
    MainUserPartnerPage.prototype.getBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getNotice()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getSafrtyMeeting()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getMsds()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getNotify()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getNotice(): 공지사항 가져오기
     */
    MainUserPartnerPage.prototype.getNotice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/notice', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.notice_list = res.rsMap;
                                this.form.notice_count = res.rsObj.read_count;
                                break;
                            default:
                                this.notice_list = [];
                                this.form.notice_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getSafrtyMeeting(): 회의록 가져오기
     */
    MainUserPartnerPage.prototype.getSafrtyMeeting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/safetymeeting', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.safetymeeting_list = res.rsMap;
                                this.form.safetymeeting_count = res.rsObj.read_count;
                                break;
                            default:
                                this.safetymeeting_list = [];
                                this.form.safetymeeting_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getMsds(): MSDS 가져오기
     */
    MainUserPartnerPage.prototype.getMsds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/msds', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.msds_list = res.rsMap;
                                // this.form.msds_count = res.rsObj.read_count;
                                break;
                            default:
                                this.msds_list = [];
                                this.form.notice_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getNotify(): 알림 가져오기
     */
    MainUserPartnerPage.prototype.getNotify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/notify', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.notify_list = res.rsMap;
                                this.form.alarm_count = res.rsObj.read_count;
                                break;
                            default:
                                this.notify_list = [];
                                this.form.alarm_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainUserPartnerPage.prototype.navMypage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.navigateForward('/my-page-type');
                return [2 /*return*/];
            });
        });
    };
    MainUserPartnerPage.prototype.openMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: side_menu_user_component_1.SideMenuUserComponent
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainUserPartnerPage.prototype.router = function (title) {
        switch (title) {
            case '':
                this.alert.present({
                    // message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
                    message: '해당 기능은 아직 준비중인 기능입니다.',
                    header: '준비중'
                });
                break;
            case '미결함':
                this.nav.navigateForward('/confirm-pending-list');
                break;
            case '나의교육':
                this.nav.navigateForward('/my-education-list');
                break;
            case '나의출입현황':
                this.nav.navigateForward('/my-status-list');
                break;
            case '위험성평가':
                this.nav.navigateForward('/risk-list');
                break;
            case '공지사항':
                this.nav.navigateForward('/notice-list');
                break;
            case 'MSDS':
                this.nav.navigateForward('/msds-list');
                break;
            case '회의록':
                this.nav.navigateForward('/minutes-list');
                break;
            case 'SOS':
                this.nav.navigateForward('/sos-popup');
                break;
            case '알림함':
                this.nav.navigateForward('/notify-list');
                break;
        }
    };
    MainUserPartnerPage = __decorate([
        core_1.Component({
            selector: 'app-main-user-partner',
            templateUrl: './main-user-partner.page.html',
            styleUrls: ['./main-user-partner.page.scss']
        })
    ], MainUserPartnerPage);
    return MainUserPartnerPage;
}());
exports.MainUserPartnerPage = MainUserPartnerPage;
