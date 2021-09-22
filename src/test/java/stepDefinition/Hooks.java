package stepDefinition;

import java.util.Date;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.RemoteWebDriver;

import framework.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
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
		
	}
	
//	@After
	public void embedScreenshot(Scenario scenario)  throws Exception {
//		try {
			logger.debug("Taking final screenshot...");
			byte[] screenshot = ((TakesScreenshot) DriverManager.getAndroidDriver()).getScreenshotAs(OutputType.BYTES);
//			scenario.embed(screenshot, "image/png");
			scenario.attach(screenshot, "image/png", "./report/screenshots/" + scenario.getName().replaceAll("\\s+", "") + "--" + new Date());
//		} catch (WebDriverException wde) {
//			System.err.println(wde.getMessage());
//		} catch (ClassCastException cce) {
//			cce.printStackTrace();
//		}
		logger.info("----------------------------------------------------------------------");
		logger.info(scenario.getStatus() + " Finish Scenario: " + scenario.getName());
		logger.info("----------------------------------------------------------------------");
		quitAppium();
	}
}
