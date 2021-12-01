import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';

import { UiComponentModule } from '../ui/ui.component.module';
import { AlertComponent } from './alert/alert.component';
import { DaumComponent } from './daum/daum.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AlertComponent,
    DaumComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ScrollingModule,
    UiComponentModule,
  ],
  exports: []
})
export class DialogComponentModule { }
