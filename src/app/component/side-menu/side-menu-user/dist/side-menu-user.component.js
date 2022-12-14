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
exports.SideMenuUserComponent = void 0;
var core_1 = require("@angular/core");
var SideMenuUserComponent = /** @class */ (function () {
    function SideMenuUserComponent(alert, _modal, user, nav, alertController, connect) {
        var _this = this;
        this.alert = alert;
        this._modal = _modal;
        this.user = user;
        this.nav = nav;
        this.alertController = alertController;
        this.connect = connect;
        this.language_type = '';
        this.menuSelected = null;
        this.menuList = [
            { img: 'assets/img/menu/member-management.svg', title: '????????????', subMenuList: [
                    { title: '?????? ????????????', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/work-plan.svg', title: '????????????', subMenuList: [
                    { title: '???????????????', link: '/risk-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } },
                    { title: '??????????????????(PTW)', link: '', params: {}, permission: function () { return true; } },
                    { title: '?????????', link: '/worker-minutes-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } }
                ] },
            { img: 'assets/img/menu/safety-education.svg', title: '????????????', subMenuList: [
                    { title: '????????????', link: '/safety-education-list', params: {}, permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY';
                        } },
                    { title: '?????? ??????', link: '/my-education-list', params: {}, permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: '?????? ????????????', link: '/safety-education-result-list', params: {}, permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY';
                        } }
                ] },
            { img: 'assets/img/menu/today-work.svg', title: '????????? ??????', subMenuList: [
                    { title: '?????? ?????? ??????', link: '/my-status-list', params: {}, permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: 'TBM', link: '', params: {}, permission: function () { return true; } },
                    { title: '??????', link: '', params: {}, permission: function () { return true; } },
                    { title: '????????? ??????', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/emergency-management.svg', title: '???????????? ??????', subMenuList: [
                    { title: '???????????? ??????', link: '', params: {}, permission: function () { return true; } },
                    { title: '?????? ?????? ??????', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/control-center.svg', title: '????????????', subMenuList: [
                    { title: '???????????? ????????????', link: '', params: {}, permission: function () { return true; } },
                    { title: '?????? ????????????', link: '/monitor', params: {}, permission: function () {
                            var _a = _this.user.userData, user_type = _a.user_type, user_role = _a.user_role;
                            return user_type === 'LH' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
                        } }
                ] },
            { img: 'assets/img/menu/sign.svg', title: '?????? ??????', subMenuList: [
                    { title: '??????/???????????????', link: '/confirm-obtain-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } },
                    { title: '?????????', link: '/confirm-pending-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } },
                    { title: '?????????', link: '/confirm-progress-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } },
                    { title: '?????????', link: '/confirm-cc-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY';
                        } },
                    { title: '????????????', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/board.svg', title: '?????????', subMenuList: [
                    { title: '????????????', link: '/notice-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: 'MSDS', link: '/msds-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: '?????????', link: '/minutes-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } }
                ] },
            { img: 'assets/img/menu/notification-box.svg', title: '?????????', subMenuList: [
                    { title: '?????????', link: '/notify-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                ] },
            { img: 'assets/img/menu/support.svg', title: '????????????', subMenuList: [
                    { title: '????????????', link: '', params: {}, permission: function () { return true; } },
                    { title: '????????? ?????????', link: 'manual-list', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: '????????? ?????? ??????', link: 'use-terms', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                    { title: '????????????????????????', link: 'privacy', params: {}, permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
                        } },
                ] }
        ];
        this.menuSelected = this.menuList[0];
    }
    SideMenuUserComponent.prototype.ngOnInit = function () {
        this.getMyLanguage();
    };
    SideMenuUserComponent.prototype.menuClose = function () {
        this._modal.dismiss();
    };
    SideMenuUserComponent.prototype.notReady = function () {
        this.alert.present({
            img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
            header: '?????????'
        });
    };
    SideMenuUserComponent.prototype.navMypage = function () {
        this._modal.dismiss();
        this.nav.navigateForward('/my-page');
    };
    SideMenuUserComponent.prototype.router = function (title) {
        switch (title) {
            case '':
                this.alert.present({
                    img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
                    header: '?????????'
                });
                break;
            case '??????':
                this.nav.navigateForward('/setting-menu');
                break;
        }
    };
    /**
     * @function languageChange(): ??????????????? ??????????????? ?????????
     */
    SideMenuUserComponent.prototype.languageChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alert.present({
                    header: 'Language',
                    inputs: [
                        { type: 'radio', value: 'kr', label: '?????????(Korean)', checked: this.language_type === 'kr' ? true : false },
                        { type: 'radio', value: 'en', label: '??????(English)', checked: this.language_type === 'en' ? true : false },
                        { type: 'radio', value: 'ch', label: '?????????(Chinese)', checked: this.language_type === 'ch' ? true : false },
                        { type: 'radio', value: 'vi', label: '?????????(Vietnamese)', checked: this.language_type === 'vi' ? true : false }
                    ],
                    buttons: [
                        {
                            text: '??????',
                            handler: function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.language_type = item;
                                            return [4 /*yield*/, this.connect.run('/main/etc/language/update', { language_type: this.language_type }, {})];
                                        case 1:
                                            res = _a.sent();
                                            switch (res.rsCode) {
                                                case 0:
                                                    this.getMyLanguage();
                                                    break;
                                                default:
                                                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                                                    break;
                                            }
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
    /**
     * @function languageChange(): ??????????????? ???????????? ?????????
     */
    SideMenuUserComponent.prototype.getMyLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/main/etc/language/get')];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.language_type = res.rsObj.language_type;
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
    SideMenuUserComponent.prototype.logout = function () {
        this._modal.dismiss();
        this.user.logout();
    };
    SideMenuUserComponent = __decorate([
        core_1.Component({
            selector: 'app-side-menu-user',
            templateUrl: './side-menu-user.component.html',
            styleUrls: ['./side-menu-user.component.scss']
        })
    ], SideMenuUserComponent);
    return SideMenuUserComponent;
}());
exports.SideMenuUserComponent = SideMenuUserComponent;
