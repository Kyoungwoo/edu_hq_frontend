import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageEducationPageRoutingModule } from './my-page-education-routing.module';

import { MyPageEducationPage } from './my-page-education.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MyPageEducationSearchPageModule } from '../my-page-education-search/my-page-education-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MyPageEducationPageRoutingModule,
    MyPageEducationSearchPageModule
  ],
  declarations: [MyPageEducationPage]
})
export class MyPageEducationPageModule {}
