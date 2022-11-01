(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_today-work_my-status-situation_my-status-list_my-status-list_module_ts"],{

/***/ 76093:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/my-status-list/my-status-list-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStatusListPageRoutingModule": () => (/* binding */ MyStatusListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_status_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-status-list.page */ 77200);




const routes = [
    {
        path: '',
        component: _my_status_list_page__WEBPACK_IMPORTED_MODULE_0__.MyStatusListPage
    }
];
let MyStatusListPageRoutingModule = class MyStatusListPageRoutingModule {
};
MyStatusListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyStatusListPageRoutingModule);



/***/ }),

/***/ 56429:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/my-status-list/my-status-list.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStatusListPageModule": () => (/* binding */ MyStatusListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-status-list-routing.module */ 76093);
/* harmony import */ var _my_status_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-status-list.page */ 77200);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _component_status_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/status-search.module */ 77418);










let MyStatusListPageModule = class MyStatusListPageModule {
};
MyStatusListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _my_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyStatusListPageRoutingModule,
            _component_status_search_module__WEBPACK_IMPORTED_MODULE_4__.StatusSearchModule
        ],
        declarations: [_my_status_list_page__WEBPACK_IMPORTED_MODULE_1__.MyStatusListPage]
    })
], MyStatusListPageModule);



/***/ }),

/***/ 77200:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/my-status-list/my-status-list.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStatusListPage": () => (/* binding */ MyStatusListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-status-list.page.html */ 19321);
/* harmony import */ var _my_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-status-list.page.scss */ 63109);
/* harmony import */ var _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/util/scanner.service */ 47284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _component_status_search_detail_search_detail_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/status-search/detail-search/detail-search.component */ 11636);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);











// import { NfcService } from 'src/app/basic/service/util/nfc.service';
// import { QrService } from 'src/app/basic/service/util/qr.service';


let MyStatusListPage = class MyStatusListPage {
    constructor(nav, modal, connect, 
    // private qr: QrService,
    // private nfc: NfcService,
    alert, toast, user, scanner, languagePack) {
        this.nav = nav;
        this.modal = modal;
        this.connect = connect;
        this.alert = alert;
        this.toast = toast;
        this.user = user;
        this.scanner = scanner;
        this.languagePack = languagePack;
        this.open = false;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            project_name: '',
            master_company_id: this.user.userData.belong_data.master_company_id
        };
        this.gateState = false;
        this.gateOpen = false;
        this.notWorker = false;
        this.worker = false;
        this.nfcqrForm = {
            and_uq_id: 'test',
            ios_uq_id: 'test',
            nb_log_state: '',
            project_id: 0,
            serial_key: ''
        };
    }
    ngOnInit() {
        this.roleCheck();
    }
    roleCheck() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_role, user_type } = this.user.userData;
            if (user_role === 'MASTER_HEAD' ||
                user_role === 'LH_HEAD' ||
                user_role === 'PARTNER_HEAD' ||
                user_role === 'MASTER_GENERAL' ||
                user_role === 'PARTNER_GENERAL')
                this.notWorker = true;
            if (user_role === 'MASTER_HEAD' ||
                user_role === 'PARTNER_HEAD') {
                //  this.form.master_company_id = this.user.userData.belong_data.company_id;
            }
            if (user_role === 'PARTNER_WORKER' ||
                user_type === 'WORKER')
                this.notWorker = false;
            this.get();
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.resgate = yield this.connect.run('/work_project/nfc_beacon/my_gate/list', this.form, { parse: ['inner_data'] });
            if (this.resgate.rsCode === 0) {
            }
            else {
                // this.toast.present({message:'게이트 출역 기록이 없습니다.', color:'warning'});
            }
            this.resrisk = yield this.connect.run('/work_project/nfc_beacon/my_risk/list', this.form, { parse: ['inner_data'] });
            if (this.resrisk.rsCode === 0) {
            }
            else {
                if (!this.resgate) {
                    // this.toast.present({message:'게이트 먼저 입장해주세요.', color:'warning'});
                }
            }
        });
    }
    detailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _component_status_search_detail_search_detail_search_component__WEBPACK_IMPORTED_MODULE_8__.DetailSearchComponent,
                componentProps: {
                    type: 'my'
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form.master_company_id = data.master_company_id;
                this.form.project_id = data.project_id;
                this.get();
            }
        });
    }
    status(item) {
        item.open = !item.open;
    }
    workerSatus() {
        if (!this.form.project_id)
            return this.toast.present({ message: '현장을 선택해주세요.', color: 'warning' });
        this.nav.navigateForward('/worker-status-list', {
            state: {
                project_id: this.form.project_id,
                master_company_id: this.form.master_company_id
            }
        });
    }
    inNfcQr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.scanner.init().then((data) => { this.get(); });
        });
    }
};
MyStatusListPage.ctorParameters = () => [
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_2__.ScannerService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__.LanguagePackService }
];
MyStatusListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-my-status-list',
        template: _raw_loader_my_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyStatusListPage);



