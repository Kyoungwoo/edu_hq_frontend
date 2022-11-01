(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_sign-up_sign-up-health_sign-up-health_module_ts"],{

/***/ 42133:
/*!******************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-health/sign-up-health-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpHealthPageRoutingModule": () => (/* binding */ SignUpHealthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_health_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-health.page */ 24807);




const routes = [
    {
        path: '',
        component: _sign_up_health_page__WEBPACK_IMPORTED_MODULE_0__.SignUpHealthPage
    }
];
let SignUpHealthPageRoutingModule = class SignUpHealthPageRoutingModule {
};
SignUpHealthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpHealthPageRoutingModule);



/***/ }),

/***/ 83719:
/*!**********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-health/sign-up-health.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpHealthPageModule": () => (/* binding */ SignUpHealthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_health_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-health-routing.module */ 42133);
/* harmony import */ var _sign_up_health_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-health.page */ 24807);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);









let SignUpHealthPageModule = class SignUpHealthPageModule {
};
SignUpHealthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_3__.SignUpComponentModule,
            _sign_up_health_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpHealthPageRoutingModule
        ],
        declarations: [_sign_up_health_page__WEBPACK_IMPORTED_MODULE_1__.SignUpHealthPage]
    })
], SignUpHealthPageModule);



/***/ }),

/***/ 24807:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-health/sign-up-health.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpHealthPage": () => (/* binding */ SignUpHealthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_health_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-health.page.html */ 48081);
/* harmony import */ var _sign_up_health_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-health.page.scss */ 72470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _sign_up_worker_sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-up-worker/sign-up-worker.interface */ 67711);











let SignUpHealthPage = class SignUpHealthPage {
    constructor(el, nav, promise, languagePack) {
        this.el = el;
        this.nav = nav;
        this.promise = promise;
        this.languagePack = languagePack;
        this.signUpWorkerInfo = new _sign_up_worker_sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_8__.signUpWorkerInfo();
        this.form = new _sign_up_worker_sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_8__.SignUpWorkerHealth();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _sign_up_worker_sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_8__.SignUpWorkerHealth()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'WORKER' } });
        this.companyInfo = history.state.companyInfo;
        this.signUpWorkerInfo = history.state.signUpWorkerInfo;
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.SignUp.test)
                return;
            const el = this.el.nativeElement;
            // 가짜 정보 입력
            this.form = new _sign_up_worker_sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_8__.SignUpWorkerHealthMock();
            yield this.promise.wait();
            // 다음 페이지로
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
        });
    }
    checkParams() {
        var _a, _b;
        if (((_a = history.state) === null || _a === void 0 ? void 0 : _a.companyInfo)
            && ((_b = history.state) === null || _b === void 0 ? void 0 : _b.signUpWorkerInfo))
            return true;
        else
            return false;
    }
    prev() {
        this.nav.back();
    }
    next() {
        if (!this.valid())
            return;
        this.nav.navigateForward('/sign-up-terms', {
            state: {
                companyInfo: this.companyInfo,
                signUpWorkerInfo: this.signUpWorkerInfo,
                signUpWorkerHealth: this.form
            }
        });
    }
    valid() {
        var _a;
        if (this.form.use_drugs_state == null)
            this.validator.use_drugs_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.use_drugs_state = { valid: true };
        if (this.form.use_drugs_state === 1
            && !this.form.use_drugs_content)
            this.validator.use_drugs_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.use_drugs_content = { valid: true };
        if (this.form.brain_cure_state == null)
            this.validator.brain_cure_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.brain_cure_state = { valid: true };
        if (this.form.brain_cure_state === 1
            && !this.form.brain_cure_content.length)
            this.validator.brain_cure_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.brain_cure_content = { valid: true };
        if (this.form.vomiting_state == null)
            this.validator.vomiting_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.vomiting_state = { valid: true };
        if (this.form.vomiting_state === 1
            && !this.form.vomiting_content)
            this.validator.vomiting_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.vomiting_content = { valid: true };
        if (this.form.pain_head_state == null)
            this.validator.pain_head_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.pain_head_state = { valid: true };
        if (this.form.pain_head_state === 1
            && !this.form.pain_head_content)
            this.validator.pain_head_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.pain_head_content = { valid: true };
        if (this.form.etc_disease_state == null)
            this.validator.etc_disease_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.etc_disease_state = { valid: true };
        if (this.form.etc_disease_state === 1
            && !this.form.etc_disease_content)
            this.validator.etc_disease_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.etc_disease_content = { valid: true };
        if (this.form.covid_nineteen_state == null)
            this.validator.covid_nineteen_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.covid_nineteen_state = { valid: true };
        if (this.form.covid_nineteen_state === 1
            && !this.form.covid_nineteen_content)
            this.validator.covid_nineteen_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.covid_nineteen_content = { valid: true };
        if (this.form.covid_vaccine_state == null)
            this.validator.covid_vaccine_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.validator.covid_vaccine_state = { valid: true };
        if (this.form.health_terms_state !== 1)
            this.validator.health_terms_state = { valid: false, message: '항목에 동의해주세요.' };
        else
            this.validator.health_terms_state = { valid: true };
        for (let key in this.validator) {
            if (!((_a = this.validator[key]) === null || _a === void 0 ? void 0 : _a.valid))
                return false;
        }
        return true;
    }
};
SignUpHealthPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
SignUpHealthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sign-up-health',
        template: _raw_loader_sign_up_health_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInAnimation],
        styles: [_sign_up_health_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpHealthPage);



