(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_customer-support_user-manual_manual-list_manual-list_module_ts"],{

/***/ 70307:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-list/manual-list-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualListPageRoutingModule": () => (/* binding */ ManualListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _manual_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-list.page */ 1459);




const routes = [
    {
        path: '',
        component: _manual_list_page__WEBPACK_IMPORTED_MODULE_0__.ManualListPage
    }
];
let ManualListPageRoutingModule = class ManualListPageRoutingModule {
};
ManualListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManualListPageRoutingModule);



/***/ }),

/***/ 62996:
/*!*************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-list/manual-list.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualListPageModule": () => (/* binding */ ManualListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _manual_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-list-routing.module */ 70307);
/* harmony import */ var _manual_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-list.page */ 1459);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_directive_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/directive/directive.module */ 71845);
/* harmony import */ var _manual_detail_search_manual_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manual-detail-search/manual-detail-search.module */ 57058);
/* harmony import */ var _manual_edit_manual_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manual-edit/manual-edit.module */ 73712);
/* harmony import */ var _manual_detail_manual_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manual-detail/manual-detail.module */ 97620);












let ManualListPageModule = class ManualListPageModule {
};
ManualListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_basic_directive_directive_module__WEBPACK_IMPORTED_MODULE_3__.DirectiveModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _manual_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManualListPageRoutingModule,
            _manual_detail_search_manual_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.ManualDetailSearchPageModule,
            _manual_edit_manual_edit_module__WEBPACK_IMPORTED_MODULE_5__.ManualEditPageModule,
            _manual_detail_manual_detail_module__WEBPACK_IMPORTED_MODULE_6__.ManualDetailPageModule
        ],
        declarations: [_manual_list_page__WEBPACK_IMPORTED_MODULE_1__.ManualListPage]
    })
], ManualListPageModule);



/***/ }),

/***/ 1459:
/*!***********************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-list/manual-list.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualListPage": () => (/* binding */ ManualListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_manual_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./manual-list.page.html */ 11955);
/* harmony import */ var _manual_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-list.page.scss */ 2794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _manual_detail_search_manual_detail_search_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manual-detail-search/manual-detail-search.page */ 85833);
/* harmony import */ var _manual_detail_manual_detail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manual-detail/manual-detail.page */ 44983);
/* harmony import */ var _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manual-edit/manual-edit.page */ 37218);















let ManualListPage = class ManualListPage {
    constructor(user, el, _modal, connect, date, promise, changeDetector, toast, languagePack) {
        this.user = user;
        this.el = el;
        this._modal = _modal;
        this.connect = connect;
        this.date = date;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.toast = toast;
        this.languagePack = languagePack;
        this.form = new _manual_detail_search_manual_detail_search_page__WEBPACK_IMPORTED_MODULE_9__.ManualListForm();
        this.permission = {
            edit: false
        };
    }
    ngOnInit() {
        this.getPermission();
        this.form.start_date = this.date.today({ year: -3 });
        this.form.end_date = this.date.today();
        this.get();
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 권한체크
            if (this.permission.edit) {
                const addIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.indexOf('ADD');
                if (addIndex > -1) {
                    //추가
                    el.querySelector('[name=add]').dispatchEvent(new Event('click'));
                    yield this.promise.wait();
                    yield this.promise.toggleWait(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () { return yield this._modal.getTop(); }));
                    yield this.promise.wait();
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.splice(addIndex, 1);
                }
                const editIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.indexOf('EDIT');
                if (editIndex > -1) {
                    //가장 위엣놈 클릭 후 수정
                    el.querySelector('[name=item]').dispatchEvent(new Event('click'));
                    yield this.promise.wait();
                    yield this.promise.toggleWait(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () { return yield this._modal.getTop(); }));
                    yield this.promise.wait();
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.splice(editIndex, 1);
                }
                const removeIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.indexOf('REMOVE');
                if (removeIndex > -1) {
                    // 가장 위앳놈 삭제
                    el.querySelector('[name=item]').dispatchEvent(new Event('click'));
                    yield this.promise.wait();
                    yield this.promise.toggleWait(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () { return yield this._modal.getTop(); }));
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.type.splice(removeIndex, 1);
                }
                // 가장 위엣놈 즐겨찾기 삭제 및 새로고침
                el.querySelector('[name=pin_state]').dispatchEvent(new Event('click'));
                yield this.promise.wait();
                el.querySelector('[name=search]').dispatchEvent(new Event('click'));
            }
        });
    }
    getPermission() {
        this.permission.edit = this.user.userData.user_role === 'LH_HEAD';
    }
    getMobile($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/support/manual/list', this.form, {
                parse: ['manual_ctgo_data', 'manual_file_data']
            });
            if (res.rsCode === 0) {
                res.rsMap.forEach(item => {
                    this.res.rsMap.push(item);
                });
            }
            else if (res.rsCode === 1008) {
                // 더 로딩할 데이터가 없음
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
            setTimeout(() => {
                $event.target.complete();
            }, 50);
        });
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/support/manual/list', this.form, {
                parse: ['manual_ctgo_data', 'manual_file_data']
            });
            if (res.rsCode === 0) {
                this.res = res;
            }
            else if (res.rsCode === 1008) {
                if (!this.form.limit_no)
                    this.toast.present({ color: 'warning', message: res.rsMsg });
                // else 더 로딩할 데이터가 없음
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _manual_detail_search_manual_detail_search_page__WEBPACK_IMPORTED_MODULE_9__.ManualDetailSearchPage,
                componentProps: {
                    form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.form = data;
                this.get(0);
            }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _manual_edit_manual_edit_page__WEBPACK_IMPORTED_MODULE_11__.ManualEditPage,
                componentProps: {
                    manual_id: item === null || item === void 0 ? void 0 : item.manual_id
                }
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.get();
            }
        });
    }
    detail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _manual_detail_manual_detail_page__WEBPACK_IMPORTED_MODULE_10__.ManualDetailPage,
                componentProps: {
                    manual_id: item === null || item === void 0 ? void 0 : item.manual_id
                }
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.get();
            }
        });
    }
    pinStateChange($event, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            $event.stopPropagation();
            item.pin_state = item.pin_state ? 0 : 1;
            const res = yield this.connect.run('/support/manual/pin/insert', {
                manual_id: item.manual_id,
                pin_state: item.pin_state
            });
            if (res.rsCode) {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
};
ManualListPage.ctorParameters = () => [
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
ManualListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-manual-list',
        template: _raw_loader_manual_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manual_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManualListPage);



/***/ }),

