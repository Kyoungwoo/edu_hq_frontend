//
//  tagPlugin.swift
//  App
//
//  Created by 김준태 on 2021/12/13.
//

import Foundation
import Capacitor
import SwiftUI
import CoreNFC

@objc(NfcPlugin)
public class NfcPlugin: CAPPlugin {
    
    let nfcReader = NfcController()
    
//    @objc func echo(_ call: CAPPluginCall) {
//        let value = call.getString("value") ?? ""
//        call.resolve(["value": value])
//    }
    @objc func getData(_ call: CAPPluginCall) {
        nfcReader.beginSession(callback: { (message) in
            print("permission callback called: \(message)");
            call.resolve(["message": "\(message)"]);
        })
    }
    
    @objc func permission(_ call: CAPPluginCall) {
        if #available(iOS 11.0, *) {
            if NFCNDEFReaderSession.readingAvailable {
                //승인
                call.resolve(["permission":"enabled"])
            }
            else {
                //거절
                call.resolve(["permission":"disabled"])
            }
        } else {
            //NFC 지원기기아님
            call.resolve(["message":nil])
        }
    
    }
}
