import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { FileBlob, FileService } from 'src/app/basic/service/core/file.service';
import { LoadingService } from '../ionic/loading.service';
import { StorageService } from './storage.service';
import { AlertController } from '@ionic/angular';

export interface ConnectStrategyOptions {
  devUrl:string,
  url:string,
  exceptLogUrls:string[]
}
export const ConnectStrategy = new InjectionToken<ConnectStrategyOptions>('ConnectStrategy');

export class ConnectResult<T = any> {
  errorStatus?:number;
  rsCode:number;
  rsObj:T | null;
  rsMsg:string;
  rsMap:T[] | null;
  rqMethod:string;
}

export enum ContentType {
  ApplicationJson = "PROMPT"
}
export interface ConnectOptions {
  contentType?:ContentType,
  loading?:string | boolean,
  parse?:string[],
  cctv?:boolean
}
/* export type Valid<T> = {
  [P in keyof T]?: { message:string, valid:boolean }
} */

type form = 'form';
export class Validator<T> {
  validator:{[P in keyof T]: { message?:string, valid:boolean }} = {} as any;
  constructor(form:T) {
    for(let key in form) {
      this.validator[key] = { valid:null };
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    @Inject(ConnectStrategy) private connectStrategy:ConnectStrategyOptions,
    private http: HttpClient,
    private file: FileService,
    private user: UserService,
    private storage: StorageService,
    private loading: LoadingService,
    private router: Router,
    private alertController:AlertController
  ) {}

  async run(endPoint, data?:{[name:string]:any}, options?:ConnectOptions):Promise<ConnectResult> {
    data = data || {};
    
    const url = options?.cctv ? endPoint : ((environment.production ? this.connectStrategy.url : this.connectStrategy.devUrl) + endPoint);

    if(!environment.production && !this.connectStrategy.exceptLogUrls.includes(url)) {
      console.log(data, url);
    }

    let headers = {};
    let body;
    if(options?.contentType === ContentType.ApplicationJson) {
      body = data;
    } else {
      if(this.user.authToken) headers['Authorization'] = `Bearer ${this.user.authToken.login_token}`;
      body = this.jsonToForm(data);
    }
    let result:ConnectResult;

    let loading:HTMLIonLoadingElement;
    if(!isPlatformServer(this.platformId)) {
      if(options?.loading != null) {
        loading = await this.loading.present({
          // message: options.loading
        });
        await loading.present();
      }
    }

    try {
      const http = await this.http.post(url, body, { headers })
      .pipe(timeout(60000))
      .toPromise() as ConnectResult;
      result = http;
    } catch(error) {
      result = {
        errorStatus: error.status, 
        rsCode: 500,
        rsObj: error.error, 
        rsMsg: '서버 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.', //error.message, 
        rqMethod: '', 
        rsMap:null
      }
    }

    if(options?.parse) {
      if(result.rsObj) {
        options?.parse.forEach(key => {
          try {
            result.rsObj[key] = JSON.parse(result.rsObj[key]);
          } catch(e) {}
        });
      }
      if(result.rsMap) {
        options?.parse.forEach(key => {
          result.rsMap.forEach(rsObj => {
            try {
              rsObj[key] = JSON.parse(rsObj[key]);
            } catch(e) {}
          });
        });
      }
    }

    loading?.dismiss();

    if(!environment.production) console.log(result, url);

    if(result.rsCode === 1002) {
      //this.
      return result;
    } else {
      return result;
    }
  }

  async error(title, res) {
    res.code ? null : res.code = '';
    switch(res.code) {
      case 1002:
      case 2002:
        //ip교체로 인한 세션 마감
        this.storage.user.clear();
        // 퍼블리싱 끝나면 밑에 첫째줄 풀어줘야함
        this.router.navigate(['/admin-web/login'], {replaceUrl: true});
        break;
      default:
        const error = await this.alertController.create({
          // mode: 'ios',
          header: `${title}${res.code && !environment.production ? '['+res.code+']' : ''}`,
          message: res.message,
          buttons: [{
            text: '확인'
          }]
        });
        error.present();
        break;
    }
  }

  private jsonToForm(json) {
    let form = new FormData();
    for(let key in json) {
      if(typeof json[key] !== 'object') form.append(key, json[key]);
      
      else if(json[key] === null || json[key] === undefined) {} //form.append(key, json[key]);

      else if(json[key].constructor.name !== 'Array') {

        if(json[key].constructor.name == 'File') form.append(key, json[key]);

        else if (json[key].constructor.name == 'Blob') {
          const fileName = `attaches_${new Date().getTime()}`;
          form.append(key, json[key], fileName + this.file.getMimeType(json[key]));
        }

        else form.append(key, JSON.stringify(json[key]));
      }
      
      else { // Array
        if(typeof json[key][0] === 'object') {
          
          if(json[key][0].constructor.name == 'File') json[key].forEach(value => form.append(key, value));
  
          else if (json[key][0].constructor.name == 'Blob') {
            json[key].forEach((value:FileBlob) => {
              const fileName = `attaches_${new Date().getTime()}`;
              form.append(key, value, fileName + this.file.getMimeType(value));
            });
          }
          else form.append(key, JSON.stringify(json[key]));
        } 
        else {
          form.append(key, JSON.stringify(json[key]));
        }
      }
    }
    return form;
  }

  private changeTestImgUrl(imgUrl):Promise<string> {
    return new Promise(res => {
      let img = document.createElement('img');
      img.onload = () => {
        img = null;
        res(null);
      }
      img.onerror = () => {
        img = null;
        const reg = /https:\/\/www\.kunyoungcms\.com/;
        if(reg.test(imgUrl)) res(imgUrl.replace(reg, 'http://3.35.5.135'));
        else res(null);
      }
      img.src = imgUrl;
    });
  }
}