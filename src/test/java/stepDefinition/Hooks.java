package stepDefinition;

import java.net.URL;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import framework.DriverManager;
import framework.ManageBrowser;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import utils.Logger;

public class Hooks extends DriverManager {

	final private static String CLASS_NAME = "ManageBrowser";
	private static Logger logger = new Logger(CLASS_NAME);
	RemoteWebDriver driver1;

	@Before
	public void before(Scenario scenario) throws Exception {
		
		logger.info("----------------------------------------------------------------------");
		logger.info(" Start Scenario: " + scenario.getName());
		logger.info("----------------------------------------------------------------------");
		framework.Configuration.loadConfiguration("testResources/framework.properties");
		startDriver();
		DriverManager.getAndroidDriver().resetApp();
	}

	@After
	public void embedScreenshot(Scenario scenario)  throws Exception {
		if (scenario.isFailed()) {
			try {
				logger.debug("Taking screenshot due to the test has failed...");
				byte[] screenshot = ((TakesScreenshot) DriverManager.getAndroidDriver()).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException wde) {
				System.err.println(wde.getMessage());
			} catch (ClassCastException cce) {
				cce.printStackTrace();
			}
		}
		logger.info("----------------------------------------------------------------------");
		logger.info(" Finish Scenario: " + scenario.getName());
		logger.info("----------------------------------------------------------------------");
		quitAppium();
	}
}
