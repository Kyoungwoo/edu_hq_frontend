(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_member-standard-set_member-standard-set_module_ts"],{

/***/ 67269:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/lh-organization-list/lh-organization-list.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhOrganizationListComponent": () => (/* binding */ LhOrganizationListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lh_organization_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lh-organization-list.component.html */ 56425);
/* harmony import */ var _lh_organization_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lh-organization-list.component.scss */ 76974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LhOrganizationListComponent = class LhOrganizationListComponent {
    constructor() { }
    ngOnInit() { }
};
LhOrganizationListComponent.ctorParameters = () => [];
LhOrganizationListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lh-organization-list',
        template: _raw_loader_lh_organization_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lh_organization_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LhOrganizationListComponent);



/***/ }),

/***/ 73490:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/member-password/member-password.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberPasswordComponent": () => (/* binding */ MemberPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_member_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./member-password.component.html */ 78053);
/* harmony import */ var _member_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-password.component.scss */ 81799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MemberPasswordComponent = class MemberPasswordComponent {
    constructor() { }
    ngOnInit() { }
};
MemberPasswordComponent.ctorParameters = () => [];
MemberPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-member-password',
        template: _raw_loader_member_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberPasswordComponent);



/***/ }),

/***/ 63040:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/member-standard-set.component.module.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberStandardSetComponentModule": () => (/* binding */ MemberStandardSetComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _lh_organization_list_lh_organization_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lh-organization-list/lh-organization-list.component */ 67269);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _member_password_member_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-password/member-password.component */ 73490);
/* harmony import */ var _occupation_list_occupation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./occupation-list/occupation-list.component */ 5797);
/* harmony import */ var _organization_edit_organization_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-edit/organization-edit.component */ 43961);
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position-list/position-list.component */ 87882);
/* harmony import */ var _safe_job_list_safe_job_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-job-list/safe-job-list.component */ 30540);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/component.module */ 55051);












let MemberStandardSetComponentModule = class MemberStandardSetComponentModule {
};
MemberStandardSetComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _lh_organization_list_lh_organization_list_component__WEBPACK_IMPORTED_MODULE_0__.LhOrganizationListComponent,
            _member_password_member_password_component__WEBPACK_IMPORTED_MODULE_1__.MemberPasswordComponent,
            _occupation_list_occupation_list_component__WEBPACK_IMPORTED_MODULE_2__.OccupationListComponent,
            _organization_edit_organization_edit_component__WEBPACK_IMPORTED_MODULE_3__.OrganizationEditComponent,
            _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_4__.PositionListComponent,
            _safe_job_list_safe_job_list_component__WEBPACK_IMPORTED_MODULE_5__.SafeJobListComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_6__.ComponentModule
        ],
        exports: [
            _lh_organization_list_lh_organization_list_component__WEBPACK_IMPORTED_MODULE_0__.LhOrganizationListComponent,
            _member_password_member_password_component__WEBPACK_IMPORTED_MODULE_1__.MemberPasswordComponent,
            _occupation_list_occupation_list_component__WEBPACK_IMPORTED_MODULE_2__.OccupationListComponent,
            _organization_edit_organization_edit_component__WEBPACK_IMPORTED_MODULE_3__.OrganizationEditComponent,
            _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_4__.PositionListComponent,
            _safe_job_list_safe_job_list_component__WEBPACK_IMPORTED_MODULE_5__.SafeJobListComponent
        ]
    })
], MemberStandardSetComponentModule);



/***/ }),

/***/ 5797:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/occupation-list/occupation-list.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OccupationListComponent": () => (/* binding */ OccupationListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_occupation_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./occupation-list.component.html */ 18800);
/* harmony import */ var _occupation_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./occupation-list.component.scss */ 63703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let OccupationListComponent = class OccupationListComponent {
    constructor() { }
    ngOnInit() { }
};
OccupationListComponent.ctorParameters = () => [];
OccupationListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-occupation-list',
        template: _raw_loader_occupation_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_occupation_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OccupationListComponent);



/***/ }),

/***/ 43961:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/organization-edit/organization-edit.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationEditComponent": () => (/* binding */ OrganizationEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_organization_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./organization-edit.component.html */ 17061);
/* harmony import */ var _organization_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-edit.component.scss */ 93467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);







let OrganizationEditComponent = class OrganizationEditComponent {
    constructor(connect, _modal, alert) {
        this.connect = connect;
        this._modal = _modal;
        this.alert = alert;
        this.level1 = {
            hq_regional_code: '',
            hq_regional_entire_state: 0,
            hq_regional_name: '',
            hq_regional_id: 0,
            hq_regional_use_state: 0
        };
        this.level2 = {
            hq_business_code: "",
            hq_business_entire_state: 0,
            hq_business_id: 0,
            hq_business_name: "",
            hq_business_use_state: 0,
            hq_regional_id: 0
        };
        this.level3 = {
            hq_business_id: 0,
            hq_department_code: '',
            hq_department_id: 0,
            hq_department_name: '',
            hq_department_use_state: 0,
            hq_regional_id: 6,
            hq_regional_name: ''
        };
        this.title = '';
    }
    ngOnInit() {
        console.log("this.selectList", this.selectList);
        if (this.selectList) {
            this.title = '수정';
            if (this.level === 'level1') {
                this.level1 = this.selectList;
                console.log('inptuselect', this.level1);
            }
            if (this.level === 'level2') {
                this.level2 = this.selectList;
                console.log('inptuselect', this.level1);
            }
            if (this.level === 'level3') {
                this.level3 = this.selectList;
                console.log('inptuselect', this.level1);
            }
        }
        else
            this.title = '추가';
    }
    dismiss() {
        this._modal.dismiss();
    }
    addOrganization() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.level);
            const alert = yield this.alert.present({
                message: `${this.title} 하시겠습니까?`,
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.level === 'level1') {
                                console.log(this.level1);
                                const res = yield this.connect.run(this.title === '추가' ? '/project/organization/regional/insert' : '/project/organization/regional/update', this.level1, {});
                                if (res.rsCode === 0) {
                                    this._modal.dismiss('level1');
                                }
                            }
                            if (this.level === 'level2') {
                                const res = yield this.connect.run(this.title === '추가' ? '/project/organization/business/insert' : '/project/organization/business/update', this.level2, {});
                                if (res.rsCode === 0) {
                                    this._modal.dismiss('level2');
                                }
                            }
                            if (this.level === 'level3') {
                                const res = yield this.connect.run(this.title === '추가' ? '/project/organization/department/insert' : '/project/organization/department/update', this.level3, {});
                                if (res.rsCode === 0) {
                                    this._modal.dismiss('level3');
                                }
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
};
OrganizationEditComponent.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
OrganizationEditComponent.propDecorators = {
    selectList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
OrganizationEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-organization-edit',
        template: _raw_loader_organization_edit_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_organization_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrganizationEditComponent);



/***/ }),

