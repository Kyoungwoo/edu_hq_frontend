(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_sign-up_sign-up-supervision_sign-up-supervision_module_ts"],{

/***/ 55656:
/*!*************************************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSegmentComponent": () => (/* binding */ SignUpSegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_segment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-segment.component.html */ 68416);
/* harmony import */ var _sign_up_segment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-segment.component.scss */ 9643);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





let SignUpSegmentComponent = class SignUpSegmentComponent {
    constructor(languagePack) {
        this.languagePack = languagePack;
    }
    ngOnInit() { }
};
SignUpSegmentComponent.ctorParameters = () => [
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
SignUpSegmentComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SignUpSegmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sign-up-segment',
        template: _raw_loader_sign_up_segment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_segment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpSegmentComponent);



/***/ }),

/***/ 60238:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up.component.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponentModule": () => (/* binding */ SignUpComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-segment/sign-up-segment.component */ 55656);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/component.module */ 55051);







let SignUpComponentModule = class SignUpComponentModule {
};
SignUpComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__.SignUpSegmentComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule
        ],
        exports: [
            _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__.SignUpSegmentComponent
        ]
    })
], SignUpComponentModule);



/***/ }),

/***/ 86072:
/*!****************************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-supervision/sign-up-supervision-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSupervisionPageRoutingModule": () => (/* binding */ SignUpSupervisionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_supervision_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-supervision.page */ 78347);




const routes = [
    {
        path: '',
        component: _sign_up_supervision_page__WEBPACK_IMPORTED_MODULE_0__.SignUpSupervisionPage
    }
];
let SignUpSupervisionPageRoutingModule = class SignUpSupervisionPageRoutingModule {
};
SignUpSupervisionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpSupervisionPageRoutingModule);



/***/ }),

/***/ 34361:
/*!***********************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-supervision/sign-up-supervision.interface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSuperForm": () => (/* binding */ SignUpSuperForm),
/* harmony export */   "SignUpSuperFormMock": () => (/* binding */ SignUpSuperFormMock)
/* harmony export */ });
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);


const regex = new src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_1__.RegexService();
class SignUpSuperForm {
    constructor() {
        this.company_id = null; //소속 업체 ID
        this.user_name = null; //이름
        this.account_id = null; //아이디
        this.account_token = null; //비밀번호
        this.account_token_conform = null; //account_token_conform
        this.user_birth = null; //생년월일
        this.user_gender = null; //성별
        this.user_phone = null; //휴대폰번호
        this.sms_token = null; //문자 인증번호
        this.user_email = null; //이메일
        this.ctgo_job_position_id = null; //직위 ID
        // ctgo_construction_id:number = null; //공종 ID
        this.project_id = null; //소속 현장 ID
        this.file_preview = [];
        this.file = []; //첨부파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
    }
}
class SignUpSuperFormMock {
    constructor() {
        this.company_id = null; //소속 업체 ID
        this.user_name = regex.random.id('김수홍_super');
        this.account_id = regex.random.id('super'); //아이디
        this.account_token = 'qwer1234'; //비밀번호
        this.account_token_conform = 'qwer1234'; //account_token_conform
        this.user_birth = '1982-07-26'; //생년월일
        this.user_gender = '남'; //성별
        this.user_phone = regex.random.phone(); //'01056044147';//휴대폰번호
        this.sms_token = null; //문자 인증번호
        this.user_email = regex.random.email();
        this.project_id = null; //소속 현장 ID
        this.ctgo_job_position_id = null; //직위 ID
        // ctgo_construction_id:number = null; //공종 ID
        this.file_preview = [];
        this.file = []; //첨부파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
        this.system_terms = null; // 시스템 이용약관
        this.personal_terms = null; // 개인정보 이용약관
        this.gps_terms = null; // 위치정보 이용약관
        this.sharing_terms = null; // 제 3자 정보제공 이용약관
    }
    ; //이름
    ; //이메일
}


/***/ }),

/***/ 71717:
/*!********************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-supervision/sign-up-supervision.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSupervisionPageModule": () => (/* binding */ SignUpSupervisionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_supervision_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-supervision-routing.module */ 86072);
/* harmony import */ var _sign_up_supervision_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-supervision.page */ 78347);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);









let SignUpSupervisionPageModule = class SignUpSupervisionPageModule {
};
SignUpSupervisionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_3__.SignUpComponentModule,
            _sign_up_supervision_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpSupervisionPageRoutingModule
        ],
        declarations: [_sign_up_supervision_page__WEBPACK_IMPORTED_MODULE_1__.SignUpSupervisionPage]
    })
], SignUpSupervisionPageModule);



