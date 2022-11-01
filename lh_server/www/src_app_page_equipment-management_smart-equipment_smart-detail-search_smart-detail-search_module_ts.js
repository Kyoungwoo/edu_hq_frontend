(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_equipment-management_smart-equipment_smart-detail-search_smart-detail-search_module_ts"],{

/***/ 98975:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search-routing.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDetailSearchPageRoutingModule": () => (/* binding */ SmartDetailSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _smart_detail_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-detail-search.page */ 33726);




const routes = [
    {
        path: '',
        component: _smart_detail_search_page__WEBPACK_IMPORTED_MODULE_0__.SmartDetailSearchPage
    }
];
let SmartDetailSearchPageRoutingModule = class SmartDetailSearchPageRoutingModule {
};
SmartDetailSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SmartDetailSearchPageRoutingModule);



/***/ }),

/***/ 33088:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDetailSearchPageModule": () => (/* binding */ SmartDetailSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _smart_detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-detail-search-routing.module */ 98975);
/* harmony import */ var _smart_detail_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-detail-search.page */ 33726);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let SmartDetailSearchPageModule = class SmartDetailSearchPageModule {
};
SmartDetailSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _smart_detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmartDetailSearchPageRoutingModule
        ],
        declarations: [_smart_detail_search_page__WEBPACK_IMPORTED_MODULE_1__.SmartDetailSearchPage]
    })
], SmartDetailSearchPageModule);



/***/ }),

/***/ 33726:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDetailSearchPage": () => (/* binding */ SmartDetailSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_smart_detail_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./smart-detail-search.page.html */ 54998);
/* harmony import */ var _smart_detail_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-detail-search.page.scss */ 26193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SmartDetailSearchPage = class SmartDetailSearchPage {
    constructor() { }
    ngOnInit() {
    }
};
SmartDetailSearchPage.ctorParameters = () => [];
SmartDetailSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-smart-detail-search',
        template: _raw_loader_smart_detail_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_smart_detail_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SmartDetailSearchPage);



/***/ }),

/***/ 26193:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.page.scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbWFydC1kZXRhaWwtc2VhcmNoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 54998:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.page.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>smart-detail-search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_equipment-management_smart-equipment_smart-detail-search_smart-detail-search_module_ts.js.map