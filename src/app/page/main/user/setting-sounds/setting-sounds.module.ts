import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingSoundsPageRoutingModule } from './setting-sounds-routing.module';

import { SettingSoundsPage } from './setting-sounds.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SettingSoundsPageRoutingModule
  ],
  declarations: [SettingSoundsPage]
})
export class SettingSoundsPageModule {}
