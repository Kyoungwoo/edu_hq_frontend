import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic/login-web',
    pathMatch: 'full'
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
    path: 'basic/side-menu-app',
    loadChildren: () => import('./basic/page/side-menu-app/side-menu-app.module').then( m => m.SideMenuAppPageModule)
  },
  {
    path: 'basic/side-menu-web',
    loadChildren: () => import('./basic/page/side-menu-web/side-menu-web.module').then( m => m.SideMenuWebPageModule)
  },
  {
    path: 'basic/login-web',
    loadChildren: () => import('./basic/page/login-web/login-web.module').then( m => m.LoginWebPageModule)
  },
  {
    path: 'basic/login-app',
    loadChildren: () => import('./basic/page/login-app/login-app.module').then( m => m.LoginAppPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
