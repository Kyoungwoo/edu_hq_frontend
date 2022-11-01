(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_task-management_tbm_tbm-worker_tbm-worker_module_ts"],{

/***/ 55292:
/*!**********************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPageRoutingModule": () => (/* binding */ TbmWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-worker.page */ 90294);




const routes = [
    {
        path: '',
        component: _tbm_worker_page__WEBPACK_IMPORTED_MODULE_0__.TbmWorkerPage
    }
];
let TbmWorkerPageRoutingModule = class TbmWorkerPageRoutingModule {
};
TbmWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmWorkerPageRoutingModule);



/***/ }),

/***/ 4905:
/*!**************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPageModule": () => (/* binding */ TbmWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-worker-routing.module */ 55292);
/* harmony import */ var _tbm_worker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-worker.page */ 90294);








let TbmWorkerPageModule = class TbmWorkerPageModule {
};
TbmWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmWorkerPageRoutingModule
        ],
        declarations: [_tbm_worker_page__WEBPACK_IMPORTED_MODULE_2__.TbmWorkerPage]
    })
], TbmWorkerPageModule);



/***/ }),

/***/ 90294:
/*!************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPage": () => (/* binding */ TbmWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-worker.page.html */ 80623);
/* harmony import */ var _tbm_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-worker.page.scss */ 43480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




// import { ModalController } from '@ionic/angular';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let TbmWorkerPage = class TbmWorkerPage {
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
TbmWorkerPage.ctorParameters = () => [];
TbmWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tbm-worker',
        template: _raw_loader_tbm_worker_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmWorkerPage);



/***/ }),

/***/ 43480:
/*!**************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n  flex-grow: 1;\n}\n\n.img_box {\n  background-color: #eee;\n  width: 170px;\n  height: 170px;\n  border-radius: 4px;\n  margin-right: 20px;\n}\n\n.flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.photo_card {\n  display: flex;\n  justify-content: center;\n}\n\n.photo_card .img_box {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS13b3JrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULFlBQVc7QUFDZjs7QUFDQTtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBaUI7QUFFckI7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0FBRTdCOztBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFHM0I7O0FBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0FBRzNCOztBQUxBO0VBSVEsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUt4QiIsImZpbGUiOiJ0Ym0td29ya2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXgtZ3JvdzoxOyBcbn1cbi5pbWdfYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2NlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGhvdG9fY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuaW1nX2JveCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 80623:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>근로자 정보</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col style=\"display:flex;\">\n          <div class=\"img_box\">\n            근로자 이미지\n          </div>\n          <app-table>\n            <app-table>\n              <tbody>\n                <tr>\n                  <th>아이디</th>\n                  <td>gsil1</td>\n                  <th>성명</th>\n                  <td>김소장</td>\n                </tr>\n                <tr>\n                  <th>국적</th>\n                  <td>대한민국</td>\n                  <th>회사명</th>\n                  <td>(주)지에스아이엘</td>\n                </tr>\n                <tr>\n                  <th>직위</th>\n                  <td>작업자</td>\n                  <th>현장명</th>\n                  <td>세종시 단독주택공사</td>\n                </tr>\n                <tr>\n                  <th>공종</th>\n                  <td>건축</td>\n                  <th>계약유형</th>\n                  <td>일용직</td>\n                </tr>\n                <tr>\n                  <th>직종</th>\n                  <td>장비운전원(지게차)</td>\n                  <th>안전직무</th>\n                  <td>신호수/관리감독자</td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <div class=\"flex_center\">\n            <app-button>출석제외</app-button>\n            <app-button>확인</app-button>\n          </div>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>근로자 정보</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col>\n          <app-card class=\"photo_card\">\n            <div class=\"img_box\"></div>\n          </app-card>\n          \n          <app-table>\n            <app-table>\n              <tbody>\n                <tr>\n                  <th>아이디</th>\n                  <td>gsil1</td>\n                </tr>\n                <tr>\n                  <th>성명</th>\n                  <td>김소장</td>\n                </tr>\n                <tr>\n                  <th>국적</th>\n                  <td>대한민국</td>\n                </tr>\n                <tr>\n                  <th>회사명</th>\n                  <td>(주)지에스아이엘</td>\n                </tr>\n                <tr>\n                  <th>직위</th>\n                  <td>작업자</td>\n                </tr>\n                <tr>\n                  <th>현장명</th>\n                  <td>세종시 단독주택공사</td>\n                </tr>\n                <tr>\n                  <th>공종</th>\n                  <td>건축</td>\n                </tr>\n                <tr>\n                  <th>계약유형</th>\n                  <td>일용직</td>\n                </tr>\n                <tr>\n                  <th>직종</th>\n                  <td>장비운전원(지게차)</td>\n                </tr>\n                <tr>\n                  <th>안전직무</th>\n                  <td>신호수/관리감독자</td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  <app-button-footer>\n    <app-button>출석제외</app-button>\n    <app-button>확인</app-button>\n  </app-button-footer>\n</ng-container>\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_page_task-management_tbm_tbm-worker_tbm-worker_module_ts.js.map