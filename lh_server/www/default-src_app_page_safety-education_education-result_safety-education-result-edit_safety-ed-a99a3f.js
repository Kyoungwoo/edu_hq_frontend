(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_safety-education_education-result_safety-education-result-edit_safety-ed-a99a3f"],{

/***/ 33712:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit-routing.module.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationResultEditPageRoutingModule": () => (/* binding */ SafetyEducationResultEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-result-edit.page */ 30020);




const routes = [
    {
        path: '',
        component: _safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationResultEditPage
    }
];
let SafetyEducationResultEditPageRoutingModule = class SafetyEducationResultEditPageRoutingModule {
};
SafetyEducationResultEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationResultEditPageRoutingModule);



/***/ }),

/***/ 5551:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationResultEditPageModule": () => (/* binding */ SafetyEducationResultEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_result_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-result-edit-routing.module */ 33712);
/* harmony import */ var _safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-result-edit.page */ 30020);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let SafetyEducationResultEditPageModule = class SafetyEducationResultEditPageModule {
};
SafetyEducationResultEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _safety_education_result_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationResultEditPageRoutingModule
        ],
        declarations: [_safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationResultEditPage]
    })
], SafetyEducationResultEditPageModule);



/***/ }),

/***/ 30020:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.page.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationItem": () => (/* binding */ EducationItem),
/* harmony export */   "SafetyEducationResultEditPage": () => (/* binding */ SafetyEducationResultEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_result_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-result-edit.page.html */ 56276);
/* harmony import */ var _safety_education_result_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-result-edit.page.scss */ 15657);
/* harmony import */ var _basic_service_util_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/util/excel.service */ 95534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);














