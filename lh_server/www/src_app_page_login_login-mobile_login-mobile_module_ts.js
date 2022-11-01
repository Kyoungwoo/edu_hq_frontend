(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_login_login-mobile_login-mobile_module_ts"],{

/***/ 31387:
/*!************************************************************************!*\
  !*** ./src/app/page/login/login-mobile/login-mobile-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginMobilePageRoutingModule": () => (/* binding */ LoginMobilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_mobile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-mobile.page */ 61290);




const routes = [
    {
        path: '',
        component: _login_mobile_page__WEBPACK_IMPORTED_MODULE_0__.LoginMobilePage
    }
];
let LoginMobilePageRoutingModule = class LoginMobilePageRoutingModule {
};
LoginMobilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginMobilePageRoutingModule);



/***/ }),

/***/ 74735:
/*!****************************************************************!*\
  !*** ./src/app/page/login/login-mobile/login-mobile.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginMobilePageModule": () => (/* binding */ LoginMobilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-mobile-routing.module */ 31387);
/* harmony import */ var _login_mobile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-mobile.page */ 61290);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let LoginMobilePageModule = class LoginMobilePageModule {
};
LoginMobilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _login_mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginMobilePageRoutingModule
        ],
        declarations: [_login_mobile_page__WEBPACK_IMPORTED_MODULE_1__.LoginMobilePage]
    })
], LoginMobilePageModule);



/***/ }),

/***/ 61290:
/*!**************************************************************!*\
  !*** ./src/app/page/login/login-mobile/login-mobile.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginMobilePage": () => (/* binding */ LoginMobilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-mobile.page.html */ 11564);
/* harmony import */ var _login_mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-mobile.page.scss */ 71643);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _component_modal_setting_modify_setting_modify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../component/modal/setting-modify/setting-modify.component */ 55845);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_logout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/logout.service */ 68861);
/* harmony import */ var _service_push_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../service/push.service */ 52065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login.interface */ 7929);
















