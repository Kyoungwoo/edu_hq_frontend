import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  result = [];

  constructor() { }

  //total test
  public async test() {
    if(!Object.keys(environment.test).length) return;
    await this.SignUp();
  }
  private async SignUp() {
    if(!environment.test.SignUp) return;
  }
}