/***/ 87882:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/position-list/position-list.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionListComponent": () => (/* binding */ PositionListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_position_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./position-list.component.html */ 26543);
/* harmony import */ var _position_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position-list.component.scss */ 68453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PositionListComponent = class PositionListComponent {
    constructor() { }
    ngOnInit() { }
};
PositionListComponent.ctorParameters = () => [];
PositionListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-position-list',
        template: _raw_loader_position_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_position_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PositionListComponent);



/***/ }),

/***/ 30540:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/safe-job-list/safe-job-list.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeJobListComponent": () => (/* binding */ SafeJobListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safe_job_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safe-job-list.component.html */ 62684);
/* harmony import */ var _safe_job_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-job-list.component.scss */ 56273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SafeJobListComponent = class SafeJobListComponent {
    constructor() { }
    ngOnInit() { }
};
SafeJobListComponent.ctorParameters = () => [];
SafeJobListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-safe-job-list',
        template: _raw_loader_safe_job_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safe_job_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafeJobListComponent);



/***/ }),

/***/ 73346:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/member-standard-set-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberStandardSetPageRoutingModule": () => (/* binding */ MemberStandardSetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _member_standard_set_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-standard-set.page */ 89265);




const routes = [
    {
        path: '',
        component: _member_standard_set_page__WEBPACK_IMPORTED_MODULE_0__.MemberStandardSetPage
    }
];
let MemberStandardSetPageRoutingModule = class MemberStandardSetPageRoutingModule {
};
MemberStandardSetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberStandardSetPageRoutingModule);



/***/ }),

/***/ 27575:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/member-standard-set.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberStandardSetPageModule": () => (/* binding */ MemberStandardSetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _member_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-standard-set-routing.module */ 73346);
/* harmony import */ var _member_standard_set_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-standard-set.page */ 89265);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _component_member_standard_set_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/member-standard-set.component.module */ 63040);









let MemberStandardSetPageModule = class MemberStandardSetPageModule {
};
MemberStandardSetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _component_member_standard_set_component_module__WEBPACK_IMPORTED_MODULE_3__.MemberStandardSetComponentModule,
            _member_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberStandardSetPageRoutingModule
        ],
        declarations: [_member_standard_set_page__WEBPACK_IMPORTED_MODULE_1__.MemberStandardSetPage]
    })
], MemberStandardSetPageModule);



/***/ }),

/***/ 89265:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/member-standard-set.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberStandardSetPage": () => (/* binding */ MemberStandardSetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_member_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./member-standard-set.page.html */ 44048);
/* harmony import */ var _member_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-standard-set.page.scss */ 78516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);









