package pageObject;

import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import framework.AppiumKeyword;
import framework.DriverManager;
import io.cucumber.datatable.DataTable;

public class SlidesStart_P {

	// Elementos pantalla de cuentas
	public static String[] SIGNUP = {"xpath", "//ion-slide//ion-button[text()='Sign up']"};
	

	public static void isAt() throws Exception {
		AppiumKeyword.exists(SIGNUP, 10);
	}

	public static void Signup() throws Exception {
		 AppiumKeyword.changeContext("WEBVIEW_io.ionic.starter");
		 AppiumKeyword.waitToBeClickable(SIGNUP, 20);
		 AppiumKeyword.pushOn(SIGNUP);
	}
	
}
