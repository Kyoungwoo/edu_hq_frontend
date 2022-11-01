(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_customer-support_user-manual_manual-detail_manual-detail_module_ts"],{

/***/ 79607:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-detail/manual-detail-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualDetailPageRoutingModule": () => (/* binding */ ManualDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _manual_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-detail.page */ 44983);




const routes = [
    {
        path: '',
        component: _manual_detail_page__WEBPACK_IMPORTED_MODULE_0__.ManualDetailPage
    }
];
let ManualDetailPageRoutingModule = class ManualDetailPageRoutingModule {
};
ManualDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManualDetailPageRoutingModule);



/***/ }),

/***/ 97620:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-detail/manual-detail.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualDetailPageModule": () => (/* binding */ ManualDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _manual_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-detail-routing.module */ 79607);
/* harmony import */ var _manual_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-detail.page */ 44983);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/pipes/pipes.module */ 75180);









let ManualDetailPageModule = class ManualDetailPageModule {
};
ManualDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            _manual_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManualDetailPageRoutingModule
        ],
        declarations: [_manual_detail_page__WEBPACK_IMPORTED_MODULE_1__.ManualDetailPage]
    })
], ManualDetailPageModule);



/***/ }),

/***/ 44983:
/*!***************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-detail/manual-detail.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualDetailPage": () => (/* binding */ ManualDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_manual_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./manual-detail.page.html */ 86619);
/* harmony import */ var _manual_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-detail.page.scss */ 11266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manual-edit/manual-edit.page */ 37218);















let ManualDetailPage = class ManualDetailPage {
    constructor(el, alert, connect, nav, date, user, regex, promise, toast, _modal, changeDetector) {
        this.el = el;
        this.alert = alert;
        this.connect = connect;
        this.nav = nav;
        this.date = date;
        this.user = user;
        this.regex = regex;
        this.promise = promise;
        this.toast = toast;
        this._modal = _modal;
        this.changeDetector = changeDetector;
        this.permission = {
            edit: false
        };
        this.form = new _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__.ManualUpdateForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__.ManualUpdateForm()).validator;
    }
    ngOnInit() {
        if (this.manual_id) {
            this.getPermission();
            this.form.manual_id = this.manual_id;
            this.get();
        }
        else {
            this.toast.present({ color: 'warning', message: '잘못된 접근입니다.' });
            this._modal.dismiss();
        }
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.test.UserManual.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            if (this.permission.edit) {
                const editIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.test.UserManual.type.indexOf('EDIT');
                if (editIndex > -1) {
                    // 수정
                    el.querySelector('[name=edit]').dispatchEvent(new Event('click'));
                    yield this.promise.wait();
                    yield this.promise.toggleWait(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        const modal = yield this._modal.getTop();
                        const elEdit = modal === null || modal === void 0 ? void 0 : modal.querySelector('app-manual-edit');
                        return elEdit;
                    }));
                    return;
                }
                const removeIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.test.UserManual.type.indexOf('REMOVE');
                if (removeIndex > -1) {
                    // 삭제
                    el.querySelector('[name=remove]').dispatchEvent(new Event('click'));
                    yield this.promise.wait();
                    const alertButtons = document.querySelector('ion-alert').querySelectorAll('[type=button]');
                    alertButtons[1].dispatchEvent(new Event('click'));
                    return;
                }
            }
            else {
                // 닫기
                el.querySelector('name=dismiss').dispatchEvent(new Event('click'));
            }
        });
    }
    getPermission() {
        this.permission.edit = this.user.userData.user_role === 'LH_HEAD';
        console.log(this.permission);
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/support/manual/get', {
                manual_id: this.form.manual_id
            }, {
                parse: ['ctgo_manual_ids', 'manual_ctgo_data', 'manual_file_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
            }
            else {
                this.connect.error('error', res);
            }
        });
    }
    remove() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.alert.present({
                header: '사용자 매뉴얼 삭제',
                message: '사용자 매뉴얼을 삭제하시겠습니까?',
                buttons: [
                    { text: '취소' },
                    { text: '삭제', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/support/manual/delete', {
                                manual_ids: [this.form.manual_id]
                            }, {
                                loading: true
                            });
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        }) }
                ]
            });
        });
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__.ManualEditPage,
                componentProps: {
                    manual_id: this.form.manual_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                setTimeout(() => {
                    this._modal.dismiss(data);
                }, 100);
            }
        });
    }
};
ManualDetailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_9__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__.PromiseService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef }
];
ManualDetailPage.propDecorators = {
    manual_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
ManualDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-manual-detail',
        template: _raw_loader_manual_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manual_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManualDetailPage);



