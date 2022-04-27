import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainUserPageRoutingModule } from './main-user-routing.module';

import { MainUserPage } from './main-user.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MainUserBottomMenuPageModule } from '../user/main-user-bottom-menu/main-user-bottom-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainUserPageRoutingModule,
    MainUserBottomMenuPageModule
  ],
  declarations: [MainUserPage]
})
export class MainUserPageModule {}
