(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_find-pc_find-pc_module_ts"],{

/***/ 87587:
/*!******************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/component.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPcComponentModule": () => (/* binding */ FindPcComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _find_id_find_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-id/find-id.component */ 67328);
/* harmony import */ var _find_id_result_find_id_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-id-result/find-id-result.component */ 22579);
/* harmony import */ var _find_password_find_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-password/find-password.component */ 31742);
/* harmony import */ var _find_password_result_find_password_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-password-result/find-password-result.component */ 31115);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/component.module */ 55051);










let FindPcComponentModule = class FindPcComponentModule {
};
FindPcComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _find_id_find_id_component__WEBPACK_IMPORTED_MODULE_0__.FindIdComponent,
            _find_id_result_find_id_result_component__WEBPACK_IMPORTED_MODULE_1__.FindIdResultComponent,
            _find_password_find_password_component__WEBPACK_IMPORTED_MODULE_2__.FindPasswordComponent,
            _find_password_result_find_password_result_component__WEBPACK_IMPORTED_MODULE_3__.FindPasswordResultComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule
        ],
        exports: [
            _find_id_find_id_component__WEBPACK_IMPORTED_MODULE_0__.FindIdComponent,
            _find_id_result_find_id_result_component__WEBPACK_IMPORTED_MODULE_1__.FindIdResultComponent,
            _find_password_find_password_component__WEBPACK_IMPORTED_MODULE_2__.FindPasswordComponent,
            _find_password_result_find_password_result_component__WEBPACK_IMPORTED_MODULE_3__.FindPasswordResultComponent
        ]
    })
], FindPcComponentModule);



/***/ }),

/***/ 22579:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-id-result/find-id-result.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindIdResultComponent": () => (/* binding */ FindIdResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_id_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-id-result.component.html */ 5582);
/* harmony import */ var _find_id_result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-id-result.component.scss */ 15924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);







let FindIdResultComponent = class FindIdResultComponent {
    constructor(el, nav, promise) {
        this.el = el;
        this.nav = nav;
        this.promise = promise;
        this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.test.FindId.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=button_login]').dispatchEvent(new Event('click'));
        });
    }
    navFindPassword() {
        this.changeType.emit('find-password');
    }
    navLogin() {
        this.nav.navigateBack('/login');
    }
};
FindIdResultComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_3__.PromiseService }
];
FindIdResultComponent.propDecorators = {
    res: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    changeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
FindIdResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-find-id-result',
        template: _raw_loader_find_id_result_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_id_result_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindIdResultComponent);



/***/ }),

/***/ 67328:
/*!***************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-id/find-id.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindIdComponent": () => (/* binding */ FindIdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_id_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-id.component.html */ 84989);
/* harmony import */ var _find_id_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-id.component.scss */ 411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../login.interface */ 7929);












let FindIdComponent = class FindIdComponent {
    constructor(el, connect, activedRoute, nav, regex, promise, changeDetector) {
        this.el = el;
        this.connect = connect;
        this.activedRoute = activedRoute;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.changeRes = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindIdForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindIdForm()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/login');
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.FindId.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 입력 데이터 삽입
            const form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindIdFormMock();
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
        });
    }
    checkParams() {
        const { type } = this.activedRoute.snapshot.queryParams;
        if (type)
            return true;
        else
            return false;
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/sign/find/account_id', this.form, { loading: true });
            this.changeRes.emit(this.res);
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
FindIdComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
FindIdComponent.propDecorators = {
    changeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    changeRes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
FindIdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-find-id',
        template: _raw_loader_find_id_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_find_id_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindIdComponent);



/***/ }),

/***/ 31115:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-password-result/find-password-result.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordResultComponent": () => (/* binding */ FindPasswordResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_password_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-password-result.component.html */ 63196);
/* harmony import */ var _find_password_result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password-result.component.scss */ 449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../login.interface */ 7929);










let FindPasswordResultComponent = class FindPasswordResultComponent {
    constructor(el, alert, connect, nav, promise, changeDetector) {
        this.el = el;
        this.alert = alert;
        this.connect = connect;
        this.nav = nav;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new _login_interface__WEBPACK_IMPORTED_MODULE_7__.UpdatePasswordForm()).validator;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.test.FindPassword.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            const form = new _login_interface__WEBPACK_IMPORTED_MODULE_7__.UpdatePasswordFormMock();
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
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/sign/find/update/account_token', this.form, {
                loading: true
            });
            if (this.res.rsCode === 0) {
                this.nav.navigateBack('/login', { force: true });
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
FindPasswordResultComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
FindPasswordResultComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    changeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
FindPasswordResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-find-password-result',
        template: _raw_loader_find_password_result_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_password_result_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPasswordResultComponent);