/***/ }),

/***/ 11266:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-detail/manual-detail.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\np {\n  color: var(--ion-color-dark);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVhbC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0VBQ0ksNEJBQTRCO0FBRWhDIiwiZmlsZSI6Im1hbnVhbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5wIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufSJdfQ== */");

/***/ }),

/***/ 86619:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/customer-support/user-manual/manual-detail/manual-detail.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>사용자 매뉴얼</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button name=\"dismiss\"></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>사용자 매뉴얼</h4>\n  <app-card>\n    <app-row mobileBreak>\n      <app-col>\n        <app-row>\n          <app-col size=\"100px\">\n            <dt>회사명</dt>\n          </app-col>\n          <app-col>\n            <dd>한국토지주택공사</dd>\n          </app-col>\n        </app-row>\n      </app-col>\n      <app-col>\n        <app-row>\n          <app-col size=\"100px\">\n            <dt>구분</dt>\n          </app-col>\n          <app-col>\n            <dd>\n              <span *ngFor=\"let menual_ctgo of form.manual_ctgo_data; let l = last\">\n                {{ menual_ctgo.ctgo_manual_name }}\n                <span *ngIf=\"!l\">/</span>\n              </span>\n\n              <span *ngIf=\"!form.manual_ctgo_data\">전체</span>\n            </dd>\n          </app-col>\n        </app-row>\n      </app-col>\n    </app-row>\n    <app-row mobileBreak>\n      <app-col>\n        <app-row>\n          <app-col size=\"100px\">\n            <dt>작성일</dt>\n          </app-col>\n          <app-col>\n            <dd>{{ form.create_date }}</dd>\n          </app-col>\n        </app-row>\n      </app-col>\n      <app-col>\n        <app-row>\n          <app-col size=\"100px\">\n            <dt>작성자</dt>\n          </app-col>\n          <app-col>\n            <dd>{{ form.create_user_name }}</dd>\n          </app-col>\n        </app-row>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <app-card>\n    <app-row mobileBreak>\n      <app-col size=\"100px\">\n        <dt>제목</dt>\n      </app-col>\n      <app-col>\n        <dd>{{ form.manual_title }}</dd>\n      </app-col>\n    </app-row>\n    <app-row mobileBreak>\n      <app-col size=\"100px\">\n        <dt>내용</dt>\n      </app-col>\n      <app-col>\n        <dd style=\"min-height: 200px;\" [innerHtml]=\"form.manual_text\"></dd>\n      </app-col>\n    </app-row>\n  </app-card>\n  <ng-container *ngIf=\"form.manual_file_data && form.manual_file_data.length\">\n    <h4>\n      첨부자료\n    </h4>\n    <app-file-preview *ngFor=\"let futItem of form.manual_file_data; let i = index;\" [futItem]=\"futItem\" [readonly]=\"true\"></app-file-preview>\n  </ng-container>\n</ion-content>\n<app-button-footer *ngIf=\"permission.edit\">\n  <app-button name=\"remove\" (click)=\"remove()\">삭제</app-button>\n  <app-button name=\"edit\" (click)=\"edit()\">수정</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_customer-support_user-manual_manual-detail_manual-detail_module_ts.js.map