(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_my-page_my-page_my-page_page_ts"],{

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

/***/ 66802:
/*!****************************************************************!*\
  !*** ./src/app/page/my-page/change-phone/change-phone.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePhoneForm": () => (/* binding */ ChangePhoneForm),
/* harmony export */   "ChangePhonePage": () => (/* binding */ ChangePhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_phone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-phone.page.html */ 23412);
/* harmony import */ var _change_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-phone.page.scss */ 86875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);













class ChangePhoneForm {
    constructor() {
        this.user_phone = null; // 휴대폰 번호
        this.sms_token = null; // 토큰
    }
}
let ChangePhonePage = class ChangePhonePage {
    constructor(el, alert, _modal, connect, promise, regex, toast, changeDetector, languagePack) {
        this.el = el;
        this.alert = alert;
        this._modal = _modal;
        this.connect = connect;
        this.promise = promise;
        this.regex = regex;
        this.toast = toast;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new ChangePhoneForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new ChangePhoneForm()).validator;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.core.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 데이터 입력
            el.querySelector('[name=user_phone]').dispatchEvent(new CustomEvent('setValue', { detail: this.regex.random.phone() }));
            yield this.promise.wait();
            // 문자 인증 전송
            el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait(1500);
            // 문자 인증번호 가져와서 넣기
            const { user_phone } = this.form;
            const res = yield this.connect.run('/test/sms/get', { user_phone });
            el.querySelector('[name=sms_token]').dispatchEvent(new CustomEvent('setValue', { detail: res.rsObj.sms_token }));
            yield this.promise.wait();
            // 문자 인증
            el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait();
            // 변경하기
            el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
            yield this.promise.wait(800);
            document.querySelector('.alert-button').dispatchEvent(new Event('click'));
        });
    }
    dismiss() {
        this._modal.dismiss();
    }
    /** 휴대폰번호 관련 코드 */
    // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.form;
            if (!user_phone)
                return this.validator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            /** /forSignUp/overlap/phone 이거 사용한거 실수 아님. 내 폰번호 포함 모든 번호를 중복 체크 해야되기 때문에 이렇게 함. */
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
            const res = yield this.connect.run('/mypage/send/sms', { user_phone });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    aligoCheck() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, sms_token } = this.form;
            const res = yield this.connect.run('/mypage/check/sms', { user_phone, sms_token });
            this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    /** submit */
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            const res = yield this.connect.run('/mypage/phone/update', this.form);
            if (res.rsCode === 0) {
                this._modal.dismiss({ update: true });
                this.alert.present({
                    img: 'assets/basic/img/check-circle-primary.svg',
                    message: '휴대폰 번호가 변경되었습니다.'
                });
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    valid() {
        var _a, _b, _c;
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if (!((_b = this.validator.sms_token) === null || _b === void 0 ? void 0 : _b.valid))
            this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
        else
            this.validator.sms_token = { valid: true };
        for (let key in this.validator) {
            if (!((_c = this.validator[key]) === null || _c === void 0 ? void 0 : _c.valid))
                return false;
        }
        return true;
    }
};
ChangePhonePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__.RegexService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
ChangePhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-change-phone',
        template: _raw_loader_change_phone_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_change_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePhonePage);



/***/ }),

/***/ 44151:
/*!******************************************************!*\
  !*** ./src/app/page/my-page/my-page/my-page.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicForm": () => (/* binding */ BasicForm),
/* harmony export */   "BelongForm": () => (/* binding */ BelongForm),
/* harmony export */   "EducationGetForm": () => (/* binding */ EducationGetForm),
/* harmony export */   "EducationRes": () => (/* binding */ EducationRes),
/* harmony export */   "MyPagePage": () => (/* binding */ MyPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page.page.html */ 93499);
/* harmony import */ var _my_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page.page.scss */ 42911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../change-password/change-password.page */ 62956);
/* harmony import */ var _change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../change-phone/change-phone.page */ 66802);

















