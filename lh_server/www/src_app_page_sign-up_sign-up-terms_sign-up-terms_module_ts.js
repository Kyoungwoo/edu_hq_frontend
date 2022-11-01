(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_sign-up_sign-up-terms_sign-up-terms_module_ts"],{

/***/ 35666:
/*!****************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-terms/sign-up-terms-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTermsPageRoutingModule": () => (/* binding */ SignUpTermsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_terms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-terms.page */ 41934);




const routes = [
    {
        path: '',
        component: _sign_up_terms_page__WEBPACK_IMPORTED_MODULE_0__.SignUpTermsPage
    }
];
let SignUpTermsPageRoutingModule = class SignUpTermsPageRoutingModule {
};
SignUpTermsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpTermsPageRoutingModule);



/***/ }),

/***/ 32726:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-terms/sign-up-terms.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTermsPageModule": () => (/* binding */ SignUpTermsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_terms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-terms-routing.module */ 35666);
/* harmony import */ var _sign_up_terms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-terms.page */ 41934);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);
/* harmony import */ var _sign_up_done_sign_up_done_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up-done/sign-up-done.module */ 69766);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/component.module */ 55051);










let SignUpTermsPageModule = class SignUpTermsPageModule {
};
SignUpTermsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__.SignUpComponentModule,
            _sign_up_terms_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpTermsPageRoutingModule,
            _sign_up_done_sign_up_done_module__WEBPACK_IMPORTED_MODULE_3__.SignUpDonePageModule
        ],
        declarations: [_sign_up_terms_page__WEBPACK_IMPORTED_MODULE_1__.SignUpTermsPage]
    })
], SignUpTermsPageModule);



/***/ }),

/***/ 41934:
/*!******************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-terms/sign-up-terms.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTermsPage": () => (/* binding */ SignUpTermsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_terms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-terms.page.html */ 694);
/* harmony import */ var _sign_up_terms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-terms.page.scss */ 42614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/device.service */ 54044);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _sign_up_done_sign_up_done_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sign-up-done/sign-up-done.page */ 78789);
/* harmony import */ var _sign_up_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sign-up.interface */ 65092);















let SignUpTermsPage = class SignUpTermsPage {
    constructor(el, connect, modal, toast, nav, promise, device, languagePack) {
        this.el = el;
        this.connect = connect;
        this.modal = modal;
        this.toast = toast;
        this.nav = nav;
        this.promise = promise;
        this.device = device;
        this.languagePack = languagePack;
        this.form = new _sign_up_interface__WEBPACK_IMPORTED_MODULE_11__.SignUpTerms();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _sign_up_interface__WEBPACK_IMPORTED_MODULE_11__.SignUpTerms()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/sign-up-type');
        if (this.userType === 'LH') {
            const { signUpLhForm } = history.state;
            this.prevForm = signUpLhForm;
        }
        else if (this.userType === 'SUPER') {
            const { SignUpSuperForm } = history.state;
            this.prevForm = SignUpSuperForm;
        }
        else if (this.userType === 'COMPANY') {
            const { signUpPartnerForm } = history.state;
            this.prevForm = signUpPartnerForm;
        }
        else if (this.userType === 'WORKER') {
            const { signUpWorkerInfo, signUpWorkerHealth } = history.state;
            this.prevForm = Object.assign(Object.assign({}, signUpWorkerInfo), signUpWorkerHealth);
        }
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.SignUp.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 약관 동의
            el.querySelector('[name=system_terms]').dispatchEvent(new Event('click'));
            el.querySelector('[name=personal_terms]').dispatchEvent(new Event('click'));
            if (this.userType === 'WORKER')
                el.querySelector('[name=sensitive_terms]').dispatchEvent(new Event('click'));
            el.querySelector('[name=gps_terms]').dispatchEvent(new Event('click'));
            el.querySelector('[name=sharing_terms]').dispatchEvent(new Event('click'));
            // 회원 가입
            el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
        });
    }
    checkParams() {
        var _a, _b, _c, _d, _e, _f;
        if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.signUpLhForm) {
            this.userType = 'LH';
            return true;
        }
        else if ((_b = history.state) === null || _b === void 0 ? void 0 : _b.SignUpSuperForm) {
            this.userType = 'SUPER';
            return true;
        }
        else if ((_c = history.state) === null || _c === void 0 ? void 0 : _c.signUpPartnerForm) {
            this.userType = 'COMPANY';
            return true;
        }
        else if (((_d = history.state) === null || _d === void 0 ? void 0 : _d.companyInfo)
            && ((_e = history.state) === null || _e === void 0 ? void 0 : _e.signUpWorkerInfo)
            && ((_f = history.state) === null || _f === void 0 ? void 0 : _f.signUpWorkerHealth)) {
            this.userType = 'WORKER';
            return true;
        }
        else
            return false;
    }
    prev() {
        this.nav.back();
    }
    done() {
        console.log(this.prevForm);
        console.log(this.form);
        console.log(this.validator);
        if (!this.valid())
            return;
        this.signUp();
    }
    signUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let api = '';
            if (this.userType === 'LH') {
                api = '/sign/up/lh';
            }
            else if (this.userType === 'SUPER') {
                api = '/sign/up/super';
            }
            else if (this.userType === 'COMPANY') {
                api = '/sign/up/company';
            }
            else if (this.userType === 'WORKER') {
                api = '/sign/up/worker';
            }
            this.res = yield this.connect.run(api, Object.assign(Object.assign({}, this.prevForm), this.form), {
                loading: true
            });
            if (this.res.rsCode === 0) {
                const modal = yield this.modal.create({
                    component: _sign_up_done_sign_up_done_page__WEBPACK_IMPORTED_MODULE_10__.SignUpDonePage
                });
                modal.present();
                if (this.device.platform_type < 3) {
                    this.nav.navigateRoot('/login-mobile', {
                        force: true
                    });
                }
                else {
                    this.nav.navigateRoot('/login', {
                        force: true
                    });
                }
            }
        });
    }
    valid() {
        var _a;
        if (!this.form.system_terms)
            this.validator.system_terms = { message: '시스템 이용약관에 동의해주세요.', valid: false };
        else
            this.validator.system_terms = { valid: true };
        if (!this.form.personal_terms)
            this.validator.personal_terms = { message: '개인정보 수집 및 이용에 동의해주세요.', valid: false };
        else
            this.validator.personal_terms = { valid: true };
        if (this.userType === 'WORKER') {
            // 민감정보는 worker 만 받음
            if (!this.form.sensitive_terms)
                this.validator.sensitive_terms = { message: '민감정보 제공 및 이용에 동의해주세요.', valid: false };
            else
                this.validator.sensitive_terms = { valid: true };
        }
        else {
            this.validator.sensitive_terms = { valid: true };
        }
        if (!this.form.gps_terms)
            this.validator.gps_terms = { message: '위치정보 시스템 이용약관에 동의해주세요.', valid: false };
        else
            this.validator.gps_terms = { valid: true };
        if (!this.form.sharing_terms)
            this.validator.sharing_terms = { message: '제3자 정보제공에 동의해주세요.', valid: false };
        else
            this.validator.sharing_terms = { valid: true };
        for (let key in this.validator) {
            if (!((_a = this.validator[key]) === null || _a === void 0 ? void 0 : _a.valid))
                return false;
        }
        return true;
    }
    termPage(url) {
        window.open('https://cdn.lh-skeeper.or.kr/terms/' + url, '_blank');
    }
};
SignUpTermsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__.PromiseService },
    { type: src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_4__.DeviceService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_5__.LanguagePackService }
];
SignUpTermsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-sign-up-terms',
        template: _raw_loader_sign_up_terms_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInAnimation],
        styles: [_sign_up_terms_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpTermsPage);



