package io.ionic.starter;

import android.graphics.Color;
import android.webkit.WebView;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Qr")
public class QrPlugin extends Plugin {
  @PluginMethod()
  public void transparent(PluginCall call) {
    WebView webView = this.bridge.getWebView();

    webView.setBackgroundColor(Color.TRANSPARENT);
    webView.setLayerType(WebView.LAYER_TYPE_SOFTWARE, null);
  }
}
