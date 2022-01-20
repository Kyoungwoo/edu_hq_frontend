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
import { QrScannerComponent } from '../basic/component/dialog/qr-scanner/qr-scanner.component';
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
import { DetailSearchComponent } from './modal/detail-search/detail-search.component';
import { SelectContractorComponent } from './select/select-contractor/select-contractor.component';
import { SearchContractorComponent } from './modal/search-contractor/search-contractor.component';
import { SelectConstructionMachineryComponent } from './select/select-construction-machinery/select-construction-machinery.component';
import { SearchSerialNumberComponent } from './modal/search-serial-number/search-serial-number.component';
import { SelectSerialNumberComponent } from './select/select-serial-number/select-serial-number.component';
import { SelectDangerousAreaComponent } from './select/select-dangerous-area/select-dangerous-area.component';
import { ConfirmSettingPopupComponent } from './confirm/confirm-setting-popup/confirm-setting-popup.component';
import { ConfirmProcessPopupComponent } from './confirm/confirm-process-popup/confirm-process-popup.component';
import { ConfirmPopupComponent } from './confirm/confirm-popup/confirm-popup.component';
import { SearchAttendanceComponent } from './modal/search-attendance/search-attendance.component';
import { SelectAttendanceComponent } from './select/select-attendance/select-attendance.component';
import { MonitorComponent } from './header/monitor/monitor.component';
import { ApprovalPopupComponent } from '../page/member-management/member-approval-wait/approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../page/member-management/member-approval-wait/security-password/security-password.component';
import { MileagePopupComponent } from '../page/member-management/member-management/mileage-popup/mileage-popup.component';
import { SupervisionSearchComponent } from './modal/supervision-search/supervision-search.component';
import { ProjectAreaSetComponent } from './modal/project-area-set/project-area-set.component';




@NgModule({
  declarations: [
    HeaderAdminComponent,
    SideMenuUserComponent,
    SideMenuAdminComponent,
    QrScannerComponent,
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
    SelectToolComponent,
    SelectHeavyComponent,
    SelectEducationComponent,
    SelectCompanyComponent,
    SelectSceneComponent,
    SelectPeopleComponent,
    SelectBusinessComponent,
    SelectSafetymanagerComponent,
    SelectConstructionComponent,
    SelectOccupationComponent,
    SelectPositionComponent,
    SelectOrganizationComponent,
    SelectCountryComponent,
    SelectOccupationComponent,
    DetailSearchComponent,
    SelectContractorComponent,
    SearchContractorComponent,
    SelectConstructionMachineryComponent,
    SearchSerialNumberComponent,
    SelectSerialNumberComponent,
    SelectDangerousAreaComponent,
    ConfirmSettingPopupComponent,
    ConfirmProcessPopupComponent,
    ConfirmPopupComponent,
    SearchAttendanceComponent,
    SelectAttendanceComponent,
    MonitorComponent,
    ApprovalPopupComponent,
    SecurityPasswordComponent,
    MileagePopupComponent,
    SupervisionSearchComponent,
    ProjectAreaSetComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    BasicComponentModule
  ],
  exports: [
    BasicComponentModule,
    HeaderAdminComponent,
    QrScannerComponent,
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
    SelectToolComponent,
    SelectHeavyComponent,
    SelectEducationComponent,
    SelectCompanyComponent,
    SelectSceneComponent,
    SelectPeopleComponent,
    SelectBusinessComponent,
    SelectSafetymanagerComponent,
    SelectConstructionComponent,
    SelectOccupationComponent,
    SelectPositionComponent,
    SelectOrganizationComponent,
    SelectCountryComponent,
    SelectOccupationComponent,
    DetailSearchComponent,
    SelectContractorComponent,
    SearchContractorComponent,
    SelectConstructionMachineryComponent,
    SideMenuAdminComponent,
    SearchSerialNumberComponent,
    SelectSerialNumberComponent,
    SelectDangerousAreaComponent,
    ConfirmSettingPopupComponent,
    ConfirmProcessPopupComponent,
    ConfirmPopupComponent,
    SearchAttendanceComponent,
    SelectAttendanceComponent,
    MonitorComponent,
    ApprovalPopupComponent,
    SecurityPasswordComponent,
    MileagePopupComponent,
    SupervisionSearchComponent,
    ProjectAreaSetComponent
  ]
})
export class ComponentModule { }
