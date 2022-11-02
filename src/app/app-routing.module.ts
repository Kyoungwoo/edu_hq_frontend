import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'main-admin',
    loadChildren: () => import('./page/main/admin/main-admin/main-admin.module').then(m => m.MainAdminPageModule)
  },
  {
    path: 'district-management',
    loadChildren: () => import('./page/district-management/district-management.module').then(m => m.DistrictManagementPageModule)
  },  
  {
    path: 'main-user',
    loadChildren: () => import('./page/main/user/main-user/main-user.module').then(m => m.MainUserPageModule)
  },
  {
    path: 'sign-up-type',
    loadChildren: () => import('./page/sign-up/sign-up-type/sign-up-type.module').then(m => m.SignUpTypePageModule)
  },
  {
    path: 'sign-up-company',
    loadChildren: () => import('./page/sign-up/sign-up-company/sign-up-company.module').then(m => m.SignUpCompanyPageModule)
  },
  {
    path: 'sign-up-worker',
    loadChildren: () => import('./page/sign-up/sign-up-worker/sign-up-worker.module').then(m => m.SignUpWorkerPageModule)
  },
  {
    path: 'sign-up-terms',
    loadChildren: () => import('./page/sign-up/sign-up-terms/sign-up-terms.module').then(m => m.SignUpTermsPageModule)
  },
  {
    path: 'sign-up-done',
    loadChildren: () => import('./page/sign-up/sign-up-done/sign-up-done.module').then(m => m.SignUpDonePageModule)
  },
  {
    path: 'monitor',
    loadChildren: () => import('./page/monitor/monitor.module').then(m => m.MonitorPageModule)
  },
  {
    path: 'monitor-warning',
    loadChildren: () => import('./page/monitor/monitor-warning/monitor-warning.module').then(m => m.MonitorWarningPageModule)
  },
  {
    path: 'manual-list',
    loadChildren: () => import('./page/customer-support/user-manual/manual-list/manual-list.module').then(m => m.ManualListPageModule)
  },
  {
    path: 'msds-list',
    loadChildren: () => import('./page/notice-board/msds/msds-list/msds-list.module').then(m => m.MsdsListPageModule)
  },
  {
    path: 'msds-edit',
    loadChildren: () => import('./page/notice-board/msds/msds-edit/msds-edit.module').then(m => m.MsdsEditPageModule)
  },
  {
    path: 'minutes-list',
    loadChildren: () => import('./page/notice-board/minutes/minutes-list/minutes-list.module').then(m => m.MinutesListPageModule)
  },
  {
    path: 'notice-list',
    loadChildren: () => import('./page/notice-board/notice/notice-list/notice-list.module').then(m => m.NoticeListPageModule)
  },
  {
    path: 'notice-edit',
    loadChildren: () => import('./page/notice-board/notice/notice-edit/notice-edit.module').then(m => m.NoticeEditPageModule)
  },
  {
    path: 'manual-detail-search',
    loadChildren: () => import('./page/customer-support/user-manual/manual-detail-search/manual-detail-search.module').then(m => m.ManualDetailSearchPageModule)
  },
  {
    path: 'manual-edit',
    loadChildren: () => import('./page/customer-support/user-manual/manual-edit/manual-edit.module').then(m => m.ManualEditPageModule)
  },
  {
    path: 'use-terms',
    loadChildren: () => import('./page/customer-support/terms/use-terms/use-terms.module').then(m => m.UseTermsPageModule)
  },
  {
    path: 'sign-up-health',
    loadChildren: () => import('./page/sign-up/sign-up-health/sign-up-health.module').then(m => m.SignUpHealthPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./page/customer-support/terms/privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'heavy-equip-list',
    loadChildren: () => import('./page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.module').then(m => m.HeavyEquipListPageModule)
  },
  {
    path: 'scene-list',
    loadChildren: () => import('./page/project-management/scene-management/scene-list/scene-list.module').then(m => m.SceneListPageModule)
  },
  {
    path: 'scene-edit',
    loadChildren: () => import('./page/project-management/scene-management/scene-edit/scene-edit.module').then(m => m.SceneEditPageModule)
  },
  // {
  //   path: 'member-standard-set',
  //   loadChildren: () => import('./page/project-management/scene-management/member-standard-set/member-standard-set.module').then(m => m.MemberStandardSetPageModule)
  // },
  {
    path: 'member-standard-set',
    loadChildren: () => import('./page/member-management/member-standard-set/member-standard-set.module').then(m => m.MemberStandardSetPageModule)
  },  
  {
    path: 'area-standard-set',
    loadChildren: () => import('./page/project-management/scene-management/area-standard-set/area-standard-set.module').then(m => m.AreaStandardSetPageModule)
  },
  {
    path: 'work-standard-set',
    loadChildren: () => import('./page/project-management/scene-management/work-standard-set/work-standard-set.module').then(m => m.WorkStandardSetPageModule)
  },
  {
    path: 'contractor-list',
    loadChildren: () => import('./page/project-management/contractor-management/contractor-list/contractor-list.module').then(m => m.ContractorListPageModule)
  },
  {
    path: 'contractor-edit',
    loadChildren: () => import('./page/project-management/contractor-management/contractor-edit/contractor-edit.module').then(m => m.ContractorEditPageModule)
  },
  {
    path: 'partner-list',
    loadChildren: () => import('./page/project-management/partner-management/partner-list/partner-list.module').then(m => m.PartnerListPageModule)
  },
  {
    path: 'partner-edit',
    loadChildren: () => import('./page/project-management/partner-management/partner-edit/partner-edit.module').then(m => m.PartnerEditPageModule)
  },
  {
    path: 'heavy-equip-edit',
    loadChildren: () => import('./page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.module').then(m => m.HeavyEquipEditPageModule)
  },
  {
    path: 'serial-no-list',
    loadChildren: () => import('./page/equipment-management/smart-equipment/serial-no-list/serial-no-list.module').then(m => m.SerialNoListPageModule)
  },
  {
    path: 'each-device-list',
    loadChildren: () => import('./page/equipment-management/smart-equipment/each-device-list/each-device-list.module').then(m => m.EachDeviceListPageModule)
  },
  {
    path: 'smart-detail-search',
    loadChildren: () => import('./page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.module').then(m => m.SmartDetailSearchPageModule)
  },
  {
    path: 'each-device-add',
    loadChildren: () => import('./page/equipment-management/smart-equipment/each-device-add/each-device-add.module').then(m => m.EachDeviceAddPageModule)
  },
  {
    path: 'heavy-device-list',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.module').then(m => m.HeavyDeviceListPageModule)
  },
  {
    path: 'heavy-device-add',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-device-add/heavy-device-add.module').then(m => m.HeavyDeviceAddPageModule)
  },
  {
    path: 'system-standard-set',
    loadChildren: () => import('./page/project-management/scene-management/system-standard-set/system-standard-set.module').then(m => m.SystemStandardSetPageModule)
  },
  {
    path: 'my-status-list',
    loadChildren: () => import('./page/today-work/my-status-situation/my-status-list/my-status-list.module').then( m => m.MyStatusListPageModule)
  },
  {
    path: 'my-status-edit',
    loadChildren: () => import('./page/today-work/my-status-situation/my-status-edit/my-status-edit.module').then( m => m.MyStatusEditPageModule)
  },
  {
    path: 'worker-status-list',
    loadChildren: () => import('./page/today-work/my-status-situation/worker-status-list/worker-status-list.module').then( m => m.WorkerStatusListPageModule)
  },
  {
    path: 'notice-open-range',
    loadChildren: () => import('./page/notice-board/notice/notice-open-range/notice-open-range.module').then( m => m.NoticeOpenRangePageModule)
  },
  {
    path: 'heavy-device-add',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-device-add/heavy-device-add.module').then( m => m.HeavyDeviceAddPageModule)
  },
  {
    path: 'system-standard-set',
    loadChildren: () => import('./page/project-management/scene-management/system-standard-set/system-standard-set.module').then( m => m.SystemStandardSetPageModule)
  },
  {
    path: 'danger-area-list',
    loadChildren: () => import('./page/equipment-management/smart-equipment/danger-area-list/danger-area-list.module').then( m => m.DangerAreaListPageModule)
  },
  {
    path: 'danger-area-add',
    loadChildren: () => import('./page/equipment-management/smart-equipment/danger-area-add/danger-area-add.module').then( m => m.DangerAreaAddPageModule)
  },
  {
    path: 'danger-management/danger-area-log-list',
    loadChildren: () =>
      import(
        './page/danger-management/danger-area-log/danger-area-log-list/danger-area-log-list.module'
      ).then((m) => m.DangerAreaLogListPageModule),
  },
  {
    path: 'danger-management/closed-environment-list',
    loadChildren: () =>
      import(
        './page/danger-management/closed-environment-info-management/closed-environment-info-management-list/closed-environment-info-management-list.module'
      ).then((m) => m.ClosedEnvironmentInfoListPageModule),
  },
  {
    path: 'danger-management/crane-access-list',
    loadChildren: () =>
      import(
        './page/danger-management/crane-access-management/crane-access-list/crane-access-list.module'
      ).then((m) => m.CraneAccessListPageModule),
  },
  {
    path: 'danger-management/safety-hook-list',
    loadChildren: () =>
      import(
        './page/danger-management/safety-hook-management/safety-hook-list/safety-hook-list.module'
      ).then((m) => m.SafetyHookListPageModule),
  },
  {
    path: 'danger-management/desplacement-detection-list',
    loadChildren: () =>
      import(
        './page/danger-management/desplacement-detection-management/desplacement-detection-list/desplacement-detection-list.module'
      ).then((m) => m.DesplacementDetectionListPageModule),
  },  
  {
    path: 'each-device-detail-search',
    loadChildren: () => import('./page/equipment-management/smart-equipment/each-device-detail-search/each-device-detail-search.module').then( m => m.EachDeviceDetailSearchPageModule)
  },
  {
    path: 'heavy-device-detail-search',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-device-detail-search/heavy-device-detail-search.module').then( m => m.HeavyDeviceDetailSearchPageModule)
  },
  {
    path: 'danger-area-detail-search',
    loadChildren: () => import('./page/equipment-management/smart-equipment/danger-area-detail-search/danger-area-detail-search.module').then( m => m.DangerAreaDetailSearchPageModule)
  },
  {
    path: 'confirm-pending-list',
    loadChildren: () => import('./page/confirm/box/confirm-pending-list/confirm-pending-list.module').then( m => m.ConfirmPendingListPageModule)
  },
  {
    path: 'confirm-pending-detail-search',
    loadChildren: () => import('./page/confirm/box/confirm-pending-detail-search/confirm-pending-detail-search.module').then( m => m.ConfirmPendingDetailSearchPageModule)
  },
  {
    path: 'confirm-obtain-list',
    loadChildren: () => import('./page/confirm/box/confirm-obtain-list/confirm-obtain-list.module').then( m => m.ConfirmObtainListPageModule)
  },
  {
    path: 'confirm-obtain-detail-search',
    loadChildren: () => import('./page/confirm/box/confirm-obtain-detail-search/confirm-obtain-detail-search.module').then( m => m.ConfirmObtainDetailSearchPageModule)
  },
  {
    path: 'confirm-progress-list',
    loadChildren: () => import('./page/confirm/box/confirm-progress-list/confirm-progress-list.module').then( m => m.ConfirmProgressListPageModule)
  },
  {
    path: 'confirm-progress-detail-search',
    loadChildren: () => import('./page/confirm/box/confirm-progress-detail-search/confirm-progress-detail-search.module').then( m => m.ConfirmProgressDetailSearchPageModule)
  },
  {
    path: 'confirm-cc-list',
    loadChildren: () => import('./page/confirm/box/confirm-cc-list/confirm-cc-list.module').then( m => m.ConfirmCcListPageModule)
  },
  {
    path: 'confirm-cc-detail-search',
    loadChildren: () => import('./page/confirm/box/confirm-cc-detail-search/confirm-cc-detail-search.module').then( m => m.ConfirmCcDetailSearchPageModule)
  },
  {
    path: 'approval-edit',
    loadChildren: () => import('./page/confirm/box/approval-edit/approval-edit.module').then( m => m.ApprovalEditPageModule)
  },
  {
    path: 'worker-minutes-list',
    loadChildren: () => import('./page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.module').then( m => m.WorkerMinutesListPageModule)
  },
  {
    path: 'worker-minutes-detail-search',
    loadChildren: () => import('./page/work-plan/work-minutes/worker-minutes-detail-search/worker-minutes-detail-search.module').then( m => m.WorkerMinutesDetailSearchPageModule)
  },
  {
    path: 'supervision-list',
    loadChildren: () => import('./page/project-management/supervision-management/supervision-list/supervision-list.module').then( m => m.SupervisionListPageModule)
  },
  {
    path: 'supervision-edit',
    loadChildren: () => import('./page/project-management/supervision-management/supervision-edit/supervision-edit.module').then( m => m.SupervisionEditPageModule)
  },
  {
    path: 'area-add',
    loadChildren: () => import('./page/project-management/scene-management/area-add/area-add.module').then( m => m.AreaAddPageModule)
  },
  {
    path: 'safety-education-list',
    loadChildren: () => import('./page/safety-education/educatiion-status/safety-education-list/safety-education-list.module').then( m => m.SafetyEducationListPageModule)
  },
  {
    path: 'risk-list',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-list/risk-list.module').then( m => m.RiskListPageModule)
  },
  {
    path: 'risk-detail-search',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-detail-search/risk-detail-search.module').then( m => m.RiskDetailSearchPageModule)
  },
  {
    path: 'worker-status-add',
    loadChildren: () => import('./page/today-work/my-status-situation/worker-status-add/worker-status-add.module').then( m => m.WorkerStatusAddPageModule)
  },
  {
    path: 'risk-evaluation-edit',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module').then( m => m.RiskEvaluationEditPageModule)
  },
  {
    path: 'worker-approval-list',
    loadChildren: () => import('./page/member-management/member-approval-wait/worker-approval-list/worker-approval-list.module').then( m => m.WorkerApprovalListPageModule),
    canDeactivate: []
  },
  {
    path: 'risk-evaluation-popup',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.module').then( m => m.RiskEvaluationPopupPageModule)
  },
  {
    path: 'safety-education-detail-search',
    loadChildren: () => import('./page/safety-education/educatiion-status/safety-education-detail-search/safety-education-detail-search.module').then( m => m.SafetyEducationDetailSearchPageModule)
  },
  {
    path: 'safety-education-detail-list',
    loadChildren: () => import('./page/safety-education/educatiion-status/safety-education-detail-list/safety-education-detail-list.module').then( m => m.SafetyEducationDetailListPageModule)
  },
  {
    path: 'safety-education-detail-edit',
    loadChildren: () => import('./page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.module').then( m => m.SafetyEducationDetailEditPageModule)
  },
  {
    path: 'safety-education-result-list',
    loadChildren: () => import('./page/safety-education/education-result/safety-education-result-list/safety-education-result-list.module').then( m => m.SafetyEducationResultListPageModule)
  },
  {
    path: 'new-write-target',
    loadChildren: () => import('./page/safety-education/education-result/new-write-target/new-write-target.module').then( m => m.NewWriteTargetPageModule)
  },
  {
    path: 'education-confirm-pending-list',
    loadChildren: () => import('./page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.module').then( m => m.EducationConfirmPendingListPageModule)
  },
  {
    path: 'safety-education-result-edit',
    loadChildren: () => import('./page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module').then( m => m.SafetyEducationResultEditPageModule)
  },
  {
    path: 'safety-education-result-detail-search',
    loadChildren: () => import('./page/safety-education/education-result/safety-education-result-detail-search/safety-education-result-detail-search.module').then( m => m.SafetyEducationResultDetailSearchPageModule)
  },
  {
    path: 'my-education-list',
    loadChildren: () => import('./page/safety-education/my-education/my-education-list/my-education-list.module').then( m => m.MyEducationListPageModule)
  },
  {
    path: 'my-education-detail-list',
    loadChildren: () => import('./page/safety-education/my-education/my-education-detail-list/my-education-detail-list.module').then( m => m.MyEducationDetailListPageModule)
  },
  {
    path: 'safety-education-history-list',
    loadChildren: () => import('./page/safety-education/education-history/safety-education-history-list/safety-education-history-list.module').then( m => m.SafetyEducationHistoryListPageModule)
  },
  {
    path: 'safety-education-history-detail',
    loadChildren: () => import('./page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.module').then( m => m.SafetyEducationHistoryDetailPageModule)
  },
  {
    path: 'lh-approval-list',
    loadChildren: () => import('./page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.module').then( m => m.LhApprovalListPageModule)
  },
  {
    path: 'supervision-approval-list',
    loadChildren: () => import('./page/member-management/member-approval-wait/supervision-approval-list/supervision-approval-list.module').then( m => m.SupervisionApprovalListPageModule)
  },
  {
    path: 'partner-approval-list',
    loadChildren: () => import('./page/member-management/member-approval-wait/partner-approval-list/partner-approval-list.module').then( m => m.PartnerApprovalListPageModule)
  },
  {
    path: 'worker-info-list',
    loadChildren: () => import('./page/member-management/member-management/worker-info-list/worker-info-list.module').then( m => m.WorkerInfoListPageModule)
  },
  {
    path: 'lh-info-list',
    loadChildren: () => import('./page/member-management/member-management/lh-info-list/lh-info-list.module').then( m => m.LhInfoListPageModule)
  },
  {
    path: 'supervision-info-list',
    loadChildren: () => import('./page/member-management/member-management/supervision-info-list/supervision-info-list.module').then( m => m.SupervisionInfoListPageModule)
  },
  {
    path: 'partner-info-list',
    loadChildren: () => import('./page/member-management/member-management/partner-info-list/partner-info-list.module').then( m => m.PartnerInfoListPageModule)
  },
  {
    path: 'worker-approval-edit',
    loadChildren: () => import('./page/member-management/member-approval-wait/worker-approval-edit/worker-approval-edit.module').then( m => m.WorkerApprovalEditPageModule)
  },
  {
    path: 'belong-info-edit',
    loadChildren: () => import('./page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.module').then( m => m.BelongInfoEditPageModule)
  },
  {
    path: 'lh-approval-edit',
    loadChildren: () => import('./page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.module').then( m => m.LhApprovalEditPageModule)
  },
  {
    path: 'supervision-approval-edit',
    loadChildren: () => import('./page/member-management/member-approval-wait/supervision-approval-edit/supervision-approval-edit.module').then( m => m.SupervisionApprovalEditPageModule)
  },
  {
    path: 'partner-approval-edit',
    loadChildren: () => import('./page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.module').then( m => m.PartnerApprovalEditPageModule)
  },
  {
    path: 'partner-into-edit',
    loadChildren: () => import('./page/member-management/member-management/partner-into-edit/partner-into-edit.module').then( m => m.PartnerIntoEditPageModule)
  },
  {
    path: 'supervision-info-edit',
    loadChildren: () => import('./page/member-management/member-management/supervision-info-edit/supervision-info-edit.module').then( m => m.SupervisionInfoEditPageModule)
  },
  {
    path: 'lh-info-edit',
    loadChildren: () => import('./page/member-management/member-management/lh-info-edit/lh-info-edit.module').then( m => m.LhInfoEditPageModule)
  },
  {
    path: 'worker-info-edit',
    loadChildren: () => import('./page/member-management/member-management/worker-info-edit/worker-info-edit.module').then( m => m.WorkerInfoEditPageModule)
  },
  {
    path: 'notify-list',
    loadChildren: () => import('./page/notify-board/notify/notify-list/notify-list.module').then( m => m.NotifyListPageModule)
  },
  {
    path: 'open-detail-search',
    loadChildren: () => import('./page/notify-board/notify/open-detail-search/open-detail-search.module').then( m => m.OpenDetailSearchPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./page/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'organization-select',
    loadChildren: () => import('./page/project-management/scene-management/organization-select/organization-select.module').then( m => m.OrganizationSelectPageModule)
  },
  {
    path: 'sign-up-lh',
    loadChildren: () => import('./page/sign-up/sign-up-lh/sign-up-lh.module').then( m => m.SignUpLhPageModule)
  },
  {
    path: 'sign-up-supervision',
    loadChildren: () => import('./page/sign-up/sign-up-supervision/sign-up-supervision.module').then( m => m.SignUpSupervisionPageModule)
  },
  {
    path: 'sign-up-partner',
    loadChildren: () => import('./page/sign-up/sign-up-partner/sign-up-partner.module').then( m => m.SignUpPartnerPageModule)
  },
  {
    path: 'find-pc',
    loadChildren: () => import('./page/login/find-pc/find-pc.module').then( m => m.FindPcPageModule)
  },
  {
    path: 'login-mobile',
    loadChildren: () => import('./page/login/login-mobile/login-mobile.module').then( m => m.LoginMobilePageModule)
  },
  {
    path: 'find-id-mobile-type',
    loadChildren: () => import('./page/login/find-mobile/find-id-mobile-type/find-id-mobile-type.module').then( m => m.FindIdMobileTypePageModule)
  },
  {
    path: 'find-id-mobile-phone',
    loadChildren: () => import('./page/login/find-mobile/find-id-mobile-phone/find-id-mobile-phone.module').then( m => m.FindIdMobilePhonePageModule)
  },
  {
    path: 'find-id-mobile-result',
    loadChildren: () => import('./page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.module').then( m => m.FindIdMobileResultPageModule)
  },
  {
    path: 'find-password-mobile-type',
    loadChildren: () => import('./page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.module').then( m => m.FindPasswordMobileTypePageModule)
  },
  {
    path: 'find-password-mobile-phone',
    loadChildren: () => import('./page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.module').then( m => m.FindPasswordMobilePhonePageModule)
  },
  {
    path: 'find-password-mobile-result',
    loadChildren: () => import('./page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.module').then( m => m.FindPasswordMobileResultPageModule)
  },
  {
    path: 'manual-detail',
    loadChildren: () => import('./page/customer-support/user-manual/manual-detail/manual-detail.module').then( m => m.ManualDetailPageModule)
  },
  {
    path: 'my-page',
    loadChildren: () => import('./page/my-page/my-page/my-page.module').then( m => m.MyPagePageModule)
  },
  {
    path: 'my-page-info',
    loadChildren: () => import('./page/my-page/my-page-info/my-page-info.module').then( m => m.MyPageInfoPageModule)
  },
  {
    path: 'departure-status-list',
    loadChildren: () => import('./page/work-management/departure-status/departure-status-list/departure-status-list.module').then( m => m.DepartureStatusListPageModule)
  },
  {
    path: 'today-departure-status-list',
    loadChildren: () => import('./page/work-management/departure-status/today-departure-status-list/today-departure-status-list.module').then( m => m.TodayDepartureStatusListPageModule)
  },
  {
    path: 'today-departure-status-edit',
    loadChildren: () => import('./page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.module').then( m => m.TodayDepartureStatusEditPageModule)
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./page/today-work/qr-scan/qr-scan.module').then( m => m.QrScanPageModule)
  },
  {
    path: 'qr-education-in',
    loadChildren: () => import('./page/safety-education/educatiion-status/qr-education-in/qr-education-in.module').then( m => m.QrEducationInPageModule)
},
  {
    path: 'change-password',
    loadChildren: () => import('./page/my-page/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-phone',
    loadChildren: () => import('./page/my-page/change-phone/change-phone.module').then( m => m.ChangePhonePageModule)
  },
  {
    path: 'my-detail-search',
    loadChildren: () => import('./page/safety-education/my-education/my-detail-search/my-detail-search.module').then( m => m.MyDetailSearchPageModule)
  },
  {
    path: 'minutes-search',
    loadChildren: () => import('./page/notice-board/minutes/minutes-search/minutes-search.module').then( m => m.MinutesSearchPageModule)
  },
  {
    path: 'worker-minutes-edit',
    loadChildren: () => import('./page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module').then( m => m.WorkerMinutesEditPageModule)
  },
  {
    path: 'worker-minutes-select-type',
    loadChildren: () => import('./page/work-plan/work-minutes/worker-minutes-select-type/worker-minutes-select-type.module').then( m => m.WorkerMinutesSelectTypePageModule)
  },
  // {
  //   path: 'monitor',
  //   loadChildren: () => import('./page/main/admin/monitor/monitor.module').then( m => m.MainSubAdminPageModule)
  // },
  {
    path: 'main-user-master',
    loadChildren: () => import('./page/main/user/main-user-master/main-user-master.module').then( m => m.MainUserMasterPageModule)
  },
  {
    path: 'main-user-partner',
    loadChildren: () => import('./page/main/user/main-user-partner/main-user-partner.module').then( m => m.MainUserPartnerPageModule)
  },
  {
    path: 'main-user-worker',
    loadChildren: () => import('./page/main/user/main-user-worker/main-user-worker.module').then( m => m.MainUserWorkerPageModule)
  },
  {
    path: 'danger-qr-view',
    loadChildren: () => import('./page/equipment-management/smart-equipment/danger-qr-view/danger-qr-view.module').then( m => m.DangerQrViewPageModule)
  },
  {
    path: 'heavy-qr-view',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-qr-view/heavy-qr-view.module').then( m => m.HeavyQrViewPageModule)
  },
  {
    path: 'setting-menu',
    loadChildren: () => import('./page/main/user/setting-menu/setting-menu.module').then( m => m.SettingMenuPageModule)
  },
  {
    path: 'setting-sounds',
    loadChildren: () => import('./page/main/user/setting-sounds/setting-sounds.module').then( m => m.SettingSoundsPageModule)
  },
  {
    path: 'sos-popup',
    loadChildren: () => import('./page/main/user/sos-popup/sos-popup.module').then( m => m.SosPopupPageModule)
  },
  {
    path: 'risk-pending-list',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-pending-list/risk-pending-list.module').then( m => m.RiskPendingListPageModule)
  },
  {
    path: 'worker-minutes-pending-list',
    loadChildren: () => import('./page/work-plan/work-minutes/worker-minutes-pending-list/worker-minutes-pending-list.module').then( m => m.WorkerMinutesPendingListPageModule)
  },
  {
    path: 'heavy-qr-data',
    loadChildren: () => import('./page/equipment-management/smart-equipment/heavy-qr-data/heavy-qr-data.module').then( m => m.HeavyQrDataPageModule)
  },
  {
    path: 'notice-search',
    loadChildren: () => import('./page/notice-board/notice/notice-search/notice-search.module').then( m => m.NoticeSearchPageModule)
  },
  {
    path: 'msds-search',
    loadChildren: () => import('./page/notice-board/msds/msds-search/msds-search.module').then( m => m.MsdsSearchPageModule)
  },
  {
    path: 'main-user-bottom-menu',
    loadChildren: () => import('./page/main/user/user/main-user-bottom-menu/main-user-bottom-menu.module').then( m => m.MainUserBottomMenuPageModule)
  },
  {
    path: 'monitor-cctv-list',
    loadChildren: () => import('./page/monitor/monitor-cctv-list/monitor-cctv-list.module').then( m => m.MonitorCctvListPageModule)
  },
  {
    path: 'monitor-cctv-edit',
    loadChildren: () => import('./page/monitor/monitor-cctv-edit/monitor-cctv-edit.module').then( m => m.MonitorCctvEditPageModule)
  },
  {
    path: 'qr-safety-in',
    loadChildren: () => import('./page/work-plan/work-minutes/qr-safety-in/qr-safety-in.module').then( m => m.QrSafetyInPageModule)
  },
  {
    path: 'work-write-list',
    loadChildren: () => import('./page/work-plan/work-minutes/work-write-list/work-write-list.module').then( m => m.WorkWriteListPageModule)
  },
  {
    path: 'work-write-target',
    loadChildren: () => import('./page/work-plan/work-minutes/work-write-target/work-write-target.module').then( m => m.WorkWriteTargetPageModule)
  },
  {
    path: 'work-write-edit',
    loadChildren: () => import('./page/work-plan/work-minutes/work-write-edit/work-write-edit.module').then( m => m.WorkWriteEditPageModule)
  },
  {
    path: 'work-my-list',
    loadChildren: () => import('./page/work-plan/work-minutes/work-my-list/work-my-list.module').then( m => m.WorkMyListPageModule)
  },
  {
    path: 'work-write-search',
    loadChildren: () => import('./page/work-plan/work-minutes/work-write-search/work-write-search.module').then( m => m.WorkWriteSearchPageModule)
  },
  {
    path: 'work-my-detail',
    loadChildren: () => import('./page/work-plan/work-minutes/work-my-detail/work-my-detail.module').then( m => m.WorkMyDetailPageModule)
  },
  {
    path: 'procedure-list',
    loadChildren: () => import('./page/notice-board/procedure/procedure-list/procedure-list.module').then( m => m.ProcedureListPageModule)
  },
  {
    path: 'procedure-edit',
    loadChildren: () => import('./page/notice-board/procedure/procedure-edit/procedure-edit.module').then( m => m.ProcedureEditPageModule)
  },
  {
    path: 'procedure-search',
    loadChildren: () => import('./page/notice-board/procedure/procedure-search/procedure-search.module').then( m => m.ProcedureSearchPageModule)
  },
  // {
  //   path: 'ptw-list',
  //   loadChildren: () => import('./page/work-plan/ptw/ptw-list/ptw-list.module').then(m => m.PtwListPageModule)
  // },
  // {
  //   path: 'ptw-edit',
  //   loadChildren: () => import('./page/work-plan/ptw/ptw-edit/ptw-edit.module').then(m => m.PtwEditPageModule)
  // },
  // {
  //   path: 'ptw-pending-list',
  //   loadChildren: () => import('./page/work-plan/ptw/ptw-pending-list/ptw-pending-list.module').then(m => m.PtwPendingListPageModule)
  // },
  // {
  //   path: 'ptw-risk-evaluation',
  //   loadChildren: () => import('./page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation.module').then(m => m.PtwRiskEvaluationPageModule)
  // },
  // {
  //   path: 'ptw-detail-search',
  //   loadChildren: () => import('./page/work-plan/ptw/ptw-detail-search/ptw-detail-search.module').then(m => m.PtwDetailSearchPageModule)
  // },
  // {
  //   path: 'tbm-list',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-list/tbm-list.module').then(m => m.TbmListPageModule)
  // },
  // {
  //   path: 'tbm-edit',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-edit/tbm-edit.module').then(m => m.TbmEditPageModule)
  // },
  // {
  //   path: 'tbm-unit',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-unit/tbm-unit.module').then(m => m.TbmUnitPageModule)
  // },
  // {
  //   path: 'tbm-worker',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-worker/tbm-worker.module').then(m => m.TbmWorkerPageModule)
  // },
  // {
  //   path: 'tbm-detail-search',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-detail-search/tbm-detail-search.module').then(m => m.TbmDetailSearchPageModule)
  // },
  // {
  //   path: 'tbm-registration',
  //   loadChildren: () => import('./page/task-management/tbm/tbm-registration/tbm-registration.module').then(m => m.TbmRegistrationPageModule)
  // },
  // {
  //   path: 'daily-list',
  //   loadChildren: () => import('./page/task-management/inspection/daily-list/daily-list.module').then(m => m.DailyListPageModule)
  // },
  // {
  //   path: 'daily-edit',
  //   loadChildren: () => import('./page/task-management/inspection/daily-edit/daily-edit.module').then(m => m.DailyEditPageModule)
  // },
  // {
  //   path: 'daily-detail-search',
  //   loadChildren: () => import('./page/task-management/inspection/daily-detail-search/daily-detail-search.module').then(m => m.DailyDetailSearchPageModule)
  // },
  // {
  //   path: 'danger-list',
  //   loadChildren: () => import('./page/task-management/inspection/danger-list/danger-list.module').then(m => m.DangerListPageModule)
  // },
  // {
  //   path: 'danger-edit',
  //   loadChildren: () => import('./page/task-management/inspection/danger-edit/danger-edit.module').then(m => m.DangerEditPageModule)
  // },
  // {
  //   path: 'danger-search',
  //   loadChildren: () => import('./page/task-management/inspection/danger-search/danger-search.module').then(m => m.DangerSearchPageModule)
  // },
  // {
  //   path: 'danger-detail-search',
  //   loadChildren: () => import('./page/task-management/inspection/danger-detail-search/danger-detail-search.module').then(m => m.DangerDetailSearchPageModule)
  // },
  // {
  //   path: 'emergency-detail-search',
  //   loadChildren: () => import('./page/emergency-management/emergency-detail-search/emergency-detail-search.module').then(m => m.EmergencyDetailSearchPageModule)
  // },
  // {
  //   path: 'lh-list',
  //   loadChildren: () => import('./page/task-management/inspection/lh-list/lh-list.module').then(m => m.LhListPageModule)
  // },
  // {
  //   path: 'lh-edit',
  //   loadChildren: () => import('./page/task-management/inspection/lh-edit/lh-edit.module').then(m => m.LhEditPageModule)
  // },
  // {
  //   path: 'incongruity-list',
  //   loadChildren: () => import('./page/task-management/incongruity/incongruity-list/incongruity-list.module').then(m => m.IncongruityListPageModule)
  // },
  // {
  //   path: 'incongruity-edit',
  //   loadChildren: () => import('./page/task-management/incongruity/incongruity-edit/incongruity-edit.module').then(m => m.IncongruityEditPageModule)
  // },
  // {
  //   path: 'incongruity-detail-search',
  //   loadChildren: () => import('./page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search.module').then(m => m.IncongruityDetailSearchPageModule)
  // },
  // {
  //   path: 'incongruity-need',
  //   loadChildren: () => import('./page/task-management/incongruity/incongruity-need/incongruity-need.module').then(m => m.IncongruityNeedPageModule)
  // },
  {
    path: 'emergency-list',
    loadChildren: () => import('./page/emergency-management/emergency-list/emergency-list.module').then(m => m.EmergencyListPageModule)
  },
  {
    path: 'emergency-edit',
    loadChildren: () => import('./page/emergency-management/emergency-edit/emergency-edit.module').then(m => m.EmergencyEditPageModule)
  },
  {
    path: 'emergency-warning',
    loadChildren: () => import('./page/emergency-management/emergency-warning/emergency-warning.module').then(m => m.EmergencyWarningPageModule)
  },
  {
    path: 'emergency-target',
    loadChildren: () => import('./page/emergency-management/emergency-target/emergency-target.module').then(m => m.EmergencyTargetPageModule)
  },
  {
    path: 'accident-list',
    loadChildren: () => import('./page/emergency-management/accident-list/accident-list.module').then(m => m.AccidentListPageModule)
  },
  {
    path: 'accident-edit',
    loadChildren: () => import('./page/emergency-management/accident-edit/accident-edit.module').then(m => m.AccidentEditPageModule)
  },
  {
    path: 'business-list',
    loadChildren: () => import('./page/business/business-list/business-list.module').then(m => m.BusinessListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