/***/ }),

/***/ 63109:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/my-status-list/my-status-list.page.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1zdGF0dXMtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 19321:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/today-work/my-status-situation/my-status-list/my-status-list.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('나의 출입 현황') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-menu-button></app-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n      <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-card *ngIf=\"resgate?.rsCode === 0\" (click)=\"gateOpen = !gateOpen\">\n    <app-row>\n      <app-col>\n        <!-- <h4>{{ resgate?.rsObj?.area_risk_name }}</h4> -->\n        <h4>게이트</h4>\n      </app-col>\n      <app-col size=\"auto\">\n        <ion-chip [color]=\"resgate?.rsObj?.last_state === '입장' ? 'primary' : 'medium'\">{{ resgate?.rsObj?.last_state }}\n        </ion-chip>\n      </app-col>\n      <app-col size=\"auto\">\n        <ion-chip [color]=\"resgate?.rsObj?.last_state === '입장' ? 'primary' : 'medium'\">{{ resgate?.rsObj?.last_time}}\n        </ion-chip>\n      </app-col>\n    </app-row>\n  </app-card>\n  <app-card *ngIf=\"gateOpen\">\n    <ng-container *ngFor=\"let item of resgate?.rsObj?.inner_data\">\n      <app-row>\n        <app-col size=\"auto\">\n        </app-col>\n        <app-col>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip color=\"primary\">{{ languagePack.getText('입장') }}</ion-chip>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip color=\"primary\">{{ item.inside_time }}</ion-chip>\n        </app-col>\n      </app-row>\n\n      <app-row *ngIf=\"item?.work_state === '퇴장'\">\n        <app-col size=\"auto\">\n        </app-col>\n        <app-col>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip color=\"medium\">{{ languagePack.getText('퇴장') }}</ion-chip>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip color=\"medium\">{{ item.outside_time }}</ion-chip>\n        </app-col>\n      </app-row>\n    </ng-container>\n  </app-card>\n\n  <ng-container *ngFor=\"let risk of resrisk?.rsMap\">\n    <app-card *ngIf=\"resrisk.rsCode === 0\" (click)=\"risk.checked = !risk.checked\">\n      <app-row>\n        <app-col>\n          <h4>{{ risk.area_top_name }}{{ risk.area_middle_name ? ' '+risk.area_middle_name : '' }}{{ risk.area_bottom_name ? ' '+risk.area_bottom_name : '' }}{{ risk.area_risk_name ? '/'+risk.area_risk_name : '' }}</h4>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip [color]=\"risk.last_state === '입장' ? 'primary' : 'medium'\">{{ risk.last_state }}</ion-chip>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip [color]=\"risk.last_state === '입장' ? 'primary' : 'medium'\">{{ risk.last_time}}</ion-chip>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card *ngIf=\"risk.checked\">\n      <ng-container *ngFor=\"let item of risk.inner_data\">\n        <app-row>\n          <app-col size=\"auto\">\n          </app-col>\n          <app-col>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"primary\">{{ languagePack.getText('입장') }}</ion-chip>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"primary\">{{ item.inside_time }}</ion-chip>\n          </app-col>\n        </app-row>\n  \n        <app-row *ngIf=\"item?.work_state === '퇴장'\">\n          <app-col size=\"auto\">\n          </app-col>\n          <app-col>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"medium\">{{ languagePack.getText('퇴장') }}</ion-chip>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"medium\">{{ item.outside_time }}</ion-chip>\n          </app-col>\n        </app-row>\n      </ng-container>\n    </app-card>\n  </ng-container>\n</ion-content>\n\n<app-button-footer>\n  <app-button *ngIf=\"notWorker\" (click)=\"workerSatus()\">{{ languagePack.getText('근로자 출입 관리') }}</app-button>\n  <app-button (click)=\"inNfcQr()\">{{ languagePack.getText('출입(QR / NFC)') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_today-work_my-status-situation_my-status-list_my-status-list_module_ts.js.map