package helper;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.io.File;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class AppiumController {

	public static OS executionOS = OS.ANDROID;

	public enum OS {
		ANDROID
	}

	public static AppiumController instance = new AppiumController();
	public AppiumDriver<?> driver;


	@BeforeTest
	public void start() throws Exception {

		if (driver != null) {
			return;
		}
		switch (executionOS) {
		case ANDROID:
			File classpathRoot = new File(System.getProperty("user.dir"));
			File appDir = new File(classpathRoot, "/app/Android");
			File app = new File(appDir, "getir-testing-case-study.apk");
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setCapability("platformName", "Android");
			capabilities.setCapability("deviceName", "EmulatorEce");
			// capabilities.setCapability("automationName", "UiAutomator2");
			capabilities.setCapability("app", app.getAbsolutePath());
			capabilities.setCapability("appPackage", "com.getir.casestudy.dev");
			capabilities.setCapability("appActivity", "com.getir.casestudy.modules." + "splash.ui.SplashActivity");
			capabilities.setCapability("unicodeKeyboard", true);
			capabilities.setCapability("resetKeyboard", true);
			driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			break;
		}
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	@AfterTest
	public void stop() throws Exception {
		if (driver != null) {
			driver.quit();
			driver = null;

		}

	}
}
