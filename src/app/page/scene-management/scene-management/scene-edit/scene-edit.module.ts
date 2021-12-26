import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceneEditPageRoutingModule } from './scene-edit-routing.module';

import { SceneEditPage } from './scene-edit.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SceneEditPageRoutingModule
  ],
  declarations: [SceneEditPage]
})
export class SceneEditPageModule {}
