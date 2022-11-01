(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_member-management_member-approval-wait_lh-approval-edit_lh-approval-edit-9379c8"],{

/***/ 39335:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhApprovalEditPageRoutingModule": () => (/* binding */ LhApprovalEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lh-approval-edit.page */ 67062);




const routes = [
    {
        path: '',
        component: _lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_0__.LhApprovalEditPage
    }
];
let LhApprovalEditPageRoutingModule = class LhApprovalEditPageRoutingModule {
};
LhApprovalEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LhApprovalEditPageRoutingModule);



/***/ }),

/***/ 96927:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhApprovalEditPageModule": () => (/* binding */ LhApprovalEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lh_approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lh-approval-edit-routing.module */ 39335);
/* harmony import */ var _lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lh-approval-edit.page */ 67062);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let LhApprovalEditPageModule = class LhApprovalEditPageModule {
};
LhApprovalEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _lh_approval_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.LhApprovalEditPageRoutingModule
        ],
        declarations: [_lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_1__.LhApprovalEditPage]
    })
], LhApprovalEditPageModule);



/***/ }),

/***/ 67062:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.page.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicItem": () => (/* binding */ BasicItem),
/* harmony export */   "ApprovalItem": () => (/* binding */ ApprovalItem),
/* harmony export */   "LhApprovalEditPage": () => (/* binding */ LhApprovalEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lh_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lh-approval-edit.page.html */ 24043);
/* harmony import */ var _lh_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lh-approval-edit.page.scss */ 92042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../approval-popup/approval-popup.component */ 32966);
/* harmony import */ var _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../security-password/security-password.component */ 52346);














//기본정보
class BasicItem {
    constructor() {
        this.user_profile_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
    }
}
//소속정보
class ApprovalItem {
    constructor() {
        this.hq_regional_entire_state = 0; // 본사권한 = 1
        this.hq_regional_id = 0; // id
    }
}
let LhApprovalEditPage = class LhApprovalEditPage {
    constructor(_modal_, connect, user, toast, alert, loading, promiss) {
        this._modal_ = _modal_;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.promiss = promiss;
        this.editable = false;
        this.form = {
            user_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: '',
            project_id: 0,
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new BasicItem()).validator;
    }
    ngOnInit() {
        this.form.user_id = this.item.user_id;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
        this.get();
    }
    //이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_email } = this.formBasic;
            if (!user_email)
                return this.validator.user_email = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/approval/lh/overlap/email', { user_email, user_id });
            this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    //휴대폰
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, user_id } = this.formBasic;
            if (!user_phone)
                return this.validator.user_phone = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/approval/lh/overlap/phone', { user_phone, user_id });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                this.getItem(),
                this.getBelong(),
            ]);
            loading.dismiss();
        });
    }
    //기본정보
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/lh/basic/detail', this.form, {
                parse: ['user_profile_file_data']
            });
            if (res.rsCode === 0) {
                this.formBasic = Object.assign(Object.assign({}, this.formBasic), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보
    getBelong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/lh/belong/detail', this.form, {});
            if (res.rsCode === 0) {
                this.formApproval = Object.assign(Object.assign({}, this.formApproval), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //비밀번호
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal_.create({
                component: _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__.SecurityPasswordComponent,
                backdropDismiss: false,
                cssClass: "security-password-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getItem();
            }
        });
    }
    // 저장(수정)
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.validator.user_phone) {
                if (!this.validator.user_phone.valid)
                    return this.toast.present({ message: this.validator.user_phone.message, color: 'warning' });
            }
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.form.approval_user_id = this.form.user_id;
            this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.BasicSubmit();
                            yield this.BelongSubmit();
                        })
                    }
                ]
            });
        });
    }
    //가입승인
    approval() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal_.create({
                component: _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_9__.ApprovalPopupComponent,
                componentProps: {
                    approval_user_ids: this.formBasic.user_id,
                    user_name: this.formBasic.user_name,
                    state: 'lh'
                },
                cssClass: "approval-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                setTimeout(() => {
                    this._modal_.dismiss('Y');
                }, 0);
            }
        });
    }
    //기본정보 수정
    BasicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/lh/basic/update', Object.assign(Object.assign({}, this.form), this.formBasic), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보 수정
    BelongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/lh/belong/update', Object.assign(Object.assign({}, this.form), this.formApproval), {});
            if (res.rsCode === 0) {
                this._modal_.dismiss('Y');
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
};
LhApprovalEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__.PromiseService }
];
LhApprovalEditPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
LhApprovalEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-lh-approval-edit',
        template: _raw_loader_lh_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lh_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LhApprovalEditPage);



