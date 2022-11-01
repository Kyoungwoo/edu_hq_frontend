(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page-info_my-page-info_module_ts"],{

/***/ 81529:
/*!**************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-info/my-page-info-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageInfoPageRoutingModule": () => (/* binding */ MyPageInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-info.page */ 76042);




const routes = [
    {
        path: '',
        component: _my_page_info_page__WEBPACK_IMPORTED_MODULE_0__.MyPageInfoPage
    }
];
let MyPageInfoPageRoutingModule = class MyPageInfoPageRoutingModule {
};
MyPageInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPageInfoPageRoutingModule);



/***/ }),

/***/ 79702:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/my-page-info/my-page-info.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageInfoPageModule": () => (/* binding */ MyPageInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-info-routing.module */ 81529);
/* harmony import */ var _my_page_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-info.page */ 76042);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-password/change-password.module */ 61466);
/* harmony import */ var _change_phone_change_phone_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-phone/change-phone.module */ 31065);










let MyPageInfoPageModule = class MyPageInfoPageModule {
};
MyPageInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPageInfoPageRoutingModule,
            _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordPageModule,
            _change_phone_change_phone_module__WEBPACK_IMPORTED_MODULE_4__.ChangePhonePageModule
        ],
        declarations: [_my_page_info_page__WEBPACK_IMPORTED_MODULE_1__.MyPageInfoPage]
    })
], MyPageInfoPageModule);



/***/ }),

/***/ 76042:
/*!****************************************************************!*\
  !*** ./src/app/page/my-page/my-page-info/my-page-info.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageInfoPage": () => (/* binding */ MyPageInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page-info.page.html */ 10130);
/* harmony import */ var _my_page_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-info.page.scss */ 20581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../change-password/change-password.page */ 62956);
/* harmony import */ var _change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-phone/change-phone.page */ 66802);
/* harmony import */ var _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../my-page/my-page.page */ 44151);















let MyPageInfoPage = class MyPageInfoPage {
    constructor(connect, _modal, toast, alert, loading, user, nav, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.user = user;
        this.nav = nav;
        this.languagePack = languagePack;
        this.editable = false;
        this.belongEditable = false;
        this.userType = null;
        /** 기본정보 form */
        this.basicForm = new _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_11__.BasicForm();
        this.basicValidator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_11__.BasicForm()).validator;
        /** 소속정보 form */
        this.belongForm = new _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_11__.BelongForm();
        this.belongValidator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_11__.BelongForm()).validator;
    }
    ngOnInit() {
        this.getForm();
        this.get();
    }
    /**
     * 데이터 구성 파트
     */
    getForm() {
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
    }
    /** 모두 가져오기 */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다.
             * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
             * 하나의 loading 으로 처리하기 위해서 만들었습니다.
             */
            yield Promise.all([
                this.getBasic(),
                this.getBelong()
            ]);
            loading.dismiss();
        });
    }
    /** 기본정보 가져오기 */
    getBasic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_10__.ChangePhonePage,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const { user_email } = this.basicForm;
            const res = yield this.connect.run('/mypage/overlap/email', { user_email });
            this.basicValidator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    /** 비밀번호 변경 */
    changePassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_9__.ChangePasswordPage,
                cssClass: 'change-password-modal'
            });
            modal.present();
        });
    }
    /** 소속정보 가져오기 */
    getBelong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
            else {
                api = '/mypage/worker/belong/detail';
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
    edit() {
        this.editable = true;
        if (this.userType !== 'WORKER')
            this.belongEditable = true;
    }
    /** 전체 입력 */
    submit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('submit 들어옵 --- ');
            console.log(this.basicValid());
            console.log(this.belongValid());
            if (!this.basicValid())
                return;
            if (!this.belongValid())
                return;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
            else {
                // api = '/mypage/worker/belong/update';
                return true;
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
        if (this.userType !== 'WORKER') {
            if (!this.belongForm.ctgo_job_position_id)
                this.belongValidator.ctgo_job_position_id = { message: '직위를 선택해주세요.', valid: false };
            else
                this.belongValidator.ctgo_job_position_id = { valid: true };
        }
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
            console.log(this.belongValidator[key]);
            if (((_a = this.belongValidator[key]) === null || _a === void 0 ? void 0 : _a.valid) === false)
                return false;
        }
        return true;
    }
};
MyPageInfoPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
MyPageInfoPage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['inputSafeJob',] }]
};
MyPageInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-my-page-info',
        template: _raw_loader_my_page_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_page_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPageInfoPage);