/***/ }),

/***/ 72470:
/*!**********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-health/sign-up-health.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLWhlYWx0aC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 48081:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-health/sign-up-health.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/sign-up-company?userType=WORKER\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('건강 문진 작성') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<app-container size=\"small\">\n  <app-sign-up-segment step=\"step3\" type=\"WORKER\"></app-sign-up-segment>\n  <form>\n    <h4>1. {{ languagePack.getText('현재 복용하고 있는 약물이 있습니까?') }}</h4>\n    <app-radio-input name=\"use_drugs_state\" \n    [color]=\"validator.use_drugs_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.use_drugs_state\" (change)=\"form.use_drugs_content = ''\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.use_drugs_state?.valid === false\" color=\"warning\">{{ validator.use_drugs_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"form.use_drugs_state\"\n    [color]=\"validator.use_drugs_content?.valid === false && 'warning'\"\n    name=\"use_drugs_content\" [placeholder]=\"languagePack.getText('약물명을 입력해주세요.')\"\n    [(ngModel)]=\"form.use_drugs_content\"></app-input>\n    <app-input-caption *ngIf=\"validator.use_drugs_content?.valid === false\" color=\"warning\">{{ validator.use_drugs_content.message }}</app-input-caption>\n    \n\n    <h4>2. {{ languagePack.getText('과거나 현재 뇌, 심혈관질환으로 치료를 받았거나 받고 있습니까?') }}</h4>\n    <app-radio-input name=\"brain_cure_state\"\n    [color]=\"validator.brain_cure_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.brain_cure_state\" (change)=\"!form.brain_cure_state && form.brain_cure_content = []\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.brain_cure_state?.valid === false\" color=\"warning\">{{ validator.brain_cure_state.message }}</app-input-caption>\n\n    <div @fadeInAnimation *ngIf=\"form.brain_cure_state\">\n      {{ languagePack.getText('* 해당하는 항목에 체크해주세요') }}\n      <app-input-template [color]=\"validator.brain_cure_content?.valid === false && 'warning'\">\n        <app-check-group slot=\"input\" name=\"brain_cure_content\" \n        [(ngModel)]=\"form.brain_cure_content\">\n          <app-check on=\"뇌졸중\">{{ languagePack.getText('뇌졸중') }}</app-check>\n          <app-check on=\"뇌출혈\">{{ languagePack.getText('뇌출혈') }}</app-check>\n          <app-check on=\"협심증\">{{ languagePack.getText('협심증') }}</app-check>\n          <app-check on=\"심근경색\">{{ languagePack.getText('심근경색') }}</app-check>\n          <app-check on=\"간질발작\">{{ languagePack.getText('간질발작') }}</app-check>\n        </app-check-group>\n      </app-input-template>\n    </div>\n    <app-input-caption *ngIf=\"validator.brain_cure_content?.valid === false\" color=\"warning\">{{ validator.brain_cure_content.message }}</app-input-caption>\n\n\n    <h4>3. {{ languagePack.getText('최근 가슴을 쥐어짜는 통증,오심,구토 증상을 겪은 적이 있습니까?') }}</h4>\n    <app-radio-input name=\"vomiting_state\" \n    [color]=\"validator.vomiting_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.vomiting_state\" (change)=\"form.vomiting_content = ''\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.vomiting_state?.valid === false\" color=\"warning\">{{ validator.vomiting_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"form.vomiting_state\" \n    [color]=\"validator.vomiting_content?.valid === false && 'warning'\"\n    name=\"vomiting_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\" \n    [(ngModel)]=\"form.vomiting_content\"></app-input>\n    <app-input-caption *ngIf=\"validator.vomiting_content?.valid === false\" color=\"warning\">{{ validator.vomiting_content.message }}</app-input-caption>\n\n\n    <h4>4. {{ languagePack.getText('최근 갑자기 한쪽 팔, 다리에 힘이 빠지거나 말이 어눌하게 나오거나 두통, 어지러운 증상을 겪은 적이 있습니까?') }}</h4>\n    <app-radio-input name=\"pain_head_state\" \n    [color]=\"validator.pain_head_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.pain_head_state\" (change)=\"form.pain_head_content = ''\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.pain_head_state?.valid === false\" color=\"warning\">{{ validator.pain_head_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"form.pain_head_state\" \n    [color]=\"validator.pain_head_content?.valid === false && 'warning'\"\n    name=\"pain_head_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\" \n    [(ngModel)]=\"form.pain_head_content\"></app-input>\n    <app-input-caption *ngIf=\"validator.pain_head_content?.valid === false\" color=\"warning\">{{ validator.pain_head_content.message }}</app-input-caption>\n\n\n    <h4>5. {{ languagePack.getText('현재 기타 질병(당뇨, 간장질환, 폐질환 등) 으로 치료를 받고 있습니까?') }}</h4>\n    <app-radio-input name=\"etc_disease_state\" \n    [color]=\"validator.etc_disease_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.etc_disease_state\" (change)=\"form.etc_disease_content = ''\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.etc_disease_state?.valid === false\" color=\"warning\">{{ validator.etc_disease_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"form.etc_disease_state\" \n    [color]=\"validator.etc_disease_content?.valid === false && 'warning'\"\n    name=\"etc_disease_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\"\n    [(ngModel)]=\"form.etc_disease_content\"></app-input>\n    <app-input-caption *ngIf=\"validator.etc_disease_content?.valid === false\" color=\"warning\">{{ validator.etc_disease_content.message }}</app-input-caption>\n\n\n    <h4> 6. {{ languagePack.getText('본인이 코로나19가 의심되는 아래의 임상 증상이 있습니까? (*주요 임상증상)체온 37.5℃ 이상, 기침, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각미각 소실 또는 폐렴 (단, 코로나19와 관게없이 평소의 기저질환으로 인한 증상인 경우는 제외)') }}\n    </h4>\n    <app-radio-input name=\"covid_nineteen_state\" \n    [color]=\"validator.covid_nineteen_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.covid_nineteen_state\" (change)=\"form.covid_nineteen_content = ''\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.covid_nineteen_state?.valid === false\" color=\"warning\">{{ validator.covid_nineteen_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"form.covid_nineteen_state\" \n    [color]=\"validator.covid_nineteen_state?.valid === false && 'warning'\"\n    name=\"covid_nineteen_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\"\n    [(ngModel)]=\"form.covid_nineteen_content\"></app-input>\n    <app-input-caption *ngIf=\"validator.covid_nineteen_content?.valid === false\" color=\"warning\">{{ validator.covid_nineteen_content.message }}</app-input-caption>\n\n\n    <h4>7. {{ languagePack.getText('코로나 백신 접종을 하셨습니까?') }}</h4>\n    <app-radio-input name=\"covid_vaccine_state\" \n    [color]=\"validator.covid_vaccine_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.covid_vaccine_state\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('미접종') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('접종') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"validator.covid_vaccine_state?.valid === false\" color=\"warning\">{{ validator.covid_vaccine_state.message }}</app-input-caption>\n\n\n    <app-check name=\"health_terms_state\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"form.health_terms_state\">{{ languagePack.getText('본인은 질병예방과 안전한 작업을 위하여 문진자료를 사업창에 제공하는것에 동의합니다.') }}</app-check>\n    <app-input-caption *ngIf=\"validator.health_terms_state?.valid === false\" color=\"warning\">{{ validator.health_terms_state.message }}</app-input-caption>\n    \n  </form>\n</app-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"prev()\">{{ languagePack.getText('이전') }}</app-button>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up-health_sign-up-health_module_ts.js.map