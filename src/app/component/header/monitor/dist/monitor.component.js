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
exports.MonitorComponent = void 0;
var core_1 = require("@angular/core");
var side_menu_admin_component_1 = require("../../side-menu/side-menu-admin/side-menu-admin.component");
var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(animationCtrl, modal, nav, adminMenu, activedRoute, user, connect, device) {
        this.animationCtrl = animationCtrl;
        this.modal = modal;
        this.nav = nav;
        this.adminMenu = adminMenu;
        this.activedRoute = activedRoute;
        this.user = user;
        this.connect = connect;
        this.device = device;
        this.tabList = [
            { text: '통합관제',
                data: '통합관제'
            },
            { text: 'CCTV 모니터링',
                data: 'CCTV 모니터링'
            },
            { text: '근로자 실시간 위치 모니터링',
                data: '근로자 실시간 위치 모니터링'
            }
        ];
        this.tabActive = this.tabList[0];
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
            low_weather_temp: "",
            weather_pty: ""
        };
        this.dust = {
            dataTime: "",
            grade_name: "",
            icon_url: "",
            pm10Value: 0,
            pm25Grade: 0
        };
    }
    MonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$activedRoute = this.activedRoute.queryParams.subscribe(function (params) {
            var monitor = params.monitor;
            switch (monitor) {
                case '통합관제':
                    _this.tabActive = _this.tabList[0];
                    break;
                case 'CCTV 모니터링':
                    _this.tabActive = _this.tabList[1];
                    break;
                case '근로자 실시간 위치 모니터링':
                    _this.tabActive = _this.tabList[2];
                    break;
            }
        });
        this.IntervalWeather_Dust();
    };
    MonitorComponent.prototype.ngOnDestroy = function () {
        this.$activedRoute.unsubscribe();
        clearInterval(this.intervalWeather_Dust);
    };
    /**
     * @function IntervalWeather_Dust(): 날씨와 미세먼지 데이터를 인터벌 돌리는 메서드
     */
    MonitorComponent.prototype.IntervalWeather_Dust = function () {
        var _this = this;
        this.intervalWeather_Dust = setInterval(function () {
            _this.getWeather();
            _this.getDust();
        }, 1800000);
        this.getWeather();
        this.getDust();
    };
    /**
     * @function getWeather(): 날씨 데이터를 가져오는 메서드
     */
    MonitorComponent.prototype.getWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/weather/get')];
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
    /**
     * @function getDust(): 미세먼지 데이터를 가져오는 메서드
     */
    MonitorComponent.prototype.getDust = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/dust/get')];
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
    MonitorComponent.prototype.main = function () {
        var userData = this.user.userData;
        if (this.device.platform_type < 3) {
            switch (userData.user_type) {
                case 'LH':
                case 'SUPER':
                    this.nav.navigateRoot('/main-user');
                    break;
                case 'COMPANY':
                    if (userData.user_role === 'MASTER_HEAD' || userData.user_role === 'MASTER_GENERAL') {
                        this.nav.navigateRoot('/main-user-master');
                    }
                    else {
                        this.nav.navigateRoot('/main-user-partner');
                    }
                    break;
                case 'WORKER':
                    this.nav.navigateRoot('/main-user-worker');
                    break;
            }
        }
        else {
            if (userData.user_type === 'COMPANY') {
                this.nav.navigateRoot('/main-sub-admin');
            }
            else {
                this.nav.navigateRoot('/main-admin');
            }
        }
    };
    MonitorComponent.prototype.openSideMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: side_menu_admin_component_1.SideMenuAdminComponent,
                            cssClass: 'side-menu-admin-modal',
                            enterAnimation: function (baseEl) {
                                var backdropAnimation = _this.animationCtrl.create()
                                    .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
                                    .duration(100)
                                    .fromTo('opacity', '0', '0.08');
                                var wrapperEl = baseEl.getElementsByClassName('modal-wrapper')[0];
                                wrapperEl.style.transformOrigin = '50% 0';
                                var wrapperAnimation = _this.animationCtrl.create()
                                    .addElement(wrapperEl)
                                    .duration(100)
                                    .fromTo('opacity', '0', '1')
                                    .fromTo('transform', 'scaleY(0.99)', 'scaleY(1)');
                                return _this.animationCtrl.create()
                                    .addAnimation([backdropAnimation, wrapperAnimation]);
                            },
                            leaveAnimation: function (baseEl) {
                                var backdropAnimation = _this.animationCtrl.create()
                                    .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
                                    .duration(100)
                                    .fromTo('opacity', '0.08', '0');
                                var wrapperEl = baseEl.getElementsByClassName('modal-wrapper')[0];
                                wrapperEl.style.transformOrigin = '50% 0';
                                var wrapperAnimation = _this.animationCtrl.create()
                                    .addElement(wrapperEl)
                                    .duration(100)
                                    .fromTo('opacity', '1', '0')
                                    .fromTo('transform', 'scale(1)', 'scale(0.99)');
                                return _this.animationCtrl.create()
                                    .addAnimation([backdropAnimation, wrapperAnimation]);
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], MonitorComponent.prototype, "form");
    MonitorComponent = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.Component({
            selector: 'app-moniter-header',
            templateUrl: './monitor.component.html',
            styleUrls: ['./monitor.component.scss']
        })
    ], MonitorComponent);
    return MonitorComponent;
}());
exports.MonitorComponent = MonitorComponent;