/** 기본 정보 class */
class BasicForm {
    constructor() {
        this.account_id = null; // 아이디
        this.user_name = null; // 유저 이름
        this.user_gender = null; // 유저 성별
        this.user_email = null; // 유저 이메일
        this.user_birth = null; // 유저 생년월일
        this.user_phone = null; // 유저 연락처
        this.ctgo_country_id = null; // 국적 아이디
        this.ctgo_country_name = null; // 국적 이름
        this.user_profile_file_data = []; // 유저 프로필 데이터
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson(); // 파일 JSON
        this.update_date = null;
    }
}
/** 소속 정보 class */
class BelongForm {
    constructor() {
        /** 공통 form */
        this.user_id = null;
        this.user_role = null;
        this.project_id = null;
        this.project_name = null;
        this.master_company_id = null;
        this.master_company_name = null;
        this.company_id = null;
        this.company_name = null;
        this.ctgo_job_position_id = null;
        this.ctgo_job_position_name = null;
        // 출역 기간
        this.construction_start_date = null;
        this.construction_end_date = null;
        /** LH form */
        this.hq_regional_id = null;
        this.hq_regional_name = null;
        this.hq_regional_entire_state = null;
        this.hq_business_id = null;
        this.hq_business_name = null;
        this.hq_business_entire_state = null;
        this.hq_department_id = null;
        this.hq_department_name = null;
        // 공사 기간
        this.contract_start_date = null;
        this.contract_end_date = null;
        /** 원청사, 협력사, 작업자 form */
        this.ctgo_construction_id = null;
        this.ctgo_construction_name = null;
        /** 원청사, 협력사, 작업자 form */
        this.safe_job_data = [];
        /** 작업자 form */
        this.ctgo_occupation_id = null;
        this.ctgo_occupation_name = null;
        this.ctgo_occupation_role = null;
        this.user_certify_no = null; // 면허번호
    }
}
/** 교육이력 class */
class EducationGetForm {
    constructor() {
        this.ctgo_education_safe_types = [];
        this.project_id = null;
        this.project_name = null;
        this.search_text = null;
    }
}
class EducationRes {
    constructor() {
        this.create_date = null;
        this.ctgo_education_safe_id = null;
        this.ctgo_education_safe_name = null;
        this.ctgo_education_safe_text = null;
        this.ctgo_education_safe_title = null;
        this.ctgo_education_safe_type = null;
        this.education_safe_id = null;
        this.education_safe_time = null;
        this.project_id = null;
        this.project_name = null;
    }
}
let MyPagePage = class MyPagePage {
    constructor(el, connect, _modal, nav, regex, user, toast, alert, loading, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this._modal = _modal;
        this.nav = nav;
        this.regex = regex;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.editable = false;
        this.segment = 'belong';
        this.userType = null;
        /** 기본정보 form */
        this.basicForm = new BasicForm();
        this.basicValidator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new BasicForm()).validator;
        /** 소속정보 form */
        this.belongForm = new BelongForm();
        this.belongValidator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new BelongForm()).validator;
        /** 교육이력 form */
        this.educationGetForm = new EducationGetForm();
    }
    ngOnInit() {
        this.getForm();
        this.get();
    }
    /**
     * 데이터 구성 파트
     */
    getForm() {
        /** 유저 타입 */
        const { user_type, user_role } = this.user.userData;
        if (user_type === 'COMPANY') {
            if (user_role.startsWith('MASTER')) {
                this.userType = 'MASTER';
            }
            else {
                this.userType = 'PARTNER';
            }
        }
        else {
            this.userType = user_type;
        }
        /** 교육 데이터 */
        this.educationGetForm.project_id = this.user.userData.belong_data.project_id;
    }
    /** 모두 가져오기 */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다.
             * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
             * 하나의 loading 으로 처리하기 위해서 만들었습니다.
             */
            yield Promise.all([
                this.getBasic(),
                this.getBelong(),
                this.getEducation(),
                this.getMileageTotal(),
                this.getMileagePlus(),
                this.getMileageMinus()
            ]);
            loading.dismiss();
        });
    }
    /** 기본정보 가져오기 */
    getBasic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/mypage/basic/detail', {}, { parse: ['user_profile_file_data'] });
            if (res.rsCode === 0) {
                this.basicForm = Object.assign(Object.assign({}, this.basicForm), res.rsObj);
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    // 휴대폰번호
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.basicForm;
            if (!user_phone)
                return this.basicValidator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.basicValidator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            const res = yield this.connect.run('/mypage/overlap/phone', { user_phone });
            this.basicValidator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    changePhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_13__.ChangePhonePage,
                cssClass: 'change-phone-modal'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.update) {
                this.get();
            }
        });
    }
    // 이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const { user_email } = this.basicForm;
            const res = yield this.connect.run('/mypage/overlap/email', { user_email });
            this.basicValidator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    /** 회원 탈퇴 */
    withdrawal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.alert.present({
                header: '회원탈퇴를 진행합니다.',
                message: `
        □ 회원 탈퇴 시 시스템 이용이 불가능 하며 취소가 불가능 합니다.\n
        □ 회원 탈퇴 후 마지막 출역 현장의 준공일로 부터 3년 후 까지 정보 보관 후 자동 삭제 됩니다.\n
        □ 회원 탈퇴를 원할 시 비밀번호를 입력해주세요.
      `,
                inputs: [
                    { name: 'account_token', placeholder: '비밀번호', type: 'password' }
                ],
                buttons: [
                    { text: '취소' },
                    { text: '탈퇴하기', handler: this.widhdrawalHandler.bind(this) }
                ]
            });
        });
    }
    widhdrawalHandler({ account_token }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            console.log(account_token);
            const res = yield this.connect.run('/mypage/user/delete', {
                account_token
            });
            if (res.rsCode === 0) {
                this.user.clear();
                this.nav.navigateRoot('/login', {
                    force: true,
                    animated: true
                });
                this.alert.present({
                    header: '회원 탈퇴가 완료되었습니다.',
                    message: '그동안 이용해주셔서 감사합니다.',
                    buttons: [
                        { text: '확인' }
                    ]
                });
            }
            else {
                this.toast.present({ color: 'warning', message: '비밀번호가 올바르지 않습니다.' });
            }
        });
    }
    /** 비밀번호 변경 */
    changePassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_12__.ChangePasswordPage,
                cssClass: 'change-password-modal'
            });
            modal.present();
        });
    }
    /** 소속정보 가져오기 */
    getBelong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let api = '';
            if (this.userType === 'LH') {
                api = '/mypage/lh/belong/detail';
            }
            else if (this.userType === 'SUPER') {
                api = '/mypage/super/belong/detail';
            }
            else if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
                api = '/mypage/company/belong/detail';
            }
            const res = yield this.connect.run(api, {}, { parse: ['safe_job_data'] });
            if (res.rsCode === 0) {
                this.belongForm = Object.assign(Object.assign({}, this.belongForm), res.rsObj);
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /** 교육정보 가져오기 */
    getEducationSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield this.getEducation();
            loading.dismiss();
        });
    }
    getEducation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
                this.educationRes = yield this.connect.run('/mypage/education/list', this.educationGetForm);
                if (this.educationRes.rsCode === 1008) {
                    // 암것도 안함
                }
                else if (this.educationRes.rsCode) {
                    this.toast.present({ color: 'warning', message: this.educationRes.rsMsg });
                }
            }
        });
    }
    /** 마일리지 정보 가져오기 */
    getMileageTotal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userType === 'PARTNER') {
                this.mileageTotalRes = yield this.connect.run('/mypage/mileagetotal/list');
                if (this.mileageTotalRes.rsCode === 1008) {
                    // 암것도 안함
                }
                else if (this.mileageTotalRes.rsCode) {
                    this.toast.present({ color: 'warning', message: this.mileageTotalRes.rsMsg });
                }
            }
        });
    }
    getMileagePlus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userType === 'PARTNER') {
                this.mileagePlusRes = yield this.connect.run('/mypage/mileageplus/list');
                if (this.mileagePlusRes.rsCode === 1008) {
                    // 암것도 안함
                }
                else if (this.mileagePlusRes.rsCode) {
                    this.toast.present({ color: 'warning', message: this.mileagePlusRes.rsMsg });
                }
            }
        });
    }
    getMileageMinus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userType === 'PARTNER') {
                this.mileageMinusRes = yield this.connect.run('/mypage/mileageminus/list');
                if (this.mileageMinusRes.rsCode === 1008) {
                    // 암것도 안함
                }
                else if (this.mileageMinusRes.rsCode) {
                    this.toast.present({ color: 'warning', message: this.mileageMinusRes.rsMsg });
                }
            }
        });
    }
    /**
     * 데이터 입력 파트
     */
    /** 전체 입력 */
    submit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            console.log('submit 들어옵 --- ');
            if (!this.basicValid())
                return;
            if (!this.belongValid()) {
                this.segment = 'belong';
                return;
            }
            const loading = yield this.loading.present();
            const resAll = yield Promise.all([
                this.basicSubmit(),
                // 안전직무 정보 submit
                (_a = this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                this.belongSubmit()
            ]);
            yield loading.dismiss();
            /** 모든 데이터가 성공적으로 전송되었다면, 모든 반환값이 true임 */
            if (!resAll.includes(false)) {
                this.nav.back({ force: true });
                this.alert.present({
                    message: '회원정보가 변경되었습니다.'
                });
            }
        });
    }
    /** 기본정보 입력 */
    basicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/mypage/basic/update', this.basicForm);
            if (res.rsCode === 0) {
                return true;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                return false;
            }
        });
    }
    /** 소속정보 입력 */
    belongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let api = '';
            if (this.userType === 'LH') {
                api = '/mypage/lh/belong/update';
            }
            else if (this.userType === 'SUPER') {
                api = '/mypage/super/belong/update';
            }
            else if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
                api = '/mypage/company/belong/update';
            }
            const res = yield this.connect.run(api, this.belongForm);
            if (res.rsCode === 0) {
                return true;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                return false;
            }
        });
    }
    /**
     * 데이터 체크 파트
     */
    basicValid() {
        var _a, _b, _c, _d;
        if (!this.basicForm.user_name)
            this.basicValidator.user_name = { message: '이름을 입력해주세요.', valid: false };
        else
            this.basicValidator.user_name = { valid: true };
        if (!this.basicForm.account_id)
            this.basicValidator.account_id = { message: '아이디를 입력해주세요.', valid: false };
        else if ((_a = this.basicValidator.account_id) === null || _a === void 0 ? void 0 : _a.valid)
            this.basicValidator.account_id = { valid: true };
        if (!this.basicForm.user_phone)
            this.basicValidator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_b = this.basicValidator.user_phone) === null || _b === void 0 ? void 0 : _b.valid)
            this.basicValidator.user_phone = { valid: true };
        if (!this.basicForm.user_birth)
            this.basicValidator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
        else
            this.basicValidator.user_birth = { valid: true };
        if ((_c = this.basicValidator.user_email) === null || _c === void 0 ? void 0 : _c.valid)
            this.basicValidator.user_email = { valid: true };
        if (!this.basicForm.user_gender)
            this.basicValidator.user_gender = { message: '성별을 선택해주세요.', valid: false };
        else
            this.basicValidator.user_gender = { valid: true };
        for (let key in this.basicValidator) {
            if (((_d = this.basicValidator[key]) === null || _d === void 0 ? void 0 : _d.valid) === false)
                return false;
        }
        return true;
    }
    belongValid() {
        var _a;
        /** 공통 validation */
        if (!this.belongForm.ctgo_job_position_id)
            this.belongValidator.ctgo_job_position_id = { message: '직위를 선택해주세요.', valid: false };
        else
            this.belongValidator.ctgo_job_position_id = { valid: true };
        /** lh validation */
        if (this.userType === 'LH') {
            if (!this.belongForm.hq_regional_id)
                this.belongValidator.hq_regional_id = { message: '지역본부를 입력해주세요', valid: false };
            else
                this.belongValidator.hq_regional_id = { valid: true };
            // 지역본부 선택을 했는데 본사면 통과
            if (!this.belongForm.hq_regional_entire_state
                && !this.belongForm.hq_business_id)
                this.belongValidator.hq_business_id = { message: '사업본부를 입력해주세요', valid: false };
            else
                this.belongValidator.hq_business_id = { valid: true };
            // 사업본부 선택을 했는데 사업본부 본사면 통과
            if (!this.belongForm.hq_regional_entire_state
                && !this.belongForm.hq_business_entire_state
                && !this.belongForm.hq_department_id)
                this.belongValidator.hq_department_id = { message: '부서를 입력해주세요', valid: false };
            else
                this.belongValidator.hq_department_id = { valid: true };
        }
        /** 감리 validation */
        if (this.userType === 'SUPER') {
        }
        /** 원청사, 협력사 validation */
        if (this.userType === 'MASTER' || this.userType === 'PARTNER') {
        }
        for (let key in this.belongValidator) {
            if (((_a = this.belongValidator[key]) === null || _a === void 0 ? void 0 : _a.valid) === false)
                return false;
        }
        return true;
    }
};
MyPagePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_11__.RegexService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_10__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
MyPagePage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['inputSafeJob',] }]
};
MyPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-my-page',
        template: _raw_loader_my_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPagePage);



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

