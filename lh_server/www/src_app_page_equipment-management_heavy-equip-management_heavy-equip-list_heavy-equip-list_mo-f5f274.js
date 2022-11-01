(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_equipment-management_heavy-equip-management_heavy-equip-list_heavy-equip-list_mo-f5f274"],{

/***/ 86960:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list-routing.module.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipListPageRoutingModule": () => (/* binding */ HeavyEquipListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _heavy_equip_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heavy-equip-list.page */ 14147);




const routes = [
    {
        path: '',
        component: _heavy_equip_list_page__WEBPACK_IMPORTED_MODULE_0__.HeavyEquipListPage
    }
];
let HeavyEquipListPageRoutingModule = class HeavyEquipListPageRoutingModule {
};
HeavyEquipListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeavyEquipListPageRoutingModule);



/***/ }),

/***/ 21454:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipListPageModule": () => (/* binding */ HeavyEquipListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _heavy_equip_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heavy-equip-list-routing.module */ 86960);
/* harmony import */ var _heavy_equip_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-equip-list.page */ 14147);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _heavy_equip_edit_heavy_equip_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heavy-equip-edit/heavy-equip-edit.module */ 40982);









let HeavyEquipListPageModule = class HeavyEquipListPageModule {
};
HeavyEquipListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _heavy_equip_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeavyEquipListPageRoutingModule,
            _heavy_equip_edit_heavy_equip_edit_module__WEBPACK_IMPORTED_MODULE_3__.HeavyEquipEditPageModule
        ],
        declarations: [_heavy_equip_list_page__WEBPACK_IMPORTED_MODULE_1__.HeavyEquipListPage]
    })
], HeavyEquipListPageModule);



/***/ }),

/***/ 14147:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.page.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipListPage": () => (/* binding */ HeavyEquipListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_heavy_equip_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./heavy-equip-list.page.html */ 17764);
/* harmony import */ var _heavy_equip_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-equip-list.page.scss */ 71736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _heavy_equip_edit_heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../heavy-equip-edit/heavy-equip-edit.page */ 45254);











class HeavyEquipInfo {
}
let HeavyEquipListPage = class HeavyEquipListPage {
    constructor(modal, toast, connect, date, user, alert) {
        this.modal = modal;
        this.toast = toast;
        this.connect = connect;
        this.date = date;
        this.user = user;
        this.alert = alert;
        this.form = {
            ctgo_machinery_id: 0,
            end_date: this.date.today(),
            master_company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.master_company_id,
            partner_company_id: 0,
            project_id: this.user.userData.belong_data.project_id,
            search_text: '',
            start_date: this.date.today({ year: -3 }),
            limit_no: 0
        };
        this.selectedList = [];
    }
    ngOnInit() {
        if (this.user.userData.user_role === 'PARTNER_HEAD' || this.user.userData.user_role === 'PARTNER_GENERAL')
            this.form.partner_company_id = this.user.userData.belong_data.company_id;
        setTimeout(() => {
            this.getList();
        }, 300);
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/machinery/list', this.form);
            if (res.rsCode === 0) {
                this.res = Object.assign(Object.assign({}, this.res), res);
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    Heavyedit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _heavy_equip_edit_heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_7__.HeavyEquipEditPage,
                componentProps: {
                    machinery_id: item === null || item === void 0 ? void 0 : item.machinery_id,
                    list_data: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    Heavydelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/machinery/delete', {
                                machinery_ids: this.selectedList
                            });
                            if (res.rsCode === 0) {
                                this.getList();
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
        });
    }
    /**
     * @function btnPromise(): 권한에 따른 버튼활성화 메서드
     * @param type - 버튼의 type
     * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
     * @returns true or false
     */
    btnPromise(type, user_id = null) {
        let state = false;
        switch (type) {
            case 'insert':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
            case 'delete':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD')
                    state = true;
                break;
            case 'delete_check':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || user_id == this.user.userData.user_id)
                    state = true;
                break;
        }
        return state;
    }
};
HeavyEquipListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
HeavyEquipListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-heavy-equip-list',
        template: _raw_loader_heavy_equip_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_heavy_equip_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeavyEquipListPage);



/***/ }),

/***/ 71736:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.page.scss ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWF2eS1lcXVpcC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 17764:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.page.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n<ion-content>\n<app-row style=\"align-items: flex-start;\">\n  <app-col size=\"280px\">\n    <app-table type=\"card\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <app-row style=\"justify-content: space-between;\">\n          <app-col size=\"auto\"><h5>필터</h5></app-col>\n          <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button></app-col>\n        </app-row>\n      </ion-toolbar>\n      <tbody>\n        <tr>\n          <td>\n           <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\"></app-select-contractor>\n          </td>\n        </tr>\n        <tr>\n          <td>\n           <app-select-contractor-company name=\"company_id\" [master_company_id]=\"form.master_company_id\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.partner_company_id\" [all]=\"true\"></app-select-contractor-company>\n          </td>\n        </tr>\n        <tr>\n          <td>\n           <app-select-construction-machinery [project_id]=\"form.project_id\" [company_id]=\"form.master_company_id\" [(ngModel)]=\"form.ctgo_machinery_id\" [all]=\"true\"></app-select-construction-machinery>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-input-group label=\"등록일\">\n              <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n              ~\n              <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n            </app-input-group>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"this.form.search_text\"></app-input>\n          </td>\n        </tr>\n      </tbody>\n    </app-table>\n  </app-col>\n  <app-col>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <app-button *ngIf=\"btnPromise('insert')\" fill=\"translucent\" (click)=\"Heavyedit()\">등록</app-button>\n        <app-button *ngIf=\"btnPromise('delete')\" fill=\"translucent\" (click)=\"Heavydelete()\" color=\"danger\">삭제</app-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <h5>건설기계 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n    </ion-toolbar>\n    <app-check-group [(ngModel)]=\"selectedList\">\n      <app-table>\n        <thead>\n          <tr>\n            <th style=\"width: 40px;\" rowspan=\"2\"><app-check type=\"all\" color=\"white\" size=\"small\" name=\"check\"></app-check></th>\n            <th>건설기계구분</th>\n            <th>등록번호/명칭</th>\n            <th>원청사명</th>\n            <th>업체명</th>\n            <!-- <th>공종</th> -->\n            <th>등록일</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"Heavyedit(item)\">\n            <td style=\"width: 40px;\">\n              <app-check [disabled]=\"!btnPromise('delete_check')\" (click)=\"$event.stopPropagation()\" [on]=\"item.machinery_id\" color=\"white\" size=\"small\" name=\"check\"></app-check>\n            </td>\n            <td>{{ item.ctgo_machinery_name }}</td>\n            <td>{{ item.machinery_regist_no }}</td>\n            <td>{{ item.master_company_name }}</td>\n            <td>{{ item.partner_company_name}}</td>\n            <!-- <td>{{ item.ctgo_construction_name }}</td> -->\n            <td>{{ item.create_date }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-check-group>\n    <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n  </app-col>\n</app-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_equipment-management_heavy-equip-management_heavy-equip-list_heavy-equip-list_mo-f5f274.js.map