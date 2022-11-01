(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page-health_my-page-health_module_ts"],{

/***/ 53933:
/*!******************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-health/my-page-health-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageHealthPageRoutingModule": () => (/* binding */ MyPageHealthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_health_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-health.page */ 25014);




const routes = [
    {
        path: '',
        component: _my_page_health_page__WEBPACK_IMPORTED_MODULE_0__.MyPageHealthPage
    }
];
let MyPageHealthPageRoutingModule = class MyPageHealthPageRoutingModule {
};
MyPageHealthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPageHealthPageRoutingModule);



/***/ }),

/***/ 34094:
/*!**********************************************************************!*\
  !*** ./src/app/page/my-page/my-page-health/my-page-health.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageHealthPageModule": () => (/* binding */ MyPageHealthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_health_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-health-routing.module */ 53933);
/* harmony import */ var _my_page_health_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-health.page */ 25014);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MyPageHealthPageModule = class MyPageHealthPageModule {
};
MyPageHealthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_health_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPageHealthPageRoutingModule
        ],
        declarations: [_my_page_health_page__WEBPACK_IMPORTED_MODULE_1__.MyPageHealthPage]
    })
], MyPageHealthPageModule);



/***/ }),

/***/ 25014:
/*!********************************************************************!*\
  !*** ./src/app/page/my-page/my-page-health/my-page-health.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageHealthPage": () => (/* binding */ MyPageHealthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_health_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page-health.page.html */ 2193);
/* harmony import */ var _my_page_health_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-health.page.scss */ 60998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);













class WorkerHealth {
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
        this.create_date = '';
        this.update_date = '';
    }
}
let MyPageHealthPage = class MyPageHealthPage {
    constructor(connect, _modal, toast, alert, loading, user, nav, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.user = user;
        this.nav = nav;
        this.languagePack = languagePack;
        this.editable = false;
        this.healthForm = new WorkerHealth();
        this.healthValidator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new WorkerHealth()).validator;
    }
    ngOnInit() {
        this.get();
    }
    /**
     * 데이터 구성 파트
     */
    /** 모두 가져오기 */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                this.getHealth()
            ]);
            loading.dismiss();
        });
    }
    /** 건강문진정보 가져오기 */
    getHealth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/mypage/health/detail', {}, { parse: ['brain_cure_content'] });
            if (res.rsCode === 0) {
                this.healthForm = Object.assign(Object.assign({}, this.healthForm), res.rsObj);
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * 데이터 입력 파트
     */
    /** 전체 입력 */
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.healthValid())
                return;
            const loading = yield this.loading.present();
            const resAll = yield Promise.all([
                this.healthSubmit()
            ]);
            yield loading.dismiss();
            /** 모든 데이터가 성공적으로 전송되었다면, 모든 반환값이 true임 */
            if (!resAll.includes(false)) {
                this.nav.back({ force: true });
                this.alert.present({
                    message: '회원정보가 변경되었습니다.'
                });
            }
        });
    }
    /** 건강문진정보 입력 */
    healthSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/mypage/health/update', this.healthForm);
            if (res.rsCode === 0) {
                return true;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                return false;
            }
        });
    }
    /**
     * 데이터 체크
     */
    healthValid() {
        var _a;
        if (this.healthForm.use_drugs_state == null)
            this.healthValidator.use_drugs_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.use_drugs_state = { valid: true };
        if (this.healthForm.use_drugs_state === 1
            && !this.healthForm.use_drugs_content)
            this.healthValidator.use_drugs_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.use_drugs_content = { valid: true };
        if (this.healthForm.brain_cure_state == null)
            this.healthValidator.brain_cure_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.brain_cure_state = { valid: true };
        if (this.healthForm.brain_cure_state === 1
            && !this.healthForm.brain_cure_content.length)
            this.healthValidator.brain_cure_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.brain_cure_content = { valid: true };
        if (this.healthForm.vomiting_state == null)
            this.healthValidator.vomiting_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.vomiting_state = { valid: true };
        if (this.healthForm.vomiting_state === 1
            && !this.healthForm.vomiting_content)
            this.healthValidator.vomiting_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.vomiting_content = { valid: true };
        if (this.healthForm.pain_head_state == null)
            this.healthValidator.pain_head_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.pain_head_state = { valid: true };
        if (this.healthForm.pain_head_state === 1
            && !this.healthForm.pain_head_content)
            this.healthValidator.pain_head_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.pain_head_content = { valid: true };
        if (this.healthForm.etc_disease_state == null)
            this.healthValidator.etc_disease_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.etc_disease_state = { valid: true };
        if (this.healthForm.etc_disease_state === 1
            && !this.healthForm.etc_disease_content)
            this.healthValidator.etc_disease_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.etc_disease_content = { valid: true };
        if (this.healthForm.covid_nineteen_state == null)
            this.healthValidator.covid_nineteen_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.covid_nineteen_state = { valid: true };
        if (this.healthForm.covid_nineteen_state === 1
            && !this.healthForm.covid_nineteen_content)
            this.healthValidator.covid_nineteen_content = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.covid_nineteen_content = { valid: true };
        if (this.healthForm.covid_vaccine_state == null)
            this.healthValidator.covid_vaccine_state = { valid: false, message: '해당 항목에 답해주세요.' };
        else
            this.healthValidator.covid_vaccine_state = { valid: true };
        if (this.healthForm.health_terms_state !== 1)
            this.healthValidator.health_terms_state = { valid: false, message: '항목에 동의해주세요.' };
        else
            this.healthValidator.health_terms_state = { valid: true };
        for (let key in this.healthValidator) {
            if (!((_a = this.healthValidator[key]) === null || _a === void 0 ? void 0 : _a.valid))
                return false;
        }
        return true;
    }
};
MyPageHealthPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
MyPageHealthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-my-page-health',
        template: _raw_loader_my_page_health_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInAnimation],
        styles: [_my_page_health_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPageHealthPage);