/***/ 86875:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/change-phone/change-phone.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGhvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 42911:
/*!********************************************************!*\
  !*** ./src/app/page/my-page/my-page/my-page.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".update-date {\n  text-align: right;\n}\n\napp-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\napp-row {\n  align-items: flex-start;\n}\n\napp-input-caption + app-input-caption {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBRTVCOztBQUFBO0VBQ0ksdUJBQXVCO0FBRzNCOztBQURBO0VBQ0ksYUFBYTtBQUlqQiIsImZpbGUiOiJteS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5hcHAtYXZhdGFyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbmFwcC1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuYXBwLWlucHV0LWNhcHRpb24gKyBhcHAtaW5wdXQtY2FwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */");

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

/***/ }),

/***/ 23412:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/change-phone/change-phone.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('휴대폰 번호 변경') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h4>{{ languagePack.getText('휴대폰 번호 변경') }}</h4>\n  \n  <app-input name=\"user_phone\" [label]=\"languagePack.getText('핸드폰')\"  [placeholder]=\"languagePack.getText('- 없이 숫자만 입력해주세요')\" type=\"tel\" \n  [color]=\"validator.user_phone?.valid === false ? 'warning' \n  : validator.sms_token?.valid === true && 'success'\"\n  [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"overlapPhone()\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n  {{ languagePack.getText('인증번호 받기') }}\n  </app-input>\n  <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n  <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">인증이 완료되었습니다.</app-input-caption>\n  \n  <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n    <app-input\n    name=\"sms_token\" [label]=\"languagePack.getText('인증번호')\" [placeholder]=\"languagePack.getText('인증번호를 입력해주세요.')\" type=\"tel\"\n    [color]=\"validator.sms_token?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.sms_token\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n    {{ languagePack.getText('확인') }}\n    </app-input>\n  </div>\n  <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n\n</ion-content>\n\n<app-button-footer>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('취소') }}</app-button>\n  <app-button name=\"button_submit\" (click)=\"submit()\">{{ languagePack.getText('휴대폰 번호 변경') }}</app-button>\n</app-button-footer>");

