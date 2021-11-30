import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  createObjectURL(blob:File | Blob):string {
    return (window.URL ? URL : window['webkitURL']).createObjectURL(blob);
  }
  async dataUrlToBlob(dataUrl:string):Promise<FileBlob> {
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const ab = await fetch(dataUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      return new Uint8Array(buffer);
    });
    const blob:FileBlob = new Blob([ab], {
      type: mimeString
    });
    blob.name = "file_" + this.getMimeType(blob);
    blob.lastModifiedDate = new Date();
    return blob;
  }
  cutImage(src:string, opts?:cutImageOptions):Promise<string> {
    return new Promise(async(resolve) => {
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      if(src.startsWith("data:image")) {
        const blob = await this.dataUrlToBlob(src);
        src = this.createObjectURL(blob);        
      }
      const img = new Image();
      img.onload = () => {
        const imgAspectRatio = img.width/img.height;
        const distAspectRatio = opts?.width && opts?.height ? opts.width/opts.height : imgAspectRatio;

        let imgWidth:number;
        let imgHeight:number;
        
        if(distAspectRatio > imgAspectRatio) {
          imgWidth = img.width;
          imgHeight = img.width / distAspectRatio;
        } else {
          imgWidth = img.height * distAspectRatio;
          imgHeight = img.height;
        }

        c.width = opts?.width || imgWidth;
        c.height = opts?.height || imgHeight;

        ctx.drawImage(img,
          Math.max(0, (img.width - imgWidth) / 2),
          Math.max(0, (img.height - imgHeight) / 2),
          imgWidth, imgHeight, 0, 0, c.width, c.height);

        resolve(c.toDataURL("image/jpeg", 0.8));
      }
      img.src = src;
    });
  }

  getMimeType(blob:FileBlob) {
    switch(blob.type) {
      case "audio/mpeg":
        return ".mp3";
      case "audio/wav":
        return ".wav";
      case "image/jpeg":
        return ".jpeg";
      case "image/png":
        return ".png";
      case "image/gif":
        return ".gif";
      case "image/svg+xml":
        return ".svg";
      case "image/webp":
        return ".webp";
      case "application/pdf":
        return ".pdf";
      case "video/mp4":
        return ".mp4";
      case "text/calendar":
        return ".ics";
      case "application/octet-stream":
        return ".hwp";
      default:
        return null;
    }
  }
}

export interface FileBlob extends Blob {
  name?:string,
  lastModifiedDate?:Date
}
export interface FileJson {
  insert:{order_no:number, view_type:string}[],
  update:{order_no:number, view_type:string, seq_no:number}[],
  delete:{seq_no:number}[]
}
export interface FutItem {
  file_url:string,
  file_name:string,
  seq_no:number,
  order_no:number,
  file_size:number,
  file_type:string,
  view_type:string,
  content_type:string,
  [name:string]:any
}

export interface cutImageOptions {
  width:number,
  height:number
}