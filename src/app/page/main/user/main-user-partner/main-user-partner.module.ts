import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainUserPartnerPageRoutingModule } from './main-user-partner-routing.module';

import { MainUserPartnerPage } from './main-user-partner.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MainUserBottomMenuPageModule } from '../user/main-user-bottom-menu/main-user-bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainUserPartnerPageRoutingModule,
    MainUserBottomMenuPageModule
  ],
  declarations: [MainUserPartnerPage]
})
export class MainUserPartnerPageModule {}
