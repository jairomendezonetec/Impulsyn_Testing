package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;
import framework.DriverManager;
import framework.Keywords;
import io.cucumber.datatable.DataTable;

public class Home_P extends General_P {

    public static String[] buttonTabText(String value) {
        String[] object = {"xpath", "//ion-tab-button//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    public static void isAt() throws Exception {
    	if(DriverManager.getGlobals().DRIVER.contains("ios")) {
			AppiumKeyword.changeContext("NATIVE_APP");
			if(Keywords.exists(name("Allow"), 3))
				AppiumKeyword.pushOn(name("Allow"));
			AppiumKeyword.changeContext("WEBVIEW");
    	}
        AppiumKeyword.verify(buttonTabText("Home"), 10);
    }

    public static void backAt(String appType) throws Exception {
        while (!AppiumKeyword.exists(buttonTabText("Home"), 1)) {
            AppiumKeyword.pushOn(Networking_P.volverButton(appType));
            AppiumKeyword.verify(buttonTabText("Home"), 10);
        }
    }

    public static void accessTo(String option) throws Exception {
    	Home_P.isAt();
        List<String> optionList = new ArrayList<String>();
        optionList.add(option);

        List<List<String>> data = new ArrayList<List<String>>();
        data.add(optionList);
        verifyAndAccess(data, true);
    }

    public static void verifyScreen(DataTable table) throws Exception {
        List<List<String>> data = table.asLists();
        verifyAndAccess(data, false);

    }

    public static void verifyAndAccess(List<List<String>> data, boolean access) throws Exception {
        String[] selector = null;

        AppiumKeyword.waitToBePresent(buttonTabText("Home"), 30);

        System.out.println(data);
        for (int i = 0; i < data.size(); i++) {
            String key = data.get(i).get(0);

            switch (key) {
                case "Home":
                case "Networking":
                case "Opportunities":
                case "Notifications":
                case "Academics":
                    selector = buttonTabText(key);
                    break;
                case "Search":
                    selector = ariaLabel("search");
                    break;
                case "Message":
                    selector = ariaLabel("mail outline");
                    break;
                case "Menu":
                    //ELIMINAR DESPUES DE ARREGLARLO CON EL SPINNER
                    AppiumKeyword.waitSec(2);
                    selector = ariaLabel("menu outline");
                    break;
                default:
                    throw new Error(key + " is not valid option");
            }
            AppiumKeyword.verify(selector, 1);
        }

        if (access) {
            AppiumKeyword.waitToBeClickable(selector, 10);
            AppiumKeyword.pushOn(selector);
            waitToSpinner();
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
