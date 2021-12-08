import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
