import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionInfoListPageRoutingModule } from './supervision-info-list-routing.module';

import { SupervisionInfoListPage } from './supervision-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SupervisionInfoEditPageModule } from '../supervision-info-edit/supervision-info-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SupervisionInfoListPageRoutingModule,
    SupervisionInfoEditPageModule
  ],
  declarations: [SupervisionInfoListPage]
})
export class SupervisionInfoListPageModule {}
