import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DnagerAreaLogDetailPageRoutingModule } from './danger-area-log-detail-routing.module';

import { DangerAreaLogDetailPage } from './danger-area-log-detail.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    DnagerAreaLogDetailPageRoutingModule,
  ],
  declarations: [DangerAreaLogDetailPage],
})
export class DangerAreaDetailPageModule {}