/***/ }),

/***/ 78347:
/*!******************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-supervision/sign-up-supervision.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSupervisionPage": () => (/* binding */ SignUpSupervisionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_supervision_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-supervision.page.html */ 55880);
/* harmony import */ var _sign_up_supervision_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-supervision.page.scss */ 2659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _sign_up_supervision_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up-supervision.interface */ 34361);












let SignUpSupervisionPage = class SignUpSupervisionPage {
    constructor(el, connect, nav, regex, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new _sign_up_supervision_interface__WEBPACK_IMPORTED_MODULE_9__.SignUpSuperForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _sign_up_supervision_interface__WEBPACK_IMPORTED_MODULE_9__.SignUpSuperForm()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'SUPER' } });
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
            // 입력 데이터 삽입
            const form = new _sign_up_supervision_interface__WEBPACK_IMPORTED_MODULE_9__.SignUpSuperFormMock();
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
            // 직위 가져오기
            el.querySelector('[name=ctgo_job_position_id]').dispatchEvent(new Event('click'));
            yield this.promise.wait(1000);
            // 현장 가져오기
            el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
            yield this.promise.wait(2500);
            // 공종 가져오기
            el.querySelector('[name=ctgo_construction_id]').dispatchEvent(new Event('click'));
            yield this.promise.wait(1000);
            // 다음 페이지로
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
            console.log(this.form);
            console.log(this.validator);
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
        this.nav.navigateBack('/sign-up-type');
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.nav.navigateForward('/sign-up-terms', {
                state: {
                    SignUpSuperForm: this.form
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
            if (!user_email)
                return this.validator.user_email = null;
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
        if (!this.form.user_birth)
            this.validator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
        else
            this.validator.user_birth = { valid: true };
        if (!this.form.user_gender)
            this.validator.user_gender = { message: '성별을 선택해주세요.', valid: false };
        else
            this.validator.user_gender = { valid: true };
        if (!this.form.company_id)
            this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
        else
            this.validator.company_id = { valid: true };
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if (!((_d = this.validator.sms_token) === null || _d === void 0 ? void 0 : _d.valid))
            this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
        else
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if ((_e = this.validator.sms_token) === null || _e === void 0 ? void 0 : _e.valid)
            this.validator.sms_token = { valid: true };
        // if(this.validator.user_email?.valid)
        // this.validator.user_email = { valid: true };
        if (this.form.ctgo_job_position_id == null)
            this.validator.ctgo_job_position_id = { message: '직위를 입력해주세요.', valid: false };
        else
            this.validator.ctgo_job_position_id = { valid: true };
        if (!this.form.company_id)
            this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
        else
            this.validator.company_id = { valid: true };
        if (this.form.project_id == null)
            this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
        else
            this.validator.project_id = { valid: true };
        /* if(this.form.ctgo_construction_id == null) this.validator.ctgo_construction_id = { message: '공종을 입력해주세요.', valid: false };
        else this.validator.ctgo_construction_id = { valid: true }; */
        this.validator.file_preview = { valid: true };
        this.validator.file = { valid: true };
        this.validator.file_json = { valid: true };
        for (let key in this.validator) {
            if (!((_f = this.validator[key]) === null || _f === void 0 ? void 0 : _f.valid))
                return false;
        }
        return true;
    }
};
SignUpSupervisionPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
SignUpSupervisionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sign-up-supervision',
        template: _raw_loader_sign_up_supervision_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_sign_up_supervision_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpSupervisionPage);



/***/ }),

