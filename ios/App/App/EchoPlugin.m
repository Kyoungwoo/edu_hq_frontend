//
//  EchoPlugin.m
//  App
//
//  Created by 김준태 on 2021/12/01.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(EchoPlugin, "nfc",
    CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
