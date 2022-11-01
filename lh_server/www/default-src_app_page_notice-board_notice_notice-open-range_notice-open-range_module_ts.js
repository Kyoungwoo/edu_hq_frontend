(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_notice-board_notice_notice-open-range_notice-open-range_module_ts"],{

/***/ 972:
/*!************************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-open-range/notice-open-range-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeOpenRangePageRoutingModule": () => (/* binding */ NoticeOpenRangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notice_open_range_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-open-range.page */ 62106);




const routes = [
    {
        path: '',
        component: _notice_open_range_page__WEBPACK_IMPORTED_MODULE_0__.NoticeOpenRangePage
    }
];
let NoticeOpenRangePageRoutingModule = class NoticeOpenRangePageRoutingModule {
};
NoticeOpenRangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticeOpenRangePageRoutingModule);



/***/ }),

/***/ 96455:
/*!****************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-open-range/notice-open-range.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeOpenRangePageModule": () => (/* binding */ NoticeOpenRangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notice_open_range_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-open-range-routing.module */ 972);
/* harmony import */ var _notice_open_range_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-open-range.page */ 62106);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let NoticeOpenRangePageModule = class NoticeOpenRangePageModule {
};
NoticeOpenRangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _notice_open_range_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeOpenRangePageRoutingModule
        ],
        declarations: [_notice_open_range_page__WEBPACK_IMPORTED_MODULE_1__.NoticeOpenRangePage]
    })
], NoticeOpenRangePageModule);



/***/ }),

/***/ 62106:
/*!**************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-open-range/notice-open-range.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticePublicScope": () => (/* binding */ NoticePublicScope),
/* harmony export */   "NoticeOpenRangePage": () => (/* binding */ NoticeOpenRangePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notice_open_range_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notice-open-range.page.html */ 57281);
/* harmony import */ var _notice_open_range_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-open-range.page.scss */ 38442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);






class NoticePublicScope {
}
let NoticeOpenRangePage = class NoticeOpenRangePage {
    constructor(_modal, connect) {
        this._modal = _modal;
        this.connect = connect;
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new NoticePublicScope()).validator;
        this.menuCount = 1;
        this.list1 = [
            {
                value: '현장전체',
                text: '현장'
            },
            {
                value: '내 소속사만',
                text: '내 소속'
            },
            {
                value: '협력사별',
                text: '협력사'
            }
        ];
        this.list2 = [
            {
                value: '전체',
                text: '전체(관리자+작업자)'
            },
            {
                value: '관리자',
                text: '관리자'
            },
            {
                value: '작업자',
                text: '작업자'
            }
        ];
    }
    ngOnInit() {
        this.get();
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/category/certify/company/get', {
                company_contract_type: '협력사',
                search_text: ''
            });
        });
    }
    select1(item) {
        this.form.public_scope_one = item.value;
        // this.form.public_scope_two
        this.form.public_scope_allstate = false;
        this.form.scope_company_id = 0;
        this.form.scope_company_name = '';
    }
    select2(item) {
        // this.form.public_scope_one
        this.form.public_scope_two = item.value;
        // this.form.public_scope_allstate
        // this.form.company_id
        // this.form.company_name
    }
    select3All() {
        this.form.public_scope_allstate = true;
        this.form.scope_company_id = 0;
        this.form.scope_company_name = '';
    }
    select3(item) {
        // this.form.public_scope_one
        // this.form.public_scope_two
        this.form.public_scope_allstate = false;
        this.form.scope_company_id = item.company_id;
        this.form.scope_company_name = item.company_name;
    }
    submit() {
        if (!this.valid())
            return;
        this._modal.dismiss(this.form);
    }
    valid() {
        var _a;
        if (!this.form.public_scope_one)
            this.validator.public_scope_one = { valid: false, message: '항목을 선택해주세요.' };
        else
            this.validator.public_scope_one = { valid: true };
        if (!this.form.public_scope_two)
            this.validator.public_scope_two = { valid: false, message: '항목을 선택해주세요.' };
        else
            this.validator.public_scope_two = { valid: true };
        if (this.form.public_scope_one === '협력사별') {
            if (this.form.public_scope_allstate == null)
                this.validator.scope_company_id = { valid: false, message: '항목을 선택해주세요.' };
            else if (this.form.public_scope_allstate == false) {
                if (!this.form.scope_company_id)
                    this.validator.scope_company_id = { valid: false, message: '항목을 선택해주세요.' };
                else {
                    this.validator.public_scope_allstate = { valid: true };
                    this.validator.scope_company_id = { valid: true };
                    this.validator.scope_company_name = { valid: true };
                }
            }
        }
        else
            this.validator.scope_company_id = { valid: true };
        for (let key in this.validator) {
            if (!((_a = this.validator[key]) === null || _a === void 0 ? void 0 : _a.valid))
                return false;
        }
        return true;
    }
};
NoticeOpenRangePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService }
];
NoticeOpenRangePage.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NoticeOpenRangePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notice-open-range',
        template: _raw_loader_notice_open_range_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notice_open_range_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticeOpenRangePage);