/***/ }),

/***/ 65092:
/*!***************************************************!*\
  !*** ./src/app/page/sign-up/sign-up.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpCompanyInfo": () => (/* binding */ SignUpCompanyInfo),
/* harmony export */   "SignUpCountryMock": () => (/* binding */ SignUpCountryMock),
/* harmony export */   "SignUpCompanyInfoMock": () => (/* binding */ SignUpCompanyInfoMock),
/* harmony export */   "SignUpProjectInfoMock": () => (/* binding */ SignUpProjectInfoMock),
/* harmony export */   "SignUpTerms": () => (/* binding */ SignUpTerms)
/* harmony export */ });
class SignUpCompanyInfo {
    constructor() {
        this.company_id = null;
        this.business_register_no = null;
        this.company_name = null;
        this.company_ceo = null;
    }
}
class SignUpCountryMock {
    constructor() {
        this.ctgo_country_id = 1;
        this.ctgo_country_name = 'test';
    }
}
class SignUpCompanyInfoMock {
    constructor() {
        this.company_id = 1;
        this.business_register_no = null;
        this.company_name = null;
        this.company_ceo = null;
    }
}
class SignUpProjectInfoMock {
    constructor() {
        this.project_code = "PKWA46";
        this.project_id = 61;
        this.project_name = "데브현장";
    }
}
class SignUpTerms {
    constructor() {
        this.system_terms = null; // 시스템 이용약관
        this.personal_terms = null; // 개인정보 이용약관
        this.sensitive_terms = null; // 민감정보 이용약관
        this.gps_terms = null; // 위치정보 이용약관
        this.sharing_terms = null; // 제 3자 정보제공 이용약관
    }
}


/***/ }),

