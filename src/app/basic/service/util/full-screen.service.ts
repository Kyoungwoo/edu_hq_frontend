import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {

  constructor() { }
  present() {
    const elem:any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  exit() {
    const elem:any = document;
    if (elem.fullscreenElement) {
      elem.exitFullscreen();
    } 
    // else if (elem.mozExitFullScreen) { /* Firefox */
    //   elem.exitFullscreen();
    // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //   elem.exitFullscreen();
    // } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //   elem.exitFullscreen();
    // }
  }
}
