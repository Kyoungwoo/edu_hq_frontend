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
exports.LoginMobilePage = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var environment_1 = require("src/environments/environment");
var login_interface_1 = require("../login.interface");
var LoginMobilePage = /** @class */ (function () {
    function LoginMobilePage(el, connect, user, nav, promise, changeDetector, device, alert, psuh) {
        this.el = el;
        this.connect = connect;
        this.user = user;
        this.nav = nav;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.device = device;
        this.alert = alert;
        this.psuh = psuh;
        this.form = new login_interface_1.LoginForm();
        this.autoLogin = false;
    }
    LoginMobilePage.prototype.ngOnInit = function () {
        if (this.user.autoLogin) {
            this.tokenLogin();
        }
    };
    LoginMobilePage.prototype.ionViewDidEnter = function () {
        this.test();
    };
    LoginMobilePage.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.core.test)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.testSignUp()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.testFindId()];
                    case 2:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.testFindPassord()];
                    case 3:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        this.alert.present({
                            header: '테스트 완료',
                            message: '테스트 완료'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginMobilePage.prototype.testSignUp = function () {
        return __awaiter(this, void 0, Promise, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.SignUp.test)
                            return [2 /*return*/, true];
                        if (environment_1.environment.test.SignUp.done)
                            return [2 /*return*/, true];
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        if (environment_1.environment.test.SignUp.type.length) {
                            el.querySelector('[name=button_sign_up]').dispatchEvent(new Event('click'));
                            return [2 /*return*/, false];
                        }
                        else {
                            environment_1.environment.test.SignUp.done = true;
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginMobilePage.prototype.testFindId = function () {
        return __awaiter(this, void 0, Promise, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.FindId.test)
                            return [2 /*return*/, true];
                        if (environment_1.environment.test.FindId.done)
                            return [2 /*return*/, true];
                        environment_1.environment.test.FindId.done = true;
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        el.querySelector('[name=button_find_id]').dispatchEvent(new Event('click'));
                        return [2 /*return*/, false];
                }
            });
        });
    };
    LoginMobilePage.prototype.testFindPassord = function () {
        return __awaiter(this, void 0, Promise, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.FindPassword.test)
                            return [2 /*return*/, true];
                        if (environment_1.environment.test.FindPassword.done)
                            return [2 /*return*/, true];
                        environment_1.environment.test.FindPassword.done = true;
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        el.querySelector('[name=button_find_password]').dispatchEvent(new Event('click'));
                        return [2 /*return*/, false];
                }
            });
        });
    };
    LoginMobilePage.prototype.testLogin = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                if (!environment_1.environment.test.Login.test)
                    return [2 /*return*/, true];
                if (environment_1.environment.test.Login.done)
                    return [2 /*return*/, true];
                return [2 /*return*/];
            });
        });
    };
    LoginMobilePage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/token/get', this.form, {
                                contentType: connect_service_1.ContentType.ApplicationJson,
                                loading: '로그인'
                            })];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                            this.getWorkerInfo(this.res.rsObj, { animated: true });
                        }
                        else if (this.res.rsCode === 500) {
                            this.res.rsMsg = '아이디와 비밀번호를 확인해주세요.';
                        }
                        else if (this.res.rsCode === 3003) {
                            this.alert.present({
                                message: this.res.rsMsg
                            });
                        }
                        else if (this.res.rsCode === 3004) {
                            this.alert.present({
                                message: this.res.rsMsg,
                                buttons: [
                                    { text: '예, 재가입 신청하겠습니다.' },
                                    { text: '아니오, 가입하지 않겠습니다.' }
                                ]
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginMobilePage.prototype.tokenLogin = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = this;
                        return [4 /*yield*/, this.connect.run('/token/refresh', {
                                accountID: this.user.userData.account_id,
                                refreshToken: (_a = this.user.authToken) === null || _a === void 0 ? void 0 : _a.refresh_token
                            })];
                    case 1:
                        _b.res = _c.sent();
                        if (this.res.rsCode === 0) {
                            this.getWorkerInfo(this.res.rsObj, { animated: false });
                        }
                        else if (this.res.rsCode === 500) {
                            this.res.rsMsg = '인증 토큰이 만료되었습니다. 다시 로그인해주세요.';
                        }
                        else if (this.res.rsCode === 3003) {
                            this.alert.present({
                                message: this.res.rsMsg
                            });
                        }
                        else if (this.res.rsCode === 3004) {
                            this.alert.present({
                                message: this.res.rsMsg,
                                buttons: [
                                    { text: '예, 재가입 신청하겠습니다.' },
                                    { text: '아니오, 가입하지 않겠습니다.' }
                                ]
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginMobilePage.prototype.getWorkerInfo = function (authToken, _a) {
        var animated = _a.animated;
        return __awaiter(this, void 0, void 0, function () {
            var res, userData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(authToken);
                        this.user.setAuthToken(authToken, this.autoLogin);
                        return [4 /*yield*/, this.connect.run('/user/basic/get', {}, {
                                parse: ['belong_data']
                            })];
                    case 1:
                        res = _b.sent();
                        if (res.rsCode === 0) {
                            userData = res.rsObj;
                            switch (userData.user_type) {
                                case 'LH':
                                case 'SUPER':
                                    userData.user_main_page = '/main-user';
                                    break;
                                case 'COMPANY':
                                    if (userData.user_role === 'MASTER_HEAD' || userData.user_role === 'MASTER_GENERAL')
                                        userData.user_main_page = '/main-user-master';
                                    else
                                        userData.user_main_page = '/main-user-partner';
                                    break;
                                case 'WORKER':
                                    userData.user_main_page = '/main-user-worker';
                                    break;
                            }
                            // 로그인이 완료되면 푸시, 유저데이터저장, 메인페이지 활성화
                            this.psuh.init();
                            this.user.setUserData(userData, this.autoLogin);
                            this.nav.navigateRoot(userData.user_main_page, { animated: animated });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginMobilePage = __decorate([
        core_1.Component({
            selector: 'app-login-mobile',
            templateUrl: './login-mobile.page.html',
            styleUrls: ['./login-mobile.page.scss']
        })
    ], LoginMobilePage);
    return LoginMobilePage;
}());
exports.LoginMobilePage = LoginMobilePage;
