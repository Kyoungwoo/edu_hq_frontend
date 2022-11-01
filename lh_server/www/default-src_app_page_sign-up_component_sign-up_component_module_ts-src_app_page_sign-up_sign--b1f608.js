(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_sign-up_component_sign-up_component_module_ts-src_app_page_sign-up_sign--b1f608"],{

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

/***/ 67711:
/*!*************************************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-worker/sign-up-worker.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpWorkerInfo": () => (/* binding */ signUpWorkerInfo),
/* harmony export */   "SignUpWorkerHealth": () => (/* binding */ SignUpWorkerHealth),
/* harmony export */   "SignUpWorkerForm": () => (/* binding */ SignUpWorkerForm),
/* harmony export */   "signUpWorkerInfoMock": () => (/* binding */ signUpWorkerInfoMock),
/* harmony export */   "SignUpWorkerHealthMock": () => (/* binding */ SignUpWorkerHealthMock)
/* harmony export */ });
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);


const regex = new src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_1__.RegexService();
class signUpWorkerInfo {
    constructor() {
        this.account_id = null; // 아이디
        this.account_token = null; //비밀번호
        this.account_token_conform = null; //account_token_conform
        this.ctgo_country_id = null; //국적 ID
        this.company_id = null; //소속 업체 ID
        this.project_id = null; //소속 현장 ID
        this.user_name = null; //이름
        this.user_gender = null; //성별
        this.user_birth = null; //생년월일
        this.user_email = null; //이메일
        this.user_phone = null; //휴대폰번호
        this.sms_token = null; //문자 인증번호
        this.basic_safe_edu_date = null; //기초안전보건교육 이수증
        this.file_preview = []; // 파일 미리보기
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
    }
}
class SignUpWorkerHealth {
    constructor() {
        this.use_drugs_state = null; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
        this.use_drugs_content = null; //약물명
        this.brain_cure_state = null; //심혈관질환 치료여부
        this.brain_cure_content = []; //심혈관질환명 / 없을시 빈배열
        this.vomiting_state = null; //가슴통증 여부
        this.vomiting_content = null; //가슴통증 내용
        this.pain_head_state = null; //두통, 어지러운 증상 여부
        this.pain_head_content = null; //두통, 어지러운 증상 내용
        this.etc_disease_state = null; //기타질환 치료여부
        this.etc_disease_content = null; //기타질환 내용
        this.covid_nineteen_state = null; //코로나 증상여부
        this.covid_nineteen_content = null; //코로나 증상내용
        this.covid_vaccine_state = null; //코로나 백신접종 여부
        this.health_terms_state = null; //문진표 작성동의 여부
    }
}
class SignUpWorkerForm {
    constructor() {
        this.account_id = null; // 아이디
        this.account_token = null; //비밀번호
        this.account_token_conform = null; //account_token_conform
        this.ctgo_country_id = null; //국적 ID
        this.company_id = null; //소속 업체 ID
        this.project_id = null; //소속 현장 ID
        this.user_name = null; //이름
        this.user_gender = null; //성별
        this.user_birth = null; //생년월일
        this.user_email = null; //이메일
        this.user_phone = null; //휴대폰번호
        this.sms_token = null; //문자 인증번호
        this.basic_safe_edu_date = null; //기초안전보건교육 이수증
        this.file_preview = []; // 파일 미리보기
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
        this.use_drugs_state = null; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
        this.use_drugs_content = null; //약물명
        this.brain_cure_state = null; //심혈관질환 치료여부
        this.brain_cure_content = []; //심혈관질환명 / 없을시 빈배열
        this.vomiting_state = null; //가슴통증 여부
        this.vomiting_content = null; //가슴통증 내용
        this.pain_head_state = null; //두통, 어지러운 증상 여부
        this.pain_head_content = null; //두통, 어지러운 증상 내용
        this.etc_disease_state = null; //기타질환 치료여부
        this.etc_disease_content = null; //기타질환 내용
        this.covid_nineteen_state = null; //코로나 증상여부
        this.covid_nineteen_content = null; //코로나 증상내용
        this.covid_vaccine_state = null; //코로나 백신접종 여부
        this.health_terms_state = null; //문진표 작성동의 여부
        this.system_terms = null; // 시스템 이용약관
        this.personal_terms = null; // 개인정보 이용약관
        this.sensitive_terms = null; // 민감정보 이용약관
        this.gps_terms = null; // 위치정보 이용약관
        this.sharing_terms = null; // 제 3자 정보제공 이용약관
    }
}
class signUpWorkerInfoMock {
    constructor(country, company, project) {
        this.account_id = regex.random.id('worker'); // 아이디
        this.account_token = 'qwer1234'; //비밀번호
        this.account_token_conform = 'qwer1234'; //account_token_conform
        this.user_name = '김수홍'; //이름
        this.user_gender = '남'; //성별
        this.user_birth = '1987-07-26'; //생년월일
        this.user_email = regex.random.email();
        this.user_phone = regex.random.phone(); //'01056044147';//휴대폰번호
        this.sms_token = '';
        this.basic_safe_edu_date = null; //기초안전보건교육 이수증
        this.file_preview = []; // 파일 미리보기
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_0__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
        if (country)
            this.ctgo_country_id = country.ctgo_country_id;
        if (company)
            this.company_id = company.company_id;
        if (project)
            this.project_id = project.project_id;
    }
    ; //이메일
}
class SignUpWorkerHealthMock {
    constructor() {
        this.use_drugs_state = 1; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
        this.use_drugs_content = '통풍약'; //약물명
        this.brain_cure_state = 1; //심혈관질환 치료여부
        this.brain_cure_content = ['뇌졸중']; //심혈관질환명 / 없을시 빈배열
        this.vomiting_state = 1; //가슴통증 여부
        this.vomiting_content = '흉통 가끔 있음'; //가슴통증 내용
        this.pain_head_state = 1; //두통, 어지러운 증상 여부
        this.pain_head_content = '스트레스성 두통'; //두통, 어지러운 증상 내용
        this.etc_disease_state = 1; //기타질환 치료여부
        this.etc_disease_content = '기타 질환이 가끔 있음'; //기타질환 내용
        this.covid_nineteen_state = 1; //코로나 증상여부
        this.covid_nineteen_content = '열이 심하게 남. 몸살 없음'; //코로나 증상내용
        this.covid_vaccine_state = 1; //코로나 백신접종 여부
        this.health_terms_state = 1; //문진표 작성동의 여부
    }
}


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

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_sign-up_component_sign-up_component_module_ts-src_app_page_sign-up_sign--b1f608.js.map