/***/ 9643:
/*!***************************************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-segment-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  min-width: 0;\n  pointer-events: none;\n}\n\nion-segment-button .segment-inner {\n  padding: 8px;\n  text-align: left;\n  width: 100%;\n}\n\nion-segment-button .segment-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  padding: 3px;\n  background: var(--ion-color-primary);\n  margin-bottom: 4px;\n  color: var(--ion-color-white);\n}\n\nion-segment-button .segment-img-checked {\n  display: block;\n}\n\nion-segment-button .segment-img-unchecked {\n  display: none;\n}\n\nion-segment-button .segment-text {\n  min-height: 40px;\n  font-size: var(--font-size-h6);\n}\n\nion-segment-button.segment-button-checked {\n  background: var(--ion-color-primary-translucent);\n}\n\nion-segment-button.segment-button-checked .segment-img-checked {\n  display: block;\n}\n\nion-segment-button.segment-button-checked .segment-img-unchecked {\n  display: none;\n}\n\nion-segment-button.segment-button-checked ~ ion-segment-button .segment-img-checked {\n  display: none;\n}\n\nion-segment-button.segment-button-checked ~ ion-segment-button .segment-img-unchecked {\n  display: block;\n}\n\nion-segment-button.segment-button-checked::part(native) {\n  color: var(--ion-color-dark);\n}\n\n/* @media screen and (max-width: 768px) {\n    ion-segment-button {\n        .segment-text {\n            min-height: 40px;\n            font-size: var(--font-size-h6);\n        }\n    }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc2VnbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztBQUNsQjs7QUFDQTtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7QUFFeEI7O0FBTkE7RUFNUSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7QUFJbkI7O0FBWkE7RUFXUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFLckM7O0FBekJBO0VBdUJRLGNBQWM7QUFNdEI7O0FBN0JBO0VBMEJRLGFBQWE7QUFPckI7O0FBakNBO0VBNkJRLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFRdEM7O0FBTEE7RUFDSSxnREFBZ0Q7QUFRcEQ7O0FBVEE7RUFHUSxjQUFjO0FBVXRCOztBQWJBO0VBTVEsYUFBYTtBQVdyQjs7QUFSQTtFQUVRLGFBQWE7QUFVckI7O0FBWkE7RUFLUSxjQUFjO0FBV3RCOztBQVJBO0VBQ0ksNEJBQTRCO0FBV2hDOztBQVJBOzs7Ozs7O0dBaUJHIiwiZmlsZSI6InNpZ24tdXAtc2VnbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC5zZWdtZW50LWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNlZ21lbnQtaW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIH1cbiAgICAuc2VnbWVudC1pbWctY2hlY2tlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2VnbWVudC1pbWctdW5jaGVja2VkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlZ21lbnQtdGV4dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xuICAgIC5zZWdtZW50LWltZy1jaGVja2VkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zZWdtZW50LWltZy11bmNoZWNrZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIH4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAuc2VnbWVudC1pbWctY2hlY2tlZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zZWdtZW50LWltZy11bmNoZWNrZWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZDo6cGFydChuYXRpdmUpIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC5zZWdtZW50LXRleHQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICAgICAgfVxuICAgIH1cbn0gKi8iXX0= */");

/***/ }),

/***/ 2659:
/*!********************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-supervision/sign-up-supervision.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc3VwZXJ2aXNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNJLHVCQUF1QjtBQUUzQiIsImZpbGUiOiJzaWduLXVwLXN1cGVydmlzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hdmF0YXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmFwcC1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ 68416:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar color=\"white\">\n  <ion-segment mode=\"md\" color=\"primary\" [(ngModel)]=\"step\">\n    <ion-segment-button mode=\"md\" value=\"step1\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">1</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('회원유형 선택') }}\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step2\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">2</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('기본정보') }}\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button *ngIf=\"type === 'WORKER'\" mode=\"md\" value=\"step3\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">3</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('건강 문진') }}<br>\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step4\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">4</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('약관 동의') }}\n        </div>\n      </div>\n      </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step5\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">5</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('가입완료') }}\n        </div>\n      </div>\n      </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>");

/***/ }),

