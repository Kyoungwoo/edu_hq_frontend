import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';

import { ButtonComponent } from './button/button.component';
import { ButtonFooterComponent } from './button-footer/button-footer.component';
import { ColComponent } from './col/col.component';
import { CardComponent } from './card/card.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { ImgComponent } from './img/img.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { RowComponent } from './row/row.component';
import { TableComponent } from './table/table.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonFooterComponent,
    CardComponent,
    ColComponent,
    ContainerComponent,
    CopyRightComponent,
    ImgComponent,
    LogoComponent,
    RowComponent,
    ProfileComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    ButtonFooterComponent,
    CardComponent,
    ColComponent,
    ContainerComponent,
    CopyRightComponent,
    ImgComponent,
    LogoComponent,
    RowComponent,
    ProfileComponent,
    TableComponent
  ]
})
export class UiComponentModule { }