let MemberStandardSetPage = class MemberStandardSetPage {
    constructor(connect, modal, toast, alert, user) {
        this.connect = connect;
        this.modal = modal;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.area1SelectCheck = false;
        this.hq_regional_id = 0;
        this.hq_business_id = 0;
        //정보 접근 비밀번호
        this.form = {
            company_id: this.user.userData.belong_data.company_id,
            company_password: ''
        };
        this.passwordMeassge = '';
        this.passchkck = true;
        this.subpasscheck = true;
        this.subpasswordMeassge = '';
        this.jobForm = {
            company_id: this.user.userData.belong_data.company_id,
            project_id: this.user.userData.belong_data.project_id
        };
        this.addPosition = [];
        this.selectList = [];
        //직위 관리 끝
        //안전직무
        this.safeJobForm = {
            company_id: this.user.userData.belong_data.company_id,
            user_type: 'COMPANY'
        };
        this.safeJobSelected = [];
        //안전직무 끝
        //직종
        this.occupationForm = this.user.userData.belong_data.company_id;
        this.occupationSelected = [];
        //직종 끝
        this.segmenet = 'LH조직관리';
        this.contractType = '';
        this.permission = {
            'LH조직관리': false,
            '정보접근비밀번호': false,
            '안전마일리지적립': false,
            '안전마일리지사용': false,
            '직위': false,
            '안전직무': false,
            '직종': false
        };
    }
    ngOnInit() {
        this.getForm();
        this.segmentChange();
    }
    segmentChange() {
        switch (this.segmenet) {
            case 'LH조직관리':
                this.level1();
                break;
            case '정보접근비밀번호':
                break;
            case '안전마일리지적립':
                break;
            case '안전마일리지사용':
                break;
            case '직위':
                this.getJobPosition();
                break;
            case '안전직무':
                this.getSafeJob();
                break;
            case '직종':
                this.getOccupation();
                break;
        }
    }
    getForm() {
        const { belong_data } = this.user.userData;
        this.contractType = belong_data.company_contract_type;
        if (this.contractType === 'LH') {
            this.segmenet = 'LH조직관리';
            this.permission.LH조직관리 = true;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = false;
            this.permission.안전마일리지사용 = false;
            this.permission.직위 = true;
            this.permission.안전직무 = false;
            this.permission.직종 = false;
        }
        else if (this.contractType === '감리사') {
            // 감리 접근 불가
            this.segmenet = '정보접근비밀번호';
            this.permission.LH조직관리 = false;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = false;
            this.permission.안전마일리지사용 = false;
            this.permission.직위 = false;
            this.permission.안전직무 = false;
            this.permission.직종 = false;
        }
        else if (this.contractType === '원청사' || this.contractType === '협력사') {
            this.segmenet = '정보접근비밀번호';
            this.permission.LH조직관리 = false;
            this.permission.정보접근비밀번호 = true;
            this.permission.안전마일리지적립 = true;
            this.permission.안전마일리지사용 = true;
            this.permission.직위 = true;
            this.permission.안전직무 = true;
            this.permission.직종 = true;
        }
    }
    //-->  lh조직관리 시작
    //본부, 지역본부
    level1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resLevel1 = yield this.connect.run('/project/organization/regional/get', {}, {});
        });
    }
    // //지역본부, 사업본부
    level2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resLevel2 = yield this.connect.run('/project/organization/business/get', {
                hq_regional_id: this.hq_regional_id
            }, {});
            if (this.resLevel2.rsCode === 0) { }
        });
    }
    //
    level3() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resLevel3 = yield this.connect.run('/project/organization/department/get', {
                hq_business_id: this.hq_business_id,
                hq_regional_id: this.hq_regional_id
            }, {});
            if (this.resLevel3.rsCode === 0) { }
        });
    }
    level2In(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hq_regional_id = item.hq_regional_id;
            this.area1SelectList = item;
            if (item.hq_regional_id) {
                this.resLevel2 = yield this.connect.run('/project/organization/business/get', {
                    hq_regional_id: item.hq_regional_id
                }, {});
                if (this.resLevel2.rsCode === 0) {
                    this.resLevel3 = null;
                }
            }
        });
    }
    level3In(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hq_business_id = item.hq_business_id;
            this.area2SelectList = item;
            this.resLevel3 = yield this.connect.run('/project/organization/department/get', {
                hq_regional_id: item.hq_regional_id,
                hq_business_id: item.hq_business_id
            }, {});
            if (this.resLevel3.rsCode === 0) { }
        });
    }
    radioChange(level) {
        console.log("asdfasdfa");
        switch (level) {
            case 'level1':
                this.resLevel1.rsMap.forEach(item => {
                    item.checked = false;
                });
                break;
            case 'level2':
                this.resLevel2.rsMap.forEach(item => {
                    item.checked = false;
                });
                break;
            case 'level3':
                this.resLevel3.rsMap.forEach(item => {
                    item.checked = false;
                });
                break;
        }
    }
    levelAdd(level) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user.userData.user_role !== 'LH_HEAD')
                return yield this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
            switch (level) {
                case 'level1':
                    this.resLevel1.rsMap.unshift({
                        hq_regional_entire_state: 0,
                        hq_regional_id: 0,
                        hq_regional_code: '',
                        hq_regional_name: '',
                        hq_regional_use_state: 1,
                        checked: false
                    });
                    break;
                case 'level2':
                    if (!this.area1SelectList || !this.area1SelectList.hq_regional_id) {
                        return yield this.toast.present({ message: 'level1 항목을 선택해주세요.', color: 'warning' });
                    }
                    else {
                        if ((_b = (_a = this.resLevel2) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                            this.resLevel2.rsMap.unshift({
                                hq_business_name: '',
                                hq_business_entire_state: 0,
                                hq_business_use_state: 1,
                                hq_regional_id: 0,
                                hq_business_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        else {
                            this.resLevel2.rsMap = [];
                            this.resLevel2.rsMap.push({
                                hq_business_name: '',
                                hq_business_entire_state: 0,
                                hq_business_use_state: 1,
                                hq_regional_id: 0,
                                hq_business_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                    }
                    break;
                case 'level3':
                    if (!this.area2SelectList || !this.area2SelectList.hq_business_id) {
                        return yield this.toast.present({ message: 'level2 항목을 선택해주세요.', color: 'warning' });
                    }
                    else {
                        if ((_d = (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.length) {
                            this.resLevel3.rsMap.unshift({
                                hq_department_use_state: 1,
                                hq_department_id: 0,
                                hq_department_name: '',
                                hq_regional_id: 0,
                                hq_department_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                        else {
                            this.resLevel3.rsMap = [];
                            this.resLevel3.rsMap.push({
                                hq_department_use_state: 1,
                                hq_department_id: 0,
                                hq_department_name: '',
                                hq_regional_id: 0,
                                hq_department_code: '',
                                hq_business_id: 0,
                                checked: false
                            });
                        }
                    }
                    break;
            }
        });
    }
    levelUpdate(level) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
            switch (level) {
                case 'level1':
                    (_a = this.resLevel1) === null || _a === void 0 ? void 0 : _a.rsMap.forEach((item, i) => {
                        if (this.area1SelectList.hq_regional_id === item.hq_regional_id) {
                            item.checked = true;
                        }
                        else {
                            item.checked = false;
                        }
                    });
                    break;
                case 'level2':
                    (_b = this.resLevel2) === null || _b === void 0 ? void 0 : _b.rsMap.forEach((item, i) => {
                        if (this.area2SelectList.hq_business_id === item.hq_business_id) {
                            item.checked = true;
                        }
                        else {
                            item.checked = false;
                        }
                    });
                    break;
                case 'level3':
                    (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap.forEach((item, i) => {
                        if (this.area3SelectList.hq_department_id === item.hq_department_id) {
                            item.checked = true;
                        }
                        else {
                            item.checked = false;
                        }
                    });
                    break;
            }
        });
    }
    organizationSave(level) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // this.hq_regional_id = this.area1SelectList.hq_regional_id;
            // this.hq_business_id = this.area2SelectList.hq_business_id;
            if (this.user.userData.user_role !== 'LH_HEAD')
                return yield this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
            switch (level) {
                case 'level1':
                    (_a = this.resLevel1) === null || _a === void 0 ? void 0 : _a.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        if (item.hq_regional_id && item.checked) {
                            const res = yield this.connect.run('/project/organization/regional/update', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
                                this.level1();
                            }
                        }
                        else if (!item.hq_regional_id && !item.checked) {
                            const res = yield this.connect.run('/project/organization/regional/insert', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                this.level1();
                            }
                        }
                    }));
                    this.level1();
                    break;
                case 'level2':
                    (_b = this.resLevel2) === null || _b === void 0 ? void 0 : _b.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        if (item.hq_business_id && item.checked) {
                            item.hq_regional_id = this.hq_regional_id;
                            const res = yield this.connect.run('/project/organization/business/update', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
                                this.level2();
                            }
                        }
                        else if (!item.hq_business_id && !item.checked) {
                            item.hq_regional_id = this.hq_regional_id;
                            const res = yield this.connect.run('/project/organization/business/insert', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                this.level2();
                            }
                        }
                    }));
                    break;
                case 'level3':
                    (_c = this.resLevel3) === null || _c === void 0 ? void 0 : _c.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        if (item.hq_department_id && item.checked) {
                            item.hq_business_id = this.hq_business_id;
                            item.hq_regional_id = this.hq_regional_id;
                            const res = yield this.connect.run('/project/organization/department/update', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
                                this.level3();
                            }
                        }
                        else if (!item.hq_department_id && !item.checked) {
                            item.hq_business_id = this.hq_business_id;
                            item.hq_regional_id = this.hq_regional_id;
                            const res = yield this.connect.run('/project/organization/department/insert', item);
                            if (res.rsCode === 0) {
                                const toast = yield this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                                this.level3();
                            }
                        }
                    }));
                    break;
            }
        });
    }
    //-->  lh조직관리 끝
    //-->  회원관리 비밀번호 시작
    passwordCheck() {
        var _a;
        const rex = /^[0-9]{4,}$/;
        const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (!rex.test(this.form.company_password) && ((_a = this.form.company_password) === null || _a === void 0 ? void 0 : _a.length)) {
            this.passchkck = false;
            this.passwordMeassge = '비밀번호 양식이 맞지 않습니다.';
        }
        else {
            this.passchkck = true;
        }
    }
    subPasswordCheck() {
        if (this.form.company_password !== this.subpassword && this.form.company_password.length) {
            this.subpasscheck = false;
            this.subpasswordMeassge = '비밀번호가 일치 하지 않습니다.';
        }
        else {
            this.subpasscheck = true;
        }
    }
    memberPasswordUdpate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.passchkck)
                return this.toast.present({ message: '비밀번호 양식이 맞지 않습니다.', color: 'warning' });
            if (this.form.company_password !== this.subpassword)
                return this.toast.present({ message: '비밀번호를 확인해 주세요.', color: "warning" });
            const res = yield this.connect.run('/project/company/pass/update', this.form, {});
            if (res.rsCode === 0) {
                this.toast.present({ message: '비밀번호가 변경 되었습니다.', color: 'primary' });
                this.form.company_password = null;
                this.subpassword = null;
            }
        });
    }
    //-->  회원관리 비밀번호 끝
    //--> 직위 관리 시작
    getJobPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resJobPosition = yield this.connect.run('/project/job_position/get', { company_id: this.jobForm.company_id });
            if (this.resJobPosition.rsCode === 0) {
            }
            else {
                this.toast.present({ message: this.resJobPosition.rsMsg });
            }
        });
    }
    addJobPosstion() {
        var _a, _b, _c, _d, _e, _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.jobForm.company_id)
                return yield this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
            if ((_b = (_a = this.resJobPosition) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_d = (_c = this.resJobPosition) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.unshift({
                    ctgo_job_position_name_kr: '',
                    ctgo_job_position_use_state: 1,
                    ctgo_job_position_name_en: '',
                    company_id: this.jobForm.company_id,
                    ctgo_job_position_name_vi: '',
                    ctgo_job_position_id: 0,
                    ctgo_job_position_name_ch: ''
                });
            }
            else {
                this.resJobPosition.rsMap = [];
                (_f = (_e = this.resJobPosition) === null || _e === void 0 ? void 0 : _e.rsMap) === null || _f === void 0 ? void 0 : _f.push({
                    ctgo_job_position_name_kr: '',
                    ctgo_job_position_use_state: 1,
                    ctgo_job_position_name_en: '',
                    company_id: this.jobForm.company_id,
                    ctgo_job_position_name_vi: '',
                    ctgo_job_position_id: 0,
                    ctgo_job_position_name_ch: ''
                });
            }
        });
    }
    jobAddSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resJobPosition.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (item.ctgo_job_position_id === 0) {
                    const res = yield this.connect.run('/project/job_position/insert', item, {});
                    if (res.rsCode === 0) {
                        if (this.resJobPosition.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
                else {
                    const res = yield this.connect.run('/project/job_position/update', item, {});
                    if (res.rsCode === 0) {
                        console.log("this.resJobPosition.rsMap.length", this.resJobPosition.rsMap.length);
                        console.log("i", i + 1);
                        if (this.resJobPosition.rsMap.length === (i + 1)) {
                            console.log("sdfasdfasdf???");
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
            }));
        });
    }
    state(state) {
        if (state) {
            for (let j = 0; j < this.resJobPosition.rsMap.length; j++) {
                this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resJobPosition.rsMap.length; j++) {
                this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 0;
            }
        }
    }
    postionDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.selectList.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resJobPosition.rsMap;
                            this.selectList.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_job_position_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/job_position/delete', {
                                        company_id: checkedItem.company_id,
                                        ctgo_job_position_id: checkedItem.ctgo_job_position_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getJobPosition();
                                    }
                                    ;
                                }
                            }));
                            this.selectList = [];
                        })
                    }
                ]
            });
        });
    }
    getSafeJob() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
                this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
            }
            this.resSafeJob = yield this.connect.run('/project/safe_job/get', this.safeJobForm);
            if (this.resSafeJob.rsCode === 0) { }
            ;
        });
    }
    addSafeJob() {
        var _a, _b, _c, _d, _e, _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
            if (!this.safeJobForm.company_id)
                return this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
            if (!this.safeJobForm.user_type)
                return this.toast.present({ message: '구분를 선택해 주세요.', color: 'warning' });
            if ((_b = (_a = this.resSafeJob) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_d = (_c = this.resSafeJob) === null || _c === void 0 ? void 0 : _c.rsMap) === null || _d === void 0 ? void 0 : _d.unshift({
                    ctgo_safe_job_name_vi: '',
                    ctgo_safe_job_name_ch: '',
                    ctgo_safe_job_use_state: 1,
                    company_id: this.safeJobForm.company_id,
                    ctgo_safe_job_name_kr: '',
                    ctgo_safe_job_name_en: '',
                    ctgo_safe_job_id: 0,
                    ctgo_safe_job_role: '',
                    user_type: this.safeJobForm.user_type
                });
            }
            else {
                this.resSafeJob.rsMap = [];
                (_f = (_e = this.resSafeJob) === null || _e === void 0 ? void 0 : _e.rsMap) === null || _f === void 0 ? void 0 : _f.push({
                    ctgo_safe_job_name_vi: '',
                    ctgo_safe_job_name_ch: '',
                    ctgo_safe_job_use_state: 1,
                    company_id: this.safeJobForm.company_id,
                    ctgo_safe_job_name_kr: '',
                    ctgo_safe_job_name_en: '',
                    ctgo_safe_job_id: 0,
                    ctgo_safe_job_role: '',
                    user_type: this.safeJobForm.user_type
                });
            }
        });
    }
    safeJobSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resSafeJob.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (item.ctgo_safe_job_id === 0) {
                    const res = yield this.connect.run('/project/safe_job/insert', item, {});
                    if (res.rsCode === 0) {
                        if (this.resSafeJob.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
                else {
                    const res = yield this.connect.run('/project/safe_job/update', item, {});
                    if (res.rsCode === 0) {
                        if (this.resSafeJob.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
            }));
        });
    }
    safeState(state) {
        if (state) {
            for (let j = 0; j < this.resSafeJob.rsMap.length; j++) {
                this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resSafeJob.rsMap.length; j++) {
                this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 0;
            }
        }
    }
    safeDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.safeJobSelected.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resSafeJob.rsMap;
                            this.safeJobSelected.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_safe_job_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/safe_job/delete', {
                                        company_id: checkedItem.company_id,
                                        ctgo_safe_job_id: checkedItem.ctgo_safe_job_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getSafeJob();
                                    }
                                    ;
                                }
                                this.safeJobSelected = [];
                            }));
                            this.getSafeJob();
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    getOccupation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
                this.occupationForm = this.user.userData.belong_data.company_id;
            }
            this.resOccupation = yield this.connect.run('/project/occupation/get', { company_id: this.occupationForm });
            if (this.resOccupation.rsCode === 0) { }
            ;
        });
    }
    addOccupation() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.occupationForm)
                return yield this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
            if ((_b = (_a = this.resOccupation) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = this.resOccupation) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                    ctgo_occupation_use_state: 1,
                    ctgo_occupation_id: 0,
                    company_id: this.occupationForm,
                    ctgo_occupation_role: 'BASIC',
                    ctgo_occupation_name_en: '',
                    ctgo_occupation_name_kr: '',
                    ctgo_occupation_name_ch: '',
                    ctgo_occupation_name_vi: ''
                });
            }
            else {
                this.resOccupation.rsMap = [];
                (_d = this.resOccupation) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                    ctgo_occupation_use_state: 1,
                    ctgo_occupation_id: 0,
                    company_id: this.occupationForm,
                    ctgo_occupation_role: 'BASIC',
                    ctgo_occupation_name_en: '',
                    ctgo_occupation_name_kr: '',
                    ctgo_occupation_name_ch: '',
                    ctgo_occupation_name_vi: ''
                });
            }
        });
    }
    occupationSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.resOccupation.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (item.ctgo_occupation_id === 0) {
                    const res = yield this.connect.run('/project/occupation/insert', item, {});
                    if (res.rsCode === 0) {
                        if (this.resOccupation.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
                else {
                    const res = yield this.connect.run('/project/occupation/update', item, {});
                    if (res.rsCode === 0) {
                        if (this.resOccupation.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
            }));
        });
    }
    deleteOccupation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.occupationSelected.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resOccupation.rsMap;
                            this.occupationSelected.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_occupation_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/occupation/delete', {
                                        company_id: checkedItem.company_id,
                                        ctgo_occupation_id: checkedItem.ctgo_occupation_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getOccupation();
                                    }
                                    ;
                                }
                                this.occupationSelected = [];
                            }));
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    occupationState(state) {
        if (state) {
            for (let j = 0; j < this.resOccupation.rsMap.length; j++) {
                this.resOccupation.rsMap[j].ctgo_occupation_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resOccupation.rsMap.length; j++) {
                this.resOccupation.rsMap[j].ctgo_occupation_use_state = 0;
            }
        }
    }
};
MemberStandardSetPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
MemberStandardSetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-member-standard-set',
        template: _raw_loader_member_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberStandardSetPage);