/***/ }),

/***/ 38442:
/*!****************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-open-range/notice-open-range.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-col {\n  padding-left: 0;\n  padding-right: 0;\n  border-right: 1px solid var(--ion-color-step-100);\n}\n\n.flex-header {\n  background: var(--ion-color-medium-translucent);\n  height: 40px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-header app-img {\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n}\n\n.flex-list {\n  height: 300px;\n  overflow: auto;\n  background: var(--ion-color-white);\n}\n\n.flex-list.invalid {\n  border: 1px solid var(--ion-color-warning);\n}\n\n.flex-item {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.flex-item:hover {\n  background-color: var(--ion-color-step-100);\n}\n\n.flex-item.active {\n  background-color: var(--ion-color-primary-translucent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1vcGVuLXJhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaURBQWlEO0FBQ2xEOztBQUNBO0VBQ0MsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBRXhCOztBQVRBO0VBU0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBSVo7O0FBREE7RUFDQyxhQUFhO0VBQ2IsY0FBYztFQUNkLGtDQUFrQztBQUluQzs7QUFGQTtFQUNDLDBDQUEwQztBQUszQzs7QUFIQTtFQUNDLGVBQWU7RUFDZixZQUFZO0FBTWI7O0FBSkE7RUFDQywyQ0FBMkM7QUFPNUM7O0FBTEE7RUFDQyxzREFBc0Q7QUFRdkQiLCJmaWxlIjoibm90aWNlLW9wZW4tcmFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbCB7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0cGFkZGluZy1yaWdodDogMDtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbn1cbi5mbGV4LWhlYWRlciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdHJhbnNsdWNlbnQpO1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YXBwLWltZyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAtMTBweDtcblx0XHR6LWluZGV4OiAxO1xuXHR9XG59XG4uZmxleC1saXN0IHtcblx0aGVpZ2h0OiAzMDBweDtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG4uZmxleC1saXN0LmludmFsaWQge1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG4uZmxleC1pdGVtIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwYWRkaW5nOiA1cHg7XG59XG4uZmxleC1pdGVtOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbn1cbi5mbGV4LWl0ZW0uYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xufSJdfQ== */");

/***/ }),

/***/ 57281:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/notice/notice-open-range/notice-open-range.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>게시물 공개 범위 설정</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-row mobileBreak>\n    <app-card *ngIf=\"res && res?.rsCode !== 0\">{{ res.rsMsg }}</app-card>\n    <app-col>\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>전파 범위</div>\n        <app-img name=\"next\"></app-img>\n      </div>\n      <div class=\"flex-list\" [class.invalid]=\"validator.public_scope_one?.valid === false\">\n        <!-- item -->\n        <div *ngFor=\"let item of list1\" \n        class=\"flex-item\" [class.active]=\"form.public_scope_one === item.value\" (click)=\"select1(item)\">{{ item.text }}</div>\n      </div>\n      <app-input-caption color=\"warning\" *ngIf=\"validator.public_scope_one?.valid === false\">{{ validator.public_scope_one.message }}</app-input-caption>\n    </app-col>\n    <app-col>\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>조회자 유형</div>\n        <app-img name=\"next\"></app-img>\n      </div>\n      <div class=\"flex-list\" [class.invalid]=\"validator.public_scope_two?.valid === false\">\n        <!-- item -->\n        <div *ngFor=\"let item of list2\" \n        class=\"flex-item\" [class.active]=\"form.public_scope_two === item.value\" (click)=\"select2(item)\">{{ item.text }}</div>\n      </div>\n      <app-input-caption color=\"warning\" *ngIf=\"validator.public_scope_two?.valid === false\">{{ validator.public_scope_two.message }}</app-input-caption>\n    </app-col>\n    <app-col *ngIf=\"form.public_scope_one === '협력사별'\">\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>회사명</div>\n      </div>\n      <div class=\"flex-list\" [class.invalid]=\"validator.scope_company_id?.valid === false\">\n        <!-- item -->\n        <ng-container>\n          <div class=\"flex-item\" [class.active]=\"form.public_scope_allstate\" (click)=\"select3All()\">전체 협력사</div>\n          <div *ngFor=\"let item of res?.rsMap\" \n          class=\"flex-item\" [class.active]=\"form.scope_company_id === item.company_id\" (click)=\"select3(item)\">{{ item.company_name }}</div>\n        </ng-container>\n      </div>\n      <app-input-caption color=\"warning\" *ngIf=\"validator.scope_company_id?.valid === false\">{{ validator.scope_company_id.message }}</app-input-caption>\n    </app-col>\n  </app-row>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"submit()\">적용</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_notice-board_notice_notice-open-range_notice-open-range_module_ts.js.map