/***/ }),

/***/ 92042:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.page.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxoLWFwcHJvdmFsLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6ImxoLWFwcHJvdmFsLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF2YXRhciB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 24043:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n    <ion-title>LH 가입승인 상세</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n  <app-card color=\"light\" [button]=\"false\">\n    <ion-toolbar slot=\"top\" color=\"white\">\n      <h5>회원정보</h5>\n    </ion-toolbar>\n    <form>\n      <app-avatar \n      name=\"input-profile\"\n      view_type=\"PROFILE\" \n      [(ngModel)]=\"formBasic.user_profile_file_data\" [file]=\"formBasic.file\" [file_json]=\"formBasic.file_json\" [readonly]=\"editable\"></app-avatar>\n      <app-row>\n        <app-col>\n          <app-input name=\"input disabled\" label=\"아이디\" [(ngModel)]=\"formBasic.account_id\" [disabled]=\"true\" [required]=\"true\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input name=\"input\" label=\"성명\" [(ngModel)]=\"formBasic.user_name\" [required]=\"true\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-calendar name=\"calendar\" label=\"생년월일\" [(ngModel)]=\"formBasic.user_birth\" [required]=\"true\"></app-calendar>\n        </app-col>\n        <app-col>\n          <app-radio-input name=\"user_gender\" label=\"성별\"  [(ngModel)]=\"formBasic.user_gender\" [required]=\"true\">\n            <app-radio value=\"남\">남</app-radio>\n            <app-radio value=\"여\">여</app-radio>\n          </app-radio-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input type=\"tel\" name=\"phone-number\" label=\"핸드폰\" [(ngModel)]=\"formBasic.user_phone\" [required]=\"true\" (click)=\"overlapPhone()\">\n            중복확인\n          </app-input>\n          <app-input-caption *ngIf=\"validator.user_phone?.valid === false || validator.user_phone?.message == '성공'\" [color]=\"validator.user_phone?.message == '성공' ? 'primary' : 'warning'\">{{ validator.user_phone?.message == \"성공\" ? \"사용가능한 전화번호 입니다.\" : validator.user_phone?.message }}</app-input-caption>\n        </app-col>\n        <app-col>\n          <app-email name=\"user_email\" label=\"이메일\" [(ngModel)]=\"formBasic.user_email\"\n        [color]=\"validator.user_email?.valid === false && 'warning'\" (delayKeyup)=\"overlapEmail()\"></app-email>\n        <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n        </app-col>\n      </app-row>\n    </form>\n  </app-card>\n  <app-card color=\"light\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h5>소속정보</h5>\n      </ion-toolbar>\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <p>최종 수정일 : {{ formBasic.update_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input [disabled]=\"true\" label=\"업체명\" [(ngModel)]=\"formApproval.company_name\"></app-input>\n        </app-col>\n        <app-col>\n          <app-select-position [company_id]=\"formApproval.company_id\" name=\"직위\" label=\"직위\" [(ngModel)]=\"formApproval.ctgo_job_position_id\" [required]=\"true\"></app-select-position>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <!-- <app-select-organization [(ngModel)]=\"formApproval\"></app-select-organization> -->\n          <app-input label=\"사업지구\" value=\"수원당수\" [disabled]=\"true\"></app-input>\n        </app-col>\n\n        <app-col>\n          <app-select label=\"시스템 권한\" [(ngModel)]=\"formApproval.user_role\">\n            <app-select-option [value]=\"1\">마스터 어드민</app-select-option>\n            <app-select-option [value]=\"0\">일반 관리자</app-select-option>\n          </app-select>\n        </app-col>\n      </app-row>\n      <!-- <app-row>\n        <app-col>\n          <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [all]=\"true\"></app-select-scene>\n        </app-col>\n        <app-col>\n          <app-input-group label=\"현장 공사 기간\">\n          <app-input [(ngModel)]=\"formApproval.construction_start_date\"></app-input>\n          ~\n          <app-input [(ngModel)]=\"formApproval.construction_end_date\"></app-input>\n          </app-input-group>\n        </app-col>\n      </app-row> -->\n    </app-card>\n    <app-button-footer>\n      <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"approval()\">가입승인</app-button>\n      <app-button style=\"width: 120px;\" (click)=\"submit()\">저장</app-button>\n  </app-button-footer>\n</app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_member-management_member-approval-wait_lh-approval-edit_lh-approval-edit-9379c8.js.map