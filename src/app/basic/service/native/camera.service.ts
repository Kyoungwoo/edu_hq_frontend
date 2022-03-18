import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FileService } from '../core/file.service';

export interface CameraOptions {
  promptLabelHeader?:string,
  promptLabelCancel?:string,
  promptLabelPhoto?:string,
  promptLabelPicture?:string,
  width?:number,
  height?:number
}

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
    private file: FileService
  ) { }

  async getPhoto(opts?:CameraOptions) {
    opts = {
      promptLabelHeader: opts?.promptLabelHeader || "이미지선택",
      promptLabelCancel: opts?.promptLabelCancel || "취소",
      promptLabelPhoto: opts?.promptLabelPhoto || "앨범",
      promptLabelPicture: opts?.promptLabelPicture || "카메라",
      width: opts?.width,
      height: opts?.height
    }
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      ...opts
    });
    let dataUrl:string;
    if(opts?.width && opts?.height) {
      dataUrl = await this.file.cutImage(photo.dataUrl, {
        width: opts.width,
        height: opts.height
      });
    } else {
      dataUrl = photo.dataUrl;
    }
    const blob = await this.file.dataUrlToBlob(dataUrl);
    return blob;
  }
}