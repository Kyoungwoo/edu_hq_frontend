import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhInfoListPageRoutingModule } from './lh-info-list-routing.module';

import { LhInfoListPage } from './lh-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { LhInfoEditPageModule } from '../lh-info-edit/lh-info-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhInfoListPageRoutingModule,
    LhInfoEditPageModule
  ],
  declarations: [LhInfoListPage]
})
export class LhInfoListPageModule {}
