(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_scene-list_scene-list_module_ts"],{

/***/ 20993:
/*!**************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-list/scene-list-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneListPageRoutingModule": () => (/* binding */ SceneListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scene_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene-list.page */ 57670);




const routes = [
    {
        path: '',
        component: _scene_list_page__WEBPACK_IMPORTED_MODULE_0__.SceneListPage
    }
];
let SceneListPageRoutingModule = class SceneListPageRoutingModule {
};
SceneListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SceneListPageRoutingModule);



/***/ }),

/***/ 83991:
/*!******************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-list/scene-list.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneListPageModule": () => (/* binding */ SceneListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scene_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene-list-routing.module */ 20993);
/* harmony import */ var _scene_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-list.page */ 57670);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _scene_edit_scene_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-edit/scene-edit.module */ 72137);










let SceneListPageModule = class SceneListPageModule {
};
SceneListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _scene_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SceneListPageRoutingModule,
            _scene_edit_scene_edit_module__WEBPACK_IMPORTED_MODULE_4__.SceneEditPageModule
        ],
        declarations: [_scene_list_page__WEBPACK_IMPORTED_MODULE_1__.SceneListPage]
    })
], SceneListPageModule);



/***/ }),

/***/ 57670:
/*!****************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-list/scene-list.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneListPage": () => (/* binding */ SceneListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scene_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scene-list.page.html */ 47657);
/* harmony import */ var _scene_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-list.page.scss */ 37198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _scene_edit_scene_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scene-edit/scene-edit.page */ 83196);











let SceneListPage = class SceneListPage {
    constructor(modal, connect, toast, date, alert, user) {
        this.modal = modal;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.alert = alert;
        this.user = user;
        this.form = {
            hq_business_id: 0,
            hq_regional_id: 0,
            search_text: '',
            limit_no: 0,
        };
        this.businessState = true;
        this.listLoading = false;
    }
    ngOnInit() {
        this.getList();
        this.getCtgoRegional();
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.listLoading = true;
            const res = yield this.connect.run('/project/list', this.form, {
                loading: '현장 불러오는중'
            });
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
                if (!this.form.limit_no)
                    this.toast.present({ color: 'warning', message: res.rsMsg });
                // else 더 로딩할 데이터가 없음
            }
            setTimeout(() => {
                this.listLoading = false;
            }, 1000);
        });
    }
    use_submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let project_use_state_data = [];
            this.res.rsMap.forEach(item => {
                if (item.state) {
                    project_use_state_data.push({
                        project_id: item.project_id,
                        project_use_state: item.project_use_state
                    });
                }
            });
            const res = yield this.connect.run('/project/use/update', { project_use_state_data: project_use_state_data });
            if (res.rsCode === 0) {
                this.toast.present({ message: '사용여부가 변경되었습니다.', position: 'bottom', color: 'primary' });
                this.getList();
            }
            else {
                this.connect.error('변경실패', res);
            }
        });
    }
    edit(project_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _scene_edit_scene_edit_page__WEBPACK_IMPORTED_MODULE_7__.SceneEditPage,
                componentProps: { project_id }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    changeUse(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.listLoading)
                return;
            let maxdate = this.date.dirrerence(item.contract_end_date, this.date.today());
            if (maxdate < 0) {
                yield this.alert.present({
                    header: '안내',
                    message: '공사 기간 만료 전에는 미사용으로 변경할 수 없습니다.'
                });
                this.getList();
            }
            else {
                item.state = true;
                if (item.project_use_state === 0) {
                    this.alert.present({
                        header: '안내',
                        message: '미사용으로 변경시, 모든 현장 조회 화면, 현장 선택 화면에 노출되지 않습니다.'
                            + '근로자의 경우 소속 정보에는 노출되지 않으나, 근로 이력에는 현장 정보가 남아있습니다.'
                    });
                }
            }
        });
    }
    getCtgoRegional() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.ctgoRegional = yield this.connect.run('/category/organization/regional/get', {}, {});
            if (this.ctgoRegional.rsCode === 0) {
            }
        });
    }
    getCtgoBusiness(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.businessState = false;
            if (!ev)
                this.form.hq_business_id = 0;
            this.ctgoBusiness = yield this.connect.run('/category/organization/business/get', {
                hq_regional_id: this.form.hq_regional_id
            }, {});
            if (this.ctgoBusiness.rsCode === 0) { }
        });
    }
};
SceneListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
SceneListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-scene-list',
        template: _raw_loader_scene_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scene_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SceneListPage);



