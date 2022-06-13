package io.ionic.starter;

import android.os.Build;
import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import io.ionic.starter.geolocation.GeolocationPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(DarkModePlugin.class);
    registerPlugin(NfcPlugin.class);
    registerPlugin(QrPlugin.class);
    registerPlugin(GeolocationPlugin.class);
  }

  @Override
  public void onDestroy() {
    super.onDestroy();

  }
}
