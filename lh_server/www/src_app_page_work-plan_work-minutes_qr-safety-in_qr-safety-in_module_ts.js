(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_work-minutes_qr-safety-in_qr-safety-in_module_ts"],{

/***/ 6633:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPageRoutingModule": () => (/* binding */ QrSafetyInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-safety-in.page */ 58081);




const routes = [
    {
        path: '',
        component: _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_0__.QrSafetyInPage
    }
];
let QrSafetyInPageRoutingModule = class QrSafetyInPageRoutingModule {
};
QrSafetyInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrSafetyInPageRoutingModule);



/***/ }),

/***/ 59189:
/*!*********************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPageModule": () => (/* binding */ QrSafetyInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_safety_in_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-safety-in-routing.module */ 6633);
/* harmony import */ var _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-safety-in.page */ 58081);








let QrSafetyInPageModule = class QrSafetyInPageModule {
};
QrSafetyInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _qr_safety_in_routing_module__WEBPACK_IMPORTED_MODULE_1__.QrSafetyInPageRoutingModule
        ],
        declarations: [_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__.QrSafetyInPage]
    })
], QrSafetyInPageModule);



/***/ }),

/***/ 58081:
/*!*******************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPage": () => (/* binding */ QrSafetyInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-safety-in.page.html */ 42628);
/* harmony import */ var _qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-safety-in.page.scss */ 78487);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_3__);







let QrSafetyInPage = class QrSafetyInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        console.log('QrSafetyInPage - ', this.item);
        this.meet_time = `${this.item.safety_meeting_start_time} ~ ${this.item.safety_meeting_end_time}`;
        this.meet_date = `${this.item.safety_meeting_date}(${this.item.safety_meeting_date_week_day})`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.safety_meeting_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_3___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"safety_meeting_id":"' + this.navParams.data.item.safety_meeting_id + '","type":"SAFE"}' // `${this.navParams.data.item.education_safe_id}`
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
QrSafetyInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrSafetyInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrSafetyInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-safety-in',
        template: _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrSafetyInPage);



/***/ }),

/***/ 78487:
/*!*********************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zYWZldHktaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 42628:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"date\" label=\"회의일\" [value]=\"meet_date\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"name\" label=\"회의유형\" [value]=\"item.safety_meeting_type_full\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"회의시간\" [value]=\"meet_time\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석진행자\" [value]=\"item.user_name\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_work-minutes_qr-safety-in_qr-safety-in_module_ts.js.map