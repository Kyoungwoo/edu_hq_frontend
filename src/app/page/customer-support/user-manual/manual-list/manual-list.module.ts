import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualListPageRoutingModule } from './manual-list-routing.module';

import { ManualListPage } from './manual-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    ManualListPageRoutingModule
  ],
  declarations: [ManualListPage]
})
export class ManualListPageModule {}
