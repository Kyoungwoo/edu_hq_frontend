(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_area-standard-set_area-standard-set_module_ts"],{

/***/ 19912:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/area-standard-set-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaStandardSetPageRoutingModule": () => (/* binding */ AreaStandardSetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _area_standard_set_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-standard-set.page */ 6036);




const routes = [
    {
        path: '',
        component: _area_standard_set_page__WEBPACK_IMPORTED_MODULE_0__.AreaStandardSetPage
    }
];
let AreaStandardSetPageRoutingModule = class AreaStandardSetPageRoutingModule {
};
AreaStandardSetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AreaStandardSetPageRoutingModule);



/***/ }),

/***/ 83861:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/area-standard-set.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaStandardSetPageModule": () => (/* binding */ AreaStandardSetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _area_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-standard-set-routing.module */ 19912);
/* harmony import */ var _area_standard_set_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-standard-set.page */ 6036);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _area_add_area_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../area-add/area-add.module */ 66259);
/* harmony import */ var _component_area_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/area.module */ 71054);











let AreaStandardSetPageModule = class AreaStandardSetPageModule {
};
AreaStandardSetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _area_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaStandardSetPageRoutingModule,
            _area_add_area_add_module__WEBPACK_IMPORTED_MODULE_4__.AreaAddPageModule,
            _component_area_module__WEBPACK_IMPORTED_MODULE_5__.AreaModule
        ],
        declarations: [_area_standard_set_page__WEBPACK_IMPORTED_MODULE_1__.AreaStandardSetPage]
    })
], AreaStandardSetPageModule);



/***/ }),

/***/ 6036:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/area-standard-set.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileData": () => (/* binding */ FileData),
/* harmony export */   "GPS_COORDINATE_DATA": () => (/* binding */ GPS_COORDINATE_DATA),
/* harmony export */   "SelectItem": () => (/* binding */ SelectItem),
/* harmony export */   "AreaStandardSetPage": () => (/* binding */ AreaStandardSetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_area_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./area-standard-set.page.html */ 678);
/* harmony import */ var _area_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-standard-set.page.scss */ 70286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/input/naver-map/naver-map.component */ 85409);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_component_modal_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/modal/search-area/search-area.component */ 44331);
/* harmony import */ var _area_add_area_add_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../area-add/area-add.page */ 84438);
/* harmony import */ var _component_nfc_info_nfc_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/nfc-info/nfc-info.component */ 59179);














