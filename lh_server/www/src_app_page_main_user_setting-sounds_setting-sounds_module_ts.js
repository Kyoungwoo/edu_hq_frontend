(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_main_user_setting-sounds_setting-sounds_module_ts"],{

/***/ 27042:
/*!********************************************************************************!*\
  !*** ./src/app/page/main/user/setting-sounds/setting-sounds-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingSoundsPageRoutingModule": () => (/* binding */ SettingSoundsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setting_sounds_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-sounds.page */ 86503);




const routes = [
    {
        path: '',
        component: _setting_sounds_page__WEBPACK_IMPORTED_MODULE_0__.SettingSoundsPage
    }
];
let SettingSoundsPageRoutingModule = class SettingSoundsPageRoutingModule {
};
SettingSoundsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingSoundsPageRoutingModule);



/***/ }),

/***/ 2594:
/*!************************************************************************!*\
  !*** ./src/app/page/main/user/setting-sounds/setting-sounds.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingSoundsPageModule": () => (/* binding */ SettingSoundsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setting_sounds_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-sounds-routing.module */ 27042);
/* harmony import */ var _setting_sounds_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-sounds.page */ 86503);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let SettingSoundsPageModule = class SettingSoundsPageModule {
};
SettingSoundsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _setting_sounds_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingSoundsPageRoutingModule
        ],
        declarations: [_setting_sounds_page__WEBPACK_IMPORTED_MODULE_1__.SettingSoundsPage]
    })
], SettingSoundsPageModule);



/***/ }),

/***/ 86503:
/*!**********************************************************************!*\
  !*** ./src/app/page/main/user/setting-sounds/setting-sounds.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingSoundsPage": () => (/* binding */ SettingSoundsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setting_sounds_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting-sounds.page.html */ 32805);
/* harmony import */ var _setting_sounds_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-sounds.page.scss */ 92345);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);






let SettingSoundsPage = class SettingSoundsPage {
    constructor(connect, languagePack) {
        this.connect = connect;
        this.languagePack = languagePack;
        this.notify_type = 1;
    }
    ngOnInit() {
        this.getAlarmSetting();
    }
    /**
     * @function getAlarmSetting(): 내 알림설정 가져오기
     */
    getAlarmSetting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/etc/notifytype/get', null);
            switch (res.rsCode) {
                case 0:
                    this.notify_type = res.rsObj.notify_type;
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function updateAlarmSetting(): 내 알림설정 변경하기
     */
    updateAlarmSetting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/etc/notifytype/update', { notify_type: this.notify_type });
            switch (res.rsCode) {
                case 0:
                    // this.notify_type = res.rsObj.notify_type;
                    this.getAlarmSetting();
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
};
SettingSoundsPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
SettingSoundsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-setting-sounds',
        template: _raw_loader_setting_sounds_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setting_sounds_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingSoundsPage);



/***/ }),

/***/ 92345:
/*!************************************************************************!*\
  !*** ./src/app/page/main/user/setting-sounds/setting-sounds.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card-inner {\n  height: 64px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmctc291bmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic2V0dGluZy1zb3VuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW5uZXIge1xuICAgIGhlaWdodDogNjRweDtcbn0iXX0= */");

/***/ }),

/***/ 32805:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/setting-sounds/setting-sounds.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('알림 설정') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-menu-button></app-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-radio-group [(ngModel)]=\"notify_type\" (ngModelChange)=\"updateAlarmSetting()\">\n    <app-card name=\"setting-sound\" (click)=\"notify_type = 3;\">\n      <app-row class=\"card-inner\">\n        <app-col>\n          <app-radio size=\"small\" [value]=\"3\"></app-radio>\n        </app-col>\n        <app-col size=\"auto\">\n          <h4> {{ languagePack.getText('소리+진동') }}</h4>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card name=\"setting-sound\" (click)=\"notify_type = 1;\">\n      <app-row class=\"card-inner\">\n        <app-col>\n          <app-radio size=\"small\" [value]=\"1\"></app-radio>\n        </app-col>\n        <app-col size=\"auto\">\n          <h4>{{ languagePack.getText('소리') }}</h4>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card name=\"setting-sound\" (click)=\"notify_type = 2;\">\n      <app-row class=\"card-inner\">\n        <app-col>\n          <app-radio size=\"small\" [value]=\"2\"></app-radio>\n        </app-col>\n        <app-col size=\"auto\">\n          <h4>{{ languagePack.getText('진동') }}</h4>\n        </app-col>\n      </app-row>\n    </app-card>\n  </app-radio-group>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_main_user_setting-sounds_setting-sounds_module_ts.js.map