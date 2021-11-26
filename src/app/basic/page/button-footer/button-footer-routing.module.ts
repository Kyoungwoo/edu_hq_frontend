import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonFooterPage} from './button-footer.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonFooterPageRoutingModule {}
