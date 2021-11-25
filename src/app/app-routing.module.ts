import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic/input-button',
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
    path: 'basic/input-button',
    loadChildren: () => import('./basic/page/input-button/input-button.module').then( m => m.InputButtonPageModule)
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
