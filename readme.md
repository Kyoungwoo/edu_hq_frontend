# Setup

## Windows

### WEB

### nodejs 16 버전 설치

- https://nodejs.org/ko/

### python 2.7.18 버전 설치 ( 환경 변수 설치옵션 체크 )

- https://www.python.org/

### npm 프라이빗 레포지토리 로그인하기

- ```
  Sheetjs
      npm login --scope=@sheet --registry=https://pylon.sheetjs.com:54111/
      Credentials:
      Username: gsilkr
      Password: VqGUeQ6QHcUWEdJw
      Email Address: me@sheetjs.com
       npm install @sheet/image
     
  ```

### 의존성 설치 후 실행

- web

```

  // web
  yarn install && yarn start:web

```

- android

1. Android Studio 설치
2. Android Emulator 생성
3. Android SDK는 위 2개 과정에서 설치됨
4. ./android 폴더에 local.propertis 파일 생성 후 SDK 경로 지정
   ![image](https://user-images.githubusercontent.com/62597091/183491615-bfb16964-9ba5-46de-a2eb-e44e4712ec3d.png)
   ![image](https://user-images.githubusercontent.com/62597091/183491718-962dd7f8-cba0-4f8c-b347-0b87a5d81c43.png)
   ```
   sdk.dir=[ANDROID_SDK_ROOT]
   ```
5. 스크립트 실행
   ```
   yarn clean:android
   yarn setup:android
   yarn start:android
   ```
