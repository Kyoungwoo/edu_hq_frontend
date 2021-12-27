import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scene-list',
    pathMatch: 'full'
  },
  {
    path: 'scan',
    loadChildren: () => import('./page/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'basic/guide',
    loadChildren: () => import('./basic/page/guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'basic/guide-card-layout',
    loadChildren: () => import('./basic/page/guide-card-layout/guide-card-layout.module').then( m => m.GuideCardLayoutPageModule)
  },
  {
    path: 'basic/guide-table-layout',
    loadChildren: () => import('./basic/page/guide-table-layout/guide-table-layout.module').then( m => m.GuideTableLayoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-admin',
    loadChildren: () => import('./page/main/main-admin/main-admin.module').then( m => m.MainAdminPageModule)
  },
  {
    path: 'main-user',
    loadChildren: () => import('./page/main/main-user/main-user.module').then( m => m.MainUserPageModule)
  },
  {
    path: 'sign-up-type',
    loadChildren: () => import('./page/sign-up/sign-up-type/sign-up-type.module').then( m => m.SignUpTypePageModule)
  },
  {
    path: 'sign-up-company',
    loadChildren: () => import('./page/sign-up/sign-up-company/sign-up-company.module').then( m => m.SignUpCompanyPageModule)
  },
  {
    path: 'sign-up-worker',
    loadChildren: () => import('./page/sign-up/sign-up-worker/sign-up-worker.module').then( m => m.SignUpWorkerPageModule)
  },
  {
    path: 'sign-up-terms',
    loadChildren: () => import('./page/sign-up/sign-up-terms/sign-up-terms.module').then( m => m.SignUpTermsPageModule)
  },
  {
    path: 'sign-up-done',
    loadChildren: () => import('./page/sign-up/sign-up-done/sign-up-done.module').then( m => m.SignUpDonePageModule)
  },
  {
    path: 'moniter',
    loadChildren: () => import('./page/moniter/moniter.module').then( m => m.MoniterPageModule)
  },
  {
    path: 'manual-list',
    loadChildren: () => import('./page/customer-support/user-manual/manual-list/manual-list.module').then( m => m.ManualListPageModule)
  },
  {
    path: 'msds-list',
    loadChildren: () => import('./page/notice-board/msds/msds-list/msds-list.module').then( m => m.MsdsListPageModule)
  },
  {
    path: 'msds-edit',
    loadChildren: () => import('./page/notice-board/msds/msds-edit/msds-edit.module').then( m => m.MsdsEditPageModule)
  },
  {
    path: 'minutes-list',
    loadChildren: () => import('./page/notice-board/minutes/minutes-list/minutes-list.module').then( m => m.MinutesListPageModule)
  },
  {
    path: 'minutes-edit',
    loadChildren: () => import('./page/notice-board/minutes/minutes-edit/minutes-edit.module').then( m => m.MinutesEditPageModule)
  },
  {
    path: 'notice-list',
    loadChildren: () => import('./page/notice-board/notice/notice-list/notice-list.module').then( m => m.NoticeListPageModule)
  },
  {
    path: 'notice-edit',
    loadChildren: () => import('./page/notice-board/notice/notice-edit/notice-edit.module').then( m => m.NoticeEditPageModule)
  },
  {
    path: 'manual-detail-search',
    loadChildren: () => import('./page/customer-support/user-manual/manual-detail-search/manual-detail-search.module').then( m => m.ManualDetailSearchPageModule)
  },
  {
    path: 'manual-edit',
    loadChildren: () => import('./page/customer-support/user-manual/manual-edit/manual-edit.module').then( m => m.ManualEditPageModule)
  },
  {
    path: 'use-terms',
    loadChildren: () => import('./page/customer-support/terms/use-terms/use-terms.module').then( m => m.UseTermsPageModule)
  },
  {
    path: 'sign-up-health',
    loadChildren: () => import('./page/sign-up/sign-up-health/sign-up-health/sign-up-health.module').then( m => m.SignUpHealthPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./page/customer-support/terms/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'heavy-equip-list',
    loadChildren: () => import('./page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.module').then( m => m.HeavyEquipListPageModule)
  },
  {
    path: 'scene-list',
    loadChildren: () => import('./page/scene-management/scene-management/scene-list/scene-list.module').then( m => m.SceneListPageModule)
  },
  {
    path: 'scene-edit',
    loadChildren: () => import('./page/scene-management/scene-management/scene-edit/scene-edit.module').then( m => m.SceneEditPageModule)
  },
  {
    path: 'scene-area-set',
    loadChildren: () => import('./page/scene-management/scene-management/scene-area-set/scene-area-set.module').then( m => m.SceneAreaSetPageModule)
  },
  {
    path: 'contractor-list',
    loadChildren: () => import('./page/scene-management/contractor-management/contractor-list/contractor-list.module').then( m => m.ContractorListPageModule)
  },
  {
    path: 'contractor-edit',
    loadChildren: () => import('./page/scene-management/contractor-management/contractor-edit/contractor-edit.module').then( m => m.ContractorEditPageModule)
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
export class AppRoutingModule {}
