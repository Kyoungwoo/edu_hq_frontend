(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_emergency-management_emergency-warning_emergency-warning_module_ts"],{

/***/ 55295:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPageRoutingModule": () => (/* binding */ EmergencyTargetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _emergency_target_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-target.page */ 60752);




const routes = [
    {
        path: '',
        component: _emergency_target_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyTargetPage
    }
];
let EmergencyTargetPageRoutingModule = class EmergencyTargetPageRoutingModule {
};
EmergencyTargetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyTargetPageRoutingModule);



/***/ }),

/***/ 92643:
/*!***************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPageModule": () => (/* binding */ EmergencyTargetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _emergency_target_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-target-routing.module */ 55295);
/* harmony import */ var _emergency_target_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergency-target.page */ 60752);








let EmergencyTargetPageModule = class EmergencyTargetPageModule {
};
EmergencyTargetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _emergency_target_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmergencyTargetPageRoutingModule,
        ],
        declarations: [_emergency_target_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyTargetPage]
    })
], EmergencyTargetPageModule);



/***/ }),

/***/ 60752:
/*!*************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyTargetPage": () => (/* binding */ EmergencyTargetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_emergency_target_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emergency-target.page.html */ 63199);
/* harmony import */ var _emergency_target_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-target.page.scss */ 74381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let EmergencyTargetPage = class EmergencyTargetPage {
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
EmergencyTargetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
EmergencyTargetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-emergency-target',
        template: _raw_loader_emergency_target_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emergency_target_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmergencyTargetPage);



/***/ }),

/***/ 35238:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-warning/emergency-warning-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyWarningPageRoutingModule": () => (/* binding */ EmergencyWarningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _emergency_warning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-warning.page */ 7705);




const routes = [
    {
        path: '',
        component: _emergency_warning_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyWarningPage
    }
];
let EmergencyWarningPageRoutingModule = class EmergencyWarningPageRoutingModule {
};
EmergencyWarningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyWarningPageRoutingModule);



/***/ }),

/***/ 55773:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-warning/emergency-warning.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyWarningPageModule": () => (/* binding */ EmergencyWarningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _emergency_warning_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-warning-routing.module */ 35238);
/* harmony import */ var _emergency_warning_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergency-warning.page */ 7705);
/* harmony import */ var _emergency_target_emergency_target_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emergency-target/emergency-target.module */ 92643);









let EmergencyWarningPageModule = class EmergencyWarningPageModule {
};
EmergencyWarningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _emergency_warning_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmergencyWarningPageRoutingModule,
            _emergency_target_emergency_target_module__WEBPACK_IMPORTED_MODULE_3__.EmergencyTargetPageModule
        ],
        declarations: [_emergency_warning_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyWarningPage]
    })
], EmergencyWarningPageModule);



/***/ }),

/***/ 7705:
/*!***************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-warning/emergency-warning.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyWarningPage": () => (/* binding */ EmergencyWarningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_emergency_warning_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emergency-warning.page.html */ 61136);
/* harmony import */ var _emergency_warning_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-warning.page.scss */ 49663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emergency_target_emergency_target_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emergency-target/emergency-target.page */ 60752);






// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let EmergencyWarningPage = class EmergencyWarningPage {
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
    // async eduAdd() {
    //   const modal = await this._modal.create({
    //     component:SearchAttendanceComponent,
    //     componentProps:{
    //       // project_id: this.user.userData.belong_data.project_id,
    //       // company_id: this.user.userData.belong_data.company_id,
    //       // educationType: false,
    //       // value: this.user_id,
    //       // title: '근로자'
    //     }
    //   });
    //   modal.present();
    //   // const { data } = await modal.onDidDismiss();
    //   // if(data) {
    //   //   this.user_id = [];
    //   //   data.forEach(item => {
    //   //     if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
    //   //   });
    //   //   const res = await this.connect.run('/education/attendant/insert',{
    //   //     attendant_user_ids:this.user_id,
    //   //     education_safe_id:this.item.education_safe_id
    //   //   });
    //   //   if(res.rsCode === 0) {
    //   //     this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
    //   //     this.eduGetList();
    //   //   } else {
    //   //     this.toast.present({message:res.rsMsg,color:'warning'});
    //   //   }
    //   //}
    // }
    // async qrAdd() {
    //   const modal = await this._modal.create({
    //     component:QrEducationInPage,
    //     componentProps: {
    //       // item:this.form
    //     }
    //   });
    //   modal.present();
    //   const { data } = await modal.onDidDismiss();
    //   if(data) {
    //     // this.eduGetList();
    //   }
    // }
    // async eduGetList() {
    //   this.res = await this.connect.run('/education/attendant/list',{
    //     education_safe_id:this.item.education_safe_id,
    //     search_text:this.attentForm.search_text
    //   });
    //   if(this.res.rsCode === 0) {
    //     this.user_id = [];
    //     this.res?.rsMap.map((data) => {
    //       this.user_id.push(data.user_id);
    //     });
    //     this.eduUpdate = true;
    //     console.log("this.eduUpdate - ",this.eduUpdate);
    //   }
    // }
    /**
   * 미결함으로 이동
   */
    target() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _emergency_target_emergency_target_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyTargetPage,
            });
            modal.present();
        });
    }
};
EmergencyWarningPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
EmergencyWarningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-emergency-warning',
        template: _raw_loader_emergency_warning_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emergency_warning_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmergencyWarningPage);



/***/ }),

/***/ 74381:
/*!***************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-target/emergency-target.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.flex_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS10YXJnZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUUzQiIsImZpbGUiOiJlbWVyZ2VuY3ktdGFyZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 49663:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-warning/emergency-warning.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table {\n  margin: 0;\n}\n\n.flex_end {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS13YXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7QUFDYjs7QUFFQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImVtZXJnZW5jeS13YXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmxleF9lbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");

/***/ }),

/***/ 63199:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/emergency-target/emergency-target.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>알림대상 설정</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col>\n          <app-select-people></app-select-people>\n        </app-col>\n        <!-- <app-col>\n          <app-input placeholder=\"검색어를 입력하세요.\"></app-input>\n        </app-col>\n        <app-col size=\"auto\" size=\"auto\">\n          <app-button>검색</app-button>\n        </app-col> -->\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-table>\n            <thead>\n              <tr>\n                <th>업체명</th>\n                <th>성명</th>\n                <th>직위</th>\n                <th>안전직무</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" class=\"button\">\n                <td>(주)지에스아이엘</td>\n                <td>이상범</td>\n                <td>프로</td>\n                <td>안전감독자</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-card>\n            <ion-item-group slot=\"end\">\n              <ion-chip outline color=\"primary\">전다영</ion-chip>\n              <ion-chip outline color=\"primary\">김범수</ion-chip>\n            </ion-item-group>\n          </app-card>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <div class=\"flex_center\">\n            <app-button>적용</app-button>\n          </div>\n        </app-col>\n      </app-row>\n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ }),

/***/ 61136:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/emergency-warning/emergency-warning.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>경고 알림 팝업 대상</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col>\n          <app-select-warning></app-select-warning>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <!-- <app-button>전송</app-button> -->\n        </app-col>\n        <app-col class=\"flex_end\">\n          <app-button (click)=\"target()\">대상 추가</app-button>\n        </app-col>\n      </app-row>\n      <arr-row>\n        <app-col>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 48px;\">No</th>\n                <th>회사명</th>\n                <th>공종</th>\n                <th>성명</th>\n                <th>직위</th>\n                <th>안전직무</th>\n                <th>직종</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n                <td>1</td>\n                <td>(주)원청사</td>\n                <td>건축</td>\n                <td>이상범</td>\n                <td>작업팀장</td>\n                <td>안전관리자</td>\n                <td>전기공</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </arr-row>\n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_emergency-management_emergency-warning_emergency-warning_module_ts.js.map