import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSubAdminPageRoutingModule } from './monitor-routing.module';

import { MainSubAdminPage } from './monitor.page';
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
