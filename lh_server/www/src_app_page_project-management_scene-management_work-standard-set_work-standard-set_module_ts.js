(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_work-standard-set_work-standard-set_module_ts"],{

/***/ 42793:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/work-standard-set/work-standard-set-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkStandardSetPageRoutingModule": () => (/* binding */ WorkStandardSetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _work_standard_set_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-standard-set.page */ 17908);




const routes = [
    {
        path: '',
        component: _work_standard_set_page__WEBPACK_IMPORTED_MODULE_0__.WorkStandardSetPage
    }
];
let WorkStandardSetPageRoutingModule = class WorkStandardSetPageRoutingModule {
};
WorkStandardSetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkStandardSetPageRoutingModule);



/***/ }),

/***/ 89348:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/work-standard-set/work-standard-set.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkStandardSetPageModule": () => (/* binding */ WorkStandardSetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _work_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-standard-set-routing.module */ 42793);
/* harmony import */ var _work_standard_set_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-standard-set.page */ 17908);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let WorkStandardSetPageModule = class WorkStandardSetPageModule {
};
WorkStandardSetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _work_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkStandardSetPageRoutingModule
        ],
        declarations: [_work_standard_set_page__WEBPACK_IMPORTED_MODULE_1__.WorkStandardSetPage]
    })
], WorkStandardSetPageModule);



/***/ }),

/***/ 17908:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/work-standard-set/work-standard-set.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkStandardSetPage": () => (/* binding */ WorkStandardSetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_work_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./work-standard-set.page.html */ 59066);
/* harmony import */ var _work_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-standard-set.page.scss */ 85735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);









