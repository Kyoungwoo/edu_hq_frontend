(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_splash_splash_module_ts"],{

/***/ 87377:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 42138:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 87377);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 96141)).then(m => new m.AppWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 15536:
/*!******************************************************!*\
  !*** ./src/app/page/splash/splash-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 4993);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 20969:
/*!**********************************************!*\
  !*** ./src/app/page/splash/splash.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 15536);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 4993);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 4993:
/*!********************************************!*\
  !*** ./src/app/page/splash/splash.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splash.page.html */ 82131);
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss */ 9152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/device.service */ 54044);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 42138);








let SplashPage = class SplashPage {
    constructor(nav, device, plt, routerOutlet) {
        this.nav = nav;
        this.device = device;
        this.plt = plt;
        this.routerOutlet = routerOutlet;
        this.plt.backButton.subscribeWithPriority(-1, (processNextHandler) => {
            if (!this.routerOutlet.canGoBack()) {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.goToInitPage();
    }
    goToInitPage() {
        const loadingRoof = setTimeout(() => {
            console.log(this.device.platform_type);
            if (!this.device.platform_type) {
                clearTimeout(loadingRoof);
                this.goToInitPage();
                return;
            }
            if (this.device.platform_type < 3) {
                this.nav.navigateRoot('/login-mobile', { animated: true, animation: 'fadeIn' });
            }
            else {
                this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' });
            }
        }, 1000);
    }
};
SplashPage.ctorParameters = () => [
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashPage);



/***/ }),

/***/ 9152:
/*!**********************************************!*\
  !*** ./src/app/page/splash/splash.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  background: var(--ion-color-white);\n}\n\n.container {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n\nsvg {\n  width: 200px;\n}\n\nsvg .animate-group {\n  animation: splash-animation-group forwards 200ms ease-in-out;\n}\n\nsvg .animate-path {\n  animation: splash-animation-path forwards 500ms ease-in-out, splash-animation-path-2 forwards 200ms linear;\n}\n\n@keyframes splash-animation-group {\n  to {\n    transform: rotate(45deg);\n  }\n}\n\n@keyframes splash-animation-path {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes splash-animation-path-2 {\n  to {\n    transform: translateX(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBa0M7QUFDdEM7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFFM0I7O0FBQ0E7RUFDSSxZQUFZO0FBRWhCOztBQUhBO0VBR1EsNERBQTREO0FBSXBFOztBQVBBO0VBTVEsMEdBQTBHO0FBS2xIOztBQURBO0VBQ0k7SUFDSSx3QkFBd0I7RUFJOUI7QUFDRjs7QUFEQTtFQUNJO0lBQ0ksb0JBQW9CO0VBSTFCO0FBQ0Y7O0FBREE7RUFDSTtJQUNJLHdCQUF3QjtFQUk5QjtBQUNGIiwiZmlsZSI6InNwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5zdmcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAuYW5pbWF0ZS1ncm91cCB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BsYXNoLWFuaW1hdGlvbi1ncm91cCBmb3J3YXJkcyAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgLmFuaW1hdGUtcGF0aCB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BsYXNoLWFuaW1hdGlvbi1wYXRoIGZvcndhcmRzIDUwMG1zIGVhc2UtaW4tb3V0LCBzcGxhc2gtYW5pbWF0aW9uLXBhdGgtMiBmb3J3YXJkcyAyMDBtcyBsaW5lYXI7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwbGFzaC1hbmltYXRpb24tZ3JvdXAge1xuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzcGxhc2gtYW5pbWF0aW9uLXBhdGgge1xuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwbGFzaC1hbmltYXRpb24tcGF0aC0yIHtcbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 82131:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/splash/splash.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <svg id=\"logo\" viewBox=\"-10 -10 117 117\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <g class=\"animate-group\" style=\"transform: rotate(0deg); transform-origin: center; transform-box: fill-box;\">\n      <mask id=\"mask2\" style=\"maskType: alpha;\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"1\" width=\"97\" height=\"96\">\n        <path d=\"M0 36.5C0 16.8939 15.8939 1 35.5 1H97V97H38.5V72H35.5C15.8939 72 0 56.1061 0 36.5Z\" fill=\"#FFF\" />\n      </mask>\n      <g mask=\"url(#mask2)\">\n        <path class=\"animate-path\" d=\"M38.5 86.5H61.5C75.3071 86.5 86.5 75.3071 86.5 61.5C86.5 47.6929 75.3071 36.5 61.5 36.5H-3.5\" style=\"transform: translateX(30.25px);\" stroke=\"#56BA53\" stroke-width=\"21\" stroke-dashoffset=\"-123\" stroke-dasharray=\"163\" />\n      </g>\n      <mask id=\"mask1\" style=\"maskType: alpha;\" maskUnits=\"userSpaceOnUse\" x=\"-100\" y=\"-100\" width=\"200\" height=\"200\">\n        <path d=\"M61.5 97C81.1061 97 97 81.1061 97 61.5C97 41.8939 81.1061 26 61.5 26H58.5V5.11423e-06L8.48001e-06 0L6.20702e-06 26L41 26L41 47H4.37114e-06L0 97L61.5 97Z\" fill=\"#FFF\" />\n      </mask>\n      <g mask=\"url(#mask1)\">\n        <path class=\"animate-path\" d=\"M58.5 11.5L35.5 11.5C21.6929 11.5 10.5 22.6929 10.5 36.5C10.5 50.3071 21.6929 61.5 35.5 61.5L100.5 61.5\" style=\"transform: translateX(-30.25px);\" stroke=\"#0C694F\" stroke-width=\"21\" stroke-dashoffset=\"-123\" stroke-dasharray=\"163\" />\n      </g>\n    </g>\n  </svg>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_splash_splash_module_ts.js.map