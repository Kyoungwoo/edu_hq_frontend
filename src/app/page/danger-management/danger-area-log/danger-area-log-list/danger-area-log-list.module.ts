import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaLogListPageRoutingModule } from './danger-area-log-list-routing.module';

import { DangerAreaLogListPage } from './danger-area-log-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { DangerAreaDetailPageModule } from '../danger-area-log-detail/danger-area-log-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerAreaLogListPageRoutingModule,
    DangerAreaDetailPageModule,
  ],
  declarations: [DangerAreaLogListPage],
})
export class DangerAreaLogListPageModule {}