let LoginMobilePage = class LoginMobilePage {
    constructor(el, connect, user, nav, promise, alert, push, logout, modal, languagePack) {
        this.el = el;
        this.connect = connect;
        this.user = user;
        this.nav = nav;
        this.promise = promise;
        this.alert = alert;
        this.push = push;
        this.logout = logout;
        this.modal = modal;
        this.languagePack = languagePack;
        this.form = new _login_interface__WEBPACK_IMPORTED_MODULE_12__.LoginForm();
        this.autoLogin = false;
    }
    ngOnInit() {
        if (this.user.autoLogin) {
            this.tokenLogin();
        }
    }
    ionViewDidEnter() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.core.test)
                return;
            if (!(yield this.testSignUp()))
                return;
            if (!(yield this.testFindId()))
                return;
            if (!(yield this.testFindPassord()))
                return;
            this.alert.present({
                header: '테스트 완료',
                message: '테스트 완료'
            });
        });
    }
    testSignUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.SignUp.test)
                return true;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.SignUp.done)
                return true;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.SignUp.type.length) {
                el.querySelector('[name=button_sign_up]').dispatchEvent(new Event('click'));
                return false;
            }
            else {
                src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.SignUp.done = true;
                return true;
            }
        });
    }
    testFindId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindId.test)
                return true;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindId.done)
                return true;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindId.done = true;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=button_find_id]').dispatchEvent(new Event('click'));
            return false;
        });
    }
    testFindPassord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindPassword.test)
                return true;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindPassword.done)
                return true;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.FindPassword.done = true;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=button_find_password]').dispatchEvent(new Event('click'));
            return false;
        });
    }
    testLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.Login.test)
                return true;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.Login.done)
                return true;
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/token/get', this.form, {
                contentType: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ContentType.ApplicationJson,
                loading: true
            });
            if (this.res.rsCode === 0) {
                this.getWorkerInfo(this.res.rsObj, { animated: true });
            }
            else if (this.res.rsCode === 500) {
                this.res.rsMsg = '아이디와 비밀번호를 확인해주세요.';
            }
            else if (this.res.rsCode === 3003) {
                this.alert.present({
                    message: this.res.rsMsg
                });
            }
            else if (this.res.rsCode === 3004) {
                this.alert.present({
                    message: this.res.rsMsg,
                    buttons: [
                        { text: '닫기' },
                        {
                            text: '재가입',
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                                let method = yield this.connect.run('/sign/delete/userinfo', { user_id: this.res.rsObj.user_id }, { loading: true });
                                if (method.rsCode === 0)
                                    this.nav.navigateForward('/sign-up-type');
                                else
                                    this.alert.present({ message: this.res.rsMsg });
                            })
                        }
                    ]
                });
            }
        });
    }
    tokenLogin() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/token/refresh', {
                accountID: this.user.userData.account_id,
                refreshToken: (_a = this.user.authToken) === null || _a === void 0 ? void 0 : _a.refresh_token
            }, {
                contentType: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ContentType.ApplicationJson,
                loading: true
            });
            if (this.res.rsCode === 0) {
                this.autoLogin = true;
                this.getWorkerInfo(this.res.rsObj, { animated: false });
            }
            else if (this.res.rsCode === 500) {
            }
            else if (this.res.rsCode === 3003) {
                this.alert.present({
                    message: this.res.rsMsg
                });
            }
            else if (this.res.rsCode === 3004) {
                this.alert.present({
                    message: this.res.rsMsg,
                    buttons: [
                        { text: '닫기' },
                        { text: '재가입' }
                    ]
                });
            }
        });
    }
    getWorkerInfo(authToken, { animated }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.user.setAuthToken(authToken, this.autoLogin);
            const res = yield this.connect.run('/user/basic/get', {}, {
                parse: ['belong_data']
            });
            if (res.rsCode === 0) {
                const userData = res.rsObj;
                if (userData.user_type === 'LH')
                    yield this.logout.getProjectList(userData);
                yield this.user.setUserData(userData, this.autoLogin);
                switch (userData.user_type) {
                    case 'LH':
                    case 'SUPER':
                        userData.user_main_page = '/main-user';
                        break;
                    case 'COMPANY':
                        if (userData.user_role === 'MASTER_HEAD' || userData.user_role === 'MASTER_GENERAL')
                            userData.user_main_page = '/main-user-master';
                        else
                            userData.user_main_page = '/main-user-partner';
                        break;
                    case 'WORKER':
                        userData.user_main_page = '/main-user-worker';
                        break;
                }
                // 로그인이 완료되면 푸시, 유저데이터저장, 메인페이지 활성화
                this.push.init();
                this.nav.navigateRoot(userData.user_main_page, { animated });
            }
        });
    }
    setting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _component_modal_setting_modify_setting_modify_component__WEBPACK_IMPORTED_MODULE_3__.SettingModifyComponent
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            // if(data) this.get();
        });
    }
};
LoginMobilePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_9__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_10__.PromiseService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _service_push_service__WEBPACK_IMPORTED_MODULE_5__.PushService },
    { type: src_app_service_logout_service__WEBPACK_IMPORTED_MODULE_4__.LogoutService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
LoginMobilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-login-mobile',
        template: _raw_loader_login_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginMobilePage);



/***/ }),

