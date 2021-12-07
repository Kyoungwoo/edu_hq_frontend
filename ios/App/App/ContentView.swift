//
//  ContentView.swift
//  App
//
//  Created by 김준태 on 2021/12/07.
//

import SwiftUI
import CoreNFC

@available(iOS 13.0.0, *)
struct ContentView: View {
    @State var urIT = ""
    @State var writer = NFCReader()

    var body: some View {
        VStack{
            TextField("Enter URL", text:$urIT)
            Button(action:{
                writer.scan(theactualdata: urIT)
            }){
                Text("Write To Tag")
            }.padding()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    @available(iOS 13.0.0, *)
    static var previews: some View {
        ContentView()
    }
}

@available(iOS 13.0, *)
class NFCReader: NSObject, ObservableObject, NFCNDEFReaderSessionDelegate {
    
    var theactualData = ""
    var nfcSession: NFCNDEFReaderSession?
    
    func scan(theactualdata:String){
        theactualData = theactualdata
        nfcSession = NFCNDEFReaderSession(delegate: self, queue: nil, invalidateAfterFirstRead: true)
        nfcSession?.alertMessage = "Hold YOR Ipone Near an NFC Card"
        nfcSession?.begin()
    }
    
    func readerSession(_ session: NFCNDEFReaderSession, didInvalidateWithError error: Error) {}
    
    func readerSession(_ session: NFCNDEFReaderSession, didDetectNDEFs messages: [NFCNDEFMessage]) {}
    func readerSession(_ session: NFCNDEFReaderSession, didDetect tags: [NFCNDEFTag]) {
        let str:String = theactualData
        if tags.count > 1 {
            let retryInterval = DispatchTimeInterval.milliseconds(500)
            session.alertMessage = "More than one Tag Deteted, please try again."
            DispatchQueue.global().asyncAfter(deadline: .now() + retryInterval , execute: {
                session.restartPolling()
            })
            return
        }
        let tag = tags.first!
        session.connect(to: tag, completionHandler: {(error: Error?) in
            if nil != error {
                session.alertMessage = "unable To Connect to Tag"
                session.invalidate()
                return
            }
            tag.queryNDEFStatus(completionHandler: {(ndefstatus: NFCNDEFStatus, capacity:Int, error:Error?) in
                guard error == nil else {
                    session.alertMessage = "unable To Connect to Tag"
                    session.invalidate()
                    return
                }
                switch ndefstatus {
                case .notSupported:
                    session.alertMessage = ""
                    session.invalidate()
                case .readWrite:
                    tag.writeNDEF(.init(records: [NFCNDEFPayload.wellKnownTypeURIPayload(string: "\(str)")!]),
                                  completionHandler: {(error:Error?) in
                        if nil != error{
                            session.alertMessage = "write NDEF meassge Failed";
                        } else {
                            session.alertMessage = "You Have successfully activated your tag!"
                        }
                        session.invalidate()
                    })
                case .readOnly:
                    session.alertMessage = "write NDEF meassge Failed";
                    session.invalidate()
                @unknown default:
                    session.alertMessage = "Unknown Error"
                    session.invalidate()
                }
            })
        })
    }
}
