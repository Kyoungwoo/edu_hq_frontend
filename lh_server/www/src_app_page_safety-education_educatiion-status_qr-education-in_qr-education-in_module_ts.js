(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_safety-education_educatiion-status_qr-education-in_qr-education-in_module_ts"],{

/***/ 71877:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPageRoutingModule": () => (/* binding */ QrEducationInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_education_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-education-in.page */ 48422);




const routes = [
    {
        path: '',
        component: _qr_education_in_page__WEBPACK_IMPORTED_MODULE_0__.QrEducationInPage
    }
];
let QrEducationInPageRoutingModule = class QrEducationInPageRoutingModule {
};
QrEducationInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrEducationInPageRoutingModule);



/***/ }),

/***/ 42783:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPageModule": () => (/* binding */ QrEducationInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_education_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-education-in-routing.module */ 71877);
/* harmony import */ var _qr_education_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-education-in.page */ 48422);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let QrEducationInPageModule = class QrEducationInPageModule {
};
QrEducationInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _qr_education_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrEducationInPageRoutingModule
        ],
        declarations: [_qr_education_in_page__WEBPACK_IMPORTED_MODULE_1__.QrEducationInPage]
    })
], QrEducationInPageModule);



/***/ }),

/***/ 48422:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPage": () => (/* binding */ QrEducationInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-education-in.page.html */ 67567);
/* harmony import */ var _qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-education-in.page.scss */ 62477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);







let QrEducationInPage = class QrEducationInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        this.eduTime = `${this.item.education_safe_start_time} ~ ${this.item.education_safe_end_time}`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.education_safe_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_2___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"education_safe_id":"' + this.navParams.data.item.education_safe_id + '","type":"EDU"}' // `${this.navParams.data.item.education_safe_id}`
        });
    }
    downloadQR() {
        let link = document.createElement("a");
        link.download = 'QRcode';
        link.href = this.qr.image.currentSrc;
        link.click();
    }
    dismiss() {
        this._modal.dismiss(true);
    }
};
QrEducationInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrEducationInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrEducationInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-education-in',
        template: _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrEducationInPage);



/***/ }),

/***/ 62477:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1lZHVjYXRpb24taW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 67567:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\" [value]=\"item.education_safe_date\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\" [value]=\"item.ctgo_education_safe_name\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"교육시간\" [value]=\"eduTime\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\" [value]=\"item.education_safe_manager_names\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_safety-education_educatiion-status_qr-education-in_qr-education-in_module_ts.js.map