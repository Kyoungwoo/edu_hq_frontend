(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_emergency-management_accident-edit_accident-edit_module_ts"],{

/***/ 49970:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-edit/accident-edit-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentEditPageRoutingModule": () => (/* binding */ AccidentEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accident_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accident-edit.page */ 30835);




const routes = [
    {
        path: '',
        component: _accident_edit_page__WEBPACK_IMPORTED_MODULE_0__.AccidentEditPage
    }
];
let AccidentEditPageRoutingModule = class AccidentEditPageRoutingModule {
};
AccidentEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccidentEditPageRoutingModule);



/***/ }),

/***/ 33988:
/*!*********************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-edit/accident-edit.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentEditPageModule": () => (/* binding */ AccidentEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _accident_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accident-edit-routing.module */ 49970);
/* harmony import */ var _accident_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accident-edit.page */ 30835);








let AccidentEditPageModule = class AccidentEditPageModule {
};
AccidentEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _accident_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccidentEditPageRoutingModule,
        ],
        declarations: [_accident_edit_page__WEBPACK_IMPORTED_MODULE_2__.AccidentEditPage]
    })
], AccidentEditPageModule);



/***/ }),

/***/ 30835:
/*!*******************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-edit/accident-edit.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentEditPage": () => (/* binding */ AccidentEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accident_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accident-edit.page.html */ 24522);
/* harmony import */ var _accident_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accident-edit.page.scss */ 58913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let AccidentEditPage = class AccidentEditPage {
    constructor(_modal) {
        this._modal = _modal;
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() {
    }
};
AccidentEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AccidentEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-accident-edit',
        template: _raw_loader_accident_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accident_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccidentEditPage);



/***/ }),

/***/ 58913:
/*!*********************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-edit/accident-edit.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\napp-check-input {\n  display: grid;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\napp-check {\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2lkZW50LWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsY0FBUTtFQUFSLFNBQVE7QUFDWjs7QUFFQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFjY2lkZW50LWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRhYmxlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mbGV4X2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmFwcC1jaGVjay1pbnB1dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MTBweDtcbn1cblxuYXBwLWNoZWNrIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ 24522:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/accident-edit/accident-edit.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>안전 사고 조사표</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">등록</app-button>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <div class=\"flex_end\">\n            <h4>작성자 : 홍길동</h4> \n          </div>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h4>공사현황</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-scene></app-select-scene>\n          <!-- <app-input label=\"현장명\" value=\"세종시 블록형 단독주택공사\" [required]=\"true\" [readonly]=\"false\" [disabled]=\"false\"></app-input> -->\n        </app-col>\n        <app-col>\n          <app-select-contractor></app-select-contractor>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input-group label=\"공사기간\"  [required]=\"false\">\n            <app-calendar></app-calendar>\n            ~\n            <app-calendar></app-calendar>\n          </app-input-group>\n        </app-col>\n        <app-col>\n          <app-input label=\"공정율\" value=\"\" [required]=\"false\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"공사금액\" value=\"\" [required]=\"false\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"낙찰율\" value=\"\" [required]=\"false\" [readonly]=\"false\" [disabled]=\"false\"></app-input>\n        </app-col>\n      </app-row>\n      \n      <app-row>\n        <app-col>\n          <h4>사고 현황</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input-group label=\"발생일시\"  [required]=\"true\">\n            <app-calendar></app-calendar>\n            ~\n            <app-datetime></app-datetime>\n          </app-input-group>\n        </app-col>\n        <app-col>\n          <app-input label=\"발생장소\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"발생공종\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-accident></app-select-accident>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"인적피해사망(명)\" [required]=\"true\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"인적피해부상(명)\" [required]=\"true\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"물적피해\" [required]=\"true\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"재해자 성명\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"재해자 성별\" placeholder=\"남/여\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"재해자 생년월일\" placeholder=\"1900.00.00\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"소속\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"특기사항\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-textarea label=\"사고경위\" [required]=\"true\"></app-textarea>\n        </app-col>\n      </app-row>\n\n\n      <app-row>\n        <app-col>\n          <app-table>\n            <tbody>\n              <tr>\n                <th>관리적 요인</th>\n                <td>\n                  <app-check-input>\n                    <app-row>\n                      <app-col>\n                        <app-check value=\"구조물,기계,설비불량\">구조물,기계,설비불량</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"구조재료 부적합\">구조재료 부적합</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"작업방법 부적당\">작업방법 부적당</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"점검장비 불량\">점검장비 불량</app-check>\n                      </app-col>\n                    </app-row>\n                    <app-row>\n                      <app-col>\n                        <app-check value=\"안전교육 부족\">안전교육 부족</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"안전관리조직 결함\">안전관리조직 결함</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"작업수칙 미구비\">작업수칙 미구비</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"작업요청 부적당\">작업요청 부적당</app-check>\n                      </app-col>\n                    </app-row>\n                  </app-check-input>\n                </td>\n              </tr>\n              <tr>\n                <th>물적 요인</th>\n                <td>\n                  <app-check-input>\n                    <app-row>\n                      <app-col>\n                        <app-check value=\"시설물 자체 결함\">시설물 자체 결함</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"방호장치 결함\">방호장치 결함</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"복장,보호구 결함\">복장,보호구 결함</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"작업장소 불량\">작업장소 불량</app-check>\n                      </app-col>\n                    </app-row>\n                    <app-row>\n                      <app-col>\n                        <app-check value=\"작업환경 결함\">작업환경 결함</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"작업공정의 결함\">작업공정의 결함</app-check>\n                      </app-col>\n                      <app-col></app-col>\n                      <app-col></app-col>\n                    </app-row>\n                  </app-check-input>\n                </td>\n              </tr>\n              <tr>\n                <th>인적 요인</th>\n                <td>\n                  <app-check-input>\n                    <app-row>\n                      <app-col>\n                        <app-check value=\"위험장소 접근\">위험장소 접근</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"안전장치 기능제거\">안전장치 기능제거</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"복장,보호구 잘못 사용\">복장,보호구 잘못 사용</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"기계,기구 잘못 사용\">기계,기구 잘못 사용</app-check>\n                      </app-col>\n                    </app-row>\n                    <app-row> \n                      <app-col>\n                        <app-check value=\"불안전한 속도 조작\">불안전한 속도 조작</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"위험물 취급부주의\">위험물 취급부주의</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"불안전한 자세,동작\">불안전한 자세,동작</app-check>\n                      </app-col>\n                      <app-col>\n                        <app-check value=\"불안전한 상태방치\">불안전한 상태방치</app-check>\n                      </app-col>\n                    </app-row>\n                  </app-check-input>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </app-row>\n\n      <app-row>\n        <app-col>\n          <h4>첨부서류</h4>\n          <app-card color=\"light\" class=\"file-card\">\n            <app-row>\n              <app-col>\n                <h5>첨부자료를 첨부해주세요</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\"> 추가 </app-button>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n      </app-row>\n      \n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_emergency-management_accident-edit_accident-edit_module_ts.js.map