import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-admin',
    pathMatch: 'full'
  },
  {
    path: 'basic/guide',
    loadChildren: () => import('./basic/page/guide/guide.module').then(m => m.GuidePageModule)
  },
  {
    path: 'basic/guide-image',
    loadChildren: () => import('./basic/page/guide-image/guide-image.module').then( m => m.GuideImagePageModule)
  },
  {
    path: 'basic/guide-card-layout',
    loadChildren: () => import('./basic/page/guide-card-layout/guide-card-layout.module').then(m => m.GuideCardLayoutPageModule)
  },
  {
    path: 'basic/guide-table-layout',
    loadChildren: () => import('./basic/page/guide-table-layout/guide-table-layout.module').then(m => m.GuideTableLayoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'main-admin',
    loadChildren: () => import('./page/main/main-admin/main-admin.module').then(m => m.MainAdminPageModule)
  },
  {
    path: 'main-user',
    loadChildren: () => import('./page/main/main-user/main-user.module').then(m => m.MainUserPageModule)
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
    path: 'minutes-edit',
    loadChildren: () => import('./page/notice-board/minutes/minutes-edit/minutes-edit.module').then(m => m.MinutesEditPageModule)
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
    loadChildren: () => import('./page/sign-up/sign-up-health/sign-up-health/sign-up-health.module').then(m => m.SignUpHealthPageModule)
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
  {
    path: 'scene-area-set',
    loadChildren: () => import('./page/project-management/scene-management/scene-area-set/scene-area-set.module').then(m => m.SceneAreaSetPageModule)
  },
  {
    path: 'member-standard-set',
    loadChildren: () => import('./page/project-management/scene-management/member-standard-set/member-standard-set.module').then(m => m.MemberStandardSetPageModule)
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
    path: 'detail-search',
    loadChildren: () => import('./page/notice-board/detail-search/detail-search.module').then( m => m.DetailSearchPageModule)
  },
  {
    path: 'notice-open-range',
    loadChildren: () => import('./page/notice-board/notice-open-range/notice-open-range.module').then( m => m.NoticeOpenRangePageModule)
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
    loadChildren: () => import('./page/member-management/member-approval-wait/worker-approval-list/worker-approval-list.module').then( m => m.WorkerApprovalListPageModule)
  },
  {
    path: 'risk-evaluation-confirm',
    loadChildren: () => import('./page/work-plan/risk-assessment/risk-evaluation-confirm/risk-evaluation-confirm.module').then( m => m.RiskEvaluationConfirmPageModule)
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
    path: 'guide-side-menu',
    loadChildren: () => import('./basic/page/guide-side-menu/guide-side-menu.module').then( m => m.GuideSideMenuPageModule)
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
  }

















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
