import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LhOrganizationListComponent } from './lh-organization-list/lh-organization-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { PipesModule } from 'src/app/basic/pipes/pipes.module';
import { MemberPasswordComponent } from './member-password/member-password.component';
import { OccupationListComponent } from './occupation-list/occupation-list.component';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { PositionListComponent } from './position-list/position-list.component';
import { SafeJobListComponent } from './safe-job-list/safe-job-list.component';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    LhOrganizationListComponent,
    MemberPasswordComponent,
    OccupationListComponent,
    OrganizationEditComponent,
    PositionListComponent,
    SafeJobListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  exports:[
    LhOrganizationListComponent,
    MemberPasswordComponent,
    OccupationListComponent,
    OrganizationEditComponent,
    PositionListComponent,
    SafeJobListComponent
  ]
})
export class MemberStandardSetComponentModule { }
