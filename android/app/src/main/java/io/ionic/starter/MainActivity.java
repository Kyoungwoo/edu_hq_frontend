package io.ionic.starter;

import android.content.IntentSender;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.NonNull;

import com.getcapacitor.BridgeActivity;
import com.google.android.gms.common.api.ResolvableApiException;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.LocationSettingsRequest;
import com.google.android.gms.location.LocationSettingsResponse;
import com.google.android.gms.location.SettingsClient;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;

import io.ionic.starter.geolocation.GeolocationPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(DarkModePlugin.class);
    registerPlugin(NfcPlugin.class);
    registerPlugin(QrPlugin.class);
    registerPlugin(GeolocationPlugin.class);

    gps();
  }

  @Override
  public void onDestroy() {
    super.onDestroy();

  }

  public void gps() {
    LocationRequest locationRequest = LocationRequest.create();
    locationRequest.setInterval(300000); /* 6000=10초, 300,000= 5분 */
    locationRequest.setFastestInterval(150000); /* 6000=10초, 150,000= 2.5분 */
    locationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);

    LocationSettingsRequest.Builder builder = new LocationSettingsRequest.Builder().addLocationRequest(locationRequest);
    SettingsClient client = LocationServices.getSettingsClient(this);
    Task<LocationSettingsResponse> task = client.checkLocationSettings(builder.build());

    task.addOnSuccessListener(this, new OnSuccessListener<LocationSettingsResponse>() {
      @Override
      public void onSuccess(LocationSettingsResponse locationSettingsResponse) {
        // All location settings are satisfied. The client can initialize
        // location requests here.
        // ...
      }
    });

    task.addOnFailureListener(this, new OnFailureListener() {
      @Override
      public void onFailure(@NonNull Exception e) {
        if (e instanceof ResolvableApiException) {
          // Location settings are not satisfied, but this can be fixed
          // by showing the user a dialog.
          try {
            // Show the dialog by calling startResolutionForResult(),
            // and check the result in onActivityResult().
            ResolvableApiException resolvable = (ResolvableApiException) e;
            resolvable.startResolutionForResult(MainActivity.this,
              0x1);
          } catch (IntentSender.SendIntentException sendEx) {
            // Ignore the error.
          }
        }
      }
    });
  }
}