/***/ }),

/***/ 31742:
/*!***************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-password/find-password.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPasswordComponent": () => (/* binding */ FindPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-password.component.html */ 94163);
/* harmony import */ var _find_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-password.component.scss */ 47147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../login.interface */ 7929);












let FindPasswordComponent = class FindPasswordComponent {
    constructor(el, connect, activedRoute, nav, regex, promise, changeDetector) {
        this.el = el;
        this.connect = connect;
        this.activedRoute = activedRoute;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.changeRes = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.changeForm = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindPasswordForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindPasswordForm()).validator;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/login');
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.FindPassword.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 입력 데이터 삽입
            const form = new _login_interface__WEBPACK_IMPORTED_MODULE_8__.FindPasswordFormMock();
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
    checkParams() {
        const { type } = this.activedRoute.snapshot.queryParams;
        if (type)
            return true;
        else
            return false;
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/sign/find/account_token', this.form, { loading: true });
            this.changeForm.emit(Object.assign(Object.assign({}, this.form), { account_token: null, account_token_conform: null }));
            this.changeRes.emit(this.res);
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
FindPasswordComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
FindPasswordComponent.propDecorators = {
    changeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    changeRes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    changeForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
FindPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-find-password',
        template: _raw_loader_find_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_find_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPasswordComponent);



/***/ }),

/***/ 26390:
/*!**************************************************************!*\
  !*** ./src/app/page/login/find-pc/find-pc-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPcPageRoutingModule": () => (/* binding */ FindPcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _find_pc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-pc.page */ 16672);




const routes = [
    {
        path: '',
        component: _find_pc_page__WEBPACK_IMPORTED_MODULE_0__.FindPcPage
    }
];
let FindPcPageRoutingModule = class FindPcPageRoutingModule {
};
FindPcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindPcPageRoutingModule);



/***/ }),

/***/ 71004:
/*!******************************************************!*\
  !*** ./src/app/page/login/find-pc/find-pc.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPcPageModule": () => (/* binding */ FindPcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _find_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-pc-routing.module */ 26390);
/* harmony import */ var _find_pc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-pc.page */ 16672);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/component.module */ 87587);









let FindPcPageModule = class FindPcPageModule {
};
FindPcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_3__.FindPcComponentModule,
            _find_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindPcPageRoutingModule
        ],
        declarations: [_find_pc_page__WEBPACK_IMPORTED_MODULE_1__.FindPcPage]
    })
], FindPcPageModule);



/***/ }),

/***/ 16672:
/*!****************************************************!*\
  !*** ./src/app/page/login/find-pc/find-pc.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPcPage": () => (/* binding */ FindPcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_find_pc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-pc.page.html */ 65839);
/* harmony import */ var _find_pc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-pc.page.scss */ 9264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);







let FindPcPage = class FindPcPage {
    constructor(activedRoute, nav, regex) {
        this.activedRoute = activedRoute;
        this.nav = nav;
        this.regex = regex;
    }
    ngOnInit() {
        if (!this.checkParams())
            return this.nav.navigateBack('/login');
        const { type } = this.activedRoute.snapshot.queryParams;
        this.type = type;
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // nothing
        });
    }
    checkParams() {
        const { type } = this.activedRoute.snapshot.queryParams;
        if (type)
            return true;
        else
            return false;
    }
};
FindPcPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_3__.RegexService }
];
FindPcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-find-pc',
        template: _raw_loader_find_pc_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_pc_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPcPage);



/***/ }),

