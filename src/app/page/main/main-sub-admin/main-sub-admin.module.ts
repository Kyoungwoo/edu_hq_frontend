import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSubAdminPageRoutingModule } from './main-sub-admin-routing.module';

import { MainSubAdminPage } from './main-sub-admin.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainSubAdminPageRoutingModule
  ],
  declarations: [MainSubAdminPage]
})
export class MainSubAdminPageModule {}
