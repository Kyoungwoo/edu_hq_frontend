package io.ionic.starter.geolocation.connect;

import java.util.Map;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Header;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.PartMap;
import retrofit2.http.Url;

public interface APIInterface {
    @Multipart
    @POST
    Call<APIResponse> run(@Url String url, @Header("Authorization") String authorization, @PartMap Map<String, RequestBody> params);
}
