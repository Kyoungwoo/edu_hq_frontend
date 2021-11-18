import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { }

  wait(milliseconds) {
    return new Promise(res => setTimeout(res, milliseconds));
  }
  timeout(promise, milliseconds) {
    return Promise.race([
      promise,
      this.wait(milliseconds)
    ])
  }
}