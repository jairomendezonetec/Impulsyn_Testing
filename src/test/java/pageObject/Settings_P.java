package pageObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import framework.AppiumKeyword;
import framework.DriverManager;
import io.cucumber.datatable.DataTable;

public class Settings_P extends General_P {

	public static String[] buttonText(String value) {
		String[] object = { "xpath", "//app-settings//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	

	public static void accessTo(String option) throws Exception {
		List<String> optionList = new ArrayList<String>();
		optionList.add(option);
				
		List<List<String>> data= new ArrayList<List<String>>();
		data.add(optionList);
		verifyAndAccess(data, true);
	}
	
	public static void verifyScreen(DataTable table) throws Exception {
		List<List<String>> data = table.asLists();
		verifyAndAccess(data, false);
		
	}
	public static void verifyAndAccess(List<List<String>> data, boolean access) throws Exception {
		String[] selector =null;

		System.out.println(data);
		for (int i = 0; i < data.size(); i++) {
			String key = data.get(i).get(0);

			switch (key) {
				case "Language":
				case "Change password":
				case "Edit profile":
				case "Privacy":
				case "Notifications":
				case "Log out":
					selector = buttonText(key+" ");
					break;
				default:
					throw new Error(key +" is not valid option");
			}
			AppiumKeyword.verify(selector, 1);
		}
		
		if(access) {
			AppiumKeyword.pushOn(selector);
		}
	}

}
