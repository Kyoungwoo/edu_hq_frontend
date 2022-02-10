import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualDetailPageRoutingModule } from './manual-detail-routing.module';

import { ManualDetailPage } from './manual-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualDetailPageRoutingModule
  ],
  declarations: [ManualDetailPage]
})
export class ManualDetailPageModule {}
