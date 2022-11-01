(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_find-mobile_find-password-mobile-phone_find-password-mobile-phone_module_ts"],{

/***/ 31400:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobilePhonePageRoutingModule": () => (/* binding */ FindPasswordMobilePhonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _find_password_mobile_phone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-phone.page */ 13973);




const routes = [
    {
        path: '',
        component: _find_password_mobile_phone_page__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobilePhonePage
    }
];
let FindPasswordMobilePhonePageRoutingModule = class FindPasswordMobilePhonePageRoutingModule {
};
FindPasswordMobilePhonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindPasswordMobilePhonePageRoutingModule);



/***/ }),

/***/ 93784:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobilePhonePageModule": () => (/* binding */ FindPasswordMobilePhonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _find_password_mobile_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-phone-routing.module */ 31400);
/* harmony import */ var _find_password_mobile_phone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-phone.page */ 13973);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let FindPasswordMobilePhonePageModule = class FindPasswordMobilePhonePageModule {
};
FindPasswordMobilePhonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _find_password_mobile_phone_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobilePhonePageRoutingModule
        ],
        declarations: [_find_password_mobile_phone_page__WEBPACK_IMPORTED_MODULE_1__.FindPasswordMobilePhonePage]
    })
], FindPasswordMobilePhonePageModule);



/***/ }),

/***/ 13973:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobilePhonePage": () => (/* binding */ FindPasswordMobilePhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_password_mobile_phone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-password-mobile-phone.page.html */ 15745);
/* harmony import */ var _find_password_mobile_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-phone.page.scss */ 68221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../login.interface */ 7929);













let FindPasswordMobilePhonePage = class FindPasswordMobilePhonePage {
    constructor(el, connect, activedRoute, nav, regex, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this.activedRoute = activedRoute;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new _login_interface__WEBPACK_IMPORTED_MODULE_9__.FindPasswordForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _login_interface__WEBPACK_IMPORTED_MODULE_9__.FindPasswordForm()).validator;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.FindPassword.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 입력 데이터 삽입
            const form = new _login_interface__WEBPACK_IMPORTED_MODULE_9__.FindPasswordFormMock();
            for (const key in form) {
                const value = form[key];
                const input = el.querySelector(`[name=${key}]`);
                if (input && value)
                    input.dispatchEvent(new CustomEvent('setValue', { detail: value }));
            }
            yield this.promise.wait();
            // 문자 인증 전송
            el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait(1500);
            // 문자 인증번호 가져와서 넣기
            const { user_phone } = this.form;
            const res = yield this.connect.run('/test/sms/get', { user_phone });
            this.form.sms_token = res.rsObj.sms_token;
            yield this.promise.wait();
            // 문자 인증
            this.changeDetector.detectChanges();
            el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait();
            // 다음 프로세스
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
            console.log(this.form);
            console.log(this.validator);
        });
    }
    prev() {
        this.nav.navigateBack('/find-password-mobile-type');
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/sign/find/account_token', this.form, { loading: true });
            if (this.res.rsCode === 0) {
                const form = Object.assign(Object.assign({}, this.form), { account_token: null, account_token_conform: null });
                this.nav.navigateForward('/find-password-mobile-result', {
                    state: {
                        form
                    }
                });
            }
        });
    }
    aligoSend() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.form;
            if (((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid) === false)
                return;
            const res = yield this.connect.run('/aligo/send', { user_phone });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    aligoCheck() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, sms_token } = this.form;
            const res = yield this.connect.run('/aligo/check', { user_phone, sms_token });
            this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    valid() {
        var _a, _b, _c;
        if (!this.form.account_id)
            this.validator.account_id = { message: '아이디를 입력해주세요.', valid: false };
        else
            this.validator.account_id = { valid: true };
        if (!this.form.user_name)
            this.validator.user_name = { message: '이름을 입력해주세요.', valid: false };
        else
            this.validator.user_name = { valid: true };
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if ((_b = this.validator.sms_token) === null || _b === void 0 ? void 0 : _b.valid)
            this.validator.sms_token = { valid: true };
        for (let key in this.validator) {
            if (!((_c = this.validator[key]) === null || _c === void 0 ? void 0 : _c.valid))
                return false;
        }
        return true;
    }
};
FindPasswordMobilePhonePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
FindPasswordMobilePhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-find-password-mobile-phone',
        template: _raw_loader_find_password_mobile_phone_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_find_password_mobile_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPasswordMobilePhonePage);



/***/ }),

/***/ 68221:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGFzc3dvcmQtbW9iaWxlLXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJmaW5kLXBhc3N3b3JkLW1vYmlsZS1waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn0iXX0= */");

/***/ }),

/***/ 15745:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/find-password-mobile-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('비밀번호 찾기') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-container size=\"small\">\n    <h4>{{ languagePack.getText('등록한 휴대폰으로 찾기') }}</h4>\n    <app-card *ngIf=\"res && res.rsCode\" color=\"warning\">{{ res.rsMsg }}</app-card>\n    <app-input\n    name=\"account_id\" [label]=\"languagePack.getText('아이디')\"\n    [placeholder]=\"languagePack.getText('영문과 숫자만 입력해주세요.')\"\n    [color]=\"validator.account_id?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.account_id\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.account_id?.valid === false\" color=\"warning\">{{ validator.account_id?.message }}</app-input-caption>\n    <app-input\n    name=\"user_name\" [label]=\"languagePack.getText('성명')\"\n    [placeholder]=\"languagePack.getText('이름을 입력해주세요')\"\n    [color]=\"validator.user_name?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.user_name\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.user_name?.valid === false\" color=\"warning\">{{ validator.user_name?.message }}</app-input-caption>\n    <app-input name=\"user_phone\" [label]=\"languagePack.getText('휴대폰')\" [placeholder]=\"languagePack.getText('- 없이 숫자만 입력해주세요')\" type=\"tel\" \n    [color]=\"validator.user_phone?.valid === false ? 'warning' \n    : validator.sms_token?.valid === true && 'success'\"\n    [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"validator.user_phone = null\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n    {{ languagePack.getText('인증번호 받기') }}\n    </app-input>\n    <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n    <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">{{ languagePack.getText('인증이 완료되었습니다.') }}</app-input-caption>\n    <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n      <app-input\n      name=\"sms_token\" [label]=\"languagePack.getText('인증번호')\" [placeholder]=\"languagePack.getText('인증번호를 입력해주세요')\" type=\"tel\"\n      [color]=\"validator.sms_token?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.sms_token\" (delayKeyup)=\"validator.sms_token = null\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n      {{ languagePack.getText('확인') }}\n      </app-input>\n      <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n    </div>\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"prev()\">{{ languagePack.getText('이전') }}</app-button>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_find-mobile_find-password-mobile-phone_find-password-mobile-phone_module_ts.js.map