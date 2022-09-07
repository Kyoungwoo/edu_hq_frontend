package io.ionic.starter.geolocation.updates;

import android.Manifest;
import android.app.Notification;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Build;
import android.os.IBinder;
import android.os.Looper;
import android.preference.PreferenceManager;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;

import com.getcapacitor.JSObject;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.gson.Gson;

public class GeolocationUpdates extends Service {
    private static String TAG = "aldegad.Geolocation.GeolocationUpdates";
    public static GeolocationUpdatesOptions geolocationUpdatesOptions;
    public static GeolocationUpdatesCallback geolocationUpdatesCallback;

    private static FusedLocationProviderClient fusedLocationClient;
    private LocationCallback locationCallback;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "onCreate");

        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        Gson gson = new Gson();

        String updateOptionJson = sharedPreferences.getString("GeolocationUpdatesOptions", "{}");

        geolocationUpdatesOptions = gson.fromJson(updateOptionJson, GeolocationUpdatesOptions.class);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            Notification notification = GeolocationNotification.build(this, geolocationUpdatesOptions.notification);
            startForeground(1, notification);
        }
        _startUpdates(this, geolocationUpdatesOptions, geolocationUpdatesCallback);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            stopForeground(true);
        }
        _stopUpdates();
    }
    public static void startBackgroundUpdates(Context context) {
        if(fusedLocationClient != null) {
            Intent intent = new Intent(context, GeolocationUpdates.class);
            if (Build.VERSION.SDK_INT >= 26) {
                context.startForegroundService(intent);
            }
            else {
                context.startService(intent);
            }
        }
    }
    public static void startForgroundUpdates(Context context, GeolocationUpdatesOptions options, GeolocationUpdatesCallback callback) {
        geolocationUpdatesOptions = options;
        geolocationUpdatesCallback = callback;

        Gson gson = new Gson();
        String updateOptionJson = gson.toJson(geolocationUpdatesOptions);

        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = sharedPreferences.edit();

        editor.putString("GeolocationUpdatesOptions", updateOptionJson);
        editor.apply();

        Intent intent = new Intent(context, GeolocationUpdates.class);
        if (Build.VERSION.SDK_INT >= 26) {
            context.startForegroundService(intent);
        }
        else {
            context.startService(intent);
        }
    }
    public static void stopUpdates(Context context) {
        Intent intent = new Intent(context, GeolocationUpdates.class);
        if (Build.VERSION.SDK_INT >= 26) {
            context.stopService(intent);
        }
        else {
            context.stopService(intent);
        }
    }
    private void _startUpdates(Context packageContext, GeolocationUpdatesOptions options, GeolocationUpdatesCallback callback) {
        Boolean hasForegroundPermission = ActivityCompat.checkSelfPermission(packageContext, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED;
        if(!hasForegroundPermission) return;

        if(fusedLocationClient != null) fusedLocationClient.removeLocationUpdates(locationCallback);

        fusedLocationClient = LocationServices.getFusedLocationProviderClient(packageContext);
        LocationRequest locationRequest = LocationRequest.create();
        locationRequest.setInterval(300000); /* 5000=10초, 300,000= 10분 */
        locationRequest.setFastestInterval(150000); /* 5000=10초, 150,000= 5분 */
        locationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);
      Log.d(TAG, "_startUpdates 1");
        locationCallback = new LocationCallback() {
            @Override
            public void onLocationResult(LocationResult locationResult) {
                if (locationResult == null) {
                    return;
                }
                Log.d(TAG, "_startUpdates");
                for (Location location : locationResult.getLocations()) {
                    // Update location data
                    Double longitude = location.getLongitude();
                    Double latitude = location.getLatitude();

                    GeolocationConnect.uploadUpdates(options.connect, longitude, latitude);

                    if(callback != null) {
                        Log.d(TAG, "callback called");
                        JSObject res = new JSObject();
                        res.put("longitude", longitude);
                        res.put("latitude", latitude);
                        callback.run(res);
                    }

                    // 주소 부분. 딱히 아직은 쓸일이 없는 듯함. 근데 보통 이런거 플러그인 확장할 때 꼭 쓰이더라고. 그니깐 냅둠.
                    /* try {
                        Geocoder geocoder = new Geocoder(packageContext, Locale.getDefault());

                        List<Address> addresses = geocoder.getFromLocation(
                                location.getLatitude(), location.getLongitude(), 1
                        );
                    } catch (IOException e) {
                        e.printStackTrace();
                    } */
                }
            }
        };

      Log.d(TAG, "_startUpdates 2");
      try {
        fusedLocationClient.requestLocationUpdates(locationRequest,
          locationCallback,
          Looper.getMainLooper())
          .addOnFailureListener(e -> {
            Log.d("addOnFailureListener", e.getMessage());
          })
          .addOnSuccessListener(e -> {
            Log.d("addOnSuccessListener", "-");
          })
          .addOnCanceledListener(() -> {
            Log.d("addOnCanceledListener", "-");
          })
          .addOnCompleteListener(e -> {
            Log.d("addOnCompleteListener", "-");
          });
      } catch (SecurityException ignore){
        Log.e("AppLocationService", "SecurityException - " + ignore.toString(), ignore);
      }

      Log.d(TAG, "_startUpdates 3");
    }
    private void _stopUpdates() {
      try {
        fusedLocationClient.removeLocationUpdates(locationCallback);
        fusedLocationClient = null;
      } catch (Exception e) {}
    }
}
