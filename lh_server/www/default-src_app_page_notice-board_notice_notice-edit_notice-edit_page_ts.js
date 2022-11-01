(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_notice-board_notice_notice-edit_notice-edit_page_ts"],{

/***/ 45877:
/*!**************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeItem": () => (/* binding */ NoticeItem),
/* harmony export */   "NoticeEditPage": () => (/* binding */ NoticeEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notice_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notice-edit.page.html */ 38690);
/* harmony import */ var _notice_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-edit.page.scss */ 77664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);












class NoticeItem {
    constructor() {
        this.notice_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
    }
}
let NoticeEditPage = class NoticeEditPage {
    constructor(connect, _modal, toast, user, date, alert, file, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.date = date;
        this.alert = alert;
        this.file = file;
        this.languagePack = languagePack;
        this.update_state = false;
        this.permission = {
            edit: false
        };
        this.form = new NoticeItem();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new NoticeItem()).validator;
        this.useNotice = false;
    }
    ngOnInit() {
        // if(this.user.userData.belong_data.company_contract_type === 'LH') { 
        //   this.form.project_id = 0;
        // }
        this.getPermission();
        if (this.notice_id) {
            this.title = '상세';
            this.get();
        }
        else {
            this.update_state = true;
            this.getForm();
            this.title = '등록';
        }
    }
    getPermission() {
        const company_contract_type = this.user.userData.belong_data.company_contract_type;
        if (company_contract_type === 'LH'
            || company_contract_type === '원청사') {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
    }
    getForm() {
        const { user_name, belong_data } = this.user.userData;
        if (this.searchForm) {
            console.log('if - ', this.form);
            this.form.project_id = this.searchForm.project_id;
            this.form.master_company_id = this.searchForm.master_company_id;
        }
        else {
            console.log('else - ', this.form);
            this.form.project_id = belong_data.project_id;
            this.form.master_company_id = belong_data.master_company_id ? belong_data.master_company_id : belong_data.company_id;
        }
        this.form.company_name = belong_data.company_name;
        this.form.user_name = user_name;
        this.form.create_date = this.date.today();
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/board/notice/detail', {
                notice_id: this.notice_id
            }, { loading: true, parse: ['notice_file_data'] });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                if (this.user.userData.user_id === this.form.create_user_id) {
                    this.useNotice = true;
                }
                // const scopeOne = this.noticeRange.list1.find(item => item.value === this.form.public_scope_one);
                // const scopeTwo = this.noticeRange.list2.find(item => item.value === this.form.public_scope_two);
                // this.rangeText = `${scopeOne.text},${scopeTwo.text},${this.form.scope_company_name ? this.form.scope_company_name : ''}`;
                // if(!this.form.scope_company_name) {
                //   this.rangeText.substring(1,this.rangeText.length -1);
                // }
            }
        });
    }
    submit() {
        // this.noticeText.update();
        if (this.form.notice_id)
            this.update();
        else
            this.noticeInsert();
    }
    noticeInsert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id)
                return this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
            if (!this.form.notice_type)
                return this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' });
            //메소드 호출
            const alert = yield this.alert.present({
                message: '등록 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/notice/insert', this.form);
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
            if (!this.form.notice_type)
                return this.toast.present({ message: '구분을 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/notice/update', this.form);
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
                            const res = yield this.connect.run('/board/notice/delete', {
                                notice_ids: [this.notice_id]
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
NoticeEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
NoticeEditPage.propDecorators = {
    notice_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    searchForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
NoticeEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-notice-edit',
        template: _raw_loader_notice_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notice_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticeEditPage);



/***/ }),

/***/ 77664:
/*!****************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2UtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 38690:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/notice/notice-edit/notice-edit.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>공지사항 {{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ng-container *mobileHidden>\n  <ion-content>\n    <h4>공지사항</h4>\n   <app-row mobileBreak>\n     <app-col>\n        <app-select-scene label=\"현장명\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n     </app-col>\n     <app-col>\n      <app-input label=\"업체명\" [(ngModel)]=\"form.company_name\" [disabled]=\"true\"></app-input>\n     </app-col>\n   </app-row>\n   <app-row mobileBreak>\n    <app-col>\n        <app-input label=\"작성자\" [(ngModel)]=\"form.user_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input label=\"작성일\" [(ngModel)]=\"form.create_date\" [disabled]=\"true\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select [disabled]=\"!update_state\" label=\"구분\" [(ngModel)]=\"form.notice_type\" [required]=\"true\">\n        <app-select-option value=\"일반\">일반</app-select-option>\n        <app-select-option value=\"안전관리\">안전관리</app-select-option>\n        <app-select-option value=\"환경관리\">환경관리</app-select-option>\n        <app-select-option value=\"공사관리\">공사관리</app-select-option>\n        <app-select-option value=\"품질관리\">품질관리</app-select-option>\n      </app-select>\n    </app-col>\n    <app-col>\n      <app-select-contractor [disabled]=\"!update_state\" [allState]=\"true\" [project_id]=\"form.project_id\" [multiple]=\"false\" [(ngModel)]=\"form.master_company_id\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH'\"></app-select-contractor>\n    </app-col>\n  </app-row>\n    <app-row>\n      <app-col>\n        <app-input [disabled]=\"!update_state\" label=\"제목\" [(ngModel)]=\"form.notice_title\"></app-input>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <app-textarea label=\"내용\" \n        [rows]=\"10\"\n        [(ngModel)]=\"form.notice_content\" [readonly]=\"!update_state\"></app-textarea>\n        <!-- <app-smartedit #noticeText name=\"notice_text\" placeholder=\"내용을 입력하세요.\" \n        [disabled]=\"!update_state\"\n        [color]=\"validator.notice_title?.valid === false && 'warning'\"\n        [(ngModel)]=\"form.notice_content\"></app-smartedit> -->\n        <app-input-caption *ngIf=\"validator.notice_title?.valid === false\">{{ validator.notice_title.message }}</app-input-caption>\n      </app-col>\n    </app-row>\n    <app-row *mobileShow>\n      <app-col>\n        <app-textarea value=\"공지합니다\" [readonly]=\"true\"></app-textarea>\n      </app-col>\n    </app-row>\n    <h4>\n      <ion-toolbar color=\"white\">\n      <app-row>\n        <app-col>\n          첨부자료\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"update_state\">\n          <app-button fill=\"translucent\">추가\n            <app-file name=\"input\" view_type=\"NOTICE\"\n            [(ngModel)]=\"form.notice_file_data\" \n            [file]=\"form.file\" \n            [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n          </app-button>\n        </app-col>\n      </app-row>\n    </ion-toolbar>\n    </h4>\n    <app-file-preview [readonly]=\"!update_state\"  *ngFor=\"let futItem of form.notice_file_data; let i = index\" [futItem]=\"futItem\"  \n    (buttonClick)=\"form.notice_file_data.splice(i,1)\"></app-file-preview>\n\n</ion-content>\n<app-button-footer>\n  <!-- <app-button *ngIf=\"item && useNotice\" fill=\"translucent\" (click)=\"submit()\">수정</app-button> -->\n  <app-button *ngIf=\"notice_id && useNotice\" fill=\"translucent\" (click)=\"updateButton()\">{{ update_state ? '저장' : '수정' }}</app-button>\n  <app-button *ngIf=\"notice_id && useNotice\"color=\"danger\" (click)=\"Delete()\" fill=\"translucent\">삭제</app-button>\n  <app-button *ngIf=\"!notice_id\" (click)=\"submit()\">저장</app-button>\n</app-button-footer>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-content>\n    <app-row>\n      <app-col>\n        <h4>{{ languagePack.getText('공지사항') }}</h4>\n      </app-col>\n    </app-row>\n    <app-card>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('현장명') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.project_name}}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('업체명') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.company_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성자') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.user_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성일') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.create_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('구분') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.notice_type }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>제목</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.notice_title }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>내용</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.notice_content }}</p>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-row>\n      <app-col>\n        <h4>{{ languagePack.getText('첨부자료') }}</h4>\n      </app-col>\n    </app-row>\n    <app-file-preview [readonly]=\"!update_state\"  *ngFor=\"let futItem of form.notice_file_data; let i = index\" [futItem]=\"futItem\"  \n    (buttonClick)=\"form.notice_file_data.splice(i,1)\"></app-file-preview>\n  </ion-content>\n</ng-container>\n<app-button-footer *mobileShow>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('확인') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_notice-board_notice_notice-edit_notice-edit_page_ts.js.map