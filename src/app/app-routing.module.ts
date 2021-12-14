import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login/login.module').then( m => m.LoginPageModule)
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
  },
  {
    path: 'moniter',
    loadChildren: () => import('./moniter/moniter.module').then( m => m.MoniterPageModule)
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
