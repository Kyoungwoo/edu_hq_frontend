//
//  NfcComtroller.swift
//  App
//
//  Created by 김준태 on 2021/12/13.
//

import Foundation
import UIKit
import CoreNFC

class NfcController:NSObject, NFCNDEFReaderSessionDelegate {
    
    var nfcCallBack:((_ String:String) ->())!;
    
    func readerSession(_ session: NFCNDEFReaderSession, didDetectNDEFs messages: [NFCNDEFMessage]) {
        
        for message in messages {
            
            for record in message.records {
                print("message",record)
                if let nfcMessage = String(data: record.payload,encoding:.ascii){
                    if(nfcCallBack != nil) {
                        
                        nfcCallBack(nfcMessage);
                        session.invalidate()
                    }
                }
//                print("New Record Found:")
//                print(record.identifier)
//                print(record.payload)
//                print(record.type)
//                print(record.typeNameFormat)
            }
        }
    }
    
    
    func readerSession(_ session: NFCNDEFReaderSession, didInvalidateWithError error: Error) {
        print("NFC NDEF Invalidated")
        print("\(error)")
    }
    
    func beginSession(_callback:@escaping (_ String:String) ->()) {
        let session = NFCNDEFReaderSession(delegate: self, queue: nil, invalidateAfterFirstRead: false)
        
        self.nfcCallBack = _callback;
        
        session.begin()
    }

}
