(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_member-management_member-approval-wait_worker-approval-edit_worker-appro-866794"],{

/***/ 46533:
/*!***************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/worker-approval-edit/worker-approval-edit.page.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicItem": () => (/* binding */ BasicItem),
/* harmony export */   "ApprovalItem": () => (/* binding */ ApprovalItem),
/* harmony export */   "HealthItem": () => (/* binding */ HealthItem),
/* harmony export */   "SafeEduItem": () => (/* binding */ SafeEduItem),
/* harmony export */   "SafeEduList": () => (/* binding */ SafeEduList),
/* harmony export */   "WorkerApprovalEditPage": () => (/* binding */ WorkerApprovalEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_worker_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker-approval-edit.page.html */ 41022);
/* harmony import */ var _worker_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-approval-edit.page.scss */ 38185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../approval-popup/approval-popup.component */ 32966);
/* harmony import */ var _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../security-password/security-password.component */ 52346);














//기본정보
class BasicItem {
    constructor() {
        this.user_profile_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileJson();
    }
}
//소속정보
class ApprovalItem {
    constructor() {
        this.certify_file_data = [];
        this.safe_job_data = [];
    }
}
// 건강문진
class HealthItem {
    constructor() {
        this.brain_cure_content = [];
        this.use_drugs_state = 0;
        this.covid_vaccine_state = 0;
        this.vomiting_state = 0;
        this.vomiting_content = '';
        this.covid_nineteen_state = 0;
        this.pain_head_state = 0;
        this.covid_nineteen_content = '';
        this.brain_cure_state = 0;
        this.health_terms_state = 0;
        this.etc_disease_state = 0;
        this.etc_disease_content = '';
        this.create_date = '';
        this.use_drugs_content = '';
        this.pain_head_content = '';
    }
}
//교육정보
class SafeEduItem {
    constructor() {
        this.user_safe_edu_file_data = [];
        this.file_preview = []; // 파일 미리보기
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
    }
}
//교육이력 리스트
class SafeEduList {
    constructor() {
        this.ctgo_education_safe_type = '전체';
    }
}
// export class addSafeJobData {
//   ctgo_safe_job_id: number;
//   safe_job_start_date: string;
// } 
// export class addCertifyData {
//   user_certify_no: string;
// }
let WorkerApprovalEditPage = class WorkerApprovalEditPage {
    constructor(_modal_, connect, user, toast, alert, changeDetector, loading) {
        this._modal_ = _modal_;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.changeDetector = changeDetector;
        this.loading = loading;
        this.editable = false;
        this.form = {
            user_id: this.user.userData.user_id,
            approval_user_id: 0,
            session_company_id: this.user.userData.belong_data.company_id,
            user_manage_session: this.user.memberAuthToken
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.formHealth = new HealthItem();
        this.formSafeEdu = new SafeEduItem();
        this.formSafeList = {
            ctgo_education_safe_type: '전체',
            search_text: '',
            project_id: 0
        };
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new BasicItem()).validator;
        this.menu = 1;
        this.permission = {
            approval: false
        };
    }
    ngOnInit() {
        this.getPermission();
        this.get();
    }
    //권한
    getPermission() {
        if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
            this.permission.approval = true;
        }
        else {
            this.permission.approval = false;
        }
        this.form.user_id = this.item.user_id;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
    }
    //이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_email } = this.formBasic;
            if (!user_email)
                return this.validator.user_email = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/approval/worker/overlap/email', { user_email, user_id });
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
            const res = yield this.connect.run('/usermanage/approval/worker/overlap/phone', { user_phone, user_id });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    //교육이수증
    findFile(view_type) {
        return this.formSafeEdu.file_preview.find(futItem => futItem.view_type === view_type);
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                this.getItem(),
                this.getBelong(),
                this.getSafeEdu(),
                this.getSafeEduList(),
                this.getHealth()
            ]);
            loading.dismiss();
        });
    }
    //기본정보
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/worker/basic/detail', this.form, {
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
            const res = yield this.connect.run('/usermanage/approval/worker/belong/detail', this.form, {
                parse: ['certify_data', 'certify_file_data', 'safe_job_data', 'safe_job_file_data']
            });
            if (res.rsCode === 0) {
                this.formApproval = Object.assign(Object.assign(Object.assign({}, this.formApproval), res.rsObj), { work_contract_type: res.rsObj.work_contract_type || '일용직' });
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
    //교육이력 
    getSafeEdu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/worker/safeedu/detail', this.form, {
                parse: ['user_safe_edu_file_data']
            });
            if (res.rsCode === 0) {
                this.formSafeEdu = Object.assign(Object.assign({}, this.formSafeEdu), res.rsObj);
                console.log("------- asd : ", this.formSafeEdu.file_preview);
                console.log("------- asd 2: ", this.formSafeEdu);
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
                setTimeout(() => {
                    this._modal_.dismiss('Y');
                }, 0);
            }
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
                    state: 'worker'
                },
                cssClass: "approval-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    // this.form.session_company_id = this.user.userData.belong_data.company_id;
                    // this.form.user_manage_session = this.user.memberAuthToken;
                    // this.form.approval_user_id = this.form.user_id;
                    // await this.BasicSubmit();
                    // await this.inputSafeJob.submit();
                    // await this.inputCertify.submit();
                    // await this.BelongSubmit();
                    // await this.SafeEduSubmit();
                    this._modal_.dismiss(data);
                }), 0);
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
                            yield this.inputSafeJob.submit();
                            yield this.inputCertify.submit();
                            yield this.BelongSubmit();
                            yield this.SafeEduSubmit();
                        })
                    }
                ]
            });
        });
    }
    // 기본정보 수정
    BasicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/worker/basic/update', Object.assign(Object.assign({}, this.form), this.formBasic), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    // 소속정보 수정
    BelongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/worker/belong/update', Object.assign(Object.assign({}, this.form), this.formApproval), {});
            if (res.rsCode === 0) {
                console.log("---------- update:", Object.assign(Object.assign({}, this.form), this.formApproval));
                this._modal_.dismiss('Y');
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //교육 수정
    SafeEduSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/approval/worker/safeedu/update', Object.assign(Object.assign({}, this.form), this.formSafeEdu), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //교육이력 리스트불러오기
    getSafeEduList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/approval/worker/edu/list', Object.assign(Object.assign({}, this.form), this.formSafeList), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resSafeList = Object.assign(Object.assign({}, res), this.resSafeList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    //건강문진
    getHealth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/health/get', this.form, {
                parse: ['brain_cure_content']
            });
            if (res.rsCode === 0) {
                this.formHealth = res.rsObj;
            }
        });
    }
};
WorkerApprovalEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
WorkerApprovalEditPage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['inputSafeJob',] }],
    inputCertify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['inputCertify',] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
WorkerApprovalEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-worker-approval-edit',
        template: _raw_loader_worker_approval_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInAnimation],
        styles: [_worker_approval_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkerApprovalEditPage);



/***/ }),

/***/ 38185:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/worker-approval-edit/worker-approval-edit.page.scss ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1hcHByb3ZhbC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUE1QiIsImZpbGUiOiJ3b3JrZXItYXBwcm92YWwtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC1hdmF0YXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ 41022:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-approval-wait/worker-approval-edit/worker-approval-edit.page.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n    <ion-title>작업자 가입승인 상세</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-card color=\"light\" [button]=\"false\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h5>회원정보</h5>\n      </ion-toolbar>\n      <form>\n        <app-avatar \n      name=\"input-profile\"\n      view_type=\"PROFILE\" \n      [(ngModel)]=\"formBasic.user_profile_file_data\" [file]=\"formBasic.file\" [file_json]=\"formBasic.file_json\" [readonly]=\"editable\"></app-avatar>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"아이디\" [(ngModel)]=\"formBasic.account_id\" [disabled]=\"true\" [required]=\"true\">\n            </app-input>\n          </app-col>\n          <app-col>\n            <app-input name=\"input\" label=\"성명\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_name\" [required]=\"true\"></app-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-calendar name=\"calendar\" label=\"생년월일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_birth\" [required]=\"true\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-radio-input name=\"user_gender\" label=\"성별\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_gender\" [required]=\"true\">\n              <app-radio value=\"남\">남</app-radio>\n              <app-radio value=\"여\">여</app-radio>\n            </app-radio-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input name=\"phone-number\" label=\"휴대폰\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_phone\" [required]=\"true\" (click)=\"overlapPhone()\">\n              중복확인\n              </app-input>\n              <app-input-caption *ngIf=\"validator.user_phone?.valid === false || validator.user_phone?.message == '성공'\" [color]=\"validator.user_phone?.message == '성공' ? 'primary' : 'warning'\">{{ validator.user_phone?.message == \"성공\" ? \"사용가능한 전화번호 입니다.\" : validator.user_phone?.message }}</app-input-caption>\n          </app-col>\n          <app-col>\n            <app-select-country name=\"국가\"\n            name=\"ctgo_country_id\"\n            [color]=\"validator.ctgo_country_id?.valid === false && 'warning'\"\n            [disabled]=\"!permission.approval\"\n            [(ngModel)]=\"formBasic.ctgo_country_id\" [required]=\"true\"></app-select-country>\n            <app-input-caption *ngIf=\"validator.ctgo_country_id?.valid === false\" color=\"warning\">{{ validator.ctgo_country_id?.message }}</app-input-caption>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-email name=\"user_email\" label=\"이메일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_email\"\n          [color]=\"validator.user_email?.valid === false && 'warning'\" (delayKeyup)=\"overlapEmail()\"></app-email>\n          <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n          </app-col>\n          <app-col></app-col>\n        </app-row>\n      </form>\n    \n    </app-card>\n    <app-card color=\"light\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <ion-segment color=\"primary\" style=\"max-width: 400px\" [value]=\"1\">\n          <ion-segment-button [value]=\"1\" (click)=\"menu = 1\">소속 정보</ion-segment-button>\n          <ion-segment-button (click)=\"menu = 2\">건강 문진</ion-segment-button>\n          <ion-segment-button (click)=\"menu = 3\">교육 이력</ion-segment-button>\n          <!-- <ion-segment-button (click)=\"menu = 4\">근로 이력</ion-segment-button> -->\n        </ion-segment>\n\n      </ion-toolbar>\n\n      <div [style.display]=\"menu === 1 ? 'block' : 'none'\">\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n          </app-col>\n        </app-row>\n        <h5>소속정보</h5>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"업체명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.company_name\"></app-input>\n          </app-col>\n          <app-col>\n            <app-select-position [company_id]=\"formApproval.company_id\" name=\"직위\" label=\"직위\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_job_position_id\" [required]=\"true\"></app-select-position>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"현장명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.project_name\"></app-input>\n          </app-col>\n          <app-col>\n            <app-select-construction [master_company_id]=\"formApproval.master_company_id\" [project_id]=\"formApproval.project_id\" name=\"공종\" label=\"공종\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_construction_id\"></app-select-construction>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-radio-input name=\"계약유형\" label=\"계약유형\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.work_contract_type\">\n              <app-radio value=\"상용직\">상용직</app-radio>\n              <app-radio value=\"일용직\">일용직</app-radio>\n            </app-radio-input>\n          </app-col>\n          <app-col>\n            <app-select-occupation name=\"직종\" [company_id]=\"formApproval.company_id\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_occupation_id\"></app-select-occupation>\n          </app-col>\n        </app-row>\n\n        <app-input-safejob #inputSafeJob\n        [project_id]=\"formApproval.project_id\"\n        [company_id]=\"formApproval.company_id\"\n        [user_type]=\"'WORKER'\"\n        insert_url=\"/usermanage/approval/worker/safejob/insert\"\n        update_url=\"/usermanage/approval/worker/safejob/update\"\n        delete_url=\"/usermanage/approval/worker/safejob/delete\"\n        [params]=\"this.form\"\n        [(ngModel)]=\"formApproval.safe_job_data\" [disabled]=\"!permission.approval\"></app-input-safejob>\n        <h5>자격정보</h5>\n        <app-input-certify #inputCertify\n        insert_url=\"/usermanage/approval/worker/certify/insert\"\n        update_url=\"/usermanage/approval/worker/certify/update\"\n        delete_url=\"/usermanage/approval/worker/certify/delete\"\n        [params]=\"this.form\"\n        [(ngModel)]=\"formApproval.certify_data\" [disabled]=\"!permission.approval\"></app-input-certify>\n\n        <!-- <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" style=\"width: 120px;\">정보 불러오기</app-button>\n          </app-col>\n        </app-row> -->\n      </div>\n      <div [style.display]=\"menu === 2 ? 'block' : 'none'\">\n        <!-- 건강문진 -->\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <h5>건강 문진 결과</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <p>작성일 : {{ formHealth.create_date }}</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col></app-col>\n        </app-row>\n          <h5>1. 현재 복용하고 있는 약물이 있습니까?</h5>\n          <app-radio-input [value]=\"formHealth.use_drugs_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n          <app-input name=\"약물명을 입력해주세요.\" placeholder=\"약물명을 입력해주세요.\" \n          [readonly]=\"true\" *ngIf=\"formHealth.use_drugs_state\" \n          [(ngModel)]=\"formHealth.use_drugs_content\"></app-input>\n\n          <h5>2. 과거나 현재 뇌, 심혈관질환으로 치료를 받았거나 받고 있습니까?</h5>\n          <app-radio-input name=\"brain_cure_state\" [(ngModel)]=\"formHealth.brain_cure_state\"> \n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n\n          <div @fadeInAnimation *ngIf=\"formHealth.brain_cure_state\">\n            * 해당하는 항목에 체크해주세요\n            <app-input-template>\n              <app-check-group slot=\"input\" name=\"brain_cure_content\" \n              [(ngModel)]=\"formHealth.brain_cure_content\">\n                <app-check on=\"뇌졸중\" [disabled]=\"true\">뇌졸중</app-check>\n                <app-check on=\"뇌출혈\" [disabled]=\"true\">뇌출혈</app-check>\n                <app-check on=\"협심증\" [disabled]=\"true\">협심증</app-check>\n                <app-check on=\"심근경색\" [disabled]=\"true\">심근경색</app-check>\n                <app-check on=\"간질발작\" [disabled]=\"true\">간질발작</app-check>\n              </app-check-group>\n            </app-input-template>\n          </div>\n\n          <h5>3. 최근 가슴을 쥐어짜는 통증,오심,구토 증상을 겪은 적이 있습니까?</h5>\n          <app-radio-input [value]=\"formHealth.vomiting_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n          <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" \n          [readonly]=\"true\" *ngIf=\"formHealth.vomiting_state\" \n          [value]=\"formHealth.vomiting_content\"></app-input>\n\n          <h5>4. 최근 갑자기 한쪽 팔,다리에 힘이 빠지거나 말이 어눌하게 나오거나 두통,어지러운 증상을 겪은적이 있습니까?</h5>\n          <app-radio-input [value]=\"formHealth.pain_head_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n          <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" \n          [readonly]=\"true\" *ngIf=\"formHealth.pain_head_content\" \n          [value]=\"formHealth.pain_head_content\"></app-input>\n\n          <h5>5. 현재 기타질병(당뇨,간장질환,폐질환 등)으로 치료를 받고 있습니까?</h5>\n          <app-radio-input [value]=\"formHealth.etc_disease_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n          <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" \n          *ngIf=\"formHealth.etc_disease_state\" \n          [value]=\"formHealth.etc_disease_content\"></app-input>\n\n          <h5>6. 본인이 코로나19가 의심되는 아래의 임상증상이 있습니까?(*주요 임상증상)체온 37.5도 이상,기침,호흡곤란,오한,근육통,두통,인후통,후각미각 소실 또는 폐렴\n            (단,코로나19와 관계없이 평소의 기저질환으로 인한 증상인 경우는 제외)\n          </h5>\n          <app-radio-input [value]=\"formHealth.covid_nineteen_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n          </app-radio-input>\n          <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" \n          *ngIf=\"formHealth.covid_nineteen_state\" \n          [value]=\"formHealth.covid_nineteen_content\"></app-input>\n\n          <h5>7. 코로나 백신 접종을 하셨습니까?</h5>\n          <app-radio-input [value]=\"formHealth.covid_nineteen_state\">\n            <app-radio [value]=\"0\" [disabled]=\"true\">미접종</app-radio>\n            <app-radio [value]=\"1\" [disabled]=\"true\">접종</app-radio>\n          </app-radio-input>\n      </div>\n      <div [style.display]=\"menu === 3 ? 'block' : 'none'\">\n        <!-- 교육이력 -->\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n          </app-col>\n        </app-row>\n        <h5>교육 정보</h5>\n        <!-- <app-row>\n          <app-col>\n              <app-calendar label=\"기초 안전 보건 교육 이수일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeEdu.basic_safe_edu_date\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-input-template label=\"기초안전보건교육 이수증\" [disabled]=\"!permission.approval\">\n              <p *ngIf=\"!findFile('BASIC_SAFE_EDU') else tempBasicSafeEduValue\" slot=\"input\"></p>\n              <ng-template #tempBasicSafeEduValue>\n                <ion-text color=\"dark\" slot=\"input\">{{ findFile('BASIC_SAFE_EDU').file_name }}</ion-text>\n              </ng-template>\n              <app-file name=\"input-basic_safe_edu\" [(ngModel)]=\"formSafeEdu.file_preview\" view_type=\"BASIC_SAFE_EDU\" [file]=\"formSafeEdu.file\" [file_json]=\"formSafeEdu.file_json\"></app-file>\n            </app-input-template>\n          </app-col>\n        </app-row> -->\n        <app-row>\n          <app-col>\n            <app-calendar label=\"기초 안전 보건 교육 이수일\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formSafeEdu.basic_safe_edu_date\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-input-template label=\"기초안전보건교육 이수증\" [disabled]=\"!permission.approval\">\n              <p *ngIf=\"!formSafeEdu.user_safe_edu_file_data?.[0] else tempBasicSafeEduValue\" slot=\"input\">기초안전보건교육 이수증</p>\n              <ng-template #tempBasicSafeEduValue>\n                <ion-text color=\"dark\" slot=\"input\">{{ formSafeEdu.user_safe_edu_file_data[0].file_name }}</ion-text>\n              </ng-template>\n              파일찾기\n              <app-file name=\"input-basic_safe_edu\" [(ngModel)]=\"formSafeEdu.user_safe_edu_file_data\" view_type=\"BASIC_SAFE_EDU\"\n                [file]=\"formSafeEdu.file\" [file_json]=\"formSafeEdu.file_json\"></app-file>\n            </app-input-template>\n          </app-col>\n        </app-row>\n        <app-file-preview *ngFor=\"let futItem of formSafeEdu.user_safe_edu_file_data; let i = index;\" [futItem]=\"futItem\" (buttonClick)=\"formSafeEdu.user_safe_edu_file_data.splice(i, 1)\"></app-file-preview>\n\n        <app-row>\n          <app-col>\n            <app-select-scene [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.project_id\"></app-select-scene>\n          </app-col>\n          <!-- <app-col>\n            <app-select label=\"교육구분\" [(ngModel)]=\"form.ctgo_education_safe_type\">\n              <app-select-option type=\"all\" value=\"전체\">전체</app-select-option>\n              <app-select-option value=\"특별\">특별</app-select-option>\n              <app-select-option value=\"정기\">정기</app-select-option>\n              <app-select-option value=\"작업 변경시\">작업 변경시</app-select-option>\n            </app-select>\n          </app-col> -->\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input label=\"검색어\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.search_text\" placeholder=\"교육명을 입력해 주세요.\">\n            <app-img name=\"search\" (click)=\"getSafeEduList()\"></app-img>\n          </app-input>\n          </app-col>\n        </app-row>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th>NO</th>\n              <th>교육명</th>\n              <th>이수일</th>\n              <th>이수시간</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resSafeList?.rsMap let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_education_safe_title }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.education_safe_time }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </div>\n    </app-card>\n    <app-button-footer *ngIf=\"permission.approval\">\n        <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"approval()\">가입승인</app-button>\n        <app-button style=\"width: 120px;\" (click)=\"submit()\">저장</app-button>\n    </app-button-footer>\n  </app-container>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_member-management_member-approval-wait_worker-approval-edit_worker-appro-866794.js.map