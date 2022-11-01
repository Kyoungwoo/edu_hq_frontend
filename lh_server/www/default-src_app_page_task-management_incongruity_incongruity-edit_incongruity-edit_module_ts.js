(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_task-management_incongruity_incongruity-edit_incongruity-edit_module_ts"],{

/***/ 81628:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-edit/incongruity-edit-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityEditPageRoutingModule": () => (/* binding */ IncongruityEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incongruity_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incongruity-edit.page */ 23652);




const routes = [
    {
        path: '',
        component: _incongruity_edit_page__WEBPACK_IMPORTED_MODULE_0__.IncongruityEditPage
    }
];
let IncongruityEditPageRoutingModule = class IncongruityEditPageRoutingModule {
};
IncongruityEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncongruityEditPageRoutingModule);



/***/ }),

/***/ 27646:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-edit/incongruity-edit.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityEditPageModule": () => (/* binding */ IncongruityEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _incongruity_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-edit-routing.module */ 81628);
/* harmony import */ var _incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incongruity-edit.page */ 23652);








let IncongruityEditPageModule = class IncongruityEditPageModule {
};
IncongruityEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _incongruity_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__.IncongruityEditPageRoutingModule,
        ],
        declarations: [_incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__.IncongruityEditPage]
    })
], IncongruityEditPageModule);



/***/ }),

/***/ 23652:
/*!********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-edit/incongruity-edit.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityEditPage": () => (/* binding */ IncongruityEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incongruity_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incongruity-edit.page.html */ 6275);
/* harmony import */ var _incongruity_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-edit.page.scss */ 29865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let IncongruityEditPage = class IncongruityEditPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
        this.tab();
    }
    /**
     * 탭 스크립트
     */
    tab() {
        const tabBtn = document.querySelectorAll('.tab_btn');
        const tabCont = document.querySelectorAll('.tab_edit');
        // const tabFoot = document.querySelectorAll('.btn_foot');
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].addEventListener('click', () => {
                for (let i = 0; i < tabCont.length; i++) {
                    tabCont[i].classList.remove('active');
                    // tabFoot[i].classList.remove('active');
                }
                tabCont[i].classList.add('active');
                // tabFoot[i].classList.add('active');
            });
        }
    }
};
IncongruityEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
IncongruityEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-incongruity-edit',
        template: _raw_loader_incongruity_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incongruity_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncongruityEditPage);



/***/ }),

/***/ 29865:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-edit/incongruity-edit.page.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ng-star-inserted {\n  margin-top: 0 !important;\n}\n\napp-table app-check {\n  justify-content: center;\n}\n\napp-table app-input {\n  width: 100%;\n  background-color: transparent;\n}\n\n.tab_edit {\n  display: none;\n}\n\n.tab_edit.active {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29uZ3J1aXR5LWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0VBRVEsdUJBQXVCO0FBQS9COztBQUZBO0VBS1EsV0FBVztFQUNYLDZCQUE2QjtBQUNyQzs7QUFHQTtFQUNJLGFBQWE7QUFBakI7O0FBREE7RUFHUSxjQUFjO0FBRXRCIiwiZmlsZSI6ImluY29uZ3J1aXR5LWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuYXBwLXRhYmxlIHtcbiAgICBhcHAtY2hlY2sge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgYXBwLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLnRhYl9lZGl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 6275:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/incongruity/incongruity-edit/incongruity-edit.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>부적합(아차사고) 상세</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <form>\n      <app-row style=\"justify-content:flex-end\">\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">저장</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">삭제</app-button>\n        </app-col>\n      </app-row>\n\n      <app-row>\n        <app-col>\n          <app-row>\n            <app-col>\n              <h4>부적합사항</h4>\n            </app-col>\n          </app-row>\n\n              <app-input label=\"작성자\" value=\"이상범/(주)지에스아이엘\" [readonly]=\"true\" [disabled]=\"true\"></app-input>\n              <app-input label=\"발생장소\" placeholder=\"장소를 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n              <app-input-group label=\"발생일시\"  [required]=\"true\">\n                <app-calendar></app-calendar>\n                ~\n                <app-datetime></app-datetime>\n              </app-input-group>\n              <app-input label=\"부적합내용\" placeholder=\"부적합내용을 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n          <app-row>\n            <app-col style=\"padding:0;\">\n              <ion-toolbar color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>부적합 파일 등록</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <app-button>추가\n                      <app-file name=\"input\"></app-file>\n                    </app-button>\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <ng-container>\n                <!-- <app-file-preview type=\"auto\"></app-file-preview> -->\n              </ng-container>\n            </app-col>\n          </app-row>\n        </app-col>\n        <app-col>\n          <app-row>\n            <app-col>\n              <h4>조치 사항</h4>\n            </app-col>\n          </app-row>\n\n              <app-select-action-people></app-select-action-people>\n              <app-select-action></app-select-action>\n              <app-input-group label=\"조치일시\"  [required]=\"true\">\n                <app-calendar></app-calendar>\n                ~\n                <app-datetime></app-datetime>\n              </app-input-group>\n              <app-input label=\"조치내용\" placeholder=\"조치내용을 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n              <!-- <app-card>\n                부적합 파일을 등록해주세요\n                <app-file view_type=\"\"></app-file>\n              </app-card> -->\n\n              <!-- ## safty-education-detail-edit 참고 ## -->\n              <ion-toolbar color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>부적합 파일 등록</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <app-button>추가\n                      <app-file name=\"input\"></app-file>\n                    </app-button>\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <ng-container>\n                <!-- <app-file-preview type=\"auto\"></app-file-preview> -->\n              </ng-container>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>부적합(아차사고) 상세</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <!-- <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\"> -->\n      <ion-segment color=\"primary\" value=\"부적합 사항\">\n        <ion-segment-button value=\"부적합 사항\" class=\"tab_btn\">부적합 사항</ion-segment-button>\n        <ion-segment-button value=\"조치 사항\" class=\"tab_btn\">조치 사항</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"tab_edit active\">\n    <form>\n          <app-input label=\"작성자\" value=\"이상범/(주)지에스아이엘\" [readonly]=\"true\" [disabled]=\"true\"></app-input>\n          <app-input label=\"발생장소\" placeholder=\"장소를 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n          <app-input-group label=\"발생일시\"  [required]=\"true\">\n            <app-calendar></app-calendar>\n            ~\n            <app-datetime></app-datetime>\n          </app-input-group>\n          <app-input label=\"부적합내용\" placeholder=\"부적합내용을 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n      <app-row>\n        <app-col>\n          <app-card>\n            부적합 파일을 등록해주세요\n            <app-file></app-file>\n          </app-card>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n\n  <ion-content class=\"tab_edit\">\n    <form>\n          <app-select-action-people></app-select-action-people>\n          <app-select-action></app-select-action>\n          <app-input-group label=\"조치일시\"  [required]=\"true\">\n            <app-calendar></app-calendar>\n            ~\n            <app-datetime></app-datetime>\n          </app-input-group>\n          <app-input label=\"조치내용\" placeholder=\"조치내용을 입력해주세요\" value=\"\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n      <app-row>\n        <app-col>\n          <app-card>\n            부적합 파일을 등록해주세요\n            <app-file view_type=\"\"></app-file>\n          </app-card>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  <app-button-footer class=\"btn_foot\">\n    <app-button>저장</app-button>\n  </app-button-footer>\n</ng-container>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_task-management_incongruity_incongruity-edit_incongruity-edit_module_ts.js.map