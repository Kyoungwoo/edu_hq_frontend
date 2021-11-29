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
    companyLicenseNo: (number:string | number) => {
      return String(number).replace(/(\d{3})(\d{2})(\d{0,5})/, "$1-$2-$3");
    },
    /** 숫자를 01, 001 등으로 표현해준다. */
    fix: (number:string | number, length:number, min?:number, max?:number) => {
      number = Number(number);
      
      if(min) number = Math.max(min, number);
      if(max) number = Math.min(max, number);
      number = String(number);
      
      if(number.length < length) number = new Array(length - number.length).fill('0').join('') + number;
      else if(number.length > length) number = number.substring(number.length - length, number.length);
      
      return number;
    }
  }
}
