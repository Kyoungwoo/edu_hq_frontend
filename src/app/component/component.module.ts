import { ChipSafetyStateComponent } from './confirm/chip-safety-state/chip-safety-state.component';
import { SettingModifyComponent } from './modal/setting-modify/setting-modify.component';
import { SelectRiskAreaComponent } from './select/select-risk-area/select-risk-area.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../basic/pipes/pipes.module';
import { BasicComponentModule } from '../basic/component/basic.component.module';

import { SideMenuUserComponent } from './side-menu/side-menu-user/side-menu-user.component';
import { SideMenuAdminComponent } from './side-menu/side-menu-admin/side-menu-admin.component';
import { HeaderAdminComponent } from './header/header-admin/header-admin.component';
import { SearchPeopleComponent } from './modal/search-people/search-people.component';
import { SearchCompanyComponent } from './modal/search-company/search-company.component';
import { SearchDangerousAreaComponent } from './modal/search-dangerous-area/search-dangerous-area.component';
import { SearchHeavyComponent } from './modal/search-heavy/search-heavy.component';
import { SearchSceneComponent } from './modal/search-scene/search-scene.component';
import { SearchToolComponent } from './modal/search-tool/search-tool.component';
import { SearchConstructionMachineryComponent } from './modal/search-construction-machinery/search-construction-machinery.component';
import { SearchEducationComponent } from './modal/search-education/search-education.component';
import { PeopleViewComponent } from './modal/people-view/people-view.component';
import { PeopleDeleteComponent } from './modal/people-delete/people-delete.component';
import { SearchAreaComponent } from './modal/search-area/search-area.component';
import { SelectToolComponent } from './select/select-tool/select-tool.component';
import { SelectHeavyComponent } from './select/select-heavy/select-heavy.component';
import { SelectEducationComponent } from './select/select-education/select-education.component';
import { SelectCompanyComponent } from './select/select-company/select-company.component';
import { SelectSceneComponent } from './select/select-scene/select-scene.component';
import { SelectPeopleComponent } from './select/select-people/select-people.component';
import { SelectBusinessComponent } from './select/select-business/select-business.component';
import { SelectSafetymanagerComponent } from './select/select-safetymanager/select-safetymanager.component';
import { SelectConstructionComponent } from './select/select-construction/select-construction.component';
import { SelectOccupationComponent } from './select/select-occupation/select-occupation.component';
import { SelectPositionComponent } from './select/select-position/select-position.component';
import { SelectOrganizationComponent } from './select/select-organization/select-organization.component';
import { SelectCountryComponent } from './select/select-country/select-country.component';
import { SelectContractorComponent } from './select/select-contractor/select-contractor.component';
import { SearchContractorComponent } from './modal/search-contractor/search-contractor.component';
import { SelectConstructionMachineryComponent } from './select/select-construction-machinery/select-construction-machinery.component';
import { SearchSerialNumberComponent } from './modal/search-serial-number/search-serial-number.component';
import { SelectSerialNumberComponent } from './select/select-serial-number/select-serial-number.component';
import { SelectDangerousAreaComponent } from './select/select-dangerous-area/select-dangerous-area.component';
import { ConfirmSettingPopupComponent } from './confirm/confirm-setting-popup/confirm-setting-popup.component';
import { ConfirmProcessPopupComponent } from './confirm/confirm-process-popup/confirm-process-popup.component';
import { SearchAttendanceComponent } from './modal/search-attendance/search-attendance.component';
import { SelectAttendanceComponent } from './select/select-attendance/select-attendance.component';
import { MonitorComponent } from './header/monitor/monitor.component';
import { ApprovalPopupComponent } from '../page/member-management/member-approval-wait/approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../page/member-management/member-approval-wait/security-password/security-password.component';
import { MileagePopupComponent } from '../page/member-management/member-management/mileage-popup/mileage-popup.component';
import { SupervisionSearchComponent } from './modal/supervision-search/supervision-search.component';
import { ProjectAreaSetComponent } from './modal/project-area-set/project-area-set.component';
import { SelectSupervisionComponent } from './select/select-supervision/select-supervision.component';
import { SelectManualComponent } from './select/select-manual/select-manual.component';
import { SelectRegionalComponent } from './select/select-regional/select-regional.component';
import { SelectProjectContractorComponent } from './select/select-project-contractor/select-project-contractor.component';
import { SearchProjectContractorComponent } from './modal/search-project-contractor/search-project-contractor.component';
import { InputSafejobComponent } from './input/input-safejob/input-safejob.component';
import { InputCertifyComponent } from './input/input-certify/input-certify.component';
import { SelectApprovalModuleComponent } from './select/select-approval-module/select-approval-module.component';
import { ApprovalComponent } from './confirm/approval/approval.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { SelectApprovalTypeComponent } from './select/select-approval-type/select-approval-type.component';

