(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_partner-management_partner-list_partner-list_module_ts"],{

/***/ 10847:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-list/partner-list-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerListPageRoutingModule": () => (/* binding */ PartnerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _partner_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-list.page */ 63977);




const routes = [
    {
        path: '',
        component: _partner_list_page__WEBPACK_IMPORTED_MODULE_0__.PartnerListPage
    }
];
let PartnerListPageRoutingModule = class PartnerListPageRoutingModule {
};
PartnerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerListPageRoutingModule);



/***/ }),

/***/ 90327:
/*!************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-list/partner-list.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerListPageModule": () => (/* binding */ PartnerListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _partner_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-list-routing.module */ 10847);
/* harmony import */ var _partner_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-list.page */ 63977);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _partner_edit_partner_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partner-edit/partner-edit.module */ 63008);









let PartnerListPageModule = class PartnerListPageModule {
};
PartnerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _partner_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerListPageRoutingModule,
            _partner_edit_partner_edit_module__WEBPACK_IMPORTED_MODULE_3__.PartnerEditPageModule
        ],
        declarations: [_partner_list_page__WEBPACK_IMPORTED_MODULE_1__.PartnerListPage]
    })
], PartnerListPageModule);



/***/ }),

/***/ 63977:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-list/partner-list.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerListPage": () => (/* binding */ PartnerListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_partner_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./partner-list.page.html */ 56836);
/* harmony import */ var _partner_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-list.page.scss */ 72096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _partner_edit_partner_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partner-edit/partner-edit.page */ 6947);









let PartnerListPage = class PartnerListPage {
    constructor(modal, connect, user, toast) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: (this.user.userData.user_type === 'LH' || this.user.userData.user_type === 'SUPER') ? 0 : this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
            search_text: '',
            limit_no: 0
        };
        this.permission = {
            edit: false
        };
    }
    ngOnInit() {
        this.getPromission();
        this.getForm();
        this.getList();
    }
    getPromission() {
        console.log("this.form.master_company_id", this.form.master_company_id);
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사')
            this.permission.edit = true;
    }
    getForm() {
        const { user_type, belong_data } = this.user.userData;
        if (user_type === 'LH') {
            this.form.master_company_id = 0;
        }
        else {
            this.form.master_company_id = belong_data.master_company_id;
        }
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/project/company/partner/list', this.form, { loading: true });
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
            console.log('item - ', item ? 1 : 2);
            const modal = yield this.modal.create({
                component: _partner_edit_partner_edit_page__WEBPACK_IMPORTED_MODULE_5__.PartnerEditPage,
                componentProps: {
                    company_id: (item === null || item === void 0 ? void 0 : item.company_id) || 0,
                    project_id: item ? (item.project_id ? item.project_id : this.form.project_id) : this.form.project_id,
                    master_company_id: item ? (item.master_company_id ? item.master_company_id : this.form.master_company_id) : this.form.master_company_id
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
PartnerListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
PartnerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-partner-list',
        template: _raw_loader_partner_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_partner_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartnerListPage);



/***/ }),

/***/ 72096:
/*!************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-list/partner-list.page.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 56836:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/partner-management/partner-list/partner-list.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content style=\"--padding-top:15px\">\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <!-- <tr>\n            <td>\n              <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n            </td>\n          </tr> -->\n          <tr>\n            <td>\n              <app-select-contractor [only_state]=\"true\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [allState]=\"true\"></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\" *ngIf=\"permission.edit\">\n        <ion-buttons slot=\"start\">\n          <app-col>\n            <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n          </app-col>\n        </ion-buttons>\n      </ion-toolbar>        \n      <ion-toolbar color=\"white\">\n        <h5>협력사 목록 (총 {{ res?.rsObj?.row_count || 0}}건)</h5>\n      </ion-toolbar>\n      <app-table>\n        <thead>\n          <tr>\n            <th style=\"width: 48px;\">No</th>\n            <!-- <th>현장명</th> -->\n            <th>원청사명</th>\n            <th>협력사명</th>\n            <th>사업자등록번호</th>\n            <th>대표자</th>\n            <!-- <th>공종</th> -->\n            <!-- <th>전화번호</th> -->\n            <th>최근 업데이트</th>\n            <th>작성자</th>\n          </tr>\n        </thead>\n          <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n            <td>{{ item.index }}</td>\n            <!-- <td>{{ item.project_name }}</td> -->\n            <td>{{ item.master_company_name }}</td>\n            <td>{{ item.company_name }}</td>\n            <td>{{ item.business_register_no }}</td>\n            <td>{{ item.company_ceo}}</td>\n            <!-- <td>{{ item.ctgo_construction_name }}</td>\n            <td>{{ item.company_phone }}</td> -->\n            <td>{{ item.update_date }}</td>\n            <td>{{ item.create_user_name}}</td>\n          </tr>\n        <tbody>\n        </tbody>\n      </app-table>\n      <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n    </app-col>\n  </app-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_partner-management_partner-list_partner-list_module_ts.js.map