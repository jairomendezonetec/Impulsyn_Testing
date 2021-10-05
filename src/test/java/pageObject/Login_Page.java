package pageObject;

import java.util.List;

import framework.AppiumKeyword;
import framework.DriverManager;
import io.cucumber.datatable.DataTable;

public class Login_Page extends General_P {

	public static String[] button(String value) {
		String[] object = { "xpath", "//app-login//ion-button[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	}

	public static String[] inputValid(String value) {
		String[] object = { "xpath", "//*[text()='$$']/../..//input/.." };
		object[1] = object[1].replace("$$", value);
		return object;
	}

	public static String[] remember = { "xpath", "//*[@name='remember']" };


	public static void logIn(DataTable table, boolean errors) throws Exception {
		List<List<String>> data = table.asLists();

		AppiumKeyword.waitToBePresent(button("Log in"), 10);

		System.out.println(data);
		for (List<String> datum : data) {
			String key = datum.get(0);
			String value = datum.get(1);

			if (key.equals("Remember me") && value.equals("false"))
				AppiumKeyword.pushOn(remember);
			else
				AppiumKeyword.writeInto(input(key), value);
		}
		General_P.closeKeyboard();
		AppiumKeyword.pushOn(button("Log in"));

		if (!errors) {
			AppiumKeyword.waitToVanish(button("Log in"), 10);
			waitToSpinner();
			if(AppiumKeyword.exists(text(" Accept"), 1))
				AppiumKeyword.pushOn(text(" Accept"));
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

	public static void cerrarYAbrir() throws Exception {
		AppiumKeyword.closeApp();
		AppiumKeyword.launchApp();
		System.out.println(DriverManager.getAndroidDriver().getContextHandles());
		AppiumKeyword.changeContext("WEBVIEW_io.ionic.starter");
	}

	public static void noRecuerdaUsuario() throws Exception {
		String classEmail  = AppiumKeyword.getProperty(inputValid("Email"), "class");
		String classPassword  = AppiumKeyword.getProperty(inputValid("Password"), "class");

		if(!classEmail.contains("ion-valid") && !classPassword.contains("ion-valid")){
			throw new Exception("Esta recordando el usuario");
		}
	}
	

}
