(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page-education_my-page-education_module_ts"],{

/***/ 5346:
/*!************************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-education/my-page-education-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageEducationPageRoutingModule": () => (/* binding */ MyPageEducationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_education_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-education.page */ 66146);




const routes = [
    {
        path: '',
        component: _my_page_education_page__WEBPACK_IMPORTED_MODULE_0__.MyPageEducationPage
    }
];
let MyPageEducationPageRoutingModule = class MyPageEducationPageRoutingModule {
};
MyPageEducationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPageEducationPageRoutingModule);



/***/ }),

/***/ 14601:
/*!****************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-education/my-page-education.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageEducationPageModule": () => (/* binding */ MyPageEducationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_education_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-education-routing.module */ 5346);
/* harmony import */ var _my_page_education_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-education.page */ 66146);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _my_page_education_search_my_page_education_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-page-education-search/my-page-education-search.module */ 67357);









let MyPageEducationPageModule = class MyPageEducationPageModule {
};
MyPageEducationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_education_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPageEducationPageRoutingModule,
            _my_page_education_search_my_page_education_search_module__WEBPACK_IMPORTED_MODULE_3__.MyPageEducationSearchPageModule
        ],
        declarations: [_my_page_education_page__WEBPACK_IMPORTED_MODULE_1__.MyPageEducationPage]
    })
], MyPageEducationPageModule);



/***/ }),

/***/ 66146:
/*!**************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-education/my-page-education.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageEducationPage": () => (/* binding */ MyPageEducationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_education_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page-education.page.html */ 21349);
/* harmony import */ var _my_page_education_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-education.page.scss */ 77441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_app_service_education_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/education.service */ 86727);
/* harmony import */ var _my_page_education_search_my_page_education_search_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../my-page-education-search/my-page-education-search.page */ 36969);
/* harmony import */ var _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../my-page/my-page.page */ 44151);














let MyPageEducationPage = class MyPageEducationPage {
    constructor(connect, _modal, regex, user, toast, loading, education, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.regex = regex;
        this.user = user;
        this.toast = toast;
        this.loading = loading;
        this.education = education;
        this.languagePack = languagePack;
        this.segment = 'ONE';
        /** 교육 form */
        this.educationGetForm = new _my_page_my_page_page__WEBPACK_IMPORTED_MODULE_10__.EducationGetForm();
    }
    ngOnInit() {
        this.getForm();
        this.get();
    }
    /**
     * 데이터 구성 파트
     */
    getForm() {
        /** 교육 데이터 */
        this.educationGetForm.project_id = this.user.userData.belong_data.project_id;
        this.educationGetForm.project_name = this.user.userData.belong_data.project_name;
    }
    /** 모두 가져오기 */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다.
             * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
             * 하나의 loading 으로 처리하기 위해서 만들었습니다.
             */
            yield Promise.all([
                this.getWorkContract(),
                this.getEducationHire(),
                this.getEducationRoutine(),
                this.getEducationSpecial(),
                this.getEducation()
            ]);
            loading.dismiss();
        });
    }
    /** 교육정보 가져오기 */
    getEducationSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _my_page_education_search_my_page_education_search_page__WEBPACK_IMPORTED_MODULE_9__.MyPageEducationSearchPage,
                componentProps: {
                    educationGetForm: this.educationGetForm
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.educationGetForm = data;
                this.get();
            }
        });
    }
    /** 고용형태 가져오기 */
    getWorkContract() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/mypage/workcontract');
        });
    }
    /** 채용시 교육 가져오기 */
    getEducationHire() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.educationHireRes = yield this.connect.run('/mypage/safeeducation/hire/list', this.educationGetForm);
            if (this.educationHireRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.educationHireRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.educationHireRes.rsMsg });
            }
        });
    }
    /** 정기교육 가져오기 */
    getEducationRoutine() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.educationRoutineRes = yield this.connect.run('/mypage/safeeducation/routine/list', this.educationGetForm);
            if (this.educationRoutineRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.educationRoutineRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.educationRoutineRes.rsMsg });
            }
        });
    }
    /** 특별교육 가져오기 */
    getEducationSpecial() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.educationSpecialRes = yield this.connect.run('/mypage/safeeducation/special/list', this.educationGetForm);
            if (this.educationSpecialRes.rsCode === 0) {
                (_a = this.educationSpecialRes.rsMap) === null || _a === void 0 ? void 0 : _a.forEach(item => this.education.parseEducationHours(item));
            }
            else if (this.educationSpecialRes.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ color: 'warning', message: this.educationSpecialRes.rsMsg });
            }
        });
    }
    /** 전체 교육 이력 가져오기 */
    getEducation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.educationRes = yield this.connect.run('/mypage/education/list', this.educationGetForm);
            if (this.educationRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.educationRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.educationRes.rsMsg });
            }
        });
    }
};
MyPageEducationPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_7__.RegexService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_service_education_service__WEBPACK_IMPORTED_MODULE_8__.EducationService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
MyPageEducationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-my-page-education',
        template: _raw_loader_my_page_education_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_page_education_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPageEducationPage);



