import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeSearchPageRoutingModule } from './notice-search-routing.module';

import { NoticeSearchPage } from './notice-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NoticeSearchPageRoutingModule
  ],
  declarations: [NoticeSearchPage]
})
export class NoticeSearchPageModule {}
