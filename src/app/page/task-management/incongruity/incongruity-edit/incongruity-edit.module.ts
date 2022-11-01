import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { IncongruityEditPageRoutingModule } from './incongruity-edit-routing.module';
import { IncongruityEditPage } from './incongruity-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    IncongruityEditPageRoutingModule,
  ],
  declarations: [IncongruityEditPage]
})
export class IncongruityEditPageModule {}