/***/ }),

/***/ 86727:
/*!**********************************************!*\
  !*** ./src/app/service/education.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationService": () => (/* binding */ EducationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let EducationService = class EducationService {
    constructor() { }
    /** 교육 시간의 시간단위 number값 가져오기 */
    parseEducationHours(item) {
        var _a, _b, _c;
        const completeHourArr = ((_a = item.education_complete_time) === null || _a === void 0 ? void 0 : _a.split(':')) || ['00', '00'];
        item.education_complete_hours = parseInt(completeHourArr[0]) + (parseInt(completeHourArr[1]) / 60);
        const needHourArr = ((_b = item.education_need_time) === null || _b === void 0 ? void 0 : _b.split(':')) || ['00', '00'];
        item.education_need_hours = parseInt(needHourArr[0]) + (parseInt(needHourArr[1]) / 60);
        const recommendHourArr = ((_c = item.recommend_time) === null || _c === void 0 ? void 0 : _c.split(':')) || ['00', '00'];
        item.recommend_hours = parseInt(recommendHourArr[0]) + (parseInt(recommendHourArr[1]) / 60);
    }
};
EducationService.ctorParameters = () => [];
EducationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], EducationService);



/***/ }),

/***/ 77441:
/*!****************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-education/my-page-education.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".round {\n  background-color: var(--ion-color-success);\n  border-radius: 20px;\n  width: 18px;\n  height: 18px;\n  margin: auto;\n}\n\n.round.red {\n  background-color: var(--ion-color-danger);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UtZWR1Y2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2hCOztBQUNBO0VBQ0kseUNBQXlDO0FBRTdDIiwiZmlsZSI6Im15LXBhZ2UtZWR1Y2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5yb3VuZC5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufSJdfQ== */");

/***/ }),

