(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_contractor-management_contractor-list_contractor-list_module_ts"],{

/***/ 55691:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/project-management/contractor-management/contractor-list/contractor-list-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractorListPageRoutingModule": () => (/* binding */ ContractorListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contractor_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contractor-list.page */ 80650);




const routes = [
    {
        path: '',
        component: _contractor_list_page__WEBPACK_IMPORTED_MODULE_0__.ContractorListPage
    }
];
let ContractorListPageRoutingModule = class ContractorListPageRoutingModule {
};
ContractorListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContractorListPageRoutingModule);



/***/ }),

/***/ 6954:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/project-management/contractor-management/contractor-list/contractor-list.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractorListPageModule": () => (/* binding */ ContractorListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contractor_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contractor-list-routing.module */ 55691);
/* harmony import */ var _contractor_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contractor-list.page */ 80650);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _contractor_edit_contractor_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contractor-edit/contractor-edit.module */ 66777);










let ContractorListPageModule = class ContractorListPageModule {
};
ContractorListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _contractor_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContractorListPageRoutingModule,
            _contractor_edit_contractor_edit_module__WEBPACK_IMPORTED_MODULE_4__.ContractorEditPageModule
        ],
        declarations: [_contractor_list_page__WEBPACK_IMPORTED_MODULE_1__.ContractorListPage]
    })
], ContractorListPageModule);



/***/ }),

/***/ 80650:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/project-management/contractor-management/contractor-list/contractor-list.page.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractorListPage": () => (/* binding */ ContractorListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contractor_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contractor-list.page.html */ 67332);
/* harmony import */ var _contractor_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contractor-list.page.scss */ 8194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _contractor_edit_contractor_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contractor-edit/contractor-edit.page */ 16047);









let ContractorListPage = class ContractorListPage {
    constructor(modal, connect, user, toast) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: (this.user.userData.user_type === 'LH' || this.user.userData.user_type === 'SUPER') ? 0 : this.user.userData.belong_data.project_id,
            company_contract_type: '원청사',
            // hq_regional_id: this.user.userData.user_type === 'LH' ? 0 : (this.user.userData.belong_data.hq_regional_id | 0),
            // hq_business_id: this.user.userData.user_type === 'LH' ? 0 : (this.user.userData.belong_data.hq_business_id | 0),
            limit_no: 0,
            master_company_ids: [],
            search_text: '',
            only_state: (this.user.userData.user_type === 'LH' || this.user.userData.user_type === 'SUPER') ? true : false
        };
        this.master_compnay_id = this.user.userData.belong_data.master_company_id;
        this.businessState = true;
    }
    ngOnInit() {
        console.log("this.master_compnay_id", this.master_compnay_id);
        this.ctgoBusiness = {
            errorStatus: null,
            rsCode: null,
            rsObj: null,
            rsMsg: '',
            rsMap: [],
            rqMethod: ''
        };
        this.getList();
        // this.getCtgoBusiness();
        // this.getCtgoRegional();
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.form.master_company_ids = [];
            if (this.master_compnay_id)
                this.form.master_company_ids.push(this.master_compnay_id);
            const res = yield this.connect.run('/project/company/masters/list', this.form);
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
                component: _contractor_edit_contractor_edit_page__WEBPACK_IMPORTED_MODULE_5__.ContractorEditPage,
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
ContractorListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
ContractorListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contractor-list',
        template: _raw_loader_contractor_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contractor_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContractorListPage);



/***/ }),

/***/ 8194:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/project-management/contractor-management/contractor-list/contractor-list.page.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmFjdG9yLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 67332:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/contractor-management/contractor-list/contractor-list.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button></app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <!-- <tr>\n            <td>\n              <app-select label=\"지역본부\" [(ngModel)]=\"form.hq_regional_id\" (change)=\"getCtgoBusiness($event)\">\n                <app-select-option [value]=\"0\">전체</app-select-option>\n                <app-select-option *ngFor=\"let opt of ctgoRegional?.rsMap\" [value]=\"opt.hq_regional_id\">{{ opt.hq_regional_name }}</app-select-option>\n              </app-select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select label=\"사업본부\" [disabled]=\"businessState\" [(ngModel)]=\"form.hq_business_id\">\n                <app-select-option [value]=\"0\">전체</app-select-option>\n                <app-select-option *ngFor=\"let opt of ctgoBusiness?.rsMap\" [value]=\"opt.hq_business_id\">{{ opt.hq_business_name }}</app-select-option>\n              </app-select>\n            </td>\n          </tr> -->\n          <!-- <tr>\n            <td>\n              <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n            </td>\n          </tr> -->\n          <tr>\n            <td>\n              <app-select-contractor [only_state]=\"form.only_state\" [project_id]=\"form.project_id\" [multiple]=\"false\" [(ngModel)]=\"master_compnay_id\" [allState]=\"true\"></app-select-contractor>\n              <!-- <app-select-contractor [allState]=\"editable.add\" [project_id]=\"form.project_id || 0\" [(ngModel)]=\"form.company_id\" [disabled]=\"editable.company_id\"></app-select-contractor> -->\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n        <ion-buttons slot=\"start\">\n          <app-col>\n            <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n          </app-col>\n        </ion-buttons>\n      </ion-toolbar>   \n      <ion-toolbar color=\"white\">\n        <h5>원청사 목록 (총 {{res?.rsObj?.row_count || 0}}건)</h5>\n      </ion-toolbar>      \n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>원청사</th>\n              <th>사업자등록번호</th>\n              <th>대표자</th>\n              <th>최근 업데이트</th>\n              <th>작성자</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.business_register_no }}</td>\n              <td>{{ item.company_ceo }}</td>\n              <td>{{ item.update_date }}</td>\n              <td>{{ item.create_user_name }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n    </app-col>\n  </app-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_contractor-management_contractor-list_contractor-list_module_ts.js.map