/***/ }),

/***/ 60998:
/*!**********************************************************************!*\
  !*** ./src/app/page/my-page/my-page-health/my-page-health.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\napp-input-caption + app-input-caption {\n  margin-top: 0;\n}\n\n.update-date-class {\n  display: flex;\n  font-size: var(--font-size-h6);\n  justify-content: end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UtaGVhbHRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtFQUNJLGFBQWE7QUFFakI7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUV4QiIsImZpbGUiOiJteS1wYWdlLWhlYWx0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbmFwcC1pbnB1dC1jYXB0aW9uICsgYXBwLWlucHV0LWNhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi51cGRhdGUtZGF0ZS1jbGFzc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn0iXX0= */");

/***/ }),

/***/ 2193:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page-health/my-page-health.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/my-page-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('건강 문진 작성') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <div class=\"update-date-class\">\n      <div>{{ languagePack.getText('작성일') }} : {{healthForm.create_date}}</div>\n      <ng-container *ngIf=\"healthForm.update_date\">\n        <div style=\"margin: 0 6px;\"> / </div>\n        <div>{{ languagePack.getText('수정') }} : {{healthForm.update_date}}</div>\n      </ng-container>\n    </div>\n    <h4>1. {{ languagePack.getText('현재 복용하고 있는 약물이 있습니까?') }}</h4>\n    <app-radio-input name=\"use_drugs_state\" \n    [color]=\"healthValidator.use_drugs_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.use_drugs_state\" (change)=\"healthForm.use_drugs_content = ''\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.use_drugs_state?.valid === false\" color=\"warning\">{{ healthValidator.use_drugs_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"healthForm.use_drugs_state\"\n    [color]=\"healthValidator.use_drugs_content?.valid === false && 'warning'\"\n    name=\"use_drugs_content\" [placeholder]=\"languagePack.getText('약물명을 입력해주세요.')\" \n    [(ngModel)]=\"healthForm.use_drugs_content\" [disabled]=\"!editable\"></app-input>\n    <app-input-caption *ngIf=\"healthValidator.use_drugs_content?.valid === false\" color=\"warning\">{{ healthValidator.use_drugs_content.message }}</app-input-caption>\n    \n\n    <h4>2. {{ languagePack.getText('과거나 현재 뇌, 심혈관질환으로 치료를 받았거나 받고 있습니까?') }}</h4>\n    <app-radio-input name=\"brain_cure_state\"\n    [color]=\"healthValidator.brain_cure_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.brain_cure_state\" (change)=\"!healthForm.brain_cure_state && healthForm.brain_cure_content = []\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.brain_cure_state?.valid === false\" color=\"warning\">{{ healthValidator.brain_cure_state.message }}</app-input-caption>\n\n    <div @fadeInAnimation *ngIf=\"healthForm.brain_cure_state\">\n       {{ languagePack.getText('해당하는 항목에 체크해주세요') }}\n      <app-input-template [color]=\"healthValidator.brain_cure_content?.valid === false && 'warning'\" [disabled]=\"!editable\">\n        <app-check-group slot=\"input\" name=\"brain_cure_content\" \n        [(ngModel)]=\"healthForm.brain_cure_content\">\n          <app-check on=\"뇌졸중\">{{ languagePack.getText('뇌졸중') }}</app-check>\n          <app-check on=\"뇌출혈\">{{ languagePack.getText('뇌출혈') }}</app-check>\n          <app-check on=\"협심증\">{{ languagePack.getText('협심증') }}</app-check>\n          <app-check on=\"심근경색\">{{ languagePack.getText('심근경색') }}</app-check>\n          <app-check on=\"간질발작\">{{ languagePack.getText('간질발작') }}</app-check>\n        </app-check-group>\n      </app-input-template>\n    </div>\n    <app-input-caption *ngIf=\"healthValidator.brain_cure_content?.valid === false\" color=\"warning\">{{ healthValidator.brain_cure_content.message }}</app-input-caption>\n\n\n    <h4>3. {{ languagePack.getText('최근 가슴을 쥐어짜는 통증,오심,구토 증상을 겪은 적이 있습니까?') }}</h4>\n    <app-radio-input name=\"vomiting_state\" \n    [color]=\"healthValidator.vomiting_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.vomiting_state\" (change)=\"healthForm.vomiting_content = ''\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.vomiting_state?.valid === false\" color=\"warning\">{{ healthValidator.vomiting_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"healthForm.vomiting_state\" \n    [color]=\"healthValidator.vomiting_content?.valid === false && 'warning'\"\n    name=\"vomiting_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\"\n    [(ngModel)]=\"healthForm.vomiting_content\" [disabled]=\"!editable\"></app-input>\n    <app-input-caption *ngIf=\"healthValidator.vomiting_content?.valid === false\" color=\"warning\">{{ healthValidator.vomiting_content.message }}</app-input-caption>\n\n\n    <h4>4. {{ languagePack.getText('최근 갑자기 한쪽 팔, 다리에 힘이 빠지거나 말이 어눌하게 나오거나 두통, 어지러운 증상을 겪은 적이 있습니까?') }}</h4>\n    <app-radio-input name=\"pain_head_state\" \n    [color]=\"healthValidator.pain_head_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.pain_head_state\" (change)=\"healthForm.pain_head_content = ''\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.pain_head_state?.valid === false\" color=\"warning\">{{ healthValidator.pain_head_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"healthForm.pain_head_content\" \n    [color]=\"healthValidator.pain_head_content?.valid === false && 'warning'\"\n    name=\"pain_head_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\" \n    [(ngModel)]=\"healthForm.pain_head_content\" [disabled]=\"!editable\"></app-input>\n    <app-input-caption *ngIf=\"healthValidator.pain_head_content?.valid === false\" color=\"warning\">{{ healthValidator.pain_head_content.message }}</app-input-caption>\n\n\n    <h4>5. {{ languagePack.getText('현재 기타 질병(당뇨, 간장질환, 폐질환 등) 으로 치료를 받고 있습니까?') }}</h4>\n    <app-radio-input name=\"etc_disease_state\" \n    [color]=\"healthValidator.etc_disease_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.etc_disease_state\" (change)=\"healthForm.etc_disease_content = ''\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.etc_disease_state?.valid === false\" color=\"warning\">{{ healthValidator.etc_disease_state.message }}</app-input-caption>\n    <app-input @fadeInAnimation *ngIf=\"healthForm.etc_disease_state\" \n    [color]=\"healthValidator.etc_disease_content?.valid === false && 'warning'\"\n    name=\"etc_disease_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\"\n    [(ngModel)]=\"healthForm.etc_disease_content\" [disabled]=\"!editable\"></app-input>\n    <app-input-caption *ngIf=\"healthValidator.etc_disease_content?.valid === false\" color=\"warning\">{{ healthValidator.etc_disease_content.message }}</app-input-caption>\n\n    <h4>6. {{ languagePack.getText('본인이 코로나19가 의심되는 아래의 임상 증상이 있습니까? (*주요 임상증상)체온 37.5℃ 이상, 기침, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각미각 소실 또는 폐렴 (단, 코로나19와 관게없이 평소의 기저질환으로 인한 증상인 경우는 제외)') }}\n    </h4>\n    <app-radio-input name=\"covid_nineteen_state\" \n    [color]=\"healthValidator.covid_nineteen_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.covid_nineteen_state\" (change)=\"healthForm.covid_nineteen_content = ''\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('없다') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('있다') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.covid_nineteen_state?.valid === false\" color=\"warning\">{{ healthValidator.covid_nineteen_state.message }}</app-input-caption>\n\n    <app-input @fadeInAnimation *ngIf=\"healthForm.covid_nineteen_state\" \n    [color]=\"healthValidator.covid_nineteen_state?.valid === false && 'warning'\"\n    name=\"covid_nineteen_content\" [placeholder]=\"languagePack.getText('증상을 적어주세요.')\"\n    [(ngModel)]=\"healthForm.covid_nineteen_content\" [disabled]=\"!editable\"></app-input>\n    <app-input-caption *ngIf=\"healthValidator.covid_nineteen_content?.valid === false\" color=\"warning\">{{ healthValidator.covid_nineteen_content.message }}</app-input-caption>\n\n\n    <h4>7. {{ languagePack.getText('코로나 백신 접종을 하셨습니까?') }}</h4>\n    <app-radio-input name=\"covid_vaccine_state\" \n    [color]=\"healthValidator.covid_vaccine_state?.valid === false && 'warning'\"\n    [(ngModel)]=\"healthForm.covid_vaccine_state\" [disabled]=\"!editable\">\n      <app-radio [value]=\"0\">{{ languagePack.getText('미접종') }}</app-radio>\n      <app-radio [value]=\"1\">{{ languagePack.getText('접종') }}</app-radio>\n    </app-radio-input>\n    <app-input-caption *ngIf=\"healthValidator.covid_vaccine_state?.valid === false\" color=\"warning\">{{ healthValidator.covid_vaccine_state.message }}</app-input-caption>\n\n\n    <app-check name=\"health_terms_state\" [on]=\"1\" [off]=\"0\" [(ngModel)]=\"healthForm.health_terms_state\" [disabled]=\"!editable\">{{ languagePack.getText('본인은 질병예방과 안전한 작업을 위하여 문진자료를 사업창에 제공하는것에 동의합니다.') }}</app-check>\n    <app-input-caption *ngIf=\"healthValidator.health_terms_state?.valid === false\" color=\"warning\">{{ healthValidator.health_terms_state.message }}</app-input-caption> \n\n  </app-container>\n</ion-content>\n\n<!-- 상세보기 footer -->\n<app-button-footer *ngIf=\"!editable; else tempEditFooter\">\n  <app-button name=\"button_edit\" fill=\"translucent\" (click)=\"editable = true\">{{ languagePack.getText('수정') }}</app-button>\n</app-button-footer>\n<!-- 수정 footer -->\n<ng-template #tempEditFooter>\n  <app-button-footer>\n    <app-button name=\"submit\" (click)=\"submit()\">{{ languagePack.getText('모두 저장') }}</app-button>\n  </app-button-footer>\n</ng-template> ");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page-health_my-page-health_module_ts.js.map