(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_emergency-management_emergency-target_emergency-target_module_ts"],{

/***/ 55295:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPageRoutingModule": () => (/* binding */ EmergencyTargetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _emergency_target_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-target.page */ 60752);




const routes = [
    {
        path: '',
        component: _emergency_target_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyTargetPage
    }
];
let EmergencyTargetPageRoutingModule = class EmergencyTargetPageRoutingModule {
};
EmergencyTargetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyTargetPageRoutingModule);



/***/ }),

/***/ 92643:
/*!***************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPageModule": () => (/* binding */ EmergencyTargetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _emergency_target_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-target-routing.module */ 55295);
/* harmony import */ var _emergency_target_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergency-target.page */ 60752);








let EmergencyTargetPageModule = class EmergencyTargetPageModule {
};
EmergencyTargetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _emergency_target_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmergencyTargetPageRoutingModule,
        ],
        declarations: [_emergency_target_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyTargetPage]
    })
], EmergencyTargetPageModule);



/***/ }),

/***/ 60752:
/*!*************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPage": () => (/* binding */ EmergencyTargetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_emergency_target_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emergency-target.page.html */ 63199);
/* harmony import */ var _emergency_target_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-target.page.scss */ 74381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let EmergencyTargetPage = class EmergencyTargetPage {
    constructor(_modal) {
        this._modal = _modal;
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() {
    }
};
EmergencyTargetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
EmergencyTargetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-emergency-target',
        template: _raw_loader_emergency_target_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emergency_target_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmergencyTargetPage);



/***/ }),

/***/ 74381:
/*!***************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS10YXJnZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUUzQiIsImZpbGUiOiJlbWVyZ2VuY3ktdGFyZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 63199:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/emergency-target/emergency-target.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>알림대상 설정</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col>\n          <app-select-people></app-select-people>\n        </app-col>\n        <!-- <app-col>\n          <app-input placeholder=\"검색어를 입력하세요.\"></app-input>\n        </app-col>\n        <app-col size=\"auto\" size=\"auto\">\n          <app-button>검색</app-button>\n        </app-col> -->\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-table>\n            <thead>\n              <tr>\n                <th>업체명</th>\n                <th>성명</th>\n                <th>직위</th>\n                <th>안전직무</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" class=\"button\">\n                <td>(주)지에스아이엘</td>\n                <td>이상범</td>\n                <td>프로</td>\n                <td>안전감독자</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-card>\n            <ion-item-group slot=\"end\">\n              <ion-chip outline color=\"primary\">전다영</ion-chip>\n              <ion-chip outline color=\"primary\">김범수</ion-chip>\n            </ion-item-group>\n          </app-card>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <div class=\"flex_center\">\n            <app-button>적용</app-button>\n          </div>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_emergency-management_emergency-target_emergency-target_module_ts.js.map