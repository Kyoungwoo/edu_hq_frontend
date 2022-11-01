(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_task-management_tbm_tbm-registration_tbm-registration_module_ts"],{

/***/ 48422:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPage": () => (/* binding */ QrEducationInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-education-in.page.html */ 67567);
/* harmony import */ var _qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-education-in.page.scss */ 62477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);







let QrEducationInPage = class QrEducationInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        this.eduTime = `${this.item.education_safe_start_time} ~ ${this.item.education_safe_end_time}`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.education_safe_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_2___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"education_safe_id":"' + this.navParams.data.item.education_safe_id + '","type":"EDU"}' // `${this.navParams.data.item.education_safe_id}`
        });
    }
    downloadQR() {
        let link = document.createElement("a");
        link.download = 'QRcode';
        link.href = this.qr.image.currentSrc;
        link.click();
    }
    dismiss() {
        this._modal.dismiss(true);
    }
};
QrEducationInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrEducationInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrEducationInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-education-in',
        template: _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrEducationInPage);



/***/ }),

/***/ 42414:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-registration/tbm-registration-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmRegistrationPageRoutingModule": () => (/* binding */ TbmRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-registration.page */ 937);




const routes = [
    {
        path: '',
        component: _tbm_registration_page__WEBPACK_IMPORTED_MODULE_0__.TbmRegistrationPage,
    }
];
let TbmRegistrationPageRoutingModule = class TbmRegistrationPageRoutingModule {
};
TbmRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmRegistrationPageRoutingModule);



/***/ }),

/***/ 10206:
/*!**************************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-registration/tbm-registration.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmRegistrationPageModule": () => (/* binding */ TbmRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_registration_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-registration-routing.module */ 42414);
/* harmony import */ var _tbm_registration_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-registration.page */ 937);








let TbmRegistrationPageModule = class TbmRegistrationPageModule {
};
TbmRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_registration_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmRegistrationPageRoutingModule
        ],
        declarations: [_tbm_registration_page__WEBPACK_IMPORTED_MODULE_2__.TbmRegistrationPage]
    })
], TbmRegistrationPageModule);



/***/ }),

/***/ 937:
/*!************************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-registration/tbm-registration.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmRegistrationPage": () => (/* binding */ TbmRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-registration.page.html */ 15907);
/* harmony import */ var _tbm_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-registration.page.scss */ 723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tbm_unit_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tbm-unit/tbm-unit.page */ 33371);
/* harmony import */ var src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/modal/search-attendance/search-attendance.component */ 66822);
/* harmony import */ var _safety_education_educatiion_status_qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page */ 48422);
/* harmony import */ var _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../basic/service/util/scanner.service */ 47284);
/* harmony import */ var _work_plan_work_minutes_qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../work-plan/work-minutes/qr-safety-in/qr-safety-in.page */ 58081);






// import { TbmWorkerPage } from '../tbm-worker/tbm-worker.page'




let TbmRegistrationPage = class TbmRegistrationPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _work_plan_work_minutes_qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_6__.QrSafetyInPage,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_unit_tbm_unit_page__WEBPACK_IMPORTED_MODULE_2__.TbmUnitPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    // async worker() {
    //   const modal = await this._modal.create({
    //     component: TbmWorkerPage,
    //     componentProps: {}
    //   });
    //   modal.present();
    // }
    eduAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_3__.SearchAttendanceComponent,
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
    qrAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_educatiion_status_qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_4__.QrEducationInPage,
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
TbmRegistrationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_5__.ScannerService }
];
TbmRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tbm-registration',
        template: _raw_loader_tbm_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmRegistrationPage);



/***/ }),

/***/ 33371:
/*!********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmUnitPage": () => (/* binding */ TbmUnitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_unit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-unit.page.html */ 78229);
/* harmony import */ var _tbm_unit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-unit.page.scss */ 40918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




// import { ModalController } from '@ionic/angular';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let TbmUnitPage = class TbmUnitPage {
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
TbmUnitPage.ctorParameters = () => [];
TbmUnitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tbm-unit',
        template: _raw_loader_tbm_unit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_unit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmUnitPage);



/***/ }),

/***/ 58081:
/*!*******************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPage": () => (/* binding */ QrSafetyInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-safety-in.page.html */ 42628);
/* harmony import */ var _qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-safety-in.page.scss */ 78487);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_3__);







