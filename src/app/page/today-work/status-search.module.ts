import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusSearchComponent } from './component/status-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/basic/pipes/pipes.module';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    StatusSearchComponent
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
    StatusSearchComponent
  ]
})
export class StatusSearchModule { }
