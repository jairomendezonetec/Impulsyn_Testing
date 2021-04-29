package pageObject;

import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import framework.AppiumKeyword;
import framework.DriverManager;
import io.cucumber.datatable.DataTable;

public class General_P {

	public static String[] spinner = { "xpath", "//app-spinner" };
	public static String[] input(String value) {
		String[] object = { "xpath", "//*[text()='$$']/../..//input" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static String[] errorField(String value) {
		String[] object = { "xpath", "//*[text()='$$']/../..//*[@class='form-error-message']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] ariaLabel(String value) {
		String[] object = { "xpath", "//*[@aria-label='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] text(String value) {
		String[] object = { "xpath", "//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] containsText(String value) {
		String[] object = { "xpath", "//*[contains(text(),'$$')]" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void validarErroresCampos(DataTable table) throws Exception {
		List<List<String>> data = table.asLists();

		for (int i = 0; i < data.size(); i++) {
			String field = data.get(i).get(0);
			String value =data.get(i).get(1);
			System.out.println(value);
			if(value.contains("error"))
				AppiumKeyword.verify(errorField(field), 10);
			else
				AppiumKeyword.isNotPresent(errorField(field));
		}
	}

}
