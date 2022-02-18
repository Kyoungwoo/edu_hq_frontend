import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageEducationPageRoutingModule } from './my-page-education-routing.module';

import { MyPageEducationPage } from './my-page-education.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPageEducationPageRoutingModule
  ],
  declarations: [MyPageEducationPage]
})
export class MyPageEducationPageModule {}
