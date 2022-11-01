(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_member-management_member-management_partner-info-list_partner-info-list_module_ts"],{

/***/ 84195:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-info-list/partner-info-list-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerInfoListPageRoutingModule": () => (/* binding */ PartnerInfoListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _partner_info_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-info-list.page */ 81965);




const routes = [
    {
        path: '',
        component: _partner_info_list_page__WEBPACK_IMPORTED_MODULE_0__.PartnerInfoListPage
    }
];
let PartnerInfoListPageRoutingModule = class PartnerInfoListPageRoutingModule {
};
PartnerInfoListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerInfoListPageRoutingModule);



/***/ }),

/***/ 22163:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-info-list/partner-info-list.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerInfoListPageModule": () => (/* binding */ PartnerInfoListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _partner_info_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-info-list-routing.module */ 84195);
/* harmony import */ var _partner_info_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-info-list.page */ 81965);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _partner_into_edit_partner_into_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partner-into-edit/partner-into-edit.module */ 33203);









let PartnerInfoListPageModule = class PartnerInfoListPageModule {
};
PartnerInfoListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _partner_info_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerInfoListPageRoutingModule,
            _partner_into_edit_partner_into_edit_module__WEBPACK_IMPORTED_MODULE_3__.PartnerIntoEditPageModule
        ],
        declarations: [_partner_info_list_page__WEBPACK_IMPORTED_MODULE_1__.PartnerInfoListPage]
    })
], PartnerInfoListPageModule);



/***/ }),

/***/ 81965:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-info-list/partner-info-list.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerInfoListPage": () => (/* binding */ PartnerInfoListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_partner_info_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./partner-info-list.page.html */ 29626);
/* harmony import */ var _partner_info_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-info-list.page.scss */ 38439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _member_approval_wait_security_password_security_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../member-approval-wait/security-password/security-password.component */ 52346);
/* harmony import */ var _partner_into_edit_partner_into_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../partner-into-edit/partner-into-edit.page */ 68034);













class PartnerInfo {
}
let PartnerInfoListPage = class PartnerInfoListPage {
    constructor(user, modal, connect, date, toast, nav, file) {
        this.user = user;
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.toast = toast;
        this.nav = nav;
        this.file = file;
        this.form = {
            project_id: 0,
            company_id: 0,
            ctgo_construction_ids: [],
            start_date: this.date.today({ year: -3 }),
            end_date: this.date.today(),
            search_text: '',
            work_state: '출역중',
            limit_no: 0,
            construction_state: '출역중',
            session_company_id: this.user.userData.belong_data.company_id,
            user_manage_session: '',
        };
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new PartnerInfo()).validator;
        this.selectedList = [];
        this.permission = {
            companyChange: false, // 회사 변경 권한
        };
    }
    ngOnInit() {
        if (!this.getPermission()) {
            this.toast.present({ color: 'warning', message: '잘못된 접근입니다.' });
            this.nav.navigateRoot('/login');
        }
        else {
            this.get();
        }
    }
    getPermission() {
        const { user_role, user_type, belong_data } = this.user.userData;
        if (user_type === 'LH') {
            this.form.project_id = 0;
            this.form.company_id = 0;
            this.permission.companyChange = true;
            return true;
        }
        else if (user_role === 'MASTER_HEAD') {
            this.form.project_id = belong_data.project_id;
            this.form.company_id = 0;
            this.permission.companyChange = false;
            return true;
        }
        else if (user_role === 'PARTNER_HEAD') {
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.company_id;
            this.permission.companyChange = false;
            return true;
        }
        else {
            return false;
        }
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _partner_into_edit_partner_into_edit_page__WEBPACK_IMPORTED_MODULE_9__.PartnerIntoEditPage,
                componentProps: {
                    item
                }
            });
            modal.present();
        });
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const authToken = this.user.memberAuthToken;
            this.form.user_manage_session = authToken;
            const res = yield this.connect.run('/usermanage/info/company/list', this.form);
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
                // 데이터 없음
            }
            else if (res.rsCode === 3008 || res.rsCode === 3009) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                // 그외. 인터넷안됨, 서버연결안됨 등등
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _member_approval_wait_security_password_security_password_component__WEBPACK_IMPORTED_MODULE_8__.SecurityPasswordComponent,
                backdropDismiss: false,
                cssClass: "security-password-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data)
                this.get();
        });
    }
};
PartnerInfoListPage.ctorParameters = () => [
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService }
];
PartnerInfoListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-partner-info-list',
        template: _raw_loader_partner_info_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_partner_info_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartnerInfoListPage);



/***/ }),

/***/ 38439:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-info-list/partner-info-list.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLWluZm8tbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 29626:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-management/partner-info-list/partner-info-list.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n    <!-- <ion-toolbar color=\"white\">\n      <ion-title>\n        <h4>원청사/협력사 관리자 정보</h4>\n      </ion-title>\n    </ion-toolbar> -->\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [all]=\"true\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-company  name=\"company_id\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\" [all]=\"true\"></app-select-company>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-construction name=\"ctgo_construction_id\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.ctgo_construction_ids\" [all]=\"true\" [multiple]=\"true\"></app-select-construction>\n              </td>\n            </tr>\n              <tr>\n              <td>\n                <app-input-group label=\"가입일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <!-- <tr>\n              <td>\n                <app-radio-input label=\"재직 상태\">\n                  <app-radio value=\"전체\">전체</app-radio>\n                  <app-radio value=\"재직 중\">재직 중</app-radio>\n                  <app-radio value=\"퇴사\">퇴사</app-radio>\n                </app-radio-input>\n              </td>\n            </tr> -->\n            <tr>\n              <td>\n                <app-select label=\"출역 상태\" [(ngModel)]=\"form.construction_state\">\n                  <app-select-option value=\"출역중\">출역 중</app-select-option>\n                  <app-select-option value=\"출역종료\">출역 종료</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <h5>관리자 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>공종</th>\n              <th>업체명</th>\n              <th>성명</th>\n              <th>생년월일</th>\n              <th>안전직무</th>\n              <th>직급</th>\n              <th>출역상태</th>\n              <th>가입일</th>\n              <!-- <th>재직상태</th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.ctgo_construction_name }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.user_name }}</td>\n              <td>{{ item.user_birth }}</td>\n              <td>{{ item.ctgo_safe_job_name }}</td>\n              <td>{{ item.ctgo_job_position_name }}</td>\n              <td>{{ item.construction_state }}</td>\n              <td>{{ item.create_date }}</td>\n              <!-- <td>재직중</td> -->\n            </tr>\n          </tbody>\n        </app-table>\n        <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_member-management_member-management_partner-info-list_partner-info-list_module_ts.js.map