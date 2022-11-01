(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_member-management_member-approval-wait_partner-approval-edit_partner-app-669b38"],{

/***/ 157:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit-routing.module.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerApprovalEditPageRoutingModule": () => (/* binding */ PartnerApprovalEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _partner_approval_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-approval-edit.page */ 95872);




const routes = [
    {
        path: '',
        component: _partner_approval_edit_page__WEBPACK_IMPORTED_MODULE_0__.PartnerApprovalEditPage
    }
];
let PartnerApprovalEditPageRoutingModule = class PartnerApprovalEditPageRoutingModule {
};
PartnerApprovalEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerApprovalEditPageRoutingModule);



/***/ }),

/***/ 83336:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerApprovalEditPageModule": () => (/* binding */ PartnerApprovalEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _partner_approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-approval-edit-routing.module */ 157);
/* harmony import */ var _partner_approval_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-approval-edit.page */ 95872);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let PartnerApprovalEditPageModule = class PartnerApprovalEditPageModule {
};
PartnerApprovalEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _partner_approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerApprovalEditPageRoutingModule
        ],
        declarations: [_partner_approval_edit_page__WEBPACK_IMPORTED_MODULE_1__.PartnerApprovalEditPage]
    })
], PartnerApprovalEditPageModule);



/***/ }),

/***/ 95872:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.page.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicItem": () => (/* binding */ BasicItem),
/* harmony export */   "ApprovalItem": () => (/* binding */ ApprovalItem),
/* harmony export */   "PartnerApprovalEditPage": () => (/* binding */ PartnerApprovalEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_partner_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./partner-approval-edit.page.html */ 3540);
/* harmony import */ var _partner_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-approval-edit.page.scss */ 53992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_page_my_page_change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/page/my-page/change-phone/change-phone.page */ 66802);
/* harmony import */ var _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../approval-popup/approval-popup.component */ 32966);
/* harmony import */ var _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../security-password/security-password.component */ 52346);














//기본정보
class BasicItem {
    constructor() {
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.user_profile_file_data = [];
    }
}
//소속정보
class ApprovalItem {
    constructor() {
        this.user_safe_job_file_data = [];
        this.safe_job_data = [];
    }
}
let PartnerApprovalEditPage = class PartnerApprovalEditPage {
    constructor(_modal, connect, user, toast, alert, changeDetector, loading) {
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.changeDetector = changeDetector;
        this.loading = loading;
        this.editable = false;
        this.form = {
            user_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: ''
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new BasicItem()).validator;
        this.permission = {
            approval: false
        };
    }
    ngOnInit() {
        this.get();
    }
    //권한
    getPermission() {
        if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD' || this.user.userData.user_type === 'LH') {
            this.permission.approval = true;
        }
        else {
            this.permission.approval = false;
        }
        this.form.user_id = this.item.user_id;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
    }
    //이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_email } = this.formBasic;
            if (!user_email)
                return this.validator.user_email = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/approval/company/overlap/email', { user_email, user_id });
            this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    // //휴대폰
    // public async overlapPhone() {
    //   const { user_phone, user_id } = this.formBasic;
    //   if (!user_phone) return this.validator.user_phone = null;
    //   if (!user_id) return this.validator.user_id = null;
    //   const res = await this.connect.run('/usermanage/approval/company/overlap/phone', { user_phone, user_id });
    //   this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    //   this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
    // }
    // 휴대폰번호
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_phone } = this.formBasic;
            if (!user_id)
                return this.validator.user_id = null;
            if (!user_phone)
                return this.validator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            const res = yield this.connect.run('/usermanage/approval/company/overlap/phone', { user_phone, user_id });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    changePhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_page_my_page_change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_8__.ChangePhonePage,
                cssClass: 'change-phone-modal'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.update) {
                this.get();
            }
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                this.getPermission(),
                this.getItem(),
                this.getBelong()
            ]);
            loading.dismiss();
        });
    }
    //기본정보
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/company/basic/detail', this.form, {
                parse: ['user_profile_file_data']
            });
            if (res.rsCode === 0) {
                this.formBasic = Object.assign(Object.assign({}, this.formBasic), res.rsObj);
                this.formBasic.user_name = res.rsObj.user_name;
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보
    getBelong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/company/belong/detail', this.form, {
                parse: ['safe_job_data', 'safe_job_file_data']
            });
            if (res.rsCode === 0) {
                this.formApproval = Object.assign(Object.assign({}, this.formApproval), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //비밀번호
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__.SecurityPasswordComponent,
                backdropDismiss: false,
                cssClass: "security-password-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getItem();
            }
        });
    }
    //가입승인
    approval() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_9__.ApprovalPopupComponent,
                componentProps: {
                    approval_user_ids: this.formBasic.user_id,
                    user_name: this.formBasic.user_name,
                    state: 'partner'
                },
                cssClass: "approval-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                setTimeout(() => {
                    this._modal.dismiss(data);
                }, 0);
            }
        });
    }
    // 저장(수정)
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.validator.user_phone) {
                if (!this.validator.user_phone.valid)
                    return this.toast.present({ message: this.validator.user_phone.message, color: 'warning' });
            }
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.form.approval_user_id = this.form.user_id;
            this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            var _a;
                            const tt = yield Promise.all([
                                this.BasicSubmit(),
                                (_a = this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                                this.BelongSubmit()
                            ]);
                            if (!tt.includes(false))
                                this._modal.dismiss(true);
                        })
                    }
                ]
            });
        });
    }
    //기본정보 수정
    BasicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/company/basic/update', Object.assign(Object.assign({}, this.form), this.formBasic), {});
            if (res.rsCode === 0) {
                return true;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                return false;
            }
        });
    }
    //소속정보 수정
    BelongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/company/belong/update', Object.assign(Object.assign({}, this.form), this.formApproval), {});
            if (res.rsCode === 0) {
                return true;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                return false;
            }
        });
    }
};
PartnerApprovalEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService }
];
PartnerApprovalEditPage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['inputSafeJob',] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
PartnerApprovalEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-partner-approval-edit',
        template: _raw_loader_partner_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_partner_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartnerApprovalEditPage);



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

