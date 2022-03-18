import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedLibrary:'home' | 'animation' | 'component' | 'pipe' | 'service' = 'home';

  constructor() {}

  ngOnInit() {}
}
