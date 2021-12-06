//
//  EchoPlugin.swift
//  App
//
//  Created by 김준태 on 2021/12/01.
//

import Foundation
import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let ndefMessage = call.getString("value") ?? ""
            call.resolve(["value":ndefMessage])
        NSLog("어쩌고 저쩌고");
    }
}
