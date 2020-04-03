package com.myapp;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
//开头
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  private PermissionListener listener;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here 
      super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "myapp";
  }
}
