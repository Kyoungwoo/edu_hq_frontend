import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaAddPageRoutingModule } from './area-add-routing.module';

import { AreaAddPage } from './area-add.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    AreaAddPageRoutingModule
  ],
  declarations: [AreaAddPage]
})
export class AreaAddPageModule {}
