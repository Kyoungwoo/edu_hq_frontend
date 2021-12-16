import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoniterPageRoutingModule } from './moniter-routing.module';

import { MoniterPage } from './moniter.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoniterPageRoutingModule,
    ComponentModule,
    BasicComponentModule
  ],
  declarations: [MoniterPage]
})
export class MoniterPageModule {}
