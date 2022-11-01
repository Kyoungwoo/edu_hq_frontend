(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_sign-up_sign-up-done_sign-up-done_module_ts"],{

/***/ 55656:
/*!*************************************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSegmentComponent": () => (/* binding */ SignUpSegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_segment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-segment.component.html */ 68416);
/* harmony import */ var _sign_up_segment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-segment.component.scss */ 9643);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





let SignUpSegmentComponent = class SignUpSegmentComponent {
    constructor(languagePack) {
        this.languagePack = languagePack;
    }
    ngOnInit() { }
};
SignUpSegmentComponent.ctorParameters = () => [
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
SignUpSegmentComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SignUpSegmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sign-up-segment',
        template: _raw_loader_sign_up_segment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_segment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpSegmentComponent);



/***/ }),

/***/ 60238:
/*!********************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up.component.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponentModule": () => (/* binding */ SignUpComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-segment/sign-up-segment.component */ 55656);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/component.module */ 55051);







let SignUpComponentModule = class SignUpComponentModule {
};
SignUpComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__.SignUpSegmentComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule
        ],
        exports: [
            _sign_up_segment_sign_up_segment_component__WEBPACK_IMPORTED_MODULE_0__.SignUpSegmentComponent
        ]
    })
], SignUpComponentModule);



/***/ }),

/***/ 95551:
/*!**************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-done/sign-up-done-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpDonePageRoutingModule": () => (/* binding */ SignUpDonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_done_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-done.page */ 78789);




const routes = [
    {
        path: '',
        component: _sign_up_done_page__WEBPACK_IMPORTED_MODULE_0__.SignUpDonePage
    }
];
let SignUpDonePageRoutingModule = class SignUpDonePageRoutingModule {
};
SignUpDonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpDonePageRoutingModule);



/***/ }),

/***/ 69766:
/*!******************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-done/sign-up-done.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpDonePageModule": () => (/* binding */ SignUpDonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_done_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-done-routing.module */ 95551);
/* harmony import */ var _sign_up_done_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-done.page */ 78789);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let SignUpDonePageModule = class SignUpDonePageModule {
};
SignUpDonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__.SignUpComponentModule,
            _sign_up_done_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpDonePageRoutingModule
        ],
        declarations: [_sign_up_done_page__WEBPACK_IMPORTED_MODULE_1__.SignUpDonePage]
    })
], SignUpDonePageModule);



/***/ }),

/***/ 78789:
/*!****************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-done/sign-up-done.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpDonePage": () => (/* binding */ SignUpDonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_done_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-done.page.html */ 43415);
/* harmony import */ var _sign_up_done_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-done.page.scss */ 49709);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);








let SignUpDonePage = class SignUpDonePage {
    constructor(el, _modal, promise, changeDetector, languagePack) {
        this.el = el;
        this._modal = _modal;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.test.SignUp.test)
                return;
            yield this.promise.wait();
            this._modal.dismiss();
        });
    }
    dismiss() {
        this._modal.dismiss();
    }
};
SignUpDonePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_3__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
SignUpDonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sign-up-done',
        template: _raw_loader_sign_up_done_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_done_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpDonePage);



/***/ }),

