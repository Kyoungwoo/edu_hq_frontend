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
exports.MainAdminPage = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var MainAdminPage = /** @class */ (function () {
    function MainAdminPage(el, connect, alert, nav, promise, toast, user) {
        this.el = el;
        this.connect = connect;
        this.alert = alert;
        this.nav = nav;
        this.promise = promise;
        this.toast = toast;
        this.user = user;
        this.form = {
            hq_regional_id: this.user.userData.belong_data.hq_regional_id ? this.user.userData.belong_data.hq_regional_id : 0,
            hq_business_id: this.user.userData.belong_data.hq_business_id ? this.user.userData.belong_data.hq_business_id : 0,
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.user_type === 'SUPER' ? this.user.userData.belong_data.master_company_id : 0,
            company_id: this.user.userData.belong_data.company_id,
            ctgo_job_position_name: '',
            contract_end_date: '-',
            contract_start_date: '-',
            lh_count: 0,
            super_count: 0,
            alarm_count: 0,
            approval_count: 0,
            notice_count: 0,
            safetymeeting_count: 0
        };
        this.weather = {
            weather_speed: "",
            weather_id: "",
            weather_temp: "",
            avg_temp: 0,
            weather_icon: "",
            create_date: "",
            weather_main: "",
            weather_humidity: "",
            weather_rain: "",
            weather_snow: "",
            high_weather_temp: "",
            low_weather_temp: "" // 최저 기온(온도),
        };
        this.dust = {
            dataTime: "",
            grade_name: "",
            icon_url: "",
            pm10Value: 0,
            pm25Grade: 0
        };
        this.regional_list = []; // 지역본부
        this.business_list = []; // 사업본부
        this.alarm_list = []; // 알림함
        this.approval_list = []; // 미결함
        this.notice_list = []; // 공지사항
        this.safetymeeting_list = []; // 회의록
        if (this.user.userData.user_type !== 'COMPANY') {
            this.nav.navigateRoot('/main-sub-admin');
        }
    }
    MainAdminPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user.userData.user_type === 'LH')
            this.getCtgo();
        this.getEtc();
        this.getBoard();
        this.getDust();
        this.getWeather();
        setInterval(function () {
            _this.getDust();
            _this.getWeather();
        }, 1800000);
        this.test();
    };
    MainAdminPage.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.core.test)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.testUserManual()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [2 /*return*/];
                }
            });
        });
    };
    MainAdminPage.prototype.testUserManual = function () {
        return __awaiter(this, void 0, Promise, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.UserManual.test)
                            return [2 /*return*/, true];
                        if (environment_1.environment.test.UserManual.done)
                            return [2 /*return*/, true];
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        el.querySelector('[name=menu_button]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 2:
                        _a.sent();
                        document.querySelector('[name=button_manual-list]').dispatchEvent(new Event('click'));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * @function getCtgo(): 기본 카테고리 정보들을 가져오는 메서드
     */
    MainAdminPage.prototype.getCtgo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegional()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getBusiness()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getEtc(): 착공일/준공일, 가입대기
     */
    MainAdminPage.prototype.getEtc = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContractDate()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getWaiting()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getJobPosition()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getBoard(): 게시판 가져오기
     */
    MainAdminPage.prototype.getBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAlarm()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getApproval()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getNotice()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getSafrtyMeeting()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getRegional(): 지역본부 가져오기
     */
    MainAdminPage.prototype.getRegional = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/category/organization/regional/get', null, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.regional_list = res.rsMap;
                                break;
                            default:
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getBusiness(): 사업본부 가져오기
     */
    MainAdminPage.prototype.getBusiness = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/category/organization/business/get', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.business_list = res.rsMap;
                                if (!this.form.hq_business_id && res.rsMap.length)
                                    this.form.hq_business_id = this.business_list[0].hq_business_id;
                                break;
                            default:
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getContractDate(): 현장 착공일/준공일 가져오기
     */
    MainAdminPage.prototype.getContractDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/category/certify/project/contract/date', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.form = __assign(__assign({}, this.form), res.rsObj);
                                break;
                            default:
                                //  this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getWaiting(): 가입대기 가져오기
     */
    MainAdminPage.prototype.getWaiting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/etc/waiting_lh', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.form = __assign(__assign({}, this.form), res.rsObj);
                                break;
                            default:
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getAlarm(): 알림함 가져오기
     */
    MainAdminPage.prototype.getAlarm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/notify', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.alarm_list = res.rsMap.length > 4 ? res.rsMap.splice(0, 4) : res.rsMap;
                                this.form.alarm_count = res.rsObj.read_count;
                                break;
                            default:
                                this.alarm_list = [];
                                this.form.alarm_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getApproval(): 미결함 가져오기
     */
    MainAdminPage.prototype.getApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/board/approval', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.approval_list = res.rsMap;
                                this.form.approval_count = res.rsObj.read_count;
                                break;
                            default:
                                this.approval_list = [];
                                this.form.approval_count = 0;
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getNotice(): 공지사항 가져오기
     */
    MainAdminPage.prototype.getNotice = function () {
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
    MainAdminPage.prototype.getSafrtyMeeting = function () {
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
     * @function getJobPosition(): 내 직위 가져오기
     */
    MainAdminPage.prototype.getJobPosition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/category/certify/my/jobposition', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.form.ctgo_job_position_name = res.rsObj.ctgo_job_position_name;
                                break;
                            default:
                                // this.toast.present({ color: 'warning', message: res.rsMsg });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainAdminPage.prototype.getWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/weather/get', null, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.weather = res.rsObj;
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainAdminPage.prototype.getDust = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/dust/get', null, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.dust = res.rsObj;
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainAdminPage.prototype.alram = function () {
    };
    MainAdminPage.prototype.router = function (title) {
        console.log("asdfasdf");
        switch (title) {
            case '':
                this.alert.present({
                    message: '해당 기능은 아직 준비중인 기능입니다.',
                    header: '준비중'
                });
                break;
            case '미결함':
                this.nav.navigateRoot('/confirm-pending-list');
                break;
            case '알림함':
                this.nav.navigateRoot('/notify-list');
                break;
            case '공지사항':
                this.nav.navigateRoot('/notice-list');
                break;
            case '회의록':
                this.nav.navigateRoot('/minutes-list');
                break;
            case '사용자메뉴얼':
                this.nav.navigateRoot('/manual-list');
                break;
            case '시스템이용약관':
                this.nav.navigateRoot('/use-terms');
                break;
            case '개인정보처리방침':
                this.nav.navigateRoot('/privacy');
                break;
            case '교육이력':
                this.nav.navigateRoot('/safety-education-list');
                break;
            case '위험성평가':
                this.nav.navigateRoot('/risk-list');
                break;
            case '마이페이지':
                this.nav.navigateRoot('/my-page');
                break;
        }
    };
    MainAdminPage = __decorate([
        core_1.Component({
            selector: 'app-main-admin',
            templateUrl: './main-admin.page.html',
            styleUrls: ['./main-admin.page.scss']
        })
    ], MainAdminPage);
    return MainAdminPage;
}());
exports.MainAdminPage = MainAdminPage;
