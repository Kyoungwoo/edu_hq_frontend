(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_find-mobile_find-password-mobile-result_find-password-mobile-result_module_ts"],{

/***/ 34162:
/*!******************************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-result/find-password-mobile-result-routing.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileResultPageRoutingModule": () => (/* binding */ FindPasswordMobileResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _find_password_mobile_result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-result.page */ 90771);




const routes = [
    {
        path: '',
        component: _find_password_mobile_result_page__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobileResultPage
    }
];
let FindPasswordMobileResultPageRoutingModule = class FindPasswordMobileResultPageRoutingModule {
};
FindPasswordMobileResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindPasswordMobileResultPageRoutingModule);



/***/ }),

/***/ 11645:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileResultPageModule": () => (/* binding */ FindPasswordMobileResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _find_password_mobile_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-password-mobile-result-routing.module */ 34162);
/* harmony import */ var _find_password_mobile_result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-result.page */ 90771);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let FindPasswordMobileResultPageModule = class FindPasswordMobileResultPageModule {
};
FindPasswordMobileResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _find_password_mobile_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindPasswordMobileResultPageRoutingModule
        ],
        declarations: [_find_password_mobile_result_page__WEBPACK_IMPORTED_MODULE_1__.FindPasswordMobileResultPage]
    })
], FindPasswordMobileResultPageModule);



/***/ }),

/***/ 90771:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.page.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordMobileResultPage": () => (/* binding */ FindPasswordMobileResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_password_mobile_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-password-mobile-result.page.html */ 73883);
/* harmony import */ var _find_password_mobile_result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-mobile-result.page.scss */ 30832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../login.interface */ 7929);











let FindPasswordMobileResultPage = class FindPasswordMobileResultPage {
    constructor(el, alert, connect, nav, promise, changeDetector, languagePack) {
        this.el = el;
        this.alert = alert;
        this.connect = connect;
        this.nav = nav;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.UpdatePasswordForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new _login_interface__WEBPACK_IMPORTED_MODULE_8__.UpdatePasswordForm()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/find-password-mobile-type');
        this.form = history.state.form;
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.FindPassword.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            const form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.UpdatePasswordFormMock();
            for (const key in form) {
                const value = form[key];
                const input = el.querySelector(`[name=${key}]`);
                if (input && value)
                    input.dispatchEvent(new CustomEvent('setValue', { detail: value }));
            }
            yield this.promise.wait();
            el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
            yield this.promise.wait(800);
            document.querySelector('.alert-button').dispatchEvent(new Event('click'));
        });
    }
    checkParams() {
        var _a;
        if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.form)
            return true;
        else
            return false;
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/sign/find/update/account_token', this.form, {
                loading: true
            });
            if (this.res.rsCode === 0) {
                this.nav.navigateBack('/login-mobile', { force: true });
                this.alert.present({
                    img: 'assets/basic/img/check-circle-primary.svg',
                    header: '비밀번호가 변경되었습니다.',
                    message: '재 로그인 해주세요.',
                    backdropDismiss: false,
                    buttons: [
                        { text: '확인' }
                    ]
                });
            }
        });
    }
    checkPass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const { account_token } = this.form;
            if (!account_token)
                return this.validator.account_token = null;
            if ((account_token === null || account_token === void 0 ? void 0 : account_token.length) < 4)
                return this.validator.account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' };
            const res = yield this.connect.run('/forSignUp/check/pass', { account_token });
            this.validator.account_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    checkPassConfirm() {
        const { account_token, account_token_conform } = this.form;
        if (account_token !== account_token_conform)
            return this.validator.account_token_conform = { valid: false, message: '비밀번호와 비밀번호 확인이 다릅니다.' };
        else
            return this.validator.account_token_conform = { valid: true };
    }
    valid() {
        var _a, _b, _c;
        this.validator.account_id = { valid: true };
        this.validator.user_name = { valid: true };
        this.validator.user_phone = { valid: true };
        this.validator.sms_token = { valid: true };
        if (!this.form.account_token)
            this.validator.account_token = { message: '비밀번호를 입력해주세요.', valid: false };
        else if ((_a = this.validator.account_token) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.account_token = { valid: true };
        if (!this.form.account_token_conform)
            this.validator.account_token_conform = { message: '비밀번호 확인을 입력해주세요.', valid: false };
        else if ((_b = this.validator.account_token_conform) === null || _b === void 0 ? void 0 : _b.valid)
            this.validator.account_token_conform = { valid: true };
        for (let key in this.validator) {
            if (!((_c = this.validator[key]) === null || _c === void 0 ? void 0 : _c.valid))
                return false;
        }
        return true;
    }
};
FindPasswordMobileResultPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
FindPasswordMobileResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-find-password-mobile-result',
        template: _raw_loader_find_password_mobile_result_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_password_mobile_result_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPasswordMobileResultPage);



/***/ }),

/***/ 30832:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.page.scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGFzc3dvcmQtbW9iaWxlLXJlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiZmluZC1wYXNzd29yZC1tb2JpbGUtcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ 73883:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/find-password-mobile-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('비밀번호 재설정') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <h4>{{ languagePack.getText('비밀번호 재설정') }}</h4>\n    <app-card *ngIf=\"res && res.rsCode\" color=\"warning\">{{ res.rsMsg }}</app-card>\n    <h4>{{ languagePack.getText('비밀번호 재설정') }}</h4>\n    <app-input name=\"account_token\" [label]=\"languagePack.getText('비밀번호')\" type=\"password\"\n    [placeholder]=\"languagePack.getText('영문과 숫자만 입력해주세요.')\"\n    [color]=\"validator.account_token?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.account_token\" (delayKeyup)=\"checkPass()\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.account_token?.valid === false\" color=\"warning\">{{ validator.account_token?.message }}</app-input-caption>\n    \n    <app-input name=\"account_token_conform\" [label]=\"languagePack.getText('비밀번호 확인')\" [placeholder]=\"languagePack.getText('비밀번호를 재입력 해주세요.')\" type=\"password\"\n    [color]=\"validator.account_token_conform?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.account_token_conform\" (delayKeyup)=\"checkPassConfirm()\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.account_token_conform?.valid === false\" color=\"warning\">{{ validator.account_token_conform?.message }}</app-input-caption>\n\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-button name=\"button_submit\" (click)=\"submit()\">{{ languagePack.getText('비밀번호 재설정') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_find-mobile_find-password-mobile-result_find-password-mobile-result_module_ts.js.map