/***/ }),

/***/ 76974:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/lh-organization-list/lh-organization-list.component.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaC1vcmdhbml6YXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 81799:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/member-password/member-password.component.scss ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 63703:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/occupation-list/occupation-list.component.scss ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvY2N1cGF0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 93467:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/organization-edit/organization-edit.component.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmdhbml6YXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 68453:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/position-list/position-list.component.scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 56273:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/component/safe-job-list/safe-job-list.component.scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZlLWpvYi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 78516:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/member-standard-set/member-standard-set.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host app-button {\n  margin-bottom: 0;\n}\n\n:host .sub-segment {\n  --background: transparent;\n}\n\n:host .sub-segment ion-segment-button {\n  background: transparent;\n}\n\n:host .edit {\n  height: 500px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1zdGFuZGFyZC1zZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCO0FBQXhCOztBQUZBO0VBS1EseUJBQWE7QUFDckI7O0FBTkE7RUFPWSx1QkFBdUI7QUFHbkM7O0FBVkE7RUFXUSxhQUFhO0VBQ2IsZ0JBQWdCO0FBR3hCIiwiZmlsZSI6Im1lbWJlci1zdGFuZGFyZC1zZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgYXBwLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLnN1Yi1zZWdtZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5lZGl0e1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 56425:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/lh-organization-list/lh-organization-list.component.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  lh-organization-list works!\n</p>\n");

/***/ }),