class FileData {
    constructor() {
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileJson();
        this.file_data = [];
    }
}
class GPS_COORDINATE_DATA {
    constructor() {
        this.gps_latitude = [];
        this.gps_longitude = [];
    }
}
class SelectItem {
    constructor() {
        this.gps_coordinate_data = new GPS_COORDINATE_DATA();
    }
}
let AreaStandardSetPage = class AreaStandardSetPage {
    // active_items = {
    //   area_1: 0,
    //   area_2: 0,
    //   area_3: 0
    // }
    constructor(modal, connect, toast, alert, user, changeRef) {
        this.modal = modal;
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.user = user;
        this.changeRef = changeRef;
        this.menuCount = 1;
        this.form = new FileData();
        this.AreaOneForm = {
            project_id: this.user.userData.belong_data.project_id
        };
        this.riskProjectForm = {
            limit_no: 0,
            project_id: this.user.userData.belong_data.project_id
        };
        this.selectDataArea1 = [];
        this.selectDataArea2 = [];
        this.selectDataArea3 = [];
        this.testtttt = 0;
        this.addRiskAreaArr = [];
        this.addRiskData = {
            area_middle_name: '',
            area_bottom_name: '',
            area_top_name: '', // 장소1
        };
        this.riskAreaData = [];
        this.area_risk_use_state_data = [];
        this.gps_coordinate_data = new src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__.GpsCoordinateData();
        this.gpsSelected = null;
        this.naverMapSetting = true;
        this.areaRoleCheck = true;
        this.updateEdit = false;
        this.initMap = false;
    }
    ngOnInit() {
        if (this.user.userData.user_role === 'MASTER_HEAD' ||
            this.user.userData.user_role === 'LH_ADMIN' ||
            this.user.userData.user_role === 'LH_HEAD') {
            this.areaRoleCheck = false;
        }
        this.getGuidemap();
        this.AreaOne();
        this.CtgoRisk();
    }
    areaSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getGuidemap();
            yield this.AreaOne();
        });
    }
    getGuidemap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/area/guidemap/get', { project_id: this.AreaOneForm.project_id, }, {
                parse: ['file_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
            }
            else {
                this.form = null;
                console.log("this.from", this.form);
            }
        });
    }
    updateGuidemap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            this.form.project_id = this.AreaOneForm.project_id;
                            const res = yield this.connect.run('/project/area/guidemap/update', this.form, {});
                            if (res.rsCode === 0) { }
                        })
                    }
                ]
            });
        });
    }
    AreaOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.resAreaOne = yield this.connect.run('/project/area/top/get', this.AreaOneForm, {});
            if (this.resAreaOne.rsCode === 0) {
            }
        });
    }
    areaTow(area_top_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.area_top_id = area_top_id;
            this.area_middle_id = 0;
            this.area_bottom_id = 0;
            this.resAreaThree = null;
            this.resAreaTwo = yield this.connect.run('/project/area/middle/get', { area_top_id: area_top_id }, {});
            if (this.resAreaTwo.rsCode === 0) {
            }
        });
    }
    areaThree(area_middle_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.area_middle_id = area_middle_id;
            this.area_bottom_id = 0;
            this.resAreaThree = yield this.connect.run('/project/area/bottom/get', {
                area_middle_id: area_middle_id,
                area_top_id: this.area_top_id
            }, {});
            if (this.resAreaThree.rsCode === 0) {
            }
        });
    }
    areaFour(area_bottom_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.area_bottom_id = area_bottom_id;
        });
    }
    areaOneEdit(area, update) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (update) {
                if (!this.selectDataArea1.length)
                    return yield this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' });
            }
            if (this.selectDataArea1.length > 1)
                return yield this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' });
            if (!this.AreaOneForm.project_id)
                return yield this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' });
            const modal = yield this.modal.create({
                component: _area_add_area_add_page__WEBPACK_IMPORTED_MODULE_9__.AreaAddPage,
                componentProps: {
                    selectData: this.selectDataArea1[0],
                    project_id: this.AreaOneForm.project_id,
                    area
                },
                cssClass: 'lhOrganization'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.AreaOne();
            }
        });
    }
    areaTwoEdit(area, update) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (update) {
                if (!this.selectDataArea2.length)
                    return yield this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' });
            }
            if (!this.area_top_id)
                return this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' });
            if (this.selectDataArea2.length > 1)
                return yield this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' });
            if (!this.AreaOneForm.project_id)
                return yield this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' });
            const modal = yield this.modal.create({
                component: _area_add_area_add_page__WEBPACK_IMPORTED_MODULE_9__.AreaAddPage,
                componentProps: {
                    area_top_id: this.area_top_id,
                    selectData: this.selectDataArea2[0],
                    project_id: this.AreaOneForm.project_id,
                    area
                },
                cssClass: 'lhOrganization'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.areaTow(data);
            }
            // if(data) this.testarr.push({text:data.text});
        });
    }
    areaThreeEdit(area, update) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (update) {
                if (!this.selectDataArea3.length)
                    return yield this.toast.present({ message: '장소를 선택해 주세요' });
            }
            if (this.selectDataArea3.length > 1)
                return yield this.toast.present({ message: '한 개만 선택해 주세요.' });
            if (!this.AreaOneForm.project_id)
                return yield this.toast.present({ message: '현장을 선택해 주세요.' });
            if (!this.area_top_id)
                return this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' });
            if (!this.area_middle_id)
                return this.toast.present({ message: 'area2를 선택해주세요', color: 'warning' });
            const modal = yield this.modal.create({
                component: _area_add_area_add_page__WEBPACK_IMPORTED_MODULE_9__.AreaAddPage,
                componentProps: {
                    area_middle_id: this.area_middle_id,
                    selectData: this.selectDataArea3[0],
                    area_top_id: this.area_top_id,
                    area
                },
                cssClass: 'lhOrganization'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.areaThree(data);
            }
        });
    }
    deleteArea(area) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            switch (area) {
                                case 1:
                                    for (let i = 0; i < this.selectDataArea1.length; i++) {
                                        const res = yield this.connect.run('/project/area/top/delete', {
                                            area_top_id: this.selectDataArea1[i].area_top_id,
                                            project_id: this.AreaOneForm.project_id
                                        });
                                        if (res.rsCode === 0) {
                                            this.AreaOne();
                                        }
                                        ;
                                    }
                                    break;
                                case 2:
                                    for (let i = 0; i < this.selectDataArea2.length; i++) {
                                        const res = yield this.connect.run('/project/area/middle/delete', {
                                            area_middle_id: this.selectDataArea2[i].area_middle_id,
                                            area_top_id: this.area_top_id,
                                        });
                                        if (res.rsCode === 0) {
                                            this.areaTow(this.area_top_id);
                                        }
                                        ;
                                    }
                                    break;
                                case 3:
                                    for (let i = 0; i < this.selectDataArea3.length; i++) {
                                        const res = yield this.connect.run('/project/area/bottom/delete', {
                                            area_top_id: this.area_top_id,
                                            area_middle_id: this.area_middle_id,
                                            area_bottom_id: this.selectDataArea3[i].area_bottom_id
                                        });
                                        if (res.rsCode === 0) {
                                            this.areaThree(this.area_middle_id);
                                        }
                                        ;
                                    }
                                    break;
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    getRiskArea(limit_no = this.riskProjectForm.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.addRiskAreaArr = [];
            this.riskProjectForm.limit_no = limit_no;
            this.menuCount = 2;
            this.updateEdit = true;
            this.resRiskArea = yield this.connect.run('/project/area/risk/get', this.riskProjectForm);
            if (this.resRiskArea.rsCode === 0) {
                setTimeout(() => {
                    this.updateEdit = false;
                }, 1000);
            }
            else {
                if (!this.riskProjectForm.limit_no)
                    this.toast.present({ message: this.resRiskArea.rsMsg, color: 'warning' });
            }
        });
    }
    addRiskArea() {
        var _a;
        if ((_a = this.resRiskArea) === null || _a === void 0 ? void 0 : _a.rsMap) {
            this.resRiskArea.rsMap.unshift({
                second_user_id: 0,
                area_risk_id: 0,
                area_middle_name: '',
                ctgo_area_risk_name: '',
                area_middle_id: 0,
                ctgo_area_risk_id: 0,
                area_risk_name: '',
                manager_user_id: 0,
                area_bottom_name: '',
                area_risk_type: '',
                nfc_state: 0,
                project_id: 0,
                area_top_id: 0,
                area_bottom_id: 0,
                area_risk_use_state: 1,
                area_top_name: '',
                gps_state: 0,
                row_count: 0
            });
        }
        else {
            this.resRiskArea.rsMap = [];
            this.resRiskArea.rsMap.push({
                second_user_id: 0,
                area_risk_id: 0,
                area_middle_name: '',
                ctgo_area_risk_name: '',
                area_middle_id: 0,
                ctgo_area_risk_id: 0,
                area_risk_name: '',
                manager_user_id: 0,
                area_bottom_name: '',
                area_risk_type: '',
                nfc_state: 0,
                project_id: 0,
                area_top_id: 0,
                area_bottom_id: 0,
                area_risk_use_state: 1,
                area_top_name: '',
                gps_state: 0,
                row_count: 0
            });
        }
    }
    CtgoRisk() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.resCtgoRisk = yield this.connect.run('/category/risk/type/get', {}, {});
            if (this.resCtgoRisk.rsCode === 0) { }
            ;
        });
    }
    riskSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const riskArea = this.resRiskArea.rsMap;
            riskArea.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                // if (!item.area_top_id) return this.toast.present({ message: '첫번째 장소를 선택해주세요.', color: 'warning' })
                item.area_middle_id = item.area_middle_id || 0;
                item.area_bottom_id = item.area_middle_id || 0;
                // if (!item.area_middle_id) return this.toast.present({ message: '두번째 장소를 선택해주세요.', color: 'warning' })
                // if (!item.area_bottom_id) return this.toast.present({ message: '세번째 장소를 선택해주세요.', color: 'warning' })
                if (!item.ctgo_area_risk_id)
                    return this.toast.present({ message: '위험지역유형을 선택해주세요.', color: 'warning' });
                if (!item.area_risk_name)
                    return this.toast.present({ message: '위험지역명을 작성해주세요.', color: 'warning' });
                // if (!item.area_risk_type) return this.toast.present({ message: '실내/실외를 선택해주세요.', color: 'warning' });
                // if (!item.manager_user_id) return this.toast.present({ message: '관리 책임자(정(을 선택해주세요.', color: 'warning' })
                // if (!item.second_user_id) return this.toast.present({ message: '관리 책임자(부)를 선택해주세요.', color: 'warning' })
                if (!item.area_risk_id) {
                    item.project_id = this.riskProjectForm.project_id;
                    const resInsert = yield this.connect.run('/project/risk_area/insert', item);
                    if (resInsert.rsCode === 0) {
                        this.getRiskArea();
                        if (this.addRiskAreaArr.length === i) {
                            this.toast.present({ message: '저장되었습니다.', color: 'primary' });
                        }
                    }
                    else {
                        this.toast.present({ message: resInsert.rsMsg, color: 'warning' });
                    }
                }
            }));
        });
    }
    nfcView(area_risk_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!area_risk_id)
                return;
            const modal = yield this.modal.create({
                component: _component_nfc_info_nfc_info_component__WEBPACK_IMPORTED_MODULE_10__.NfcInfoComponent,
                componentProps: { area_risk_id },
                cssClass: 'lhOrganization'
            });
            modal.present();
        });
    }
    riskAreaSearch(item) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            if (item.area_risk_id)
                return;
            const modal = yield this.modal.create({
                component: src_app_component_modal_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_8__.SearchAreaComponent,
                componentProps: {
                    project_id: this.riskProjectForm.project_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                const riskArea = this.resRiskArea.rsMap;
                for (let i = 0; i < riskArea.length; i++) {
                    if (!riskArea[i].area_risk_id) {
                        item.area_top_id = data === null || data === void 0 ? void 0 : data.area1selectedItem.area_top_id;
                        item.area_middle_id = (_a = data === null || data === void 0 ? void 0 : data.area2selectedItem) === null || _a === void 0 ? void 0 : _a.area_middle_id;
                        item.area_bottom_id = (_b = data === null || data === void 0 ? void 0 : data.area3selectedItem) === null || _b === void 0 ? void 0 : _b.area_bottom_id;
                        item.area_top_name = data === null || data === void 0 ? void 0 : data.area1selectedItem.area_top_name;
                        item.area_middle_name = (_c = data === null || data === void 0 ? void 0 : data.area2selectedItem) === null || _c === void 0 ? void 0 : _c.area_middle_name;
                        item.area_bottom_name = (_d = data === null || data === void 0 ? void 0 : data.area3selectedItem) === null || _d === void 0 ? void 0 : _d.area_bottom_name;
                    }
                }
            }
        });
    }
    deleteRisk() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.riskAreaData.length)
                return this.toast.present({ message: '최소 1개이상 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            this.riskAreaData.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                                if (item.area_risk_id) {
                                    const res = yield this.connect.run('/project/risk_area/delete', {
                                        area_risk_id: item.area_risk_id,
                                        project_id: this.riskProjectForm.project_id
                                    });
                                    if (res.rsCode === 0) {
                                        if (this.riskAreaData.length === i) {
                                            this.toast.present({ message: '삭제 되었습니다.', color: 'primary' });
                                        }
                                        this.getRiskArea();
                                    }
                                    else {
                                        this.toast.present({ message: res.rsMsg, color: 'warning' });
                                    }
                                }
                                else {
                                    const list = this.resRiskArea.rsMap;
                                    list.splice(list.findIndex(data => data === item), 1);
                                }
                            }));
                        })
                    }
                ]
            });
        });
    }
    allStatus(status) {
        console.log(status);
        this.resRiskArea.rsMap.forEach(item => {
            item.area_risk_use_state = status ? 1 : 0;
        });
    }
    editState(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.area_risk_use_state_data.push({
                area_risk_id: item.area_risk_id,
                area_risk_use_state: item.area_risk_use_state
            });
            // const res = await this.connect.run('/project/area/risk/use/update',);
        });
    }
    areaGPS() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.menuCount = 3;
            this.resGPS = yield this.connect.run('/project/area/risk/gps/get', this.riskProjectForm);
            if (this.resGPS.rsCode === 0) {
                this.getGpsCoodrinate((_a = this.resGPS.rsMap) === null || _a === void 0 ? void 0 : _a[0]);
            }
            ;
        });
    }
    getGpsCoodrinate(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            if (!item)
                return;
            this.gpsSelected = item;
            this.naverMapSetting = false;
            this.initMap = false;
            if (item.gps_id) {
                this.resGPScood = yield this.connect.run('/project/area/risk/gps_coodrinate/get', { gps_id: item.gps_id });
                if (this.resGPScood.rsCode === 0) {
                    const gps_coordinate_data = new src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__.GpsCoordinateData();
                    this.resGPScood.rsMap.forEach(data => {
                        if (item.gps_id === data.gps_id) {
                            gps_coordinate_data.gps_latitude.push(data.gps_latitude);
                            gps_coordinate_data.gps_longitude.push(data.gps_longitude);
                        }
                    });
                    this.gps_coordinate_data = gps_coordinate_data;
                }
                else {
                    this.gps_coordinate_data = new src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__.GpsCoordinateData();
                }
            }
            else {
                this.gps_coordinate_data = new src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__.GpsCoordinateData();
            }
            setTimeout(() => {
                this.initMap = true;
            }, 0);
        });
    }
    gpsSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.gpsSelected.area_risk_id)
                return this.toast.present({ message: '위험지역을 선택해주세요.', color: 'warning' });
            this.gpsSelected.gps_coordinate_data = this.gps_coordinate_data;
            const res = yield this.connect.run('/project/area/risk/gps/insert', this.gpsSelected, {});
            if (res.rsCode === 0) {
                this.toast.present({ message: '등록되었습니다.', color: 'primary' });
                this.areaGPS();
            }
            else {
                this.toast.present({ message: res.rsMsg, color: 'warning' });
            }
        });
    }
    updateState(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.updateEdit)
                return; // 업데이트 권한? 나중에 확인
            if (!item.area_risk_id)
                return; // 신규 등록일 시, id가 없으면 업데이트를 하면 안됨.
            let area_risk_use_state_data = [];
            area_risk_use_state_data.push({
                area_risk_id: item.area_risk_id,
                area_risk_use_state: item.area_risk_use_state
            });
            const resUpdate = yield this.connect.run('/project/area/risk/use/update', { area_risk_use_state_data: area_risk_use_state_data });
            if (resUpdate.rsCode === 0) {
                this.getRiskArea();
                this.toast.present({ message: '저장되었습니다.', color: 'primary' });
            }
            else {
                this.toast.present({ message: resUpdate.rsMsg, color: 'warning' });
            }
        });
    }
};
AreaStandardSetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef }
];
AreaStandardSetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-area-standard-set',
        template: _raw_loader_area_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_area_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AreaStandardSetPage);



