"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UserService = exports.UserData = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var TAG;
(function (TAG) {
    TAG["Id"] = "Devmonster@Id";
    TAG["AuthToken"] = "Devmonster@AuthToken";
    TAG["UserData"] = "Devmonster@UserData";
    TAG["memberAuthToken"] = "Devmonster@MemberAuthToken";
})(TAG || (TAG = {}));
var UserData = /** @class */ (function () {
    function UserData() {
        this.belong_data = {
            company_contract_type: "",
            company_id: 0,
            company_name: '',
            project_id: 0,
            project_name: '',
            hq_business_id: 0,
            hq_business_name: '',
            hq_regional_id: 0,
            hq_regional_name: '',
            master_company_id: 0
        };
    }
    return UserData;
}());
exports.UserData = UserData;
var UserService = /** @class */ (function () {
    function UserService(platformId, alert, nav, device) {
        this.platformId = platformId;
        this.alert = alert;
        this.nav = nav;
        this.device = device;
        this.userData = new UserData();
        this.autoLogin = false;
        this.getId();
        this.getAuthToken();
        this.getUserData();
        this.getMemberAuthToken();
    }
    UserService.prototype.getId = function () {
        this.accountID = window.localStorage.getItem(TAG.Id) || null;
    };
    UserService.prototype.setId = function (accountID) {
        if (common_1.isPlatformServer(this.platformId))
            return;
        window.localStorage.setItem(TAG.Id, accountID);
        this.getId();
    };
    UserService.prototype.removeId = function () {
        window.localStorage.removeItem(TAG.Id);
    };
    UserService.prototype.getAuthToken = function () {
        if (common_1.isPlatformServer(this.platformId))
            return this.authToken = null; // ssr에서 auth token을 어떠헥 처리해야 하지? 쿠키로 해야하나? 아니면 정보를 안띄워야 하나?
        var storage;
        if (window.sessionStorage.getItem(TAG.AuthToken)) {
            storage = window.sessionStorage;
            this.autoLogin = false;
        }
        else if (window.localStorage.getItem(TAG.AuthToken)) {
            storage = window.localStorage;
            this.autoLogin = true;
        }
        if (storage) {
            this.authToken = JSON.parse(storage.getItem(TAG.AuthToken));
        }
        else
            this.authToken = null;
    };
    UserService.prototype.setAuthToken = function (authToken, autoLogin) {
        if (autoLogin === void 0) { autoLogin = true; }
        if (common_1.isPlatformServer(this.platformId))
            return;
        var storage = autoLogin ? window.localStorage : window.sessionStorage;
        var deleteStorage = autoLogin ? window.sessionStorage : window.localStorage;
        storage.setItem(TAG.AuthToken, JSON.stringify(authToken));
        deleteStorage.removeItem(TAG.AuthToken);
        this.getAuthToken();
    };
    UserService.prototype.getUserData = function () {
        if (common_1.isPlatformServer(this.platformId))
            return this.userData = new UserData();
        var storage;
        if (window.sessionStorage.getItem(TAG.UserData)) {
            storage = window.sessionStorage;
            this.autoLogin = false;
        }
        else if (window.localStorage.getItem(TAG.UserData)) {
            storage = window.localStorage;
            this.autoLogin = true;
        }
        if (storage) {
            this.userData = JSON.parse(storage.getItem(TAG.UserData));
        }
        else
            this.userData = new UserData();
    };
    UserService.prototype.setUserData = function (data, autoLogin) {
        if (autoLogin === void 0) { autoLogin = true; }
        if (common_1.isPlatformServer(this.platformId))
            return;
        var storage = autoLogin ? window.localStorage : window.sessionStorage;
        var deleteStorage = autoLogin ? window.sessionStorage : window.localStorage;
        storage.setItem(TAG.UserData, JSON.stringify(data));
        deleteStorage.removeItem(TAG.UserData);
        this.getUserData();
    };
    UserService.prototype.getMemberAuthToken = function () {
        this.memberAuthToken = window.localStorage.getItem(TAG.memberAuthToken) || null;
    };
    UserService.prototype.setMemberAuthToken = function (authToken) {
        if (common_1.isPlatformServer(this.platformId))
            return;
        window.localStorage.setItem(TAG.memberAuthToken, authToken);
        this.getMemberAuthToken();
    };
    UserService.prototype.clear = function () {
        if (common_1.isPlatformServer(this.platformId))
            return;
        window.localStorage.removeItem(TAG.Id);
        window.sessionStorage.removeItem(TAG.AuthToken);
        window.localStorage.removeItem(TAG.AuthToken);
        window.sessionStorage.removeItem(TAG.UserData);
        window.localStorage.removeItem(TAG.UserData);
        this.getAuthToken();
        this.getUserData();
    };
    UserService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alert.present({
                    header: '로그아웃',
                    message: '로그아웃 하시겠습니까?',
                    buttons: [
                        { text: '취소' },
                        { text: '로그아웃', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(this.device.platform_type < 3)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.nav.navigateRoot('/login-mobile', { animated: true, animation: 'fadeIn' })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' })];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            this.clear();
                                            return [2 /*return*/];
                                    }
                                });
                            }); } }
                    ]
                });
                return [2 /*return*/];
            });
        });
    };
    /** utils */
    UserService.prototype.parseUserRole = function (userRole) {
        switch (userRole) {
            case 1:
                return 'LH 본사 마스터';
            case 2:
                return 'LH 본사 관리자';
            case 3:
                return 'LH 지역본부 관리자';
            case 4:
                return 'LH 사업본부 관리자';
            case 5:
                return 'LH 현장 관리자';
            case 6:
                return '원청사 마스터';
            case 7:
                return '원청사 일반 관리자';
            case 8:
                return '원청사 작업자';
            case 9:
                return '협력사 마스터';
            case 10:
                return '협력사 일반 관리자';
            case 11:
                return '협력사 작업자';
        }
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
