package pageObject;

import framework.AppiumKeyword;
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
		System.out.println(DriverManager.getAndroidDriver().getContextHandles());
		 AppiumKeyword.changeContext("WEBVIEW_com.impulsyn.onetec");
		 AppiumKeyword.waitToBeClickable(button(buttonText), 20);
		 AppiumKeyword.pushOn(button(buttonText));
		 if(buttonText.contains("Sign up")) {
			 AppiumKeyword.pushOn(containsText("Accept", "app-cookies"));
			 AppiumKeyword.dragToFind(containsText("Accept", "app-data-protection"), "UP", 5);
			 AppiumKeyword.pushOn(containsText("Accept", "app-data-protection"));
		 }
	}
	
}
