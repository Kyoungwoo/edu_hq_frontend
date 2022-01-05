import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchConstructionMachineryComponent } from './component/modal/search-construction-machinery/search-construction-machinery.component';
import { SearchHeavyComponent } from './component/modal/search-heavy/search-heavy.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedLibrary:'home' | 'animation' | 'component' | 'pipe' | 'service' = 'home';

  constructor(
    private modal: ModalController
  ) {
    /* this.test();
    this.test2(); */
  }
  async test() {
    const modal = await this.modal.create({
      component: SearchConstructionMachineryComponent
    });
    modal.present();
  }
  async test2() {
    const modal = await this.modal.create({
      component: SearchHeavyComponent
    });
    modal.present();
  }
}
