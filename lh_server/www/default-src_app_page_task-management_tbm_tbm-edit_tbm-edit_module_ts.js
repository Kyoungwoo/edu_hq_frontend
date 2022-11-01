(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_task-management_tbm_tbm-edit_tbm-edit_module_ts"],{

/***/ 21692:
/*!******************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-edit/tbm-edit-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmEditPageRoutingModule": () => (/* binding */ TbmEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-edit.page */ 72449);




const routes = [
    {
        path: '',
        component: _tbm_edit_page__WEBPACK_IMPORTED_MODULE_0__.TbmEditPage,
    }
];
let TbmEditPageRoutingModule = class TbmEditPageRoutingModule {
};
TbmEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmEditPageRoutingModule);



/***/ }),

/***/ 71858:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-edit/tbm-edit.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmEditPageModule": () => (/* binding */ TbmEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-edit-routing.module */ 21692);
/* harmony import */ var _tbm_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-edit.page */ 72449);
/* harmony import */ var _tbm_unit_tbm_unit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tbm-unit/tbm-unit.module */ 56227);
/* harmony import */ var _tbm_worker_tbm_worker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tbm-worker/tbm-worker.module */ 4905);
/* harmony import */ var _tbm_registration_tbm_registration_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tbm-registration/tbm-registration.module */ 10206);











let TbmEditPageModule = class TbmEditPageModule {
};
TbmEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmEditPageRoutingModule,
            _tbm_unit_tbm_unit_module__WEBPACK_IMPORTED_MODULE_3__.TbmUnitPageModule,
            _tbm_worker_tbm_worker_module__WEBPACK_IMPORTED_MODULE_4__.TbmWorkerPageModule,
            _tbm_registration_tbm_registration_module__WEBPACK_IMPORTED_MODULE_5__.TbmRegistrationPageModule
        ],
        declarations: [_tbm_edit_page__WEBPACK_IMPORTED_MODULE_2__.TbmEditPage]
    })
], TbmEditPageModule);



/***/ }),

/***/ 72449:
/*!********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-edit/tbm-edit.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmEditPage": () => (/* binding */ TbmEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-edit.page.html */ 76615);
/* harmony import */ var _tbm_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-edit.page.scss */ 76241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tbm_unit_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tbm-unit/tbm-unit.page */ 33371);
/* harmony import */ var _tbm_worker_tbm_worker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tbm-worker/tbm-worker.page */ 90294);
/* harmony import */ var src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/modal/search-attendance/search-attendance.component */ 66822);
/* harmony import */ var _safety_education_educatiion_status_qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page */ 48422);
/* harmony import */ var _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../basic/service/util/scanner.service */ 47284);
/* harmony import */ var _work_plan_work_minutes_qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../work-plan/work-minutes/qr-safety-in/qr-safety-in.page */ 58081);
/* harmony import */ var _tbm_registration_tbm_registration_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tbm-registration/tbm-registration.page */ 937);
/* harmony import */ var _component_modal_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../component/modal/search-people/search-people.component */ 17230);













