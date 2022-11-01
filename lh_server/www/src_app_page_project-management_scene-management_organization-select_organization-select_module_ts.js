(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_organization-select_organization-select_module_ts"],{

/***/ 74161:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPageRoutingModule": () => (/* binding */ OrganizationSelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _organization_select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-select.page */ 52173);




const routes = [
    {
        path: '',
        component: _organization_select_page__WEBPACK_IMPORTED_MODULE_0__.OrganizationSelectPage
    }
];
let OrganizationSelectPageRoutingModule = class OrganizationSelectPageRoutingModule {
};
OrganizationSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrganizationSelectPageRoutingModule);



/***/ }),

/***/ 67032:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPageModule": () => (/* binding */ OrganizationSelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _organization_select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-select-routing.module */ 74161);
/* harmony import */ var _organization_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-select.page */ 52173);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let OrganizationSelectPageModule = class OrganizationSelectPageModule {
};
OrganizationSelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _organization_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganizationSelectPageRoutingModule
        ],
        declarations: [_organization_select_page__WEBPACK_IMPORTED_MODULE_1__.OrganizationSelectPage]
    })
], OrganizationSelectPageModule);



/***/ }),

/***/ 52173:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPage": () => (/* binding */ OrganizationSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_organization_select_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./organization-select.page.html */ 16835);
/* harmony import */ var _organization_select_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-select.page.scss */ 36073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);







class RegionalItem {
}
class BusinessItem {
}
let OrganizationSelectPage = class OrganizationSelectPage {
    constructor(connect, _modal) {
        this.connect = connect;
        this._modal = _modal;
        this.retrunData = {
            regName: '',
            regId: 0,
            busName: '',
            busId: 0
        };
    }
    ngOnInit() {
        this.regional();
    }
    regional() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.regionalItem = yield this.connect.run('/category/organization/regional/get');
            if (this.regionalItem.rsCode === 0) { }
        });
    }
    business(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.level1selectedItem = item;
            this.businessItem = yield this.connect.run('/category/organization/business/get', { hq_regional_id: item.hq_regional_id });
            if (this.businessItem.rsCode === 0) { }
        });
    }
    submit() {
        this._modal.dismiss({
            level1selectedItem: this.level1selectedItem,
            level2selectedItem: this.level2selectedItem
        });
    }
};
OrganizationSelectPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
OrganizationSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-organization-select',
        template: _raw_loader_organization_select_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.listAnimation],
        styles: [_organization_select_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrganizationSelectPage);



/***/ }),

/***/ 36073:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table td {\n  text-align: center;\n  font-size: var(--font-size-h6);\n}\n\n.col-header-class {\n  background: #dedede;\n}\n\n.flex-box {\n  display: flex;\n}\n\n.flex-box .flex-revers {\n  flex-direction: column;\n  flex: 0 0 50%;\n}\n\n.flex-box .flex-revers .flex-header {\n  background: var(--ion-color-medium-translucent);\n  height: 40px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-box .flex-revers .flex-header app-img {\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n}\n\n.flex-box .flex-revers .flex-list {\n  height: 550px;\n  overflow: auto;\n  background: white;\n  border-right: 1px solid var(--ion-color-step-100);\n}\n\n.flex-box .flex-revers .flex-list:nth-child(4) {\n  border-right: none;\n}\n\n.flex-box .flex-revers .flex-item {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.flex-box .flex-revers .flex-item:hover {\n  background: var(--ion-color-step-100);\n}\n\n.selected {\n  background-color: var(--ion-color-primary-translucent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbi1zZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUFoQzs7QUFJQTtFQUNDLG1CQUFtQjtBQURwQjs7QUFJQTtFQUNDLGFBQWE7QUFEZDs7QUFBQTtFQUtFLHNCQUFzQjtFQUN0QixhQUFhO0FBRGY7O0FBTEE7RUFTRywrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFBMUI7O0FBZkE7RUFpQkksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBRWQ7O0FBckJBO0VBd0JHLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlEQUFpRDtBQUNwRDs7QUE1QkE7RUE4Qkksa0JBQWtCO0FBRXRCOztBQWhDQTtFQW1DRyxZQUFZO0VBQ1osZUFBZTtBQUNsQjs7QUFyQ0E7RUF1Q0cscUNBQXFDO0FBRXhDOztBQUVBO0VBQ0Msc0RBQXNEO0FBQ3ZEIiwiZmlsZSI6Im9yZ2FuaXphdGlvbi1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRhYmxlIHtcblx0dGQge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNik7XG5cdH1cbn1cblxuLmNvbC1oZWFkZXItY2xhc3N7XG5cdGJhY2tncm91bmQ6ICNkZWRlZGU7XG59XG5cbi5mbGV4LWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdFxuXG5cdC5mbGV4LXJldmVycyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRmbGV4OiAwIDAgNTAlO1xuXG5cdFx0LmZsZXgtaGVhZGVye1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10cmFuc2x1Y2VudCk7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YXBwLWltZyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6IC0xMHB4O1xuXHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mbGV4LWxpc3Qge1xuXHRcdFx0aGVpZ2h0OiA1NTBweDtcblx0XHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuXG5cdFx0XHQmOm50aC1jaGlsZCg0KSB7XG5cdFx0XHRcdGJvcmRlci1yaWdodDogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZmxleC1pdGVtIHtcblx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR9XG5cdFx0LmZsZXgtaXRlbTpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuXHRcdH1cblx0fVxufVxuLnNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xufSJdfQ== */");

/***/ }),

/***/ 16835:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/organization-select/organization-select.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>조직기구 설정</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <div>\n\n        <app-input placeholder=\"검색어를 입력해 주세요.\">\n          <app-img name=\"search\"></app-img>\n        </app-input>\n\n  <div class=\"flex-box\">\n\n    <div class=\"flex-revers\">\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>Level1</div>\n        <app-img name=\"next\"></app-img>\n      </div>\n      <div class=\"flex-list\" >\n        <!-- item -->\n        <div *ngFor=\"let item of regionalItem?.rsMap\" class=\"flex-item\" [class.selected]=\"level1selectedItem === item\" (click)=\"business(item)\">\n          {{item.hq_regional_name }}\n        </div>\n        </div>\n    </div>\n  \n    <div class=\"flex-revers\">\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>Level2</div>\n      </div>\n      <div class=\"flex-list\">\n        <div *ngFor=\"let item of businessItem?.rsMap\"  class=\"flex-item\" [class.selected]=\"level2selectedItem === item\"  (click)=\"level2selectedItem = item\">\n          <!-- item -->\n          {{ item.hq_business_name}}\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"submit()\">적용</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_organization-select_organization-select_module_ts.js.map