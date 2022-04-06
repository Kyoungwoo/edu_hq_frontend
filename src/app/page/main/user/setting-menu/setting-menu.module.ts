import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingMenuPageRoutingModule } from './setting-menu-routing.module';

import { SettingMenuPage } from './setting-menu.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SettingMenuPageRoutingModule
  ],
  declarations: [SettingMenuPage]
})
export class SettingMenuPageModule {}