/***/ 42614:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-terms/sign-up-terms.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".term {\n  height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--ion-color-step-100);\n}\n\n.term-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.view-btn {\n  height: 25px;\n  margin: 0;\n  font-size: 12px;\n  margin-inline: 0;\n  --box-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwyQ0FBMkM7QUFDL0M7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNsQzs7QUFDQTtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBYTtBQUVqQiIsImZpbGUiOiJzaWduLXVwLXRlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXJtIHtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbn1cblxuLnRlcm0tYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udmlldy1idG57XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWlubGluZTogMDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 694:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-terms/sign-up-terms.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('약관 동의') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-sign-up-segment step=\"step4\"></app-sign-up-segment>\n    \n    <app-check-group>\n      <app-check type=\"all\">{{ languagePack.getText('시스템 이용 약관, 개인정보, 민감정보 및 위치정보 수집, 이용, 제3자 제공에 모두 동의합니다.') }}</app-check>\n      <div class=\"term-box\">\n        <app-check name=\"system_terms\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.system_terms\">{{ languagePack.getText('시스템 이용약관 동의') }}<ion-text color=\"red\"> {{ languagePack.getText('(필수)') }}</ion-text></app-check>\n        <ion-button class=\"view-btn\" (click)=\"termPage('system_Terms_and_Conditions.pdf')\">{{ languagePack.getText('전문보기') }}</ion-button>\n      </div>\n\n      <!-- <app-card class=\"term\" \n      [style.border-color]=\"validator.system_terms?.valid === false ? 'var(--ion-color-warning)' : null\">\n        약관 샘플\n      </app-card> -->\n      <app-input-caption *ngIf=\"validator.system_terms?.valid === false\">{{ validator.system_terms.message }}</app-input-caption>\n\n      <div class=\"term-box\">\n        <app-check name=\"personal_terms\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.personal_terms\">{{ languagePack.getText('개인정보 수집 및 이용 동의') }} <ion-text color=\"red\">{{ languagePack.getText('(필수)') }}</ion-text></app-check>\n        <ion-button class=\"view-btn\" (click)=\"termPage('use_personal_information.pdf')\">{{ languagePack.getText('전문보기') }}</ion-button>\n      </div>\n      \n      <!-- <app-card class=\"term\"\n      [style.border-color]=\"validator.personal_terms?.valid === false ? 'var(--ion-color-warning)' : null\">\n        약관 샘플\n      </app-card> -->\n      <app-input-caption *ngIf=\"validator.personal_terms?.valid === false\">{{ validator.personal_terms.message }}</app-input-caption>\n\n      <ng-container *ngIf=\"userType === 'WORKER'\">\n        <div class=\"term-box\">\n          <app-check name=\"sensitive_terms\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.sensitive_terms\">{{ languagePack.getText('민감정보 제공 및 이용동의') }} <ion-text color=\"red\">{{ languagePack.getText('(필수)') }}</ion-text></app-check>\n          <ion-button class=\"view-btn\" (click)=\"termPage('sensitive_information.pdf')\">{{ languagePack.getText('전문보기') }}</ion-button>\n        </div>\n        \n        <!-- <app-card class=\"term\"\n        [style.border-color]=\"validator.sensitive_terms?.valid === false ? 'var(--ion-color-warning)' : null\">\n          약관 샘플\n        </app-card> -->\n        <app-input-caption *ngIf=\"validator.sensitive_terms?.valid === false\">{{ validator.sensitive_terms.message }}</app-input-caption>\n      </ng-container>\n      \n      <div class=\"term-box\">\n        <app-check name=\"gps_terms\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.gps_terms\">{{ languagePack.getText('위치정보 시스템 이용약관 동의') }} <ion-text color=\"red\">{{ languagePack.getText('(필수)') }}</ion-text></app-check>\n        <ion-button class=\"view-btn\" (click)=\"termPage('location_Information.pdf')\">{{ languagePack.getText('전문보기') }}</ion-button>\n      </div>\n      \n      <!-- <app-card class=\"term\"\n      [style.border-color]=\"validator.gps_terms?.valid === false ? 'var(--ion-color-warning)' : null\">\n        약관 샘플\n      </app-card> -->\n      <app-input-caption *ngIf=\"validator.gps_terms?.valid === false\">{{ validator.gps_terms.message }}</app-input-caption>\n      \n      <div class=\"term-box\">\n        <app-check name=\"sharing_terms\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.sharing_terms\">{{ languagePack.getText('제3자 정보 제공 동의') }} <ion-text color=\"red\">{{ languagePack.getText('(필수)') }}</ion-text></app-check>\n        <ion-button class=\"view-btn\" (click)=\"termPage('third-party_information.pdf')\">{{ languagePack.getText('전문보기') }}</ion-button>\n      </div>\n      \n      <!-- <app-card class=\"term\"\n      [style.border-color]=\"validator.sharing_terms?.valid === false ? 'var(--ion-color-warning)' : null\">\n        약관 샘플\n      </app-card> -->\n      <app-input-caption *ngIf=\"validator.sharing_terms?.valid === false\">{{ validator.sharing_terms.message }}</app-input-caption>\n    </app-check-group>\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-card @fadeInAnimation *ngIf=\"res && res.rsCode\" slot=\"top\" color=\"warning\">{{ res.rsMsg }}</app-card>\n  <app-button (click)=\"prev()\">{{ languagePack.getText('이전') }}</app-button>\n  <app-button name=\"submit\" (click)=\"done()\">{{ languagePack.getText('완료') }}</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up-terms_sign-up-terms_module_ts.js.map