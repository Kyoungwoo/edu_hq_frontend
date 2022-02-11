import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { }

  wait(milliseconds = 500) {
    return new Promise(res => setTimeout(res, milliseconds));
  }
  toggleWait(callback) {
    return new Promise(res => {
      const roof = async() => {
        const boolean = await callback();
        console.log(boolean);
        if(boolean) {
          setTimeout(() => {
            roof();
          }, 1000);
        } else {
          res(false);
        }
      }
      roof();
    });
  }
  timeout(promise, milliseconds) {
    return Promise.race([
      promise,
      this.wait(milliseconds)
    ])
  }
}