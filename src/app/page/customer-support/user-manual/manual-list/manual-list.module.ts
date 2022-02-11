import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualListPageRoutingModule } from './manual-list-routing.module';

import { ManualListPage } from './manual-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ManualDetailSearchPageModule } from '../manual-detail-search/manual-detail-search.module';
import { ManualEditPageModule } from '../manual-edit/manual-edit.module';
import { ManualDetailPageModule } from '../manual-detail/manual-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    BasicComponentModule,
    ManualListPageRoutingModule,
    ManualDetailSearchPageModule,
    ManualEditPageModule,
    ManualDetailPageModule
  ],
  declarations: [ManualListPage]
})
export class ManualListPageModule {}