/***/ }),

/***/ 37198:
/*!******************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-list/scene-list.page.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2VuZS1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 47657:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/scene-list/scene-list.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <!-- <tr>\n            <td>\n              <app-select label=\"지역본부\" [(ngModel)]=\"form.hq_regional_id\" (change)=\"getCtgoBusiness($event)\">\n                <app-select-option [value]=\"0\">전체</app-select-option>\n                <app-select-option *ngFor=\"let opt of ctgoRegional?.rsMap\" [value]=\"opt.hq_regional_id\">{{ opt.hq_regional_name }}</app-select-option>\n              </app-select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select label=\"사업본부\" [disabled]=\"businessState\" [(ngModel)]=\"form.hq_business_id\">\n                <app-select-option [value]=\"0\">전체</app-select-option>\n                <app-select-option *ngFor=\"let opt of ctgoBusiness?.rsMap\" [value]=\"opt.hq_business_id\">{{ opt.hq_business_name }}</app-select-option>\n              </app-select>\n            </td>\n          </tr> -->\n          <tr>\n            <td>\n              <app-input label=\"지역본부\" value=\"경기지역본부\" [disabled]=\"true\"></app-input>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"사업본부\" value=\"수원당수\" [disabled]=\"true\"></app-input>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-col>\n            <app-button fill=\"translucent\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\" (click)=\"edit()\">신규 등록</app-button>\n            <!-- <app-button fill=\"translucent\">엑셀 다운로드</app-button> -->\n          </app-col>\n        </ion-buttons>\n        <app-col style=\"text-align: right;\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n          <app-button fill=\"translucent\" (click)=\"use_submit()\">저장</app-button>\n        </app-col>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>현장 목록 (총 {{res?.rsObj?.row_count || 0}}건)</h5>\n      </ion-toolbar>\n      <!-- check-group ngModel -->\n      <app-check-group >\n        <app-table *ngIf=\"res?.rsCode === 0 else emptyList\">\n          <thead>\n            <tr>\n              <!-- <th style=\"width: 40px;\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n                <app-check type=\"all\" color=\"white\" size=\"small\" name=\"check\"></app-check>\n              </th> -->\n              <th style=\"width: 48px;\">No</th>\n              <!-- <th>지역본부</th>\n              <th>사업본부</th> -->\n              <th>현장명</th>\n              <th>원청사</th>\n              <th>감리사</th>\n              <th>공사기간</th>\n              <th>최근 업데이트</th>\n              <th>사용여부</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.project_id)\">\n              <!-- <td *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n                <app-check color=\"white\" size=\"small\" name=\"check\"></app-check>\n              </td> -->\n              <td>{{ item.index }}</td>\n              <!-- <td>{{ item.hq_regional_name }}</td>\n              <td>{{ item.hq_business_name }}</td> -->\n              <td>{{ item.project_name }}</td>\n              <td>{{ item.master_company_list }}</td>\n              <td>{{ item.super_company_list }}</td>\n              <td>{{ item.contract_start_date}} ~ {{ item.contract_end_date}}</td>\n              <td>{{ item.update_date }}</td>\n              <td *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n                <app-select (change)=\"changeUse(item)\" (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.project_use_state\">\n                  <app-select-option [value]=\"1\">Y</app-select-option>\n                  <app-select-option [value]=\"0\">N</app-select-option>\n                </app-select>\n              </td>\n              <td *ngIf=\"user.userData.user_role !== 'LH_HEAD'\">\n                {{ item.project_use_state ? 'Y' : 'N' }}\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-check-group>\n      <ng-template #emptyList>\n        <app-card>\n          <h5>현장 등록 목록이 없습니다.</h5>\n        </app-card>\n      </ng-template>\n      <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n    </app-col>\n  </app-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_scene-list_scene-list_module_ts.js.map