let TbmEditPage = class TbmEditPage {
    constructor(_modal, scanner) {
        this._modal = _modal;
        this.scanner = scanner;
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() {
        this.tab();
    }
    QRscanner() {
        this.scanner.init();
        // this.qr.open();
    }
    qrModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _work_plan_work_minutes_qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_7__.QrSafetyInPage,
                // componentProps: {
                //   item:this.form
                // }
            });
            modal.present();
            // const { data } = await modal.onDidDismiss();
            // if(data) {
            //   this.getAttendList();
            // }
        });
    }
    /**
       * 탭 스크립트
       */
    tab() {
        const tabBtn = document.querySelectorAll('.tab_btn');
        const tabCont = document.querySelectorAll('.tab_edit');
        const tabFoot = document.querySelectorAll('.btn_foot');
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].addEventListener('click', () => {
                for (let i = 0; i < tabCont.length; i++) {
                    tabCont[i].classList.remove('active');
                    tabFoot[i].classList.remove('active');
                }
                tabCont[i].classList.add('active');
                tabFoot[i].classList.add('active');
            });
        }
    }
    unit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_unit_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__.TbmUnitPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    worker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_worker_tbm_worker_page__WEBPACK_IMPORTED_MODULE_3__.TbmWorkerPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    eduAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_4__.SearchAttendanceComponent,
                componentProps: {
                // project_id: this.user.userData.belong_data.project_id,
                // company_id: this.user.userData.belong_data.company_id,
                // educationType: false,
                // value: this.user_id,
                // title: '근로자'
                }
            });
            modal.present();
            // const { data } = await modal.onDidDismiss();
            // if(data) {
            //   this.user_id = [];
            //   data.forEach(item => {
            //     if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
            //   });
            //   const res = await this.connect.run('/education/attendant/insert',{
            //     attendant_user_ids:this.user_id,
            //     education_safe_id:this.item.education_safe_id
            //   });
            //   if(res.rsCode === 0) {
            //     this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
            //     this.eduGetList();
            //   } else {
            //     this.toast.present({message:res.rsMsg,color:'warning'});
            //   }
            //}
        });
    }
    registraction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_registration_tbm_registration_page__WEBPACK_IMPORTED_MODULE_8__.TbmRegistrationPage,
                componentProps: {
                // item:this.form
                }
            });
            modal.present();
        });
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _component_modal_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_9__.SearchPeopleComponent,
                componentProps: {
                // item:this.form
                }
            });
            modal.present();
        });
    }
    qrAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_educatiion_status_qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_5__.QrEducationInPage,
                componentProps: {
                // item:this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // this.eduGetList();
            }
        });
    }
};
TbmEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_6__.ScannerService }
];
TbmEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-tbm-edit',
        template: _raw_loader_tbm_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmEditPage);



/***/ }),

/***/ 48831:
/*!******************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPageRoutingModule": () => (/* binding */ TbmUnitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_unit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-unit.page */ 33371);




const routes = [
    {
        path: '',
        component: _tbm_unit_page__WEBPACK_IMPORTED_MODULE_0__.TbmUnitPage
    }
];
let TbmUnitPageRoutingModule = class TbmUnitPageRoutingModule {
};
TbmUnitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmUnitPageRoutingModule);



/***/ }),

/***/ 56227:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPageModule": () => (/* binding */ TbmUnitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_unit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-unit-routing.module */ 48831);
/* harmony import */ var _tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-unit.page */ 33371);








let TbmUnitPageModule = class TbmUnitPageModule {
};
TbmUnitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_unit_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmUnitPageRoutingModule
        ],
        declarations: [_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__.TbmUnitPage]
    })
], TbmUnitPageModule);



/***/ }),

/***/ 55292:
/*!**********************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPageRoutingModule": () => (/* binding */ TbmWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-worker.page */ 90294);




const routes = [
    {
        path: '',
        component: _tbm_worker_page__WEBPACK_IMPORTED_MODULE_0__.TbmWorkerPage
    }
];
let TbmWorkerPageRoutingModule = class TbmWorkerPageRoutingModule {
};
TbmWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmWorkerPageRoutingModule);



/***/ }),

/***/ 4905:
/*!**************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPageModule": () => (/* binding */ TbmWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-worker-routing.module */ 55292);
/* harmony import */ var _tbm_worker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-worker.page */ 90294);








let TbmWorkerPageModule = class TbmWorkerPageModule {
};
TbmWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmWorkerPageRoutingModule
        ],
        declarations: [_tbm_worker_page__WEBPACK_IMPORTED_MODULE_2__.TbmWorkerPage]
    })
], TbmWorkerPageModule);



/***/ }),

/***/ 90294:
/*!************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmWorkerPage": () => (/* binding */ TbmWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-worker.page.html */ 80623);
/* harmony import */ var _tbm_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-worker.page.scss */ 43480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




// import { ModalController } from '@ionic/angular';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let TbmWorkerPage = class TbmWorkerPage {
    constructor() {
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() {
    }
};
TbmWorkerPage.ctorParameters = () => [];
TbmWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tbm-worker',
        template: _raw_loader_tbm_worker_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmWorkerPage);



/***/ }),

