(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_notice-board_msds_msds-edit_msds-edit_module_ts"],{

/***/ 1406:
/*!******************************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-edit/msds-edit-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsEditPageRoutingModule": () => (/* binding */ MsdsEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _msds_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msds-edit.page */ 91601);




const routes = [
    {
        path: '',
        component: _msds_edit_page__WEBPACK_IMPORTED_MODULE_0__.MsdsEditPage
    }
];
let MsdsEditPageRoutingModule = class MsdsEditPageRoutingModule {
};
MsdsEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MsdsEditPageRoutingModule);



/***/ }),

/***/ 57134:
/*!**********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-edit/msds-edit.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsEditPageModule": () => (/* binding */ MsdsEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _msds_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msds-edit-routing.module */ 1406);
/* harmony import */ var _msds_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msds-edit.page */ 91601);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _notice_notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notice/notice-open-range/notice-open-range.module */ 96455);
/* harmony import */ var _notice_notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notice/notice-open-range/notice-open-range.page */ 62106);











let MsdsEditPageModule = class MsdsEditPageModule {
};
MsdsEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _msds_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MsdsEditPageRoutingModule,
            _notice_notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__.NoticeOpenRangePageModule
        ],
        declarations: [_msds_edit_page__WEBPACK_IMPORTED_MODULE_1__.MsdsEditPage],
        providers: [
            _notice_notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__.NoticeOpenRangePage
        ]
    })
], MsdsEditPageModule);



/***/ }),

/***/ 91601:
/*!********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-edit/msds-edit.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsItem": () => (/* binding */ MsdsItem),
/* harmony export */   "MsdsEditPage": () => (/* binding */ MsdsEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_msds_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./msds-edit.page.html */ 73546);
/* harmony import */ var _msds_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msds-edit.page.scss */ 63612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);












class MsdsItem {
    constructor() {
        this.file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.msds_content =
            "1. 화학제품과 회사에 관한 정보\n"
                + "2. 유해성, 위험성\n"
                + "3. 구성성분의 명칭 및 함유량\n"
                + "4. 응급조치 요령\n"
                + "5. 폭팔, 화재시 대처방법\n"
                + "6. 누출 사고시 대처방법\n"
                + "7. 취급 및 저장방법\n"
                + "8. 노출방지 및 개인보호구\n"
                + "9. 물리화학적 특성\n"
                + "10. 안전성 및 반응성\n"
                + "11. 독성에 관한 정보\n"
                + "12. 환경에 미치는 영향\n"
                + "13. 폐기 시 주의 사항\n"
                + "14. 운송에 필요한 정보\n"
                + "15. 법적 규제현황\n"
                + "16. 그 밖의 참고사항";
    }
}
;
let MsdsEditPage = class MsdsEditPage {
    constructor(connect, _modal, toast, user, date, alert, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.date = date;
        this.alert = alert;
        this.languagePack = languagePack;
        this.update_state = false;
        this.permission = {
            edit: false
        };
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new MsdsItem()).validator;
        this.updateState = true;
        this.useMsds = false;
        this.form = new MsdsItem();
    }
    ngOnInit() {
        if (this.user.userData.belong_data.company_contract_type === 'LH' || this.user.userData.belong_data.company_contract_type === '감리사') {
            this.form.project_id = 0;
        }
        this.getPermission();
        console.log('ngOnInit - ', this.msds_id);
        if (this.msds_id) {
            this.title = '상세';
            this.get();
        }
        else {
            this.update_state = true;
            this.form.project_id = this.user.userData.belong_data.project_id;
            this.form.company_name = this.user.userData.belong_data.company_name;
            this.form.user_name = this.user.userData.user_name;
            this.form.create_date = this.date.today();
            this.title = '등록';
        }
    }
    getPermission() {
        const company_contract_type = this.user.userData.belong_data.company_contract_type;
        if (company_contract_type === '원청사'
            || company_contract_type === '협력사') {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/board/msds/detail', {
                msds_id: this.msds_id
            }, { parse: ['file_data'] });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                if (this.user.userData.user_id === this.form.create_user_id)
                    this.useMsds = true;
            }
        });
    }
    submit() {
        if (this.form.msds_id)
            this.update();
        else
            this.MsdsInsert();
    }
    MsdsInsert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id)
                return this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
            if (!this.form.msds_type)
                return this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' });
            //메소드 호출
            const alert = yield this.alert.present({
                message: '등록 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/msds/insert', this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id)
                return this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
            if (!this.form.msds_type)
                return this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/msds/update', this.form);
                            if (res.rsCode === 0) {
                                this.update_state = false;
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
        });
    }
    Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/msds/delete', {
                                msds_ids: [this.msds_id]
                            });
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
        });
    }
    dismiss() {
        this._modal.dismiss();
    }
    updateButton() {
        if (this.update_state)
            this.submit();
        else
            this.update_state = true;
    }
};
MsdsEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
MsdsEditPage.propDecorators = {
    msdsText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['msdsText',] }],
    msds_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
MsdsEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-msds-edit',
        template: _raw_loader_msds_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_msds_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MsdsEditPage);



/***/ }),

/***/ 63612:
/*!**********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-edit/msds-edit.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtc2RzLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 73546:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/msds/msds-edit/msds-edit.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>MSDS {{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *mobileHidden>\n  <h4>MSDS</h4>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select-scene label=\"현장명\" [disabled]=\"true\" [(ngModel)]=\"form.project_id\" [required]=\"true\"></app-select-scene>\n    </app-col>\n    <app-col>\n      <app-input label=\"업체명\" [(ngModel)]=\"form.company_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-input label=\"작성자\" [(ngModel)]=\"form.user_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input label=\"작성일\" [(ngModel)]=\"form.create_date\" [disabled]=\"true\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select [disabled]=\"!update_state\" label=\"구분\" [(ngModel)]=\"form.msds_type\" [required]=\"true\">\n        <app-select-option value=\"해당없음\">해당없음</app-select-option>\n        <app-select-option value=\"폭발성 물질\">폭발성 물질</app-select-option>\n        <app-select-option value=\"인화성 가스\">인화성 가스</app-select-option>\n        <app-select-option value=\"인화성 액체\">인화성 액체</app-select-option>\n        <app-select-option value=\"인화성 고체\">인화성 고체</app-select-option>\n        <app-select-option value=\"에어로졸\">에어로졸</app-select-option>\n        <app-select-option value=\"물반응성 물질\">물반응성 물질</app-select-option>\n        <app-select-option value=\"산화성 가스\">산화성 가스</app-select-option>\n        <app-select-option value=\"산화성 액체\">산화성 액체</app-select-option>\n        <app-select-option value=\"산화성 고체\">산화성 고체</app-select-option>\n        <app-select-option value=\"고압가스\">고압가스</app-select-option>\n        <app-select-option value=\"자기반응성 물질\">자기반응성 물질</app-select-option>\n        <app-select-option value=\"자연발화성 액체\">자연발화성 액체</app-select-option>\n        <app-select-option value=\"자연발화성 고체\">자연발화성 고체</app-select-option>\n        <app-select-option value=\"심한 눈 손상성 또는 자극성 물질\">심한 눈 손상성 또는 자극성 물질</app-select-option>\n        <app-select-option value=\"호흡기 과민성 물질\">호흡기 과민성 물질</app-select-option>\n        <app-select-option value=\"피부 과민성 물질\">피부 과민성 물질</app-select-option>\n        <app-select-option value=\"발암성물질\">발암성물질</app-select-option>\n        <app-select-option value=\"생식세포 변이원성 물질\">생식세포 변이원성 물질</app-select-option>\n        <app-select-option value=\"생식독성 물질\">생식독성 물질</app-select-option>\n        <app-select-option value=\"특정표적장기 독성 물질(1회 노출)\">특정표적장기 독성 물질(1회 노출)</app-select-option>\n        <app-select-option value=\"특정표적장기 독성 물질(반복 노출)\">특정표적장기 독성 물질(반복 노출)</app-select-option>\n        <app-select-option value=\"흡인유해성 물질\">흡인유해성 물질</app-select-option>\n        <app-select-option value=\"수생환경 유해성 물질\">수생환경 유해성 물질</app-select-option>\n        <app-select-option value=\"오존층 유해성 물질\">오존층 유해성 물질</app-select-option>\n        <app-select-option value=\"유기과산화물\">유기과산화물</app-select-option>\n        <app-select-option value=\"자기발산열성 물질\">자기발산열성 물질</app-select-option>\n        <app-select-option value=\"금속부식성 물질\">금속부식성 물질</app-select-option>\n        <app-select-option value=\"고압가스\">고압가스</app-select-option>\n        <app-select-option value=\"급성 독성(경구,경피,흡입)\">급성 독성(경구,경피,흡입)</app-select-option>\n        <app-select-option value=\"피부 부식성 또는 자극성\">피부 부식성 또는 자극성</app-select-option>\n      </app-select>\n    </app-col>\n    <app-col>\n    </app-col>\n  </app-row>\n  <app-row>\n    <app-col>\n      <app-input [disabled]=\"!update_state\" label=\"제목\" placeholder=\"제목을 입력해주세요\" [(ngModel)]=\"form.msds_title\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row *mobileHidden>\n    <app-col>\n      <app-textarea label=\"내용\" \n        [rows]=\"10\"\n        [(ngModel)]=\"form.msds_content\" [readonly]=\"!update_state\"></app-textarea>\n        \n      <!-- <app-smartedit #msdsText name=\"msds_text\" placeholder=\"내용을 입력하세요.\" \n        [disabled]=\"!update_state\"\n        [color]=\"validator.msds_title?.valid === false && 'warning'\"\n        [(ngModel)]=\"form.msds_content\"></app-smartedit> -->\n        <app-input-caption *ngIf=\"validator.msds_title?.valid === false\">{{ validator.msds_title.message }}</app-input-caption>\n    </app-col>\n  </app-row>\n  <app-row *mobileShow>\n    <app-col>\n      <app-textarea value=\"공지합니다\" [readonly]=\"true\"></app-textarea>\n    </app-col>\n  </app-row>\n  <h4>\n    <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        첨부자료\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"update_state\">\n        <app-button fill=\"translucent\">추가\n          <app-file name=\"input\" view_type=\"NOTICE\" [(ngModel)]=\"form.file_data\" [file]=\"form.file\" [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n    </ion-toolbar>\n  </h4>\n  \n  <!-- <app-file-preview [readonly]=\"!update_state\" *ngFor=\"let futItem of form.file_data\" [futItem]=\"futItem\"></app-file-preview> -->\n  <app-file-preview [readonly]=\"!update_state\"  *ngFor=\"let futItem of form.file_data; let i = index\" [futItem]=\"futItem\" (buttonClick)=\"form.file_data.splice(i,1)\"></app-file-preview>\n\n</ion-content>\n<app-button-footer *mobileHidden>\n  <!-- <app-button *ngIf=\"item && useMsds\" (click)=\"submit()\" fill=\"translucent\">수정</app-button>\n  <app-button *ngIf=\"item && useMsds\" color=\"danger\" (click)=\"Delete()\" fill=\"translucent\">삭제</app-button>\n  <app-button *ngIf=\"!item\" (click)=\"submit()\">저장</app-button> -->\n\n  <app-button *ngIf=\"msds_id && useMsds\" fill=\"translucent\" (click)=\"updateButton()\">{{ update_state ? '저장' : '수정' }}</app-button>\n  <app-button *ngIf=\"msds_id && useMsds\"color=\"danger\" (click)=\"Delete()\" fill=\"translucent\">삭제</app-button>\n  <app-button *ngIf=\"!msds_id\" (click)=\"submit()\">저장</app-button>\n</app-button-footer>\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-content>\n    <app-row>\n      <app-col>\n        <h4>MSDS</h4>\n      </app-col>\n    </app-row>\n    <app-card>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('현장명') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.project_name}}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('원청사명') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.company_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성자') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.user_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성일') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.create_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('구분') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.msds_type }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>제목</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.msds_title }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>내용</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.msds_content }}</p>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-row>\n      <app-col>\n        <h4>{{ languagePack.getText('첨부자료') }}</h4>\n      </app-col>\n    </app-row>\n\n    <app-file-preview [readonly]=\"!update_state\" *ngFor=\"let futItem of form.file_data\" [futItem]=\"futItem\"></app-file-preview>\n    \n  </ion-content>\n</ng-container>\n<app-button-footer *mobileShow>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('확인') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_notice-board_msds_msds-edit_msds-edit_module_ts.js.map