let WorkStandardSetPage = class WorkStandardSetPage {
    //재해 형태 끝
    constructor(connect, toast, alert, user, promise) {
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.promise = promise;
        this.segment = '1';
        //공종 시작
        this.constructionForm = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
        };
        this.constructionSelected = [];
        //공종 끝
        //건설기계
        this.machineryFrom = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
            search_text: ''
        };
        this.selectedMachinery = [];
        //건설기계 끝
        //특수 공도구
        this.toolForm = {
            master_company_id: this.user.userData.belong_data.master_company_id,
            project_id: this.user.userData.belong_data.project_id
        };
        this.slectedTool = [];
        //특수 공도구 끝
        //회의록 현의사항
        this.meetingForm = {
            project_id: this.user.userData.belong_data.project_id,
            company_id: this.user.userData.belong_data.master_company_id
        };
        //회의록 현의사항 끝
        //재해 형태
        this.disasterForm = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id
        };
        this.disasterSelected = [];
        this.workRoleCheck = true;
        this.editable = true;
    }
    ngOnInit() {
        if (this.user.userData.user_role === 'MASTER_HEAD' ||
            this.user.userData.user_role === 'LH_ADMIN' ||
            this.user.userData.user_role === 'LH_HEAD') {
            this.workRoleCheck = false;
            this.editable = false;
        }
        this.segmentChange();
    }
    segmentChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('segmentChange - ', this.segment);
            switch (this.segment) {
                case '1':
                    // await this.getConstructionForm();
                    setTimeout(() => { this.getConstruction(); }, 150);
                    break;
                case '2': // 2차 개발
                    break;
                case '3': // 2차 개발
                    break;
                case '4': // 2차 개발
                    break;
                case '5':
                    setTimeout(() => { this.getMachinery(); }, 150);
                    break;
                case '6':
                    setTimeout(() => { this.getTool(); }, 150);
                    break;
                case '7': // 2차 개발
                    break;
                case '8':
                    setTimeout(() => { this.getMeeting(); }, 150);
                    break;
                case '9':
                    setTimeout(() => { this.getDisaster(); }, 150);
                    break;
                case '10': // 2차 개발
                    break;
            }
        });
    }
    // async getConstructionForm() {
    //   const { belong_data } = this.user.userData;
    //   this.constructionForm.project_id = belong_data.project_id;
    //   if(belong_data.company_contract_type === '원청사') {
    //     this.constructionForm.master_company_id = belong_data.master_company_id;
    //   }
    //   else if(belong_data.company_contract_type === '협력사') {
    //     // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
    //     const res = await this.connect.run('/category/certify/search_my_master_company/get', {
    //       project_id: this.constructionForm.project_id,
    //       search_text: ''
    //     });
    //     if(res.rsCode === 0) {
    //       const contractor = res.rsMap[0];
    //       this.constructionForm.master_company_id = contractor.master_company_id;
    //     }
    //     else {
    //       this.toast.present({ color: 'warning', message: res.rsMsg });
    //     }
    //   }
    // }
    //공종 시작
    getConstruction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.constructionForm)
                return yield this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
            this.resConstruction = yield this.connect.run('/project/construction/get', this.constructionForm);
            if (this.resConstruction.rsCode === 0) { }
            ;
        });
    }
    constructionAdd() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.constructionForm)
                return yield this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
            if ((_b = (_a = this.resConstruction) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = this.resConstruction) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                    ctgo_construction_id: 0,
                    ctgo_construction_name: '',
                    master_company_id: this.constructionForm.master_company_id,
                    project_id: this.constructionForm.project_id,
                    ctgo_construction_use_state: 1 // 1 사용 / 0 미사용
                });
            }
            else {
                this.resConstruction.rsMap = [];
                (_d = this.resConstruction) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                    ctgo_construction_id: 0,
                    ctgo_construction_name: '',
                    master_company_id: this.constructionForm.master_company_id,
                    project_id: this.constructionForm.project_id,
                    ctgo_construction_use_state: 1 // 1 사용 / 0 미사용
                });
            }
        });
    }
    constructionSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.resConstruction.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (item.ctgo_construction_id === 0) {
                    const res = yield this.connect.run('/project/construction/insert', item, {});
                    if (res.rsCode === 0) {
                        this.getConstruction();
                        if (this.resConstruction.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
                else {
                    const res = yield this.connect.run('/project/construction/update', item, {});
                    if (res.rsCode === 0) {
                        this.getConstruction();
                        if (this.resConstruction.rsMap.length === (i + 1)) {
                            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                        }
                    }
                    ;
                }
            }));
        });
    }
    constructionState(state) {
        if (state) {
            for (let j = 0; j < this.resConstruction.rsMap.length; j++) {
                this.resConstruction.rsMap[j].ctgo_construction_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resConstruction.rsMap.length; j++) {
                this.resConstruction.rsMap[j].ctgo_construction_use_state = 0;
            }
        }
    }
    constructionDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.constructionSelected.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resConstruction.rsMap;
                            // this.constructionSelected.forEach(async (checkedItem) => {
                            //   if (checkedItem.ctgo_occupation_id === 0) {
                            //     list.splice(list.findIndex(item => item === checkedItem), 1);
                            //   } else {
                            //     const res = await this.connect.run('/project/occupation/delete', {
                            //       company_id: checkedItem.company_id,
                            //       ctgo_occupation_id: checkedItem.ctgo_occupation_id
                            //     });
                            //     if (res.rsCode === 0) {
                            //       this.getConstruction();
                            //     };
                            //   }
                            //   this.constructionSelected = [];
                            // });
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    //공종 끝
    //건설기계
    getMachinery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.resMachinery = yield this.connect.run('/project/machinery/get', this.machineryFrom);
            if (this.resMachinery.rsCode === 0) {
            }
            ;
        });
    }
    machineryAdd() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.machineryFrom)
                return yield this.toast.present({ message: '업체을 선택해주세요.', color: 'warning' });
            if ((_b = (_a = this.resMachinery) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = this.resMachinery) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                    ctgo_machinery_id: 0,
                    master_company_id: this.machineryFrom.master_company_id,
                    project_id: this.machineryFrom.project_id,
                    ctgo_machinery_name: '',
                    ctgo_machinery_doc_state: 0,
                    ctgo_machinery_use_state: 1,
                    ctgo_machinery_doc: false
                });
            }
            else {
                this.resMachinery.rsMap = [];
                (_d = this.resMachinery) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                    ctgo_machinery_id: 0,
                    master_company_id: this.machineryFrom.master_company_id,
                    project_id: this.machineryFrom.project_id,
                    ctgo_machinery_name: '',
                    ctgo_machinery_doc_state: 0,
                    ctgo_machinery_use_state: 1,
                    ctgo_machinery_doc: false
                });
            }
        });
    }
    machineryDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let filteritem = this.selectedMachinery.filter(item => this.selectedMachinery.indexOf(item));
            if (!filteritem.length)
                return this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resMachinery.rsMap;
                            this.selectedMachinery.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_machinery_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/machinery/delete', {
                                        master_company_id: checkedItem.master_company_id,
                                        project_id: checkedItem.project_id,
                                        ctgo_machinery_id: checkedItem.ctgo_machinery_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getMachinery();
                                    }
                                    ;
                                }
                                this.selectedMachinery = [];
                            }));
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    machineryState(state) {
        if (state) {
            for (let j = 0; j < this.resMachinery.rsMap.length; j++) {
                this.resMachinery.rsMap[j].ctgo_machinery_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resMachinery.rsMap.length; j++) {
                this.resMachinery.rsMap[j].ctgo_machinery_use_state = 0;
            }
        }
    }
    machinerySave() {
        this.resMachinery.rsMap.forEach(item => {
            item.ctgo_machinery_doc_state ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
        });
        this.resMachinery.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (item.ctgo_machinery_id === 0) {
                const res = yield this.connect.run('/project/machinery/insert', item, {});
                if (res.rsCode === 0) {
                    this.getMachinery();
                    if (this.resMachinery.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
            else {
                const res = yield this.connect.run('/project/machinery/update', item, {});
                if (res.rsCode === 0) {
                    this.getMachinery();
                    if (this.resMachinery.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
        }));
    }
    //건설기계끝
    //특수 공도구
    getTool() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.promise.wait(() => this.toolForm);
            this.resTool = yield this.connect.run('/project/tool/get', this.toolForm, {});
            if (this.resTool.rsCode === 0) { }
            ;
        });
    }
    toolAdd() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.toolForm.project_id)
                return yield this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
            if (!this.toolForm.master_company_id)
                return yield this.toast.present({ message: '업체를 선택해주세요.', color: 'danger' });
            if ((_b = (_a = this.resTool) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = this.resTool) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                    ctgo_tool_id: 0,
                    master_company_id: this.toolForm.master_company_id,
                    project_id: this.toolForm.project_id,
                    ctgo_tool_name: '',
                    ctgo_tool_use_state: 1
                });
            }
            else {
                this.resTool.rsMap = [];
                (_d = this.resTool) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                    ctgo_tool_id: 0,
                    master_company_id: this.toolForm.master_company_id,
                    project_id: this.toolForm.project_id,
                    ctgo_tool_name: '',
                    ctgo_tool_use_state: 1
                });
            }
        });
    }
    toolDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.slectedTool.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resTool.rsMap;
                            this.slectedTool.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_tool_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/tool/delete', {
                                        master_company_id: checkedItem.master_company_id,
                                        ctgo_tool_id: checkedItem.ctgo_tool_id,
                                        project_id: checkedItem.project_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getTool();
                                    }
                                    ;
                                }
                                this.slectedTool = [];
                            }));
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    toolSave() {
        this.resTool.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (item.ctgo_tool_id === 0) {
                const res = yield this.connect.run('/project/tool/insert', item, {});
                if (res.rsCode === 0) {
                    this.getTool();
                    if (this.resTool.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
            else {
                const res = yield this.connect.run('/project/tool/update', item, {});
                if (res.rsCode === 0) {
                    this.getTool();
                    if (this.resTool.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
        }));
    }
    toolState(state) {
        if (state) {
            for (let j = 0; j < this.resTool.rsMap.length; j++) {
                this.resTool.rsMap[j].ctgo_tool_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resTool.rsMap.length; j++) {
                this.resTool.rsMap[j].ctgo_tool_use_state = 0;
            }
        }
    }
    //특수 공도구 끝
    //회의록 협의체
    getMeeting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // await this.promise.wait(() => this.meetingForm.project_id = this.user.userData.belong_data.project_id);
            // await this.promise.wait(() => this.meetingForm.company_id = this.user.userData.belong_data.company_id);
            const res = yield this.connect.run('/project/safety_meeting/get', this.meetingForm, {});
            if (res.rsCode === 0) {
                this.resMeeting = Object.assign(Object.assign({}, res), this.resMeeting);
            }
            ;
        });
    }
    // constructionForm.master_company_id
    meetingUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/safety_meeting/update', this.resMeeting.rsObj, {});
            if (res.rsCode === 0) {
                this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
            }
        });
    }
    //회의록 협의체 끝
    //재해형태
    getDisaster() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.resDisaster = yield this.connect.run('/project/disaster/get', this.disasterForm, {});
            if (this.resDisaster.rsCode === 0) { }
            ;
        });
    }
    disasterAdd() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.disasterForm)
                return yield this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
            if ((_b = (_a = this.resDisaster) === null || _a === void 0 ? void 0 : _a.rsMap) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = this.resDisaster) === null || _c === void 0 ? void 0 : _c.rsMap.unshift({
                    ctgo_disaster_name: '',
                    ctgo_disaster_use_state: 1,
                    project_id: this.disasterForm.project_id,
                    master_company_id: this.disasterForm.master_company_id,
                    default_state: 0,
                    ctgo_disaster_id: 0
                });
            }
            else {
                this.resDisaster.rsMap = [];
                (_d = this.resDisaster) === null || _d === void 0 ? void 0 : _d.rsMap.push({
                    ctgo_disaster_name: '',
                    ctgo_disaster_use_state: 1,
                    project_id: this.disasterForm.project_id,
                    master_company_id: this.disasterForm.master_company_id,
                    default_state: 0,
                    ctgo_disaster_id: 0
                });
            }
        });
    }
    disasterState(state) {
        if (state) {
            for (let j = 0; j < this.resDisaster.rsMap.length; j++) {
                this.resDisaster.rsMap[j].ctgo_disaster_use_state = 1;
            }
        }
        else {
            for (let j = 0; j < this.resDisaster.rsMap.length; j++) {
                this.resDisaster.rsMap[j].ctgo_disaster_use_state = 0;
            }
        }
    }
    disasterDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.disasterSelected.length)
                return yield this.toast.present({ message: '최소 1개 이상 선택해주세요.' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const list = this.resDisaster.rsMap;
                            this.disasterSelected.forEach((checkedItem) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                if (checkedItem.ctgo_disaster_id === 0) {
                                    list.splice(list.findIndex(item => item === checkedItem), 1);
                                }
                                else {
                                    const res = yield this.connect.run('/project/disaster/delete', {
                                        project_id: checkedItem.project_id,
                                        master_company_id: checkedItem.master_company_id,
                                        ctgo_disaster_id: checkedItem.ctgo_disaster_id
                                    });
                                    if (res.rsCode === 0) {
                                        this.getDisaster();
                                    }
                                    ;
                                }
                                this.disasterSelected = [];
                            }));
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    disasterSave() {
        this.resDisaster.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (item.ctgo_disaster_id === 0) {
                const res = yield this.connect.run('/project/disaster/insert', item, {});
                if (res.rsCode === 0) {
                    this.getDisaster();
                    if (this.resDisaster.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
            else {
                const res = yield this.connect.run('/project/disaster/update', item, {});
                if (res.rsCode === 0) {
                    this.getDisaster();
                    if (this.resDisaster.rsMap.length === (i + 1)) {
                        this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
                    }
                }
                ;
            }
        }));
    }
};
WorkStandardSetPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService }
];
WorkStandardSetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-work-standard-set',
        template: _raw_loader_work_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_work_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkStandardSetPage);



