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

public class Menu_P extends General_P {

	public static String[] buttonMenuText(String value) {
		String[] object = { "xpath", "//ion-menu//*[text()='$$']" };
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
				case "Who viewed my profile":
				case "Settings":
				case "FAQs":
				case "View your profile":
				case "Create page":
					selector = buttonMenuText(key);
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

	public static void validarErroresLogIn(DataTable table) throws Exception {
		List<List<String>> data = table.asLists();

		for (int i = 0; i < data.size(); i++) {
			String field = data.get(i).get(0);
			String value = data.get(i).get(1);
			System.out.println(value);
			if (value.contains("error"))
				AppiumKeyword.verify(errorField(field), 10);
			else
				AppiumKeyword.isNotPresent(errorField(field));
		}
	}

}
