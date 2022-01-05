import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionEditPageRoutingModule } from './supervision-edit-routing.module';

import { SupervisionEditPage } from './supervision-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SupervisionEditPageRoutingModule
  ],
  declarations: [SupervisionEditPage]
})
export class SupervisionEditPageModule {}
