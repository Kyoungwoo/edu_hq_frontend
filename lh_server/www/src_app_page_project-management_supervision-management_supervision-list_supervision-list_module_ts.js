(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_supervision-management_supervision-list_supervision-list_module_ts"],{

/***/ 97350:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-list/supervision-list-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisionListPageRoutingModule": () => (/* binding */ SupervisionListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _supervision_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervision-list.page */ 90165);




const routes = [
    {
        path: '',
        component: _supervision_list_page__WEBPACK_IMPORTED_MODULE_0__.SupervisionListPage
    }
];
let SupervisionListPageRoutingModule = class SupervisionListPageRoutingModule {
};
SupervisionListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupervisionListPageRoutingModule);



/***/ }),

/***/ 40034:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-list/supervision-list.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisionListPageModule": () => (/* binding */ SupervisionListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _supervision_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervision-list-routing.module */ 97350);
/* harmony import */ var _supervision_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervision-list.page */ 90165);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _supervision_edit_supervision_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supervision-edit/supervision-edit.module */ 58992);










let SupervisionListPageModule = class SupervisionListPageModule {
};
SupervisionListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _supervision_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupervisionListPageRoutingModule,
            _supervision_edit_supervision_edit_module__WEBPACK_IMPORTED_MODULE_4__.SupervisionEditPageModule
        ],
        declarations: [_supervision_list_page__WEBPACK_IMPORTED_MODULE_1__.SupervisionListPage]
    })
], SupervisionListPageModule);



/***/ }),

/***/ 90165:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-list/supervision-list.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisionListPage": () => (/* binding */ SupervisionListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_supervision_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./supervision-list.page.html */ 65193);
/* harmony import */ var _supervision_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervision-list.page.scss */ 97221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _supervision_edit_supervision_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../supervision-edit/supervision-edit.page */ 76540);









let SupervisionListPage = class SupervisionListPage {
    constructor(modal, connect, user, toast) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: (this.user.userData.user_type === 'LH' || this.user.userData.user_type === 'SUPER') ? 0 : this.user.userData.belong_data.project_id,
            company_contract_type: '감리사',
            // hq_regional_id: this.user.userData.user_type === 'LH' ? 0 : (this.user.userData.belong_data.hq_regional_id | 0),
            // hq_business_id: this.user.userData.user_type === 'LH' ? 0 : (this.user.userData.belong_data.hq_business_id | 0),
            limit_no: 0,
            master_company_ids: [],
            search_text: ''
        };
        this.master_company_id = this.user.userData.belong_data.master_company_id;
        this.businessState = true;
    }
    ngOnInit() {
        this.ctgoBusiness = {
            errorStatus: null,
            rsCode: null,
            rsObj: null,
            rsMsg: '',
            rsMap: [],
            rqMethod: ''
        };
        this.getList(0);
        // this.getCtgoBusiness();
        // this.getCtgoRegional();
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/project/company/masters/list', this.form, { loading: true });
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _supervision_edit_supervision_edit_page__WEBPACK_IMPORTED_MODULE_5__.SupervisionEditPage,
                componentProps: {
                    company_id: (item === null || item === void 0 ? void 0 : item.company_id) || 0,
                    project_id: item ? (item.project_id ? item.project_id : this.form.project_id) : this.form.project_id,
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data)
                this.getList();
        });
    }
};
SupervisionListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
SupervisionListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-supervision-list',
        template: _raw_loader_supervision_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_supervision_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupervisionListPage);



/***/ }),

/***/ 97221:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-list/supervision-list.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcnZpc2lvbi1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 65193:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/supervision-management/supervision-list/supervision-list.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <!-- <tr>\n              <td>\n                <app-select label=\"지역본부\" [(ngModel)]=\"form.hq_regional_id\" (change)=\"getCtgoBusiness($event)\">\n                  <app-select-option [value]=\"0\">전체</app-select-option>\n                  <app-select-option *ngFor=\"let opt of ctgoRegional?.rsMap\" [value]=\"opt.hq_regional_id\">{{ opt.hq_regional_name }}</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"사업본부\" [disabled]=\"!form.hq_regional_id\" [(ngModel)]=\"form.hq_business_id\">\n                  <app-select-option [value]=\"0\">전체</app-select-option>\n                  <app-select-option *ngFor=\"let opt of ctgoBusiness?.rsMap\" [value]=\"opt.hq_business_id\">{{ opt.hq_business_name }}</app-select-option>\n                </app-select>\n              </td>\n            </tr> -->\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n          <ion-buttons slot=\"start\">\n            <app-col>\n              <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n            </app-col>\n          </ion-buttons>\n        </ion-toolbar>   \n        <ion-toolbar color=\"white\">\n          <h5>감리사 목록 (총 {{res?.rsObj?.row_count || 0}}건)</h5>\n        </ion-toolbar>\n        <app-check-group>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 48px;\">No</th>\n                <!-- <th>지역본부</th>\n                <th>사업본부</th>\n                <th>현장명</th> -->\n                <th>감리사</th>\n                <th>사업자등록번호</th>\n                <th>대표자</th>\n                <th>최근 업데이트</th>\n                <th>작성자</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n                <td>{{ item.index }}</td>\n                <!-- <td>{{ item.hq_regional_name }}</td>\n                <td>{{ item.hq_business_name }}</td>\n                <td>{{ item.project_name }}</td> -->\n                <td>{{ item.company_name }}</td>\n                <td>{{ item.business_register_no }}</td>\n                <td>{{ item.company_ceo }}</td>\n                <td>{{ item.update_date }}</td>\n                <td>{{ item.create_user_name }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n        <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_supervision-management_supervision-list_supervision-list_module_ts.js.map