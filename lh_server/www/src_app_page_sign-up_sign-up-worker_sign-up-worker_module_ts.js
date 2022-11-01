(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_sign-up_sign-up-worker_sign-up-worker_module_ts"],{

/***/ 9260:
/*!******************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-worker/sign-up-worker-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpWorkerPageRoutingModule": () => (/* binding */ SignUpWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-worker.page */ 38227);




const routes = [
    {
        path: '',
        component: _sign_up_worker_page__WEBPACK_IMPORTED_MODULE_0__.SignUpWorkerPage
    }
];
let SignUpWorkerPageRoutingModule = class SignUpWorkerPageRoutingModule {
};
SignUpWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpWorkerPageRoutingModule);



/***/ }),

/***/ 61713:
/*!**********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-worker/sign-up-worker.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpWorkerPageModule": () => (/* binding */ SignUpWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-worker-routing.module */ 9260);
/* harmony import */ var _sign_up_worker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-worker.page */ 38227);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let SignUpWorkerPageModule = class SignUpWorkerPageModule {
};
SignUpWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__.SignUpComponentModule,
            _sign_up_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpWorkerPageRoutingModule
        ],
        declarations: [_sign_up_worker_page__WEBPACK_IMPORTED_MODULE_1__.SignUpWorkerPage]
    })
], SignUpWorkerPageModule);



/***/ }),

/***/ 38227:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-worker/sign-up-worker.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpWorkerPage": () => (/* binding */ SignUpWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-worker.page.html */ 10003);
/* harmony import */ var _sign_up_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-worker.page.scss */ 3718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up-worker.interface */ 67711);












let SignUpWorkerPage = class SignUpWorkerPage {
    constructor(el, connect, nav, regex, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new _sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_9__.signUpWorkerInfo();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_9__.signUpWorkerInfo()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'WORKER' } });
        this.companyInfo = history.state.companyInfo;
        this.form.company_id = this.companyInfo.company_id;
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.SignUp.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 가짜 데이터 삽입
            this.form = new _sign_up_worker_interface__WEBPACK_IMPORTED_MODULE_9__.signUpWorkerInfoMock();
            this.form.company_id = this.companyInfo.company_id;
            // 프로필 사진 넣기
            // el.querySelector('')
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
            // 국가 가져오기
            this.changeDetector.detectChanges();
            el.querySelector('[name=ctgo_country_id]').dispatchEvent(new Event('click'));
            yield this.promise.wait();
            // 현장 가져오기
            this.changeDetector.detectChanges();
            el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
            yield this.promise.wait(3000);
            // 다음 페이지로
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
        });
    }
    checkParams() {
        var _a;
        if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.companyInfo)
            return true;
        else
            return false;
    }
    prev() {
        this.nav.back();
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.form);
            console.log(this.validator);
            if (!this.valid())
                return;
            console.log("asdfasdfsdaf");
            this.nav.navigateForward('/sign-up-health', {
                state: {
                    companyInfo: this.companyInfo,
                    signUpWorkerInfo: this.form
                }
            });
        });
    }
    overlapId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { account_id } = this.form;
            if (!account_id)
                return this.validator.account_id = null;
            if ((account_id === null || account_id === void 0 ? void 0 : account_id.length) < 3)
                return this.validator.account_id = { valid: false, message: '아이디를 3자 이상 입력해주세요.' };
            const res = yield this.connect.run('/forSignUp/overlap/id', { account_id });
            this.validator.account_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    checkPass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
    // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.form;
            if (!user_phone)
                return this.validator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            const res = yield this.connect.run('/forSignUp/overlap/phone', { user_phone });
            this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.sms_token = null;
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
            // 문자 인증번호 가져와서 넣기
            const res2 = yield this.connect.run('/test/sms/get', { user_phone });
            this.form.sms_token = res2.rsObj.sms_token;
            yield this.promise.wait();
        });
    }
    aligoCheck() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, sms_token } = this.form;
            const res = yield this.connect.run('/aligo/check', { user_phone, sms_token });
            this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_email } = this.form;
            if (!user_email) {
                this.validator.user_email = null;
                return;
            }
            const res = yield this.connect.run('/forSignUp/overlap/email', { user_email });
            this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    findFile(view_type) {
        return this.form.file_preview.find(futItem => futItem.view_type === view_type);
    }
    valid() {
        var _a, _b, _c, _d, _e, _f;
        this.validator.user_email = { valid: true };
        if (!this.form.user_name)
            this.validator.user_name = { message: '이름을 입력해주세요.', valid: false };
        else
            this.validator.user_name = { valid: true };
        if (!this.form.account_id)
            this.validator.account_id = { message: '아이디를 입력해주세요.', valid: false };
        else if ((_a = this.validator.account_id) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.account_id = { valid: true };
        if (!this.form.account_token)
            this.validator.account_token = { message: '비밀번호를 입력해주세요.', valid: false };
        else if ((_b = this.validator.account_token) === null || _b === void 0 ? void 0 : _b.valid)
            this.validator.account_token = { valid: true };
        if (!this.form.account_token_conform)
            this.validator.account_token_conform = { message: '비밀번호 확인을 입력해주세요.', valid: false };
        else if ((_c = this.validator.account_token_conform) === null || _c === void 0 ? void 0 : _c.valid)
            this.validator.account_token_conform = { valid: true };
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_d = this.validator.user_phone) === null || _d === void 0 ? void 0 : _d.valid)
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if (!((_e = this.validator.sms_token) === null || _e === void 0 ? void 0 : _e.valid))
            this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
        else
            this.validator.sms_token = { valid: true };
        if (!this.form.user_birth)
            this.validator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
        else
            this.validator.user_birth = { valid: true };
        // if(this.validator.user_email?.valid)
        // this.validator.user_email = { valid: true };
        if (!this.form.user_gender)
            this.validator.user_gender = { message: '성별을 선택해주세요.', valid: false };
        else
            this.validator.user_gender = { valid: true };
        if (!this.form.ctgo_country_id)
            this.validator.ctgo_country_id = { message: '국가를 선택해주세요.', valid: false };
        else
            this.validator.ctgo_country_id = { valid: true };
        if (!this.form.company_id)
            this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
        else
            this.validator.company_id = { valid: true };
        if (!this.form.project_id)
            this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
        else
            this.validator.project_id = { valid: true };
        // if(!this.form.basic_safe_edu_date) this.validator.basic_safe_edu_date = { message: '기초안전보건교육 이수날짜를 입력해주세요.', valid: false };
        this.validator.basic_safe_edu_date = { valid: true };
        //
        this.validator.file_preview = { valid: true };
        // if(!this.form.file) this.validator.file = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
        this.validator.file = { valid: true };
        // if(!this.form.file_json) this.validator.file_json = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
        this.validator.file_json = { valid: true };
        for (let key in this.validator) {
            if (!((_f = this.validator[key]) === null || _f === void 0 ? void 0 : _f.valid))
                return false;
        }
        return true;
    }
};
SignUpWorkerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
SignUpWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sign-up-worker',
        template: _raw_loader_sign_up_worker_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_sign_up_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpWorkerPage);



