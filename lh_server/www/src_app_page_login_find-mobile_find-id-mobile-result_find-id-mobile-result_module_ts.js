(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_find-mobile_find-id-mobile-result_find-id-mobile-result_module_ts"],{

/***/ 25595:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-id-mobile-result/find-id-mobile-result-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindIdMobileResultPageRoutingModule": () => (/* binding */ FindIdMobileResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _find_id_mobile_result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-id-mobile-result.page */ 15664);




const routes = [
    {
        path: '',
        component: _find_id_mobile_result_page__WEBPACK_IMPORTED_MODULE_0__.FindIdMobileResultPage
    }
];
let FindIdMobileResultPageRoutingModule = class FindIdMobileResultPageRoutingModule {
};
FindIdMobileResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindIdMobileResultPageRoutingModule);



/***/ }),

/***/ 31075:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindIdMobileResultPageModule": () => (/* binding */ FindIdMobileResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _find_id_mobile_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-id-mobile-result-routing.module */ 25595);
/* harmony import */ var _find_id_mobile_result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-id-mobile-result.page */ 15664);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let FindIdMobileResultPageModule = class FindIdMobileResultPageModule {
};
FindIdMobileResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _find_id_mobile_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindIdMobileResultPageRoutingModule
        ],
        declarations: [_find_id_mobile_result_page__WEBPACK_IMPORTED_MODULE_1__.FindIdMobileResultPage]
    })
], FindIdMobileResultPageModule);



/***/ }),

/***/ 15664:
/*!********************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindIdMobileResultPage": () => (/* binding */ FindIdMobileResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_id_mobile_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-id-mobile-result.page.html */ 14827);
/* harmony import */ var _find_id_mobile_result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-id-mobile-result.page.scss */ 64274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);










let FindIdMobileResultPage = class FindIdMobileResultPage {
    constructor(el, connect, nav, regex, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.result = {
            account_id: '',
            user_name: ''
        };
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/find-id-mobile-type');
        this.result = history.state.result;
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.FindId.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
            src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.FindId.done = true;
        });
    }
    checkParams() {
        var _a;
        if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.result)
            return true;
        else
            return false;
    }
    navFindPassword() {
        this.nav.navigateBack('/find-password-mobile-type');
    }
    navLogin() {
        this.nav.navigateBack('/login-mobile');
    }
};
FindIdMobileResultPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
FindIdMobileResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-find-id-mobile-result',
        template: _raw_loader_find_id_mobile_result_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_id_mobile_result_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindIdMobileResultPage);



/***/ }),

/***/ 64274:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.page.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5kLWlkLW1vYmlsZS1yZXN1bHQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 14827:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/find-id-mobile-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('아이디 찾기') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-container size=\"small\">\n    <h4>{{ languagePack.getText('아이디 찾기 결과') }}</h4>\n    <app-card>\n      <h4><ion-text color=\"primary\">{{ result.user_name }}</ion-text> {{ languagePack.getText('님의 아이디는') }}</h4>\n      <h4><ion-text color=\"primary\">{{ result.account_id }}</ion-text>{{ languagePack.getText('입니다') }}.</h4>\n    </app-card>\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-button name=\"button_find_password\" (click)=\"navFindPassword()\">{{ languagePack.getText('비밀번호 찾기') }}</app-button>\n  <app-button name=\"button_login\" (click)=\"navLogin()\">{{ languagePack.getText('로그인 하기') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_find-mobile_find-id-mobile-result_find-id-mobile-result_module_ts.js.map