import { SearchPeopleAllComponent } from './modal/search-people-all/search-people-all.component';
import { SelectPeopleAllComponent } from './select/select-people-all/select-people-all.component';
import { SearchContractorCompanyComponent } from './modal/search-contractor-company/search-contractor-company.component';
import { SelectContractorCompanyComponent } from './select/select-contractor-company/select-contractor-company.component';
import { ChipApprovalAnswerComponent } from './confirm/chip-approval-answer/chip-approval-answer.component';
import { ApprovalCommentComponent } from './confirm/approval-comment/approval-comment.component';
import { ApprovalTemplateComponent } from './confirm/approval-template/approval-template.component';
import { ApprovalDocumentComponent } from './confirm/approval-document/approval-document.component';
import { ApprovalZoomComponent } from './confirm/approval-zoom/approval-zoom.component';
import { ApprovalPeopleComponent } from './confirm/approval-people/approval-people.component';

import { SelectAreaRiskComponent } from './select/select-area-risk/select-area-risk.component';
import { SelectAreaRiskTypeComponent } from './select/select-area-risk-type/select-area-risk-type.component';
import { SelectDeviceIdComponent } from './select/select-device-id/select-device-id.component';
import { SearchDeviceIdComponent } from './modal/search-device-id/search-device-id.component';
import { DangerAreaUserListPage } from '../page/danger-management/danger-area-log/danger-area-user-list/danger-area-user-list.page';
import { DangerAreaUserRegistrationPage } from '../page/danger-management/danger-area-log/danger-area-user-registration/danger-area-user-registration.page';
//import { TodayDangerAreaStatusListPage } from '../page/danger-management/danger-area-log/today-danger-area-log-list/today-danger-area-status-list.page';
//import { TodayDangerAreaStatusEditPage } from '../page/danger-management/danger-area-log/today-danger-area-status-edit/today-danger-area-status-edit.page';

