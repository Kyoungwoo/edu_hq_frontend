"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RiskDetailSearchPage = void 0;
var core_1 = require("@angular/core");
var RiskDetailSearchPage = /** @class */ (function () {
    function RiskDetailSearchPage(_modal, file) {
        this._modal = _modal;
        this.file = file;
        this.form = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '수시',
            approval_cnt_answer: '전체',
            risk_asment_start_date: '',
            risk_asment_end_date: '',
            search_text: '',
            limit_no: 0
        };
        this.temptForm = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '수시',
            approval_cnt_answer: '전체',
            risk_asment_start_date: '',
            risk_asment_end_date: '',
            search_text: '',
            limit_no: 0
        };
    }
    RiskDetailSearchPage.prototype.ngOnInit = function () {
        this.temptForm = this.file.clone(this.form);
    };
    RiskDetailSearchPage.prototype.projectChange = function (ev) {
        this.temptForm.project_name = ev.project_name;
    };
    RiskDetailSearchPage.prototype.reset = function () {
        this.temptForm = this.file.clone(this.form);
    };
    RiskDetailSearchPage.prototype.search = function () {
        var form = this.file.clone(this.temptForm);
        this._modal.dismiss(form);
    };
    __decorate([
        core_1.Input()
    ], RiskDetailSearchPage.prototype, "form");
    RiskDetailSearchPage = __decorate([
        core_1.Component({
            selector: 'app-risk-detail-search',
            templateUrl: './risk-detail-search.page.html',
            styleUrls: ['./risk-detail-search.page.scss']
        })
    ], RiskDetailSearchPage);
    return RiskDetailSearchPage;
}());
exports.RiskDetailSearchPage = RiskDetailSearchPage;
