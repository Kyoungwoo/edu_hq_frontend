import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../basic/pipes/pipes.module';
import { BasicComponentModule } from '../basic/component/basic.component.module';

import { SideMenuUserComponent } from './side-menu/side-menu-user/side-menu-user.component';
import { SideMenuAdminComponent } from './side-menu/side-menu-admin/side-menu-admin.component';
import { HeaderAdminComponent } from './header/header-admin/header-admin.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SearchPeopleComponent } from './modal/search-people/search-people.component';
import { SearchCompanyComponent } from './modal/search-company/search-company.component';
import { SearchDangerousAreaComponent } from './modal/search-dangerous-area/search-dangerous-area.component';
import { SearchHeavyComponent } from './modal/search-heavy/search-heavy.component';
import { SearchSceneComponent } from './modal/search-scene/search-scene.component';
import { SearchToolComponent } from './modal/search-tool/search-tool.component';
import { SearchConstructionMachineryComponent } from './modal/search-construction-machinery/search-construction-machinery.component';
import { SearchEducationComponent } from './modal/search-education/search-education.component';



@NgModule({
  declarations: [
    ConfirmComponent,
    HeaderAdminComponent,
    SideMenuUserComponent,
    SideMenuAdminComponent,
    QrScannerComponent,
    SearchPeopleComponent,
    SearchCompanyComponent,
    SearchDangerousAreaComponent,
    SearchHeavyComponent,
    SearchSceneComponent,
    SearchToolComponent,
    SearchConstructionMachineryComponent,
    SearchEducationComponent
   
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    BasicComponentModule
  ],
  exports: [
    ConfirmComponent,
    BasicComponentModule,
    HeaderAdminComponent,
    QrScannerComponent,
    SearchPeopleComponent,
    SearchCompanyComponent,
    SearchDangerousAreaComponent,
    SearchHeavyComponent,
    SearchSceneComponent,
    SearchToolComponent,
    SearchConstructionMachineryComponent,
    SearchEducationComponent
  ]
})
export class ComponentModule { }
