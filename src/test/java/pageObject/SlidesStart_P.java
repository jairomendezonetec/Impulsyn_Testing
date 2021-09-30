package pageObject;

import framework.AppiumKeyword;
import framework.Configuration;
import framework.Configuration.Global;
import framework.DriverManager;

public class SlidesStart_P extends General_P {

	public static String[] button(String value) {
		String[] object = { "xpath", "//ion-slide//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void isAt() throws Exception {
		AppiumKeyword.exists(button("Sign up"), 10);
	}

	public static void accessTo(String buttonText) throws Exception {
		 AppiumKeyword.changeContext("WEBVIEW");
		 if (DriverManager.getGlobals().DRIVER.contains("ios")) {
				AppiumKeyword.changeContext("NATIVE_APP");
			if (AppiumKeyword.exists(name("Allow"), 3 ))
					AppiumKeyword.pushOn(name("Allow"));
				AppiumKeyword.changeContext("WEBVIEW");
	    	}
		 AppiumKeyword.waitToBeClickable(button(buttonText), 20);
		 AppiumKeyword.pushOn(button(buttonText));
		 if(buttonText.contains("Sign up")) {
			 AppiumKeyword.pushOn(containsText("Accept", "app-cookies"));
			 AppiumKeyword.dragToFind(containsText("Accept", "app-data-protection"), "UP", 5);
			 AppiumKeyword.pushOn(containsText("Accept", "app-data-protection"));
		 }
	}
	
}
