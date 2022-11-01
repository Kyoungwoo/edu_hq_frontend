(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_sign-up_sign-up-type_sign-up-type_module_ts"],{

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

/***/ 12121:
/*!**************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-type/sign-up-type-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTypePageRoutingModule": () => (/* binding */ SignUpTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-type.page */ 58952);




const routes = [
    {
        path: '',
        component: _sign_up_type_page__WEBPACK_IMPORTED_MODULE_0__.SignUpTypePage
    }
];
let SignUpTypePageRoutingModule = class SignUpTypePageRoutingModule {
};
SignUpTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpTypePageRoutingModule);



/***/ }),

/***/ 19973:
/*!******************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-type/sign-up-type.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTypePageModule": () => (/* binding */ SignUpTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-type-routing.module */ 12121);
/* harmony import */ var _sign_up_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-type.page */ 58952);
/* harmony import */ var _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sign-up.component.module */ 60238);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let SignUpTypePageModule = class SignUpTypePageModule {
};
SignUpTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _sign_up_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpTypePageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _component_sign_up_component_module__WEBPACK_IMPORTED_MODULE_2__.SignUpComponentModule
        ],
        declarations: [_sign_up_type_page__WEBPACK_IMPORTED_MODULE_1__.SignUpTypePage]
    })
], SignUpTypePageModule);



/***/ }),

/***/ 58952:
/*!****************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-type/sign-up-type.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpTypePage": () => (/* binding */ SignUpTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up-type.page.html */ 89746);
/* harmony import */ var _sign_up_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-type.page.scss */ 65816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);










let SignUpTypePage = class SignUpTypePage {
    constructor(el, nav, regex, promise, changeDetector, languagePack) {
        this.el = el;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.SignUp.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.SignUp.type.length)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            const cardTypeEl = el.querySelector(`[name=card_type_${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.SignUp.type[0]}]`);
            cardTypeEl.dispatchEvent(new Event('click'));
            yield this.promise.wait();
            el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
            src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.test.SignUp.type.splice(0, 1);
        });
    }
    next() {
        if (this.userType !== 'LH') {
            this.nav.navigateForward('/sign-up-company', {
                queryParams: {
                    userType: this.userType
                }
            });
        }
        else {
            this.nav.navigateForward('/sign-up-lh');
        }
    }
};
SignUpTypePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_6__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_5__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
SignUpTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sign-up-type',
        template: _raw_loader_sign_up_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.slideUpInAnimation],
        styles: [_sign_up_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpTypePage);



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

/***/ 65816:
/*!******************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-type/sign-up-type.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card-inner {\n  height: 64px;\n}\n\napp-img.helmet {\n  width: 36px;\n}\n\napp-img.arrow-right {\n  width: 8px;\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaWduLXVwLXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW5uZXIge1xuICAgIGhlaWdodDogNjRweDtcbn1cblxuYXBwLWltZy5oZWxtZXQge1xuICAgIHdpZHRoOiAzNnB4O1xufVxuXG5hcHAtaW1nLmFycm93LXJpZ2h0IHtcbiAgICB3aWR0aDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */");

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

/***/ 89746:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up-type/sign-up-type.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('회원유형 선택') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-sign-up-segment step=\"step1\"></app-sign-up-segment>\n    <h4><b>{{ languagePack.getText('회원유형 선택') }}</b> </h4>\n    <!-- <p>회원유형에 따라 가입절차가 차이가 있으니, 올바르게 선택해 주시기 바랍니다.</p> -->\n    <app-card name=\"card_type_WORKER\" [button]=\"true\" [color]=\"userType === 'WORKER' ? 'secondary' : 'white'\" (click)=\"userType = 'WORKER'\">\n      <app-row class=\"card-inner\">\n        <app-col size=\"auto\">\n          <app-img class=\"helmet\" src=\"assets/img/sign-up/helmet1.svg\"></app-img>\n        </app-col>\n        <app-col>\n          <h4>{{ languagePack.getText('작업자') }}</h4>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card name=\"card_type_LH\" [button]=\"true\" [color]=\"userType === 'LH' ? 'secondary' : 'white'\" (click)=\"userType = 'LH'\">\n      <app-row class=\"card-inner\">\n        <app-col size=\"auto\">\n          <app-img class=\"helmet\" src=\"assets/img/sign-up/helmet2.svg\"></app-img>\n        </app-col>\n        <app-col>\n          <h4>LH</h4>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card name=\"card_type_SUPER\" [button]=\"true\" [color]=\"userType === 'SUPER' ? 'secondary' : 'white'\" (click)=\"userType = 'SUPER'\">\n      <app-row class=\"card-inner\">\n        <app-col size=\"auto\">\n          <app-img class=\"helmet\" src=\"assets/img/sign-up/helmet3.svg\"></app-img>\n        </app-col>\n        <app-col>\n          <h4>{{ languagePack.getText('감리') }}</h4>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-img class=\"arrow-right\" src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card name=\"card_type_COMPANY\" [button]=\"true\" [color]=\"userType === 'COMPANY' ? 'secondary' : 'white'\" (click)=\"userType = 'COMPANY'\">\n      <app-row class=\"card-inner\">\n        <app-col size=\"auto\">\n          <app-img class=\"helmet\" src=\"assets/img/sign-up/helmet4.svg\"></app-img>\n        </app-col>\n        <app-col>\n          <h4>{{ languagePack.getText('원청사/협력사 관리자') }}</h4>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-img class=\"arrow-right\"src=\"assets/img/sign-up/arrow-right.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n  </app-container>\n</ion-content>\n<app-button-footer name=\"button-footer\" *ngIf=\"userType\" @slideUpInAnimation>\n  <app-button name=\"button_next\" (click)=\"next()\">{{ languagePack.getText('다음') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up-type_sign-up-type_module_ts.js.map