import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainUserMasterPageRoutingModule } from './main-user-master-routing.module';

import { MainUserMasterPage } from './main-user-master.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MainUserBottomMenuPageModule } from '../user/main-user-bottom-menu/main-user-bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainUserMasterPageRoutingModule,
    MainUserBottomMenuPageModule
  ],
  declarations: [MainUserMasterPage]
})
export class MainUserMasterPageModule {}