/***/ }),

/***/ 85735:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/work-standard-set/work-standard-set.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".font-height {\n  font-size: 15px;\n  line-height: 1.7em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstc3RhbmRhcmQtc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoid29yay1zdGFuZGFyZC1zZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtaGVpZ2h0e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XG59Il19 */");

/***/ }),

/***/ 59066:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/work-standard-set/work-standard-set.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <ion-toolbar color=\"white\" style=\"margin-bottom: 8px;\">\n    <app-row>\n      <app-col size=\"auto\">\n        <ion-segment color=\"primary\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChange()\">\n          <ion-segment-button value=\"1\">공종</ion-segment-button>\n          <!-- <ion-segment-button value=\"2\" [disabled]=\"true\">위험 공종</ion-segment-button> -->\n          <ion-segment-button value=\"3\">위험성평가<br>항목</ion-segment-button>\n          <!-- <ion-segment-button value=\"4\" [disabled]=\"true\">위험성평가<br>추가 항목</ion-segment-button> -->\n          <ion-segment-button value=\"5\">건설기계</ion-segment-button>\n          <ion-segment-button value=\"6\">특수공도구</ion-segment-button>\n          <ion-segment-button value=\"7\">위험지역<br>점검표</ion-segment-button>\n          <ion-segment-button value=\"8\">회의록<br>협의사항</ion-segment-button>\n          <ion-segment-button value=\"9\">재해 형태</ion-segment-button>\n          <!-- <ion-segment-button value=\"10\" [disabled]=\"true\">작업절차서<br>등록</ion-segment-button> -->\n        </ion-segment>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <ng-container>\n    <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '1'\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" style=\"width: 100px;\"\n                  (click)=\"getConstruction()\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [disabled]=\"workRoleCheck\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [disabled]=\"workRoleCheck\"></app-select-contractor>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"constructionAdd()\">추가</app-button>\n            <!-- <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"constructionDelete()\" color=\"danger\">삭제</app-button> -->\n            <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)='constructionState(1)'>전체 사용</app-button>\n            <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)='constructionState(0)'>전체 미사용</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ng-container>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5>공종 목록 (총 {{resConstruction?.rsMap?.length ? resConstruction?.rsMap?.length :0}}건)</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" (click)=\"constructionSave()\">저장</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <app-check-group>\n            <app-table>\n              <thead>\n                <tr>\n                  <th style=\"width: 40px;\">\n                    <app-check type=\"all\"></app-check>\n                  </th>\n                  <th>공종</th>\n                  <th style=\"width: 180px;\">사용여부</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <app-check></app-check>\n                  </td>\n                  <td>\n                    <app-input></app-input>\n                  </td>\n                  <td>\n                    <app-select>\n                      <app-select-option [value]=\"1\">Y</app-select-option>\n                      <app-select-option [value]=\"0\">N</app-select-option>\n                    </app-select>\n                  </td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-check-group>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ng-container>\n\n  <ng-container>\n    <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '3'\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" style=\"width: 100px;\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"사업분야\">\n                  <app-select-option [value]=\"1\">단지개발</app-select-option>\n                  <app-select-option [value]=\"2\">아파트</app-select-option>\n                  <app-select-option [value]=\"3\">교량 및 도록</app-select-option>\n                  <app-select-option [value]=\"4\">터널</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ng-container>\n        </ng-container>\n        <app-card>\n          <app-row style=\"align-items:flex-start\">\n            <app-col>\n              <div style=\"text-align: right;\">\n                <app-button fill=\"translucent\">추가</app-button>\n                <app-button color=\"danger\" fill=\"translucent\">삭제\n                </app-button>\n                <app-button fill=\"translucent\">수정\n                </app-button>\n              </div>\n\n              <app-check-group>\n                <app-table class=\"edit\">\n                  <thead>\n                    <tr>\n                      <th style=\"width: 20px;\">\n                        <app-checkbox-input>\n                          <app-check type=\"all\"></app-check>\n                        </app-checkbox-input>\n                        \n                      </th>\n                      <th>공사명</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <app-checkbox-input>\n                          <app-check value=\"기초 파일 공사\"></app-check>\n                        </app-checkbox-input>\n                      </td>\n                      <td>기초 파일 공사</td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <app-checkbox-input>\n                          <app-check value=\"기초 파일 공사2\"></app-check>\n                        </app-checkbox-input>\n                      </td>\n                      <td>기초 파일 공사2</td>\n                    </tr>\n                  </tbody>\n                </app-table>\n              </app-check-group>\n            </app-col>\n            <app-col>\n              <div style=\"text-align: right;\">\n                <app-button fill=\"translucent\">추가</app-button>\n                <app-button color=\"danger\" fill=\"translucent\">삭제\n                </app-button>\n                <app-button fill=\"translucent\">수정\n                </app-button>\n              </div>\n\n              <app-check-group>\n                <app-table class=\"edit\">\n                  <tbody>\n                    <th style=\"width: 20px;\">\n                      <app-check type=\"all\"></app-check>\n                    </th>\n                    <th>단일작업</th>\n                  </tbody>\n                  <tbody>\n                    <tr class=\"button\">\n                      <td>\n                        <app-check></app-check>\n                      </td>\n                      <td>장비반입 및 조립</td>\n                    </tr>\n                  </tbody>\n                </app-table>\n              </app-check-group>\n            </app-col>\n            <app-col>\n              <app-row>\n                <app-col>\n                  <div style=\"text-align: right;\">\n                    <app-button fill=\"translucent\">추가\n                    </app-button>\n                    <app-button  color=\"danger\" fill=\"translucent\">삭제\n                    </app-button>\n                    <app-button  fill=\"translucent\">수정\n                    </app-button>\n                  </div>\n\n                  <app-check-group>\n                    <app-table class=\"edit\">\n                      <thead>\n                        <th style=\"width: 20px;\">\n                          <app-check type=\"all\"></app-check>\n                        </th>\n                        <th>위험요인</th>\n                      </thead>\n                      <tbody>\n                        <tr class=\"button\">\n                          <td>\n                            <app-check></app-check>\n                          </td>\n                          <td>작업자가 인양화물에 충돌</td>\n                        </tr>\n                      </tbody>\n                    </app-table>\n                  </app-check-group>\n                </app-col>\n              </app-row>\n            </app-col>\n          </app-row>\n        </app-card>\n      </app-col>\n    </app-row>\n  </ng-container>\n\n  <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '5'\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"getMachinery()\">\n                검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene [disabled]=\"editable\"></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor [multiple]=\"false\"\n                [disabled]=\"editable\"></app-select-contractor>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"machineryAdd()\">추가</app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"machineryDelete()\" color=\"danger\">삭제\n          </app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"machineryState(1)\">전체 사용</app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"machineryState(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ng-container *ngIf=\"!workRoleCheck\">\n        <ion-toolbar color=\"white\">\n          <app-row>\n            <app-col>\n              <h5>건설기계 목록 (총 {{ resMachinery?.rsMap?.length ? resMachinery?.rsMap?.length: 0}}건)</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" (click)=\"machinerySave()\">저장</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <app-check-group>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 40px;\">\n                  <app-check type=\"all\"></app-check>\n                </th>\n                <th>건설기계</th>\n                <th>작업계획서 필수 첨부</th>\n                <th>사용여부</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <app-check [on]=\"item\"></app-check>\n                </td>\n                <td>\n                  <app-input></app-input>\n                </td>\n                <td>\n                  <app-select>\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n                <td>\n                  <app-select>\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n      </ng-container>\n    </app-col>\n  </app-row>\n\n  <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '6'\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" style=\"width: 100px;\" (click)=\"getTool()\">검색\n              </app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene [disabled]=\"workRoleCheck\"></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor [project_id]=\"toolForm.project_id\" [disabled]=\"editable\"></app-select-contractor>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"toolAdd()\">추가</app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"toolDelete()\" color=\"danger\">삭제\n          </app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"toolState(1)\">전체 사용</app-button>\n          <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" (click)=\"toolState(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ng-container *ngIf=\"!workRoleCheck\">\n        <ion-toolbar color=\"white\">\n          <app-row>\n            <app-col>\n              <h5>특수공도구 목록 (총 {{resTool?.rsMap?.length || 0}}건)</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" (click)=\"toolSave()\">저장</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <app-check-group>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 40px;\">\n                  <app-check type=\"all\"></app-check>\n                </th>\n                <th>특수공도구</th>\n                <th style=\"width: 180px;\">사용여부</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <app-check [on]=\"item\"></app-check>\n                </td>\n                <td>\n                  <app-input placeholder=\"입력하세요.\"></app-input>\n                </td>\n                <td>\n                  <app-select>\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n      </ng-container>\n    </app-col>\n  </app-row>\n\n  <ng-container>\n    <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '7'\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" style=\"width: 100px;\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor></app-select-contractor>\n              </td>\n            </tr>\n            <!-- <tr>\n              <td>\n                <app-select label=\"사업분야\">\n                  <app-select-option [value]=\"1\">단지개발</app-select-option>\n                  <app-select-option [value]=\"2\">아파트</app-select-option>\n                  <app-select-option [value]=\"3\">교량 및 도록</app-select-option>\n                  <app-select-option [value]=\"4\">터널</app-select-option>\n                </app-select>\n              </td>\n            </tr> -->\n\n            <tr>\n              <td>\n                <app-select label=\"점검표\">\n                  <app-select-option [value]=\"\">일상</app-select-option>\n                  <app-select-option [value]=\"\">전기실</app-select-option>\n                  <app-select-option [value]=\"\">기계실</app-select-option>\n                  <app-select-option [value]=\"\">기계식 지하주차장</app-select-option>\n                  <app-select-option [value]=\"\">유해위험물 저장소</app-select-option>\n                  <app-select-option [value]=\"\">고압변전지역</app-select-option>\n                  <app-select-option [value]=\"\">양중지역</app-select-option>\n                </app-select>\n              </td>\n          </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <h5>위험 알림 관리 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n          <ion-buttons slot=\"end\">\n            <!-- <app-button color=\"warning\" fill=\"translucent\">삭제</app-button> -->\n            <app-button fill=\"translucent\">추가</app-button>\n            <app-button fill=\"translucent\">저장</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th style=\"width:40px;\">NO</th>\n              <th>점검항목</th>\n              <th>성명</th>\n              <th style=\"width: 60px\">이동</th>\n              <th style=\"width: 60px\">삭제</th>\n            </tr>\n          </thead>\n          <tbody [sortablejs]=\"answerObj\" [sortablejsOptions]=\"answerSortableOption\">\n            <tr class=\"item\" [class.locked]=\"f\">\n            <!-- <tr *ngFor=\"let item of answerObj; let i = index; let f = first; let l = last;\" class=\"item\" [class.locked]=\"f\"> -->\n              <!-- <td>{{ l ? '최종' : i+1 }}</td>\n              <td>{{ f ? \n                      l ? '작성/승인' : '작성' \n                      : \n                      l ? '승인' : '검토' \n              }}</td> -->\n              <td>1</td>\n              <td>점검이름</td>\n              <!-- <td>{{ item.answer_user_name }}</td> -->\n              <td>이름</td>\n              <td>\n                <app-button *ngIf=\"!f\" fill=\"translucent\" class=\"answer-handle\">\n                  <ion-icon name=\"swap-vertical-outline\"></ion-icon>\n                </app-button>\n              </td>\n              <td>\n                <app-button *ngIf=\"!f\" color=\"danger\" fill=\"translucent\" (click)=\"removeAnswer(i)\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </app-button>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n    </app-row>\n  </ng-container>\n\n  <ng-container *ngIf=\"segment === '8'\">\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"getMeeting()\">\n                  검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [disabled]=\"workRoleCheck\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [disabled]=\"editable\"></app-select-contractor>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n\n      <app-col>\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <h4>회의록 협의사항</h4>\n          <ion-buttons slot=\"end\">\n            <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" (click)=\"meetingUpdate()\">저장</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ng-container *ngIf=\"!workRoleCheck\">\n          <app-card>\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <h5>안전 및 보건에 관한 협의체</h5>\n            </ion-toolbar>\n            <app-row>\n              <app-col>\n                <app-textarea name=\"safety_default\" [rows]=\"7\" ></app-textarea>\n              </app-col>\n            </app-row>\n          </app-card>\n\n          <app-card>\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <h5>노사 협의체</h5>\n            </ion-toolbar>\n            <app-row>\n              <app-col>\n                <app-textarea name=\"safety_default\" [rows]=\"7\" >\n                </app-textarea>\n              </app-col>\n            </app-row>\n          </app-card>\n\n          <app-card>\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <h5>산업안전 보건 위원회</h5>\n            </ion-toolbar>\n            <app-row>\n              <app-col>\n                <app-textarea name=\"safety_default\" [rows]=\"7\" >\n                </app-textarea>\n              </app-col>\n            </app-row>\n          </app-card>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ng-container>\n\n  <app-row style=\"align-items: flex-start;\" *ngIf=\"segment === '9'\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" [disabled]=\"workRoleCheck\" style=\"width: 100px;\" (click)=\"getDisaster()\">검색\n              </app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene [disabled]=\"editable\"></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor\n              [disabled]=\"editable\"></app-select-contractor>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" (click)=\"disasterAdd()\">추가</app-button>\n          <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" (click)=\"disasterDelete()\" color=\"danger\">삭제\n          </app-button>\n          <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" (click)=\"disasterState(1)\">전체 사용</app-button>\n          <app-button [disabled]=\"workRoleCheck\" fill=\"translucent\" (click)=\"disasterState(0)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ng-container>\n        <ion-toolbar color=\"white\">\n          <app-row>\n            <app-col>\n              <h5>재해 형태 목록 (총 {{ resDisaster?.rsMap?.length ? resDisaster?.rsMap?.length:0}}건)</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" (click)=\"disasterSave()\">저장</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <app-check-group>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 40px;\">\n                  <app-check type=\"all\"></app-check>\n                </th>\n                <th>재해 형태</th>\n                <th style=\"width: 180px;\">사용여부</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <app-check></app-check>\n                </td>\n                <td>\n                  <app-input placeholder=\"입력하세요.\"></app-input>\n                </td>\n                <td>\n                  <app-select>\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n      </ng-container>\n    </app-col>\n  </app-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_work-standard-set_work-standard-set_module_ts.js.map