"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SafetyEducationResultListPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var safety_education_result_list_routing_module_1 = require("./safety-education-result-list-routing.module");
var safety_education_result_list_page_1 = require("./safety-education-result-list.page");
var component_module_1 = require("src/app/component/component.module");
var safety_education_result_detail_search_module_1 = require("../safety-education-result-detail-search/safety-education-result-detail-search.module");
var new_write_target_module_1 = require("../new-write-target/new-write-target.module");
var education_confirm_pending_list_module_1 = require("../education-confirm-pending-list/education-confirm-pending-list.module");
var SafetyEducationResultListPageModule = /** @class */ (function () {
    function SafetyEducationResultListPageModule() {
    }
    SafetyEducationResultListPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                safety_education_result_list_routing_module_1.SafetyEducationResultListPageRoutingModule,
                safety_education_result_detail_search_module_1.SafetyEducationResultDetailSearchPageModule,
                new_write_target_module_1.NewWriteTargetPageModule,
                education_confirm_pending_list_module_1.EducationConfirmPendingListPageModule
            ],
            declarations: [safety_education_result_list_page_1.SafetyEducationResultListPage]
        })
    ], SafetyEducationResultListPageModule);
    return SafetyEducationResultListPageModule;
}());
exports.SafetyEducationResultListPageModule = SafetyEducationResultListPageModule;