/***/ 15924:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-id-result/find-id-result.component.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-card.warning {\n  border: 1px solid var(--ion-color-warning);\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n.segment-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: 0;\n}\n\n.segment app-col {\n  padding: 0 !important;\n}\n\n.segment-button {\n  width: 100%;\n  height: 56px;\n}\n\n.segment-button.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  background: var(--ion-color-primary);\n  height: 4px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtaWQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQTBDO0FBQzlDOztBQUNBO0VBQ0ksdUJBQXVCO0FBRTNCOztBQUFBO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2QsZUFBYTtBQUdqQjs7QUFEQTtFQUNJLHFCQUFxQjtBQUl6Qjs7QUFGQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FBS2hCOztBQUhBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBTWYiLCJmaWxlIjoiZmluZC1pZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2FyZC53YXJuaW5nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5hcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zZWdtZW50LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tbWluLWhlaWdodDogMDtcbn1cbi5zZWdtZW50IGFwcC1jb2wge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5zZWdtZW50LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NnB4O1xufVxuLnNlZ21lbnQtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgei1pbmRleDogMTA7XG59Il19 */");

/***/ }),

/***/ 411:
/*!*****************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-id/find-id.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-card.warning {\n  border: 1px solid var(--ion-color-warning);\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n.segment-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: 0;\n}\n\n.segment app-col {\n  padding: 0 !important;\n}\n\n.segment-button {\n  width: 100%;\n  height: 56px;\n}\n\n.segment-button.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  background: var(--ion-color-primary);\n  height: 4px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBMEM7QUFDOUM7O0FBQ0E7RUFDSSx1QkFBdUI7QUFFM0I7O0FBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxlQUFhO0FBR2pCOztBQURBO0VBQ0kscUJBQXFCO0FBSXpCOztBQUZBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUFLaEI7O0FBSEE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7QUFNZiIsImZpbGUiOiJmaW5kLWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhcmQud2FybmluZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuYXBwLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc2VnbWVudC10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG59XG4uc2VnbWVudCBhcHAtY29sIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uc2VnbWVudC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTZweDtcbn1cbi5zZWdtZW50LWJ1dHRvbi5hY3RpdmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHotaW5kZXg6IDEwO1xufSJdfQ== */");

/***/ }),

/***/ 449:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-password-result/find-password-result.component.scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-card.warning {\n  border: 1px solid var(--ion-color-warning);\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n.segment-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: 0;\n}\n\n.segment app-col {\n  padding: 0 !important;\n}\n\n.segment-button {\n  width: 100%;\n  height: 56px;\n}\n\n.segment-button.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  background: var(--ion-color-primary);\n  height: 4px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGFzc3dvcmQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQTBDO0FBQzlDOztBQUNBO0VBQ0ksdUJBQXVCO0FBRTNCOztBQUFBO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2QsZUFBYTtBQUdqQjs7QUFEQTtFQUNJLHFCQUFxQjtBQUl6Qjs7QUFGQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FBS2hCOztBQUhBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBTWYiLCJmaWxlIjoiZmluZC1wYXNzd29yZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2FyZC53YXJuaW5nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5hcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zZWdtZW50LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tbWluLWhlaWdodDogMDtcbn1cbi5zZWdtZW50IGFwcC1jb2wge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5zZWdtZW50LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NnB4O1xufVxuLnNlZ21lbnQtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgei1pbmRleDogMTA7XG59Il19 */");

/***/ }),

/***/ 47147:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/login/find-pc/component/find-password/find-password.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-card.warning {\n  border: 1px solid var(--ion-color-warning);\n}\n\napp-row {\n  align-items: flex-start;\n}\n\n.segment-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: 0;\n}\n\n.segment app-col {\n  padding: 0 !important;\n}\n\n.segment-button {\n  width: 100%;\n  height: 56px;\n}\n\n.segment-button.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  background: var(--ion-color-primary);\n  height: 4px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBMEM7QUFDOUM7O0FBQ0E7RUFDSSx1QkFBdUI7QUFFM0I7O0FBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxlQUFhO0FBR2pCOztBQURBO0VBQ0kscUJBQXFCO0FBSXpCOztBQUZBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUFLaEI7O0FBSEE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7QUFNZiIsImZpbGUiOiJmaW5kLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhcmQud2FybmluZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuYXBwLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc2VnbWVudC10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG59XG4uc2VnbWVudCBhcHAtY29sIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uc2VnbWVudC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTZweDtcbn1cbi5zZWdtZW50LWJ1dHRvbi5hY3RpdmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHotaW5kZXg6IDEwO1xufSJdfQ== */");

/***/ }),

/***/ 9264:
/*!******************************************************!*\
  !*** ./src/app/page/login/find-pc/find-pc.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcGMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImZpbmQtcGMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Il19 */");