/***/ 76241:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-edit/tbm-edit.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.tab_edit {\n  display: none;\n}\n\n.tab_edit .card_qr {\n  display: flex;\n  align-items: center;\n}\n\n.tab_edit.active {\n  display: block;\n}\n\n.btn_foot {\n  display: none;\n}\n\n.btn_foot.active {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7QUFDYjs7QUFFQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksYUFBYTtBQUNqQjs7QUFGQTtFQUdRLGFBQWE7RUFDYixtQkFBbUI7QUFHM0I7O0FBUEE7RUFPUSxjQUFjO0FBSXRCOztBQUFBO0VBQ0ksYUFBYTtBQUdqQjs7QUFKQTtFQUdRLGNBQWM7QUFLdEIiLCJmaWxlIjoidGJtLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRhYmxlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mbGV4X2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50YWJfZWRpdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAuY2FyZF9xciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4uYnRuX2Zvb3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5hY3RpdmV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 43480:
/*!**************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n  flex-grow: 1;\n}\n\n.img_box {\n  background-color: #eee;\n  width: 170px;\n  height: 170px;\n  border-radius: 4px;\n  margin-right: 20px;\n}\n\n.flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.photo_card {\n  display: flex;\n  justify-content: center;\n}\n\n.photo_card .img_box {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS13b3JrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULFlBQVc7QUFDZjs7QUFDQTtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBaUI7QUFFckI7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0FBRTdCOztBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFHM0I7O0FBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0FBRzNCOztBQUxBO0VBSVEsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUt4QiIsImZpbGUiOiJ0Ym0td29ya2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXgtZ3JvdzoxOyBcbn1cbi5pbWdfYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2NlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGhvdG9fY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuaW1nX2JveCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 76615:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-edit/tbm-edit.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>TBM 일지 작성</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row style=\"justify-content:flex-end\">\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">삭제</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">저장</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">수정</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">작업시작</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">작업종료</app-button>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h4>기본 정보</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"현장명\" value=\"세종시 블록형 단독주택공사\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"업체명\" value=\"(주)지에스아이엘\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"작성자\" value=\"이상범\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input-group label=\"작업일\"  [required]=\"true\">\n            <app-calendar></app-calendar>\n            ~\n            <app-calendar></app-calendar>\n          </app-input-group>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-construction [required]=\"true\"></app-select-construction>\n        </app-col>\n        <app-col>\n          <app-input label=\"작업장소\" placeholder=\"작업장소를 입력해주세요\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-tbm [required]=\"true\" placeholder=\"작업장소를 입력해주세요\"></app-select-tbm>\n        </app-col>\n        <app-col>\n          <app-input label=\"작업상태\" value=\"작업 전\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n\n      <app-row>\n        <app-col>\n          <h4>작업 내용</h4>\n        </app-col>\n        <app-col class=\"flex_end\">\n          <app-button (click)=\"unit()\">단위작업 선택</app-button>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-table>\n            <thead>\n              <tr>\n                <th>공사명</th>\n                <th>단위작업</th>\n                <th>위험요인</th>\n                <th>감소대책</th>\n              </tr>\n            </thead>\n            <tbody>\n              <!-- <tr>\n                <td colspan=\"4\">단위작업을 선택해주세요</td>\n              </tr> -->\n              <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n                <td>매립 공사</td>\n                <td>장비반입/작업준비</td>\n                <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n                <td>차량 운행경로에 유도원 2명 이상 배치</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h4>지시사항</h4>\n          <app-textarea value=\"안전하게 작업해주세요\"></app-textarea>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h4>첨부서류</h4>\n          <app-card color=\"light\" class=\"file-card\">\n            <app-row>\n              <app-col>\n                <h5>작업허가서를 첨부해주세요</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\"> 추가 </app-button>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <ng-container>\n            <app-row style=\"margin-top: 10px;\">\n              <app-col>\n                <h4>출석 현황 : 0명</h4>\n              </app-col>\n              <app-col size=\"3\">\n                <app-input placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n                  <app-img (click)=\"search()\" name=\"search\"></app-img>\n                </app-input>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button (click)=\"eduAdd()\" fill=\"translucent\" >출석등록(검색)</app-button>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button (click)=\"qrAdd()\">출석등록QR)</app-button> \n              </app-col>\n            </app-row>\n            <app-table>\n              <thead>\n                <tr>\n                  <th width=\"40px\">No</th>\n                  <th>업체명</th>\n                  <th>성명</th>\n                  <th>서명일시</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- <tr>\n                  <td colspan=\"4\">단위작업을 선택해주세요</td>\n                </tr> -->\n                <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n                  <td>1</td>\n                  <td>(주)지에스아이엘</td>\n                  <td (click)=\"worker()\">이상범(sb1234)</td>\n                  <td>2021.05.06 17:00</td>\n                </tr>\n              </tbody>\n            </app-table>\n        </ng-container>\n        </app-col>\n        <!-- <app-col>\n          <div class=\"flex_end\">\n            <app-button fill=\"translucent\">출석등록(검색)</app-button>\n            <app-button>출석등록(OR)</app-button>\n          </div>\n        </app-col> -->\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n\n\n  <!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>TBM</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n    \n    <ion-toolbar color=\"white\">\n      <!-- <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\"> -->\n      <ion-segment color=\"primary\" value=\"TBM 정보\">\n        <ion-segment-button value=\"TBM 정보\" class=\"tab_btn\">TBM 정보</ion-segment-button>\n        <ion-segment-button value=\"출석 현황\" class=\"tab_btn\">출석현황</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- tbm 정보 -->\n  <ion-content class=\"tab_edit active\">\n    <app-table>\n      <tbody>\n        <tr>\n          <th>작업상태</th>\n          <td><ion-chip color=\"success\">작업전</ion-chip></td>\n        </tr>\n        <tr>\n          <th>현장명</th>\n          <td>세종시 주택공사</td>\n        </tr>\n        <tr>\n          <th>업체명</th>\n          <td>(주)지에스아이엘</td>\n        </tr>\n        <tr>\n          <th>작성자</th>\n          <td>이상범</td>\n        </tr>\n        <tr>\n          <th>작성일</th>\n          <td>2022.12.22</td>\n        </tr>\n        <tr>\n          <th>공종</th>\n          <td>소방</td>\n        </tr>\n        <tr>\n          <th>작업팀장</th>\n          <td>전민배</td>\n        </tr>\n        <tr>\n          <th>작업장소</th>\n          <td>101,102동</td>\n        </tr>\n      </tbody>\n    </app-table>\n\n    <h4>작업내용</h4>\n    <app-table>\n      <thead>\n        <tr>\n          <th>공사명</th>\n          <th>단위작업</th>\n          <th>위험요인</th>\n          <th>감소대책</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td rowspan=\"2\">매립공사</td>\n          <td rowspan=\"2\">장비반입/작업준비</td>\n          <td>외부인출입에 위한 사고</td>\n          <td>차량 운행경로에 유도원 2명이상 배치</td>\n        </tr>\n        <tr>\n          <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n          <td>TBM 시 현장 출입 비인가자 재확인</td>\n        </tr>\n        <tr>\n          <td rowspan=\"2\">발파공사</td>\n          <td>작업준비</td>\n          <td>지장물 조사 미흡한 상태에서 작업 중 지장물 파괴로 인한 감전 사고</td>\n          <td>TBM 시 절연보호구 착용 여부 확인</td>\n        </tr>\n        <tr>\n          <td>천공(노천) 작업</td>\n          <td>천공 작업 중 암사면 단부로 추락</td>\n          <td>암사면 안전난간 설치 의무화</td>\n        </tr>\n      </tbody>\n    </app-table>\n\n    <h4>지시사항</h4>\n    <app-textarea value=\"안전하게 작업해주세요\"></app-textarea>\n\n    <h4>작업허가서 및 작업절차서</h4>\n    <app-card color=\"light\" class=\"file-card\">\n      <app-row>\n        <app-col>\n          <h5>휴일작업평가서.pdf (205KB)</h5>\n        </app-col>\n        <!-- <app-col size=\"auto\">\n          <app-button fill=\"translucent\"> 추가 </app-button>\n        </app-col> -->\n      </app-row>\n    </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<!-- // tbm 정보 -->\n\n<!-- 출석현황 -->\n<ion-content class=\"tab_edit\">\n  <h4>출석현황 : 총 01명</h4>\n  <app-row>\n    <app-col>\n      <app-input placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n        <app-img name=\"search\"></app-img>\n      </app-input>\n    </app-col>\n  </app-row>\n\n  <ion-row>\n    <ion-col size=\"6\" (click)=\"worker()\">\n      <app-card>\n        <app-row>\n          <app-col>\n            <h5>구범수(ksb1234)</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"success\">작업팀장</ion-chip>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col class=\"flex\">\n            <p>회사명 : (주)지에스아이엘</p>\n            <p>직종 : 비계공</p>\n          </app-col>\n        </app-row>\n      </app-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <app-card style=\"background-color: var(--ion-color-medium-translucent); height: 95px;\" (click)=\"qrAdd()\">\n        <app-row>\n          <app-col size=\"auto\">\n            <app-img name=\"tag\"></app-img>\n          </app-col>\n          <app-col>\n          </app-col>\n        </app-row>\n        <app-line></app-line>\n        <app-row>\n          <app-col style=\"text-align: center;\">\n            <h5>QR코드를 근로자에게 인식 시켜주세요</h5>\n          </app-col>\n        </app-row>\n      </app-card>\n    </ion-col>\n  </ion-row>\n\n<ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n  <ion-infinite-scroll-content loading-spinner=\"dots\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n<!-- // 출석현황 -->\n\n<app-button-footer class=\"btn_foot active\">\n  <app-button>번역(Translation)</app-button>\n</app-button-footer>\n\n<app-button-footer class=\"btn_foot\">\n  <app-button (click)=\"registraction()\">출석 등록(검색)</app-button>\n  <app-button (click)=\"QRscanner()\">출석 등록(QR)</app-button>\n</app-button-footer>\n</ng-container>");

/***/ }),