let QrSafetyInPage = class QrSafetyInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        console.log('QrSafetyInPage - ', this.item);
        this.meet_time = `${this.item.safety_meeting_start_time} ~ ${this.item.safety_meeting_end_time}`;
        this.meet_date = `${this.item.safety_meeting_date}(${this.item.safety_meeting_date_week_day})`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.safety_meeting_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_3___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"safety_meeting_id":"' + this.navParams.data.item.safety_meeting_id + '","type":"SAFE"}' // `${this.navParams.data.item.education_safe_id}`
        });
    }
    downloadQR() {
        let link = document.createElement("a");
        link.download = 'QRcode';
        link.href = this.qr.image.currentSrc;
        link.click();
    }
    dismiss() {
        this._modal.dismiss(true);
    }
};
QrSafetyInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrSafetyInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrSafetyInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-safety-in',
        template: _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrSafetyInPage);



/***/ }),

/***/ 62477:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1lZHVjYXRpb24taW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 723:
/*!**************************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-registration/tbm-registration.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.flex {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n}\n\n.people {\n  display: flex;\n  justify-content: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsY0FBUztFQUFULFNBQVM7QUFFYjs7QUFDQTtFQUNJLGFBQWE7RUFDYiwyQkFBMkI7QUFFL0IiLCJmaWxlIjoidGJtLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGFibGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmZsZXhfZW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbn1cblxuLnBlb3BsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4iXX0= */");

/***/ }),

/***/ 40918:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\napp-table .cencal_btn {\n  background-color: #ffdfdf;\n  color: #e65656;\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS11bml0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7QUFDYjs7QUFGQTtFQUlRLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUV2Qjs7QUFFQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUUzQiIsImZpbGUiOiJ0Ym0tdW5pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGFibGUge1xuICAgIG1hcmdpbjogMDtcblxuICAgIC5jZW5jYWxfYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZkZjtcbiAgICAgICAgY29sb3I6ICNlNjU2NTY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2NlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ 78487:
/*!*********************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zYWZldHktaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 67567:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\" [value]=\"item.education_safe_date\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\" [value]=\"item.ctgo_education_safe_name\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"교육시간\" [value]=\"eduTime\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\" [value]=\"item.education_safe_manager_names\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ }),

/***/ 15907:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-registration/tbm-registration.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- 모바일 -->\n<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>출석등록</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <app-row>\n      <app-col>\n        <app-select>\n          <app-select-option>작업자</app-select-option>\n        </app-select>\n      </app-col>\n      <app-col>\n        <app-input placeholder=\"검색어를 입력해주세요\">\n          <app-img name=\"search\"></app-img>\n        </app-input>\n      </app-col>\n    </app-row>\n\n    <app-card>\n      <app-row>\n        <app-col>\n          <h5>이상범</h5>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col class=\"flex\">\n          <p>(주)지에스아이엘</p>\n          <p>22.05.05(화)</p>\n          <p>작업팀장: 이상범</p>\n        </app-col>\n      </app-row>\n    </app-card>\n  </ion-content>\n\n<app-button-footer>\n  <app-card class=\"people\">\n    <ion-chip color=\"primary\">이상범</ion-chip>\n    <ion-chip color=\"primary\">구범수</ion-chip>\n  </app-card>\n  <app-button>취소</app-button>\n  <app-button>적용</app-button>\n</app-button-footer>\n</ng-container>");

/***/ }),

/***/ 78229:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-unit/tbm-unit.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>단위작업선택</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      \n\n      <app-row>\n        <app-col>\n          <h4>추가리스트</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-table>\n            <app-table>\n              <thead>\n                <tr>\n                  <th width=\"40px\">No</th>\n                  <th>공사명</th>\n                  <th>단위작업</th>\n                  <th>위험요인</th>\n                  <th>감소대책</th>\n                  <th>삭제</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>매립 공사</td>\n                  <td>장비 반입/작업 준비</td>\n                  <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n                  <td>차량 운행 경로에 유도원 2명이상 배치</td>\n                  <td><button class=\"cencal_btn\">X</button></td>\n                </tr>\n                <!-- <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n                  <td>매립 공사</td>\n                  <td>장비반입/작업준비</td>\n                  <td>차량운행 경로 미지정으로 인한 차량 충돌 사고</td>\n                  <td>차량 운행경로에 유도원 2명 이상 배치</td>\n                </tr> -->\n              </tbody>\n            </app-table>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col class=\"flex_center\">\n          <app-button>적용</app-button>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ }),

/***/ 42628:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"date\" label=\"회의일\" [value]=\"meet_date\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"name\" label=\"회의유형\" [value]=\"item.safety_meeting_type_full\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"회의시간\" [value]=\"meet_time\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석진행자\" [value]=\"item.user_name\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_task-management_tbm_tbm-registration_tbm-registration_module_ts.js.map