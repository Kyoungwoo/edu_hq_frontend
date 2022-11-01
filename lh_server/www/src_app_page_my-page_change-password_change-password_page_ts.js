(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_change-password_change-password_page_ts"],{

/***/ 62956:
/*!**********************************************************************!*\
  !*** ./src/app/page/my-page/change-password/change-password.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordForm": () => (/* binding */ ChangePasswordForm),
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password.page.html */ 82873);
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss */ 41825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);












class ChangePasswordForm {
    constructor() {
        this.account_token = null;
        this.new_account_token = null;
        this.new_account_token_conform = null;
    }
}
let ChangePasswordPage = class ChangePasswordPage {
    constructor(el, alert, _modal, connect, nav, promise, toast, changeDetector, languagePack) {
        this.el = el;
        this.alert = alert;
        this._modal = _modal;
        this.connect = connect;
        this.nav = nav;
        this.promise = promise;
        this.toast = toast;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new ChangePasswordForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new ChangePasswordForm()).validator;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.core.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 데이터 입력
            el.querySelector('[name=account_token]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
            el.querySelector('[name=new_account_token]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
            el.querySelector('[name=new_account_token_conform]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
            yield this.promise.wait();
            el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
            yield this.promise.wait(800);
            document.querySelector('.alert-button').dispatchEvent(new Event('click'));
        });
    }
    dismiss() {
        this._modal.dismiss();
    }
    checkPass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const { new_account_token } = this.form;
            if (!new_account_token)
                return this.validator.new_account_token = null;
            if ((new_account_token === null || new_account_token === void 0 ? void 0 : new_account_token.length) < 4)
                return this.validator.new_account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' };
            const res = yield this.connect.run('/forSignUp/check/pass', { account_token: new_account_token });
            this.validator.new_account_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    checkPassConfirm() {
        const { new_account_token, new_account_token_conform } = this.form;
        if (new_account_token !== new_account_token_conform)
            return this.validator.new_account_token_conform = { valid: false, message: '비밀번호와 비밀번호 확인이 다릅니다.' };
        else
            return this.validator.new_account_token_conform = { valid: true };
    }
    /** submit */
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            const res = yield this.connect.run('/mypage/account_token/update', this.form, {
                loading: true
            });
            if (res.rsCode === 0) {
                this._modal.dismiss();
                this.nav.navigateRoot('/login', { force: true, animated: true });
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
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    valid() {
        var _a, _b, _c;
        if (!this.form.account_token)
            this.validator.account_token = { message: '기존 비밀번호를 입력해주세요.', valid: false };
        else
            this.validator.account_token = { valid: true };
        if (!this.form.new_account_token)
            this.validator.new_account_token = { message: '새 비밀번호를 입력해주세요.', valid: false };
        else if ((_a = this.validator.new_account_token) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.new_account_token = { valid: true };
        if (!this.form.new_account_token_conform)
            this.validator.new_account_token_conform = { message: '새 비밀번호 확인을 입력해주세요.', valid: false };
        else if ((_b = this.validator.new_account_token_conform) === null || _b === void 0 ? void 0 : _b.valid)
            this.validator.new_account_token_conform = { valid: true };
        for (let key in this.validator) {
            if (!((_c = this.validator[key]) === null || _c === void 0 ? void 0 : _c.valid))
                return false;
        }
        return true;
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordPage);



/***/ }),

/***/ 41825:
/*!************************************************************************!*\
  !*** ./src/app/page/my-page/change-password/change-password.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 82873:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/change-password/change-password.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('비밀번호 변경하기') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h4>{{ languagePack.getText('비밀번호를 변경해주세요.') }}</h4>\n  \n  <app-input name=\"account_token\" [label]=\"languagePack.getText('비밀번호')\" type=\"password\"\n  [placeholder]=\"languagePack.getText('영문,숫자, 조합(6~20자)')\"\n  [color]=\"validator.account_token?.valid === false && 'warning'\"\n  [(ngModel)]=\"form.account_token\" [required]=\"true\"></app-input>\n  <app-input-caption *ngIf=\"validator.account_token?.valid === false\" color=\"warning\">{{ validator.account_token?.message }}</app-input-caption>\n\n  <app-input name=\"new_account_token\" [label]=\"languagePack.getText('새 비밀번호')\" type=\"password\"\n  [placeholder]=\"languagePack.getText('영문,숫자, 조합(6~20자)')\"\n  [color]=\"validator.new_account_token?.valid === false && 'warning'\"\n  [(ngModel)]=\"form.new_account_token\" (delayKeyup)=\"checkPass()\" [required]=\"true\"></app-input>\n  <app-input-caption *ngIf=\"validator.new_account_token?.valid === false\" color=\"warning\">{{ validator.new_account_token?.message }}</app-input-caption>\n  <!-- {{ languagePack.getText(languagePack.getText('새 비밀번호 확인')) }} -->\n  <!-- \"languagePack.getText('새 비밀번호 확인')\" -->\n  <app-input name=\"new_account_token_conform\" label=\"새 비밀번호 확인\" \n  [placeholder]=\"languagePack.getText('Re-enter your password.')\" type=\"password\"\n  [color]=\"validator.new_account_token_conform?.valid === false && 'warning'\"\n  [(ngModel)]=\"form.new_account_token_conform\" (delayKeyup)=\"checkPassConfirm()\" [required]=\"true\"></app-input>\n  <app-input-caption *ngIf=\"validator.new_account_token_conform?.valid === false\" color=\"warning\">{{ validator.new_account_token_conform?.message }}</app-input-caption>\n\n</ion-content>\n\n<app-button-footer>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('취소') }}</app-button>\n  <app-button name=\"button_submit\" (click)=\"submit()\">{{ languagePack.getText('비밀번호 변경하기') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_change-password_change-password_page_ts.js.map