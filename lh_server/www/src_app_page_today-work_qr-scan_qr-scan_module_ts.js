(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_today-work_qr-scan_qr-scan_module_ts"],{

/***/ 23895:
/*!*******************************************************************!*\
  !*** ./src/app/page/today-work/qr-scan/qr-scan-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPageRoutingModule": () => (/* binding */ QrScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-scan.page */ 56839);




const routes = [
    {
        path: '',
        component: _qr_scan_page__WEBPACK_IMPORTED_MODULE_0__.QrScanPage
    }
];
let QrScanPageRoutingModule = class QrScanPageRoutingModule {
};
QrScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrScanPageRoutingModule);



/***/ }),

/***/ 23991:
/*!***********************************************************!*\
  !*** ./src/app/page/today-work/qr-scan/qr-scan.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPageModule": () => (/* binding */ QrScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-scan-routing.module */ 23895);
/* harmony import */ var _qr_scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan.page */ 56839);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let QrScanPageModule = class QrScanPageModule {
};
QrScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrScanPageRoutingModule
        ],
        declarations: [_qr_scan_page__WEBPACK_IMPORTED_MODULE_1__.QrScanPage]
    })
], QrScanPageModule);



/***/ }),

/***/ 56839:
/*!*********************************************************!*\
  !*** ./src/app/page/today-work/qr-scan/qr-scan.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPage": () => (/* binding */ QrScanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_scan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-scan.page.html */ 50959);
/* harmony import */ var _qr_scan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan.page.scss */ 30298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let QrScanPage = class QrScanPage {
    constructor() { }
    ngOnInit() {
    }
};
QrScanPage.ctorParameters = () => [];
QrScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qr-scan',
        template: _raw_loader_qr_scan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrScanPage);



/***/ }),

/***/ 30298:
/*!***********************************************************!*\
  !*** ./src/app/page/today-work/qr-scan/qr-scan.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zY2FuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 50959:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/today-work/qr-scan/qr-scan.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>qr-scan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<app-qr-scanner></app-qr-scanner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_today-work_qr-scan_qr-scan_module_ts.js.map