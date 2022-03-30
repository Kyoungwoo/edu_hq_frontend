"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmProgressDetailSearchPage = void 0;
var core_1 = require("@angular/core");
var ConfirmProgressDetailSearchPage = /** @class */ (function () {
    function ConfirmProgressDetailSearchPage(_modal, file) {
        this._modal = _modal;
        this.file = file;
        this.form = {
            project_id: null,
            master_company_id: null,
            company_id: null,
            start_date: null,
            end_date: null,
            approval_cnt_answer: null,
            search_text: null,
            limit_no: 0 // 20개씩 가져옵니다
        };
        this.temptForm = {
            project_id: null,
            master_company_id: null,
            company_id: null,
            start_date: null,
            end_date: null,
            approval_cnt_answer: null,
            search_text: null,
            limit_no: 0 // 20개씩 가져옵니다
        };
    }
    ConfirmProgressDetailSearchPage.prototype.ngOnInit = function () {
        this.temptForm = this.file.clone(this.form);
    };
    ConfirmProgressDetailSearchPage.prototype.reset = function () {
        this.temptForm = this.file.clone(this.form);
    };
    ConfirmProgressDetailSearchPage.prototype.search = function () {
        var form = this.file.clone(this.temptForm);
        this._modal.dismiss(form);
    };
    __decorate([
        core_1.Input()
    ], ConfirmProgressDetailSearchPage.prototype, "form");
    ConfirmProgressDetailSearchPage = __decorate([
        core_1.Component({
            selector: 'app-confirm-progress-detail-search',
            templateUrl: './confirm-progress-detail-search.page.html',
            styleUrls: ['./confirm-progress-detail-search.page.scss']
        })
    ], ConfirmProgressDetailSearchPage);
    return ConfirmProgressDetailSearchPage;
}());
exports.ConfirmProgressDetailSearchPage = ConfirmProgressDetailSearchPage;
