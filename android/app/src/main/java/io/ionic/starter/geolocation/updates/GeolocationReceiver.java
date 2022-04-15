package io.ionic.starter.geolocation.updates;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class GeolocationReceiver extends BroadcastReceiver {
    private static String TAG = "Dev.Location.LocationReceiver";

    @Override
    public void onReceive(Context context, Intent _) {
        GeolocationUpdates.startBackgroundUpdates(context);
    }
}
