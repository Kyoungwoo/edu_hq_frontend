(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_confirm_box_approval-edit_approval-edit_module_ts"],{

/***/ 97273:
/*!********************************************************************************!*\
  !*** ./src/app/page/confirm/box/approval-edit/approval-edit-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalEditPageRoutingModule": () => (/* binding */ ApprovalEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _approval_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-edit.page */ 72180);




const routes = [
    {
        path: '',
        component: _approval_edit_page__WEBPACK_IMPORTED_MODULE_0__.ApprovalEditPage
    }
];
let ApprovalEditPageRoutingModule = class ApprovalEditPageRoutingModule {
};
ApprovalEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApprovalEditPageRoutingModule);



/***/ }),

/***/ 39499:
/*!************************************************************************!*\
  !*** ./src/app/page/confirm/box/approval-edit/approval-edit.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalEditPageModule": () => (/* binding */ ApprovalEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-edit-routing.module */ 97273);
/* harmony import */ var _approval_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-edit.page */ 72180);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-sortablejs */ 3782);










let ApprovalEditPageModule = class ApprovalEditPageModule {
};
ApprovalEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovalEditPageRoutingModule,
            ngx_sortablejs__WEBPACK_IMPORTED_MODULE_9__.SortablejsModule
        ],
        declarations: [_approval_edit_page__WEBPACK_IMPORTED_MODULE_1__.ApprovalEditPage]
    })
], ApprovalEditPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_confirm_box_approval-edit_approval-edit_module_ts.js.map