/***/ }),

/***/ 93499:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page/my-page.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"user.userData.user_main_page\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('나의 정보') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n\n    <!-- 상단 정보 -->\n    <app-card color=\"light\">\n      \n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h4>회원정보</h4>\n      </ion-toolbar>\n\n      <h6 class=\"update-date\">최종 수정일: {{ basicForm.update_date }}</h6>\n      <app-avatar \n      name=\"input-profile\"\n      view_type=\"PROFILE\" \n      [(ngModel)]=\"basicForm.user_profile_file_data\" [file]=\"basicForm.file\" [file_json]=\"basicForm.file_json\" [readonly]=\"!editable\"></app-avatar>\n      <app-row mobileBreak>\n        <app-col>\n          \n          <app-input-template\n          name=\"account_id\" [label]=\"languagePack.getText('아이디')\" [disabled]=\"true\">\n            <p slot=\"input\">{{ basicForm.account_id }}</p>\n          </app-input-template>\n\n        </app-col>\n        <app-col>\n\n          <app-input\n          name=\"user_name\" [label]=\"languagePack.getText('성명')\"\n          placeholder=\"이름을 입력해주세요.\"\n          [color]=\"basicValidator.user_name?.valid === false && 'warning'\"\n          [(ngModel)]=\"basicForm.user_name\" [disabled]=\"!editable\" [required]=\"true\"></app-input>\n          <app-input-caption *ngIf=\"basicValidator.user_name?.valid === false\" color=\"warning\">{{ basicValidator.user_name?.message }}</app-input-caption>\n\n        </app-col>\n      </app-row>\n\n      <app-row mobileBreak>\n        <app-col>\n\n          <app-calendar name=\"user_birth\" [label]=\"languagePack.getText('생년월일')\" \n          [color]=\"basicValidator.user_birth?.valid === false && 'warning'\"\n          [(ngModel)]=\"basicForm.user_birth\" [disabled]=\"!editable\" [required]=\"true\"></app-calendar>\n          <app-input-caption *ngIf=\"basicValidator.user_birth?.valid === false\" color=\"warning\">{{ basicValidator.user_birth?.message }}</app-input-caption>\n\n        </app-col>\n        <app-col>\n\n          <app-radio-input name=\"user_gender\" [label]=\"languagePack.getText('성별')\"\n          [color]=\"basicValidator.user_gender?.valid === false && 'warning'\"\n          [(ngModel)]=\"basicForm.user_gender\" [disabled]=\"!editable\" [required]=\"true\">\n            <app-radio value=\"남\">{{ languagePack.getText('남자') }}</app-radio>\n            <app-radio value=\"여\">{{ languagePack.getText('여자') }}</app-radio>\n          </app-radio-input>\n          <app-input-caption *ngIf=\"basicValidator.user_gender?.valid === false\" color=\"warning\">{{ basicValidator.user_gender?.message }}</app-input-caption>\n\n        </app-col>\n      </app-row>\n\n      <app-row mobileBreak>\n        <app-col>\n\n          <app-input-template name=\"user_phone\" label=\"휴대폰\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n          [color]=\"basicValidator.user_phone?.valid === false && 'warning'\"\n          [disabled]=\"!editable\" [required]=\"true\" (buttonClick)=\"changePhone()\">\n            <p slot=\"input\">{{ basicForm.user_phone }}</p>\n            변경\n            <!-- {{ languagePack.getText('변경') }} -->\n          </app-input-template>\n\n        </app-col>\n        <app-col>\n\n          <app-email name=\"user_email\" [label]=\"languagePack.getText('이메일 (선택)')\"\n          [color]=\"basicValidator.user_email?.valid === false && 'warning'\"\n          (delayKeyup)=\"overlapEmail()\"\n          [(ngModel)]=\"basicForm.user_email\" [disabled]=\"!editable\" [required]=\"true\"></app-email>\n          <app-input-caption *ngIf=\"basicValidator.user_email?.valid === false\" color=\"warning\">{{ basicValidator.user_email?.message }}</app-input-caption>\n\n        </app-col>\n      </app-row>\n\n      <ion-toolbar *ngIf=\"editable\" slot=\"bottom\" color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button name=\"button_withdrawal\" color=\"medium\" fill=\"translucent\" (click)=\"withdrawal()\">{{ languagePack.getText('회원 탈퇴') }}</app-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <app-button name=\"button_changePassword\" fill=\"translucent\" (click)=\"changePassword()\">{{ languagePack.getText('비밀번호 변경하기') }}</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </app-card>\n    \n    <!-- 하단 정보 -->\n    <app-card color=\"light\">\n\n      <!-- segment 영역 -->\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <ion-buttons slot=\"start\">\n          <ion-segment color=\"primary\" [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"belong\">{{ languagePack.getText('소속 정보') }}</ion-segment-button>\n            <!-- <ion-segment-button *ngIf=\"userType === 'MASTER' || userType === 'PARTNER'\" value=\"education\">{{ languagePack.getText('교육 이력') }}</ion-segment-button> -->\n            <ion-segment-button *ngIf=\"userType === 'PARTNER'\" value=\"mileage\">{{ languagePack.getText('안전 마일리지') }}</ion-segment-button>\n          </ion-segment>\n        </ion-buttons>\n      </ion-toolbar>\n\n      <!-- 현재 레이아웃이 날아가면, safe 데이터가 날아가기 때문에 display로 작업해주셔야 합니다. -->\n      <!-- 소속 정보 -->\n      <div [style.display]=\"segment === 'belong' ? 'block' : 'none'\">\n\n        <app-row mobileBreak>\n          <app-col>\n  \n            <app-input-template label=\"업체명\" [disabled]=\"true\">\n              <p slot=\"input\">{{ belongForm.company_name }}</p>\n            </app-input-template>\n  \n          </app-col>\n          <app-col>\n  \n            <app-select-position name=\"ctgo_job_position_id\" \n            [company_id]=\"belongForm.company_id\"\n            [(ngModel)]=\"belongForm.ctgo_job_position_id\" [disabled]=\"!editable\" [required]=\"true\"></app-select-position>\n            <app-input-caption *ngIf=\"belongValidator.ctgo_job_position_id?.valid === false\" color=\"warning\">{{ belongValidator.ctgo_job_position_id?.message }}</app-input-caption>\n  \n          </app-col>\n  \n          <app-col *ngIf=\"userType === 'MASTER' || userType === 'PARTNER'\">\n  \n            <app-input-template label=\"시스템 권한\" [disabled]=\"true\">\n              <p slot=\"input\">{{ user.parseUserRole(belongForm.user_role) }}</p>\n            </app-input-template>\n  \n          </app-col>\n        </app-row>\n  \n        <app-row mobileBreak *ngIf=\"userType === 'LH'\">\n          <app-col>\n  \n            <!-- <app-select-organization [(ngModel)]=\"belongForm\" [disabled]=\"!editable\"></app-select-organization>\n            <app-input-caption *ngIf=\"belongValidator.hq_regional_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_regional_id?.message }}</app-input-caption>\n            <app-input-caption *ngIf=\"belongValidator.hq_business_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_business_id?.message }}</app-input-caption>\n            <app-input-caption *ngIf=\"belongValidator.hq_department_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_department_id?.message }}</app-input-caption> -->\n            <app-input label=\"사업지구\" [disabled]=\"true\" value=\"수원당수\"></app-input>\n          </app-col>\n\n          <app-col *ngIf=\"userType === 'LH'\">\n  \n            <app-input-template label=\"시스템 권한\" [disabled]=\"true\">\n              <p slot=\"input\">{{ user.parseUserRole(belongForm.user_role) }}</p>\n            </app-input-template>\n  \n          </app-col>\n        </app-row>\n  \n        <app-row mobileBreak *ngIf=\"userType !== 'LH'\">\n          <app-col>\n  \n            <app-select-scene [all]=\"true\" [(ngModel)]=\"belongForm.project_id\" [disabled]=\"true\"></app-select-scene>\n  \n          </app-col>\n          <!-- <app-col *ngIf=\"userType === 'LH'\">\n            \n            <app-input-template label=\"현장 공사 기간\" [disabled]=\"true\">\n              <p slot=\"input\">{{ belongForm.contract_start_date }} ~ {{ belongForm.contract_end_date }}</p>\n            </app-input-template>\n  \n          </app-col> -->\n          <app-col *ngIf=\"userType === 'MASTER' || userType === 'PARTNER'\">\n            \n            <app-select-construction \n            [project_id]=\"belongForm.project_id\" \n            [master_company_id]=\"belongForm.master_company_id\"\n            [(ngModel)]=\"belongForm.ctgo_construction_id\" [disabled]=\"!editable\"></app-select-construction>\n            <app-input-caption *ngIf=\"belongValidator.ctgo_construction_id?.valid === false\" color=\"warning\">{{ belongValidator.ctgo_construction_id?.message }}</app-input-caption>\n\n          </app-col>\n        </app-row>\n\n        <app-row mobileBreak *ngIf=\"userType === 'SUPER' || userType === 'MASTER' || userType === 'PARTNER'\">\n          <app-col>\n  \n            <app-radio-input label=\"현장 출역 상태\" [(ngModel)]=\"belongForm.construction_state\" [disabled]=\"true\">\n              <app-radio value=\"출역중\">출역 중</app-radio>\n              <app-radio value=\"출역종료\">출역 종료</app-radio>\n            </app-radio-input>\n  \n          </app-col>\n          <app-col>\n            \n            <app-input-template label=\"현장 출역 기간\" [disabled]=\"true\">\n              <p slot=\"input\">{{ belongForm.construction_start_date || '없음' }} ~ {{ belongForm.construction_end_date || '없음' }}</p>\n            </app-input-template>\n  \n          </app-col>\n        </app-row>\n\n        <app-input-safejob #inputSafeJob *ngIf=\"userType === 'MASTER' || userType === 'PARTNER' || userType === 'WORKER'\"\n        [project_id]=\"belongForm.project_id\"\n        [company_id]=\"belongForm.company_id\"\n        insert_url=\"/mypage/company/safejob/insert\"\n        update_url=\"/mypage/company/safejob/update\"\n        delete_url=\"/mypage/company/safejob/delete\"\n        [(ngModel)]=\"belongForm.safe_job_data\" [disabled]=\"!editable\"></app-input-safejob>\n\n      </div>\n\n      <!-- 교육 이력 -->\n      <div [style.display]=\"segment === 'education' ? 'block' : 'none'\">\n\n        <app-row mobileBreak>\n          <app-col>\n\n            <app-select-scene [(ngModel)]=\"educationGetForm.project_id\"></app-select-scene>\n\n          </app-col>\n          <!-- <app-col>\n            \n            <app-select-education [(ngModel)]=\"educationGetForm.ctgo_education_safe_types\" [all]=\"true\" [multiple]=\"true\"></app-select-education>\n\n          </app-col> -->\n\n          <app-col>\n\n            <app-input label=\"검색어\" [(ngModel)]=\"educationGetForm.search_text\" (buttonClick)=\"getEducationSearch()\">\n              검색\n            </app-input>\n\n          </app-col>\n        </app-row>\n\n        <app-table>\n          <thead>\n            <tr>\n              <th>NO</th>\n              <th>교육 구분</th>\n              <th>교육명</th>\n              <th>이수일</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of educationRes?.rsMap; let i = index;\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_education_safe_type }}</td>\n              <td>{{ item.ctgo_education_safe_title }}</td>\n              <td>{{ item.education_safe_time }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n\n      </div>\n\n      <!-- 안전 마일리지 -->\n      <div [style.display]=\"segment === 'mileage' ? 'block' : 'none'\">\n        \n        <h4>마일리지 현황</h4>\n\n        <app-table>\n          <thead>\n            <tr>\n              <th>총 적립 마일리지</th>\n              <th>총 사용 마일리지</th>\n              <th>잔여 마일리지</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.total_mileage) || 0 }}</td>\n              <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.plus_mileage) || 0 }}</td>\n              <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.minus_mileage) || 0 }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        \n        <h4>안전 마일리지 적립 내역</h4>\n\n        <app-table>\n          <thead>\n            <tr>\n              <th>NO</th>\n              <th>마일리지 분류</th>\n              <th>지급자</th>\n              <th>작립일</th>\n              <th>적립 마일리지</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of mileagePlusRes?.rsMap; let i = index;\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_safe_mileage }}</td>\n              <td>{{ item.payer_user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ regex.replace.price(item.ctgo_safe_mileage_point) }}</td>\n            </tr>\n            <tr *ngIf=\"mileagePlusRes && mileagePlusRes.rsCode === 1008\">\n              <td colspan=\"5\">안전마일리지 적립 내역이 없습니다.</td>\n            </tr>\n          </tbody>\n        </app-table>\n\n        <h4>안전 마일리지 사용 내역</h4>\n\n        <app-table>\n          <thead>\n            <tr>\n              <th>NO</th>\n              <th>사용 내역</th>\n              <th>사용자</th>\n              <th>사용일</th>\n              <th>사용 마일리지</th>\n              <th>지급 상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of mileageMinusRes?.rsMap; let i = index;\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_safe_mileage }}</td>\n              <td>{{ item.payer_user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ regex.replace.price(item.ctgo_safe_mileage_point) }}</td>\n              <td>지급완료</td>\n            </tr>\n            <tr *ngIf=\"mileageMinusRes && mileageMinusRes.rsCode === 1008\">\n              <td colspan=\"6\">안전마일리지 사용 내역이 없습니다.</td>\n            </tr>\n          </tbody>\n        </app-table>\n\n      </div>\n\n    </app-card>\n\n  </app-container>\n</ion-content>\n\n<!-- 상세보기 footer -->\n<app-button-footer *ngIf=\"!editable; else tempEditFooter\">\n  <app-button name=\"button_edit\" (click)=\"editable = true\">수정</app-button>\n</app-button-footer>\n<!-- 수정 footer -->\n<ng-template #tempEditFooter>\n  <app-button-footer>\n    <app-button name=\"submit\" (click)=\"submit()\">저장</app-button>\n  </app-button-footer>\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_my-page_my-page_my-page_page_ts.js.map