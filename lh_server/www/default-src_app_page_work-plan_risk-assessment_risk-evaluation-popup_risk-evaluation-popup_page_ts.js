(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_work-plan_risk-assessment_risk-evaluation-popup_risk-evaluation-popup_page_ts"],{

/***/ 82369:
/*!****************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructionItem": () => (/* binding */ ConstructionItem),
/* harmony export */   "UnitItem": () => (/* binding */ UnitItem),
/* harmony export */   "FactorItem": () => (/* binding */ FactorItem),
/* harmony export */   "PlanItem": () => (/* binding */ PlanItem),
/* harmony export */   "RiskItem": () => (/* binding */ RiskItem),
/* harmony export */   "RiskEvaluationPopupPage": () => (/* binding */ RiskEvaluationPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_risk_evaluation_popup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./risk-evaluation-popup.page.html */ 32821);
/* harmony import */ var _risk_evaluation_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-evaluation-popup.page.scss */ 54104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);








class ConstructionItem {
    constructor() {
        this.risk_construction_id = null;
        this.risk_construction_name = null;
        this.seq_no = 0;
    }
}
class UnitItem {
    constructor() {
        this.risk_unit_id = null;
        this.risk_unit_name = null;
    }
}
class FactorItem {
    constructor() {
        this.risk_factor_id = null;
        this.risk_factor_name = null;
    }
}
class PlanItem {
    constructor() {
        this.risk_plan_id = null;
        this.risk_plan_name = null;
    }
}
class RiskItem {
    constructor() {
        this.risk_asment_id = null; // 위험성평가 ID (위험성평가 문서 ID)
        this.seq_no = null; // 시퀀스 - 이 한 줄의 ID
        this.risk_construction_id = null; // 공사 ID
        this.risk_construction_name = null; // 공사명
        this.risk_unit_id = null; // 단위작업 ID
        this.risk_unit_name = null; // 단위작업
        this.area_top_id = null; // 장소 첫번째 ID
        this.area_top_name = null; // 장소 첫번째
        this.area_middle_id = null; // 장소 두번째 ID null 이면 안고른거
        this.area_middle_name = null; // 장소 두번째
        this.area_bottom_id = null; // 장소 세번째 ID null 이면 안고른거
        this.area_bottom_name = null; // 장소 세번째
        this.area_name = null;
        this.ctgo_machinery_ids = []; // 건설기계 ID들
        this.ctgo_machinery_names = []; // 건설기계명들
        this.ctgo_tool_ids = []; // 특수공도구 ID들
        this.ctgo_tool_names = []; // 특수공도구명들
        this.risk_factor_id = null; // 위험요인 ID null 이면 직접입력
        this.risk_factor_name = null; // 위험요인
        this.risk_frequency = 1; // 빈도
        this.risk_strength = 1; // 강도
        this.risk_danger_level = 1; // 위험도
        this.risk_plan_id = null; // 감소대책 ID null 이면 직접입력
        this.risk_plan_name = null; // 감소대책
    }
}
let RiskEvaluationPopupPage = class RiskEvaluationPopupPage {
    /**
     * 현재 감소 대책을 직접입력 밖에 없음
      res4:ConnectResult<PlanItem>;
      selectItem4:PlanItem;
     */
    constructor(connect, toast, _modal, languagePack) {
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.languagePack = languagePack;
        this.riskList = [];
        this.form = {
            ctgo_business_field_id: null
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getBusinessField();
            this.get1();
        });
    }
    getBusinessField() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/category/certify/businessfield/get', {
                project_id: this.project_id
            });
            if (res.rsCode === 0) {
                this.form.ctgo_business_field_id = res.rsObj.ctgo_business_field_id;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    get1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.res1 = yield this.connect.run('/risk/assessment/ctgo/construction/get', {
                ctgo_business_field_id: this.form.ctgo_business_field_id
            });
            if (this.res1.rsCode) {
                this.toast.present({ color: 'warning', message: this.res1.rsMsg });
            }
        });
    }
    item1Click(item) {
        this.selectItem1 = item;
        this.selectItem2 = null;
        this.selectItem3 = null;
        this.res2 = null;
        this.res3 = null;
        this.get2();
    }
    get2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.res2 = yield this.connect.run('/risk/assessment/ctgo/unit/get', {
                risk_construction_id: this.selectItem1.risk_construction_id
            });
            if (this.res2.rsCode) {
                this.toast.present({ color: 'warning', message: this.res2.rsMsg });
            }
        });
    }
    item2Click(item) {
        this.selectItem2 = item;
        this.get3();
    }
    get3() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.res3 = yield this.connect.run('/risk/assessment/ctgo/factor/get', {
                risk_construction_id: this.selectItem1.risk_construction_id,
                risk_unit_id: this.selectItem2.risk_unit_id
            });
            if (this.res3.rsCode === 0) {
                // 암것도 안함
            }
            else if (this.res3.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ color: 'warning', message: this.res3.rsMsg });
            }
        });
    }
    item3Click(item) {
        this.selectItem3 = item;
        this.addRiskItem();
        // this.get4(); 현재 감소대책 입력은 직접입력 뿐
    }
    empty3Click() {
        this.selectItem3 = null;
        this.addRiskItem();
    }
    /**
     * 현재 감소대책 입력은 직접입력 뿐
    async get4() {
      this.res4 = await this.connect.run('/risk/assessment/ctgo/plan/get', {
        risk_construction_id: this.selectItem1.risk_construction_id,
        risk_unit_id: this.selectItem2.risk_unit_id,
        risk_factor_id: this.selectItem3.risk_factor_id
  
      });
      if(this.res4.rsCode) {
        this.toast.present({ color: 'warning', message: this.res4.rsMsg });
      }
    } */
    addRiskItem() {
        this.riskList.unshift(Object.assign(Object.assign(Object.assign(Object.assign({}, new RiskItem()), this.selectItem1), this.selectItem2), this.selectItem3));
    }
    submit() {
        const emptyRiskFactor = this.riskList.find(item => {
            return !item.risk_factor_name;
        });
        if (emptyRiskFactor) {
            this.toast.present({ color: 'warning', message: '위험요인을 입력해주세요.' });
            return;
        }
        const emptyRiskPlan = this.riskList.find(item => {
            return !item.risk_plan_name;
        });
        if (emptyRiskPlan) {
            this.toast.present({ color: 'warning', message: '감소대책을 입력해주세요.' });
            return;
        }
        this._modal.dismiss({
            riskList: this.riskList
        });
    }
};
RiskEvaluationPopupPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
RiskEvaluationPopupPage.propDecorators = {
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    riskList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
RiskEvaluationPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-risk-evaluation-popup',
        template: _raw_loader_risk_evaluation_popup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_risk_evaluation_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RiskEvaluationPopupPage);



