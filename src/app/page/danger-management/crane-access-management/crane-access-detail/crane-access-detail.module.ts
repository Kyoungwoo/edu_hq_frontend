import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraneAccessDetailPageRoutingModule } from './crane-access-detail-routing.module';

import { CraneAccessDetailPage } from './crane-access-detail.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    CraneAccessDetailPageRoutingModule,
  ],
  declarations: [CraneAccessDetailPage],
})
export class CraneAccessDetailPageModule {}
