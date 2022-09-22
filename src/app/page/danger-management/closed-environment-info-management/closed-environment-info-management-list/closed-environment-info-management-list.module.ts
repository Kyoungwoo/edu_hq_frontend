import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosedEnvironmentInfoListPageRoutingModule } from './closed-environment-info-management-list-routing.module';

import { ClosedEnvironmentInfoListPage } from './closed-environment-info-management-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { ClosedEnvironmentInfoDetailPageModule } from '../closed-environment-info-management-detail/closed-environment-info-management-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ClosedEnvironmentInfoListPageRoutingModule,
    ClosedEnvironmentInfoDetailPageModule,
  ],
  declarations: [ClosedEnvironmentInfoListPage],
})
export class ClosedEnvironmentInfoListPageModule {}
