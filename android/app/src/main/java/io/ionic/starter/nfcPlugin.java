package io.ionic.starter;

import android.content.Intent;
import android.nfc.NdefMessage;
import android.nfc.NfcAdapter;
import android.os.Parcelable;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name="nfc")
public class nfcPlugin extends Plugin {

  public static com.getcapacitor.PluginCall getNfcCall = null;

  @PluginMethod()
  public void getData(PluginCall call) { getNfcCall = call; }

  @Override
  protected void handleOnNewIntent(Intent intent) {
    super.handleOnNewIntent(intent);
    if (NfcAdapter.ACTION_NDEF_DISCOVERED.equals(intent.getAction())) {
      Parcelable[] rawMessages =
        intent.getParcelableArrayExtra(NfcAdapter.EXTRA_NDEF_MESSAGES);
      if (rawMessages != null) {
        NdefMessage ndefMessage = (NdefMessage) rawMessages[0];
        String msg = new String(ndefMessage.getRecords()[0].getPayload());
        if(msg.length() >= 3) {
          if(nfcPlugin.getNfcCall != null) {
            JSObject ret = new JSObject();
            ret.put("ndefMessage", msg.substring(3));
            nfcPlugin.getNfcCall.resolve(ret);
            Log.d("value", "handleOnNewIntent: ret ");
          }
        }
      }
//      else {
//        JSObject ret = new JSObject();
//        ret.put("message", null);
//        NfcPlugin.getNfcCall.resolve(ret);
//      }
    }
  }
}
