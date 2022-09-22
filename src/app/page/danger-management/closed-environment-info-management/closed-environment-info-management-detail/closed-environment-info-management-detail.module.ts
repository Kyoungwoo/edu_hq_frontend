import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosedEnvironmentInfoDetailPageRoutingModule } from './closed-environment-info-management-detail-routing.module';

import { ClosedEnvironmentInfoDetailPage } from './closed-environment-info-management-detail.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    ClosedEnvironmentInfoDetailPageRoutingModule,
  ],
  declarations: [ClosedEnvironmentInfoDetailPage],
})
export class ClosedEnvironmentInfoDetailPageModule {}
