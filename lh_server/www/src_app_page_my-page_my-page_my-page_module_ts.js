(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page_my-page_module_ts"],{

/***/ 86859:
/*!****************************************************************!*\
  !*** ./src/app/page/my-page/my-page/my-page-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPagePageRoutingModule": () => (/* binding */ MyPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page.page */ 44151);




const routes = [
    {
        path: '',
        component: _my_page_page__WEBPACK_IMPORTED_MODULE_0__.MyPagePage
    }
];
let MyPagePageRoutingModule = class MyPagePageRoutingModule {
};
MyPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPagePageRoutingModule);



/***/ }),

/***/ 69416:
/*!********************************************************!*\
  !*** ./src/app/page/my-page/my-page/my-page.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPagePageModule": () => (/* binding */ MyPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-routing.module */ 86859);
/* harmony import */ var _my_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page.page */ 44151);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-password/change-password.module */ 61466);
/* harmony import */ var _change_phone_change_phone_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-phone/change-phone.module */ 31065);










let MyPagePageModule = class MyPagePageModule {
};
MyPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPagePageRoutingModule,
            _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordPageModule,
            _change_phone_change_phone_module__WEBPACK_IMPORTED_MODULE_4__.ChangePhonePageModule
        ],
        declarations: [_my_page_page__WEBPACK_IMPORTED_MODULE_1__.MyPagePage]
    })
], MyPagePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page_my-page_module_ts.js.map