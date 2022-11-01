(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_task-management_tbm_tbm-unit_tbm-unit_module_ts"],{

/***/ 48831:
/*!******************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPageRoutingModule": () => (/* binding */ TbmUnitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_unit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-unit.page */ 33371);




const routes = [
    {
        path: '',
        component: _tbm_unit_page__WEBPACK_IMPORTED_MODULE_0__.TbmUnitPage
    }
];
let TbmUnitPageRoutingModule = class TbmUnitPageRoutingModule {
};
TbmUnitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmUnitPageRoutingModule);



/***/ }),

/***/ 56227:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPageModule": () => (/* binding */ TbmUnitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_unit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-unit-routing.module */ 48831);
/* harmony import */ var _tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-unit.page */ 33371);








let TbmUnitPageModule = class TbmUnitPageModule {
};
TbmUnitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_unit_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmUnitPageRoutingModule
        ],
        declarations: [_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__.TbmUnitPage]
    })
], TbmUnitPageModule);



/***/ }),

/***/ 33371:
/*!********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPage": () => (/* binding */ TbmUnitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_unit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-unit.page.html */ 78229);
/* harmony import */ var _tbm_unit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-unit.page.scss */ 40918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




// import { ModalController } from '@ionic/angular';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let TbmUnitPage = class TbmUnitPage {
    constructor() {
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() {
    }
};
TbmUnitPage.ctorParameters = () => [];
TbmUnitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tbm-unit',
        template: _raw_loader_tbm_unit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_unit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmUnitPage);



/***/ }),

/***/ 40918:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\napp-table .cencal_btn {\n  background-color: #ffdfdf;\n  color: #e65656;\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS11bml0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7QUFDYjs7QUFGQTtFQUlRLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUV2Qjs7QUFFQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUUzQiIsImZpbGUiOiJ0Ym0tdW5pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGFibGUge1xuICAgIG1hcmdpbjogMDtcblxuICAgIC5jZW5jYWxfYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZkZjtcbiAgICAgICAgY29sb3I6ICNlNjU2NTY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2NlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ 78229:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>단위작업선택</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      \n\n      <app-row>\n        <app-col>\n          <h4>추가리스트</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-table>\n            <app-table>\n              <thead>\n                <tr>\n                  <th width=\"40px\">No</th>\n                  <th>공사명</th>\n                  <th>단위작업</th>\n                  <th>위험요인</th>\n                  <th>감소대책</th>\n                  <th>삭제</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>매립 공사</td>\n                  <td>장비 반입/작업 준비</td>\n                  <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n                  <td>차량 운행 경로에 유도원 2명이상 배치</td>\n                  <td><button class=\"cencal_btn\">X</button></td>\n                </tr>\n                <!-- <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n                  <td>매립 공사</td>\n                  <td>장비반입/작업준비</td>\n                  <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n                  <td>차량 운행경로에 유도원 2명 이상 배치</td>\n                </tr> -->\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col class=\"flex_center\">\n          <app-button>적용</app-button>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_task-management_tbm_tbm-unit_tbm-unit_module_ts.js.map