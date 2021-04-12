package pageObject;

import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import framework.AppiumKeyword;
import framework.DriverManager;
import io.cucumber.datatable.DataTable;

public class Signup_P extends General_P{

	public static String[] button(String value) {
		String[] object = { "xpath", "//app-signup//ion-button[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void signUp(DataTable table, boolean errors) throws Exception {
		
		List<List<String>> data = table.asLists();

		AppiumKeyword.waitToBePresent(button("Sign up"), 10);

		System.out.println(data);
		for (int i = 0; i < data.size(); i++) {
			String key = data.get(i).get(0);
			String value = data.get(i).get(1);

			AppiumKeyword.writeInto(input(key), value);
		}

		AppiumKeyword.closeKeyboard();
		AppiumKeyword.pushOn(button("Sign up"));

		if (!errors) {
			AppiumKeyword.waitToVanish(button("Sign up"), 10);
			AppiumKeyword.waitToBePresent(button("Verify"), 10);
		}
	}

}
