(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_project-management_scene-management_area-add_area-add_module_ts"],{

/***/ 76180:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-add/area-add-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaAddPageRoutingModule": () => (/* binding */ AreaAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _area_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-add.page */ 84438);




const routes = [
    {
        path: '',
        component: _area_add_page__WEBPACK_IMPORTED_MODULE_0__.AreaAddPage
    }
];
let AreaAddPageRoutingModule = class AreaAddPageRoutingModule {
};
AreaAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AreaAddPageRoutingModule);



/***/ }),

/***/ 66259:
/*!**************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-add/area-add.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaAddPageModule": () => (/* binding */ AreaAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _area_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-add-routing.module */ 76180);
/* harmony import */ var _area_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-add.page */ 84438);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let AreaAddPageModule = class AreaAddPageModule {
};
AreaAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _area_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaAddPageRoutingModule
        ],
        declarations: [_area_add_page__WEBPACK_IMPORTED_MODULE_1__.AreaAddPage]
    })
], AreaAddPageModule);



/***/ }),

/***/ 84438:
/*!************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-add/area-add.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaAddPage": () => (/* binding */ AreaAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_area_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./area-add.page.html */ 32227);
/* harmony import */ var _area_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-add.page.scss */ 74770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);







let AreaAddPage = class AreaAddPage {
    constructor(_modal, connect, alert, toast) {
        this._modal = _modal;
        this.connect = connect;
        this.alert = alert;
        this.toast = toast;
        this.area_top_name = '';
        this.area_middle_name = '';
        this.area_bottom_name = '';
    }
    ngOnInit() {
        if (this.selectData) {
            this.title = '수정';
            this.area_top_name = this.selectData.area_top_name;
            this.area_middle_name = this.selectData.area_middle_name;
            this.area_bottom_name = this.selectData.area_bottom_name;
            console.log(this.area_middle_name);
        }
        else
            this.title = '추가';
        console.log(this.selectData);
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.selectData) {
                const alert = yield this.alert.create({
                    message: '장소를 추가 하시겠습니까?',
                    buttons: [
                        { text: '아니요' },
                        { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                switch (this.area) {
                                    case 'area1':
                                        if (!this.area_top_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const resarea1 = yield this.connect.run('/project/area/top/insert', {
                                            project_id: this.project_id,
                                            area_top_name: this.area_top_name
                                        });
                                        if (resarea1.rsCode === 0) {
                                            this._modal.dismiss('Y');
                                        }
                                        ;
                                        break;
                                    case 'area2':
                                        if (!this.area_middle_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const resarea2 = yield this.connect.run('/project/area/middle/insert', {
                                            area_top_id: this.area_top_id,
                                            area_middle_name: this.area_middle_name
                                        });
                                        if (resarea2.rsCode === 0) {
                                            this._modal.dismiss(this.area_top_id);
                                        }
                                        ;
                                        break;
                                    case 'area3':
                                        if (!this.area_bottom_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const resarea3 = yield this.connect.run('/project/area/bottom/insert', {
                                            area_top_id: this.area_top_id,
                                            area_middle_id: this.area_middle_id,
                                            area_bottom_name: this.area_bottom_name
                                        });
                                        if (resarea3.rsCode === 0) {
                                            this._modal.dismiss(this.area_middle_id);
                                        }
                                        ;
                                        break;
                                }
                            })
                        }
                    ]
                });
                alert.present();
            }
            else {
                const alert = yield this.alert.create({
                    message: '장소를 수정 하시겠습니까?',
                    buttons: [
                        { text: '아니요' },
                        { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                switch (this.area) {
                                    case 'area1':
                                        if (!this.area_top_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const area1 = yield this.connect.run('/project/area/top/update', {
                                            project_id: this.project_id,
                                            area_top_name: this.area_top_name,
                                            area_top_id: this.selectData.area_top_id
                                        });
                                        if (area1.rsCode === 0) {
                                            this._modal.dismiss('Y');
                                        }
                                        ;
                                        break;
                                    case 'area2':
                                        if (!this.area_middle_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const area2 = yield this.connect.run('/project/area/middle/update', {
                                            area_top_id: this.area_top_id,
                                            area_middle_name: this.area_middle_name,
                                            area_middle_id: this.selectData.area_middle_id
                                        });
                                        if (area2.rsCode === 0) {
                                            this._modal.dismiss(this.area_top_id);
                                        }
                                        ;
                                        break;
                                    case 'area3':
                                        if (!this.area_bottom_name)
                                            return this.toast.present({ message: '장소를 적어주세요.', color: 'danger' });
                                        const area3 = yield this.connect.run('/project/area/bottom/update', {
                                            area_top_id: this.area_top_id,
                                            area_bottom_id: this.selectData.area_bottom_id,
                                            area_middle_id: this.area_middle_id,
                                            area_bottom_name: this.area_bottom_name
                                        });
                                        if (area3.rsCode === 0) {
                                            this._modal.dismiss(this.area_middle_id);
                                        }
                                        ;
                                        break;
                                }
                            })
                        }
                    ]
                });
                alert.present();
            }
        });
    }
};
AreaAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
AreaAddPage.propDecorators = {
    area: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    area_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    selectData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    area_top_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    area_middle_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AreaAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-area-add',
        template: _raw_loader_area_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_area_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AreaAddPage);



/***/ }),

/***/ 74770:
/*!**************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/area-add/area-add.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLWFkZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 32227:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/area-add/area-add.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>작업 장소 {{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-table>\n    <thead>\n      <tr *ngIf=\"area === 'area1'\">\n        <th style=\"vertical-align: middle;\">{{ area }}</th>\n        <td><app-textarea [(ngModel)]=\"area_top_name\" placeholder=\"추가 할 내용을 입력해주세요.\" [rows]=\"5\"></app-textarea></td>\n      </tr>\n      <tr *ngIf=\"area === 'area2'\">\n        <th style=\"vertical-align: middle;\">{{ area }}</th>\n        <td><app-textarea [(ngModel)]=\"area_middle_name\" placeholder=\"추가 할 내용을 입력해주세요.\" [rows]=\"5\"></app-textarea></td>\n      </tr>\n      <tr *ngIf=\"area === 'area3'\">\n        <th style=\"vertical-align: middle;\">{{ area }}</th>\n        <td><app-textarea [(ngModel)]=\"area_bottom_name\" placeholder=\"추가 할 내용을 입력해주세요.\" [rows]=\"5\"></app-textarea></td>\n      </tr>\n    </thead>\n  </app-table>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"submit()\">{{ this.title }}</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_project-management_scene-management_area-add_area-add_module_ts.js.map