/***/ }),

/***/ 5582:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-pc/component/find-id-result/find-id-result.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-card color=\"light\">\n  <ion-toolbar slot=\"top\" color=\"white\" class=\"segment-toolbar\">\n    <app-row class=\"segment\">\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button active\">아이디 찾기</app-button>\n      </app-col>\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button\" (click)=\"changeType.emit('find-password')\">비밀번호 찾기</app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <h4>회원님의 아이디는 다음과 같습니다.</h4>\n  <app-card><h3><ion-text color=\"primary\">{{ res.rsObj.account_id }}</ion-text></h3></app-card>\n  <ion-toolbar slot=\"bottom\" color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-button name=\"button_find_password\" fill=\"translucent\" (click)=\"navFindPassword()\">비밀번호 찾기</app-button>\n      <app-button name=\"button_login\" (click)=\"navLogin()\">로그인하기</app-button>\n    </ion-buttons>\n  </ion-toolbar>\n</app-card>\n");

/***/ }),

/***/ 84989:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-pc/component/find-id/find-id.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-card color=\"light\" [class.warning]=\"res && res.rsCode\">\n  <ion-toolbar slot=\"top\" color=\"white\" class=\"segment-toolbar\">\n    <app-row class=\"segment\">\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button active\">아이디 찾기</app-button>\n      </app-col>\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button\" (click)=\"changeType.emit('find-password')\">비밀번호 찾기</app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <h4>아이디를 잊으셨나요?</h4>\n  <app-radio-group value=\"phone\">\n    <app-radio value=\"phone\">등록된 휴대폰번호로 찾기</app-radio>\n\n    <app-input\n    name=\"user_name\" label=\"성명\"\n    placeholder=\"이름을 입력해주세요.\"\n    [color]=\"validator.user_name?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.user_name\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.user_name?.valid === false\" color=\"warning\">{{ validator.user_name?.message }}</app-input-caption>\n    <app-input name=\"user_phone\" label=\"휴대폰\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n    [color]=\"validator.user_phone?.valid === false ? 'warning' \n    : validator.sms_token?.valid === true && 'success'\"\n    [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"validator.user_phone = null\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n      인증번호<br>받기\n    </app-input>\n    <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n    <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">인증이 완료되었습니다.</app-input-caption>\n    <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n      <app-input\n      name=\"sms_token\" label=\"인증번호\" placeholder=\"인증번호를 입력해주세요.\" type=\"tel\"\n      [color]=\"validator.sms_token?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.sms_token\" (delayKeyup)=\"validator.sms_token = null\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n        확인\n      </app-input>\n      <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n    </div>\n  </app-radio-group>\n\n\n  <ion-toolbar slot=\"bottom\" color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-button name=\"button_next\" (click)=\"next()\">다음</app-button>\n    </ion-buttons>\n  </ion-toolbar>\n</app-card>\n<app-input-caption *ngIf=\"res && res.rsCode\" color=\"warning\">{{ res.rsMsg }}</app-input-caption>");

/***/ }),

/***/ 63196:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-pc/component/find-password-result/find-password-result.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-card color=\"light\" [class.warning]=\"res && res.rsCode\">\n  <ion-toolbar slot=\"top\" color=\"white\" class=\"segment-toolbar\">\n    <app-row class=\"segment\">\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button\" (click)=\"changeType.emit('find-id')\">아이디 찾기</app-button>\n      </app-col>\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button active\">비밀번호 찾기</app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <h4>비밀번호를 재설정 하세요.</h4>\n  <app-input name=\"account_token\" label=\"비밀번호\" type=\"password\"\n  placeholder=\"영문, 숫자, 조합(6~20자)\"\n  [color]=\"validator.account_token?.valid === false && 'warning'\"\n  [(ngModel)]=\"form.account_token\" (delayKeyup)=\"checkPass()\" [required]=\"true\"></app-input>\n  <app-input-caption *ngIf=\"validator.account_token?.valid === false\" color=\"warning\">{{ validator.account_token?.message }}</app-input-caption>\n  \n  <app-input name=\"account_token_conform\" label=\"비밀번호 확인\" placeholder=\"비밀번호를 재입력 해주세요.\" type=\"password\"\n  [color]=\"validator.account_token_conform?.valid === false && 'warning'\"\n  [(ngModel)]=\"form.account_token_conform\" (delayKeyup)=\"checkPassConfirm()\" [required]=\"true\"></app-input>\n  <app-input-caption *ngIf=\"validator.account_token_conform?.valid === false\" color=\"warning\">{{ validator.account_token_conform?.message }}</app-input-caption>\n\n  <ion-toolbar slot=\"bottom\" color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-button name=\"button_submit\" (click)=\"submit()\">비밀번호 재설정</app-button>\n    </ion-buttons>\n  </ion-toolbar>\n</app-card>\n<app-input-caption *ngIf=\"res && res.rsCode\" color=\"warning\">{{ res.rsMsg }}</app-input-caption>");