/***/ 78053:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/member-password/member-password.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  member-password works!\n</p>\n");

/***/ }),

/***/ 18800:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/occupation-list/occupation-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  occupation-list works!\n</p>\n");

/***/ }),

/***/ 17061:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/organization-edit/organization-edit.component.html ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons (click)=\"dismiss()\" slot=\"end\">\n      <app-img name=\"close\"></app-img>\n    </ion-buttons>\n    <ion-title>조직 기구 {{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-card>\n      <app-row style=\"height: 100px;\">\n        <app-col size=\"auto\">\n          <h5> {{level}}</h5>\n        </app-col>\n        <app-col>\n          <app-textarea *ngIf=\"level === 'level1'\" [(ngModel)]=\"level1.hq_regional_name\" [rows]=\"5\" placeholder=\"추가할 내용을 입력해주세요&#13;&#10;(20글자 이내)\" [maxlength]=\"20\"></app-textarea>\n          <app-textarea *ngIf=\"level === 'level2'\" [(ngModel)]=\"level2.hq_business_name\" [rows]=\"5\" placeholder=\"추가할 내용을 입력해주세요&#13;&#10;(20글자 이내)\" [maxlength]=\"20\"></app-textarea>\n          <app-textarea *ngIf=\"level === 'level3'\" [(ngModel)]=\"level3.hq_department_name\" [rows]=\"5\" placeholder=\"추가할 내용을 입력해주세요&#13;&#10;(20글자 이내)\" [maxlength]=\"20\"></app-textarea>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n<app-button-footer>\n  <app-button fill=\"translucent\" (click)=\"addOrganization()\">적용</app-button>\n</app-button-footer>");