/***/ }),

/***/ 71054:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/component/area.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaModule": () => (/* binding */ AreaModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _nfc_info_nfc_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfc-info/nfc-info.component */ 59179);







let AreaModule = class AreaModule {
};
AreaModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _nfc_info_nfc_info_component__WEBPACK_IMPORTED_MODULE_1__.NfcInfoComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule
        ],
        exports: [
            _nfc_info_nfc_info_component__WEBPACK_IMPORTED_MODULE_1__.NfcInfoComponent
        ]
    })
], AreaModule);



/***/ }),

/***/ 59179:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/component/nfc-info/nfc-info.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfcInfoComponent": () => (/* binding */ NfcInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nfc_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nfc-info.component.html */ 45437);
/* harmony import */ var _nfc_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfc-info.component.scss */ 60728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);





let NfcInfoComponent = class NfcInfoComponent {
    constructor(connect) {
        this.connect = connect;
    }
    ngOnInit() {
        this.getNfc();
    }
    getNfc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.nfcData = yield this.connect.run('/project/area/risk/nfc/get', { area_risk_id: this.area_risk_id });
            if (this.nfcData.rsCode === 0) { }
            ;
        });
    }
};
NfcInfoComponent.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService }
];
NfcInfoComponent.propDecorators = {
    area_risk_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
NfcInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nfc-info',
        template: _raw_loader_nfc_info_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nfc_info_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NfcInfoComponent);



