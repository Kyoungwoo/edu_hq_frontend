import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyHookListPageRoutingModule } from './safety-hook-list-routing.module';

import { SafetyHookListPage } from './safety-hook-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { SafetyHookDetailPageModule } from '../safety-hook-detail/safety-hook-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SafetyHookListPageRoutingModule,
    SafetyHookDetailPageModule,
  ],
  declarations: [SafetyHookListPage],
})
export class SafetyHookListPageModule {}
