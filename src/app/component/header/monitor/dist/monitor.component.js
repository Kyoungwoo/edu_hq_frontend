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
    function MonitorComponent(animationCtrl, modal, nav, adminMenu) {
        this.animationCtrl = animationCtrl;
        this.modal = modal;
        this.nav = nav;
        this.adminMenu = adminMenu;
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
    }
    MonitorComponent.prototype.ngOnInit = function () { };
    MonitorComponent.prototype.tabClick = function (tab, i) {
        // console.log(tab);
        this.tabActive = tab;
    };
    MonitorComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.$router) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
