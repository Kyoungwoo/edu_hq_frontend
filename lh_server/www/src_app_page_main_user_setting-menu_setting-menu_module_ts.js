(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_main_user_setting-menu_setting-menu_module_ts"],{

/***/ 40904:
/*!****************************************************************************!*\
  !*** ./src/app/page/main/user/setting-menu/setting-menu-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingMenuPageRoutingModule": () => (/* binding */ SettingMenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setting_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-menu.page */ 43881);




const routes = [
    {
        path: '',
        component: _setting_menu_page__WEBPACK_IMPORTED_MODULE_0__.SettingMenuPage
    }
];
let SettingMenuPageRoutingModule = class SettingMenuPageRoutingModule {
};
SettingMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingMenuPageRoutingModule);



/***/ }),

/***/ 63003:
/*!********************************************************************!*\
  !*** ./src/app/page/main/user/setting-menu/setting-menu.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingMenuPageModule": () => (/* binding */ SettingMenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setting_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-menu-routing.module */ 40904);
/* harmony import */ var _setting_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-menu.page */ 43881);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let SettingMenuPageModule = class SettingMenuPageModule {
};
SettingMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _setting_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingMenuPageRoutingModule
        ],
        declarations: [_setting_menu_page__WEBPACK_IMPORTED_MODULE_1__.SettingMenuPage]
    })
], SettingMenuPageModule);



/***/ }),

/***/ 43881:
/*!******************************************************************!*\
  !*** ./src/app/page/main/user/setting-menu/setting-menu.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingMenuPage": () => (/* binding */ SettingMenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setting_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting-menu.page.html */ 178);
/* harmony import */ var _setting_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-menu.page.scss */ 32787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);








let SettingMenuPage = class SettingMenuPage {
    constructor(modal, nav, alert, languagePack) {
        this.modal = modal;
        this.nav = nav;
        this.alert = alert;
        this.languagePack = languagePack;
    }
    ngOnInit() {
    }
    router(title) {
        switch (title) {
            case '':
                this.alert.present({
                    message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
                    header: '준비중'
                });
                break;
            case '알림설정':
                this.nav.navigateForward('/setting-sounds');
                break;
        }
    }
};
SettingMenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
SettingMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-setting-menu',
        template: _raw_loader_setting_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setting_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingMenuPage);



/***/ }),

/***/ 32787:
/*!********************************************************************!*\
  !*** ./src/app/page/main/user/setting-menu/setting-menu.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card-inner {\n  height: 64px;\n}\n\napp-img.arrow-right {\n  width: 8px;\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmctbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzZXR0aW5nLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW5uZXIge1xuICAgIGhlaWdodDogNjRweDtcbn1cblxuYXBwLWltZy5hcnJvdy1yaWdodCB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ 178:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/setting-menu/setting-menu.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('설정') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-menu-button></app-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-card name=\"setting-sound\" [button]=\"true\" (click)=\"router('알림설정')\">\n    <app-row class=\"card-inner\">\n      <app-col>\n        <h4>{{ languagePack.getText('알림 설정') }}</h4>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n      </app-col>\n    </app-row>\n  </app-card>\n  <app-card name=\"setting-sound\" [button]=\"true\" (click)=\"router('')\">\n    <app-row class=\"card-inner\">\n      <app-col>\n        <h4>{{ languagePack.getText('바로가기 메뉴') }}</h4>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n      </app-col>\n    </app-row>\n  </app-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_main_user_setting-menu_setting-menu_module_ts.js.map