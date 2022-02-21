import { Injectable } from '@angular/core';

type WaitCallback = () => any;
@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { }

  wait(params:number | WaitCallback = 500) {
    if(typeof params === 'number') {
      const milliseconds = params;
      return new Promise(res => setTimeout(res, milliseconds));
    } else {
      const callback = params;
      const max = 20;
      let step = 0;
      return new Promise(res => {
        const roof = async() => {
          step++;
          if(step > max) {
            res(false);
            return;
          }
          const returnValue = await callback();
          if(returnValue) {
            res(true);
          } else {
            setTimeout(() => {
              roof();
            }, 1000);
          }
        }
        roof();
      });
    }
  }
  toggleWait(callback) {
    return new Promise(res => {
      const roof = async() => {
        const boolean = await callback();
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