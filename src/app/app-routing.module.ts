import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scan',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'basic/tab',
    loadChildren: () => import('./basic/page/tab/tab.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'basic/guide',
    loadChildren: () => import('./basic/page/guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'basic/button-footer',
    loadChildren: () => import('./basic/page/button-footer/button-footer.module').then( m => m.ButtonFooterPageModule)
  },
  {
    path: 'basic/steps',
    loadChildren: () => import('./basic/page/steps/steps.module').then( m => m.StepsPageModule)
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
    path: 'guide-card-layout',
    loadChildren: () => import('./basic/page/guide-card-layout/guide-card-layout.module').then( m => m.GuideCardLayoutPageModule)
  },
  {
    path: 'guide-table-layout',
    loadChildren: () => import('./basic/page/guide-table-layout/guide-table-layout.module').then( m => m.GuideTableLayoutPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./page/scan/scan.module').then( m => m.ScanPageModule)
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