/***/ 53992:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.page.scss ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItYXBwcm92YWwtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDNUIiLCJmaWxlIjoicGFydG5lci1hcHByb3ZhbC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hdmF0YXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

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

/***/ 3540:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.page.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n    <ion-title>원청사/협력사 관리자 가입승인 상세</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n  <app-card color=\"light\" [button]=\"false\">\n    <ion-toolbar slot=\"top\" color=\"white\">\n      <h5>회원정보</h5>\n    </ion-toolbar>\n    <form>\n      <app-avatar \n      name=\"input-profile\"\n      view_type=\"PROFILE\" \n      [(ngModel)]=\"formBasic.user_profile_file_data\" [file]=\"formBasic.file\" [file_json]=\"formBasic.file_json\" [readonly]=\"editable\"></app-avatar>\n      <app-row>\n        <app-col>\n          <app-input name=\"input disabled\" label=\"아이디\" [(ngModel)]=\"formBasic.account_id\" [disabled]=\"true\" [required]=\"true\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input name=\"input\" label=\"성명\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_name\" [required]=\"true\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-calendar name=\"calendar\" label=\"생년월일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_birth\" [required]=\"true\"></app-calendar>\n        </app-col>\n        <app-col>\n          <app-radio-input name=\"user_gender\" label=\"성별\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_gender\" [required]=\"true\">\n            <app-radio value=\"남\">남</app-radio>\n            <app-radio value=\"여\">여</app-radio>\n          </app-radio-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n\n          <app-input-template name=\"user_phone\" label=\"휴대폰\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n          [color]=\"validator.user_phone?.valid === false && 'warning'\"\n          [disabled]=\"!permission.approval\" [required]=\"true\" (buttonClick)=\"overlapPhone()\">\n            <!-- <p slot=\"input\">{{ formBasic.user_phone }}</p> -->\n            <input name=\"tel\" slot=\"input\" [(ngModel)]=\"formBasic.user_phone\" />\n            중복확인\n          </app-input-template>\n\n          <!-- <app-input type=\"tel\" name=\"input\" label=\"핸드폰\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_phone\" [required]=\"true\" (click)=\"overlapPhone()\">\n            중복확인\n          </app-input> -->\n          <!-- <app-input-caption *ngIf=\"validator_2.user_phone?.valid === false\" color=\"warning\">{{ validator_2.user_phone?.message }}</app-input-caption> -->\n        </app-col>\n        <app-col>\n          <app-email name=\"user_email\" label=\"이메일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_email\"\n        [color]=\"validator.user_email?.valid === false && 'warning'\" (delayKeyup)=\"overlapEmail()\"></app-email>\n        <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n    </form>\n    </app-card>\n    <app-card color=\"light\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h5>소속정보</h5>\n      </ion-toolbar>\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <p>최종 수정일 : {{ formBasic.update_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input name=\"input disabled\" label=\"업체명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.company_name\"></app-input>\n        </app-col>\n        <app-col>\n          <app-select-position [company_id]=\"formApproval.company_id\" name=\"직위\" label=\"직위\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_job_position_id\" [required]=\"true\"></app-select-position>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-scene name=\"project_id\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.project_id\" [all]=\"true\"></app-select-scene>\n        </app-col>\n        <app-col>\n          <app-select-construction [master_company_id]=\"formApproval.master_company_id\" [project_id]=\"formApproval.project_id\" name=\"공종\" label=\"공종\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_construction_id\"></app-select-construction>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select label=\"시스템 권한\" *ngIf=\"item.company_contract_type === '원청사' && (user.userData.user_role === 'LH_HEAD' || user.userData.user_role === 'MASTER_HEAD')\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.user_role\">\n            <app-select-option [value]=\"6\">원청사 마스터 어드민</app-select-option>\n            <app-select-option [value]=\"7\">원청사 일반 관리자</app-select-option>\n          </app-select>\n          <app-select label=\"시스템 권한\"  *ngIf=\"item.company_contract_type === '협력사' && (user.userData.user_role === 'LH_HEAD'  || user.userData.user_role === 'PARTNER_HEAD')\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.user_role\">\n            <app-select-option [value]=\"9\">협력사 마스터 어드민</app-select-option>\n            <app-select-option [value]=\"10\">협력사 일반 관리자</app-select-option>\n          </app-select>\n        </app-col>\n        <app-col></app-col>\n      </app-row>\n      <app-input-safejob #inputSafeJob\n        [project_id]=\"formApproval.project_id\"\n        [company_id]=\"formApproval.company_id\"\n        insert_url=\"/usermanage/approval/company/safejob/insert\"\n        update_url=\"/usermanage/approval/company/safejob/update\"\n        delete_url=\"/usermanage/approval/company/safejob/delete\"\n        [params]=\"this.form\"\n        [(ngModel)]=\"formApproval.safe_job_data\" [disabled]=\"!permission.approval\"></app-input-safejob>\n    </app-card>\n   \n      <app-button-footer *ngIf=\"permission.approval\">\n        <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"approval()\">가입승인</app-button>\n        <app-button style=\"width: 120px;\" (click)=\"submit()\">저장</app-button>\n    </app-button-footer>\n  </app-container>\n</ion-content>");

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

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_member-management_member-approval-wait_partner-approval-edit_partner-app-669b38.js.map