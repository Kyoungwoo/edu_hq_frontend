import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualDetailPageRoutingModule } from './manual-detail-routing.module';

import { ManualDetailPage } from './manual-detail.page';
import { ComponentModule } from 'src/app/component/component.module';
import { PipesModule } from 'src/app/basic/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PipesModule,
    ManualDetailPageRoutingModule
  ],
  declarations: [ManualDetailPage]
})
export class ManualDetailPageModule {}
