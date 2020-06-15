package stepdefs;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import helper.AppiumController;

public class Hooks {
    @After
    public void afterScenario(Scenario scenario) {

        if (scenario.isFailed()) {
            scenario.embed(((TakesScreenshot)AppiumController.instance.driver)
                    .getScreenshotAs(OutputType.BYTES), "image/png");
        }
        AppiumController.instance.stop();
    }
    
    
}