@NgModule({
  declarations: [
    // approval & confirm
    ApprovalComponent,
    ApprovalCommentComponent,
    ApprovalDocumentComponent,
    ApprovalPeopleComponent,
    ApprovalTemplateComponent,
    ApprovalZoomComponent,
    ChipApprovalAnswerComponent,
    ConfirmSettingPopupComponent,
    ConfirmProcessPopupComponent,
    ChipSafetyStateComponent,

    HeaderAdminComponent,
    SideMenuUserComponent,
    SideMenuAdminComponent,
    // input
    InputCertifyComponent,
    InputSafejobComponent,
    // search
    SearchPeopleComponent,
    SearchCompanyComponent,
    SearchDangerousAreaComponent,
    SearchHeavyComponent,
    SearchSceneComponent,
    SearchToolComponent,
    SearchConstructionMachineryComponent,
    SearchEducationComponent,
    PeopleViewComponent,
    PeopleDeleteComponent,
    SearchAreaComponent,
    SearchProjectContractorComponent,
    SearchContractorCompanyComponent,
    SearchPeopleAllComponent,
    // select
    SelectApprovalModuleComponent,
    SelectApprovalTypeComponent,
    SelectCountryComponent,
    SelectToolComponent,
    SelectEducationComponent,
    SelectHeavyComponent,
    SelectManualComponent,
    SelectCompanyComponent,
    SelectSceneComponent,
    SelectPeopleComponent,
    SelectBusinessComponent,
    SelectSafetymanagerComponent,
    SelectConstructionComponent,
    SelectOccupationComponent,
    SelectPositionComponent,
    SelectRegionalComponent,
    SelectOrganizationComponent,
    SelectOccupationComponent,
    SelectContractorComponent,
    SearchContractorComponent,
    SelectConstructionMachineryComponent,
    SearchSerialNumberComponent,
    SelectSerialNumberComponent,
    SelectDangerousAreaComponent,
    SearchAttendanceComponent,
    SelectAttendanceComponent,
    MonitorComponent,
    ApprovalPopupComponent,
    SecurityPasswordComponent,
    MileagePopupComponent,
    SupervisionSearchComponent,
    ProjectAreaSetComponent,
    SelectSupervisionComponent,
    SelectProjectContractorComponent,
    SelectContractorCompanyComponent,
    SelectPeopleAllComponent,
    SelectRiskAreaComponent,
    SettingModifyComponent,

    //iot device related
    SelectAreaRiskComponent,
    SelectAreaRiskTypeComponent,
    SelectDeviceIdComponent,
    SearchDeviceIdComponent,

    DangerAreaUserListPage,
    DangerAreaUserRegistrationPage,
    //TodayDangerAreaStatusListPage,
    //TodayDangerAreaStatusEditPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    BasicComponentModule,
    SortablejsModule // 결재 때문에 필요함
  ],
  exports: [
    // approval & confirm 
    ApprovalComponent,
    ApprovalCommentComponent,
    ApprovalDocumentComponent,
    ApprovalPeopleComponent,
    ApprovalTemplateComponent,
    ApprovalZoomComponent,
    ChipApprovalAnswerComponent,
    ConfirmSettingPopupComponent,
    ConfirmProcessPopupComponent,
    ChipSafetyStateComponent,

    BasicComponentModule,
    HeaderAdminComponent,
    // input
    InputCertifyComponent,
    InputSafejobComponent,
    // search
    SearchPeopleComponent,
    SearchCompanyComponent,
    SearchDangerousAreaComponent,
    SearchHeavyComponent,
    SearchSceneComponent,
    SearchToolComponent,
    SearchConstructionMachineryComponent,
    SearchEducationComponent,
    SearchContractorCompanyComponent,
    SearchPeopleAllComponent,
    // select
    SelectApprovalModuleComponent,
    SelectApprovalTypeComponent,
    PeopleViewComponent,
    PeopleDeleteComponent,
    SearchAreaComponent,
    SelectToolComponent,
    SelectEducationComponent,
    SelectHeavyComponent,
    SelectManualComponent,
    SelectCompanyComponent,
    SelectSceneComponent,
    SelectPeopleComponent,
    SelectRegionalComponent,
    SelectBusinessComponent,
    SelectSafetymanagerComponent,
    SelectConstructionComponent,
    SelectOccupationComponent,
    SelectPositionComponent,
    SelectOrganizationComponent,
    SelectCountryComponent,
    SelectOccupationComponent,
    SelectContractorComponent,
    SearchContractorComponent,
    SelectConstructionMachineryComponent,
    SideMenuAdminComponent,
    SearchSerialNumberComponent,
    SelectSerialNumberComponent,
    SelectDangerousAreaComponent,
    SearchAttendanceComponent,
    SelectAttendanceComponent,
    MonitorComponent,
    ApprovalPopupComponent,
    SecurityPasswordComponent,
    MileagePopupComponent,
    SupervisionSearchComponent,
    ProjectAreaSetComponent,
    SelectSupervisionComponent,
    SelectProjectContractorComponent,
    SearchProjectContractorComponent,
    SelectContractorCompanyComponent,
    SelectPeopleAllComponent,
    SelectRiskAreaComponent,

    SettingModifyComponent,

    //iot device related
    SelectAreaRiskComponent,
    SelectAreaRiskTypeComponent,
    SelectDeviceIdComponent,
    SearchDeviceIdComponent,

    DangerAreaUserListPage,
    DangerAreaUserRegistrationPage,
    //TodayDangerAreaStatusListPage,
    //TodayDangerAreaStatusEditPage,
  ],
  providers:[
    SelectCompanyComponent
  ]
})
export class ComponentModule { }
