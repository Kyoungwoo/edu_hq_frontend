import { LanguagePackService } from './basic/service/core/language-pack.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedLibrary:'home' | 'animation' | 'component' | 'pipe' | 'service' = 'home';

  constructor(private languagePack: LanguagePackService) {}

  async ngOnInit() {
    this.languagePack.getLanguageAPI();
  }
  
}
