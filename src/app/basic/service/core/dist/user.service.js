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
    function UserService(platformId) {
        this.platformId = platformId;
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
        deleteStorage.removeItem(TAG.AuthToken);
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
        //this.get();
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
