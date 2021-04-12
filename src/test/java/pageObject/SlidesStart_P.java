package pageObject;

import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import framework.AppiumKeyword;
import framework.DriverManager;
import framework.ManageBrowser;
import io.cucumber.datatable.DataTable;

public class SlidesStart_P {

	public static String[] button(String value) {
		String[] object = { "xpath", "//ion-slide//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void isAt() throws Exception {
		AppiumKeyword.exists(button("Sign up"), 10);
	}

	public static void accessTo(String buttonText) throws Exception {
		System.out.println(DriverManager.getAndroidDriver().getContextHandles());
		 AppiumKeyword.changeContext("WEBVIEW_io.ionic.starter");
		 AppiumKeyword.waitToBeClickable(button(buttonText), 20);
		 AppiumKeyword.pushOn(button(buttonText));
	}
	
}