class EducationItem {
    constructor() {
        this.company_file_data = [];
        this.education_safe_file_data = [];
        this.file = []; // FILE
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__.FileJson(); // JSON
        this.approval_default_data = [];
    }
}
let SafetyEducationResultEditPage = class SafetyEducationResultEditPage {
    constructor(connect, toast, date, user, _modal, loading, languagePack, excel) {
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.user = user;
        this._modal = _modal;
        this.loading = loading;
        this.languagePack = languagePack;
        this.excel = excel;
        this.form = new EducationItem();
        this.permission = {
            edit: true
        };
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.education_safe_id = (_a = this.item) === null || _a === void 0 ? void 0 : _a.education_safe_id;
            if (this.item) {
                this.form.education_safe_report_instructor = this.item.education_safe_instructor;
                this.form.education_safe_report_text = this.item.ctgo_education_safe_text;
                yield this.getDefaultItem();
                this.newReportList();
            }
            if (this.education_safe_report_id) {
                this.getItem();
                this.reportList();
            }
            // 나머지 정보
            this.form.ctgo_education_safe_type_text = this.getTypeText(this.form.ctgo_education_safe_type);
            // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
            this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.ctgo_education_safe_type);
        });
    }
    /**
     * 교육 리포트가 없을 경우
     */
    getDefaultItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.approval_default_data.push({
                default_type: 'REFER',
                answer_datas: [{
                        answer_user_id: this.user.userData.user_id,
                        approval_last_state: 0,
                        approval_order_no: 1
                    }],
                refer_datas: [{
                        refer_user_id: this.user.userData.user_id
                    }]
            });
            const res = yield this.connect.run('/education/detail', { education_safe_id: this.item.education_safe_id }, {
                parse: ['education_safe_manager_names', 'education_safe_manager_ids', 'education_safe_file_data', 'company_file_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                this.form.education_safe_report_text = res.rsObj.education_safe_text;
                // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
            }
            else {
                this.toast.present({ message: res.rsMsg, color: 'warning' });
            }
        });
    }
    /**
     * 교육 리포트가 있을 경우
     */
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/report/get', { education_safe_report_id: this.education_safe_report_id }, {
                parse: ['education_safe_report_file_data', 'education_safe_file_data', 'company_file_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
            }
            else {
                this.toast.present({ message: res.rsMsg, color: 'warning' });
            }
        });
    }
    //참석자 목록
    reportList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/education/report/attendant/list', { education_safe_report_id: this.education_safe_report_id });
            if (this.res.rsCode === 0) {
            }
        });
    }
    newReportList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("this.education_safe_report_id", this.item.education_safe_id);
            this.res = yield this.connect.run('/education/attendant/list', { education_safe_id: this.item.education_safe_id, search_text: '' });
            console.log("this.res", this.res);
            if (this.res.rsCode === 0) {
            }
        });
    }
    /**
     * 회의록 텍스트 가져오기
     */
    getTypeText(ctgo_education_safe_type) {
        switch (ctgo_education_safe_type) {
            case '채용시':
                return '교육 결과 보고서 (채용시)';
            case '정기':
                return '교육 결과 보고서 (작업자 정기)';
            case '관리감독자정기': // => 1차에 안들어감
                return '교육 결과 보고서 (관리감독자 정기)';
            case '작업변경시':
                return '교육 결과 보고서 (작업 내용 변경 시)';
            case '특별':
                return '교육 결과 보고서 (특별 교육)';
        }
    }
    /**
     * 교육결과 보고서 아이디 가져오기
     */
    getApprovalModuleId(ctgo_education_safe_type) {
        switch (ctgo_education_safe_type) {
            case '채용시':
                return 1;
            case '정기':
                return 2;
            case '관리감독자정기': // => 1차에 안들어감
                return 3;
            case '작업변경시':
                return 4;
            case '특별':
                return 5;
        }
    }
    /**
     * 삭제 버튼 클릭
     */
    onDeleteClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
            const res = yield ev.delete();
            if (res.rsCode === 0) {
                this._modal.dismiss(true);
                // 목록을 새로고침 해줘야 함
                window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
                window.dispatchEvent(new CustomEvent('approval-list:get()'));
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * 임시 저장버튼 클릭
     */
    onSaveClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const approval_data = ev.approval_data;
            // if(!this.form.education_safe_report_instructor) { this.toast.present({ color: 'warning', message: '강사명이 없습니다.' }); return; }
            // if(!this.form.education_safe_report_text) { this.toast.present({ color: 'warning', message: '결과 보고를 작성해 주세요.' }); return; }
            this.form.approval_cnt_answer = '임시저장';
            this.form.approval_default_data = approval_data;
            console.log("this.form", this.form);
            let url = '';
            if (!this.form.approval_id) {
                url = '/education/report/insert';
            }
            else {
                url = '/education/report/update';
            }
            const res = yield this.connect.run(url, this.form, { loading: true });
            if (res.rsCode === 0) {
                this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
                if (!this.form.approval_id) {
                    // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
                    this.form.approval_id = res.rsObj.approval_id;
                    this.form.education_safe_report_id = res.rsObj.education_safe_report_id;
                    // 목록을 새로고침 해줘야 함
                    window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                    window.dispatchEvent(new CustomEvent('approval-list:get()'));
                }
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * 결재 요청 버튼 클릭
     */
    onSendClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const approval_data = ev.approval_data;
            if (!this.form.education_safe_report_instructor) {
                this.toast.present({ color: 'warning', message: '강사명이 없습니다.' });
                return;
            }
            if (!this.form.education_safe_report_text) {
                this.toast.present({ color: 'warning', message: '교육 내용을 입력해주세요.' });
                return;
            }
            this.form.approval_cnt_answer = '결재중';
            this.form.approval_default_data = approval_data;
            console.log("this.form", this.form);
            if (!this.form.approval_id) {
                // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
                const res = yield this.connect.run('/education/report/insert', this.form, { loading: true });
                if (res.rsCode === 0) {
                    this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
                    this._modal.dismiss(true);
                    // 목록을 새로고침 해줘야 함
                    window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                    window.dispatchEvent(new CustomEvent('approval-list:get()'));
                }
                else {
                    this.toast.present({ color: 'warning', message: res.rsMsg });
                }
            }
            else {
                /**
                 * 임시저장을 한 상태에서는 approval에서 따로 결재 요청(ev.send()) 처리한다.
                 * 순서상, update 후 결재 요청을 욜리는 것이 맞다고 생각된다.
                 */
                const loading = yield this.loading.present();
                const res = yield this.connect.run('/education/report/update', this.form);
                if (res.rsCode === 0) {
                    const approvalRes = yield ev.send();
                    if (approvalRes.rsCode === 0) {
                        this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
                        this._modal.dismiss(true);
                        // 목록을 새로고침 해줘야 함
                        window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                        window.dispatchEvent(new CustomEvent('approval-list:get()'));
                    }
                    else {
                        this.toast.present({ color: 'warning', message: approvalRes.rsMsg });
                    }
                }
                else {
                    this.toast.present({ color: 'warning', message: res.rsMsg });
                }
                loading.dismiss();
            }
        });
    }
    /**
     * 결재 회수 버튼 클릭
     */
    onRecoveryClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield ev.recovery();
            if (res.rsCode === 0) {
                // 목록을 새로고침 해줘야 함
                window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                window.dispatchEvent(new CustomEvent('approval-list:get()'));
            }
        });
    }
    /**
     * 결재 버튼 클릭
     */
    onApprovalClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield ev.approval();
            if (res.rsCode === 0) {
                this._modal.dismiss();
                // 목록을 새로고침 해줘야 함
                window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
                window.dispatchEvent(new CustomEvent('approval-list:get()'));
            }
        });
    }
    /**
     * 결재 상태가 변할 때 행동
     */
    onApprovalChange(ev) {
        if (ev.btnList.includes('임시저장')) {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
        /** 결재자들을 가지고 온다.(모바일 화면 용) */
        this.approval_answer = ev.approval_data[0].answer_datas;
        /** 결재자 의견을 가지고 온다. */
        this.approval_comment = ev.approval_comment;
        /** 모바일 화면에서는 테이블 편집이 안된다. */
        if (window.innerWidth <= 768) {
            this.permission.edit = false;
        }
    }
    excel_download() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // const print_date = this.dateService.today();
            const headerBorder = '1px solid #000000';
            const backgroundColor = '#d9d9d9';
            const excelData = [];
            const logo = {
                border: headerBorder,
                textAlign: 'center',
                fontSize: 18,
                width: 100,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const logo_theme = {
                width: 100,
                border: headerBorder,
                textAlign: 'left',
                fontSize: 18,
                height: 45,
                verticalAlign: "top",
                whiteSpace: 'normal'
            };
            const logo_theme_2 = {
                width: 100,
                border: headerBorder,
                textAlign: 'left',
                fontSize: 20,
                height: 45,
                verticalAlign: "top",
                whiteSpace: 'normal'
            };
            const title_1 = {
                width: 100,
                border: headerBorder,
                textAlign: 'center',
                height: 45,
                // width: 80,
                fontSize: 30,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const title_2 = {
                width: 100,
                height: 45,
                border: headerBorder,
                textAlign: 'center',
                // width: 40,
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const title_3 = {
                width: 100,
                height: 45,
                border: headerBorder,
                textAlign: 'center',
                // width: 200,
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const title_4 = {
                width: 100,
                height: 45,
                border: headerBorder,
                textAlign: 'center',
                // width: 60,
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const border_1 = {
                width: 100,
                height: 45,
                border: headerBorder,
                textAlign: 'center',
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const border_1_left = {
                width: 100,
                height: 45,
                border: headerBorder,
                textAlign: 'left',
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const border_2 = {
                width: 100,
                border: headerBorder,
                height: 45,
                fontSize: 18,
                textAlign: 'center',
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const approval_1 = {
                width: 100,
                height: 45,
                border: headerBorder,
                backgroundColor,
                textAlign: 'center',
                // width: 80,
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const approval_2 = {
                width: 100,
                border: headerBorder,
                textAlign: 'center',
                // width: 80,
                height: 45,
                fontSize: 18,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_1 = {
                width: 100,
                border: headerBorder,
                backgroundColor,
                textAlign: 'center',
                fontSize: 18,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_2 = {
                width: 100,
                border: headerBorder,
                backgroundColor,
                textAlign: 'center',
                fontSize: 18,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_1_user = {
                width: 100,
                border: headerBorder,
                backgroundColor,
                textAlign: 'center',
                fontSize: 18,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_2_user = {
                width: 100,
                border: headerBorder,
                textAlign: 'center',
                fontSize: 18,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_4 = {
                width: 100,
                border: headerBorder,
                textAlign: 'center',
                fontSize: 18,
                height: 45,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            const sub_title_5 = {
                width: 200,
                // border: headerBorder,
                textAlign: 'center',
                fontSize: 18,
                height: 85,
                verticalAlign: "middle",
                whiteSpace: 'normal'
            };
            let logo_theme_arr = [];
            for (let i = 0; i < 12; i++)
                logo_theme_arr.push({ code: logo_theme });
            let logo_theme_arr_3 = [];
            for (let i = 0; i < 12; i++)
                logo_theme_arr_3.push({ code: logo_theme_2 });
            let logo_theme_arr_2 = [];
            for (let i = 0; i < 8; i++)
                logo_theme_arr_2.push({ code: logo_theme });
            for (let i = 0; i < 4; i++)
                logo_theme_arr_2.push({ code: approval_2 });
            let sub_title_theme_arr = [];
            for (let i = 0; i < 12; i++)
                sub_title_theme_arr.push({ code: sub_title_2 });
            let sub_title_theme_arr_2 = [];
            for (let i = 0; i < 12; i++)
                sub_title_theme_arr_2.push({ code: sub_title_4 });
            let border_theme_arr = [];
            for (let i = 0; i < 12; i++)
                border_theme_arr.push({ code: border_2 });
            // let sheetData:Sheet = {
            // };
            // 45
            let sheetData = {
                name: '교육 결과 보고서',
                data: [
                    [
                        { colspan: 2, rowspan: 4 },
                        { text: '교육결과보고서', colspan: 5, rowspan: 4 },
                        { rowspan: 4, text: '결재' },
                        { text: '검토' },
                        { text: '검토' },
                        { text: '검토' },
                        { text: '승인' }
                    ],
                    [
                        { rowspan: 3 },
                        { rowspan: 3 },
                        { rowspan: 3 },
                        { rowspan: 3 }
                    ],
                    [],
                    [],
                    [
                        { text: '현장명' },
                        { text: this.form.project_name, colspan: 4 },
                        { text: '회사명' },
                        { text: this.form.company_name, colspan: 3 },
                        { text: '작성일' },
                        { text: this.form.create_date, colspan: 2 },
                    ],
                    [
                        { text: '교육명' },
                        { text: this.form.ctgo_education_safe_name, colspan: 11 },
                    ],
                    [
                        { text: '교육장소' },
                        { text: this.form.education_safe_place, colspan: 4 },
                        { text: '교육일' },
                        { text: this.form.education_safe_date, colspan: 3 },
                        { text: '교육시간' },
                        { text: this.form.education_safe_start_time + ' ~ ' + this.form.education_safe_end_time + '(' + this.form.education_safe_time + 'H)', colspan: 2 },
                    ],
                    [
                        { text: '교육대상' },
                        { text: this.form.education_safe_target, colspan: 4 },
                        { text: '강사' },
                        { text: this.form.education_safe_report_instructor, colspan: 3 },
                        { text: '작성자' },
                        { text: this.form.user_name, colspan: 2 }
                    ],
                    [
                        { text: '교육내용', colspan: 12 },
                    ],
                    [
                        { text: this.form.education_safe_text, colspan: 12, rowspan: 25 },
                    ],
                    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                    [], [], [], [],
                    [
                        { text: '사진', colspan: 6 },
                        { text: '사진', colspan: 6 },
                    ],
                    [
                        { colspan: 6, rowspan: 18 },
                        { colspan: 6, rowspan: 18 },
                    ]
                ],
                style: [
                    [{ code: logo }, { code: logo }, { code: title_1 }, { code: title_1 }, { code: title_1 }, { code: title_1 }, { code: title_1 }, { code: approval_1 }, { code: approval_1 }, { code: approval_1 }, { code: approval_1 }, { code: approval_1 }],
                    logo_theme_arr_2, logo_theme_arr_2, logo_theme_arr_2,
                    [{ code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }],
                    [{ code: sub_title_1 }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }, { code: border_1_left }],
                    [{ code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }],
                    [{ code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }, { code: border_1 }, { code: sub_title_1 }, { code: border_1 }, { code: border_1 }],
                    sub_title_theme_arr,
                    logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3,
                    logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3, logo_theme_arr_3,
                    sub_title_theme_arr,
                    logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr, logo_theme_arr
                ]
            };
            let sheetData_user_list = {
                name: '참석자명단',
                data: [
                    [
                        { colspan: 8, text: '참석자 명단' }
                    ],
                    [
                        { text: '교육명' },
                        { text: this.form.ctgo_education_safe_name, colspan: 5 },
                        { text: '교육일' },
                        { text: this.form.education_safe_date }
                    ],
                    [
                        { text: 'No' },
                        { text: '회사명' },
                        { text: '성명' },
                        { text: '서명일시' },
                        { text: 'No' },
                        { text: '회사명' },
                        { text: '성명' },
                        { text: '서명일시' },
                    ],
                ],
                style: [
                    [
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 },
                        { code: sub_title_5 }
                    ],
                    [
                        { code: sub_title_2 },
                        { code: border_1_left },
                        { code: border_1_left },
                        { code: border_1_left },
                        { code: border_1_left },
                        { code: border_1_left },
                        { code: sub_title_2 },
                        { code: sub_title_2_user }
                    ],
                    [
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                        { code: sub_title_2 },
                    ],
                    // 리스트 들어가는곳
                ],
                custom_col: [100, 200, 120, 200, 100, 200, 120, 200]
            };
            // 결재 데이터
            const reverse_comment = this.approval_comment.reverse();
            let approval_max_num = 3;
            reverse_comment.map((item, index) => {
                sheetData.data[1][approval_max_num - index] = { text: item.user_name + '\n' + item.approval_answer + (item.approval_date ? '\n' + item.approval_date : ''), rowspan: 3 };
            });
            // 참석자명단 리스트 데이터
            let change_cnt = 0;
            let list_theme_arr_num = ((_a = this.res.rsMap) === null || _a === void 0 ? void 0 : _a.length) > 50 ? Math.ceil((this.res.rsMap.length / 2)) : 25;
            for (let i = 0; i < list_theme_arr_num; i++) {
                let item_arr = [];
                for (let x = 0; x < 1; x++) {
                    if (change_cnt % 2 === 0) {
                        if (((_b = this.res.rsMap) === null || _b === void 0 ? void 0 : _b.length) > change_cnt)
                            item_arr.push({ text: change_cnt + 1 }, { text: (_d = (_c = this.res) === null || _c === void 0 ? void 0 : _c.rsMap[change_cnt]) === null || _d === void 0 ? void 0 : _d.company_name }, { text: (_f = (_e = this.res) === null || _e === void 0 ? void 0 : _e.rsMap[change_cnt]) === null || _f === void 0 ? void 0 : _f.user_name }, { text: (_h = (_g = this.res) === null || _g === void 0 ? void 0 : _g.rsMap[change_cnt]) === null || _h === void 0 ? void 0 : _h.create_date });
                        else
                            item_arr.push({ text: change_cnt + 1 }, { text: '' }, { text: '' }, { text: '' });
                    }
                    change_cnt++;
                    if (change_cnt % 2 !== 0) {
                        if (((_j = this.res.rsMap) === null || _j === void 0 ? void 0 : _j.length) > change_cnt)
                            item_arr.push({ text: change_cnt + 1 }, { text: (_l = (_k = this.res) === null || _k === void 0 ? void 0 : _k.rsMap[change_cnt]) === null || _l === void 0 ? void 0 : _l.company_name }, { text: (_o = (_m = this.res) === null || _m === void 0 ? void 0 : _m.rsMap[change_cnt]) === null || _o === void 0 ? void 0 : _o.user_name }, { text: (_q = (_p = this.res) === null || _p === void 0 ? void 0 : _p.rsMap[change_cnt]) === null || _q === void 0 ? void 0 : _q.create_date });
                        else
                            item_arr.push({ text: change_cnt + 1 }, { text: '' }, { text: '' }, { text: '' });
                    }
                    change_cnt++;
                }
                sheetData_user_list.data.push(item_arr);
                sheetData_user_list.style.push([
                    { code: sub_title_1_user },
                    { code: sub_title_2_user },
                    { code: sub_title_2_user },
                    { code: sub_title_2_user },
                    { code: sub_title_1_user },
                    { code: sub_title_2_user },
                    { code: sub_title_2_user },
                    { code: sub_title_2_user }
                ]);
            }
            // sheetData_user_list.data.push(list_theme_arr);
            // console.log('sheetData_user_list - ',sheetData_user_list);
            // 참석자명단 리스트 데이터
            // const user_list = this.approval_comment.reverse();
            // reverse_comment.map((item,index) => {
            //   sheetData.data[1][approval_max_num - index] = {text: item.user_name+'\n'+item.approval_answer+(item.approval_date ? '\n'+item.approval_date : ''), rowspan: 3};
            // });
            // 평가표와 결재의경사이의 공백
            // for(let i = 0; i < 4; i++){
            //   sheetData.data.push([]);
            //   sheetData.style.push([]);
            // }
            // sheetData.data.push([{text: '결재 의견', colspan: 2}]);
            // sheetData.data.push([{text: '구분', colspan: 2},{text: '결재', colspan: 2},{text: '성명', colspan: 3},{text: '회사명', colspan: 2},{text: '결재일시', colspan: 2},{text: '결재의견', colspan: 10}]);
            // sheetData.style.push([{code: sub_title_3}]);
            // sheetData.style.push(sub_title_theme_arr);
            // 결재 의견 리스트
            // let cmt_min = 0;
            // let cmt_max = 0;
            // let order_arr = [];
            // const aprv_cmt = this.approval_comment.reverse();
            // aprv_cmt.map((item) => {order_arr.push(item.approval_order_no);});
            // cmt_min = Math.min.apply(null, order_arr);
            // cmt_max = Math.max(...order_arr);
            // aprv_cmt.map((item) => {
            //   sheetData.data.push([{
            //     text: item.approval_order_no === cmt_min ? (item.approval_order_no === cmt_max ? '작성/승인' : '작성') : (item.approval_order_no === cmt_max ? '승인' : '검토'), colspan: 2},
            //     {text: item.approval_answer, colspan: 2},
            //     {text: item.user_name, colspan: 3},
            //     {text: item.company_name, colspan: 2},
            //     {text: item.approval_date, colspan: 2},
            //     {text: item.approval_comment || '', colspan: 10
            //   }]);
            //   sheetData.style.push(sub_title_theme_arr_2);
            // });
            // 회사 로고 이미지데이터
            if (this.form.company_file_data && this.form.company_file_data.length) {
                sheetData.data[0][0] = { img: { src: this.form.company_file_data[0].full_url.toString(), height: 150, width: 210, left: 8, top: 8 }, rowspan: 4, colspan: 2 };
            }
            // 회의 사진 데이터
            if (this.form.education_safe_file_data && this.form.education_safe_file_data.length) {
                sheetData.data[35][0] = { img: { src: (_r = this.form.education_safe_file_data[0]) === null || _r === void 0 ? void 0 : _r.full_url.toString(), height: 650, width: 680, left: 8, top: 8 }, rowspan: 18, colspan: 6 };
                sheetData.data[35][1] = { img: { src: (_s = this.form.education_safe_file_data[1]) === null || _s === void 0 ? void 0 : _s.full_url.toString(), height: 650, width: 680, left: 8, top: 8 }, rowspan: 18, colspan: 6 };
            }
            // img?: {
            //   src:string,
            //   left?:number,
            //   top?:number,
            //   width?:number,
            //   height?:number
            // }
            // let item of approval_comment; let f = first; let l = last
            excelData.push(sheetData);
            excelData.push(sheetData_user_list);
            // console.log(this.riskTableList);
            this.excel.make(excelData, '교육 결과 보고서');
        });
    }
};
SafetyEducationResultEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_6__.LanguagePackService },
    { type: _basic_service_util_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService }
];
SafetyEducationResultEditPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    education_safe_report_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
SafetyEducationResultEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-safety-education-result-edit',
        template: _raw_loader_safety_education_result_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInAnimation],
        styles: [_safety_education_result_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationResultEditPage);



/***/ }),

/***/ 15657:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.page.scss ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktZWR1Y2F0aW9uLXJlc3VsdC1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 56276:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar *mobileHidden>\n    <ion-title>\n      <h4>교육 결과 보고</h4>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>교육 결과 보고</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-row>\n    <app-col *mobileHidden size=\"auto\" style=\"display: flex; align-self: flex-start;\" size=\"auto\"><app-button (click)=\"excel_download()\">엑셀 다운로드</app-button></app-col>\n    <app-col *mobileHidden></app-col>\n    <app-col>\n      <app-approval \n      [project_id]=\"form.project_id\"\n      [company_id]=\"form.company_id\"\n      [ctgo_approval_module_id]=\"form.ctgo_approval_module_id\"\n      [approval_id]=\"form.approval_id\"\n      (deleteClick)=\"onDeleteClick($event)\"\n      (saveClick)=\"onSaveClick($event)\"\n      (sendClick)=\"onSendClick($event)\"\n      (recoveryClick)=\"onRecoveryClick($event)\"\n      (approvalClick)=\"onApprovalClick($event)\"\n      (change)=\"onApprovalChange($event)\"></app-approval>\n    </app-col>\n  </app-row>\n\n\n  <app-approval-document>\n\n    <h2>교육 결과 보고</h2>\n\n    <app-approval-template *mobileShow [approval_answer]=\"approval_answer\"></app-approval-template>\n\n    <app-row>\n      <app-col>\n        <h4>기본 정보</h4>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <app-input [disabled]=\"true\" [(ngModel)]=\"form.project_name\" label=\"현장명\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input [disabled]=\"true\" label=\"업체명\" [(ngModel)]=\"form.company_name\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input-template label=\"작성일\" [disabled]=\"true\">\n          <p slot=\"input\">{{ form.create_date }} ({{ date.day(form.create_date) }})</p>\n        </app-input-template>\n      </app-col>\n      <app-col>\n        <app-input-template label=\"작성자\" [disabled]=\"true\">\n          <p slot=\"input\">{{ form.user_name }}</p>\n        </app-input-template>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"9\">\n        <app-input [disabled]=\"true\" [(ngModel)]=\"form.ctgo_education_safe_name\" label=\"교육명\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input [disabled]=\"true\" label=\"교육대상\" [(ngModel)]=\"form.education_safe_target\"></app-input>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <app-input [disabled]=\"true\" label=\"교육장소\" [(ngModel)]=\"form.education_safe_place\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input-template label=\"교육일\" [disabled]=\"true\">\n          <p slot=\"input\">{{ form.education_safe_date }} ({{ date.day(form.education_safe_date) }})</p>\n        </app-input-template>\n      </app-col>\n      <app-col>\n        <app-input-template label=\"교육시간\" [disabled]=\"true\">\n          <p slot=\"input\">{{ form.education_safe_start_time }} ~ {{ form.education_safe_end_time }} ({{ form.education_safe_time }}H)</p>\n        </app-input-template>\n      </app-col>\n      <app-col>\n        <app-input label=\"강사\" [(ngModel)]=\"form.education_safe_report_instructor\" [disabled]=\"!permission.edit\"></app-input>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <h4>교육 내용</h4>\n        <app-textarea [rows]=\"10\" [(ngModel)]=\"form.education_safe_report_text\" [disabled]=\"!permission.edit\"></app-textarea>\n      </app-col>\n    </app-row>\n\n    <app-row style=\"align-items: flex-start;\">\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <app-row>\n            <app-col>\n              <h5>회의사진</h5>\n            </app-col>\n            <!-- <app-col *ngIf=\"permission.edit\" size=\"auto\">\n              <app-button>추가\n                <app-file name=\"input\" view_type=\"EDU_ONE\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                  [file_json]=\"form.file_json\"></app-file>\n              </app-button>\n            </app-col> -->\n          </app-row>\n        </ion-toolbar>\n        <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n          <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'EDU_ONE'\" [futItem]=\"futItem\"\n            (buttonClick)=\"form.education_safe_file_data.splice(i,1)\" [readonly]=\"true\"></app-file-preview>\n        </ng-container>\n        <!-- !permission.edit -->\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <app-row>\n            <app-col>\n              <h5></h5>\n            </app-col>\n            <!-- <app-col *ngIf=\"permission.edit\" size=\"auto\">\n              <app-button>추가\n                <app-file name=\"input\" view_type=\"EDU_TWO\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                  [file_json]=\"form.file_json\"></app-file>\n              </app-button>\n            </app-col> -->\n          </app-row>\n        </ion-toolbar>\n        <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n          <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'EDU_TWO'\" [futItem]=\"futItem\"\n            (buttonClick)=\"form.education_safe_file_data.splice(i,1)\" [readonly]=\"true\"></app-file-preview>\n        </ng-container>\n      </app-col>\n    </app-row>\n\n    <app-row>\n      <app-col>\n        <h4>교육 자료</h4>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"permission.edit\">\n        <app-button fill=\"translucent\">\n          <app-file view_type=\"EDU\" [multiple]=\"true\" [(ngModel)]=\"form.education_safe_file_data\"\n            [file]=\"form.file\" [file_json]=\"form.file_json\">\n          </app-file>\n          첨부\n        </app-button>\n      </app-col>\n    </app-row>\n    <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\" >\n      <app-file-preview type=\"full\"\n      *ngIf=\"futItem.view_type === 'EDU'\"\n      [futItem]=\"futItem\" \n      [readonly]=\"!permission.edit\"\n      (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview>\n    </ng-container>\n\n\n    <app-row>\n      <app-col>\n        <h4>참석자 명단</h4>\n      </app-col>\n    </app-row>\n    <app-table>\n      <thead>\n        <tr>\n          <th style=\"width: 48px;\">No</th>\n          <th>업체명</th>\n          <th>성명</th>\n          <th style=\"width: 200px;\">서명일시</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of res?.rsMap let i = index\">\n          <td>{{ i + 1}}</td>\n          <td>{{ item.company_name }}</td>\n          <td>{{ item.user_name }}</td>\n          <td>{{ item.create_date}}</td>\n        </tr>\n      </tbody>\n    </app-table>\n  \n    <app-approval-comment [approval_comment]=\"approval_comment\"></app-approval-comment>\n\n  </app-approval-document>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_safety-education_education-result_safety-education-result-edit_safety-ed-a99a3f.js.map