/***/ }),

/***/ 3718:
/*!**********************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-worker/sign-up-worker.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtd29ya2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7RUFDSSx1QkFBdUI7QUFFM0IiLCJmaWxlIjoic2lnbi11cC13b3JrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF2YXRhciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuYXBwLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Il19 */");

/***/ }),

/***/ 10003:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-worker/sign-up-worker.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/sign-up-company?userType=WORKER\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('회원 가입') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-container size=\"small\">\n    <app-sign-up-segment step=\"step2\" type=\"WORKER\"></app-sign-up-segment>\n    <form style=\"margin-top: 16px;\">\n      <app-card color=\"medium\">{{ regex.replace.businessRegisterNo(companyInfo?.business_register_no) }} / {{ companyInfo?.company_name }}</app-card>\n      <app-avatar name=\"input-profile\" \n      view_type=\"PROFILE\" [(ngModel)]=\"form.file_preview\" [file]=\"form.file\" [file_json]=\"form.file_json\" [readonly]=\"false\"></app-avatar>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input\n          name=\"user_name\" [label]=\"languagePack.getText('성명')\"\n          [placeholder]=\"languagePack.getText('이름을 입력해주세요')\"\n          [color]=\"validator.user_name?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_name\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.user_name?.valid === false\" color=\"warning\">{{ validator.user_name?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-input\n          name=\"account_id\" [label]=\"languagePack.getText('아이디')\"\n          [placeholder]=\"languagePack.getText('영문과 숫자만 입력해주세요.')\"\n          [color]=\"validator.account_id?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_id\" (delayKeyup)=\"overlapId()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_id?.valid === false\" color=\"warning\">{{ validator.account_id?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input name=\"account_token\" [label]=\"languagePack.getText('비밀번호')\" type=\"password\"\n          [placeholder]=\"languagePack.getText('영문, 숫자, 조합(6~20자)')\"\n          [color]=\"validator.account_token?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_token\" (delayKeyup)=\"checkPass()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_token?.valid === false\" color=\"warning\">{{ validator.account_token?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-input name=\"account_token_conform\" [label]=\"languagePack.getText('비밀번호 확인')\" [placeholder]=\"languagePack.getText('비밀번호를 재입력 해주세요.')\" type=\"password\"\n          [color]=\"validator.account_token_conform?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_token_conform\" (delayKeyup)=\"checkPassConfirm()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_token_conform?.valid === false\" color=\"warning\">{{ validator.account_token_conform?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-calendar name=\"user_birth\" [label]=\"languagePack.getText('생년월일')\" \n          [color]=\"validator.user_birth?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_birth\" [required]=\"true\"></app-calendar>\n          <app-input-caption *ngIf=\"validator.user_birth?.valid === false\" color=\"warning\">{{ validator.user_birth?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-radio-input name=\"user_gender\" [label]=\"languagePack.getText('성별')\" \n          [color]=\"validator.user_gender?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_gender\" [required]=\"true\">\n            <app-radio value=\"남\">{{ languagePack.getText('남자') }}</app-radio>\n            <app-radio value=\"여\">{{ languagePack.getText('여자') }}</app-radio>\n          </app-radio-input>\n          <app-input-caption *ngIf=\"validator.user_gender?.valid === false\" color=\"warning\">{{ validator.user_gender?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input name=\"user_phone\" [label]=\"languagePack.getText('휴대폰')\" [placeholder]=\"languagePack.getText('-없이 숫자만 입력해주세요.')\" type=\"tel\" \n          [color]=\"validator.user_phone?.valid === false ? 'warning' \n          : validator.sms_token?.valid === true && 'success'\"\n          [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"overlapPhone()\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n          {{ languagePack.getText('인증번호') }}<br>{{ languagePack.getText('받기') }}\n          </app-input>\n          <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n          <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">{{ languagePack.getText('인증이 완료되었습니다.') }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n            <app-input\n            name=\"sms_token\" [label]=\"languagePack.getText('인증번호')\" [placeholder]=\"languagePack.getText('인증번호를 입력해주세요.')\" type=\"tel\"\n            [color]=\"validator.sms_token?.valid === false && 'warning'\"\n            [(ngModel)]=\"form.sms_token\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n            {{ languagePack.getText('확인') }}\n            </app-input>\n          </div>\n          <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-email name=\"user_email\" [label]=\"languagePack.getText('이메일')\"\n          [color]=\"validator.user_email?.valid === false && 'warning'\"\n          (delayKeyup)=\"overlapEmail()\"\n          [(ngModel)]=\"form.user_email\"></app-email>\n          <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-select-country name=\"국가\" [label]=\"languagePack.getText('국가')\"\n          name=\"ctgo_country_id\"\n          [color]=\"validator.ctgo_country_id?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.ctgo_country_id\" [required]=\"true\"></app-select-country>\n          <app-input-caption *ngIf=\"validator.ctgo_country_id?.valid === false\" color=\"warning\">{{ validator.ctgo_country_id?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input-template [label]=\"languagePack.getText('기초안전보건교육 이수증')\">\n            <p *ngIf=\"!findFile('BASIC_SAFE_EDU') else tempBasicSafeEduValue\" slot=\"input\">{{ languagePack.getText('기초안전보건교육 이수증') }}</p>\n            <ng-template #tempBasicSafeEduValue>\n              <ion-text color=\"dark\" slot=\"input\">{{ findFile('BASIC_SAFE_EDU').file_name }}</ion-text>\n            </ng-template>\n            {{ languagePack.getText('파일찾기') }}\n            <app-file name=\"input-basic_safe_edu\" [(ngModel)]=\"form.file_preview\" view_type=\"BASIC_SAFE_EDU\" [file]=\"form.file\" [file_json]=\"form.file_json\"></app-file>\n          </app-input-template>\n        </app-col>\n        <app-col>\n          <app-calendar [name]=\"languagePack.getText('건설업 기초 안전보건교육 이수일')\" [label]=\"languagePack.getText('건설업 기초 안전보건교육 이수일')\" [(ngModel)]=\"form.basic_safe_edu_date\"></app-calendar>\n        </app-col>\n      </app-row>\n      <app-select-scene name=\"project_id\" [label]=\"languagePack.getText('현장명')\" type=\"SIGNUP\"\n      [company_id]=\"form.company_id\"\n      [color]=\"validator.project_id?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.project_id\" [required]=\"true\"></app-select-scene>\n      <app-input-caption *ngIf=\"validator.project_id?.valid === false\" color=\"warning\">{{ validator.project_id?.message }}</app-input-caption>\n    </form>\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"prev()\">{{ languagePack.getText('이전') }}</app-button>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up-worker_sign-up-worker_module_ts.js.map