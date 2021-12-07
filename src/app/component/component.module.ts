import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../basic/pipes/pipes.module';
import { BasicComponentModule } from '../basic/component/basic.component.module';

import { SideMenuUserComponent } from './side-menu/side-menu-user/side-menu-user.component';
import { SideMenuAdminComponent } from './side-menu/side-menu-admin/side-menu-admin.component';
import { HeaderAdminComponent } from './header/header-admin/header-admin.component';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    SideMenuUserComponent,
    SideMenuAdminComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    BasicComponentModule
  ],
  exports: [
    BasicComponentModule,
    HeaderAdminComponent
  ]
})
export class ComponentModule { }