/***/ }),

/***/ 70286:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/area-standard-set.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .map-container {\n  height: 400px;\n  background: var(--ion-color-step-50);\n}\n\n:host .map-container app-naver-map {\n  height: 100%;\n}\n\n:host app-button {\n  margin-bottom: 0;\n}\n\n:host .edit {\n  height: 230px;\n  overflow: scroll;\n}\n\n:host .edit th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n:host .selected td {\n  background: var(--ion-color-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtc3RhbmRhcmQtc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQWE7RUFDYixvQ0FBb0M7QUFBNUM7O0FBSEE7RUFLWSxZQUFZO0FBRXhCOztBQVBBO0VBU1EsZ0JBQWdCO0FBRXhCOztBQVhBO0VBWVEsYUFBYTtFQUNiLGdCQUFnQjtBQUd4Qjs7QUFoQkE7RUFlWSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFLdEI7O0FBdEJBO0VBc0JZLHNDQUFzQztBQUlsRCIsImZpbGUiOiJhcmVhLXN0YW5kYXJkLXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwKTtcbiAgICAgICAgYXBwLW5hdmVyLW1hcCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5lZGl0IHtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdGVkIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 60728:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-standard-set/component/nfc-info/nfc-info.component.scss ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZmMtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 678:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/area-standard-set/area-standard-set.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <ion-toolbar color=\"white\" *ngIf=\"!areaRoleCheck\" style=\"margin-bottom: 8px;\">\n    <app-row>\n      <app-col size=\"auto\">\n        <ion-segment color=\"primary\" [value]=\"1\">\n          <ion-segment-button (click)=\"this.menuCount = 1;\" [value]=\"1\">장소</ion-segment-button>\n          <ion-segment-button (click)=\"getRiskArea()\">위험지역</ion-segment-button>\n          <ion-segment-button (click)=\"areaGPS()\">위험지역<br>GPS 수집 범위</ion-segment-button>\n        </ion-segment>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <ng-container *ngIf=\"!areaRoleCheck\">\n    <app-row *ngIf=\"menuCount === 1\" style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"areaSearch()\">검색\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [disabled]=\"areaRoleCheck\" [(ngModel)]=\"AreaOneForm.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select [disabled]=\"true\" label=\"사업분야\" [(ngModel)]=\"form.ctgo_business_field_id\">\n                  <app-select-option [value]=\"1\">단지개발</app-select-option>\n                  <app-select-option [value]=\"2\">아파트</app-select-option>\n                  <app-select-option [value]=\"3\">교량 및 도록</app-select-option>\n                  <app-select-option [value]=\"4\">터널</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n\n      <app-col>\n        <div>\n          <ion-toolbar color=\"white\">\n            <h4>장소</h4>\n            <ion-buttons slot=\"end\">\n              <app-button [disabled]=\"areaRoleCheck\" (click)=\"updateGuidemap()\" fill=\"translucent\">저장</app-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </div>\n        <h4>\n          <app-row>\n            <app-col>\n              현장안내도\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button [disabled]=\"areaRoleCheck\">\n                <app-file view_type=\"GUIDE_MAP\" [(ngModel)]=\"form.file_data\" [file]=\"form.file\"\n                  [file_json]=\"form.file_json\"></app-file>\n                추가\n              </app-button>\n            </app-col>\n          </app-row>\n        </h4>\n        <ng-container *ngIf=\"form.file_data\">\n          <app-file-preview *ngFor=\"let futItem of form.file_data; let i = index\" (buttonClick)=\"form.file_data.splice(i,1)\" [futItem]=\"futItem\"></app-file-preview>\n        </ng-container>\n        <app-card>\n          <ion-toolbar color=\"white\" slot=\"top\">\n            <h5>장소등록</h5>\n          </ion-toolbar>\n          <app-row style=\"height: 300px;\">\n            <app-col>\n              <div style=\"text-align: right;\">\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaOneEdit('area1')\" fill=\"translucent\">추가</app-button>\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"deleteArea(1)\" color=\"danger\" fill=\"translucent\">삭제\n                </app-button>\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaOneEdit('area1',1)\" fill=\"translucent\">수정\n                </app-button>\n              </div>\n\n              <app-check-group [(ngModel)]=\"selectDataArea1\">\n                <app-table class=\"edit\">\n                  <thead>\n                    <tr>\n                      <th style=\"width: 20px;\">\n                        <app-check type=\"all\"></app-check>\n                      </th>\n                      <th>Area1</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr class=\"button\" *ngFor=\"let item of resAreaOne?.rsMap\" (click)=\"areaTow(item.area_top_id)\">\n                      <td [style]=\"area_top_id === item.area_top_id ? 'background-color: var(--ion-color-secondary)' : ''\">\n                        <app-check (click)=\"$event.stopPropagation()\" [on]=\"item\"></app-check>\n                      </td>\n                      <td [style]=\"area_top_id === item.area_top_id ? 'background-color: var(--ion-color-secondary)' : ''\">{{ item.area_top_name }}</td>\n                    </tr>\n                  </tbody>\n                </app-table>\n              </app-check-group>\n            </app-col>\n            <app-col>\n              <div style=\"text-align: right;\">\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaTwoEdit('area2')\" fill=\"translucent\">추가</app-button>\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"deleteArea(2)\" color=\"danger\" fill=\"translucent\">삭제\n                </app-button>\n                <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaTwoEdit('area2',1)\" fill=\"translucent\">수정\n                </app-button>\n              </div>\n\n              <app-check-group [(ngModel)]=\"selectDataArea2\">\n                <app-table class=\"edit\">\n                  <tbody>\n                    <th style=\"width: 20px;\">\n                      <app-check type=\"all\"></app-check>\n                    </th>\n                    <th>Area2</th>\n                  </tbody>\n                  <tbody>\n                    <tr class=\"button\" *ngFor=\"let areaTwo of resAreaTwo?.rsMap\"\n                      (click)=\"areaThree(areaTwo.area_middle_id)\">\n                      <td [style]=\"area_middle_id === areaTwo.area_middle_id ? 'background-color: var(--ion-color-secondary)' : ''\">\n                        <app-check [on]=\"areaTwo\" (click)=\"$event.stopPropagation()\"></app-check>\n                      </td>\n                      <td [style]=\"area_middle_id === areaTwo.area_middle_id ? 'background-color: var(--ion-color-secondary)' : ''\">{{ areaTwo.area_middle_name}}</td>\n                    </tr>\n                  </tbody>\n                </app-table>\n              </app-check-group>\n            </app-col>\n            <app-col>\n              <app-row>\n                <app-col>\n                  <div style=\"text-align: right;\">\n                    <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaThreeEdit('area3')\" fill=\"translucent\">추가\n                    </app-button>\n                    <app-button [disabled]=\"areaRoleCheck\" (click)=\"deleteArea(3)\" color=\"danger\" fill=\"translucent\">삭제\n                    </app-button>\n                    <app-button [disabled]=\"areaRoleCheck\" (click)=\"areaThreeEdit('area3',1)\" fill=\"translucent\">수정\n                    </app-button>\n                  </div>\n\n                  <app-check-group [(ngModel)]=\"selectDataArea3\">\n                    <app-table class=\"edit\">\n                      <thead>\n                        <th style=\"width: 20px;\">\n                          <app-check type=\"all\"></app-check>\n                        </th>\n                        <th>Area3</th>\n                      </thead>\n                      <tbody>\n                        <tr (click)=\"areaFour(areathree.area_bottom_id)\" class=\"button\" *ngFor=\"let areathree of resAreaThree?.rsMap\">\n                          <td [style]=\"area_bottom_id === areathree.area_bottom_id ? 'background-color: var(--ion-color-secondary)' : ''\">\n                            <app-check [on]=\"areathree\"></app-check>\n                          </td>\n                          <td [style]=\"area_bottom_id === areathree.area_bottom_id ? 'background-color: var(--ion-color-secondary)' : ''\">{{ areathree.area_bottom_name }}</td>\n                        </tr>\n                      </tbody>\n                    </app-table>\n                  </app-check-group>\n                </app-col>\n              </app-row>\n            </app-col>\n          </app-row>\n        </app-card>\n      </app-col>\n    </app-row>\n  </ng-container>\n\n  <app-row *ngIf=\"menuCount === 2\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"getRiskArea()\">검색\n              </app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene [disabled]=\"areaRoleCheck\" [(ngModel)]=\"riskProjectForm.project_id\"></app-select-scene>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" (click)=\"addRiskArea()\">추가</app-button>\n          <app-button [disabled]=\"areaRoleCheck\" color=\"danger\" fill=\"translucent\" (click)=\"deleteRisk()\">삭제\n          </app-button>\n          <!-- <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\">엑셀 다운로드</app-button> -->\n          <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" (click)=\"allStatus(true)\">전체 사용</app-button>\n          <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" (click)=\"allStatus(false)\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar *ngIf=\"!areaRoleCheck\" color=\"white\">\n        <h5>위험지역 목록 (총 {{resRiskArea?.rsObj.row_count || 0}}건)</h5>\n        <ion-buttons slot=\"end\">\n          <app-button (click)=\"riskSave()\" fill=\"translucent\">저장</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ng-container *ngIf=\"!areaRoleCheck\">\n        <app-check-group [(ngModel)]=\"riskAreaData\">\n          <app-table>\n            <thead>\n              <tr>\n                <th rowspan=\"2\" style=\"width: 40px;\">\n                  <app-check type=\"all\"></app-check>\n                </th>\n                <!-- <th rowspan=\"2\" style=\"width: 150ㅔㅌ;\">장소</th>\n                <th rowspan=\"2\">위험지역 유형</th>\n                <th rowspan=\"2\">위험지역명</th>\n                <th rowspan=\"2\">실내/실외</th>\n                <th rowspan=\"2\" style=\"width: 100px;\">GPS 등록 여부</th>\n                <th rowspan=\"2\" style=\"width: 100px;\">NFC 등록 여부</th>\n                <th colspan=\"2\">관리 책임자(인가자)</th>\n                <th rowspan=\"2\">사용여부</th> -->\n\n                <th width=\"200\">위험지역 유형</th>\n                <th>위험지역명</th>\n                <th width=\"100\">사용여부</th>\n              </tr>\n              <!-- <tr>\n                <th style=\"width: 80px;\">정</th>\n                <th style=\"width: 80px;\">부</th>\n              </tr> -->\n            </thead>\n            <tbody>\n              <!-- 추가 -->\n              <tr *ngFor=\"let item of resRiskArea?.rsMap\">\n                <td>\n                  <app-check [on]=\"item\"></app-check>\n                </td>\n                <!-- <td *ngIf=\"!item.area_top_name\">\n                  <app-input name=\"search-project\" (click)=\"riskAreaSearch(item)\">\n                    <app-img name=\"search\"></app-img>\n                  </app-input>\n                </td> -->\n                <!-- <td *ngIf=\"item.area_top_name\" (click)=\"riskAreaSearch(item)\">\n                  {{ (item.area_top_name ? item.area_top_name : '') + ' '\n                  + (item.area_middle_name ? item.area_middle_name : '') + ' '\n                  + (item.area_bottom_name ? item.area_bottom_name : '')}}\n                </td> -->\n                <td>\n                  <app-select [disabled]=\"item.area_risk_id ? true : false\" [(ngModel)]=\"item.ctgo_area_risk_id\">\n                    <app-select-option *ngFor=\"let opt of resCtgoRisk.rsMap\" [value]=\"opt.ctgo_area_risk_id\">{{\n                      opt.ctgo_area_risk_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td>\n                  <app-input [disabled]=\"item.area_risk_id ? true : false\" [(ngModel)]=\"item.area_risk_name\"></app-input>\n                </td>\n                <!-- <td>\n                  <app-select [disabled]=\"item.area_risk_id ? true : false\" [(ngModel)]=\"item.area_risk_type\">\n                    <app-select-option value=\"실내\">실내</app-select-option>\n                    <app-select-option value=\"실외\">실외</app-select-option>\n                  </app-select>\n                </td>\n                <td>{{ item.gps_state === 1 ? '등록' : '미등록'}}</td>\n                <td (click)=\"nfcView(item.area_risk_id)\">\n                  {{ item.nfc_state ? item.nfc_state +'개':'-'}}\n                </td>\n                <td>\n                  <app-select-people [disabled]=\"item.area_risk_id ? true : false\" label=\"\" \n                  [company_id]=\"user.userData.belong_data.company_id\" \n                  [(ngModel)]=\"item.manager_user_id\" [user_type]=\"'COMPANY'\">\n                  </app-select-people>\n                </td>\n                <td>\n                  <app-select-people [disabled]=\"item.area_risk_id ? true : false\" label=\"\" \n                  [company_id]=\"user.userData.belong_data.company_id\" \n                  [(ngModel)]=\"item.second_user_id\" [user_type]=\"'COMPANY'\">\n                  </app-select-people>\n                </td> -->\n                <td>\n                  <app-select (change)=\"updateState(item)\" (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.area_risk_use_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n              <!-- 추가 끝 -->\n<!--               \n              <tr *ngFor=\"let item of resRiskArea?.rsMap\">\n                <td>\n                  <app-check [on]=\"item\"></app-check>\n                </td>\n                <td *ngIf=\"!item.area_top_name\">\n                  <app-img style=\"width: 45%;\" name=\"search\" (click)=\"memberSearch(item)\"></app-img>\n                </td>\n                <td>\n                  {{ (item.area_top_name ? item.area_top_name : '') + ' '\n                  + (item.area_middle_name ? item.area_middle_name : '') + ' '\n                  + (item.area_bottom_name ? item.area_bottom_name : '')}}\n                </td>\n                <td>\n                  <app-select  [disabled]=\"true\"[(ngModel)]=\"item.ctgo_area_risk_id\">\n                    <app-select-option *ngFor=\"let opt of resCtgoRisk.rsMap\" [value]=\"opt.ctgo_area_risk_id\">{{\n                      opt.ctgo_area_risk_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td>\n                  <app-input [disabled]=\"true\" [(ngModel)]=\"item.area_risk_name\"></app-input>\n                </td>\n                <td>\n                  <app-select [disabled]=\"true\" [(ngModel)]=\"item.area_risk_type\">\n                    <app-select-option value=\"실내\">실내</app-select-option>\n                    <app-select-option value=\"실외\">실외</app-select-option>\n                  </app-select>\n                </td>\n                <td>{{ item.gps_state === 1 ? '등록' : '미등록'}}</td>\n                <td (click)=\"nfcView(item.area_risk_id)\">\n                  {{ item.nfc_state ? item.nfc_state +'개':'-'}}\n                </td>\n                <td>\n                  <app-select-people label=\"\" [disabled]=\"true\" [company_id]=\"user.userData.belong_data.company_id\" [(ngModel)]=\"item.manager_user_id\" [user_type]=\"'COMPANY'\">\n                  </app-select-people>\n                </td>\n                <td>\n                  <app-select-people label=\"\" [disabled]=\"true\" [company_id]=\"user.userData.belong_data.company_id\" [(ngModel)]=\"item.second_user_id\" [user_type]=\"'COMPANY'\">\n                  </app-select-people>\n                </td>\n                <td>\n                  <app-select (change)=\"updateState(item)\"(click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.area_risk_use_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr> -->\n            </tbody>\n          </app-table>\n        </app-check-group>\n        <app-pager [totalCount]=\"resRiskArea?.rsObj.row_count\" [limitNo]=\"riskProjectForm.limit_no\" (pagerChange)=\"getRiskArea($event)\"></app-pager>\n      </ng-container>\n      <ng-template #riskareaEmpty>\n        <app-row>\n          <app-col>\n            <app-card>\n              <h5>권한이 없습니다.</h5>\n            </app-card>\n          </app-col>\n        </app-row>\n      </ng-template>\n    </app-col>\n  </app-row>\n\n\n\n\n  <app-row *ngIf=\"menuCount === 3\" style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"areaGPS()\">검색\n              </app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene [disabled]=\"areaRoleCheck\" [(ngModel)]=\"riskProjectForm.project_id\"></app-select-scene>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <div>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"end\">\n            <app-button [disabled]=\"areaRoleCheck\" fill=\"translucent\" (click)=\"gpsSave()\">저장</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </div>\n      <ng-container *ngIf=\"!areaRoleCheck\">\n        <app-card>\n          <h5 style=\"text-align: center;\">GPS를 통해 근로자 위치 정보를 수집할 실외 위험지역 영역을 설정하여 주세요</h5>\n          <br>\n          <h5 style=\"color: black;\">&#8251; 영역 설정 방법</h5>\n          <h5 style=\"color: black;\">지도에서 현장 외각을 마우스 클릭을 통해 N개의 점을 선택하여 설정합니다.(점 3개 이상 클릭 필요)</h5>\n          <h6 style=\"color: black;\">좌클릭: 추가 / 우클릭: 삭제 / 드래그: 이동</h6>\n          <div class=\"map-container\">\n            <app-naver-map *ngIf=\"initMap\" [disabled]=\"naverMapSetting\" [(ngModel)]=\"gps_coordinate_data\"></app-naver-map>\n          </div>\n        </app-card>\n        <app-card>\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <h5>실외 위험지역</h5>\n          </ion-toolbar>\n          <app-table>\n            <thead>\n              <tr>\n                <!-- <th>장소</th> -->\n                <th>위험지역 유형</th>\n                <th>위험지역명</th>\n                <th>GPS 좌표값</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of resGPS?.rsMap\" [class.selected]=\"gpsSelected === item\" (click)=\"getGpsCoodrinate(item)\">\n                <!-- <td>\n                  {{\n                  (item.area_top_name ? item.area_top_name : '') + ' '\n                  + (item.area_middle_name ? item.area_middle_name : '') + ' '\n                  + (item.area_bottom_name ? item.area_bottom_name: '')}}\n                </td> -->\n                <td>{{item.ctgo_area_risk_name}}</td>\n                <td>{{item.area_risk_name}}</td>\n                <td>{{item.gps_state + '개'}}</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-card>\n      </ng-container>\n    </app-col>\n  </app-row>\n</ion-content>");

/***/ }),

/***/ 45437:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/area-standard-set/component/nfc-info/nfc-info.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>NFC 등록 여부</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n <app-table type=\"card\">\n   <thead>\n     <tr>\n      <th>NO</th>\n      <th>등록 NO</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngFor=\"let item of nfcData?.rsMap let i = index\">\n      <td>{{ i+1 }}</td>\n      <td>{{ item.serial_no }}</td>\n     </tr>\n   </tbody>\n </app-table>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_area-standard-set_area-standard-set_module_ts.js.map