/***/ 55880:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-supervision/sign-up-supervision.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/sign-up-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('회원 가입') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-sign-up-segment step=\"step2\" type=\"LH\"></app-sign-up-segment>\n    <form style=\"margin-top: 16px;\">\n      <app-card color=\"medium\">{{ regex.replace.businessRegisterNo(companyInfo?.business_register_no) }} / {{ companyInfo?.company_name }}</app-card>\n      <app-avatar name=\"profile\"\n      view_type=\"PROFILE\" [(ngModel)]=\"form.file_preview\" [file]=\"form.file\" [file_json]=\"form.file_json\" [readonly]=\"false\"></app-avatar>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input\n          name=\"user_name\" [label]=\"languagePack.getText('성명')\"\n          placeholder=\"이름을 입력해주세요.\"\n          [color]=\"validator.user_name?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_name\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.user_name?.valid === false\" color=\"warning\">{{ validator.user_name?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-input\n          name=\"account_id\" [label]=\"languagePack.getText('아이디')\"\n          [placeholder]=\"languagePack.getText('영문과 숫자만 입력해주세요.')\"\n          [color]=\"validator.account_id?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_id\" (delayKeyup)=\"overlapId()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_id?.valid === false\" color=\"warning\">{{ validator.account_id?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input name=\"account_token\" [label]=\"languagePack.getText('비밀번호')\" type=\"password\"\n          [placeholder]=\"languagePack.getText('영문, 숫자, 조합(6~20자)')\"\n          [color]=\"validator.account_token?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_token\" (delayKeyup)=\"checkPass()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_token?.valid === false\" color=\"warning\">{{ validator.account_token?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-input name=\"account_token_conform\" [label]=\"languagePack.getText('비밀번호 확인')\" [placeholder]=\"languagePack.getText('비밀번호를 재입력 해주세요.')\" type=\"password\"\n          [color]=\"validator.account_token_conform?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.account_token_conform\" (delayKeyup)=\"checkPassConfirm()\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"validator.account_token_conform?.valid === false\" color=\"warning\">{{ validator.account_token_conform?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-calendar name=\"user_birth\" [label]=\"languagePack.getText('생년월일')\" \n          [color]=\"validator.user_birth?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_birth\" [required]=\"true\"></app-calendar>\n          <app-input-caption *ngIf=\"validator.user_birth?.valid === false\" color=\"warning\">{{ validator.user_birth?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-radio-input name=\"user_gender\" [label]=\"languagePack.getText('성별')\" \n          [color]=\"validator.user_gender?.valid === false && 'warning'\"\n          [(ngModel)]=\"form.user_gender\" [required]=\"true\">\n            <app-radio value=\"남\">남</app-radio>\n            <app-radio value=\"여\">여</app-radio>\n          </app-radio-input>\n          <app-input-caption *ngIf=\"validator.user_gender?.valid === false\" color=\"warning\">{{ validator.user_gender?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-input name=\"user_phone\" [label]=\"languagePack.getText('휴대폰')\" [placeholder]=\"languagePack.getText('-없이 숫자만 입력해주세요.')\" type=\"tel\" \n          [color]=\"validator.user_phone?.valid === false ? 'warning' \n          : validator.sms_token?.valid === true && 'success'\"\n          [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"overlapPhone()\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n          {{ languagePack.getText('인증번호') }}<br>받기\n          </app-input>\n          <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n          <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">인증이 완료되었습니다.</app-input-caption>\n        </app-col>\n        <app-col>\n          <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n            <app-input\n            name=\"sms_token\" [label]=\"languagePack.getText('인증번호')\" [placeholder]=\"languagePack.getText('인증번호를 입력해주세요.')\" type=\"tel\"\n            [color]=\"validator.sms_token?.valid === false && 'warning'\"\n            [(ngModel)]=\"form.sms_token\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n            {{ languagePack.getText('확인') }}\n            </app-input>\n          </div>\n          <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n      <app-row mobileBreak>\n        <app-col>\n          <app-email name=\"user_email\" label=\"이메일\" \n          [color]=\"validator.user_email?.valid === false && 'warning'\"\n          (delayKeyup)=\"overlapEmail()\"\n          [(ngModel)]=\"form.user_email\"></app-email>\n          <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-select-position [company_id]=\"form.company_id\" name=\"ctgo_job_position_id\" [(ngModel)]=\"form.ctgo_job_position_id\" [required]=\"true\"></app-select-position>\n        </app-col>\n      </app-row>\n\n      <app-select-scene name=\"project_id\" type=\"SIGNUP\"\n      [color]=\"validator.project_id?.valid === false && 'warning'\"\n      [company_id]=\"form.company_id\"\n      [(ngModel)]=\"form.project_id\" [required]=\"true\"></app-select-scene>\n      <app-input-caption *ngIf=\"validator.project_id?.valid === false\" color=\"warning\">{{ validator.project_id?.message }}</app-input-caption>\n\n      <!-- <app-select-construction name=\"ctgo_construction_id\" \n      [color]=\"validator.ctgo_construction_id?.valid === false && 'warning'\"\n      [project_id]=\"form.project_id\"\n      [(ngModel)]=\"form.ctgo_construction_id\" [disabled]=\"!form.project_id\" [required]=\"true\"></app-select-construction>\n      <app-input-caption *ngIf=\"validator.ctgo_construction_id?.valid === false\" color=\"warning\">{{ validator.ctgo_construction_id?.message }}</app-input-caption> -->\n    </form>\n  </app-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"prev()\">{{ languagePack.getText('이전') }}</app-button>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up-supervision_sign-up-supervision_module_ts.js.map