/***/ 9643:
/*!***************************************************************************************!*\
  !*** ./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-segment-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  min-width: 0;\n  pointer-events: none;\n}\n\nion-segment-button .segment-inner {\n  padding: 8px;\n  text-align: left;\n  width: 100%;\n}\n\nion-segment-button .segment-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  padding: 3px;\n  background: var(--ion-color-primary);\n  margin-bottom: 4px;\n  color: var(--ion-color-white);\n}\n\nion-segment-button .segment-img-checked {\n  display: block;\n}\n\nion-segment-button .segment-img-unchecked {\n  display: none;\n}\n\nion-segment-button .segment-text {\n  min-height: 40px;\n  font-size: var(--font-size-h6);\n}\n\nion-segment-button.segment-button-checked {\n  background: var(--ion-color-primary-translucent);\n}\n\nion-segment-button.segment-button-checked .segment-img-checked {\n  display: block;\n}\n\nion-segment-button.segment-button-checked .segment-img-unchecked {\n  display: none;\n}\n\nion-segment-button.segment-button-checked ~ ion-segment-button .segment-img-checked {\n  display: none;\n}\n\nion-segment-button.segment-button-checked ~ ion-segment-button .segment-img-unchecked {\n  display: block;\n}\n\nion-segment-button.segment-button-checked::part(native) {\n  color: var(--ion-color-dark);\n}\n\n/* @media screen and (max-width: 768px) {\n    ion-segment-button {\n        .segment-text {\n            min-height: 40px;\n            font-size: var(--font-size-h6);\n        }\n    }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc2VnbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztBQUNsQjs7QUFDQTtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7QUFFeEI7O0FBTkE7RUFNUSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7QUFJbkI7O0FBWkE7RUFXUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFLckM7O0FBekJBO0VBdUJRLGNBQWM7QUFNdEI7O0FBN0JBO0VBMEJRLGFBQWE7QUFPckI7O0FBakNBO0VBNkJRLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFRdEM7O0FBTEE7RUFDSSxnREFBZ0Q7QUFRcEQ7O0FBVEE7RUFHUSxjQUFjO0FBVXRCOztBQWJBO0VBTVEsYUFBYTtBQVdyQjs7QUFSQTtFQUVRLGFBQWE7QUFVckI7O0FBWkE7RUFLUSxjQUFjO0FBV3RCOztBQVJBO0VBQ0ksNEJBQTRCO0FBV2hDOztBQVJBOzs7Ozs7O0dBaUJHIiwiZmlsZSI6InNpZ24tdXAtc2VnbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC5zZWdtZW50LWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNlZ21lbnQtaW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIH1cbiAgICAuc2VnbWVudC1pbWctY2hlY2tlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2VnbWVudC1pbWctdW5jaGVja2VkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlZ21lbnQtdGV4dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xuICAgIC5zZWdtZW50LWltZy1jaGVja2VkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zZWdtZW50LWltZy11bmNoZWNrZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIH4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAuc2VnbWVudC1pbWctY2hlY2tlZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zZWdtZW50LWltZy11bmNoZWNrZWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZDo6cGFydChuYXRpdmUpIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC5zZWdtZW50LXRleHQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICAgICAgfVxuICAgIH1cbn0gKi8iXX0= */");

/***/ }),

/***/ 49709:
/*!******************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-done/sign-up-done.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content::part(scroll) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.circle-check {\n  background: var(--ion-color-primary-translucent);\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\n.circle-check app-img {\n  width: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUVoQjs7QUFWQTtFQVVRLFdBQVc7QUFJbkIiLCJmaWxlIjoic2lnbi11cC1kb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2lyY2xlLWNoZWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10cmFuc2x1Y2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYXBwLWltZyB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 68416:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/component/sign-up-segment/sign-up-segment.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar color=\"white\">\n  <ion-segment mode=\"md\" color=\"primary\" [(ngModel)]=\"step\">\n    <ion-segment-button mode=\"md\" value=\"step1\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">1</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('회원유형 선택') }}\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step2\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">2</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('기본정보') }}\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button *ngIf=\"type === 'WORKER'\" mode=\"md\" value=\"step3\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">3</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('건강 문진') }}<br>\n        </div>\n      </div>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step4\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">4</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('약관 동의') }}\n        </div>\n      </div>\n      </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"step5\">\n      <div class=\"segment-inner\">\n        <div class=\"segment-img\">\n          <app-img class=\"segment-img-checked\" mode=\"light\" name=\"check-white\"></app-img>\n          <div class=\"segment-img-unchecked\">5</div>\n        </div>\n        <div class=\"segment-text\">\n          {{ languagePack.getText('가입완료') }}\n        </div>\n      </div>\n      </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>");

/***/ }),

/***/ 43415:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-done/sign-up-done.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('가입 완료') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <div class=\"circle-check\">\n      <app-img name=\"check\"></app-img>\n    </div>\n    <h4>{{ languagePack.getText('회원 가입 완료') }}</h4>\n    <p>로그인 페이지에서 로그인 해주세요.</p>\n    <div style=\"text-align: center; margin-top: 28px;\">\n      <app-button style=\"width: 148px\" (click)=\"dismiss()\">{{ languagePack.getText('확인') }}</app-button>\n    </div>\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_sign-up_sign-up-done_sign-up-done_module_ts.js.map