/***/ 71643:
/*!****************************************************************!*\
  !*** ./src/app/page/login/login-mobile/login-mobile.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:var(--ion-color-white);\n}\n\nion-content::part(scroll) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.login-card {\n  max-width: 400px;\n  width: 100%;\n  min-height: 410px;\n  padding: 20px;\n}\n\n.login-card .logo {\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n  width: 45px;\n  height: 45px;\n  margin-bottom: 30px;\n}\n\n.login-card .logo-text {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  width: 80px;\n  height: 15px;\n  margin-bottom: 20px;\n}\n\n.sub-buttons-row {\n  max-width: 300px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.sub-buttons-row app-col {\n  text-align: center;\n}\n\n.sub-buttons-row app-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  white-space: nowrap;\n}\n\n.sub-buttons-row span {\n  display: block;\n  width: 1px;\n  height: 12px;\n  border-right: 1px solid var(--ion-color-step-200);\n}\n\n.setting-btn {\n  text-align: left;\n  padding: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .login-card {\n    padding: 16px;\n    min-height: 300px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vYmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQ0FBYTtBQUNkOztBQUNBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBRTNCOztBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2IsV0FBVztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0FBR2Q7O0FBUEE7RUFPUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUkzQjs7QUFoQkE7RUFnQlEsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFJM0I7O0FBREE7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFJbkI7O0FBUEE7RUFLUSxrQkFBa0I7QUFNMUI7O0FBWEE7RUFRUSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxtQkFBbUI7QUFPM0I7O0FBakJBO0VBYVEsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osaURBQWlEO0FBUXpEOztBQUpBO0VBRUksZ0JBQWdCO0VBQ2hCLFVBQVU7QUFNZDs7QUFIQTtFQUNJO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtFQU12QjtBQUNGIiwiZmlsZSI6ImxvZ2luLW1vYmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tY2FyZCB7XG5cdG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDQxMHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAubG9nby10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuLnN1Yi1idXR0b25zLXJvdyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYXBwLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgYXBwLWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG4gICAgfVxufVxuXG4uc2V0dGluZy1idG57XG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKSFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dpbi1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 11564:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/login-mobile/login-mobile.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-card class=\"login-card\" color=\"light\">\n    <app-logo class=\"logo\"></app-logo>\n    <form>\n      <app-img class=\"logo-text\" src=\"assets/img/logo-text.svg\"></app-img>\n      <!-- <div style=\"text-align:center;\"><h6>Version:1.2.3</h6></div> <br> -->\n      <app-input\n      [color]=\"res && res.rsCode !== 0 && 'warning'\"\n      name=\"input-id\" [label]=\"languagePack.getText('아이디')\" [placeholder]=\"languagePack.getText('아이디')\" \n      [(ngModel)]=\"form.accountID\"></app-input>\n      <app-input \n      [color]=\"res && res.rsCode !== 0 && 'warning'\" \n      name=\"input-password\" [label]=\"languagePack.getText('비밀번호')\" type=\"password\" [placeholder]=\"languagePack.getText('비밀번호')\"\n      [(ngModel)]=\"form.accountToken\" \n      (keyup.enter)=\"login()\"></app-input>\n      \n      <app-input-caption color=\"warning\" name=\"caption-invalid\" *ngIf=\"res?.rsCode === 500\">{{ res.rsMsg }}</app-input-caption>\n\n      <app-button name=\"button-login\" style=\"width: 100%;\" (click)=\"login()\">{{ languagePack.getText('로그인') }}</app-button>\n      <app-row>\n        <app-col>\n          <app-check addClass=\"login\" name=\"auto_login\" [(ngModel)]=\"autoLogin\">\n            {{ languagePack.getText('자동 로그인') }}\n          </app-check>\n        </app-col>\n\n        <app-col>\n          <app-button class=\"setting-btn\" fill=\"clear\" style=\"width: 100%;color:black;\" (click)=\"setting()\">\n            <app-img style=\"width: 2em;margin-right: 3px;\" src=\"assets/img/menu/setting-outline.svg\"></app-img>\n            {{ languagePack.getText('설정') }}\n          </app-button>\n        </app-col>\n      </app-row>\n      \n    </form>\n  </app-card>\n  <app-row class=\"sub-buttons-row\">\n    <app-col><app-button name=\"button_sign_up\" color=\"dark\" fill=\"clear\" size=\"small\" routerLink=\"/sign-up-type\">{{ languagePack.getText('회원 가입') }}</app-button></app-col><span></span>\n    <app-col><app-button name=\"button_find_id\" color=\"dark\" fill=\"clear\" size=\"small\" routerLink=\"/find-id-mobile-type\" [queryParams]=\"{ type: 'find-id' }\">{{ languagePack.getText('아이디 찾기') }}</app-button></app-col><span></span>\n    <app-col><app-button name=\"button_find_password\" color=\"dark\" fill=\"clear\" size=\"small\" routerLink=\"/find-password-mobile-type\" [queryParams]=\"{ type: 'find-password' }\">{{ languagePack.getText('비밀번호 찾기') }}</app-button></app-col>\n  </app-row> <br><br>\n  <div style= \"color: #d8e1e6; font-size: small;\">Version:1.2.4</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_login-mobile_login-mobile_module_ts.js.map