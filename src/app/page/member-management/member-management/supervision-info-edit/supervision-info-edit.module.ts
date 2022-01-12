import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionInfoEditPageRoutingModule } from './supervision-info-edit-routing.module';

import { SupervisionInfoEditPage } from './supervision-info-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SupervisionInfoEditPageRoutingModule
  ],
  declarations: [SupervisionInfoEditPage]
})
export class SupervisionInfoEditPageModule {}
