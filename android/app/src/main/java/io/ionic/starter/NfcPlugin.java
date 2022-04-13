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

@CapacitorPlugin(name = "Nfc")
public class NfcPlugin extends Plugin {

    public static PluginCall getNfcCall = null;

    @PluginMethod()
    public void permission(PluginCall call) {
      JSObject res = new JSObject();
       NfcAdapter nfcAdapter = NfcAdapter.getDefaultAdapter(getContext());
       if(nfcAdapter == null) {
         res.put("permission", null);
       } else if(!nfcAdapter.isEnabled()) {
         res.put("permission", "disabled");
       } else {
         res.put("permission", "enabled");
       }
       call.resolve(res);
    }
  @PluginMethod()
  public void getData(PluginCall call) {
    getNfcCall = call;
  }

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
          if(NfcPlugin.getNfcCall != null) {
            JSObject ret = new JSObject();
            ret.put("message", msg.substring(3));
            NfcPlugin.getNfcCall.resolve(ret);
          }
        }

      } else {
        JSObject ret = new JSObject();
        ret.put("message", null);
        NfcPlugin.getNfcCall.resolve(ret);
      }
    }
  }
}
