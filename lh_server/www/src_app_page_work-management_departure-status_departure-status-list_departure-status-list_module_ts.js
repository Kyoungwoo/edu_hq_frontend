(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-management_departure-status_departure-status-list_departure-status-list_module_ts"],{

/***/ 76088:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/departure-status-list/departure-status-list-routing.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartureStatusListPageRoutingModule": () => (/* binding */ DepartureStatusListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _departure_status_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departure-status-list.page */ 18287);




const routes = [
    {
        path: '',
        component: _departure_status_list_page__WEBPACK_IMPORTED_MODULE_0__.DepartureStatusListPage
    }
];
let DepartureStatusListPageRoutingModule = class DepartureStatusListPageRoutingModule {
};
DepartureStatusListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepartureStatusListPageRoutingModule);



/***/ }),

/***/ 24051:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/departure-status-list/departure-status-list.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartureStatusListPageModule": () => (/* binding */ DepartureStatusListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _departure_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departure-status-list-routing.module */ 76088);
/* harmony import */ var _departure_status_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departure-status-list.page */ 18287);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _today_departure_status_list_today_departure_status_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../today-departure-status-list/today-departure-status-list.module */ 34124);









let DepartureStatusListPageModule = class DepartureStatusListPageModule {
};
DepartureStatusListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _departure_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartureStatusListPageRoutingModule,
            _today_departure_status_list_today_departure_status_list_module__WEBPACK_IMPORTED_MODULE_3__.TodayDepartureStatusListPageModule
        ],
        declarations: [_departure_status_list_page__WEBPACK_IMPORTED_MODULE_1__.DepartureStatusListPage]
    })
], DepartureStatusListPageModule);



/***/ }),

/***/ 18287:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/departure-status-list/departure-status-list.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartureStatusListPage": () => (/* binding */ DepartureStatusListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_departure_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./departure-status-list.page.html */ 78612);
/* harmony import */ var _departure_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departure-status-list.page.scss */ 85393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var _today_departure_status_list_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../today-departure-status-list/today-departure-status-list.page */ 20811);











let DepartureStatusListPage = class DepartureStatusListPage {
    constructor(modal, connect, user, toast, date, promise) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.date = date;
        this.promise = promise;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : this.user.userData.belong_data.company_id,
            ctgo_construction_ids: [],
            start_date: this.date.today({ month: -1 }),
            end_date: this.date.today(),
            limit_no: 0 // limit_no
        };
        this.permission = {
            contractor: false
        };
    }
    ngOnInit() {
        this.getPromission();
        // this.getForm();
        setTimeout(() => {
            this.getList();
        }, 300);
    }
    getPromission() {
        const { user_type } = this.user.userData;
        if (user_type === 'LH') {
            this.permission.contractor = true;
        }
        else {
            this.permission.contractor = false;
        }
    }
    // getForm() {
    //   const { user_type, belong_data } = this.user.userData;
    //   if(user_type === 'LH') {
    //     this.form.master_company_id = 0;
    //   } else {
    //     this.form.master_company_id = belong_data.company_id;
    //   }
    // }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.promise.wait(() => this.form.master_company_id);
            this.form.limit_no = limit_no;
            this.res = yield this.connect.run('/work_state/list', this.form, { loading: true });
            if (this.res.rsCode !== 0) {
                this.toast.present({ color: 'warning', message: this.res.rsMsg });
            }
        });
    }
    detail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("detail - ", this.form);
            const modal = yield this.modal.create({
                component: _today_departure_status_list_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_7__.TodayDepartureStatusListPage,
                cssClass: 'today-departure-status-list-modal',
                componentProps: {
                    listForm: this.form,
                    item
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
};
DepartureStatusListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService }
];
DepartureStatusListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-departure-status-list',
        template: _raw_loader_departure_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_departure_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DepartureStatusListPage);



/***/ }),

/***/ 85393:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/departure-status-list/departure-status-list.page.scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnR1cmUtc3RhdHVzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 78612:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-management/departure-status/departure-status-list/departure-status-list.page.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content [scrollX]=\"true\" style=\"--padding-top:15px\">\n  <app-container>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [readonly]=\"!permission.contractor\"></app-select-contractor> \n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-construction [master_company_id]=\"form.master_company_id\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.ctgo_construction_ids\" [all]=\"true\" [multiple]=\"true\"></app-select-construction>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"기간\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>        \n        <ion-toolbar color=\"white\">\n          <h5>출역 현황 (총 {{ res?.rsObj?.row_count || 0}}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th rowspan=\"2\" style=\"width: 200px\">출역일</th>\n              <th colspan=\"2\">원청사</th>\n              <th colspan=\"2\">협력사</th>\n              <th rowspan=\"2\">합계</th>\n            </tr>\n            <tr>\n              <th>관리자</th>\n              <th>작업자</th>\n              <th>관리자</th>\n              <th>작업자</th>\n            </tr>\n          </thead>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap; let i = index\" (click)=\"detail(item)\">\n              <td>{{ item.work_date }}</td>\n              <td>{{ item.master_admin }}</td>\n              <td>{{ item.master_worker }}</td>\n              <td>{{ item.company_admin }}</td>\n              <td>{{ item.company_worker }}</td>\n              <td>{{ item.total_cnt }}</td>\n            </tr>\n          <tbody>\n          </tbody>\n        </app-table>\n        <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-management_departure-status_departure-status-list_departure-status-list_module_ts.js.map