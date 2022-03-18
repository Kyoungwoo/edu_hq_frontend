import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  createObjectURL(blob:File | Blob):SafeUrl {
    const url = (window.URL ? URL : window['webkitURL']).createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(url);
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
    blob.name = `file_${new Date().getTime()}${this.getMimeType(blob)}`;
    blob.lastModifiedDate = new Date();
    return blob;
  }
  cutImage(src:string | SafeUrl, opts?:cutImageOptions):Promise<string> {
    return new Promise(async(resolve) => {
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      if(typeof src === 'string' && src.startsWith("data:image")) {
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
      
      img.src = this.sanitizer.sanitize(SecurityContext.URL, src);;
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
  getContentType(url:string) {
    const dot = url.lastIndexOf('.');
    const mineType = url.substring(dot, url.length);
    switch(mineType) {
      case ".mp3":
        return "audio/mpeg";
      case ".wav":
        return "audio/wav";
      case ".jpeg":
        return "image/jpeg";
      case ".png":
        return "image/png";
      case ".gif":
        return "image/gif";
      case ".svg":
        return "image/svg+xml";
      case ".webp":
        return "image/webp";
      case ".pdf":
        return "application/pdf";
      case ".mp4":
        return "video/mp4";
      case ".ics":
        return "text/calendar";
      case ".hwp":
        return "application/octet-stream";
      default:
        return null;
    }
  }
  scriptObj:{[name:string]:{
    url:string,
    loaded:boolean,
    resolve:any[]
  }} = {};
  script(url):Promise<null> {
    return new Promise(resolve => {
      if(!this.scriptObj[url]) {
        this.scriptObj[url] = { url, loaded: false, resolve: [] };
        this.scriptObj[url].resolve.push(resolve);

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = () => {
          this.scriptObj[url].loaded = true;
          this.scriptObj[url].resolve.forEach(_resolve => {
            _resolve(null);
          })
        }
        script.onerror = (error) => {
          console.error(error);
          delete this.scriptObj[url];
        }
        document.body.appendChild(script);
      }
      else if(!this.scriptObj[url].loaded) { this.scriptObj[url].resolve.push(resolve); }
      else resolve(null);
    });
  }
  clone(obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch(e) {
      return obj;
    }
  }
  shallowEqual(obj1, obj2) {
    if(!obj1 || !obj2) return obj1 === obj2;
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}

export interface FileBlob extends Blob {
  name?:string,
  lastModifiedDate?:Date
}
export class FileJson<T = string> {
  insert:{order_no:number, view_type:T}[] = [];
  update:{order_no:number, view_type:T, seq_no:number}[] = [];
  delete:{seq_no:number}[] = [];
}
export interface FutItem<T = string> {
  full_url:string | SafeUrl,
  file_name:string,
  seq_no:number,
  order_no:number,
  file_size:number,
  file_type:string,
  view_type:T,
  content_type:string,
  [name:string]:any
}

export interface cutImageOptions {
  width:number,
  height:number
}