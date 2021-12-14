//
//  scanPlugin.m
//  App
//
//  Created by 김준태 on 2021/12/13.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(NfcPlugin, "Nfc",
    CAP_PLUGIN_METHOD(getData, CAPPluginReturnPromise);
   CAP_PLUGIN_METHOD(permission, CAPPluginReturnPromise);
           
)
