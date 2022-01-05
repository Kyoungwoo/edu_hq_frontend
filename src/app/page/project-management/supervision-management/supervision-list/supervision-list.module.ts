import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionListPageRoutingModule } from './supervision-list-routing.module';

import { SupervisionListPage } from './supervision-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { SupervisionEditPageModule } from '../supervision-edit/supervision-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SupervisionListPageRoutingModule,
    SupervisionEditPageModule
  ],
  declarations: [SupervisionListPage]
})
export class SupervisionListPageModule {}
