(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_my-page_my-page-mileage_my-page-mileage_module_ts"],{

/***/ 65515:
/*!********************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-mileage/my-page-mileage-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageMileagePageRoutingModule": () => (/* binding */ MyPageMileagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_page_mileage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-mileage.page */ 97659);




const routes = [
    {
        path: '',
        component: _my_page_mileage_page__WEBPACK_IMPORTED_MODULE_0__.MyPageMileagePage
    }
];
let MyPageMileagePageRoutingModule = class MyPageMileagePageRoutingModule {
};
MyPageMileagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPageMileagePageRoutingModule);



/***/ }),

/***/ 50616:
/*!************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-mileage/my-page-mileage.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageMileagePageModule": () => (/* binding */ MyPageMileagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_page_mileage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page-mileage-routing.module */ 65515);
/* harmony import */ var _my_page_mileage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-mileage.page */ 97659);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MyPageMileagePageModule = class MyPageMileagePageModule {
};
MyPageMileagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _my_page_mileage_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPageMileagePageRoutingModule
        ],
        declarations: [_my_page_mileage_page__WEBPACK_IMPORTED_MODULE_1__.MyPageMileagePage]
    })
], MyPageMileagePageModule);



/***/ }),

/***/ 97659:
/*!**********************************************************************!*\
  !*** ./src/app/page/my-page/my-page-mileage/my-page-mileage.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPageMileagePage": () => (/* binding */ MyPageMileagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_page_mileage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-page-mileage.page.html */ 31796);
/* harmony import */ var _my_page_mileage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page-mileage.page.scss */ 86515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);














let MyPageMileagePage = class MyPageMileagePage {
    constructor(el, connect, _modal, nav, regex, user, toast, alert, loading, promise, changeDetector, languagePack) {
        this.el = el;
        this.connect = connect;
        this._modal = _modal;
        this.nav = nav;
        this.regex = regex;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
    }
    ngOnInit() {
        this.get();
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
                this.getMileageTotal(),
                this.getMileagePlus(),
                this.getMileageMinus()
            ]);
            loading.dismiss();
        });
    }
    /** 마일리지 정보 가져오기 */
    getMileageTotal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.mileageTotalRes = yield this.connect.run('/mypage/mileagetotal/list');
            if (this.mileageTotalRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.mileageTotalRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.mileageTotalRes.rsMsg });
            }
        });
    }
    getMileagePlus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.mileagePlusRes = yield this.connect.run('/mypage/mileageplus/list');
            if (this.mileagePlusRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.mileagePlusRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.mileagePlusRes.rsMsg });
            }
        });
    }
    getMileageMinus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.mileageMinusRes = yield this.connect.run('/mypage/mileageminus/list');
            if (this.mileageMinusRes.rsCode === 1008) {
                // 암것도 안함
            }
            else if (this.mileageMinusRes.rsCode) {
                this.toast.present({ color: 'warning', message: this.mileageMinusRes.rsMsg });
            }
        });
    }
};
MyPageMileagePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__.NavService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_10__.RegexService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_9__.PromiseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
MyPageMileagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-my-page-mileage',
        template: _raw_loader_my_page_mileage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_page_mileage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPageMileagePage);



/***/ }),

/***/ 86515:
/*!************************************************************************!*\
  !*** ./src/app/page/my-page/my-page-mileage/my-page-mileage.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-row {\n  align-items: flex-start;\n}\n\napp-input-caption + app-input-caption {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhZ2UtbWlsZWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7RUFDSSxhQUFhO0FBRWpCIiwiZmlsZSI6Im15LXBhZ2UtbWlsZWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbmFwcC1pbnB1dC1jYXB0aW9uICsgYXBwLWlucHV0LWNhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDA7XG59Il19 */");

/***/ }),

/***/ 31796:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/my-page-mileage/my-page-mileage.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/my-page-type\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ languagePack.getText('안전 마일리지') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n\n    <!-- 안전 마일리지 -->\n    <div>\n\n      <h4>{{ languagePack.getText('안전 마일리지') }}</h4>\n\n      <app-table>\n        <thead>\n          <tr>\n            <th>{{ languagePack.getText('총 적립 마일리지') }}</th>\n            <th>{{ languagePack.getText('총 사용 마일리지') }}</th>\n            <th>{{ languagePack.getText('잔여 마일리지') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.total_mileage) || 0 }}</td>\n            <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.plus_mileage) || 0 }}</td>\n            <td>{{ regex.replace.price(mileageTotalRes?.rsObj?.minus_mileage) || 0 }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      \n      <h4>{{ languagePack.getText('안전 마일리지 적립 내역') }}</h4>\n\n      <app-table>\n        <thead>\n          <tr>\n            <th>NO</th>\n            <th>{{ languagePack.getText('마일리지 분류') }}</th>\n            <th>{{ languagePack.getText('지급자') }}</th>\n            <th>{{ languagePack.getText('적립일') }}</th>\n            <th>{{ languagePack.getText('적립 마일리지') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mileagePlusRes?.rsMap; let i = index;\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ regex.replace.price(item.ctgo_safe_mileage_point) }}</td>\n          </tr>\n          <tr *ngIf=\"mileagePlusRes && mileagePlusRes.rsCode === 1008\">\n            <td colspan=\"5\">{{ languagePack.getText('안전마일리지 적립 내역이 없습니다.') }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n\n      <h4>{{ languagePack.getText('안전 마일리지 사용 내역') }}</h4>\n\n      <app-table>\n        <thead>\n          <tr>\n            <th>NO</th>\n            <th>{{ languagePack.getText('안전 마일리지 사용 내역') }}</th>\n            <th>{{ languagePack.getText('사용자') }}</th>\n            <th>{{ languagePack.getText('사용일') }}</th>\n            <th>{{ languagePack.getText('사용 마일리지') }}</th>\n            <th>{{ languagePack.getText('지급 상태') }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mileageMinusRes?.rsMap; let i = index;\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ regex.replace.price(item.ctgo_safe_mileage_point) }}</td>\n            <td>지급완료</td>\n          </tr>\n          <tr *ngIf=\"mileageMinusRes && mileageMinusRes.rsCode === 1008\">\n            <td colspan=\"6\">{{ languagePack.getText('안전마일리지 사용 내역이 없습니다.') }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n\n    </div>\n\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-page_my-page-mileage_my-page-mileage_module_ts.js.map