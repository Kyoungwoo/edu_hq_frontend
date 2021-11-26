import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic/steps',
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
