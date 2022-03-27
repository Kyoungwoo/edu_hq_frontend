"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var pipes_module_1 = require("../basic/pipes/pipes.module");
var basic_component_module_1 = require("../basic/component/basic.component.module");
var side_menu_user_component_1 = require("./side-menu/side-menu-user/side-menu-user.component");
var side_menu_admin_component_1 = require("./side-menu/side-menu-admin/side-menu-admin.component");
var header_admin_component_1 = require("./header/header-admin/header-admin.component");
var search_people_component_1 = require("./modal/search-people/search-people.component");
var search_company_component_1 = require("./modal/search-company/search-company.component");
var search_dangerous_area_component_1 = require("./modal/search-dangerous-area/search-dangerous-area.component");
var search_heavy_component_1 = require("./modal/search-heavy/search-heavy.component");
var search_scene_component_1 = require("./modal/search-scene/search-scene.component");
var search_tool_component_1 = require("./modal/search-tool/search-tool.component");
var search_construction_machinery_component_1 = require("./modal/search-construction-machinery/search-construction-machinery.component");
var search_education_component_1 = require("./modal/search-education/search-education.component");
var people_view_component_1 = require("./modal/people-view/people-view.component");
var people_delete_component_1 = require("./modal/people-delete/people-delete.component");
var search_area_component_1 = require("./modal/search-area/search-area.component");
var select_tool_component_1 = require("./select/select-tool/select-tool.component");
var select_heavy_component_1 = require("./select/select-heavy/select-heavy.component");
var select_education_component_1 = require("./select/select-education/select-education.component");
var select_company_component_1 = require("./select/select-company/select-company.component");
var select_scene_component_1 = require("./select/select-scene/select-scene.component");
var select_people_component_1 = require("./select/select-people/select-people.component");
var select_business_component_1 = require("./select/select-business/select-business.component");
var select_safetymanager_component_1 = require("./select/select-safetymanager/select-safetymanager.component");
var select_construction_component_1 = require("./select/select-construction/select-construction.component");
var select_occupation_component_1 = require("./select/select-occupation/select-occupation.component");
var select_position_component_1 = require("./select/select-position/select-position.component");
var select_organization_component_1 = require("./select/select-organization/select-organization.component");
var select_country_component_1 = require("./select/select-country/select-country.component");
var detail_search_component_1 = require("./modal/detail-search/detail-search.component");
var select_contractor_component_1 = require("./select/select-contractor/select-contractor.component");
var search_contractor_component_1 = require("./modal/search-contractor/search-contractor.component");
var select_construction_machinery_component_1 = require("./select/select-construction-machinery/select-construction-machinery.component");
var search_serial_number_component_1 = require("./modal/search-serial-number/search-serial-number.component");
var select_serial_number_component_1 = require("./select/select-serial-number/select-serial-number.component");
var select_dangerous_area_component_1 = require("./select/select-dangerous-area/select-dangerous-area.component");
var confirm_setting_popup_component_1 = require("./confirm/confirm-setting-popup/confirm-setting-popup.component");
var confirm_process_popup_component_1 = require("./confirm/confirm-process-popup/confirm-process-popup.component");
var confirm_popup_component_1 = require("./confirm/confirm-popup/confirm-popup.component");
var search_attendance_component_1 = require("./modal/search-attendance/search-attendance.component");
var select_attendance_component_1 = require("./select/select-attendance/select-attendance.component");
var monitor_component_1 = require("./header/monitor/monitor.component");
var approval_popup_component_1 = require("../page/member-management/member-approval-wait/approval-popup/approval-popup.component");
var security_password_component_1 = require("../page/member-management/member-approval-wait/security-password/security-password.component");
var mileage_popup_component_1 = require("../page/member-management/member-management/mileage-popup/mileage-popup.component");
var supervision_search_component_1 = require("./modal/supervision-search/supervision-search.component");
var project_area_set_component_1 = require("./modal/project-area-set/project-area-set.component");
var select_supervision_component_1 = require("./select/select-supervision/select-supervision.component");
var select_manual_component_1 = require("./select/select-manual/select-manual.component");
var select_regional_component_1 = require("./select/select-regional/select-regional.component");
var select_project_contractor_component_1 = require("./select/select-project-contractor/select-project-contractor.component");
var search_project_contractor_component_1 = require("./modal/search-project-contractor/search-project-contractor.component");
var input_safejob_component_1 = require("./input/input-safejob/input-safejob.component");
var input_certify_component_1 = require("./input/input-certify/input-certify.component");
var select_approval_module_component_1 = require("./select/select-approval-module/select-approval-module.component");
var approval_component_1 = require("./confirm/approval/approval.component");
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        core_1.NgModule({
            declarations: [
                //confirm approval
                approval_component_1.ApprovalComponent,
                header_admin_component_1.HeaderAdminComponent,
                side_menu_user_component_1.SideMenuUserComponent,
                side_menu_admin_component_1.SideMenuAdminComponent,
                //input
                input_certify_component_1.InputCertifyComponent,
                input_safejob_component_1.InputSafejobComponent,
                // search
                search_people_component_1.SearchPeopleComponent,
                search_company_component_1.SearchCompanyComponent,
                search_dangerous_area_component_1.SearchDangerousAreaComponent,
                search_heavy_component_1.SearchHeavyComponent,
                search_scene_component_1.SearchSceneComponent,
                search_tool_component_1.SearchToolComponent,
                search_construction_machinery_component_1.SearchConstructionMachineryComponent,
                search_education_component_1.SearchEducationComponent,
                people_view_component_1.PeopleViewComponent,
                people_delete_component_1.PeopleDeleteComponent,
                search_area_component_1.SearchAreaComponent,
                search_project_contractor_component_1.SearchProjectContractorComponent,
                // select
                select_approval_module_component_1.SelectApprovalModuleComponent,
                select_country_component_1.SelectCountryComponent,
                select_tool_component_1.SelectToolComponent,
                select_education_component_1.SelectEducationComponent,
                select_heavy_component_1.SelectHeavyComponent,
                select_manual_component_1.SelectManualComponent,
                select_company_component_1.SelectCompanyComponent,
                select_scene_component_1.SelectSceneComponent,
                select_people_component_1.SelectPeopleComponent,
                select_business_component_1.SelectBusinessComponent,
                select_safetymanager_component_1.SelectSafetymanagerComponent,
                select_construction_component_1.SelectConstructionComponent,
                select_occupation_component_1.SelectOccupationComponent,
                select_position_component_1.SelectPositionComponent,
                select_regional_component_1.SelectRegionalComponent,
                select_organization_component_1.SelectOrganizationComponent,
                select_occupation_component_1.SelectOccupationComponent,
                detail_search_component_1.DetailSearchComponent,
                select_contractor_component_1.SelectContractorComponent,
                search_contractor_component_1.SearchContractorComponent,
                select_construction_machinery_component_1.SelectConstructionMachineryComponent,
                search_serial_number_component_1.SearchSerialNumberComponent,
                select_serial_number_component_1.SelectSerialNumberComponent,
                select_dangerous_area_component_1.SelectDangerousAreaComponent,
                confirm_setting_popup_component_1.ConfirmSettingPopupComponent,
                confirm_process_popup_component_1.ConfirmProcessPopupComponent,
                confirm_popup_component_1.ConfirmPopupComponent,
                search_attendance_component_1.SearchAttendanceComponent,
                select_attendance_component_1.SelectAttendanceComponent,
                monitor_component_1.MonitorComponent,
                approval_popup_component_1.ApprovalPopupComponent,
                security_password_component_1.SecurityPasswordComponent,
                mileage_popup_component_1.MileagePopupComponent,
                supervision_search_component_1.SupervisionSearchComponent,
                project_area_set_component_1.ProjectAreaSetComponent,
                select_supervision_component_1.SelectSupervisionComponent,
                select_project_contractor_component_1.SelectProjectContractorComponent
            ],
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                forms_1.FormsModule,
                pipes_module_1.PipesModule,
                router_1.RouterModule,
                basic_component_module_1.BasicComponentModule
            ],
            exports: [
                //confirm approval
                approval_component_1.ApprovalComponent,
                basic_component_module_1.BasicComponentModule,
                header_admin_component_1.HeaderAdminComponent,
                //input
                input_certify_component_1.InputCertifyComponent,
                input_safejob_component_1.InputSafejobComponent,
                // search
                search_people_component_1.SearchPeopleComponent,
                search_company_component_1.SearchCompanyComponent,
                search_dangerous_area_component_1.SearchDangerousAreaComponent,
                search_heavy_component_1.SearchHeavyComponent,
                search_scene_component_1.SearchSceneComponent,
                search_tool_component_1.SearchToolComponent,
                search_construction_machinery_component_1.SearchConstructionMachineryComponent,
                search_education_component_1.SearchEducationComponent,
                // select
                people_view_component_1.PeopleViewComponent,
                people_delete_component_1.PeopleDeleteComponent,
                select_approval_module_component_1.SelectApprovalModuleComponent,
                search_area_component_1.SearchAreaComponent,
                select_tool_component_1.SelectToolComponent,
                select_education_component_1.SelectEducationComponent,
                select_heavy_component_1.SelectHeavyComponent,
                select_manual_component_1.SelectManualComponent,
                select_company_component_1.SelectCompanyComponent,
                select_scene_component_1.SelectSceneComponent,
                select_people_component_1.SelectPeopleComponent,
                select_regional_component_1.SelectRegionalComponent,
                select_business_component_1.SelectBusinessComponent,
                select_safetymanager_component_1.SelectSafetymanagerComponent,
                select_construction_component_1.SelectConstructionComponent,
                select_occupation_component_1.SelectOccupationComponent,
                select_position_component_1.SelectPositionComponent,
                select_organization_component_1.SelectOrganizationComponent,
                select_country_component_1.SelectCountryComponent,
                select_occupation_component_1.SelectOccupationComponent,
                detail_search_component_1.DetailSearchComponent,
                select_contractor_component_1.SelectContractorComponent,
                search_contractor_component_1.SearchContractorComponent,
                select_construction_machinery_component_1.SelectConstructionMachineryComponent,
                side_menu_admin_component_1.SideMenuAdminComponent,
                search_serial_number_component_1.SearchSerialNumberComponent,
                select_serial_number_component_1.SelectSerialNumberComponent,
                select_dangerous_area_component_1.SelectDangerousAreaComponent,
                confirm_setting_popup_component_1.ConfirmSettingPopupComponent,
                confirm_process_popup_component_1.ConfirmProcessPopupComponent,
                confirm_popup_component_1.ConfirmPopupComponent,
                search_attendance_component_1.SearchAttendanceComponent,
                select_attendance_component_1.SelectAttendanceComponent,
                monitor_component_1.MonitorComponent,
                approval_popup_component_1.ApprovalPopupComponent,
                security_password_component_1.SecurityPasswordComponent,
                mileage_popup_component_1.MileagePopupComponent,
                supervision_search_component_1.SupervisionSearchComponent,
                project_area_set_component_1.ProjectAreaSetComponent,
                select_supervision_component_1.SelectSupervisionComponent,
                select_project_contractor_component_1.SelectProjectContractorComponent,
                search_project_contractor_component_1.SearchProjectContractorComponent
            ],
            providers: [
                select_company_component_1.SelectCompanyComponent
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());
exports.ComponentModule = ComponentModule;
