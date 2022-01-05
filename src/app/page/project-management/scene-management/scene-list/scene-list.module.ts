import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceneListPageRoutingModule } from './scene-list-routing.module';

import { SceneListPage } from './scene-list.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SceneListPageRoutingModule
  ],
  declarations: [SceneListPage]
})
export class SceneListPageModule {}