/***/ 80623:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-worker/tbm-worker.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>근로자 정보</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col style=\"display:flex;\">\n          <div class=\"img_box\">\n            근로자 이미지\n          </div>\n          <app-table>\n            <app-table>\n              <tbody>\n                <tr>\n                  <th>아이디</th>\n                  <td>gsil1</td>\n                  <th>성명</th>\n                  <td>김소장</td>\n                </tr>\n                <tr>\n                  <th>국적</th>\n                  <td>대한민국</td>\n                  <th>회사명</th>\n                  <td>(주)지에스아이엘</td>\n                </tr>\n                <tr>\n                  <th>직위</th>\n                  <td>작업자</td>\n                  <th>현장명</th>\n                  <td>세종시 단독주택공사</td>\n                </tr>\n                <tr>\n                  <th>공종</th>\n                  <td>건축</td>\n                  <th>계약유형</th>\n                  <td>일용직</td>\n                </tr>\n                <tr>\n                  <th>직종</th>\n                  <td>장비운전원(지게차)</td>\n                  <th>안전직무</th>\n                  <td>신호수/관리감독자</td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <div class=\"flex_center\">\n            <app-button>출석제외</app-button>\n            <app-button>확인</app-button>\n          </div>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>근로자 정보</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col>\n          <app-card class=\"photo_card\">\n            <div class=\"img_box\"></div>\n          </app-card>\n          \n          <app-table>\n            <app-table>\n              <tbody>\n                <tr>\n                  <th>아이디</th>\n                  <td>gsil1</td>\n                </tr>\n                <tr>\n                  <th>성명</th>\n                  <td>김소장</td>\n                </tr>\n                <tr>\n                  <th>국적</th>\n                  <td>대한민국</td>\n                </tr>\n                <tr>\n                  <th>회사명</th>\n                  <td>(주)지에스아이엘</td>\n                </tr>\n                <tr>\n                  <th>직위</th>\n                  <td>작업자</td>\n                </tr>\n                <tr>\n                  <th>현장명</th>\n                  <td>세종시 단독주택공사</td>\n                </tr>\n                <tr>\n                  <th>공종</th>\n                  <td>건축</td>\n                </tr>\n                <tr>\n                  <th>계약유형</th>\n                  <td>일용직</td>\n                </tr>\n                <tr>\n                  <th>직종</th>\n                  <td>장비운전원(지게차)</td>\n                </tr>\n                <tr>\n                  <th>안전직무</th>\n                  <td>신호수/관리감독자</td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  <app-button-footer>\n    <app-button>출석제외</app-button>\n    <app-button>확인</app-button>\n  </app-button-footer>\n</ng-container>\n  ");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_task-management_tbm_tbm-edit_tbm-edit_module_ts.js.map