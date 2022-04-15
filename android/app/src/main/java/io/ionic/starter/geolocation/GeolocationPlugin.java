package io.ionic.starter.geolocation;

import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import io.ionic.starter.geolocation.alert.GeolocationAlertOptions;
import io.ionic.starter.geolocation.permission.GeolocationPermission;
import io.ionic.starter.geolocation.permission.GeolocationPermissionOptions;
import io.ionic.starter.geolocation.updates.GeolocationConnectOptions;
import io.ionic.starter.geolocation.updates.GeolocationNotificationOptions;
import io.ionic.starter.geolocation.updates.GeolocationUpdates;
import io.ionic.starter.geolocation.updates.GeolocationUpdatesOptions;

@CapacitorPlugin(name = "Geolocation")
public class GeolocationPlugin extends Plugin {
    private static String TAG = "aldegad.gelolocation.GeolocationPlugin";

    private Geolocation implementation = new Geolocation(); // 아직 용도를 잘 모르겠다. 실력이 부족한듯.

    @PluginMethod()
    public void requestPermission(PluginCall call) {
        GeolocationPermissionOptions options = new GeolocationPermissionOptions();
        options.promptAlert = call.getObject("promptAlert", null) != null ? new GeolocationAlertOptions(call.getObject("promptAlert", null)) : options.promptAlert;
        options.deniedAlert = call.getObject("deniedAlert", null) != null ? new GeolocationAlertOptions(call.getObject("deniedAlert", null)) : options.deniedAlert;
        GeolocationPermission.requestPermission(options, res -> {
            call.resolve(res);
        });
    }
    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void startLocationUpdates(PluginCall call) {
        call.setKeepAlive(true);

        GeolocationUpdatesOptions options = new GeolocationUpdatesOptions();
        options.background = call.getBoolean("background", options.background);
        options.notification = new GeolocationNotificationOptions(call.getObject("notification", null));
        options.connect = new GeolocationConnectOptions(call.getObject("connect", null));

        GeolocationUpdates.startForgroundUpdates(getContext(), options, res -> {
            call.resolve(res);
        });
    }
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void stopLocationUpdates(PluginCall call) {
        GeolocationUpdates.stopUpdates(getActivity());
        call.resolve();
    }

    @Override
    protected void handleOnStart() {
        super.handleOnStart();
        AppCompatActivity activity = getActivity();
        GeolocationPermission.onCreate(activity);
    }

    @Override
    protected void handleOnResume() {
        super.handleOnResume();
        GeolocationPermission.onResume();
    }
}