/***/ }),

/***/ 26543:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/position-list/position-list.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  position-list works!\n</p>\n");

/***/ }),

/***/ 62684:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/component/safe-job-list/safe-job-list.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  safe-job-list works!\n</p>\n");

/***/ }),

/***/ 44048:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/member-standard-set/member-standard-set.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <ion-toolbar color=\"white\" style=\"margin-bottom: 8px;\">\n    <app-row>\n      <app-col size=\"auto\">\n        <ion-segment class=\"sub-segment\" color=\"primary\" [(ngModel)]=\"segmenet\" (ionChange)=\"segmentChange()\">\n          <ion-segment-button *ngIf=\"permission['LH조직관리']\" value=\"LH조직관리\">LH 조직관리</ion-segment-button>\n          <ion-segment-button *ngIf=\"permission['정보접근비밀번호']\" value=\"정보접근비밀번호\">정보 접근<br>비밀번호</ion-segment-button>\n          <!-- <ion-segment-button *ngIf=\"permission['안전마일리지적립']\" value=\"안전마일리지적립\" [disabled]=\"true\">안전 마일리지<br>적립</ion-segment-button>\n          <ion-segment-button *ngIf=\"permission['안전마일리지사용']\" value=\"안전마일리지사용\" [disabled]=\"true\">안전 마일리지<br>사용</ion-segment-button> -->\n          <ion-segment-button *ngIf=\"permission['직위']\" value=\"직위\">직위</ion-segment-button>\n          <ion-segment-button *ngIf=\"permission['안전직무']\" value=\"안전직무\">안전직무</ion-segment-button>\n          <ion-segment-button *ngIf=\"permission['직종']\" value=\"직종\">직종</ion-segment-button>\n        </ion-segment>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <app-row  *ngIf=\"segmenet === 'LH조직관리'\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <td>\n              <app-input-template label=\"업체명\">\n                <p slot=\"input\">{{ user.userData.belong_data.company_name }}</p>\n              </app-input-template>\n            </td>\n          </tr>\n        </thead>\n      </app-table>\n    </app-col>\n    <app-col>\n      <div>\n        <ion-toolbar style=\"height: 67px; display: flex;\" color=\"white\">\n          <h4>LH 조직관리</h4>\n\n          <!-- <ion-buttons slot=\"end\">\n        <app-button fill=\"translucent\">저장</app-button>\n      </ion-buttons> -->\n        </ion-toolbar>\n      </div>\n      <app-card>\n        <app-row style=\"align-items: stretch; \">\n          <app-col>\n            <div style=\"text-align: right;\">\n              <app-button fill=\"translucent\" (click)=\"levelAdd('level1')\">추가</app-button>\n              <app-button fill=\"translucent\" (click)=\"levelUpdate('level1')\">수정</app-button>\n              <app-button fill=\"translucent\" (click)=\"organizationSave('level1')\">저장\n              </app-button>\n            </div>\n            <app-radio-group [(ngModel)]=\"area1SelectList\">\n              <app-table style=\"height: 600px; overflow: auto;\">\n                <thead>\n                  <tr>\n                    <th style=\"width: 20px;\">\n                    </th>\n                    <th style=\"width: 80px;\">코드</th>\n                    <th style=\"width: 100px;\">level 1</th>\n                    <th style=\"width: 100px;\">권한</th>\n                    <th style=\"width: 70px;\">사용여부</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"button\" *ngFor=\"let item of resLevel1?.rsMap let i = index\" \n                  (click)=\"level2In(item); radioChange('level1')\">\n                    <td>\n                      <app-radio *ngIf=\"item.hq_regional_id; else deletebutton\" name=\"level1\" [value]=\"item\"\n                        ></app-radio>\n                      <ng-template #deletebutton>\n                        <app-button (click)=\"resLevel1.rsMap.splice(i,1); $event.stopPropagation();\" size=\"small\"\n                          color=\"danger\">\n                          <ion-icon name=\"close-outline\"></ion-icon>\n                        </app-button>\n                      </ng-template>\n                    </td>\n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_regional_code\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_regional_id\">\n                      <app-input [disabled]=\"true\" [(ngModel)]=\"item.hq_regional_code\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_regional_id\">\n                      <app-input [(ngModel)]=\"item.hq_regional_code\"></app-input>\n                    </td>\n                    \n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_regional_name\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_regional_id\">\n                      <app-input [disabled]=\"true\" [(ngModel)]=\"item.hq_regional_name\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_regional_id\">\n                      <app-input [(ngModel)]=\"item.hq_regional_name\"></app-input>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_regional_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_regional_id\">\n                      <app-select [disabled]=\"true\" [(ngModel)]=\"item.hq_regional_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_regional_id\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_regional_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_regional_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_regional_id\">\n                      <app-select [disabled]=\"true\" [(ngModel)]=\"item.hq_regional_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_regional_id\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_regional_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-radio-group>\n          </app-col>\n\n          <app-col>\n            <div style=\"text-align: right;\">\n              <app-button fill=\"translucent\" (click)=\"levelAdd('level2')\">추가</app-button>\n              <app-button fill=\"translucent\" (click)=\"levelUpdate('level2')\">수정</app-button>\n              <app-button fill=\"translucent\" (click)=\"organizationSave('level2')\">저장\n              </app-button>\n            </div>\n            <app-radio-group [(ngModel)]=\"area2SelectList\">\n              <app-table style=\"height: 600px; overflow: auto;\">\n                <thead>\n                  <tr>\n                    <th style=\"width: 20px;\"></th>\n                    <th style=\"width: 80px;\">코드</th>\n                    <th style=\"width: 100px;\">level 2</th>\n                    <th style=\"width: 100px;\">권한</th>\n                    <th style=\"width: 70px;\">사용여부</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"button\" *ngFor=\"let item of resLevel2?.rsMap let i = index\" \n                  (click)=\"level3In(item); radioChange('level2')\">\n                    <td>\n                      <app-radio *ngIf=\"item.hq_regional_id; else deletebutton\" name=\"level2\" [value]=\"item\"\n                       ></app-radio>\n                      <ng-template #deletebutton>\n                        <app-button (click)=\"resLevel2.rsMap.splice(i,1); $event.stopPropagation();\" size=\"small\"\n                          color=\"danger\">\n                          <ion-icon name=\"close-outline\"></ion-icon>\n                        </app-button>\n                      </ng-template>\n                    </td>\n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_business_code\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_business_id\">\n                      {{item.hq_business_code}}\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_business_id\">\n                      <app-input [(ngModel)]=\"item.hq_business_code\"></app-input>\n                    </td>\n\n                    <td *ngIf=\"!item.checked && item.hq_business_id\">\n                      {{item.hq_business_name}}\n                    </td>\n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_business_name\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_business_id\">\n                      <app-input [(ngModel)]=\"item.hq_business_name\"></app-input>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_business_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_business_id\">\n                      <app-select [disabled]=\"true\" [(ngModel)]=\"item.hq_business_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_business_id\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_business_entire_state\">\n                        <app-select-option [value]=\"1\">본사</app-select-option>\n                        <app-select-option [value]=\"0\">사업본부</app-select-option>\n                      </app-select>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_business_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_business_id\">\n                      <app-select [disabled]=\"true\" [(ngModel)]=\"item.hq_business_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_business_id\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_business_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-radio-group>\n          </app-col>\n\n          <app-col>\n            <div style=\"text-align: right;\">\n              <app-button fill=\"translucent\" (click)=\"levelAdd('level3')\">추가</app-button>\n              <app-button fill=\"translucent\" (click)=\"levelUpdate('level3')\">수정</app-button>\n              <app-button fill=\"translucent\" (click)=\"organizationSave('level3')\">저장\n              </app-button>\n            </div>\n            <app-radio-group [(ngModel)]=\"area3SelectList\">\n              <app-table style=\"height: 600px; overflow: auto;\">\n                <thead>\n                  <tr>\n                    <th style=\"width: 20px;\">\n                    </th>\n                    <th style=\"width: 80px;\">코드</th>\n                    <th style=\"width: 100px;\">level 3</th>\n                    <th style=\"width: 70px;\">사용여부</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"button\" *ngFor=\"let item of resLevel3?.rsMap let i = index\" (click)=\"area3SelectList = item; radioChange('level3')\">\n                    <td>\n                      <app-radio *ngIf=\"item.hq_regional_id; else deletebutton\" name=\"level3\" [value]=\"item\"\n                        ></app-radio>\n                      <ng-template #deletebutton>\n                        <app-button (click)=\"resLevel3.rsMap.splice(i,1); $event.stopPropagation()\" size=\"small\"\n                          color=\"danger\">\n                          <ion-icon name=\"close-outline\"></ion-icon>\n                        </app-button>\n                      </ng-template>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_department_code\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_department_id\">\n                      {{item.hq_department_code}}\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_department_id\">\n                      <app-input [(ngModel)]=\"item.hq_department_code\"></app-input>\n                    </td>\n\n\n                    <td *ngIf=\"!item.checked && item.hq_department_id\">\n                      {{item.hq_department_name}}\n                    </td>\n                    <td *ngIf=\"item.checked\">\n                      <app-input (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.hq_department_name\"></app-input>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_department_id\">\n                      <app-input [(ngModel)]=\"item.hq_department_name\"></app-input>\n                    </td>\n\n                    <td *ngIf=\"item.checked\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_department_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && item.hq_department_id\">\n                      <app-select [disabled]=\"true\" [(ngModel)]=\"item.hq_department_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"!item.checked && !item.hq_department_id\">\n                      <app-select [disabled]=\"false\" [(ngModel)]=\"item.hq_department_use_state\">\n                        <app-select-option [value]=\"1\">사용</app-select-option>\n                        <app-select-option [value]=\"0\">미사용</app-select-option>\n                      </app-select>\n                    </td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-radio-group>\n          </app-col>\n        </app-row>\n      </app-card>\n    </app-col>\n  </app-row>\n  \n  <app-row *ngIf=\"segmenet === '정보접근비밀번호'\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>정보</h5>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-input-template label=\"업체명\">\n                <p slot=\"input\">{{ user.userData.belong_data.company_name }}</p>\n              </app-input-template>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <div>\n        <ion-toolbar style=\"height: 52px; display: flex;\" color=\"white\">\n          <h4>비밀번호 설정</h4>\n          <ion-buttons slot=\"end\">\n            <app-button fill=\"translucent\" (click)=\"memberPasswordUdpate()\">저장</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </div>\n      <app-card >\n        <h4 style=\"text-align: center; margin-bottom: 12px;\">회원관리 메뉴에 접근 할 때 사용할 비밀번호를 지정해주세요.</h4>\n        <app-row>\n          <app-col></app-col>\n          <app-col style=\"text-align: right;\">\n            <app-input [(ngModel)]=\"form.company_password\" type=\"password\" (delayKeyup)=\"passwordCheck()\"\n              placeholder=\"숫자 4자 이상 입력해주세요.\"></app-input>\n            <app-input-caption *ngIf=\"!passchkck\" color=\"danger\">{{ passwordMeassge }}</app-input-caption>\n            <app-input [(ngModel)]=\"subpassword\" type=\"password\" (delayKeyup)=\"subPasswordCheck()\" placeholder=\"비밀번호 확인\"></app-input>\n            <app-input-caption *ngIf=\"!subpasscheck\" color=\"danger\">{{ subpasswordMeassge }}</app-input-caption>\n          </app-col>\n          <app-col></app-col>\n        </app-row>\n      </app-card>\n    </app-col>\n  </app-row>\n\n  <app-row *ngIf=\"segmenet === '직위'\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>정보</h5>\n            </app-col>\n            <!-- <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getJobPosition()\">검색\n              </app-button>\n            </app-col> -->\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-input-template label=\"업체명\">\n                <p slot=\"input\">{{ user.userData.belong_data.company_name }}</p>\n              </app-input-template>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"addJobPosstion()\">추가</app-button>\n          <app-button fill=\"translucent\" (click)=\"postionDelete()\" color=\"danger\">삭제</app-button>\n          <app-button fill=\"translucent\" (click)=\"state(1)\">전체 사용</app-button>\n          <app-button fill=\"translucent\" (click)=\"state(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <app-row>\n          <app-col>\n            <h5>직위 목록 (총 {{ resJobPosition?.rsMap?.length ? resJobPosition?.rsMap?.length: 0 }}건)</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" (click)=\"jobAddSave()\">저장</app-button>\n          </app-col>\n        </app-row>\n      </ion-toolbar>\n      <ng-container>\n        <app-check-group [(ngModel)]=\"selectList\">\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 40px;\">\n                  <app-check type=\"all\"></app-check>\n                </th>\n                <th style=\"width:48px\">No</th>\n                <th>직위명</th>\n                <th>영어</th>\n                <th>중국어</th>\n                <th>배트남어</th>\n                <th>사용여부</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let res of resJobPosition?.rsMap let i = index\">\n                <td>\n                  <app-check [on]=\"res\"></app-check>\n                </td>\n                <td>{{ i+1 }}</td>\n                <td>\n                  <app-input [(ngModel)]=\"res.ctgo_job_position_name_kr\"></app-input>\n                </td>\n                <td>\n                  <app-input [(ngModel)]=\"res.ctgo_job_position_name_en\"></app-input>\n                </td>\n                <td>\n                  <app-input [(ngModel)]=\"res.ctgo_job_position_name_ch\"></app-input>\n                </td>\n                <td>\n                  <app-input [(ngModel)]=\"res.ctgo_job_position_name_vi\"></app-input>\n                </td>\n                <td>\n                  <app-select [(ngModel)]=\"res.ctgo_job_position_use_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n      </ng-container>\n    </app-col>\n  </app-row>\n\n  <app-row *ngIf=\"segmenet === '안전직무'\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getSafeJob()\">검색\n              </app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-input-template label=\"업체명\">\n                <p slot=\"input\">{{ user.userData.belong_data.company_name }}</p>\n              </app-input-template>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select label=\"구분\" [(ngModel)]=\"safeJobForm.user_type\">\n                <app-select-option value=\"COMPANY\">관리자</app-select-option>\n                <app-select-option value=\"WORKER\">작업자</app-select-option>\n              </app-select>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"addSafeJob()\">추가</app-button>\n          <app-button fill=\"translucent\" (click)=\"safeDelete()\" color=\"danger\">삭제</app-button>\n          <app-button fill=\"translucent\" (click)=\"safeState(1)\">전체 사용</app-button>\n          <app-button fill=\"translucent\" (click)=\"safeState(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <app-row>\n          <app-col>\n            <h5>안전직무 목록 (총 {{ this.resSafeJob?.rsMap?.length ? this.resSafeJob?.rsMap?.length : 0 }}건)</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" (click)=\"safeJobSave()\">저장</app-button>\n          </app-col>\n        </app-row>\n      </ion-toolbar>\n      <app-check-group [(ngModel)]=\"safeJobSelected\">\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 40px;\">\n                <app-check type=\"all\"></app-check>\n              </th>\n              <th style=\"width: 48px;\">No</th>\n              <th>안전 직무명</th>\n              <th>영어</th>\n              <th>중국어</th>\n              <th>배트남어</th>\n              <th>사용여부</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resSafeJob?.rsMap let i = index\">\n              <td>\n                <app-check [on]=\"item\"></app-check>\n              </td>\n              <td>{{ i+1 }}</td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_safe_job_name_kr\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_safe_job_name_en\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_safe_job_name_ch\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_safe_job_name_vi\"></app-input>\n              </td>\n              <td>\n                <app-select [(ngModel)]=\"item.ctgo_safe_job_use_state\">\n                  <app-select-option [value]=\"1\">Y</app-select-option>\n                  <app-select-option [value]=\"0\">N</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-check-group>\n    </app-col>\n  </app-row>\n\n  <app-row *ngIf=\"segmenet === '직종'\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>정보</h5>\n            </app-col>\n            <!-- <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getOccupation()\">검색\n              </app-button>\n            </app-col> -->\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-input-template label=\"업체명\">\n                <p slot=\"input\">{{ user.userData.belong_data.company_name }}</p>\n              </app-input-template>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"addOccupation()\">추가</app-button>\n          <app-button fill=\"translucent\" (click)=\"deleteOccupation()\" color=\"danger\">삭제\n          </app-button>\n          <!-- <app-button fill=\"translucent\">엑셀 다운로드</app-button>\n          <app-button fill=\"translucent\">엑셀 업로드</app-button> -->\n          <app-button fill=\"translucent\" (click)=\"occupationState(1)\">천세 사용</app-button>\n          <app-button fill=\"translucent\" (click)=\"occupationState(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <app-row>\n          <app-col>\n            <h5>직종 목록 (총 {{resOccupation?.rsMap?.length ? resOccupation?.rsMap?.length : 0}}건)</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" (click)=\"occupationSave()\">저장</app-button>\n          </app-col>\n        </app-row>\n      </ion-toolbar>\n      <app-check-group [(ngModel)]=\"occupationSelected\">\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 40px;\">\n                <app-check type=\"all\"></app-check>\n              </th>\n              <th style=\"width: 48px;\">No</th>\n              <th>직종명</th>\n              <th>영어</th>\n              <th>중국어</th>\n              <th>배트남어</th>\n              <th>사용여부</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resOccupation?.rsMap; let i = index\">\n              <td>\n                <app-check [on]=\"item\"></app-check>\n              </td>\n              <td>{{i + 1}}</td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_occupation_name_kr\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_occupation_name_en\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_occupation_name_ch\"></app-input>\n              </td>\n              <td>\n                <app-input [(ngModel)]=\"item.ctgo_occupation_name_vi\"></app-input>\n              </td>\n              <td>\n                <app-select [(ngModel)]=\"item.ctgo_occupation_use_state\">\n                  <app-select-option [value]=\"1\">Y</app-select-option>\n                  <app-select-option [value]=\"0\">N</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-check-group>\n    </app-col>\n  </app-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_member-standard-set_member-standard-set_module_ts.js.map