/***/ }),

/***/ 20581:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/my-page-info/my-page-info.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".update-date {\n  text-align: right;\n}\n\napp-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\napp-row {\n  align-items: flex-start;\n}\n\napp-input-caption + app-input-caption {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFFNUI7O0FBQUE7RUFDSSx1QkFBdUI7QUFHM0I7O0FBREE7RUFDSSxhQUFhO0FBSWpCIiwiZmlsZSI6Im15LXBhZ2UtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWRhdGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuYXBwLWF2YXRhciB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5hcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbmFwcC1pbnB1dC1jYXB0aW9uICsgYXBwLWlucHV0LWNhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDA7XG59Il19 */");

/***/ }),

/***/ 10130:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page-info/my-page-info.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/my-page-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('나의 정보') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n\n    <!-- 상단 정보 -->\n\n    <h4>{{ languagePack.getText('나의 정보') }}</h4>\n\n    <h6 class=\"update-date\">{{ languagePack.getText('수정') }}: {{ basicForm.update_date }}</h6>\n    <app-avatar \n    name=\"input-profile\"\n    view_type=\"PROFILE\" \n    [(ngModel)]=\"basicForm.user_profile_file_data\" [file]=\"basicForm.file\" [file_json]=\"basicForm.file_json\" [readonly]=\"!editable\"></app-avatar>\n    <app-row mobileBreak>\n      <app-col>\n        \n        <app-input-template\n        name=\"account_id\" [label]=\"languagePack.getText('아이디')\" [disabled]=\"true\">\n          <p slot=\"input\">{{ basicForm.account_id }}</p>\n        </app-input-template>\n\n      </app-col>\n      <app-col>\n        \n        <app-input-template\n        name=\"account_token\" [label]=\"languagePack.getText('비밀번호')\" [disabled]=\"!editable\" (buttonClick)=\"changePassword()\">\n          <p slot=\"input\">{{ languagePack.getText('안전한 계정 사용을 위해 비밀번호를 주기적으로 변경해 주세요.') }}</p>\n          {{ languagePack.getText('변경') }}\n        </app-input-template>\n\n      </app-col>\n      <app-col>\n\n        <app-input\n        name=\"user_name\" [label]=\"languagePack.getText('성명')\"\n        placeholder=\"이름을 입력해주세요.\"\n        [color]=\"basicValidator.user_name?.valid === false && 'warning'\"\n        [(ngModel)]=\"basicForm.user_name\" [disabled]=\"!editable\" [required]=\"true\"></app-input>\n        <app-input-caption *ngIf=\"basicValidator.user_name?.valid === false\" color=\"warning\">{{ basicValidator.user_name?.message }}</app-input-caption>\n\n      </app-col>\n    </app-row>\n\n    <app-row mobileBreak>\n      <app-col>\n\n        <app-calendar name=\"user_birth\" [label]=\"languagePack.getText('생년월일')\"\n        [color]=\"basicValidator.user_birth?.valid === false && 'warning'\"\n        [(ngModel)]=\"basicForm.user_birth\" [disabled]=\"!editable\" [required]=\"true\"></app-calendar>\n        <app-input-caption *ngIf=\"basicValidator.user_birth?.valid === false\" color=\"warning\">{{ basicValidator.user_birth?.message }}</app-input-caption>\n\n      </app-col>\n      <app-col>\n\n        <app-radio-input name=\"user_gender\" [label]=\"languagePack.getText('성별')\" \n        [color]=\"basicValidator.user_gender?.valid === false && 'warning'\"\n        [(ngModel)]=\"basicForm.user_gender\" [disabled]=\"!editable\" [required]=\"true\">\n          <app-radio value=\"남\">{{ languagePack.getText('남자') }}</app-radio>\n          <app-radio value=\"여\">{{ languagePack.getText('여자') }}</app-radio>\n        </app-radio-input>\n        <app-input-caption *ngIf=\"basicValidator.user_gender?.valid === false\" color=\"warning\">{{ basicValidator.user_gender?.message }}</app-input-caption>\n\n      </app-col>\n    </app-row>\n\n    <app-row mobileBreak>\n      <app-col>\n\n        <app-input-template name=\"user_phone\" [label]=\"languagePack.getText('휴대폰')\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n        [color]=\"basicValidator.user_phone?.valid === false && 'warning'\"\n        [disabled]=\"!editable\" [required]=\"true\" (buttonClick)=\"changePhone()\">\n          <p slot=\"input\">{{ basicForm.user_phone }}</p>\n          {{ languagePack.getText('변경') }}\n        </app-input-template>\n\n      </app-col>\n      <app-col>\n\n        <app-email name=\"user_email\" [label]=\"languagePack.getText('이메일 (선택)')\" \n        [color]=\"basicValidator.user_email?.valid === false && 'warning'\"\n        (delayKeyup)=\"overlapEmail()\"\n        [(ngModel)]=\"basicForm.user_email\" [disabled]=\"!editable\" [required]=\"true\"></app-email>\n        <app-input-caption *ngIf=\"basicValidator.user_email?.valid === false\" color=\"warning\">{{ basicValidator.user_email?.message }}</app-input-caption>\n\n      </app-col>\n    </app-row>\n\n    <!-- 소속 정보 -->\n    <div>\n\n      <h4>{{ languagePack.getText('소속 정보') }}</h4>\n\n      <app-row mobileBreak>\n        <app-col>\n\n          <app-input-template [label]=\"languagePack.getText('업체명')\" [disabled]=\"true\">\n            <p slot=\"input\">{{ belongForm.company_name }}</p>\n          </app-input-template>\n\n        </app-col>\n        <app-col>\n\n          <ng-container *ngIf=\"userType !== 'WORKER'\">\n\n            <app-select-position name=\"ctgo_job_position_id\" \n            [company_id]=\"belongForm.company_id\"\n            [(ngModel)]=\"belongForm.ctgo_job_position_id\" [disabled]=\"!belongEditable\" [required]=\"true\"></app-select-position>\n            <app-input-caption *ngIf=\"belongValidator.ctgo_job_position_id?.valid === false\" color=\"warning\">{{ belongValidator.ctgo_job_position_id?.message }}</app-input-caption>\n\n          </ng-container>\n          <ng-container *ngIf=\"userType === 'WORKER'\">\n\n            <app-input-template [label]=\"languagePack.getText('직위')\" [disabled]=\"true\">\n              <p slot=\"input\">{{ languagePack.getText('작업자') }}</p>\n            </app-input-template>\n\n          </ng-container>\n\n        </app-col>\n\n        <app-col *ngIf=\"userType === 'LH' || userType === 'MASTER' || userType === 'PARTNER'\">\n\n          <app-input-template label=\"시스템 권한\" [disabled]=\"true\">\n            <p slot=\"input\">{{ user.parseUserRole(belongForm.user_role) }}</p>\n          </app-input-template>\n\n        </app-col>\n      </app-row>\n\n      <app-row mobileBreak *ngIf=\"userType === 'LH'\">\n        <app-col>\n\n          <!-- <app-select-organization [(ngModel)]=\"belongForm\" [disabled]=\"!belongEditable\"></app-select-organization>\n          <app-input-caption *ngIf=\"belongValidator.hq_regional_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_regional_id?.message }}</app-input-caption>\n          <app-input-caption *ngIf=\"belongValidator.hq_business_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_business_id?.message }}</app-input-caption>\n          <app-input-caption *ngIf=\"belongValidator.hq_department_id?.valid === false\" color=\"warning\">{{ belongValidator.hq_department_id?.message }}</app-input-caption> -->\n          <app-input label=\"사업지구\" [disabled]=\"true\" value=\"수원당수\"></app-input>\n        </app-col>\n      </app-row>\n\n      <app-row mobileBreak *ngIf=\"userType !== 'LH'\">\n        <app-col>\n\n          <app-select-scene [(ngModel)]=\"belongForm.project_id\" [disabled]=\"true\"></app-select-scene>\n\n        </app-col>\n        <!-- <app-col *ngIf=\"userType === 'LH'\">\n          \n          <app-input-template label=\"현장 공사 기간\" [disabled]=\"true\">\n            <p slot=\"input\">{{ belongForm.contract_start_date }} ~ {{ belongForm.contract_end_date }}</p>\n          </app-input-template>\n\n        </app-col> -->\n        \n      </app-row>\n\n      <app-row mobileBreak>\n        <app-col *ngIf=\"(userType === 'MASTER' || userType === 'PARTNER' || userType === 'WORKER')\">\n          <app-select-construction [master_company_id]=\"user.userData.belong_data.master_company_id\" [project_id]=\"belongForm.project_id\" [(ngModel)]=\"belongForm.ctgo_construction_id\" [disabled]=\"!belongEditable\"></app-select-construction>\n          <app-input-caption *ngIf=\"belongValidator.ctgo_construction_id?.valid === false\" color=\"warning\">{{ belongValidator.ctgo_construction_id?.message }}</app-input-caption>\n\n        </app-col>\n        <app-col *ngIf=\"userType === 'WORKER'\">\n\n          <app-select-occupation [company_id]=\"belongForm.company_id\" [(ngModel)]=\"belongForm.ctgo_occupation_id\" [disabled]=\"!belongEditable\"></app-select-occupation>\n\n        </app-col>\n      </app-row>\n\n      <app-row mobileBreak *ngIf=\"userType === 'SUPER' || userType === 'MASTER' || userType === 'PARTNER' || userType === 'WORKER'\">\n        <app-col>\n\n          <app-radio-input [label]=\"languagePack.getText('현장 출역 상태')\" [(ngModel)]=\"belongForm.construction_state\" [disabled]=\"true\">\n            <app-radio value=\"출역중\">{{ languagePack.getText('출역중') }}</app-radio>\n            <app-radio value=\"출역종료\">{{ languagePack.getText('출역 종료') }}</app-radio>\n          </app-radio-input>\n\n        </app-col>\n        <app-col>\n          \n          <app-input-template [label]=\"languagePack.getText('현장 출역 기간')\" [disabled]=\"true\">\n            <p slot=\"input\">{{ belongForm.construction_start_date || '없음' }} ~ {{ belongForm.construction_end_date || '없음' }}</p>\n          </app-input-template>\n\n        </app-col>\n      </app-row>\n\n      <app-input-safejob #inputSafeJob *ngIf=\"(userType === 'MASTER' || userType === 'PARTNER' || userType === 'WORKER') && belongForm.project_id\"\n      [project_id]=\"user.userData.belong_data.project_id\"\n      [company_id]=\"user.userData.belong_data.master_company_id\"\n      [user_type]=\"userType\"\n      insert_url=\"/mypage/company/safejob/insert\"\n      update_url=\"/mypage/company/safejob/update\"\n      delete_url=\"/mypage/company/safejob/delete\"\n      [(ngModel)]=\"belongForm.safe_job_data\" [disabled]=\"!belongEditable\"></app-input-safejob>\n\n      <app-input-template *ngIf=\"belongForm.ctgo_occupation_role === 'DRIVER'\" [label]=\"languagePack.getText('면허 번호')\" [disabled]=\"true\">\n        <p slot=\"input\">{{ belongForm.user_certify_no }}</p>\n      </app-input-template>\n\n    </div>\n    \n  </app-container>\n</ion-content>\n\n<!-- 상세보기 footer -->\n<app-button-footer *ngIf=\"!editable; else tempEditFooter\">\n  <app-button name=\"button_edit\" fill=\"translucent\" (click)=\"edit()\">{{ languagePack.getText('수정') }}</app-button>\n</app-button-footer>\n<!-- 수정 footer -->\n<ng-template #tempEditFooter>\n  <app-button-footer>\n    <app-button name=\"submit\" (click)=\"submit()\">{{ languagePack.getText('모두 저장') }}</app-button>\n  </app-button-footer>\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page-info_my-page-info_module_ts.js.map