import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceneAreaSetPageRoutingModule } from './scene-area-set-routing.module';

import { SceneAreaSetPage } from './scene-area-set.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SceneAreaSetPageRoutingModule
  ],
  declarations: [SceneAreaSetPage]
})
export class SceneAreaSetPageModule {}
