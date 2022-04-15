package io.ionic.starter.geolocation.updates;

import com.getcapacitor.JSObject;

public class GeolocationConnectOptions {
    public String url = null;
    public String authorization = null;
    public JSObject body = null;
    public GeolocationConnectOptions() {}
    public GeolocationConnectOptions(JSObject options) {
        if(options != null) {
            this.url = options.getString("url") != null ? options.getString("url") : this.url;
            this.authorization = options.getString("authorization") != null ? options.getString("authorization") : this.authorization;
            this.body = options.getJSObject("body") != null ? options.getJSObject("body") : this.body;
        }
    }
}
