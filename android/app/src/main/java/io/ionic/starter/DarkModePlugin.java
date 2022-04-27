package io.ionic.starter;

import android.content.res.Configuration;
import android.os.Build;
import android.webkit.WebSettings;

import androidx.annotation.RequiresApi;

import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "DarkMode")
public class DarkModePlugin extends Plugin {
  @Override
  protected void handleOnResume() {
    super.handleOnResume();

      int nightModeFlags = getContext().getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
      WebSettings webSettings = this.bridge.getWebView().getSettings();

      if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
          webSettings.setForceDark(WebSettings.FORCE_DARK_ON);
        }
      } else {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
          webSettings.setForceDark(WebSettings.FORCE_DARK_OFF);
        }
      }

  }
}