/***/ 21349:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page-education/my-page-education.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/my-page-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('교육 이력') }}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-template [label]=\"languagePack.getText('현장명')\" (buttonClick)=\"getEducationSearch()\">\n      <p slot=\"input\">{{ educationGetForm.project_name }}</p>\n      {{ languagePack.getText('상세검색') }}\n    </app-input-template>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <ion-segment color=\"primary\" [(ngModel)]=\"segment\">\n      <ion-segment-button value=\"ONE\">{{ languagePack.getText('주요 교육 현황') }}</ion-segment-button>\n      <ion-segment-button value=\"TWO\">{{ languagePack.getText('전체 교육 이력') }}</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <app-container size=\"small\">\n\n    <div *ngIf=\"segment === 'ONE'\">\n\n      <h4>{{ languagePack.getText('채용 시') }}</h4>\n\n      <app-table>\n        <thead>\n          <tr>\n            <th>{{ languagePack.getText('교육명') }}</th>\n            <th>{{ languagePack.getText('이수일') }}</th>\n            <th>{{ languagePack.getText('시간') }}</th>\n            <th>{{ languagePack.getText('교육 상태') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{ educationHireRes?.rsObj?.ctgo_education_safe_name }}</td>\n            <td>{{ educationHireRes?.rsObj?.education_date }}</td>\n            <td>{{ educationHireRes?.rsObj?.education_complete_time }}</td>\n            <td>\n              <ng-container *ngIf=\"educationHireRes?.rsObj?.recruitment_state\">\n                <div class=\"round\"\n                [class.red]=\"educationHireRes?.rsObj?.recruitment_state !== '양호'\"></div>\n                {{ educationHireRes?.rsObj?.recruitment_state }}\n              </ng-container>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n\n      <h4>{{ languagePack.getText('정기 교육') }}</h4>\n      \n      <app-table>\n        <thead>\n          <tr>\n            <th>{{ languagePack.getText('교육명') }}</th>\n            <th>{{ languagePack.getText('이수기간') }}</th>\n            <th>{{ languagePack.getText('잔여일') }}</th>\n            <th>{{ languagePack.getText('교육 상태') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{ educationRoutineRes?.rsObj?.ctgo_education_safe_name }}</td>\n            <td>{{ educationRoutineRes?.rsObj?.education_start_term }} ~ {{ educationRoutineRes?.rsObj?.education_end_term }}</td>\n            <td>{{ educationRoutineRes?.rsObj?.remaining_date }}</td>\n            <td>\n              <ng-container *ngIf=\"educationRoutineRes?.rsObj?.require_state\">\n                <div class=\"round\"\n                [class.red]=\"educationRoutineRes.rsObj.require_state !== '양호'\"></div>\n                {{ educationRoutineRes.rsObj.require_state }}\n              </ng-container>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n\n      <ng-container *ngIf=\"educationSpecialRes?.rsMap && res?.rsObj?.work_contract_type === '일용직'\">\n  \n        <h4>{{ languagePack.getText('특별 교육') }}</h4>\n  \n        <app-table>\n          <thead>\n            <tr>\n              <th>{{ languagePack.getText('교육명') }}</th>\n              <th>{{ languagePack.getText('이수일') }}</th>\n              <th>필요시간</th>\n              <th>{{ languagePack.getText('교육 상태') }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of educationSpecialRes?.rsMap\">\n              <td>{{ item.ctgo_education_safe_name }}</td>\n              <td>{{ item.education_date }}</td>\n              <td>{{ item.education_need_time }}</td>\n              <td>\n                <ng-container *ngIf=\"item.special_state === '필요'\">\n                  <div class=\"round red\"></div>\n                  필요\n                </ng-container>\n                <ng-container *ngIf=\"item.special_state === '양호'\">\n                  <div class=\"round\"></div>\n                  양호\n                </ng-container>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n\n      </ng-container>\n\n      <ng-container *ngIf=\"educationSpecialRes?.rsMap && res?.rsObj?.work_contract_type === '상용직'\">\n\n        <h4>{{ languagePack.getText('특별 교육') }}</h4>\n  \n        <app-table>\n          <thead>\n            <tr>\n              <th>{{ languagePack.getText('교육명') }}</th>\n              <th>{{ languagePack.getText('이수기간') }}</th>\n              <th>{{ languagePack.getText('잔여일') }}</th>\n              <th>{{ languagePack.getText('교육 상태') }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of educationSpecialRes?.rsMap\">\n              <td>{{ item.ctgo_education_safe_name }}</td>\n              <td>{{ item.education_start_term }} ~ {{ item.education_end_term }}</td>\n              <td>{{ item.remaining_date }}</td>\n              <td>\n                <ng-container *ngIf=\"item.special_state === '양호'\">\n                  <div class=\"round\"></div>\n                  양호\n                </ng-container>\n                <ng-container *ngIf=\"item.special_state === '필요'\">\n                  <div class=\"round red\"></div>\n                  필요\n                </ng-container>\n                <ng-container *ngIf=\"item.special_state === '기한초과'\">\n                  <div class=\"round red\"></div>\n                  기한초과\n                </ng-container>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n\n      </ng-container>\n\n    </div>\n\n    <!-- 교육 이력 -->\n    <div *ngIf=\"segment === 'TWO'\">\n\n      <app-table>\n        <thead>\n          <tr>\n            <th>NO</th>\n            <th>{{ languagePack.getText('교육 구분') }}</th>\n            <th>{{ languagePack.getText('교육명') }}</th>\n            <th>{{ languagePack.getText('이수일') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of educationRes?.rsMap; let i = index;\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_education_safe_type }}</td>\n            <td>{{ item.ctgo_education_safe_title }}</td>\n            <td>{{ item.education_safe_date }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n\n    </div>\n\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page-education_my-page-education_module_ts.js.map