import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  number = /^[\d]+$/;
  english = /^[a-zA-Z]+$/;
  special = /^[!@#$%^&*_]+$/;
  numberEnglishSpecial = /^[0-9a-zA-Z!@#$%^&*_]+$/;

  constructor() { }

  random = {
    id: (str, num = 10) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const length = characters.length;
      let result = '';
      for(let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * length));
      }
      return str + '_' + result;
    },
    email: () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const length = characters.length;
      let result = '';
      for(let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * length));
      }
      return result + '@naver.com';
    },
    phone: () => {
      return '010' + Math.random().toString().slice(2, 10);
    },
    businessNo: () => {
      return Math.random().toString().slice(2, 12);
    },
    file: () => {
      const binary = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAAAclBMVEUAAAD///+mpqbi4uLOzs6tra3w8PDZ2dmYmJjm5ua+vr5jY2O4uLhGRkZtbW3d3d35+fnHx8eLi4vT09Pz8/M8PDyEhIR0dHR6enrExMRQUFBbW1saGhqRkZGfn5/r6+tEREReXl4rKyswMDASEhIkJCSHFvSNAAAE1klEQVR4nO2d3XaqMBBGBQRFVBD89wja077/Kx7pqasy83U1TQ2KfvvCi2mAZHdCF1MTeoXn9TOv75FPeoWXDbN5cet+3BW9QX+9H60p5ZJTpnj53KOUS06ZUgyKYlP0BcXADHnc6UiDCIyhZrYY9f2rPvT+u5mXcdAgLntGvFSBIM7jbyOn2F7F+qE6cKZDm7EKjUa6lVHnt7Lz8ew99CElGskUGptJmejk8w0iKFbNVCjWfxVTPdPTgQ4ZdX6qL5jUn3ckJbaVMqAU91JiSmlekJlCKeZSOH3EBZkplEIplEIplNJRKQeT4bqWkqpQ0J6UP8u15KhLEnsDAVeVkvqqD2EiO7pyJWWhx5brVnpGOZaC0iKSjbLbStmqRjeQEstGc0qhlGtL+Vk58kmkMFPEBSmF08dcCjNFXJBSKIVSKOXJpAS3lbKRPx45lhKqiPU/2GPQ1Uo2snhKnq9DwRqc5G0sW4U73ervZiRQJz8xVZFyqULDXIeG8uwjH3S1lMehRhM1nvJQh347fUASLNVxr7qR9fRBaaHmCijGtXlPMZLyRzey/n4KkhKoVsWjSDH769OClJRSmmdnplCKuRROH3F2ZgqlUAqlUAqlUMr9SbGtp1hLAfUUbaDSxZMK9As8JStPZvWUqlFPWfkCWE8JZSt/qiKgxPKq6zDW9RS05GavOpGrEDpuosYzXNShVjLFNY4yxe09xTWdvNG6hlIAlAKgFAClACgFQCkASgFQCoBSAJQCoBRAa/UUQym6LPI4T8mqnoK/n+KXkkRFyq1rB4pc9WG5lJEhOO4q9ZRH4yr1lEfD1RrCTkMpAEoBUAqAUgCUAqAUAKUAKAVAKQBKAVAK4CrfT3k0vqun7HJBYn2p14nkRUUmkzejcy3UcQsQsu3pYi9HvT5c1FNQXcoWvTIMlOc8VMTS6D10Yr3XEPpyky2ri0xxKwUtl0M732jAbktmawhtoRRALWVPKU1qKWtKacJMAfCeAqAUAKUAKAVAKQBKAVAK4LZSzB4IjaSgJUC2uJOSNfFKGTnFzDKlUAcO+ipktiOvGdMsiiIHUjrNrt78hVKauJo+nYZSAK6ekjuNq3pKp6ml9CmlCe8pAEoBUAqAUgCUAqAUAKUAKAVAKYDk4i247UvZBuLlxenMT1Wo9W4di8/3JbcvJVFVRbD1atR6t247fbQUsCfTNb+OYwalACgFQCkASgFQCoBSAJQCoBQApQAoBUApgHuTwgfC3jZOBbNQRtJ+6906DoqiOK/3Cau4QYXeh/NoJGLQcVzsgtPvgsvlmvc1riGkFAClACgFQCkASgFQCoBSAJQCoBQApQAoBUApgO9eDZzPNg1m4EXID8dWDHqzCd9D50wJo6pBVGZzSdZpUYknhxNs55UYdbGrQ19OH7Tnyf7WA/sNoP65++k9Ba37oxRKoRRKoZQPKAVAKQBKAVAKgFIAlAKgFICFFLX16hM8EEZH7alRT1mPBSsZOGG/HesdMFHD8RcqVB7qz3OmjOWmL77auyVDU6o7b4JSe91k8U6FgqQO/aie0mUpkd4V6To3WkqhFEqhFEqhFEqhFEqhFEqhlEeT0qUHQpNXA8+1lEhLqY7153m9z1C+JLeUARxDoWHbGHULtPoq1AMJ8fRQCoBSAP8A5cbxIRuVHvAAAAAASUVORK5CYII=`;
      return this.dataUrlToBlob(binary);
    }
  }

  replace = {
    /** 순수한 숫자만 남긴다. */
    number: (number:string | number) => {
      return String(number).replace(/[^\d]/g, "");
    },
    /** 숫자를 3자리씩 끊어준다. ex) 123,456,789 */
    price: (number:string | number) => {
      let sNumber = String(number);
      let sNumber_2 = [];
      if(sNumber.indexOf('.') != -1){
        sNumber_2 = sNumber.split('.');
        let str = sNumber_2[0].replace(/[^0-9]/g, '');
        let price = str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return sNumber.startsWith('-') ? '-' + price + '.' + sNumber_2[1] : price + '.' + sNumber_2[1];
      } else {
        let str = sNumber.replace(/[^0-9]/g, '');
        let price = str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return sNumber.startsWith('-') ? '-' + price : price;
      }
    },
    /** 전화번호. ex) 010-1234-5678 */
    phone: (number:string | number) => {
      return String(number).replace(/(\d{3})(\d{3,4})(\d{0,4})/, "$1-$2-$3");
    },
    /** YYYY-MM-DD */
    date: (number:string | number) => {
      return String(number).replace(/(\d{4})(\d{2})(\d{0,2})/, "$1-$2-$3");
    },
    /** 사업자 등록번호 */
    businessRegisterNo: (number:string | number) => {
      if(String(number).length > 10) return String(number);
      return String(number).replace(/(\d{3})(\d{2})(\d{0,5})/, "$1-$2-$3");
    },
    /** 숫자를 01, 001 등으로 표현해준다. */
    fix: (number:string | number, length:number, min?:number, max?:number) => {
      if(typeof number === 'string') number = Number(number.replace(/\D/g, ''));
      
      if(min) number = Math.max(min, number);
      if(max) number = Math.min(max, number);
      number = String(number);
      
      if(number.length < length) number = new Array(length - number.length).fill('0').join('') + number;
      else if(number.length > length) number = number.substring(number.length - length, number.length);
      
      return number;
    }
  }


  // 임시. 사용하지 말것. 지우지 말것.
  private async dataUrlToBlob(dataUrl:string):Promise<any> {
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const ab = await fetch(dataUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      return new Uint8Array(buffer);
    });
    const blob:any = new Blob([ab], {
      type: mimeString
    });
    blob.name = `file_${new Date().getTime()}${this.getMimeType(blob)}`;
    blob.lastModifiedDate = new Date();
    return blob;
  }
  private getMimeType(blob:any) {
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