/***/ }),

/***/ 94163:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-pc/component/find-password/find-password.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-card color=\"light\" [class.warning]=\"res && res.rsCode\">\n  <ion-toolbar slot=\"top\" color=\"white\" class=\"segment-toolbar\">\n    <app-row class=\"segment\">\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button\" (click)=\"changeType.emit('find-id')\">아이디 찾기</app-button>\n      </app-col>\n      <app-col>\n        <app-button fill=\"clear\" class=\"segment-button active\">비밀번호 찾기</app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <h4>비밀번호를 잊으셨나요?</h4>\n  <app-radio-group value=\"phone\">\n    <app-radio value=\"phone\">등록된 휴대폰번호로 찾기</app-radio>\n\n    <app-input\n    name=\"account_id\" label=\"아이디\"\n    placeholder=\"영문과 숫자만 입력해주세요.\"\n    [color]=\"validator.account_id?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.account_id\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.account_id?.valid === false\" color=\"warning\">{{ validator.account_id?.message }}</app-input-caption>\n    <app-input\n    name=\"user_name\" label=\"성명\"\n    placeholder=\"이름을 입력해주세요.\"\n    [color]=\"validator.user_name?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.user_name\" [required]=\"true\"></app-input>\n    <app-input-caption *ngIf=\"validator.user_name?.valid === false\" color=\"warning\">{{ validator.user_name?.message }}</app-input-caption>\n    <app-input name=\"user_phone\" label=\"휴대폰\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n    [color]=\"validator.user_phone?.valid === false ? 'warning' \n    : validator.sms_token?.valid === true && 'success'\"\n    [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"validator.user_phone = null\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n      인증번호<br>받기\n    </app-input>\n    <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n    <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">인증이 완료되었습니다.</app-input-caption>\n    <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n      <app-input\n      name=\"sms_token\" label=\"인증번호\" placeholder=\"인증번호를 입력해주세요.\" type=\"tel\"\n      [color]=\"validator.sms_token?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.sms_token\" (delayKeyup)=\"validator.sms_token = null\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n        확인\n      </app-input>\n      <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n    </div>\n  </app-radio-group>\n\n\n  <ion-toolbar slot=\"bottom\" color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-button name=\"button_next\" (click)=\"next()\">다음</app-button>\n    </ion-buttons>\n  </ion-toolbar>\n</app-card>\n<app-input-caption *ngIf=\"res && res.rsCode\" color=\"warning\">{{ res.rsMsg }}</app-input-caption>");

/***/ }),

/***/ 65839:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/find-pc/find-pc.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>아이디/비밀번호 찾기</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <ng-container *ngIf=\"type === 'find-id'; else tempFindPassword\">\n      <app-find-id *ngIf=\"!resFindId || resFindId.rsCode; else tempIdResult\" (changeType)=\"type = $event\" (changeRes)=\"resFindId = $event\"></app-find-id>\n      <ng-template #tempIdResult>\n        <app-find-id-result [res]=\"resFindId\" (changeType)=\"type = $event\"></app-find-id-result>\n      </ng-template>\n    </ng-container>\n    <ng-template #tempFindPassword>\n      <app-find-password *ngIf=\"!resFindPassord || resFindPassord.rsCode; else tempPasswordResult\" (changeForm)=\"formUpdatePassword = $event\" (changeType)=\"type = $event\" (changeRes)=\"resFindPassord = $event\"></app-find-password>\n    </ng-template>\n    <ng-template #tempPasswordResult>\n      <app-find-password-result [form]=\"formUpdatePassword\"(changeType)=\"type = $event\" ></app-find-password-result>\n    </ng-template>\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_find-pc_find-pc_module_ts.js.map