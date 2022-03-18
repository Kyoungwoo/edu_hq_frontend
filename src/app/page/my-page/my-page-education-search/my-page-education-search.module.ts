import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageEducationSearchPageRoutingModule } from './my-page-education-search-routing.module';

import { MyPageEducationSearchPage } from './my-page-education-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MyPageEducationSearchPageRoutingModule
  ],
  declarations: [MyPageEducationSearchPage]
})
export class MyPageEducationSearchPageModule {}
