"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SplashPage = void 0;
var core_1 = require("@angular/core");
var app_1 = require("@capacitor/app");
var SplashPage = /** @class */ (function () {
    function SplashPage(nav, device, plt, routerOutlet) {
        var _this = this;
        this.nav = nav;
        this.device = device;
        this.plt = plt;
        this.routerOutlet = routerOutlet;
        this.plt.backButton.subscribeWithPriority(-1, function (processNextHandler) {
            if (!_this.routerOutlet.canGoBack()) {
                app_1.App.exitApp();
            }
        });
    }
    SplashPage.prototype.ngOnInit = function () {
    };
    SplashPage.prototype.ngAfterViewInit = function () {
        this.goToInitPage();
    };
    SplashPage.prototype.goToInitPage = function () {
        var _this = this;
        var loadingRoof = setTimeout(function () {
            console.log(_this.device.platform_type);
            if (!_this.device.platform_type) {
                clearTimeout(loadingRoof);
                _this.goToInitPage();
                return;
            }
            if (_this.device.platform_type < 3) {
                _this.nav.navigateRoot('/login-mobile', { animated: true, animation: 'fadeIn' });
            }
            else {
                _this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' });
            }
        }, 1000);
    };
    SplashPage = __decorate([
        core_1.Component({
            selector: 'app-splash',
            templateUrl: './splash.page.html',
            styleUrls: ['./splash.page.scss']
        })
    ], SplashPage);
    return SplashPage;
}());
exports.SplashPage = SplashPage;
