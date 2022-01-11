import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionInfoListPageRoutingModule } from './supervision-info-list-routing.module';

import { SupervisionInfoListPage } from './supervision-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SupervisionInfoListPageRoutingModule
  ],
  declarations: [SupervisionInfoListPage]
})
export class SupervisionInfoListPageModule {}
