import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/basic/pipes/pipes.module';
import { ComponentModule } from 'src/app/component/component.module';
import { DetailSearchComponent } from './status-search/detail-search/detail-search.component';



@NgModule({
  declarations: [
    DetailSearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ComponentModule
  ],
  exports:[
    DetailSearchComponent
  ]
})
export class StatusSearchModule { }
