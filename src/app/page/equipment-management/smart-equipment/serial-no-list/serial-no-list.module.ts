import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerialNoListPageRoutingModule } from './serial-no-list-routing.module';

import { SerialNoListPage } from './serial-no-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SerialNoListPageRoutingModule
  ],
  declarations: [SerialNoListPage]
})
export class SerialNoListPageModule {}
