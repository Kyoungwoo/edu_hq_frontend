(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_find-mobile_find-password-mobile-type_find-password-mobile-type_module_ts"],{

/***/ 2463:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-type/find-password-mobile-type-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileTypePageRoutingModule": () => (/* binding */ FindPasswordMobileTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _find_password_mobile_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-type.page */ 39730);




const routes = [
    {
        path: '',
        component: _find_password_mobile_type_page__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobileTypePage
    }
];
let FindPasswordMobileTypePageRoutingModule = class FindPasswordMobileTypePageRoutingModule {
};
FindPasswordMobileTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindPasswordMobileTypePageRoutingModule);



/***/ }),

/***/ 56220:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileTypePageModule": () => (/* binding */ FindPasswordMobileTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _find_password_mobile_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-type-routing.module */ 2463);
/* harmony import */ var _find_password_mobile_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-type.page */ 39730);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let FindPasswordMobileTypePageModule = class FindPasswordMobileTypePageModule {
};
FindPasswordMobileTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _find_password_mobile_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobileTypePageRoutingModule
        ],
        declarations: [_find_password_mobile_type_page__WEBPACK_IMPORTED_MODULE_1__.FindPasswordMobileTypePage]
    })
], FindPasswordMobileTypePageModule);



/***/ }),

/***/ 39730:
/*!****************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileTypePage": () => (/* binding */ FindPasswordMobileTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_password_mobile_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-password-mobile-type.page.html */ 77548);
/* harmony import */ var _find_password_mobile_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-type.page.scss */ 75175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);









let FindPasswordMobileTypePage = class FindPasswordMobileTypePage {
    constructor(el, nav, promise, changeDetector, languagePack) {
        this.el = el;
        this.nav = nav;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.FindId.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.FindId.type.length)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            const cardTypeEl = el.querySelector(`[name=card_type_${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.FindId.type[0]}]`);
            cardTypeEl.dispatchEvent(new Event('click'));
            yield this.promise.wait();
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
            src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.SignUp.type.splice(0, 1);
        });
    }
    next() {
        this.nav.navigateForward('/find-password-mobile-phone');
    }
};
FindPasswordMobileTypePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
FindPasswordMobileTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-find-password-mobile-type',
        template: _raw_loader_find_password_mobile_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.slideUpInAnimation],
        styles: [_find_password_mobile_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPasswordMobileTypePage);



/***/ }),

/***/ 75175:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.page.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icon {\n  background-color: var(--ion-color-primary-translucent);\n  width: 52px;\n  height: 52px;\n  border-radius: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon ion-icon {\n  font-size: 28px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGFzc3dvcmQtbW9iaWxlLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQXNEO0VBQ3RELFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3ZCOztBQVJBO0VBU1EsZUFBZTtBQUd2QiIsImZpbGUiOiJmaW5kLXBhc3N3b3JkLW1vYmlsZS10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10cmFuc2x1Y2VudCk7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 77548:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login-mobile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('비밀번호 찾기') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <h4>{{ languagePack.getText('아래 방법중 한가지를 선택해주세요.') }}</h4>\n    <app-card name=\"card_type_PHONE\" [button]=\"true\" [color]=\"type === 'PHONE' ? 'secondary' : 'white'\" (click)=\"type = 'PHONE'\">\n      <app-row class=\"card-inner\">\n        <app-col size=\"auto\">\n          <div class=\"icon\">\n            <ion-icon color=\"primary\" name=\"phone-portrait-outline\"></ion-icon>\n          </div>\n        </app-col>\n        <app-col>\n          <h4>{{ languagePack.getText('등록한 휴대폰') }}</h4>\n          <p>{{ languagePack.getText('회원정보에 등록된 휴대폰 정보를 입력해서 아이디 찾기') }}</p>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n    <p>\n      {{ languagePack.getText('본인 인증시 제공되는 정보는 인증 이외의 용도로 이용 또는 저장하지 않습니다.') }}\n    </p>\n    <p>\n      {{ languagePack.getText('위 방법으로 확인이 안될 시 관리자에게 문의해주세요. 개인정보보호를 위해 바로 안내해드리기 어려운 점 양해 부탁드립니다.') }}   \n    </p>\n  </app-container>\n</ion-content>\n<app-button-footer name=\"button-footer\" *ngIf=\"type\" @slideUpInAnimation>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_find-mobile_find-password-mobile-type_find-password-mobile-type_module_ts.js.map