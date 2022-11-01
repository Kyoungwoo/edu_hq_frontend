(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page-type_my-page-type_module_ts"],{

/***/ 22738:
/*!**************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-type/my-page-type-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageTypePageRoutingModule": () => (/* binding */ MyPageTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-type.page */ 42584);




const routes = [
    {
        path: '',
        component: _my_page_type_page__WEBPACK_IMPORTED_MODULE_0__.MyPageTypePage
    }
];
let MyPageTypePageRoutingModule = class MyPageTypePageRoutingModule {
};
MyPageTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPageTypePageRoutingModule);



/***/ }),

/***/ 97150:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/my-page-type/my-page-type.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageTypePageModule": () => (/* binding */ MyPageTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-type-routing.module */ 22738);
/* harmony import */ var _my_page_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-type.page */ 42584);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MyPageTypePageModule = class MyPageTypePageModule {
};
MyPageTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPageTypePageRoutingModule
        ],
        declarations: [_my_page_type_page__WEBPACK_IMPORTED_MODULE_1__.MyPageTypePage]
    })
], MyPageTypePageModule);



/***/ }),

/***/ 42584:
/*!****************************************************************!*\
  !*** ./src/app/page/my-page/my-page-type/my-page-type.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageTypePage": () => (/* binding */ MyPageTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page-type.page.html */ 75712);
/* harmony import */ var _my_page_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-type.page.scss */ 83883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);











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
let MyPageTypePage = class MyPageTypePage {
    constructor(connect, toast, alert, user, nav, languagePack) {
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.nav = nav;
        this.languagePack = languagePack;
        this.userType = null;
    }
    ngOnInit() {
        this.getForm();
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
    }
    /** 회원 탈퇴 */
    withdrawal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.alert.present({
                header: this.languagePack.getText('회원탈퇴를 진행합니다.'),
                message: `
        □ ${this.languagePack.getText('회원 탈퇴 시 시스템 이용이 불가능 하며 취소가 불가능 합니다.')}\n
        □ ${this.languagePack.getText('회원 탈퇴 후 마지막 출역 현장의 준공일로 부터 3년 후 까지 정보 보관 후 자동 삭제 됩니다.')}\n
        □ ${this.languagePack.getText('회원 탈퇴를 원할 시 비밀번호를 입력해주세요.')}
      `,
                inputs: [
                    { name: 'account_token', placeholder: this.languagePack.getText('비밀번호'), type: 'password' }
                ],
                buttons: [
                    { text: this.languagePack.getText('취소') },
                    { text: this.languagePack.getText('회원 탈퇴'), handler: this.withdrawalHandler.bind(this) }
                ]
            });
        });
    }
    withdrawalHandler({ account_token }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                    header: this.languagePack.getText('회원 탈퇴가 완료되었습니다.'),
                    message: this.languagePack.getText('그동안 이용해주셔서 감사합니다.'),
                    buttons: [
                        { text: this.languagePack.getText('확인') }
                    ]
                });
            }
            else {
                this.toast.present({ color: 'warning', message: '비밀번호가 올바르지 않습니다.' });
            }
        });
    }
};
MyPageTypePage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
MyPageTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-my-page-type',
        template: _raw_loader_my_page_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_page_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPageTypePage);



/***/ }),

/***/ 83883:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/my-page-type/my-page-type.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.profile-row {\n  padding-left: var(--app-page-padding);\n  padding-right: var(--app-page-padding);\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.profile-row app-avatar {\n  width: 80px;\n  height: 80px;\n}\n\nion-item {\n  --background: var(--ion-color-white);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWM7QUFDbEI7O0FBQ0E7RUFDSSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFFdkI7O0FBTkE7RUFNUSxXQUFXO0VBQ1gsWUFBWTtBQUlwQjs7QUFEQTtFQUNJLG9DQUFhO0FBSWpCIiwiZmlsZSI6Im15LXBhZ2UtdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ucHJvZmlsZS1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZ2UtcGFkZGluZyk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZ2UtcGFkZGluZyk7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGFwcC1hdmF0YXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59Il19 */");

/***/ }),

/***/ 75712:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page-type/my-page-type.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/main-user\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('마이페이지') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-row class=\"profile-row\">\n    <app-col size=\"auto\">\n      <app-avatar [src]=\"user.userData.user_profile\"></app-avatar>\n    </app-col>\n    <app-col>\n      <h3>{{ user.userData.user_name }}</h3>\n      <p>{{ user.userData.belong_data.company_name }}</p>\n    </app-col>\n  </app-row>\n\n  <ion-list lines=\"full\">\n    <ion-item routerLink=\"/my-page-info\" detail=\"true\">{{ languagePack.getText('나의 정보') }}</ion-item>\n\n    <ion-item *ngIf=\"userType === 'WORKER'\" \n    routerLink=\"/my-page-health\" detail=\"true\">{{ languagePack.getText('건강 문진') }}</ion-item>\n    \n    <ion-item *ngIf=\"userType === 'MASTER' || userType === 'PARTNER' || userType === 'WORKER'\"\n    routerLink=\"/my-page-education\" detail=\"true\">{{ languagePack.getText('교육 이력') }}</ion-item>\n    \n    <ion-item *ngIf=\"userType === 'WORKER' || user.userData.user_role === 'PARTNER_HEAD' || user.userData.user_role === 'PARTNER_GENERAL'\"\n    routerLink=\"/my-page-mileage\" detail=\"true\">{{ languagePack.getText('안전 마일리지') }}</ion-item>\n\n    <ion-item button (click)=\"withdrawal()\">{{ languagePack.getText('회원 탈퇴') }}</ion-item>\n  </ion-list> \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page-type_my-page-type_module_ts.js.map