/***/ }),

/***/ 54104:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.page.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-box {\n  display: flex;\n}\n\n.flex-box .flex-revers {\n  flex-direction: column;\n  flex: 0 0 20%;\n}\n\n.flex-box .flex-revers:nth-child(3) {\n  flex: 0 0 60%;\n  border-right: none;\n}\n\n.flex-box .flex-revers .flex-header {\n  background: var(--ion-color-medium-translucent);\n  height: 40px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-box .flex-revers .flex-header app-img {\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n}\n\n.flex-box .flex-revers .flex-list {\n  height: 300px;\n  overflow: auto;\n  background: white;\n  border-right: 1px solid var(--ion-color-step-100);\n}\n\n.flex-box .flex-revers .flex-list:nth-child(4) {\n  border-right: none;\n}\n\n.flex-box .flex-revers .flex-item {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.flex-box .flex-revers .flex-item:hover {\n  background: var(--ion-color-step-100);\n}\n\n.selected {\n  background-color: var(--ion-color-primary-translucent);\n}\n\nion-textarea {\n  background: var(--ion-color-step-50);\n  margin: 0;\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpc2stZXZhbHVhdGlvbi1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxhQUFhO0FBQWQ7O0FBREE7RUFLRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUFmOztBQU5BO0VBU0csYUFBYTtFQUNiLGtCQUFrQjtBQUNyQjs7QUFYQTtFQWNHLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUMxQjs7QUFyQkE7RUFzQkksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBR2Q7O0FBM0JBO0VBNkJHLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlEQUFpRDtBQUVwRDs7QUFsQ0E7RUFtQ0ksa0JBQWtCO0FBR3RCOztBQXRDQTtFQXdDRyxZQUFZO0VBQ1osZUFBZTtBQUVsQjs7QUEzQ0E7RUE0Q0cscUNBQXFDO0FBR3hDOztBQUNBO0VBQ0Msc0RBQXNEO0FBRXZEOztBQUNBO0VBQ0Msb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxnQkFBZ0I7QUFFakIiLCJmaWxlIjoicmlzay1ldmFsdWF0aW9uLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZsZXgtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0XG5cblx0LmZsZXgtcmV2ZXJzIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGZsZXg6IDAgMCAyMCU7XG5cblx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRmbGV4OiAwIDAgNjAlO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdH1cblxuXHRcdC5mbGV4LWhlYWRlcntcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdHJhbnNsdWNlbnQpO1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGFwcC1pbWcge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHJpZ2h0OiAtMTBweDtcblx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZmxleC1saXN0IHtcblx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRvdmVyZmxvdzogYXV0bztcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcblxuXHRcdFx0JjpudGgtY2hpbGQoNCkge1xuXHRcdFx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmZsZXgtaXRlbSB7XG5cdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHRcdC5mbGV4LWl0ZW06aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcblx0XHR9XG5cdH1cbn1cbi5zZWxlY3RlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRyYW5zbHVjZW50KTtcbn1cblxuaW9uLXRleHRhcmVhe1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MCk7XG5cdG1hcmdpbjogMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ 32821:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>평가표 작성</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<app-row>\n  <app-col slot=\"start\">\n    <app-select-business [(ngModel)]=\"form.ctgo_business_field_id\" [disabled]=\"true\"></app-select-business>\n  </app-col>\n  <app-col></app-col>\n  <app-col></app-col>\n</app-row>\n<div class=\"flex-box\">\n\n  <div class=\"flex-revers\">\n    <!-- header -->\n    <div class=\"flex-header\">\n      <div>공사명</div>\n      <app-img name=\"next\"></app-img>\n    </div>\n    <div class=\"flex-list\" >\n      <!-- item -->\n      <div *ngFor=\"let item of res1?.rsMap\" class=\"flex-item\" [class.selected]=\"selectItem1 === item\" (click)=\"item1Click(item)\">\n        {{ item.risk_construction_name }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"flex-revers\">\n    <!-- header -->\n    <div class=\"flex-header\">\n      <div>단위작업</div>\n      <app-img name=\"next\"></app-img>\n    </div>\n    <div class=\"flex-list\">\n      <!-- item -->\n      <div *ngFor=\"let item of res2?.rsMap\" class=\"flex-item\" [class.selected]=\"selectItem2 === item\" (click)=\"item2Click(item)\">\n        {{ item.risk_unit_name }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"flex-revers\">\n    <!-- header -->\n    <div class=\"flex-header\">\n      <div>위험요인</div>\n      <!-- <app-img name=\"next-dark\"></app-img> -->\n    </div>\n    <div class=\"flex-list\">\n      <!-- item -->\n      <div *ngIf=\"selectItem2\" class=\"flex-item\" (click)=\"empty3Click()\"><ion-icon name=\"add-circle-outline\"></ion-icon> 직접입력</div>\n      <div *ngFor=\"let item of res3?.rsMap\" class=\"flex-item\" [class.selected]=\"selectItem3 === item\" (click)=\"item3Click(item)\">\n        {{ item.risk_factor_name }}\n      </div>\n    </div>\n  </div>\n\n  <!-- 감소대책은 무조건 직접입력으로 바뀜 -->\n  <!-- <div class=\"flex-revers\">\n    <div class=\"flex-header\">\n      <div>감소대책</div>\n    </div>\n    <div class=\"flex-list\">\n      <div class=\"flex-item\">직접입력</div>\n      <div *ngFor=\"let item of res4?.rsMap\" class=\"flex-item\" [class.selected]=\"selectItem4 === item\" (click)=\"item4Click(item)\">\n        {{ item.risk_plan_name }}\n      </div>\n    </div>\n  </div> -->\n\n</div>\n\n<app-row>\n  <app-col></app-col>\n  <app-col size=\"auto\">\n    <app-button fill=\"translucent\">초기화</app-button>\n  </app-col>\n</app-row>\n\n<h4>추가 리스트</h4>\n<app-table>\n  <thead>\n    <tr>\n      <th style=\"width: 48px;\">No</th>\n      <th>공사명</th>\n      <th>단위작업</th>\n      <th>위험요인</th>\n      <th>감소대책</th>\n      <th style=\"width: 40px;\">삭제</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let item of riskList; let i = index; let c = count;\">\n    <tr>\n      <td style=\"width: 40px;\">{{ c - i }}</td>\n      <td>{{ item.risk_construction_name }}</td>\n      <td>{{ item.risk_unit_name }}</td>\n      <td>\n        <ng-container *ngIf=\"item.risk_factor_id; else tempFactorEmpty\">\n          {{ item.risk_factor_name }}\n        </ng-container>\n        <ng-template #tempFactorEmpty>\n          <!-- <app-input [(ngModel)]=\"item.risk_factor_name\"></app-input> -->\n          <ion-textarea [(ngModel)]=\"item.risk_factor_name\"></ion-textarea>\n        </ng-template>\n      </td>\n      <td>\n        <!-- <app-input [(ngModel)]=\"item.risk_plan_name\"></app-input> -->\n        <ion-textarea [(ngModel)]=\"item.risk_plan_name\"></ion-textarea>\n      </td>\n      <td style=\"width: 40px;\">\n        <app-button color=\"danger\" fill=\"translucent\" (click)=\"riskList.splice(i, 1)\">\n          <app-img name=\"delete\"></app-img>\n        </app-button>\n      </td>\n    </tr>\n  </tbody>\n</app-table>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"submit()\">적용</app-button>\n</app-button-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_work-plan_risk-assessment_risk-evaluation-popup_risk-evaluation-popup_page_ts.js.map