/***/ 2794:
/*!*************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-list/manual-list.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 11955:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/customer-support/user-manual/manual-list/manual-list.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{ languagePack.getText('사용자 매뉴얼') }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-manual [(ngModel)]=\"form.ctgo_manual_ids\" [multiple]=\"true\" (change)=\"get(0)\"></app-select-manual>\n        <app-button (click)=\"openDetailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-card [button]=\"true\" *ngFor=\"let item of res?.rsMap\" (click)=\"detail(item)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.manual_title }}</h5>\n          <p>{{ item.company_name }}/{{ item.update_user_name }}</p>\n          <p>{{ languagePack.getText('작성일') }} : {{ item.update_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <ng-container *ngIf=\"item.manual_ctgo_data && item.manual_ctgo_data.length; else tempEmpty\">\n            <ion-badge *ngFor=\"let menual_ctgo of item.manual_ctgo_data; let l = last\" color=\"success\">\n              {{ menual_ctgo.ctgo_manual_name }}\n            </ion-badge>\n          </ng-container>\n          <ng-template #tempEmpty>\n            <ion-badge color=\"success\">\n              전체\n            </ion-badge>\n          </ng-template>\n        </app-col>\n      </app-row>\n    </app-card>\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n</ng-container>\n\n<!-- pc -->\n<ng-container *mobileHidden>\n  <ion-header>\n    <app-header-admin></app-header-admin>\n  </ion-header>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button name=\"search\" fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-manual [(ngModel)]=\"form.ctgo_manual_ids\" [multiple]=\"true\"></app-select-manual>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"등록일\" [required]=\"true\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.user_role === 'LH_HEAD'\">\n          <ion-buttons slot=\"start\">\n            <app-button name=\"add\" fill=\"translucent\" (click)=\"edit()\">등록</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>사용자 매뉴얼 목록 (총 {{ res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <ng-container *ngIf=\"res\">\n          <app-table>\n            <thead>\n              <tr>\n                <th width=\"40px;\">\n                  고정\n                </th>\n                <th>구분</th>\n                <th>제목</th>\n                <th>업체명</th>\n                <th>작성자</th>\n                <th>작성일</th>\n                <th style=\"width: 50px;\">조회수</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr name=\"item\" class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"detail(item)\">\n                <td name=\"pin_state\" (click)=\"pinStateChange($event, item)\">\n                  <app-button size=\"small\" shape=\"square\" fill=\"translucent\"\n                  [color]=\"item.pin_state ? 'star' : 'medium'\">\n                    <ion-icon name=\"star\"></ion-icon>\n                  </app-button>\n                </td>\n                <td>\n                  <ng-container *ngIf=\"item.manual_ctgo_data && item.manual_ctgo_data.length; else tempEmpty\">\n                    <span *ngFor=\"let menual_ctgo of item.manual_ctgo_data; let l = last\">\n                      {{ menual_ctgo.ctgo_manual_name }}\n                      <span *ngIf=\"!l\">/</span>\n                    </span>\n                  </ng-container>\n                  <ng-template #tempEmpty>\n                    전체\n                  </ng-template>\n                </td>\n                <td style=\"text-align: left;\">{{ item.manual_title }}</td>\n                <td>{{ item.company_name }}</td>\n                <!-- <td>{{ item.create_user_name }}{{ item.create_date !== item.update_date ? ' / ' + item.update_user_name : '' }}</td> -->\n                <td>{{ item.create_user_name }}</td>\n                <!-- <td>{{ item.create_date }}{{ item.create_date !== item.update_date ? ' / ' + item.update_date : '' }}</td> -->\n                <td>{{ item.create_date }}</td>\n                <td>{{ item.manual_views }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n          <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>   \n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_customer-support_user-manual_manual-list_manual-list_module_ts.js.map